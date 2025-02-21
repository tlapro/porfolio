import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = withNextIntl({
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
      },
    ],
  },
});

export default nextConfig;
