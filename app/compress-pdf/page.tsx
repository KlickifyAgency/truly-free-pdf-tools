import type { Metadata } from "next"
import CompressPDFTool from "@/components/tools/CompressPDFTool"
import AdSlot from "@/components/ads/AdSlot"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Compress PDF Free — No Signup, No Watermark, No Limit | TrulyFree Tools",
  description: "Reduce PDF file size without losing quality. Runs entirely in your browser — your files never leave your device. No watermarks. No email. No daily limits.",
  alternates: { canonical: "https://trulyfreetools.com/compress-pdf" },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Compressor — TrulyFree Tools",
  "url": "https://trulyfreetools.com/compress-pdf",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Compress PDF files for free in your browser. No file uploads, no account, no daily limits. Runs two compression passes and delivers the smaller result.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does compressing a PDF reduce text quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No — and this surprises a lot of people. Text in PDFs isn't stored as an image. It's stored as vector data, which means it's resolution-independent. Compression doesn't touch it. Your text comes out exactly as sharp as it went in. The only thing that can lose quality is embedded images, and even then, only if you choose the High compression setting." }
    },
    {
      "@type": "Question",
      "name": "Why did my compressed PDF end up larger than the original?",
      "acceptedAnswer": { "@type": "Answer", "text": "If your PDF was made by Word, Google Docs, or a modern version of Acrobat, it's probably already well-optimized internally. There's not much left to squeeze. When that happens, both compression passes come back bigger than the original — and the tool tells you that honestly instead of handing you a larger file and calling it compressed." }
    },
    {
      "@type": "Question",
      "name": "Is there a file size limit for compression?",
      "acceptedAnswer": { "@type": "Answer", "text": "No server limit, because there's no server. The ceiling is whatever your device's RAM can handle — which for most modern laptops and desktops means files well above 100MB are fine. If you're compressing a 300-page scanned archive, use Chrome or Edge on a desktop. Mobile browsers have tighter memory budgets." }
    },
    {
      "@type": "Question",
      "name": "How do I compress a PDF on Mac without software?",
      "acceptedAnswer": { "@type": "Answer", "text": "Open this page in Safari or Chrome on your Mac, upload the PDF, and download the compressed result. No software installation needed. Alternatively, macOS Preview has a built-in Quartz filter, but it often produces poor results. Browser-based compression is more reliable." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to compress a PDF that contains sensitive information?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The file processing happens entirely inside your browser tab — it never touches a network connection. You could disconnect your WiFi after the page loads and the compression would still work perfectly. That's because it's not communicating with anything. It's just your computer, running the compression locally." }
    },
    {
      "@type": "Question",
      "name": "How much can a PDF be compressed?",
      "acceptedAnswer": { "@type": "Answer", "text": "Text-only PDFs typically compress 20–40% through structural optimization. Image-heavy PDFs and scanned documents can compress 60–90% when images are resampled. PDFs already compressed aggressively by the source application may compress less than 10%." }
    },
  ]
}

