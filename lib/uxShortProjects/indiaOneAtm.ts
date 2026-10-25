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
  thirdInfoFallback: "Client Project — Concept & UX Prototype",
  overview:
    "Designed for an ATM franchise operator managing IndiaOne ATM kiosks across rural routes. The operator historically tracked cash replenishment, cassette loading, and daily loadman logs on manual paper registers—leading to miscounts, delayed reconciliation, and zero central operational visibility.\n\nThe UX mission was to design an error-proof, tamper-evident mobile operational companion so the franchise admin and field loadmen could coordinate cash movement with simplicity and confidence under outdoor sunlight and spotty rural connectivity.",
  uxUi:
    "Structured two clean, role-tailored doorways with zero nested navigation:\n\n• Loadman Doorway: Engineered for fast on-site cash cassette loading. Features high-contrast, oversized touch targets for outdoor glare legibility, instant denomination count calculators (₹100, ₹200, ₹500), and a mandatory dual-step confirmation modal that reconciles physical cassette entries against bank dispatch receipts before locking.\n\n• Admin Doorway: A real-time mobile command view giving the franchise owner clear visibility into ATM cassette levels, loadman assignments, and daily deposit confirmations without wading through messy notebooks.",
  development:
    "Engineered a resilient interaction system tailored for field ergonomics:\n\n• Physical Ergonomics: Strict high-contrast color tokens and 48dp+ tap targets designed for quick operation on budget Android devices under sunlight.\n• Offline-First Mental Model: Designed intuitive caching and status indicators ensuring zero lost records when mobile data fluctuates at highway kiosks.\n• Error Prevention Workflows: Designed explicit non-happy path flows covering cash miscount alerts and supervisor confirmation prompts.",
  marketingStats: [
    { label: "Client Type", value: "Franchise Operator" },
    { label: "Form Factor", value: "Mobile UX (Android)" },
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
