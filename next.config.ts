import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media3.giphy.com'], // add Giphy host here
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
