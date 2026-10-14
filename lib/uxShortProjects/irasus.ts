import type { UxShortProjectContent } from "@/lib/uxShortProjectTypes";

const SHOWREEL_MOV = "/case-studies/parla/Irasus.mov";
const SHOWREEL_MP4 = "/case-studies/parla/Irasus.mp4";

/** iRasus scale metrics (publicly reported). No outbound link in the portfolio info bar. */
export const IRASUS_UX_SHORT = {
  projectLabel: "Project 2",
  projectTitle: "iRasus",
  thirdBlockTitle: "Design",
  tools: "Figma",
  duration: "Sept 2024 — Dec 2024",
  thirdInfoLabel: "Client link",
  thirdInfoFallback: "— (no public URL for this work)",
  overview:
    "AI-powered battery intelligence for global EV fleets and mega-watt stationary storage. We transformed millions of raw, chaotic telemetry data points into an ultra-clean, real-time command dashboard that operators and fleet managers can act on in seconds.",
  uxUi:
    "Designed mission-critical telemetry views: instantaneous pack health triage, geolocated battery thermal maps, and seamless multi-level drill-downs (Fleet ➔ Vehicle ➔ Pack ➔ Cell) to catch thermal anomalies before catastrophic failure.",
  development:
    "Engineered a high-density, low-latency Figma design system: pixel-perfect data grids, customizable threshold charts, and dark-mode operational palettes ready for continuous 24/7 industrial monitoring.",
  marketingStats: [
    { label: "Batteries tracked", value: "7,000+" },
    { label: "Energy managed", value: "2 GWh" },
    { label: "Fossil fuel saved", value: "730K ltr/yr" },
    { label: "CO₂ avoided", value: "1.06K tn/yr" },
    { label: "Buses & vehicles", value: "2,000+" },
  ],
  showreel: {
    src: SHOWREEL_MOV,
    mp4Src: SHOWREEL_MP4,
    mimeType: "video/quicktime",
    title: "Design walkthrough",
  },
  packagingImages: [],
  accentColor: "#FF7410",
} satisfies UxShortProjectContent;
