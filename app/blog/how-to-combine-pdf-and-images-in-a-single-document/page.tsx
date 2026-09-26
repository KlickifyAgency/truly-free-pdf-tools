import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleWrapper from '@/components/blog/ArticleWrapper'
import AuthorBox from '@/components/blog/AuthorBox'

export const metadata: Metadata = {
  title: 'How to Combine PDF and Images in a Single Document',
  description: 'A step-by-step guide to merging PDF pages and images into one clean document using free tools.',
  alternates: {
    canonical: 'https://trulyfreetools.com/blog/how-to-combine-pdf-and-images-in-a-single-document',
  },
}

export default function Page() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Combine PDF and Images in a Single Document',
    image: [
      'https://trulyfreetools.com/static/cover-combine-pdf.jpg',
    ],
    author: {
      '@type': 'Person',
      name: 'George Smith',
      jobTitle: 'Founder, Klickify Agency',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Truly Free Tools',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trulyfreetools.com/static/logo.png',
      },
    },
    datePublished: '2026-09-26',
    dateModified: '2026-09-26',
    description:
      'A step-by-step guide to merging PDF pages and images into one clean document using free tools.',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I combine PDF pages and images on a mobile device?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Most mobile browsers can open the free PDF tools on this site. Save each image as a PDF first, then add those PDFs on the merge page. The experience is slightly slower on older phones, but the results are the same.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will the combined document lose image quality?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The merge tool copies your pages as-is and does not re-compress them, so each page keeps the same quality as the PDF you added. If you want a smaller file afterward, use the Compress PDF tool.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to create an account to merge files?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The merge page is public and does not require authentication. You can simply drag and drop files and click “Merge.”',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a limit on how many files I can merge at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no daily limit. Because the merging happens on your own device, the practical limit depends mainly on your device memory rather than a cap we set.',
        },
      },
    ],
  }

  return (
    <ArticleWrapper
      category="PDF Tools"
      categoryColor="#4A90E2"
      categoryBg="#E5F1FF"
      title="How to Combine PDF and Images in a Single Document"
      description="Learn how to merge PDF pages and images into one polished document using free, browser-based tools."
      date="2026-09-26"
      readTime="12 min"
      relatedLinks={[
        { href: '/blog/how-to-merge-pdf-free', label: 'Merge PDF for Free' },
        { href: '/blog/how-to-convert-pdf-to-png-for-presentations', label: 'Convert PDF to PNG' },
        { href: '/blog/how-to-remove-pdf-password', label: 'Remove PDF Password' },
        { href: '/blog/herramientas-pdf-gratis', label: 'Free PDF Tools Overview' },
      ]}
    >
      <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <p>
        I’m George Smith, Founder at Klickify Agency. Today I’ll walk you through a simple, no-cost process for combining PDF pages and images into a single document-all inside your browser.
      </p>

      <h2>Why combine PDFs and images?</h2>
      <p>
        Many times you have a report that contains scanned pages (PDF) and a few high-resolution photos (JPEG/PNG). Printing them separately is clunky. By merging them into one file you get a unified layout, consistent page numbering, and a single file that’s easy to share.
      </p>

      <h2>Step 1 - Prepare your files</h2>
      <p>
        Gather all PDFs and images you want in the final document. The merge tool on this site combines PDF files, so any image you want to include needs to be turned into a PDF first. On most phones and computers you can do this by opening the image and using the built-in “Print” option, then choosing “Save as PDF.” Avoid excessively large files; if a photo is over 10 MB, consider shrinking it before you convert it.
      </p>

      <h2>Step 2 - Open the merge page</h2>
      <p>
        Navigate to <Link href="/merge-pdf">/merge-pdf</Link>. No account is required. The interface shows a drag-and-drop area where you can add your PDF files-including the PDFs you just created from your images.
      </p>

      <h2>Step 3 - Drag files into the drop zone</h2>
      <p>
        Drag your PDF files into the drop zone in the order you want them to appear. The order you add them is the order that will appear in the final document, and you can rearrange them before merging.
      </p>

      <h2>Step 4 - Reduce file size (optional)</h2>
      <p>
        The merge tool keeps your pages as they are; it does not re-compress them. If the finished document ends up larger than you’d like, you can shrink it afterward with the <Link href="/compress-pdf">Compress PDF</Link> tool, which offers Low, Medium, and High settings.
      </p>

      <h2>Step 5 - Review and reorder</h2>
      <p>
        Before merging, double-check that every file is in the list and in the right order. If you need to change the order, rearrange the files, and remove any file you didn’t mean to include.
      </p>

      <h2>Step 6 - Merge and download</h2>
      <p>
        Once you’re satisfied with the order, click the Merge button. The browser assembles the pages into a single PDF on your own device, with nothing uploaded to a server. When it’s finished, a download link will appear. Click it to save the file to your computer or device.
      </p>

      <h2>Step 7 - Verify the result</h2>
      <p>
        Open the downloaded PDF in your default reader. Scroll through each page to confirm that the images are crisp and the PDF content is intact. If something looks off, return to <Link href="/merge-pdf">/merge-pdf</Link>, adjust the order, and merge again.
      </p>

      <h2>Optional: Add page numbers or a title page</h2>
      <p>
        The free site does not provide a built-in page-number or title-page tool. If you need those, download the merged PDF, open it in free desktop software such as LibreOffice Draw, add a title page or page numbers, and export it again.
      </p>

      <h2>Tips for best results</h2>
      <ul>
        <li>
          Keep image resolution high but file size moderate. 300 dpi images are usually enough for print quality.
        </li>
        <li>
          Use the same page size for all PDFs. If one PDF is A4 and another is Letter, the merged document will have mixed page sizes, which can be confusing.
        </li>
        <li>
          Avoid very long file names; use short, descriptive names to keep the interface tidy.
        </li>
        <li>
          Because everything runs in your browser, your files are never uploaded to a server. Close the tab when you’re done to clear the files from memory.
        </li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div>
        <h3>Can I combine PDF pages and images on a mobile device?</h3>
        <p>
          Yes. Most mobile browsers can open the free PDF tools on this site. Save each image as a PDF first, then add those PDFs on the merge page. The experience is slightly slower on older phones, but the results are the same.
        </p>

        <h3>Will the combined document lose image quality?</h3>
        <p>
          The merge tool copies your pages as-is and does not re-compress them, so each page keeps the same quality as the PDF you added. If you want a smaller file afterward, use the Compress PDF tool.
        </p>

        <h3>Do I need to create an account to merge files?</h3>
        <p>
          No. The merge page is public and does not require authentication. You can simply drag and drop files and click “Merge.”
        </p>

        <h3>Is there a limit on how many files I can merge at once?</h3>
        <p>
          There is no daily limit. Because the merging happens on your own device, the practical limit depends mainly on your device memory rather than a cap we set.
        </p>
      </div>

      <AuthorBox />
    </ArticleWrapper>
  )
}
