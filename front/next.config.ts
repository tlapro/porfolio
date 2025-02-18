import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      }
    ]
  }
};

export default nextConfig;
