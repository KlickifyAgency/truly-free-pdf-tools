import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Truly Free PDF Tools",
  description: "We process your files locally in your browser, with no uploads. This page lists the analytics and advertising services we use.",
  alternates: { canonical: "https://trulyfreetools.com/privacy" },
}

const sections = [
  {
    title: "Files Never Leave Your Browser",
    body: "All PDF processing on Truly Free PDF Tools runs entirely in your browser. Your files are loaded into local memory, processed on your device, and made available for download — without ever being transmitted to any server. We have no technical capability to receive, store, or access your documents.",
  },
  {
    title: "Data We Collect",
    body: "We use Google Analytics and Google Tag Manager to understand how visitors use this site. They record pages viewed, approximate location, device and browser type, and the referring site. We also use Cloudflare Web Analytics, which measures page performance and does not set cookies. We do not collect names, email addresses, file contents, file names, or PDF passwords.",
  },
  {
    title: "Advertising",
    body: "This site is monetized through Google AdSense (Publisher ID: ca-pub-8680464039127093). Google may use cookies to serve ads based on prior visits to this and other websites. You can opt out of personalized advertising at google.com/settings/ads. We do not sell user data to advertisers or third parties.",
  },
  {
    title: "Cookies",
    body: "We use functional cookies necessary for site operation and Google Analytics cookies, such as _ga, to understand aggregate traffic patterns. You can opt out of Google Analytics at tools.google.com/dlpage/gaoptout. Advertising cookies are managed by Google AdSense. No cookies store your file data — files exist only in browser memory during the active session.",
  },
  {
    title: "Third-Party Services",
    body: "We use Google AdSense for advertising, Google Analytics and Google Tag Manager for traffic measurement, and Cloudflare for site delivery and Web Analytics. Google's services are governed by Google's Privacy Policy at policies.google.com. None of these services receive your files, file names, or PDF passwords.",
  },
  {
    title: "Data Retention",
    body: "Because files are processed locally, there is no file data to retain. We do not maintain a user database. Google Analytics data follows the retention period set in our account, and advertising cookies managed by Google AdSense follow Google's standard retention policies.",
  },
  {
    title: "Your Rights",
    body: "Under GDPR and CCPA, you have the right to access, correct, or delete personal data we hold. We keep no names, email addresses, or account records. Analytics data is held by Google, and you can opt out at tools.google.com/dlpage/gaoptout. For advertising opt-out, visit the Google Ads Settings page.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be directed to info@klickifyagency.com. We will respond within 5 business days.",
  },
]

export default function PrivacyPage() {
  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 80px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
          Legal
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "#181c1e", lineHeight: 1.15, marginBottom: 12 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 14, color: "#718096", letterSpacing: "-0.02em", marginBottom: 48 }}>
          Last updated: November 6, 2026
        </p>

        <div style={{ background: "#f0f4ff", borderLeft: "4px solid #2563eb", borderRadius: 8, padding: "24px 28px", marginBottom: 48 }}>
          <p style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", color: "#0058c3", margin: 0 }}>
            Short version: Your files are processed on your device. We never see them, never receive them, never store them.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {sections.map((s, i) => (
            <div key={i} style={{ background: "#ffffff", borderRadius: 8, padding: "28px 32px", boxShadow: "0px 8px 24px rgba(24,28,30,0.06)" }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.02em", color: "#181c1e", marginBottom: 10 }}>
                {s.title}
              </h2>
              <p style={{ fontSize: 15, color: "#4a5568", lineHeight: 1.7, letterSpacing: "-0.02em", margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
