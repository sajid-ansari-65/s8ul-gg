import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.s8ul.gg",
      },
      {
        protocol: "https",
        hostname: "**.wp.com",
      },
    ],
    deviceSizes: [360, 414, 512, 640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-DNS-Prefetch-Control", value: "on" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        {
          key: "Cache-Control",
          value: "public, s-maxage=60, stale-while-revalidate=300",
        },
      ],
    },
    {
      source: "/api/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, s-maxage=10, stale-while-revalidate=59",
        },
      ],
    },
  ],
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
