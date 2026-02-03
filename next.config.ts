import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // Next.js 13+
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig