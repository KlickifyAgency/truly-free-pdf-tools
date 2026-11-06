"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { PDFArray, PDFDocument, PDFName, PDFNumber, PDFRawStream, PDFRef, PDFStream, decodePDFRawStream } from "pdf-lib";

type CompressionLevel = "low" | "medium" | "high";
interface FileState { file: File; name: string; originalSize: number; }
interface ResultState { blob: Blob; compressedSize: number; originalSize: number; rasterized: boolean; }

const LEVELS: Record<CompressionLevel, { dpi: number; quality: number; label: string }> = {
  low:    { dpi: 150, quality: 0.85, label: "Low — best quality, moderate reduction" },
  medium: { dpi: 120, quality: 0.70, label: "Medium — balanced quality and size" },
  high:   { dpi: 96,  quality: 0.50, label: "High — smallest file, reduced quality" },
};

const FACTS = [
  "Your file never leaves this browser tab.",
  "Zero uploads. Zero servers. Zero risk.",
  "All processing runs on your device.",
  "When you close this tab, all data is gone.",
  "No account. No email. No trace.",
];

const ENCRYPTED_ERROR = "This PDF is password protected. Remove the password first, then compress it here.";
const MIN_IMAGE_BYTES = 10 * 1024;
const key = PDFName.of;
const RAW_FILTERS = ["FlateDecode", "LZWDecode", "ASCII85Decode", "ASCIIHexDecode", "RunLengthDecode"].map(key);

function colorComponents(cs: unknown): 1 | 3 | null {
  if (cs === key("DeviceRGB")) return 3;
  if (cs === key("DeviceGray")) return 1;
  if (cs instanceof PDFArray && cs.lookup(0) === key("ICCBased")) {
    const profile = cs.lookup(1);
    const n = profile instanceof PDFStream ? profile.dict.lookup(key("N")) : null;
    if (n instanceof PDFNumber && (n.asNumber() === 1 || n.asNumber() === 3)) return n.asNumber() as 1 | 3;
  }
  return null;
}

// shortcut: skips CMYK, Indexed, non-8-bit, color-key masks and predictor-encoded images, upgrade if real files stay too big.
function jpegCandidate(stream: PDFRawStream): { components: 1 | 3; isJpeg: boolean } | null {
  const { dict, contents } = stream;
  if (dict.lookup(key("Subtype")) !== key("Image") || contents.length < MIN_IMAGE_BYTES) return null;
  const bits = dict.lookup(key("BitsPerComponent"));
  if (!(bits instanceof PDFNumber) || bits.asNumber() !== 8) return null;
  if (dict.has(key("Decode")) || dict.has(key("DecodeParms")) || dict.lookup(key("Mask")) instanceof PDFArray) return null;
  // A matted soft mask must keep the exact size of its parent image.
  const softMask = dict.lookup(key("SMask"));
  if (softMask instanceof PDFStream && softMask.dict.has(key("Matte"))) return null;
  const components = colorComponents(dict.lookup(key("ColorSpace")));
  if (!components) return null;
  const filter = dict.lookup(key("Filter"));
  const filters = filter instanceof PDFArray ? filter.asArray().map(f => dict.context.lookup(f)) : filter ? [filter] : [];
  const isJpeg = filters.length === 1 && filters[0] === key("DCTDecode");
  if (!isJpeg && !filters.every(f => RAW_FILTERS.includes(f as PDFName))) return null;
  return { components, isJpeg };
}

function samplesToImageData(samples: Uint8Array, width: number, height: number, components: 1 | 3): ImageData {
  if (samples.length < width * height * components) throw new Error("Truncated image data");
  const rgba = new Uint8ClampedArray(width * height * 4);
  for (let px = 0, src = 0, dst = 0; px < width * height; px++, src += components, dst += 4) {
    rgba[dst] = samples[src];
    rgba[dst + 1] = samples[components === 3 ? src + 1 : src];
    rgba[dst + 2] = samples[components === 3 ? src + 2 : src];
    rgba[dst + 3] = 255;
  }
  return new ImageData(rgba, width, height);
}

