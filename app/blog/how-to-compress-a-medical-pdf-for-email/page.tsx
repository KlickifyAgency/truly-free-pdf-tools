import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleWrapper from '@/components/blog/ArticleWrapper'
import AuthorBox from '@/components/blog/AuthorBox'

export const metadata: Metadata = {
  title: 'How to Compress a Medical PDF for Email',
  description: 'Shrink scanned medical records and lab reports enough to email them, keep them readable, and send them without exposing health information.',
  alternates: {
    canonical: 'https://trulyfreetools.com/blog/how-to-compress-a-medical-pdf-for-email'
  }
}

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Compress a Medical PDF for Email",
    "author": {
      "@type": "Person",
      "name": "George Smith"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Truly Free Tools",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trulyfreetools.com/logo.png"
      }
    },
    "datePublished": "2026-09-18",
    "dateModified": "2026-09-18",
    "description": "Shrink scanned medical records and lab reports enough to email them, keep them readable, and send them without exposing health information."
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the attachment size limit for Gmail and Outlook?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gmail and Yahoo Mail accept attachments up to 25 MB per message, and Outlook.com up to 20 MB. Work and hospital mail servers often set their own, lower limits."
        }
      },
      {
        "@type": "Question",
        "name": "Does compressing a medical PDF reduce its quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually yes, for scanned pages and images. Compression lowers image resolution to save space. Pick the lightest setting that gets under your limit and check that every page is still readable before you send it."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to email medical records?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regular email is not encrypted end to end by default. If your provider has a patient portal with an upload option, use that. Healthcare staff should follow their organization's rules for protected health information, which often require encrypted email or a secure portal."
        }
      },
      {
        "@type": "Question",
        "name": "Should I compress X-rays or other diagnostic images?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not if a doctor will use them for diagnosis. Compression throws away detail. Diagnostic imaging is normally shared in its original format through the provider's image-sharing system; a compressed PDF is only suitable as a reference copy."
        }
      }
    ]
  }

  const relatedLinks = [
    { href: '/blog/pdf-file-size-reducer-guide', label: 'PDF File Size Reducer Guide' },
    { href: '/blog/best-free-pdf-tools-2026', label: 'Best Free PDF Tools 2026' },
    { href: '/blog/how-to-split-pdf-free', label: 'How to Split a PDF for Free' }
  ]

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <ArticleWrapper
        category="HOW-TO GUIDE"
        categoryColor="#16a34a"
        categoryBg="#f0fdf4"
        title="How to Compress a Medical PDF for Email"
        description="Shrink scanned medical records and lab reports enough to email them, keep them readable, and send them without exposing health information."
        date="2026-09-18"
        readTime="7 min"
        relatedLinks={relatedLinks}
      >
        <p>Scanned medical records are some of the heaviest PDFs people deal with. A 20-page chart scanned at high resolution can easily pass 30 MB, well over what most email services accept. This guide shows how to get a medical PDF small enough to send, how to make sure it is still readable, and how to send it without exposing someone&apos;s health information.</p>

        <h2>1. Know the limit you are aiming for</h2>
        <p>Gmail and Yahoo Mail accept attachments up to 25 MB per message, and Outlook.com up to 20 MB. Hospital and office mail servers often set their own, lower limits, so if you are sending to a clinic, a target of 10 MB or less avoids most bounces. Check the size of your file first: right-click it and choose Get Info on a Mac or Properties on Windows.</p>

        <h2>2. Compress it in your browser</h2>
        <p>Our <Link href="/compress-pdf">Compress PDF tool</Link> runs entirely in your browser, so the file never leaves your device. That matters with medical records: you are not handing a stranger&apos;s server a copy of someone&apos;s chart. It has three levels:</p>
        <ul>
          <li><strong>Low</strong> keeps the most detail. Start here for scanned records you need to read closely.</li>
          <li><strong>Medium</strong> balances quality and size and is enough for most typed reports and lab results.</li>
          <li><strong>High</strong> gives the smallest file, with visibly softer images. Use it only when the other levels are not enough.</li>
        </ul>
        <p>Compression works by lowering the resolution of scanned pages and images, so a scan will always lose some sharpness. Pick the lightest level that gets you under your limit.</p>

        <h2>3. On a Mac, Preview can do it too</h2>
        <p>Open the PDF in Preview, choose <strong>File → Export</strong>, and set <strong>Quartz Filter</strong> to <strong>Reduce File Size</strong>. It is built in and works offline, but it is aggressive: small print and handwriting on scanned pages can become hard to read. Always check the result.</p>
        <p>Windows has no built-in PDF compressor. Printing to &quot;Microsoft Print to PDF&quot; does not reliably make a file smaller, so a browser tool is the simpler option there.</p>

        <h2>4. Check every page before you send it</h2>
        <p>Open the compressed file and scroll through all of it. Confirm that the page count matches the original, that numbers in lab results are legible, and that signatures and handwritten notes are still readable. If you need to search the document, try Cmd+F or Ctrl+F: some compression methods turn pages into images, and the text stops being searchable.</p>

        <h2>5. Too big even after compressing? Split it</h2>
        <p>If the file is still over the limit, split it into two or three parts with our <Link href="/split-pdf">Split PDF tool</Link>, which also runs in your browser, and send each part in its own email. Name the files clearly, for example &quot;Records part 1 of 3&quot;, so nothing gets lost on the other end.</p>

        <h2>6. Do not compress diagnostic images</h2>
        <p>X-rays, CT scans, and MRIs used for diagnosis should not be compressed. Compression throws away detail a radiologist may need. Hospitals normally share imaging in its original format through their own image-sharing systems. A compressed PDF of an image is fine as a reference copy, not as the study itself.</p>

        <h2>7. Send it the safe way</h2>
        <p>Regular email is not encrypted end to end by default, so think about how the file travels:</p>
        <ul>
          <li><strong>Patients:</strong> if your doctor&apos;s office has a patient portal with an upload option, use it instead of email.</li>
          <li><strong>Healthcare staff:</strong> follow your organization&apos;s rules for protected health information. Many require encrypted email or a secure portal.</li>
          <li><strong>Sharing through a cloud link:</strong> share the file only with the recipient&apos;s email address. Never use &quot;anyone with the link&quot; for medical records, because anyone who gets hold of the link can open them.</li>
        </ul>
        <p>For a closer look at how compression levels trade size against quality, see our <Link href="/blog/pdf-file-size-reducer-guide">PDF file size reducer guide</Link>.</p>

        <h2>Frequently Asked Questions</h2>
        <dl>
          <dt>What is the attachment size limit for Gmail and Outlook?</dt>
          <dd>Gmail and Yahoo Mail accept attachments up to 25 MB per message, and Outlook.com up to 20 MB. Work and hospital mail servers often set their own, lower limits.</dd>

          <dt>Does compressing a medical PDF reduce its quality?</dt>
          <dd>Usually yes, for scanned pages and images. Compression lowers image resolution to save space. Pick the lightest setting that gets under your limit and check that every page is still readable before you send it.</dd>

          <dt>Is it safe to email medical records?</dt>
          <dd>Regular email is not encrypted end to end by default. If your provider has a patient portal with an upload option, use that. Healthcare staff should follow their organization&apos;s rules for protected health information, which often require encrypted email or a secure portal.</dd>

          <dt>Should I compress X-rays or other diagnostic images?</dt>
          <dd>Not if a doctor will use them for diagnosis. Compression throws away detail. Diagnostic imaging is normally shared in its original format through the provider&apos;s image-sharing system; a compressed PDF is only suitable as a reference copy.</dd>
        </dl>

        <AuthorBox />
      </ArticleWrapper>
    </>
  )
}
