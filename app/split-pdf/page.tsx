import type { Metadata } from "next"
import SplitPDFTool from "@/components/tools/SplitPDFTool"
import AdSlot from "@/components/ads/AdSlot"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Split PDF Free — Extract Pages Without Uploading | TrulyFree Tools",
  description: "Split a PDF into separate files or extract specific pages. Runs entirely in your browser — no file uploads, no watermarks, no daily limits.",
  alternates: { canonical: "https://trulyfreetools.com/split-pdf" },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Splitter — TrulyFree Tools",
  "url": "https://trulyfreetools.com/split-pdf",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Split PDF files into separate documents or extract individual pages for free in your browser. No file uploads, no account, no watermarks.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I extract just one page from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Enter a single page number in the range field and the tool extracts just that page as a standalone PDF. You can also extract non-consecutive pages by specifying multiple ranges." }
    },
    {
      "@type": "Question",
      "name": "Does splitting a PDF reduce image or text quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Splitting is a structural operation that separates pages without re-encoding any content. Images, fonts, and text in each extracted page are identical to the originals." }
    },
    {
      "@type": "Question",
      "name": "How do I split a PDF into individual pages?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload the PDF and select the option to split into all individual pages. The tool extracts each page as a separate file. For large documents you can also specify ranges — for example pages 1-5, pages 6-10 — to split into sections." }
    },
    {
      "@type": "Question",
      "name": "How do I remove pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Specify the page ranges you want to keep. For example, to remove pages 3-5 from a 10-page PDF, extract pages 1-2 and 6-10 as separate files, then merge them using the Merge PDF tool on this site." }
    },
    {
      "@type": "Question",
      "name": "Is there a limit to how many pages I can split?",
      "acceptedAnswer": { "@type": "Answer", "text": "No server-imposed limit. All processing runs in your browser. The practical limit is your device memory. Splitting documents with hundreds of pages works on modern desktop and mobile devices." }
    },
    {
      "@type": "Question",
      "name": "Can I split a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open this page in any mobile browser, upload the PDF, specify the pages to extract, and download the result. The tool works on iOS Safari, Android Chrome, and all major mobile browsers." }
    },
  ]
}

export default function SplitPDFPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc", padding: "60px 24px 80px", fontFamily: "Inter, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(0,88,195,0.08)", color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, marginBottom: 14 }}>
            PDF Splitter
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Split PDF Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6, letterSpacing: "-0.02em" }}>
            Extract pages or split a PDF into separate files. No watermarks. No email. No limits.
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
            <SplitPDFTool />
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e5e9eb", paddingTop: 56 }}>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 20 }}>
              How to split a PDF — step by step
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["Upload your PDF", "Click the upload area or drag your PDF onto it. The file is read into local browser memory. Nothing is transmitted to any server."],
                ["Specify the pages to extract", "Enter a page range like 1-5, individual page numbers like 2, 4, 7, or choose to split into all individual pages. The tool shows the page count before processing."],
                ["Click Split PDF", "The tool extracts the specified pages into one or more PDF files. Each output file contains only the requested pages with content identical to the original."],
                ["Download the result", "Download each extracted file. If you split into individual pages, each page is a separate download. No signup, no email, no waiting."],
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

          <div style={{ background: "#f0f4ff", borderLeft: "4px solid #2563eb", borderRadius: 8, padding: "28px 32px", marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.02em", marginBottom: 12 }}>
              Split PDFs without uploading to any server
            </h2>
            <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", marginBottom: 12 }}>
              Most PDF splitters work like this: your file goes up to a cloud server, gets cut apart there, and the pieces come back down to you. You've probably never stopped to think about that — most people don't. But if you're splitting a legal agreement, a medical record, or anything with private information, that upload matters.
            </p>
            <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>
              TrulyFreeTools does the splitting directly in your browser using WebAssembly. The file loads into local memory, gets cut there, and downloads to your device. It never hits a server. Not even for a second.
            </p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 20 }}>
              Frequently asked questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Can I extract just one page from a PDF?", "Yes. Enter a single page number in the range field. You can also specify multiple non-consecutive pages."],
                ["Does splitting affect quality?", "No. Splitting separates pages without re-encoding content. Images, fonts, and text in each extracted page are identical to the originals."],
                ["How do I split a PDF into individual pages?", "Upload the PDF and select the option to extract all individual pages. Each page is delivered as a separate PDF file."],
                ["How do I remove specific pages from a PDF?", "Extract the pages you want to keep, then merge the resulting files with the Merge PDF tool. To remove pages 3-5 from a 10-page document: extract pages 1-2 and 6-10, then merge them."],
                ["Is there a page limit?", "No server-imposed limit. Processing runs in your browser. Splitting documents with hundreds of pages works on modern devices."],
                ["Can I split a PDF on my phone?", "Yes. Open this page in any mobile browser, upload the PDF, set your page range, and download the result. Works on iOS Safari and Android Chrome."],
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
                ["/blog/how-to-split-pdf-free", "How to Split a PDF Free"],
                ["/blog/best-free-pdf-tools-2026", "Best Free PDF Tools 2026"],
                ["/merge-pdf", "Merge PDF Free"],
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
