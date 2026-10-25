import type { UxShortProjectContent } from "@/lib/uxShortProjectTypes";

const SHOWREEL_MOV = "/case-studies/parla/Irasus.mov";
const SHOWREEL_MP4 = "/case-studies/parla/Irasus.mp4";

/** iRasus scale metrics (publicly reported). No outbound link in the portfolio info bar. */
export const IRASUS_UX_SHORT = {
  projectLabel: "Project 2",
  projectTitle: "iRasus",
  thirdBlockTitle: "System & Architecture",
  tools: "Figma · Telemetry UI · Design System",
  duration: "Sept 2024 — Dec 2024",
  thirdInfoLabel: "Platform",
  thirdInfoFallback: "Internal Command Dashboard (B2B SaaS)",
  overview:
    "iRasus provides AI-powered battery telemetry and predictive intelligence for commercial electric vehicle fleets and mega-watt stationary energy storage systems. Fleet operations centers monitor millions of high-frequency sensor streams across distributed batteries in real time.\n\nThe core UX challenge was overcoming severe operator alert fatigue. When monitoring thousands of live battery packs, raw data feeds quickly overwhelm human operators. Our objective was structuring a calm, actionable triage interface that isolates thermal and electrical anomalies in seconds.",
  uxUi:
    "Designed a 3-tier progressive disclosure hierarchy allowing operators to transition from broad fleet health to isolated cell diagnostics seamlessly:\n\n• Tier 1 (Fleet Health Triage): High-level operational board grouping vehicles by urgency (Normal, Advisory, Critical) rather than raw sensor figures, allowing instant morning prioritization.\n• Tier 2 (Telemetry Diagnostics): Geolocated thermal curves, charge-discharge cycle overlays, and State of Health (SoH) degradation charts benchmarked against fleet baselines.\n• Tier 3 (Cell-Level Fault Isolation): Deep-dive matrix mapping individual battery cells, enabling engineers to identify abnormal internal resistance and localized overheating before thermal runaway occurs.",
  development:
    "Engineered a high-density, low-latency Figma design system built for continuous 24/7 command operations:\n\n• Command Room Dark Theme: Carefully calibrated WCAG AAA contrast tokens for warning badges to reduce ocular fatigue during extended night shifts.\n• Dense Data Grids: Compact tabular views and customizable threshold filters tested for large multi-monitor command walls down to field diagnostic laptops.\n• Resilient Live Telemetry States: Designed micro-states for delayed sensor packets, hardware disconnect indicators, and timestamp synchronization status.",
  marketingStats: [
    { label: "Batteries tracked", value: "7,000+" },
    { label: "Energy managed", value: "2 GWh" },
    { label: "Buses & vehicles", value: "2,000+" },
    { label: "Design System", value: "High-Density" },
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
