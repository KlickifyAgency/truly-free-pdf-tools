import type { Metadata } from "next"
import PDFToWordTool from "@/components/tools/PDFToWordTool"
import AdSlot from "@/components/ads/AdSlot"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF to Word Free — No Email, No Upload, No Signup | TrulyFree Tools",
  description: "Convert text-based PDFs to editable Word documents free. Runs entirely in your browser — no file uploads, no email required, no watermarks.",
  alternates: { canonical: "https://trulyfreetools.com/pdf-to-word" },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF to Word Converter — TrulyFree Tools",
  "url": "https://trulyfreetools.com/pdf-to-word",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Convert text-based PDF files to editable Word documents for free in your browser. No file uploads, no account, no email, no watermarks.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does my converted PDF lose formatting when converted to Word?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF and Word use fundamentally different layout models. PDFs place each element at absolute coordinates; Word uses a flow-based layout with styles. Complex multi-column layouts, tables, and decorative elements are the most likely to shift during conversion. Documents created directly in Word and exported to PDF convert back with the highest fidelity." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a scanned PDF to Word?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Scanned PDFs are images of pages, not text data. Converting a scanned PDF requires OCR (optical character recognition), which this tool does not currently support. The tool works with text-based PDFs — those created digitally in Word, Google Docs, Adobe Acrobat, or any PDF export function." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a text-based PDF and a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "A text-based PDF stores text as actual characters that can be selected, copied, and searched. A scanned PDF is a photograph of a printed page — it looks like text but is stored as an image with no selectable characters. If you can select and copy text from the PDF in your viewer, it is text-based and will convert successfully." }
    },
    {
      "@type": "Question",
      "name": "Is the conversion free forever?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. There are no daily limits, no file count restrictions, no watermarks on the output, and no requirement to register. The tool is free because the site is supported by non-intrusive advertising." }
    },
    {
      "@type": "Question",
      "name": "Does the tool upload my PDF to a server?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Conversion runs entirely in your browser using JavaScript and WebAssembly. Your PDF is read into local memory and the Word document is generated locally. No file is transmitted to any server at any point." }
    },
    {
      "@type": "Question",
      "name": "What format does the output use?",
      "acceptedAnswer": { "@type": "Answer", "text": "The output is a .docx file compatible with Microsoft Word, Google Docs, LibreOffice, Apple Pages, and all major word processors. No special software is required to open it." }
    },
  ]
}

export default function PDFToWordPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc", padding: "60px 24px 80px", fontFamily: "Inter, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(0,88,195,0.08)", color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, marginBottom: 14 }}>
            PDF Converter
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            PDF to Word Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6, letterSpacing: "-0.02em" }}>
            Convert text-based PDFs to editable Word documents. No email. No upload. No watermarks.
          </p>
        </div>

        <div style={{ background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.3)", borderRadius: 8, padding: "14px 20px", marginBottom: 24, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "#92400e", letterSpacing: "-0.01em", margin: 0 }}>
            <strong>Works with text-based PDFs only.</strong> Scanned or image-based PDFs are not supported. If you can select text in your PDF viewer, it will convert successfully.
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
            <PDFToWordTool />
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e5e9eb", paddingTop: 56 }}>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 20 }}>
              How to convert PDF to Word — step by step
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["Verify your PDF is text-based", "Open the PDF in any viewer and try to select text with your cursor. If text highlights, the PDF is text-based and will convert successfully. If nothing selects, it is a scanned document and requires OCR software."],
                ["Upload your PDF", "Click the upload area or drag the PDF onto it. The file is read into local browser memory. No data is transmitted to any server."],
                ["Click Convert to Word", "The tool extracts text content, paragraph structure, and basic formatting from the PDF and builds a .docx file. Processing happens entirely in your browser using WebAssembly."],
                ["Download the .docx file", "Download the Word document and open it in Microsoft Word, Google Docs, LibreOffice, or any .docx-compatible editor. Review and adjust formatting as needed."],
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
              What to expect from PDF to Word conversion
            </h2>
            <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", marginBottom: 12 }}>
              PDF to Word conversion works best with documents that were originally created in a word processor and exported to PDF — resumes, reports, letters, and standard business documents. These convert with high text fidelity and reasonable formatting preservation.
            </p>
            <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>
              Complex layouts — multi-column magazines, heavily formatted brochures, PDFs with intricate table structures — will require formatting cleanup after conversion. This is expected with all PDF to Word tools, not a limitation specific to this one. No converter perfectly replicates absolute-positioned PDF layouts in Word's flow-based model.
            </p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 20 }}>
              Frequently asked questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Why does my converted PDF lose formatting?", "PDF and Word use different layout models. PDFs place elements at absolute coordinates; Word uses a flow-based layout. Complex columns, tables, and decorative elements are most likely to shift. Documents exported from Word to PDF and converted back achieve the highest fidelity."],
                ["Can I convert a scanned PDF to Word?", "No. Scanned PDFs are images of pages with no text data. This tool works with text-based PDFs. If you cannot select text in your PDF viewer, the document is scanned and requires OCR software."],
                ["What is the difference between text-based and scanned PDFs?", "Text-based PDFs store actual characters you can select and copy. Scanned PDFs are photographs of printed pages stored as images. If text highlights when you click it in a PDF viewer, the document is text-based."],
                ["Is the tool free forever?", "Yes. No daily limits, no file restrictions, no watermarks, no signup. Supported by non-intrusive advertising."],
                ["Does the tool upload my PDF?", "No. Conversion runs entirely in your browser. Your PDF is loaded into local memory and the Word document is generated locally. No file is transmitted to any server."],
                ["What format does the output use?", ".docx — compatible with Microsoft Word, Google Docs, LibreOffice, and Apple Pages. No special software required."],
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
                ["/blog/pdf-to-word-free-no-email", "How to Convert PDF to Word Free"],
                ["/pdf-to-word-free-no-email", "PDF to Word — No Email"],
                ["/blog/best-free-pdf-tools-2026", "Best Free PDF Tools 2026"],
                ["/compress-pdf", "Compress PDF Free"],
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
