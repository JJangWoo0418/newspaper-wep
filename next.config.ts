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
      // 필요한 도메인 계속 추가 가능
    ],
  },
};

export default nextConfig;
