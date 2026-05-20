import type { Metadata } from "next"
import FeedbackForm from "@/components/feedback/FeedbackForm"

export const metadata: Metadata = {
  title: "Feedback — Truly Free PDF Tools",
  description: "Rate our PDF tools and share feedback. Tell us what worked and what we can improve.",
  alternates: { canonical: "https://trulyfreetools.com/feedback" },
}

export default function FeedbackPage() {
  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <section style={{ maxWidth: 480, margin: "0 auto", padding: "80px 24px 80px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
          Support
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "#181c1e", lineHeight: 1.15, marginBottom: 12 }}>
          Feedback
        </h1>
        <p style={{ fontSize: 16, color: "#4a5568", letterSpacing: "-0.02em", marginBottom: 40, lineHeight: 1.6 }}>
          Tell us what worked and what did not. Two minutes, no account needed.
        </p>
        <FeedbackForm />
      </section>
    </main>
  )
}
