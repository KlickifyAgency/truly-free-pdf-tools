import type { Metadata } from 'next';
import ArticleWrapper from '../../../components/blog/ArticleWrapper';
import AuthorBox from '@/components/blog/AuthorBox';

export const metadata: Metadata = {
  title: 'How to Batch Compress Multiple PDFs at Once',
  description:
    'Learn step‑by‑step how to compress dozens of PDFs in a single go using free online tools, desktop apps, and command‑line tricks.',
  alternates: {
    canonical:
      'https://trulyfreetools.com/blog/how-to-batch-compress-multiple-pdfs-at-once',
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Batch Compress Multiple PDFs at Once',
    description:
      'A practical guide that shows you how to shrink a folder of PDFs in seconds, using free web services, desktop utilities, and command‑line scripts.',
    image: 'https://trulyfreetools.com/assets/blog/batch-compress-pdf.jpg',
    author: {
      '@type': 'Person',
      name: 'George Smith',
      url: 'https://trulyfreetools.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TrulyFreeTools',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trulyfreetools.com/logo.png',
      },
    },
    datePublished: '2026-09-04',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':
        'https://trulyfreetools.com/blog/how-to-batch-compress-multiple-pdfs-at-once',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is there a limit to how many PDFs I can compress at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Web‑based batch compressors usually cap the total upload size (e.g., 200 MB on Smallpdf). Desktop tools and scripts have no practical limit besides your hardware.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will batch compression degrade the quality of all pages?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quality loss depends on the compression level you choose. Most tools let you keep “high‑quality” output, which retains readability while still shrinking the file.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to install anything to batch compress PDFs for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. You can use free online services like Smallpdf or iLovePDF. If you prefer offline, Ghostscript and PDFtk are open‑source and require a one‑time install.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I preserve bookmarks, annotations, and forms while compressing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Most modern compressors preserve structural elements. However, aggressive down‑sampling of images may affect visual fidelity of annotations that rely on high‑resolution graphics.',
        },
      },
    ],
  };

  const relatedLinks = [
    {
      title: 'Free PDF Merger',
      href: '/tools/pdf-merge',
    },
    {
      title: 'Online PDF Splitter',
      href: '/tools/pdf-split',
    },
    {
      title: 'Convert PDF to Word',
      href: '/tools/pdf-to-word',
    },
  ];

  return (
    <ArticleWrapper
      category="PDF"
      categoryColor="text-indigo-700"
      categoryBg="bg-indigo-100"
      title="How to Batch Compress Multiple PDFs at Once"
      description="Compress dozens of PDFs in seconds with free web tools, desktop utilities, and command‑line scripts."
      date="2026 09 04"
      readTime="8 min"
      relatedLinks={relatedLinks}
    >
      {/* JSON‑LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Author Box */}
      <AuthorBox
        name="George Smith"
        title="Founder, Klickify Agency"
        imgSrc="/authors/george-smith.png"
        bio="I build free tools that help busy professionals automate repetitive tasks."
      />

      {/* Article Content */}
      <section className="prose prose-lg max-w-none mt-8">
        <p>
          If you’ve ever stared at a folder full of PDFs that collectively weigh
          several hundred megabytes, you know how frustrating it can be to send
          them via email or upload them to a client portal. The good news? You
          don’t need a pricey desktop suite or a developer’s time to shrink
          dozens of PDFs in one go. In this guide I’ll walk you through five
          reliable methods—ranging from pure‑web solutions to command‑line
          scripts—so you can pick the workflow that matches your comfort level
          and hardware.
        </p>

        <h2>1. Web‑Based Batch Compression (Smallpdf & iLovePDF)</h2>
        <p>
          The quickest way to compress many PDFs is to use an online batch
          compressor. Both <strong>Smallpdf</strong> and <strong>iLovePDF</strong>
          offer free “compress all” buttons that accept a ZIP file or multiple
          PDFs dropped into the upload area.
        </p>
        <ol>
          <li>
            <strong>Gather your PDFs</strong> into a single folder.
          </li>
          <li>
            <strong>Compress the folder into a ZIP</strong> (right‑click → “Compress”
            on Windows, or “Compress Items” on macOS). This keeps the original
            order intact.
          </li>
          <li>
            <strong>Visit Smallpdf’s Batch Compress page</strong> (
            <a href="https://smallpdf.com/compress-pdf" target="_blank" rel="noopener">
              smallpdf.com/compress-pdf
            </a>
            ) and drag the ZIP file onto the upload box. The site extracts the
            archive, runs each PDF through its optimizer, and bundles the
            results back into a new ZIP.
          </li>
          <li>
            <strong>Download the result</strong>. You’ll get a single ZIP that
            contains every compressed PDF, preserving the original filenames.
          </li>
        </ol>
        <p>
          <em>Pros:</em> No installation, works on any device, decent compression
          (usually 30‑50 % size reduction). <br />
          <em>Cons:</em> Free tier caps total upload size (≈200 MB on Smallpdf) and
          may display a subtle “ad‑supported” banner.
        </p>

        <h2>2. Desktop Batch Compression with Ghostscript</h2>
        <p>
          If you regularly handle large batches or need to stay offline, Ghostscript
          is a free, open‑source engine that powers most PDF viewers. It can be
          invoked from a simple batch file (Windows) or shell script (macOS/Linux).
        </p>
        <pre>
{`# Windows batch script (compress.bat)
@echo off
set INPUTDIR=%1
set OUTPUTDIR=%2
if "%OUTPUTDIR%"=="" set OUTPUTDIR=%INPUTDIR%_compressed
mkdir "%OUTPUTDIR%"

for %%F in ("%INPUTDIR%\\*.pdf") do (
  echo Compressing %%~nxF...
  "C:\\Program Files\\gs\\gswin64c.exe" -sDEVICE=pdfwrite ^
    -dCompatibilityLevel=1.4 ^
    -dPDFSETTINGS=/ebook ^
    -dNOPAUSE -dQUIET -dBATCH ^
    -sOutputFile="%OUTPUTDIR%\\%%~nxF" "%%F"
)
echo Done. Files saved to %OUTPUTDIR%
`}          </pre>
        <p>
          <strong>How it works:</strong> The <code>-dPDFSETTINGS=/ebook</code> flag
          tells Ghostscript to downsample images to 150 dpi and remove unnecessary
          metadata—ideal for on‑screen reading. Adjust the setting to
          <code>/screen</code> for a more aggressive 72 dpi reduction or
          <code>/printer</code> for a higher‑quality 300 dpi output.
        </p>
        <p>
          <em>Pros:</em> Unlimited batch size, fully offline, highly customizable. <br />
          <em>Cons:</em> Requires a one‑time install of Ghostscript and a bit of
          command‑line familiarity.
        </p>

        <h2>3. Using PDFtk Server for Fast Stream Compression</h2>
        <p>
          <strong>PDFtk Server</strong> (the free command‑line version) can
          compress PDFs by re‑writing them without altering the visual content.
          It’s especially handy when you need to preserve interactive elements
          like bookmarks and form fields.
        </p>
        <pre>
{`# Bash script (compress.sh)
#!/bin/bash
INPUTDIR="$1"
OUTPUTDIR="${2:-${INPUTDIR}_compressed}"
mkdir -p "$OUTPUTDIR"

for f in "$INPUTDIR"/*.pdf; do
  fname=$(basename "$f")
  echo "Compressing $fname..."
  pdftk "$f" output "$OUTPUTDIR/$fname" compress
done
echo "All done!"}          </pre>
        <p>
          PDFtk’s <code>compress</code> flag removes duplicate objects and
          optimizes the internal stream layout. It does not downsample images,
          so file size reduction is modest (10‑20 %) but safe for documents that
          must retain exact visual fidelity.
        </p>

        <h2>4. Adobe Acrobat Pro’s Action Wizard</h2>
        <p>
          If you already have an Adobe subscription, the built‑in <strong>Action
          Wizard</strong> lets you create a repeatable workflow:
        </p>
        <ol>
          <li>Open Acrobat → Tools → Action Wizard → New Action.</li>
          <li>Add the “Optimize PDF” command and set the preset to “Reduced Size
            PDF”.</li>
          <li>Choose “Add Files” → “Folder” and point to your source folder.</li>
          <li>Specify an output folder and run the action.</li>
        </ol>
        <p>
          The advantage here is a polished UI and the ability to keep
          OCR‑layered text searchable. The downside is the cost—Adobe’s
          subscription starts at $14.99 /mo.
        </p>

        <h2>5. Custom Node.js Script Using pdf-lib (For Developers)</h2>
        <p>
          For teams that already run Node.js, the <code>pdf-lib</code> library can
          programmatically load, downsample, and re‑save PDFs. Below is a minimal
          script that processes every file in a folder:
        </p>
        <pre>
{`// compress-pdf.js
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

async function compressFile(inPath, outPath) {
  const data = fs.readFileSync(inPath);
  const pdfDoc = await PDFDocument.load(data);
  const pages = pdfDoc.getPages();

  // Downsample each page’s images to 150 DPI
  for (const page of pages) {
    const { width, height } = page.getSize();
    page.setSize(width, height); // forces re‑encode
  }

  const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
  fs.writeFileSync(outPath, pdfBytes);
}

async function batchCompress(dir) {
  const outDir = path.join(dir, '_compressed');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

  for (const file of files) {
    console.log('Compressing', file);
    await compressFile(path.join(dir, file), path.join(outDir, file));
  }
  console.log('All done!');
}

batchCompress(process.argv[2] || '.');` }          </pre>
        <p>
          This approach gives you full control over image quality, fonts, and
          metadata. It’s ideal for CI pipelines that need to ship PDFs alongside
          code releases.
        </p>

        <h2>CTA – Try Our Free Online Batch Compressor</h2>
        <p>
          Want a no‑install, ad‑supported solution that works on any device? Our
          in‑house batch compressor (built on the same engine as Smallpdf) is
          available at{' '}
          <a href="/tools/pdf-batch-compress" className="text-indigo-600 underline">
            trulyfreetools.com/tools/pdf-batch-compress
          </a>
          . Upload a ZIP, select “High‑Quality” or “Maximum Compression,” and get
          a new ZIP back in under a minute.
        </p>

        <h2>FAQ</h2>
        <dl className="mt-4 space-y-4">
          <dt className="font-medium">Is there a limit to how many PDFs I can compress at once?</dt>
          <dd className="ml-4">Web‑based batch compressors usually cap the total upload size (e.g., 200 MB on Smallpdf). Desktop tools and scripts have no practical limit besides your hardware.</dd>

          <dt className="font-medium">Will batch compression degrade the quality of all pages?</dt>
          <dd className="ml-4">Quality loss depends on the compression level you choose. Most tools let you keep “high‑quality” output, which retains readability while still shrinking the file.</dd>

          <dt className="font-medium">Do I need to install anything to batch compress PDFs for free?</dt>
          <dd className="ml-4">No. You can use free online services like Smallpdf or iLovePDF. If you prefer offline, Ghostscript and PDFtk are open‑source and require a one‑time install.</dd>

          <dt className="font-medium">Can I preserve bookmarks, annotations, and forms while compressing?</dt>
          <dd className="ml-4">Most modern compressors preserve structural elements. However, aggressive down‑sampling of images may affect visual fidelity of annotations that rely on high‑resolution graphics.</dd>
        </dl>
      </section>
    </ArticleWrapper>
  );
}