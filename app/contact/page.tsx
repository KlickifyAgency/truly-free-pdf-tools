import type { Metadata } from "next"
import ContactForm from "@/components/contact/ContactForm"

export const metadata: Metadata = {
  title: "Contact — Truly Free PDF Tools",
  description: "Get in touch with the Truly Free PDF Tools team. Bug reports, feedback, and business inquiries welcome.",
  alternates: { canonical: "https://trulyfreetools.com/contact" },
}

export default function ContactPage() {
  return (
    <main style={{ background: "#f7fafc", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <section style={{ maxWidth: 560, margin: "0 auto", padding: "80px 24px 80px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: "#718096", textTransform: "uppercase", marginBottom: 16 }}>
          Support
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.03em", color: "#181c1e", lineHeight: 1.15, marginBottom: 12 }}>
          Contact
        </h1>
        <p style={{ fontSize: 16, color: "#4a5568", letterSpacing: "-0.02em", marginBottom: 40, lineHeight: 1.6 }}>
          Bug reports, business inquiries, or feedback. We read everything.
        </p>
        <ContactForm />
      </section>
    </main>
  )
}