// Re-encodes embedded images in place, so text, fonts, links and vector art stay untouched.
async function recompressImages(doc: PDFDocument, dpi: number, quality: number, onProgress: (done: number, total: number) => void) {
  const objects = doc.context.enumerateIndirectObjects();
  // Soft masks must stay single-channel, and JPEG from a canvas is always three-channel.
  const softMasks = new Set(objects.map(([, obj]) => obj instanceof PDFRawStream ? obj.dict.get(key("SMask")) : undefined));
  const images = objects.flatMap(([ref, obj]) => {
    if (!(obj instanceof PDFRawStream) || softMasks.has(ref)) return [];
    const candidate = jpegCandidate(obj);
    return candidate ? [{ ref, stream: obj, ...candidate }] : [];
  });
  // A full-page image needs no more pixels than the largest page side at the target dpi.
  const maxSide = (dpi / 72) * Math.max(...doc.getPages().flatMap(p => [p.getWidth(), p.getHeight()]));

  for (const [i, { ref, stream, components, isJpeg }] of images.entries()) {
    onProgress(i + 1, images.length);
    try {
      const { dict, contents } = stream;
      const width = (dict.lookup(key("Width")) as PDFNumber).asNumber();
      const height = (dict.lookup(key("Height")) as PDFNumber).asNumber();
      const source = isJpeg
        ? new Blob([contents as BlobPart], { type: "image/jpeg" })
        : samplesToImageData(decodePDFRawStream(stream).decode(), width, height, components);
      const bitmap = await createImageBitmap(source, { colorSpaceConversion: "none" });
      const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(bitmap.width * scale);
      canvas.height = Math.round(bitmap.height * scale);
      const ctx = canvas.getContext("2d")!;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      bitmap.close();
      const jpeg = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, "image/jpeg", quality));
      const [newWidth, newHeight] = [canvas.width, canvas.height];
      canvas.width = 0; canvas.height = 0;
      if (!jpeg || jpeg.size >= contents.length) continue;
      dict.set(key("Filter"), key("DCTDecode"));
      dict.set(key("Width"), PDFNumber.of(newWidth));
      dict.set(key("Height"), PDFNumber.of(newHeight));
      if (components === 1) dict.set(key("ColorSpace"), key("DeviceRGB"));
      doc.context.assign(ref as PDFRef, PDFRawStream.of(dict, new Uint8Array(await jpeg.arrayBuffer())));
    } catch {
      // Keep this image as it is. One bad image must not fail the whole file.
    }
  }
}

function formatBytes(b: number): string {
  if (b < 1024) return b + " B";
  if (b < 1048576) return (b / 1024).toFixed(1) + " KB";
  return (b / 1048576).toFixed(2) + " MB";
}

function reductionPct(o: number, c: number): string {
  return (((o - c) / o) * 100).toFixed(1) + "%";
}

async function renderPageToJpeg(page: any, dpi: number, quality: number): Promise<Uint8Array | null> {
  try {
    const scale = dpi / 72;
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    const ctx = canvas.getContext("2d");
    const task = page.render({ canvasContext: ctx, viewport });
    // Si el render falla o pasa de 8s, NO devolver el canvas a medio dibujar
    // (salia una pagina en blanco o incompleta en el PDF final).
    const rendered = await Promise.race([
      task.promise.then(() => true, () => false),
      new Promise<boolean>(r => setTimeout(() => r(false), 8000)),
    ]);
    if (!rendered) return null;
    return await new Promise(resolve => {
      canvas.toBlob(blob => {
        canvas.width = 0; canvas.height = 0;
        if (!blob) { resolve(null); return; }
        blob.arrayBuffer().then(buf => resolve(new Uint8Array(buf))).catch(() => resolve(null));
      }, "image/jpeg", quality);
    });
  } catch { return null; }
}

