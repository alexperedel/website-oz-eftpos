import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'website-oz-eftpos';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
