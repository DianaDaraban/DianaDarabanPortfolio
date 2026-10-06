import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Category pages moved under /portfolio (tabs); keep the old links working
  async redirects() {
    return [
      { source: "/ui-ux/:path*", destination: "/portfolio/ui-ux/:path*", permanent: true },
      { source: "/frontend/:path*", destination: "/portfolio/frontend/:path*", permanent: true },
      // The "Backend" tab became "Full-stack"
      { source: "/portfolio/backend/:path*", destination: "/portfolio/fullstack/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
