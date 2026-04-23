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
  overview: [
    "The client runs ATMs, and a surprising amount of the job still lived on paper: when a machine was low on cash, when it needed a firmware or configuration touch, and especially how cash moved from the bank, through loadmen, and into the cassettes. Teams were manually checking sites, writing down who carried what, and tracking how much each loadman had deposited and in which denominations — all in notebooks and loose sheets. When one person oversaw more than one ATM in different areas, the mental map broke even faster. The load was on one side; proof of what went into the machine was on another.",
    "After a working session with the client, the problem sharpened: they did not need another heavy banking product — they needed a trustworthy ledger in the field that could follow loadmen, cassettes, and deposits in one place, with as few taps and menus as possible so mistakes drop while everyone still feels in control.",
  ].join("\n\n"),
  uxUi: [
    "We sketched a product with two logins that mirror how work actually happens. Admin owns the people and the map: they onboard and manage loadmen, see who put cash into which ATM, and can switch between two or more machines in different areas without juggling separate notebooks. Loadman works at arm’s length: they record denominations they received from the bank, fill what they are about to put into the machine before a deposit run, then cross-check what they typed against the bank’s figures, confirm the drop, and that signal goes straight back to the admin — a closed loop, no extra phone tag.",
    "The client was explicit: no bottom nav, no hamburger of mystery screens, no enterprise density. The speciality of this app is that it feels like two clean doors (Admin vs Loadman), shallow screens, and as little touching as we could get away with — one primary action per moment, and the rest stays out of the way. That’s how we kept it simple, fast to train, and hard to use wrong in a rush.",
  ].join("\n\n"),
  development:
    "I translated the flows into a tight Figma system — spacing, type, and a single primary action pattern — then into build-ready screens for a mobile app so engineering could implement without re-interpreting the field logic. NDA/ops constraints mean the build stays in the client’s environment; the deliverable on my side is the interaction model, UI, and handoff that matches how they work on site every day.",
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
