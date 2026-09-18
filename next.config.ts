import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Allow LAN access from smartphone during dev
  allowedDevOrigins: [
    "192.168.84.115",
    "192.168.84.115:3000",
    "10.215.158.55",
    "10.215.158.55:3000",
    "localhost:3000",
    "127.0.0.1:3000",
  ],
};

export default nextConfig;
