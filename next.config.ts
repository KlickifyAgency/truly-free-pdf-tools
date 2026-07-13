import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/compress-pdf-without-uploading", destination: "/compress-pdf", permanent: true },
      { source: "/compress-large-pdf-free-no-limit", destination: "/compress-pdf", permanent: true },
      { source: "/merge-pdf-free-no-watermark", destination: "/merge-pdf", permanent: true },
      { source: "/split-pdf-free-no-account", destination: "/split-pdf", permanent: true },
      { source: "/pdf-to-word-free-no-email", destination: "/pdf-to-word", permanent: true },
      { source: "/remove-pdf-password-free-no-subscription", destination: "/remove-pdf-password", permanent: true },
      { source: "/free-pdf-tools-no-subscription", destination: "/", permanent: true },
      { source: "/pdf-tools-no-cloud-upload", destination: "/", permanent: true },
      { source: "/ilovepdf-alternative-free", destination: "/", permanent: true },
      { source: "/smallpdf-alternative-free", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
