import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: [
      "@react-three/drei",
      "@react-three/fiber",
      "gsap",
    ],
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
