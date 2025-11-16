import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/website-oz-eftpos',
  assetPrefix: '/website-oz-eftpos/',
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
