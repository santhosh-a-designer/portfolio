import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Hides the dev-only blue top bar + route indicator (dev only; no effect in production). */
  devIndicators: false,
};

export default nextConfig;
