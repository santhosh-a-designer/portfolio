import type { UxShortProjectContent } from "@/lib/uxShortProjectTypes";

const PACK = "/project-snippets/irstunner";

export const IRSTUNNER_UX_SHORT = {
  projectLabel: "Project 1",
  projectTitle: "IR Stunner",
  tools: "Figma · Web layout · Brand & packaging",
  duration: "Mar 2025 — Mar 2026",
  liveUrl: "https://irstunner.com",
  liveUrlDisplay: "irstunner.com",
  uxUi:
    "Two distinct entry points — industrial and CHILL HOME residential — so each visitor sees only the story relevant to their roof. High-contrast stat strips and repeated WhatsApp/audit CTAs keep the decision path short.",
  development:
    "Static-first, mobile-optimised build with lazy images and clear heading hierarchy. Handoff included UI tokens and packaging dimensions so marketing updates stay low-friction.",
  overview:
    "A powder you mix with paint so factory and home roofs act as a thermal shield — cutting radiant heat before it enters the building. The design goal was trust: credible numbers, a consult-first CTA, and packaging that reads cleanly in-store and in photos.",
  packagingImages: [
    { src: `${PACK}/front.png`, alt: "IR STUNNER box — front", label: "Front" },
    { src: `${PACK}/back.png`, alt: "IR STUNNER box — back", label: "Back" },
    { src: `${PACK}/left.png`, alt: "IR STUNNER box — left", label: "Left" },
    { src: `${PACK}/right.png`, alt: "IR STUNNER box — right", label: "Right" },
  ],
  accentColor: "#FF7410",
} satisfies UxShortProjectContent;
