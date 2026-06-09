import type { Metadata } from "next";
import { FeaturedCard, PostCard } from "../../components/blog/BlogCards";

export const metadata: Metadata = {
  title: "PDF Tools Blog — Guides, Tips, and Comparisons",
  description: "In-depth guides on PDF compression, merging, splitting, conversion, and honest comparisons of free tools. No paywalls, no daily limits.",
  alternates: {
    canonical: "https://trulyfreetools.com/blog",
  },
};

const posts = [
  { slug: "pdf-statistics-2026", title: "PDF Statistics 2026 — Usage, Growth & Industry Data", description: "How many PDFs are created every day? Which industries generate the most? Real data on PDF usage, tool market share, pricing, and trends for 2026.", date: "June 9, 2026", readTime: "9 min read", lang: "EN", category: "INDUSTRY DATA", categoryColor: "#7c3aed", categoryBg: "#f5f3ff" },
  { slug: "best-free-pdf-tools-2026", title: "Best Free PDF Tools in 2026 (No Subscription)", description: "Honest ranking of the best free PDF tools in 2026. Tested every major option — Smallpdf, iLovePDF, Sejda, PDF24 — and included my own tool. No hidden limits, no watermarks.", date: "June 9, 2026", readTime: "9 min read", lang: "EN", category: "COMPARISON", categoryColor: "#0058c3", categoryBg: "#eff6ff" },
  { slug: "smallpdf-alternatives", title: "Best Smallpdf Alternatives in 2026 — Free, No Daily Limits", description: "Hit the Smallpdf 2-task daily limit? These alternatives have no daily caps, no watermarks, and some never upload your file to any server.", date: "June 9, 2026", readTime: "10 min read", lang: "EN", category: "COMPARISON", categoryColor: "#0058c3", categoryBg: "#eff6ff" },
  { slug: "adobe-acrobat-alternative-free", title: "Free Adobe Acrobat Alternative (No Subscription, No Account)", description: "Adobe Acrobat Pro costs $239.88 a year. These free alternatives handle compression, merging, splitting, and password removal with no subscription and no file size limits.", date: "June 9, 2026", readTime: "9 min read", lang: "EN", category: "COMPARISON", categoryColor: "#0058c3", categoryBg: "#eff6ff" },
  { slug: "pdf-file-size-reducer-guide", title: "PDF File Too Large for Email? Here Is the Fix", description: "Gmail rejected your PDF attachment? Fix it in under 10 seconds. Free, no watermark, no account, no page limits. Step-by-step guide to compress any PDF under 25MB.", date: "June 9, 2026", readTime: "8 min read", lang: "EN", category: "HOW-TO GUIDE", categoryColor: "#16a34a", categoryBg: "#f0fdf4" },
  { slug: "how-to-merge-pdf-free", title: "How to Merge PDF Files Free Online — No Account, No Watermark", description: "Merge any number of PDFs for free with no watermark, no daily limit, and no account required. Step-by-step guide. No files uploaded to any server.", date: "June 9, 2026", readTime: "8 min read", lang: "EN", category: "HOW-TO GUIDE", categoryColor: "#16a34a", categoryBg: "#f0fdf4" },
  { slug: "how-to-split-pdf-free", title: "How to Split a PDF Free Online — No Account", description: "Split any PDF for free with no watermark, no page limits, and no account required. Extract specific pages or custom ranges. No files uploaded to any server.", date: "June 9, 2026", readTime: "8 min read", lang: "EN", category: "HOW-TO GUIDE", categoryColor: "#16a34a", categoryBg: "#f0fdf4" },
  { slug: "how-to-remove-pdf-password", title: "How to Remove a PDF Password for Free", description: "Remove PDF passwords for free with no account, no daily limits, and no files uploaded to any server. Works on open passwords and permissions passwords.", date: "June 9, 2026", readTime: "8 min read", lang: "EN", category: "HOW-TO GUIDE", categoryColor: "#16a34a", categoryBg: "#f0fdf4" },
  { slug: "pdf-to-word-free-no-email", title: "Convert PDF to Word Free (No Email Required)", description: "Convert PDF to Word for free without giving your email address. Step-by-step guide. Honest about what converts well and what does not. No files uploaded to any server.", date: "June 9, 2026", readTime: "8 min read", lang: "EN", category: "HOW-TO GUIDE", categoryColor: "#16a34a", categoryBg: "#f0fdf4" },
  { slug: "herramientas-pdf-gratis", title: "Herramientas PDF Gratis en 2026 (Sin Registro, Sin Limites)", description: "Comparativa honesta de las mejores herramientas PDF gratis en 2026. Sin limite de tareas diarias, sin marcas de agua, sin subir archivos a servidores.", date: "9 de junio, 2026", readTime: "9 min", lang: "ES", category: "COMPARATIVA", categoryColor: "#7c3aed", categoryBg: "#f5f3ff" },
  { slug: "como-comprimir-pdf-sin-perder-calidad", title: "How to Reduce PDF File Size Without Adobe", description: "Reduce PDF file size for free without Adobe Acrobat. Step-by-step guide with real numbers. No watermark, no daily limit, no files uploaded to any server.", date: "June 9, 2026", readTime: "8 min read", lang: "EN", category: "HOW-TO GUIDE", categoryColor: "#16a34a", categoryBg: "#f0fdf4" },
  { slug: "alternativas-smallpdf-gratis", title: "Alternativas a Smallpdf Gratuitas en 2026 (Sin Limite de 2 Tareas)", description: "Cansado del limite de 2 tareas de Smallpdf? Estas alternativas no tienen limite diario, no añaden marcas de agua, y algunas no suben tus archivos a ningun servidor.", date: "9 de junio, 2026", readTime: "9 min", lang: "ES", category: "COMPARATIVA", categoryColor: "#7c3aed", categoryBg: "#f5f3ff" },
  { slug: "compress-pdf-without-losing-quality", title: "Compress PDF Without Losing Quality — Free, No Upload", description: "Compress any PDF for free with no quality loss, no watermark, and no file uploaded to any server. Honest guide with real compression numbers.", date: "June 9, 2026", readTime: "8 min read", lang: "EN", category: "HOW-TO GUIDE", categoryColor: "#16a34a", categoryBg: "#f0fdf4" },
  { slug: "ilovepdf-alternative-free-unlimited", title: "iLovePDF Alternative Free — Unlimited, No Watermark, No Upload", description: "iLovePDF limits free users and adds watermarks to conversions. This alternative has no task limits, no watermarks, and processes files locally in your browser.", date: "June 9, 2026", readTime: "9 min read", lang: "EN", category: "COMPARISON", categoryColor: "#0058c3", categoryBg: "#eff6ff" },
  { slug: "why-smallpdf-limits-free-users", title: "Why Smallpdf Limits Free Users (And What to Do About It)", description: "Smallpdf gives you two free tasks per day then locks you out. The real economics behind the limit, what their watermark costs you, and which unlimited free alternative to use instead.", date: "June 9, 2026", readTime: "8 min read", lang: "EN", category: "COMPARISON", categoryColor: "#0058c3", categoryBg: "#eff6ff" },
];

const featuredPost = posts[0];
const restPosts = posts.slice(1);

export default function BlogIndexPage() {
  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #0058c3 0%, #0070f3 100%)", padding: "64px 24px 72px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>
            TrulyFreeTools Blog
          </p>
          <h1 style={{ fontSize: 42, fontWeight: 700, letterSpacing: "-0.03em", color: "#ffffff", lineHeight: 1.15, marginBottom: 16, maxWidth: 640 }}>
            PDF Guides and Tool Comparisons
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, maxWidth: 520, letterSpacing: "-0.01em" }}>
            Practical guides on compression, merging, splitting, and conversion. Honest comparisons of free tools. No paywalls, no daily limits.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginTop: -32 }}>
          <FeaturedCard post={featuredPost} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: 28, marginTop: 28, paddingBottom: 80, alignItems: "start" }}>
          {restPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
