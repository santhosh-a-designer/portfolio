import type { UxShortProjectContent } from "@/lib/uxShortProjectTypes";

const BASE = "/project-snippets/indiaone-atm";

/** App walkthroughs: add `Atm-1.mp4` … `Atm-4.mp4` under `public/project-snippets/indiaone-atm/`. */
export const INDIAONE_ATM_UX_SHORT = {
  projectLabel: "Project 3",
  projectTitle: "IndiaOne ATM Manager",
  thirdBlockTitle: "Interaction & System",
  tools: "Figma · Mobile App UI · Field UX",
  duration: "2024 — 2025",
  thirdInfoLabel: "Access",
  thirdInfoFallback: "Client-only — Enterprise Field App",
  overview:
    "IndiaOne ATM is India's largest White Label ATM network, servicing rural and semi-urban tier-3 and tier-4 locations. Field teams historically tracked cash replenishment, cassette loading, and daily machine reconciliation on manual paper registers—leading to miscounts, delayed maintenance, and zero central operational visibility.\n\nThe UX mission was to design an error-proof, tamper-evident mobile operational companion that field personnel could operate with speed and confidence under direct sunlight, dusty outdoor environments, and intermittent rural connectivity.",
  uxUi:
    "Structured two clean, role-tailored doorways with zero nested navigation:\n\n• Loadman Doorway: Engineered for fast on-site cash cassette loading. Features high-contrast, oversized touch targets for outdoor glare legibility, instant denomination count calculators (₹100, ₹200, ₹500), and a mandatory dual-step confirmation modal that reconciles physical cassette entries against bank dispatch records before locking.\n\n• Admin Doorway: A real-time command dashboard giving cluster managers live fleet cassette statuses, route dispatch schedules, loadman check-ins, and immediate discrepancy alerts. Complex operational data is reduced to high-priority action cards.",
  development:
    "Engineered a resilient interaction system tailored for field ergonomics:\n\n• Sunlight Legibility: Strict high-contrast color tokens and 48dp+ tap targets designed for quick operation on budget Android devices.\n• Offline-First State Machine: Built-in local caching ensuring zero data loss when 2G/3G connectivity drops at remote highway kiosks, automatically syncing securely upon reconnection.\n• Error Prevention Architecture: Explicit non-happy path flows covering cash miscount alerts, vault sensor warnings, and supervisor override approvals.",
  marketingStats: [
    { label: "Deployment", value: "Tier-3/4 Rural" },
    { label: "Architecture", value: "Offline-First" },
    { label: "Primary Roles", value: "Admin & Loadman" },
    { label: "Design Focus", value: "Error-Tolerant UI" },
  ],
  showreelVideoPairs: [
    {
      sectionTitle: "Admin Workflow",
      videos: [
        {
          id: "atm-1",
          label: "Atm-1",
          caption: "Adding & assigning a new loadman",
          src: `${BASE}/Atm-1.mp4?v=real-atm-1`,
        },
        {
          id: "atm-2",
          label: "Atm-2",
          caption: "Real-time deposit tracking & denomination audit",
          src: `${BASE}/Atm-2.mp4?v=real-atm-2`,
        },
      ],
    },
    {
      sectionTitle: "Loadman Workflow",
      videos: [
        {
          id: "atm-3",
          label: "Atm-3",
          caption: "High-contrast cash denomination inputs",
          src: `${BASE}/Atm-3.mp4?v=real-atm-3`,
        },
        {
          id: "atm-4",
          label: "Atm-4",
          caption: "Bank slip cross-check, confirmation & dispatch notify",
          src: `${BASE}/Atm-4.mp4?v=real-atm-4`,
        },
      ],
    },
  ],
  packagingImages: [],
  accentColor: "#FF7410",
} satisfies UxShortProjectContent;
