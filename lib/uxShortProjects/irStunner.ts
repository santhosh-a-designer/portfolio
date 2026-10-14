import type { UxShortProjectContent } from "@/lib/uxShortProjectTypes";

const PACK = "/project-snippets/irstunner";

export const IRSTUNNER_UX_SHORT = {
  projectLabel: "Project 1",
  projectTitle: "IR Stunner",
  tools: "Figma · HTML · CSS · JS",
  duration: "Mar 2026",
  liveUrl: "https://irstunner.com",
  liveUrlDisplay: "irstunner.com",
  uxUi:
    "Architected dual conversion funnels: 'Industrial' for factory scale audits and 'CHILL HOME' for residential buyers. High-contrast stat strips and direct WhatsApp conversion loops drove immediate customer engagement.",
  development:
    "Engineered ultra-lean, mobile-first responsive architecture with instant-load media and custom SVG assets. Produced physical packaging dimensions and print-ready production files alongside digital surfaces.",
  overview:
    "A next-gen thermal radiation shield mixed directly into paint to cut interior heat before it enters buildings. We developed the end-to-end digital brand, interactive product visualizer, and retail packaging to drive direct consumer trust and contractor adoption.",
  marketingStats: [
    { label: "Sales growth (summer, WhatsApp-led)", value: "15% → 40%" },
    { label: "Core CTA", value: "WhatsApp + on-site / audit" },
    { label: "Split positioning", value: "Industrial · CHILL HOME" },
    { label: "Sales motion", value: "Specifiers → field trials" },
    { label: "Channel focus", value: "Consult-led, not paint upsell" },
  ],
  packagingImages: [
    { src: `${PACK}/front.webp`, alt: "IR STUNNER box — front", label: "Front" },
    { src: `${PACK}/back.webp`, alt: "IR STUNNER box — back", label: "Back" },
    { src: `${PACK}/left.webp`, alt: "IR STUNNER box — left", label: "Left" },
    { src: `${PACK}/right.webp`, alt: "IR STUNNER box — right", label: "Right" },
  ],
  accentColor: "#FF7410",
} satisfies UxShortProjectContent;
