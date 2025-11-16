import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/website-oz-eftpos' : '',
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
