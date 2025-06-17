import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Basic optimizations
  compress: true,
  poweredByHeader: false,

  // Image optimization with sensible defaults
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