export default function CompressPDFPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc", padding: "60px 24px 80px", fontFamily: "Inter, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(0,88,195,0.08)", color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, marginBottom: 14 }}>
            PDF Compressor
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Compress PDF Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6, letterSpacing: "-0.02em" }}>
            Reduce PDF file size without losing quality. No watermarks. No email. No limits.
          </p>
        </div>

        <div style={{ marginBottom: 32 }}>
          <AdSlot slot="6508089281" format="leaderboard" />
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "flex-start", marginBottom: 64 }}>
          <div style={{ position: "sticky", top: 80 }}>
            <AdSlot slot="8942680933" format="rectangle" />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <CompressPDFTool />
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e5e9eb", paddingTop: 56 }}>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 20 }}>
              How to compress a PDF — step by step
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["Upload your PDF", "Click the upload area or drag your PDF file directly onto it. Your file is read into browser memory — no upload to any server occurs."],
                ["Choose compression level", "Select Standard for most documents, or High for maximum size reduction on image-heavy PDFs. Standard is lossless for text; High resamples embedded images."],
                ["Click Compress PDF", "The tool runs two compression passes in parallel: a structural pass that rebuilds internal PDF architecture, and an image pass that resamples embedded images. The smaller result is delivered."],
                ["Download the result", "Click the download button to save the compressed file. If compression produced no reduction — common with already-optimized PDFs — the tool reports this rather than delivering a larger file."],
              ].map(([title, body], i) => (
                <div key={i} style={{ display: "flex", gap: 20, background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 4px 12px rgba(24,28,30,0.05)" }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#0058c3", letterSpacing: "0.04em", minWidth: 24, paddingTop: 1 }}>0{i + 1}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.02em", marginBottom: 4 }}>{title}</p>
                    <p style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.65, letterSpacing: "-0.01em", margin: 0 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "linear-gradient(135deg, rgba(0,88,195,0.05), rgba(0,112,243,0.05))", borderRadius: 8, padding: "28px 32px", marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Why your files never leave your browser
            </h2>
            <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", marginBottom: 12 }}>
              Here's what actually happens when you use Smallpdf or iLovePDF: your file leaves your computer, travels across the internet to a server you've never heard of, gets processed there, and comes back. For a flyer or a school report — fine. For a contract, a tax return, or anything with real names and signatures on it — that's a different conversation.
            </p>
            <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>
              TrulyFreeTools uses WebAssembly — the same compiled runtime that powers video editors and design tools in the browser — to run the entire compression on your machine. Your file loads into browser memory. It gets processed there. It downloads back to you. We never see it. When you close the tab, it's gone.
            </p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 20 }}>
              Frequently asked questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Does compressing a PDF reduce text quality?", "No — and this surprises a lot of people. Text in PDFs isn't stored as an image. It's stored as vector data, which means it's resolution-independent. Compression doesn't touch it. Your text comes out exactly as sharp as it went in. The only thing that can lose quality is embedded images, and even then, only if you choose the High compression setting."],
                ["Why did my compressed PDF end up larger than the original?", "PDFs generated by modern apps like Word, Google Docs, or Adobe Acrobat are already well-optimized. If both compression passes produce a file larger than the original, the tool reports no reduction rather than delivering a bloated result."],
                ["Is there a file size limit?", "No server-imposed limit — processing runs entirely in your browser. The practical limit is your device memory. Most devices handle up to 200MB without issue. For very large files, use Chrome or Edge on a desktop."],
                ["How do I compress a PDF on Mac without installing software?", "Upload the PDF on this page in any browser. No installation needed. macOS Preview has a built-in Quartz filter but produces inconsistent results. Browser-based compression is more reliable."],
                ["Is it safe to compress a PDF with sensitive information?", "Yes. The PDF never leaves your device. It is loaded into local browser memory, compressed using WebAssembly, and downloaded locally. No data is transmitted to any server at any point."],
                ["How much can a PDF be compressed?", "Text-only PDFs typically compress 20–40% through structural optimization. Image-heavy or scanned PDFs can compress 60–90%. PDFs already compressed by the source application may compress under 10%."],
              ].map(([q, a], i) => (
                <div key={i} style={{ background: "#ffffff", borderRadius: 8, padding: "20px 24px", boxShadow: "0px 4px 12px rgba(24,28,30,0.05)" }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.02em", marginBottom: 8 }}>{q}</p>
                  <p style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.65, letterSpacing: "-0.01em", margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#f1f4f6", borderRadius: 8, padding: "24px 28px" }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 12 }}>Related guides</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                ["/blog/compress-pdf-without-losing-quality", "How to Compress PDF Without Losing Quality"],
                ["/blog/pdf-file-size-reducer-guide", "Complete PDF Size Reducer Guide"],
                ["/blog/best-free-pdf-tools-2026", "Best Free PDF Tools 2026"],
                ["/blog/why-smallpdf-limits-free-users", "Why Smallpdf Limits Free Users"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ fontSize: 13, fontWeight: 600, color: "#0058c3", textDecoration: "none", padding: "6px 14px", borderRadius: 6, background: "#ffffff", letterSpacing: "-0.01em" }}>
                  {label} →
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
