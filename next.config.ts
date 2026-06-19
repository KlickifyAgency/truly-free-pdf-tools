import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ads.txt",
        destination: "https://srv.adstxtmanager.com/19390/trulyfreetools.com",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
