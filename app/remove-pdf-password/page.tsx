import type { Metadata } from "next"
import RemovePasswordTool from "@/components/tools/RemovePasswordTool"
import AdSlot from "@/components/ads/AdSlot"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Remove PDF Password Free — Unlock PDF Without Uploading | TrulyFree Tools",
  description: "Remove a password from a PDF you own. Runs entirely in your browser — no file uploads, no subscription, no daily limits.",
  alternates: { canonical: "https://trulyfreetools.com/remove-pdf-password" },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Remove PDF Password — TrulyFree Tools",
  "url": "https://trulyfreetools.com/remove-pdf-password",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Remove passwords from PDF files you own for free in your browser. No file uploads, no account, no subscription required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I remove a PDF password I forgot?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. This tool removes the password restriction from PDFs where you already know the correct password and want to save an unlocked version. It does not crack or bypass unknown passwords — that would be a security vulnerability, not a feature." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a user password and an owner password?",
      "acceptedAnswer": { "@type": "Answer", "text": "A user password (also called open password) prevents opening the PDF at all — you need it to view the document. An owner password (also called permissions password) allows viewing but restricts editing, printing, or copying. This tool can remove both types when the correct password is provided." }
    },
    {
      "@type": "Question",
      "name": "Is it legal to remove a PDF password?",
      "acceptedAnswer": { "@type": "Answer", "text": "Removing a password from a PDF you own or are authorized to modify is legal. Circumventing password protection on documents you do not own or are not authorized to edit may violate copyright law or licensing agreements. Use this tool only on documents you own or have explicit permission to modify." }
    },
    {
      "@type": "Question",
      "name": "Why does the tool say my PDF has no password?",
      "acceptedAnswer": { "@type": "Answer", "text": "Some PDFs have restrictions on editing or printing without requiring a password to open. These are permissions-restricted PDFs with an empty or blank owner password. If the tool reports no password found, the PDF may already be unlocked for viewing even if it appears restricted in some applications." }
    },
    {
      "@type": "Question",
      "name": "Does removing the password change the PDF content?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. The tool removes only the encryption layer that enforces the password requirement. All page content — text, images, layout, bookmarks, and links — remains identical to the original." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload a password-protected document?",
      "acceptedAnswer": { "@type": "Answer", "text": "Your document never leaves your device. The PDF is loaded into browser memory locally, the password is used to decrypt the file locally using WebAssembly, and the unlocked file is downloaded locally. No password or file content is transmitted to any server." }
    },
  ]
}

export default function RemovePDFPasswordPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc", padding: "60px 24px 80px", fontFamily: "Inter, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(0,88,195,0.08)", color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, marginBottom: 14 }}>
            PDF Unlock
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 12 }}>
            Remove PDF Password Free
          </h1>
          <p style={{ fontSize: 16, color: "#4a5568", maxWidth: 480, margin: "0 auto", lineHeight: 1.6, letterSpacing: "-0.02em" }}>
            Unlock password-protected PDFs you own. No subscription. No upload. No limits.
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
            <RemovePasswordTool />
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e5e9eb", paddingTop: 56 }}>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 20 }}>
              How to remove a PDF password — step by step
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                ["Upload your password-protected PDF", "Click the upload area or drag the PDF onto it. The encrypted file is read into local browser memory. Nothing is transmitted to any server."],
                ["Enter the password", "Type the password you use to open the PDF. The tool uses this password locally to decrypt the file — the password itself is never sent anywhere."],
                ["Click Remove Password", "The tool decrypts the PDF using WebAssembly, removes the encryption layer, and prepares the unlocked file. All page content remains identical."],
                ["Download the unlocked PDF", "The output PDF opens without a password in any viewer. Store it securely — it no longer has access restrictions."],
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
              Your password never leaves your device
            </h2>
            <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", marginBottom: 12 }}>
              Removing a PDF password is a particularly sensitive operation. You are typing a credential into a web interface, and that credential should go no further than your screen. Tools that process password removal on their servers receive both your file and your password.
            </p>
            <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: 0 }}>
              TrulyFreeTools performs decryption entirely in your browser using WebAssembly. The password you enter is used locally to decrypt the file locally. No password, no file content, and no metadata is transmitted to any server. Once you close the tab, nothing is retained.
            </p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.03em", marginBottom: 20 }}>
              Frequently asked questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["Can I remove a password I forgot?", "No. This tool removes the restriction from PDFs where you already know the password. It does not crack or bypass unknown passwords."],
                ["What is the difference between user password and owner password?", "A user password prevents opening the PDF. An owner password allows viewing but restricts editing or printing. This tool handles both types when the correct password is provided."],
                ["Is it legal to remove a PDF password?", "Removing a password from a document you own or are authorized to edit is legal. Only use this tool on documents you own or have explicit permission to modify."],
                ["Why does the tool say my PDF has no password?", "Some PDFs have editing restrictions with no visible password. If the tool reports no password found, the PDF may already be viewable without a password even if restricted in some apps."],
                ["Does removing the password change the content?", "No. Only the encryption layer is removed. All text, images, layout, bookmarks, and links remain identical to the original."],
                ["Is it safe to process a confidential document?", "Yes. Your file and password are processed entirely in browser memory. Nothing is transmitted to any server. When you close the tab, all data is discarded."],
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
                ["/blog/how-to-remove-pdf-password", "How to Remove a PDF Password"],
                ["/remove-pdf-password-free-no-subscription", "Remove Password — No Subscription"],
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