function ScanLoader({ realProgress, currentPage, totalPages, unit }: { realProgress: number; currentPage: number; totalPages: number; unit: string }) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [factIndex, setFactIndex] = useState(0);
  const [factVisible, setFactVisible] = useState(true);
  const displayRef = useRef(0);
  const targetRef = useRef(realProgress);

  useEffect(() => { targetRef.current = realProgress; }, [realProgress]);

  useEffect(() => {
    const timer = setInterval(() => {
      const current = displayRef.current;
      const target = targetRef.current;
      const diff = target - current;
      const step = diff > 0 ? Math.max(0.4, diff * 0.06) : 0;
      const next = Math.min(current + step, 100);
      displayRef.current = next;
      setDisplayProgress(Math.round(next));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactVisible(false);
      setTimeout(() => { setFactIndex(i => (i + 1) % FACTS.length); setFactVisible(true); }, 350);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const lines = [
    { width: "82%", top: 22 }, { width: "60%", top: 38 }, { width: "75%", top: 54 },
    { width: "50%", top: 70 }, { width: "88%", top: 86 }, { width: "45%", top: 102 },
    { width: "70%", top: 118 }, { width: "63%", top: 134 }, { width: "80%", top: 150 }, { width: "55%", top: 166 },
  ];

  const scanY = (displayProgress / 100) * 195;

  return (
    <div style={{ padding: "32px 28px 28px", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <style>{`
        @keyframes scanGlow {
          0%, 100% { opacity: 0.7; box-shadow: 0 0 6px rgba(0,112,243,0.4); }
          50% { opacity: 1; box-shadow: 0 0 12px rgba(0,112,243,0.8); }
        }
        @keyframes cornerPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      <div style={{ position: "relative", width: 160, height: 210 }}>
        <div style={{
          width: "100%", height: "100%",
          background: "#ffffff", borderRadius: 6,
          border: "1.5px solid #e5e9eb", overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,88,195,0.1)",
          position: "relative",
        }}>
          {lines.map((line, i) => {
            const lineCenter = line.top + 3.5;
            const isDone = lineCenter < scanY;
            return (
              <div key={i} style={{
                position: "absolute", top: line.top, left: 16,
                width: line.width, height: 7, borderRadius: 2,
                background: isDone ? "rgba(0,88,195,0.3)" : "#ececec",
                transition: "background 0.2s ease",
              }} />
            );
          })}

          <div style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: `${(displayProgress / 100) * 100}%`,
            background: "linear-gradient(180deg, rgba(0,88,195,0.03) 0%, rgba(0,112,243,0.07) 100%)",
            transition: "height 0.08s linear",
          }} />

          <div style={{
            position: "absolute",
            top: `${(displayProgress / 100) * 195}px`,
            left: 0, right: 0, height: 2,
            background: "rgba(0,112,243,0.95)",
            animation: "scanGlow 1.2s ease-in-out infinite",
            transition: "top 0.08s linear",
            zIndex: 3,
          }} />

          <div style={{
            position: "absolute",
            top: `${(displayProgress / 100) * 195}px`,
            left: 0, right: 0, height: 20,
            background: "linear-gradient(180deg, rgba(0,112,243,0.12) 0%, transparent 100%)",
            transition: "top 0.08s linear",
            zIndex: 2,
          }} />

          <div style={{ position: "absolute", top: 0, right: 0, width: 0, height: 0, borderStyle: "solid", borderWidth: "0 18px 18px 0", borderColor: "transparent #f1f4f6 transparent transparent", zIndex: 4 }} />
        </div>

        {[
          { top: -6, left: -6, borderTop: true, borderLeft: true, br: "2px 0 0 0" },
          { top: -6, right: -6, borderTop: true, borderRight: true, br: "0 2px 0 0" },
          { bottom: -6, left: -6, borderBottom: true, borderLeft: true, br: "0 0 0 2px" },
          { bottom: -6, right: -6, borderBottom: true, borderRight: true, br: "0 0 2px 0" },
        ].map((c, i) => (
          <div key={i} style={{
            position: "absolute",
            top: c.top, left: (c as any).left, right: (c as any).right, bottom: c.bottom,
            width: 14, height: 14,
            borderTop: c.borderTop ? "2px solid #0058c3" : undefined,
            borderBottom: c.borderBottom ? "2px solid #0058c3" : undefined,
            borderLeft: c.borderLeft ? "2px solid #0058c3" : undefined,
            borderRight: c.borderRight ? "2px solid #0058c3" : undefined,
            borderRadius: c.br,
            animation: "cornerPulse 1.8s ease-in-out infinite",
            animationDelay: `${i * 0.15}s`,
          }} />
        ))}
      </div>

      <div style={{ width: "100%", maxWidth: 260 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase" }}>
            {totalPages > 0 ? `${unit} ${Math.min(currentPage, totalPages)} of ${totalPages}` : "Initializing..."}
          </span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0058c3" }}>{displayProgress}%</span>
        </div>
        <div style={{ background: "#e5e9eb", borderRadius: 3, height: 3, overflow: "hidden" }}>
          <div style={{
            background: displayProgress > 90 ? "linear-gradient(90deg, #0058c3, #16a34a)" : "linear-gradient(90deg, #0058c3, #0070f3)",
            height: 3, borderRadius: 3,
            width: `${displayProgress}%`,
            transition: "width 0.08s linear, background 0.5s ease",
          }} />
        </div>
      </div>

      <p style={{
        fontSize: 12, fontWeight: 600, color: "#0058c3",
        letterSpacing: "-0.01em", textAlign: "center",
        opacity: factVisible ? 1 : 0,
        transition: "opacity 0.35s ease",
        minHeight: 18, margin: 0,
      }}>
        {FACTS[factIndex]}
      </p>
    </div>
  );
}

export default function CompressPDFTool() {
  const [fileState, setFileState] = useState<FileState | null>(null);
  const [level, setLevel] = useState<CompressionLevel>("medium");
  const [imageMode, setImageMode] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [realProgress, setRealProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [result, setResult] = useState<ResultState | null>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (file.type !== "application/pdf") { setError("Only PDF files are supported."); return; }
    setError(null); setResult(null);
    setFileState({ file, name: file.name, originalSize: file.size });
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault(); setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const compress = async () => {
    if (!fileState) return;
    setProcessing(true); setRealProgress(5); setCurrentPage(0); setTotalPages(0); setError(null);
    try {
      const { dpi, quality } = LEVELS[level];
      const arrayBuffer = await fileState.file.arrayBuffer();

      // /Encrypt lives in the trailer or the xref stream dict, which are never compressed.
      if (/\/Encrypt\s*(\d|<<)/.test(new TextDecoder("latin1").decode(new Uint8Array(arrayBuffer)))) {
        setError(ENCRYPTED_ERROR);
        return;
      }

      const pdfDoc = await PDFDocument.load(arrayBuffer);
      if (level === "medium" || level === "high") {
        pdfDoc.setTitle(""); pdfDoc.setAuthor(""); pdfDoc.setSubject("");
        pdfDoc.setKeywords([]); pdfDoc.setProducer(""); pdfDoc.setCreator("");
      }
      if (level === "high") {
        pdfDoc.setCreationDate(new Date(0)); pdfDoc.setModificationDate(new Date(0));
      }
      if (!imageMode) {
        await recompressImages(pdfDoc, dpi, quality, (done, total) => {
          setTotalPages(total);
          setCurrentPage(done);
          setRealProgress(15 + Math.round((done / total) * 80));
        });
      }
      const structBytes = await pdfDoc.save({ useObjectStreams: true, addDefaultPage: false, updateFieldAppearances: false });
      setRealProgress(imageMode ? 15 : 95);

      let bestBytes: Uint8Array = structBytes;
      let bestSize: number = structBytes.byteLength;
      let rasterized = false;

      if (imageMode) try {
        const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/legacy/build/pdf.worker.mjs", import.meta.url).toString();
        const originalWarn = console.warn;
        console.warn = () => {};

        const pdfJsDoc = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer), verbosity: 0 }).promise;
        const numPages = pdfJsDoc.numPages;
        // Con 5, cualquier escaneo de mas de 5 paginas salia sin comprimir.
        const MAX_CANVAS_PAGES = 100;
        const pagesToRender = Math.min(numPages, MAX_CANVAS_PAGES);
        setTotalPages(pagesToRender);

        const outDoc = await PDFDocument.create();
        let pagesRendered = 0;

        for (let i = 1; i <= pagesToRender; i++) {
          setCurrentPage(i);
          setRealProgress(15 + Math.round((i / pagesToRender) * 80));
          try {
            const page = await pdfJsDoc.getPage(i);
            const jpegBytes = await renderPageToJpeg(page, dpi, quality);
            if (jpegBytes) {
              const jpegImage = await outDoc.embedJpg(jpegBytes);
              // Page size in points, not image pixels, or the page grows with dpi.
              const { width, height } = page.getViewport({ scale: 1 });
              const outPage = outDoc.addPage([width, height]);
              outPage.drawImage(jpegImage, { x: 0, y: 0, width, height });
              pagesRendered++;
            }
          } catch {}
        }

        console.warn = originalWarn;

        // Solo si cubre TODAS las paginas: con numPages > MAX_CANVAS_PAGES
        // el resultado rasterizado traia solo las primeras 5 y se entregaba
        // igual (PDF de 8 paginas -> 5, verificado en produccion 2026-09-18).
        if (pagesRendered === numPages) {
          const canvasBytes = await outDoc.save({ useObjectStreams: true });
          if (canvasBytes.byteLength < bestSize) { bestBytes = canvasBytes; bestSize = canvasBytes.byteLength; rasterized = true; }
        }
      } catch {}

      setRealProgress(100);

      if (bestSize >= fileState.originalSize) {
        setError(imageMode
          ? "This PDF is already fully optimized and cannot be reduced further."
          : "This PDF has little left to compress while keeping its text selectable. Maximum compression (image mode) may reduce it further.");
        return;
      }

      const blob = new Blob([bestBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      setResult({ blob, compressedSize: blob.size, originalSize: fileState.originalSize, rasterized });
    } catch {
      setError("Could not compress this PDF. It may be corrupted or unsupported.");
    } finally {
      setProcessing(false); setRealProgress(0); setCurrentPage(0); setTotalPages(0);
    }
  };

  const download = () => {
    if (!result || !fileState) return;
    const url = URL.createObjectURL(result.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileState.name.replace(".pdf", "-compressed.pdf");
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setFileState(null); setResult(null); setError(null); setImageMode(false);
    setRealProgress(0); setCurrentPage(0); setTotalPages(0);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
      {!fileState && (
        <div
          onDrop={onDrop}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer rounded-md transition-all duration-150"
          style={{ background: dragging ? "rgba(0,88,195,0.06)" : "#ffffff", border: "2px dashed " + (dragging ? "#0058c3" : "rgba(74,85,104,0.25)"), padding: "56px 32px", textAlign: "center" }}
        >
          <input ref={inputRef} type="file" accept="application/pdf" onChange={onInputChange} className="hidden" />
          <div style={{ marginBottom: 12 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ margin: "0 auto" }}>
              <rect width="40" height="40" rx="8" fill="rgba(0,88,195,0.08)"/>
              <path d="M20 12v12M14 18l6-6 6 6" stroke="#0058c3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 28h16" stroke="#0058c3" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Drop your PDF here or click to upload</p>
          <p style={{ color: "#718096", fontSize: 13 }}>PDF files only</p>
        </div>
      )}

      {error && (
        <div style={{ background: "rgba(220,38,38,0.06)", borderRadius: 8, padding: "12px 16px" }}>
          <p style={{ color: "#dc2626", fontSize: 13, fontWeight: 500 }}>{error}</p>
          {error === ENCRYPTED_ERROR && <a href="/remove-pdf-password" style={{ display: "inline-block", color: "#0058c3", fontSize: 12, fontWeight: 600, padding: "8px 16px 0 0" }}>Remove PDF password</a>}
          <button onClick={reset} style={{ color: "#0058c3", fontSize: 12, background: "none", border: "none", cursor: "pointer", padding: "8px 0 0", fontWeight: 600 }}>Try another PDF</button>
        </div>
      )}

      {fileState && !result && !error && (
        <div style={{ background: "#ffffff", borderRadius: 8, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)", overflow: "hidden" }}>
          {processing ? (
            <ScanLoader realProgress={realProgress} currentPage={currentPage} totalPages={totalPages} unit={imageMode ? "Page" : "Image"} />
          ) : (
            <div style={{ padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ background: "rgba(0,88,195,0.08)", borderRadius: 6, padding: "6px 10px" }}>
                    <span style={{ color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>PDF</span>
                  </div>
                  <div>
                    <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 14, marginBottom: 2 }}>{fileState.name}</p>
                    <p style={{ color: "#718096", fontSize: 12 }}>{formatBytes(fileState.originalSize)}</p>
                  </div>
                </div>
                <button onClick={reset} style={{ color: "#718096", fontSize: 12, background: "none", border: "none", cursor: "pointer", padding: 4 }}>Remove</button>
              </div>

              <div style={{ marginBottom: 20 }}>
                <p style={{ color: "#4a5568", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>Compression Level</p>
                <div style={{ display: "flex", gap: 8 }}>
                  {(["low", "medium", "high"] as CompressionLevel[]).map(l => (
                    <button key={l} onClick={() => setLevel(l)} style={{ flex: 1, padding: "10px 8px", borderRadius: 6, border: level === l ? "1.5px solid #0058c3" : "1.5px solid rgba(74,85,104,0.15)", background: level === l ? "rgba(0,88,195,0.06)" : "#f7fafc", color: level === l ? "#0058c3" : "#4a5568", fontWeight: level === l ? 700 : 500, fontSize: 12, cursor: "pointer", textAlign: "center" }}>
                      {l.charAt(0).toUpperCase() + l.slice(1)}
                    </button>
                  ))}
                </div>
                <p style={{ color: "#718096", fontSize: 12, marginTop: 8 }}>{LEVELS[level].label}</p>
              </div>

              <label style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 20, cursor: "pointer" }}>
                <input type="checkbox" checked={imageMode} onChange={e => setImageMode(e.target.checked)} style={{ marginTop: 2 }} />
                <span style={{ color: "#4a5568", fontSize: 12 }}><strong>Maximum compression (image mode).</strong> Pages become images: text can no longer be selected or searched, and links stop working.</span>
              </label>

              <button onClick={compress} className="btn-primary" style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: "pointer" }}>
                Compress PDF
              </button>
            </div>
          )}
        </div>
      )}

      {result && fileState && (
        <div style={{ background: "#ffffff", borderRadius: 8, padding: 24, boxShadow: "0px 8px 24px rgba(24,28,30,0.06)", animation: "popIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }}>
          <style>{`@keyframes popIn { from { opacity: 0; transform: scale(0.96) translateY(6px); } to { opacity: 1; transform: scale(1) translateY(0); } }`}</style>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <div style={{ background: "rgba(22,163,74,0.08)", borderRadius: 6, padding: "6px 10px" }}>
              <span style={{ color: "#16a34a", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>DONE</span>
            </div>
            <p style={{ color: "#181c1e", fontWeight: 600, fontSize: 14 }}>Compression complete</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 20 }}>
            {[{ label: "ORIGINAL", value: formatBytes(result.originalSize) }, { label: "COMPRESSED", value: formatBytes(result.compressedSize) }, { label: "SAVED", value: reductionPct(result.originalSize, result.compressedSize) }].map(({ label, value }) => (
              <div key={label} style={{ background: "#f7fafc", borderRadius: 8, padding: "14px 12px", textAlign: "center" }}>
                <p style={{ color: "#718096", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{label}</p>
                <p style={{ color: "#181c1e", fontSize: 16, fontWeight: 700 }}>{value}</p>
              </div>
            ))}
          </div>

          <p style={{ color: "#4a5568", fontSize: 13, marginBottom: 16 }}>
            {result.rasterized ? "Image mode: pages are now images, so text can no longer be selected or searched." : "Text stays selectable and searchable."}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(0,88,195,0.08)", borderRadius: 4, padding: "5px 10px" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1L2 3v3c0 2.5 1.67 4.5 4 5 2.33-.5 4-2.5 4-5V3L6 1z" fill="#0058c3"/></svg>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#0058c3", letterSpacing: "0.04em" }}>Processed Locally</span>
            </div>
          </div>

          <button onClick={download} className="btn-primary" style={{ width: "100%", padding: "14px 0", fontSize: 15, border: "none", cursor: "pointer", marginBottom: 12 }}>
            Download Compressed PDF
          </button>
          <button onClick={reset} className="btn-secondary" style={{ width: "100%", padding: "12px 0", fontSize: 14, cursor: "pointer" }}>
            Compress another PDF
          </button>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1.5C3.74 1.5 1.5 3.74 1.5 6.5S3.74 11.5 6.5 11.5 11.5 9.26 11.5 6.5 9.26 1.5 6.5 1.5zm0 4.5a1 1 0 110-2 1 1 0 010 2zm1 3H5.5V7h2v2z" fill="#718096"/></svg>
        <p style={{ color: "#718096", fontSize: 12 }}>Your file never leaves your browser. Processed locally.</p>
      </div>
    </div>
  );
}
