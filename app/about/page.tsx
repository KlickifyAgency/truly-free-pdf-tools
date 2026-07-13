import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About TrulyFreeTools — Built by George Smith, Klickify Agency",
  description: "TrulyFreeTools was built by George Smith, founder of Klickify Agency, to give everyone access to professional PDF tools without paywalls, subscriptions, or file uploads. Learn how it works and why it is permanently free.",
  alternates: { canonical: "https://trulyfreetools.com/about" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TrulyFreeTools",
  url: "https://trulyfreetools.com",
  logo: "https://trulyfreetools.com/icon.png",
  founder: {
    "@type": "Person",
    name: "George Smith",
    url: "https://www.linkedin.com/in/george-smith-832113217/",
    jobTitle: "Founder",
    knowsAbout: ["PDF compression", "document processing", "WebAssembly", "digital tools"],
    worksFor: { "@type": "Organization", name: "Klickify Agency" },
  },
  description: "Free PDF tools that process files entirely in your browser — no uploads, no accounts, no daily limits, no watermarks. Ad-supported.",
  foundingDate: "2025",
  contactPoint: { "@type": "ContactPoint", email: "info@klickifyagency.com", contactType: "customer support" },
  sameAs: ["https://www.linkedin.com/in/george-smith-832113217/"],
};

