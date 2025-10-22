// next.config.js

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // For images from the home page
        port: '',
        pathname: '/**',
      },
      // FIX: ADDED the new domain 'i.postimg.cc' to resolve the current runtime error
      {
        protocol: 'https',
        hostname: 'i.postimg.cc', // The domain from the error message
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
