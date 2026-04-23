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
    "iRasus builds AI-driven battery intelligence for e-mobility, stationary storage, and manufacturing — the Preksha platform and related apps help fleets and operators see packs in real time, catch faults early, and extend life. I supported a dashboard revamp: competitor and landscape analysis, then cleaner tables, layouts, and real-time vehicle monitoring so heavy telemetry stays legible in operations.",
  uxUi:
    "I mapped competing analytics products and in-field review sessions to find where operators got lost. The UI prioritises at-a-glance health, trip and geolocation, and clear drill-downs from fleet → vehicle → pack — aligned with how admins and drivers actually work during incidents.",
  development:
    "Delivered as a Figma system: grids, table density, filter patterns, and responsive breakpoints for the monitoring views. The production stack stayed on the client side; I handed off component-ready frames and redlines for the internal app team.",
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
