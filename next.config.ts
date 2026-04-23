import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Hides the dev-only blue top bar + route indicator (dev only; no effect in production). */
  devIndicators: false,
  async redirects() {
    return [
      { source: "/ux-ui-shorts/irstunner", destination: "/ux-ui-shorts?p=1", permanent: true },
      { source: "/ux-ui-shorts/irasus", destination: "/ux-ui-shorts?p=2", permanent: true },
    ];
  },
};

export default nextConfig;
