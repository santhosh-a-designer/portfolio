import type { VidyasDesignSurface } from "@/lib/vidyasKitchenCaseStudyContent";

/** Measured harness specs from design-system.pdf v2.1 (same values as PDF previews). */
export type DesignSystemChipSpec = {
  w?: number;
  h?: number;
  r?: number;
};

export type DesignSystemHotspot = {
  /** Percent of screenshot width/height (0–100). */
  left: number;
  top: number;
  width: number;
  height: number;
  spec: DesignSystemChipSpec;
  /** Screen reader label for the highlighted control. */
  a11yName: string;
};

export type DesignSystemHeroScreen = {
  surfaceId: VidyasDesignSurface["id"];
  src: string;
  /** Intrinsic width / height for aspect-ratio wrapper + hotspot alignment. */
  intrinsicWidth: number;
  intrinsicHeight: number;
  alt: string;
  /** Caption under the device frame. */
  screenCaption: string;
  frame: "browser" | "phone";
  chips: Record<string, DesignSystemHotspot>;
};

export const designSystemHeroScreens: DesignSystemHeroScreen[] = [
  {
    surfaceId: "landing",
    src: "/case-studies/vidyas-kitchen/vidyas-kitchen-desktop-qr.png",
    intrinsicWidth: 1024,
    intrinsicHeight: 567,
    alt: "Vidya's Kitchen desktop landing page with QR code and WhatsApp order button on a dark food photography background.",
    screenCaption: "Landing · Desktop hero with WhatsApp CTA.",
    frame: "browser",
    chips: {
      "wa-cta": {
        left: 31,
        top: 69.5,
        width: 38,
        height: 9.5,
        spec: { w: 220, h: 48, r: 12 },
        a11yName: "WhatsApp order button",
      },
      "landing-card": {
        left: 26.5,
        top: 11,
        width: 47,
        height: 76,
        spec: { r: 16 },
        a11yName: "Centre landing card",
      },
      "order-row": {
        left: 22,
        top: 92.5,
        width: 56,
        height: 5.5,
        spec: { h: 48 },
        a11yName: "Footer policy links row",
      },
    },
  },
  {
    surfaceId: "customer",
    src: "/case-studies/vidyas-kitchen/pwa/flow/09-choose-size.jpg",
    intrinsicWidth: 470,
    intrinsicHeight: 1024,
    alt: "Customer PWA choose-size drawer over the menu with 500 gram and 1 kilogram options and a Done button.",
    screenCaption: "Customer · Menu → size drawer.",
    frame: "phone",
    chips: {
      "primary-btn": {
        left: 5.5,
        top: 86.2,
        width: 89,
        height: 6.8,
        spec: { w: 220, h: 56, r: 20 },
        a11yName: "Primary Done button",
      },
      "menu-card": {
        left: 5.5,
        top: 37.5,
        width: 89,
        height: 15.5,
        spec: { w: 220, r: 28 },
        a11yName: "Selected size card",
      },
      "size-drawer": {
        left: 5.5,
        top: 33.8,
        width: 43,
        height: 8.5,
        spec: { w: 108, h: 72, r: 16 },
        a11yName: "500 gram size tile",
      },
    },
  },
  {
    surfaceId: "driver",
    src: "/case-studies/vidyas-kitchen/design-system/driver-active-delivery.png",
    intrinsicWidth: 488,
    intrinsicHeight: 1024,
    alt: "Driver app active delivery screen with collect cash or UPI actions and swipe to mark delivered.",
    screenCaption: "Driver · Collect payment → swipe to deliver.",
    frame: "phone",
    chips: {
      swipe: {
        left: 4,
        top: 90.8,
        width: 92,
        height: 6.2,
        spec: { w: 280, h: 60, r: 14 },
        a11yName: "Swipe to mark delivered control",
      },
      "job-card": {
        left: 5,
        top: 27.5,
        width: 90,
        height: 9.5,
        spec: { w: 280, r: 18 },
        a11yName: "Order summary card",
      },
      collect: {
        left: 5,
        top: 69.5,
        width: 90,
        height: 13.5,
        spec: { w: 280, r: 16 },
        a11yName: "Collect cash or UPI block",
      },
    },
  },
  {
    surfaceId: "dashboard",
    src: "/case-studies/vidyas-kitchen/dashboard/ai-pricing.webp",
    intrinsicWidth: 3200,
    intrinsicHeight: 1739,
    alt: "Admin dashboard AI Pricing view with a pending Vijaya Dasami festival pricing card and approve action.",
    screenCaption: "Dashboard · AI Pricing → festival card.",
    frame: "browser",
    chips: {
      approve: {
        left: 54.5,
        top: 56.8,
        width: 13,
        height: 4.5,
        spec: { h: 44, r: 10 },
        a11yName: "Approve selected button",
      },
      stat: {
        left: 21.8,
        top: 13.2,
        width: 9.5,
        height: 8.8,
        spec: { w: 160, r: 16 },
        a11yName: "Pending suggestions stat tile",
      },
      sidebar: {
        left: 0.5,
        top: 23.2,
        width: 10.2,
        height: 4.8,
        spec: { w: 240, h: 44, r: 12 },
        a11yName: "AI Pricing sidebar row",
      },
    },
  },
];

export function heroScreenForSurface(id: VidyasDesignSurface["id"]): DesignSystemHeroScreen {
  const found = designSystemHeroScreens.find((s) => s.surfaceId === id);
  if (!found) throw new Error(`Missing design-system hero for ${id}`);
  return found;
}

export function formatChipSpec(spec: DesignSystemChipSpec): string {
  const parts: string[] = [];
  if (spec.w != null) parts.push(`${spec.w}px`);
  if (spec.h != null) parts.push(`${spec.h}px`);
  if (spec.r != null) parts.push(`r${spec.r}`);
  return parts.join(" · ");
}

export function formatChipSpecA11y(spec: DesignSystemChipSpec): string {
  const parts: string[] = [];
  if (spec.w != null && spec.h != null) parts.push(`${spec.w} by ${spec.h} pixels`);
  else if (spec.w != null) parts.push(`${spec.w} pixels wide`);
  else if (spec.h != null) parts.push(`${spec.h} pixels tall`);
  if (spec.r != null) parts.push(`corner radius ${spec.r}`);
  return parts.join(", ");
}
