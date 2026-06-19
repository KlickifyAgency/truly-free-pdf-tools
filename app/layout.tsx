import type { Metadata, Viewport } from "next"
import "./globals.css"
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "TrulyFree PDF Tools — Free PDF Compressor, Merger & More",
  description: "Compress, merge, split, and convert PDFs for free. No signup. No watermarks. Your files never leave your browser.",
  metadataBase: new URL("https://trulyfreetools.com"),
  alternates: { canonical: "https://trulyfreetools.com" },
  openGraph: {
    title: "TrulyFree PDF Tools",
    description: "Free PDF tools with zero limits. No signup. No watermarks. Process locally.",
    url: "https://trulyfreetools.com",
    siteName: "TrulyFree PDF Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrulyFree PDF Tools",
    description: "Free PDF tools with zero limits. No signup. No watermarks. Process locally.",
  },
}

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TrulyFree PDF Tools",
  "url": "https://trulyfreetools.com",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Windows, macOS, Android, iOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free PDF tools that run entirely in your browser. No signup, no watermarks, no file uploads to servers.",
  "featureList": "Compress PDF, Merge PDF, Split PDF, PDF to Word, Remove PDF Password"
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TrulyFree PDF Tools",
  "url": "https://trulyfreetools.com",
  "description": "Free PDF tools that process files locally in your browser. No signup, no watermarks, no file uploads."
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Klickify Agency",
  "url": "https://klickifyagency.com",
  "founder": {
    "@type": "Person",
    "name": "George Smith",
    "url": "https://www.linkedin.com/in/george-smith-832113217/",
    "jobTitle": "Founder"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@klickifyagency.com",
    "contactType": "customer support"
  },
  "sameAs": [
    "https://www.linkedin.com/in/george-smith-832113217/"
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script data-cfasync="false" src="https://cmp.gatekeeperconsent.com/min.js"></script>
        <script data-cfasync="false" src="https://the.gatekeeperconsent.com/cmp.min.js"></script>
        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.ezstandalone = window.ezstandalone || {}; ezstandalone.cmd = ezstandalone.cmd || [];` }} />
        <script src="//ezoicanalytics.com/analytics.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
