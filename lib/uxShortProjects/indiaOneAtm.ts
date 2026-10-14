import type { UxShortProjectContent } from "@/lib/uxShortProjectTypes";

const BASE = "/project-snippets/indiaone-atm";

/** App walkthroughs: add `Atm-1.mp4` … `Atm-4.mp4` under `public/project-snippets/indiaone-atm/`. */
export const INDIAONE_ATM_UX_SHORT = {
  projectLabel: "Project 3",
  projectTitle: "IndiaOne ATM Manager",
  thirdBlockTitle: "Design",
  tools: "Figma · Mobile app (flows & UI)",
  duration: "2024 — 2025",
  thirdInfoLabel: "Access",
  thirdInfoFallback: "Client-only — no public link",
  overview:
    "Replacing messy paper notebooks with a tamper-proof mobile workflow. Field teams manually tracked millions in cash movement, cassette replenishment, and loadmen across rural ATMs with zero visibility. We designed a rapid, mistake-proof digital ledger tailored for high-stakes cash operations.",
  uxUi:
    "Designed two frictionless doorways: 'Admin' (fleet maps, real-time cassette status, and loadman monitoring) and 'Loadman' (fast denomination logging, bank cross-checks, and instant deposit confirmation). Zero clutter, no deep menus — every action is designed for speed and error prevention under bright sunlight.",
  development:
    "Built a high-contrast, scalable Figma UI system with rigid touch targets and offline-first mobile states. Handed off complete interaction specifications and component libraries for rapid enterprise deployment.",
  showreelVideoPairs: [
    {
      sectionTitle: "Admin",
      videos: [
        {
          id: "atm-1",
          label: "Atm-1",
          caption: "Adding a new loadman",
          src: `${BASE}/Atm-1.mp4?v=real-atm-1`,
        },
        {
          id: "atm-2",
          label: "Atm-2",
          caption: "See who deposited, and in which denominations",
          src: `${BASE}/Atm-2.mp4?v=real-atm-2`,
        },
      ],
    },
    {
      sectionTitle: "Loadman",
      videos: [
        {
          id: "atm-3",
          label: "Atm-3",
          caption: "Refill denomination inputs before depositing",
          src: `${BASE}/Atm-3.mp4?v=real-atm-3`,
        },
        {
          id: "atm-4",
          label: "Atm-4",
          caption: "Cross-check with bank values, confirm deposit; admin gets notified",
          src: `${BASE}/Atm-4.mp4?v=real-atm-4`,
        },
      ],
    },
  ],
  packagingImages: [],
  accentColor: "#FF7410",
} satisfies UxShortProjectContent;
