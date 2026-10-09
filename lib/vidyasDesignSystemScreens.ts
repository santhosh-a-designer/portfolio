import type { VidyasDesignSurface } from "@/lib/vidyasKitchenCaseStudyContent";

export type DesignSystemHeroScreen = {
  surfaceId: VidyasDesignSurface["id"];
  src: string;
  intrinsicWidth: number;
  intrinsicHeight: number;
  alt: string;
  screenCaption: string;
  frame: "browser" | "phone";
};

/** One main product screen per tab — existing case-study assets only. */
export const designSystemHeroScreens: DesignSystemHeroScreen[] = [
  {
    surfaceId: "landing",
    src: "/case-studies/vidyas-kitchen/pwa/flow/vklanding.png",
    intrinsicWidth: 12054,
    intrinsicHeight: 6552,
    alt: "Vidya's Kitchen desktop landing page with QR code and Order with Vidya Bot WhatsApp button.",
    screenCaption: "Landing · Desktop hero.",
    frame: "browser",
  },
  {
    surfaceId: "customer",
    src: "/case-studies/vidyas-kitchen/pwa/flow/06-home.webp",
    intrinsicWidth: 940,
    intrinsicHeight: 2048,
    alt: "Customer PWA home screen with meal schedule and browse menu entry points.",
    screenCaption: "Customer · Home.",
    frame: "phone",
  },
  {
    surfaceId: "driver",
    src: "/case-studies/vidyas-kitchen/driver/vkhome-3-collect-deliver.png",
    intrinsicWidth: 1080,
    intrinsicHeight: 2400,
    alt: "Driver app collect cash or UPI and swipe to mark delivered.",
    screenCaption: "Driver · Collect & deliver.",
    frame: "phone",
  },
  {
    surfaceId: "dashboard",
    src: "/case-studies/vidyas-kitchen/dashboard/ai-pricing.webp",
    intrinsicWidth: 3200,
    intrinsicHeight: 1739,
    alt: "Admin dashboard AI Pricing with festival pricing suggestions.",
    screenCaption: "Dashboard · AI Pricing.",
    frame: "browser",
  },
];

export function heroScreenForSurface(id: VidyasDesignSurface["id"]): DesignSystemHeroScreen {
  const found = designSystemHeroScreens.find((s) => s.surfaceId === id);
  if (!found) throw new Error(`Missing design-system hero for ${id}`);
  return found;
}
