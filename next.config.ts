import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.newsweek.com",
      },
      {
        protocol: "https",
        hostname: "kubrick.htvapps.com",
      },
      {
        protocol: "https",
        hostname: "thumb.spokesman.com",
      },
      {
        protocol: "http",
        hostname: "bloximages.newyork1.vip.townnews.com",
      },
      {
        protocol: "https",
        hostname: "static.files.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "ichef.bbci.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.bbc.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "a1.api.bbc.co.uk",
      },
      {
        protocol: "https",
        hostname: "ychef.files.bbci.co.uk",
      }
      // 필요한 도메인 계속 추가 가능
    ],
  },
};

export default nextConfig;
