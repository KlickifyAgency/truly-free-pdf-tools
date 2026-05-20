import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free PDF Tools — Compress, Merge, Split, Convert | TrulyFreeTools",
  description: "PDF tools that are actually free. Compress, merge, split, convert and unlock PDFs in your browser. No signup, no watermarks, no file size limits. Your files never leave your device.",
  alternates: { canonical: "https://trulyfreetools.com" },
  openGraph: {
    title: "Free PDF Tools — No Signup, No Watermarks, No Limits",
    description: "All PDF operations run locally in your browser. No uploads. No account. Permanently free.",
    url: "https://trulyfreetools.com",
    type: "website",
  },
};

const tools = [
  { slug: "compress-pdf", label: "Compress PDF", description: "Reduce file size without losing quality. No limits.", badge: "Most Popular" },
  { slug: "merge-pdf", label: "Merge PDF", description: "Combine multiple PDFs into one file instantly.", badge: null },
  { slug: "split-pdf", label: "Split PDF", description: "Extract pages or split a PDF into separate files.", badge: null },
  { slug: "pdf-to-word", label: "PDF to Word", description: "Convert PDF to editable .docx without formatting loss.", badge: null },
  { slug: "remove-pdf-password", label: "Remove PDF Password", description: "Unlock password-protected PDFs instantly.", badge: null },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are these PDF tools really free with no limits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All PDF operations on TrulyFreeTools are permanently free with no daily task limits, no file size caps, and no watermarks. The site is funded by non-intrusive Google AdSense advertising. There is no subscription, no trial period, and no mechanism by which access can be revoked — because payment is never requested.",
      },
    },
    {
      "@type": "Question",
      name: "Do my files get uploaded to a server when I use these tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. All PDF processing runs locally in your browser using WebAssembly — a compiled binary format that runs at near-native speed without any server round-trip. Your file is read into browser memory, processed there, and downloaded directly to your device. No network request containing your file is ever made.",
      },
    },
    {
      "@type": "Question",
      name: "Why do most free PDF tools have daily limits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most PDF tools process files on their own servers, which creates real infrastructure costs at scale. Smallpdf, iLovePDF, and Adobe Acrobat Online use those costs to justify subscription pricing. TrulyFreeTools processes everything in your browser — there is no server infrastructure, no per-request compute cost, and therefore no economic pressure to impose limits.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a file size limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no server-enforced file size limit because your file never reaches a server. The practical limit is your device memory. A modern desktop or laptop with 8GB of RAM handles PDF files hundreds of megabytes in size without issue. For very large files above 100MB, desktop Chrome or Edge is recommended over mobile browsers.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to create an account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No account is required for any tool. Open the tool, drop your file, download the result. No email address, no credit card, no profile. Each session is completely stateless — nothing is stored about you or your files.",
      },
    },
    {
      "@type": "Question",
      name: "Who is behind TrulyFreeTools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TrulyFreeTools is built and maintained by George Smith, founder of Klickify Agency. The site exists because the PDF tool market is dominated by freemium products that use artificial limits to push users toward paid subscriptions. WebAssembly makes it possible to run the same operations entirely in the browser — eliminating server costs and the business incentive to paywall basic functionality.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ minHeight: "100vh", background: "#f7fafc", fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: "-0.02em" }}>

        {/* Hero */}
        <section style={{ padding: "80px 24px 64px", textAlign: "center", background: "#f7fafc" }}>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <div style={{
              display: "inline-block",
              background: "rgba(0,88,195,0.08)",
              color: "#0058c3",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: 4,
              marginBottom: 20,
            }}>
              Free PDF Tools
            </div>
            <h1 style={{ fontSize: "clamp(32px, 6vw, 44px)", fontWeight: 700, color: "#181c1e", letterSpacing: "-0.04em", lineHeight: 1.15, marginBottom: 16 }}>
              PDF tools that are<br />actually free
            </h1>
            <p style={{ fontSize: 17, color: "#4a5568", lineHeight: 1.65, marginBottom: 32, maxWidth: 460, margin: "0 auto 32px" }}>
              No watermarks. No email. No limits. Your files never leave your browser.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {["No signup required", "No watermarks", "No file size limits", "Files never leave your browser"].map((p) => (
                <span key={p} style={{
                  background: "#ffffff",
                  border: "1px solid rgba(74,85,104,0.15)",
                  color: "#4a5568",
                  fontSize: 12,
                  fontWeight: 500,
                  padding: "6px 14px",
                  borderRadius: 4,
                }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Tool Cards — responsive auto-fit grid */}
        <section style={{ padding: "0 24px 80px", background: "#f7fafc" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
              {tools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        </section>

        {/* Authority Section 1 — Why files never leave your browser */}
        <section style={{ background: "#ffffff", padding: "72px 24px 64px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: 16 }}>
              How It Works
            </p>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 20px", color: "#181c1e" }}>
              Why your files never reach our servers
            </h2>
            <p style={{ fontSize: 16, color: "#4a5568", lineHeight: 1.75, marginBottom: 16 }}>
              When you upload a file to a cloud-based PDF tool, that file travels to a remote server, gets processed there, and comes back to you. For most documents that trade-off feels invisible — until you realize the file lived on someone else's infrastructure for a few minutes, subject to their retention policy and data handling practices.
            </p>
            <p style={{ fontSize: 16, color: "#4a5568", lineHeight: 1.75, marginBottom: 16 }}>
              TrulyFreeTools works differently. All PDF operations run in your browser using WebAssembly — a compiled binary format that executes at near-native speed without any server round-trip. The same libraries used in production server environments run locally on your device. Your file is read into browser memory, processed there, and the result is downloaded directly to you. No file data ever leaves your machine.
            </p>
            <p style={{ fontSize: 16, color: "#4a5568", lineHeight: 1.75 }}>
              This is not a marketing promise. It is an architectural constraint. There is no upload endpoint to send your file to, no server-side processing queue, and no temporary storage. The privacy guarantee comes from the design of the system, not from a policy that could change.
            </p>
          </div>
        </section>

        {/* Authority Section 2 — The subscription trap */}
        <section style={{ background: "#f7fafc", padding: "72px 24px 64px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c53030", marginBottom: 16 }}>
              The Paywall Problem
            </p>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 20px", color: "#181c1e" }}>
              Why "free" PDF tools stopped being free — and why we never will
            </h2>
            <p style={{ fontSize: 16, color: "#4a5568", lineHeight: 1.75, marginBottom: 16 }}>
              Smallpdf launched as a free tool in 2013. By 2019 it had introduced subscription pricing, limiting free users to two PDF operations per day. iLovePDF followed the same trajectory. Adobe Acrobat Online is effectively a subscription funnel. The pattern is consistent: attract users with free access, build habit, then monetize after achieving scale. The result is that most tools marketed as "free" are actually limited-trial products with paywalls calibrated to create frustration.
            </p>
            <p style={{ fontSize: 16, color: "#4a5568", lineHeight: 1.75, marginBottom: 16 }}>
              The reason server-based tools converted to subscriptions is real: server infrastructure costs money. Bandwidth, compute, and storage at scale require revenue. TrulyFreeTools sidesteps that entirely — because there is no server. Processing happens locally in your browser. Without per-request server costs, there is no economic pressure to impose a two-task-per-day limit on compress or a subscription gate on merge.
            </p>
            <p style={{ fontSize: 16, color: "#4a5568", lineHeight: 1.75 }}>
              The site is funded by non-intrusive advertising. That revenue covers domain and CDN costs. The tools themselves are permanently free — not free for 14 days, not free with a daily cap, not free until a future pricing change. Free.
            </p>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section style={{ background: "#ffffff", padding: "72px 24px 64px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: 16 }}>
              Who Uses TrulyFreeTools
            </p>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 32px", color: "#181c1e" }}>
              Built for people who need PDF tools, not subscriptions
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
              {[
                { title: "Freelancers & Consultants", body: "Compress proposals and invoices before emailing. Merge deliverables into single PDFs for clients. No subscription needed for occasional use." },
                { title: "Students & Researchers", body: "Split textbooks into chapters. Merge research papers into reading lists. Remove passwords from protected academic PDFs." },
                { title: "Small Business Owners", body: "Convert PDF forms to editable Word documents. Merge contracts with exhibits. Process documents without exposing sensitive financials to third-party servers." },
                { title: "Legal & Medical Professionals", body: "Documents subject to privilege or HIPAA cannot be uploaded to unknown servers. Local processing means your client files stay on your device." },
                { title: "HR & Operations Teams", body: "Merge offer letters with policy documents. Compress scanned employee records before archiving. No per-operation billing that breaks department budgets." },
                { title: "Anyone Who Hit a Paywall", body: "You tried to compress a PDF on Smallpdf at 11pm and hit the two-task limit. You needed to merge files on iLovePDF and got asked to subscribe. This is for you." },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: "#f7fafc", borderRadius: 8, padding: 24 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "#4a5568", lineHeight: 1.65, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ background: "#f7fafc", padding: "72px 24px 80px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0058c3", marginBottom: 16 }}>
              FAQ
            </p>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, margin: "0 0 40px", color: "#181c1e" }}>
              Frequently asked questions
            </h2>
            <div style={{ display: "grid", gap: 32 }}>
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name} style={{ borderBottom: "1px solid #e5e9eb", paddingBottom: 32 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", margin: "0 0 10px" }}>{item.name}</h3>
                  <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 48, textAlign: "center" }}>
              <p style={{ fontSize: 14, color: "#718096", marginBottom: 12 }}>
                Want to understand how PDF compression works?
              </p>
              <Link href="/blog/compress-pdf-without-losing-quality" style={{ color: "#0058c3", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
                Read: How to Compress a PDF Without Losing Quality →
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

function ToolCard({ tool }: { tool: { slug: string; label: string; description: string; badge: string | null } }) {
  return (
    <Link href={"/" + tool.slug} style={{ textDecoration: "none" }}>
      <div style={{
        background: "#ffffff",
        borderRadius: 8,
        padding: "28px 24px",
        boxShadow: "0px 8px 24px rgba(24,28,30,0.06)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        boxSizing: "border-box",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ background: "rgba(0,88,195,0.08)", borderRadius: 6, padding: "5px 10px" }}>
            <span style={{ color: "#0058c3", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>PDF</span>
          </div>
          {tool.badge && (
            <span style={{
              background: "rgba(0,88,195,0.08)",
              color: "#0058c3",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "3px 8px",
              borderRadius: 4,
            }}>
              {tool.badge}
            </span>
          )}
        </div>
        <div>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: "#181c1e", letterSpacing: "-0.02em", marginBottom: 6 }}>
            {tool.label}
          </h2>
          <p style={{ fontSize: 13, color: "#718096", lineHeight: 1.55 }}>
            {tool.description}
          </p>
        </div>
        <div style={{ marginTop: "auto" }}>
          <span style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #0058c3, #0070f3)",
            color: "#ffffff",
            fontSize: 12,
            fontWeight: 700,
            padding: "8px 16px",
            borderRadius: 6,
          }}>
            Use tool
          </span>
        </div>
      </div>
    </Link>
  );
}
