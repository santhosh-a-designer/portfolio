import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Hides the dev-only blue top bar + route indicator (dev only; no effect in production). */
  devIndicators: false,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; frame-src 'none'; sandbox;",
    // Serve modern formats — AVIF first (smallest), then WebP fallback
    formats: ["image/avif", "image/webp"],
    // Extended device sizes to handle large poster images without up-scaling
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimised images for 30 days
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      { source: "/ux-ui-shorts/irasus", destination: "/ux-ui-shorts?p=1", permanent: true },
    ];
  },
};

export default nextConfig;
