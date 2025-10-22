/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: cacheComponents disabled for now - requires refactoring to add Suspense boundaries
  // Error: "Uncached data was accessed outside of <Suspense>" in /blog/[id] route
  // TODO: Wrap data fetching in Suspense boundaries to enable cacheComponents
  // cacheComponents: true,

  // Enable View Transitions
  experimental: {
    viewTransition: true,
  },

  images: {
    // Image optimization enabled for better SEO and performance
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // TODO: Fix these in production for better code quality
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