export default function AboutPage() {
  return (
    <main style={{ fontFamily: "\'Inter\', sans-serif", letterSpacing: "-0.02em", color: "#0a0f1e", overflowX: "hidden" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <section style={{ background: "#ffffff", padding: "96px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: "20px" }}>About TrulyFreeTools</p>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 24px", color: "#181c1e" }}>PDF tools that are actually free</h1>
          <p style={{ fontSize: "18px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: "0 auto", maxWidth: "600px" }}>No subscription. No watermarks. No email required. No file uploads. Your documents stay on your device — always.</p>
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ flexShrink: 0 }}>
              <Image src="/george-smith.png" alt="George Smith — Founder of Klickify Agency and TrulyFreeTools" width={120} height={120} style={{ borderRadius: "50%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "8px" }}>THE FOUNDER</div>
              <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 4px" }}>George Smith</h2>
              <p style={{ fontSize: "14px", color: "#0058c3", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 16px" }}>Founder, Klickify Agency</p>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: "0 0 12px" }}>I built TrulyFreeTools after running into the same wall that every small business owner hits eventually: you need to compress a PDF before sending it to a client, merge a stack of signed contracts, or unlock a password-protected file from three years ago — and every tool that claims to be free either adds a watermark, caps you at two conversions a day, or demands your email before doing anything.</p>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: "0 0 12px" }}>PDF tasks are routine. They should be free. Not free-with-asterisk. Actually free — unlimited, no account, no watermark, no cloud upload.</p>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: "0 0 12px" }}>Klickify Agency is my digital product studio. Everything we build follows the same principle: solve a real problem, charge nothing, fund it through advertising. TrulyFreeTools is the PDF branch of that portfolio — five tools covering the most common PDF tasks, all running locally in your browser with no server involved.</p>
              <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", margin: "0 0 20px" }}>Before Klickify, I spent years working with small businesses that were being priced out of basic digital tools. A freelancer paying $144 per year for Smallpdf to compress the occasional contract is not a reasonable outcome. This site exists because that outcome is fixable.</p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="mailto:info@klickifyagency.com" style={{ fontSize: "13px", color: "#718096", textDecoration: "none", letterSpacing: "-0.01em" }}>info@klickifyagency.com</a>
                <a href="https://www.linkedin.com/in/george-smith-832113217/" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#0058c3", fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em" }}>LinkedIn →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "20px" }}>THE PROBLEM</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 20px" }}>How free PDF tools actually work</h2>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>Smallpdf lets you do two tasks per hour on their free tier and uploads your files to their servers. iLovePDF is generous for a while, then introduces daily limits and file-size caps. Adobe Acrobat online requires an Adobe account and stores your files in their cloud. PDF24 is genuinely good and free but still routes files through German servers — which matters if your documents contain personal information, contracts, or tax data.</p>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>The pattern across all these platforms is the same: start with something that feels free, then apply pressure — through limits, accounts, paywalls, or data collection — to convert users into paying customers. It works as a business model. But it is not what people need when they are trying to compress a resume at 11pm before a job application deadline.</p>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "0" }}>TrulyFreeTools does not upload your files anywhere. Processing happens inside your browser tab using WebAssembly. Your file goes from your disk to browser memory, gets processed, and comes back as a download. No server ever sees it. That is not a policy promise — it is how the architecture is built.</p>
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "20px" }}>TECHNICAL APPROACH</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 20px" }}>Client-side PDF processing — how it works</h2>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>PDF compression runs a two-pass system. The first pass rebuilds the PDF internal object tree to remove redundancy — cross-reference tables, duplicate objects, unused resources. The second pass resamples embedded images. Both passes run in parallel and the smaller result is returned. If neither beats the original, the tool says so instead of returning a bloated file.</p>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>Merging is a structural operation. Pages from source documents are combined without re-encoding any content. Fonts, images, vector graphics, and form fields pass through unchanged. That is why merging cannot degrade quality — the pixels and vectors are never touched, only reorganized into a new document structure.</p>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>Password removal decrypts the PDF structure and writes an unlocked copy. The password you enter runs locally and is never transmitted. This works for user-password encryption. Owner passwords — which restrict editing but allow viewing — use a different mechanism and are handled separately.</p>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "0" }}>PDF-to-Word conversion uses PDF.js to parse the document and extract text with positional data, then writes a .docx file approximating the original layout. This works well for text-based PDFs. Scanned documents require OCR, which runs client-side using Tesseract.js — no server call, no upload.</p>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "20px" }}>THE TOOLS</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 24px" }}>Five PDF tasks, zero uploads</h2>
          <div style={{ display: "grid", gap: "20px" }}>
            {[
              { name: "Compress PDF", href: "/compress-pdf", desc: "Two-pass compression — structural and image resampling — returns the smaller result. Works on text-heavy and image-heavy PDFs. No file size limit imposed by the tool." },
              { name: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs into one. Drag files into order, click Merge. Fonts, images, and formatting from each source file are preserved exactly. No page or file count limit." },
              { name: "Split PDF", href: "/split-pdf", desc: "Extract specific pages or page ranges from a PDF. Useful for pulling a section from a large document or separating a batch-scanned file into individual records." },
              { name: "PDF to Word", href: "/pdf-to-word", desc: "Convert text-based PDFs to editable .docx files. Preserves paragraph structure and basic formatting. Best for contracts, reports, and text-heavy documents." },
              { name: "Remove PDF Password", href: "/remove-pdf-password", desc: "Unlock PDFs you own. Enter the password, download the unlocked file. Decryption runs locally — your password is never sent anywhere." },
            ].map(({ name, href, desc }) => (
              <div key={name} style={{ background: "#f7fafc", borderRadius: "8px", padding: "24px 28px" }}>
                <a href={href} style={{ fontSize: "16px", fontWeight: 700, color: "#0058c3", textDecoration: "none", letterSpacing: "-0.02em", display: "block", marginBottom: "8px" }}>{name} →</a>
                <p style={{ fontSize: "14px", color: "#4a5568", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#f7fafc", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "20px" }}>BUSINESS MODEL</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 20px" }}>How free tools stay free</h2>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "16px" }}>TrulyFreeTools is ad-supported. Ads appear on content pages and between completed operations on tool pages. The processing flow itself is ad-free — no pop-up blocks your download, no interstitial appears while your file compresses.</p>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.75, marginBottom: "0" }}>The model works because useful tools generate traffic, and traffic generates ad revenue. There is no incentive to add limits or paywalls — limits reduce usage and reduce revenue. Free and unlimited is the better business outcome here, which is also the better outcome for users.</p>
        </div>
      </section>

      <section style={{ background: "#ffffff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: "16px" }}>CONTACT</div>
          <p style={{ fontSize: "15px", color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.01em", marginBottom: "8px" }}>Questions, feedback, or partnership inquiries:</p>
          <a href="mailto:info@klickifyagency.com" style={{ color: "#0058c3", fontWeight: 600, textDecoration: "none", fontSize: "16px" }}>info@klickifyagency.com</a>
          <p style={{ fontSize: "13px", color: "#718096", marginTop: "8px" }}>Typical response time: 24—48 hours.</p>
        </div>
      </section>
    </main>
  );
}
