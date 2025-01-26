import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Build sırasında ESLint hatalarını görmezden gel
  },
};

export default nextConfig;
