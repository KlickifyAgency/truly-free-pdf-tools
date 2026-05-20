import type { Metadata } from "next"
import MergePDFTool from "@/components/tools/MergePDFTool"
import AdSlot from "@/components/ads/AdSlot"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Merge PDF Free — No Signup, No Watermark, No Limit | TrulyFree Tools",
  description: "Combine multiple PDFs into one file instantly. Runs in your browser — files never uploaded to any server. No watermarks. No email. No daily limits.",
  alternates: { canonical: "https://trulyfreetools.com/merge-pdf" },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Merger — TrulyFree Tools",
  "url": "https://trulyfreetools.com/merge-pdf",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Merge multiple PDF files into one document for free in your browser. No file uploads, no account, no watermarks, no daily limits.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I merge more than 2 PDFs at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can add as many PDFs as you need and rearrange them before merging. There is no limit on the number of files you can combine in a single session." }
    },
    {
      "@type": "Question",
      "name": "Does merging PDFs affect quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Merging is a structural operation — it combines page streams from multiple files into a single document without re-encoding or resampling any content. Images, text, and formatting in the source files are preserved exactly." }
    },
    {
      "@type": "Question",
      "name": "Is there a page limit when merging PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "No server-imposed page limit exists because processing runs in your browser. The practical limit is your device memory. Merging documents totaling several hundred pages works on any modern desktop device." }
    },
    {
      "@type": "Question",
      "name": "Will the merged PDF preserve hyperlinks and bookmarks?",
      "acceptedAnswer": { "@type": "Answer", "text": "Hyperlinks within individual pages are preserved in the merged document. Document-level bookmarks from source files are not automatically combined into a unified table of contents in the current version." }
    },
    {
      "@type": "Question",
      "name": "How do I merge PDFs on iPhone without an app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Open this page in Safari on your iPhone, tap to upload your PDFs, arrange them in order, and tap Merge. The merged file downloads to your Files app. No app installation required. iOS Files app also has a native merge option under Share > Create PDF." }
    },
    {
      "@type": "Question",
      "name": "Can I merge a password-protected PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "You need to remove the password first using the Remove PDF Password tool, then merge the unlocked files. Password-protected PDFs cannot be read by the merge engine until the encryption is removed." }
    },
  ]
}

export default function MergePDFPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc", padding: "60px 24px 80px", fontFamily: "Inter, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(0,88,195,0.08)", color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, marginBottom: 14 }}>
            PDF Merger
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Merge PDF Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6, letterSpacing: "-0.02em" }}>
            Combine multiple PDFs into one file instantly. No watermarks. No email. No limits.
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
            <MergePDFTool />
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e5e9eb", paddingTop: 56 }}>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 20 }}>
              How to merge PDF files — step by step
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["Add your PDF files", "Click the upload area to select multiple PDFs, or drag and drop them directly. You can add files from any folder on your device. Each file is read into local browser memory only."],
                ["Arrange the order", "Drag files into the sequence you want them to appear in the final document. The first file in the list becomes the first pages of the merged PDF."],
                ["Click Merge PDF", "The tool combines all pages from all files into a single PDF document. Page content, images, and links from each source file are preserved exactly as they appear in the originals."],
                ["Download the merged file", "Click the download button to save the combined PDF. The file is generated locally and downloaded directly — no server, no wait, no signup."],
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
              No upload. No watermark. No daily limit.
            </h2>
            <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", marginBottom: 12 }}>
              Smallpdf and iLovePDF both restrict free users to 2 merge operations per day and add watermarks to output unless you pay. TrulyFreeTools imposes no daily caps and adds no watermarks — the merged PDF you download is identical to what you would receive from a paid tool.
            </p>
            <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>
              All processing uses pdf-lib running in WebAssembly inside your browser. Your files travel no further than your own device. Merging a set of confidential contracts or financial reports is as private as opening them in a desktop application.
            </p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 20 }}>
              Frequently asked questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Can I merge more than 2 PDFs at once?", "Yes. Add as many files as needed and rearrange them before merging. No limit on the number of files per session."],
                ["Does merging PDFs affect quality?", "No. Merging combines page streams without re-encoding content. Images, text, and formatting in source files are preserved exactly."],
                ["Is there a page limit?", "No server-imposed limit. The practical constraint is device memory. Merging documents with several hundred pages works on any modern desktop."],
                ["Will hyperlinks and bookmarks be preserved?", "Hyperlinks within individual pages are preserved. Document-level bookmarks from source files are not automatically unified in the current version."],
                ["How do I merge PDFs on iPhone without an app?", "Open this page in Safari on your iPhone, upload your PDFs, arrange the order, and tap Merge. The merged file downloads to your Files app. No installation required."],
                ["Can I merge password-protected PDFs?", "Remove the password first using the Remove PDF Password tool on this site, then merge the unlocked files. Encrypted PDFs cannot be read by the merge engine."],
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
                ["/blog/how-to-merge-pdf-free", "How to Merge PDF Files Free"],
                ["/blog/best-free-pdf-tools-2026", "Best Free PDF Tools 2026"],
                ["/blog/smallpdf-alternatives", "Smallpdf Alternatives"],
                ["/merge-pdf-free-no-watermark", "Merge PDF — No Watermark"],
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
