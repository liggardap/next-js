import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Tree-shake large icon/animation packages to only bundle what's imported
    optimizePackageImports: ["@tabler/icons-react", "framer-motion"],
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Enforce strict trailing-slash behaviour for consistent canonical URLs
  trailingSlash: false,
};

export default nextConfig;
