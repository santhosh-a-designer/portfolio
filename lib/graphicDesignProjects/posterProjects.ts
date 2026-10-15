import type { GraphicDesignPosterProject } from "@/lib/graphicDesignTypes";

const POSTERS = "/graphic-design/posters";
const IRSTUNNER = "/project-snippets/irstunner";

export const POSTER_PROJECTS: GraphicDesignPosterProject[] = [
  {
    id: "project-1",
    projectLabel: "Project 1",
    projectTitle: "The Key",
    tagline: "The Centre for Special Education — tri-fold brochure",
    overview:
      "Tri-fold brochure for The Key — The Centre for Special Education (Chennai, Vadapalani), plus exterior signage. Navy, gold, and white, with student and classroom photography and a script logotype. Messaging leads with care: help every child unlock potential, with services from assessment and IEPs through instruction, parent–school collaboration, behaviour strategies, advocacy, professional development, and family support. Contact: No. 4/6, Thirunagar 5th St; +91 98409 80958; contact@thekey.school; www.thekey.school. The sign board extends the same identity to the approach.",
    imagePairTitle: "Brochure and signage",
    beforeAfter: {
      oldSrc: `${POSTERS}/The_Key_Brochure_Back.webp`,
      newSrc: `${POSTERS}/The_Key_Brochure_Front.webp`,
      oldAlt: "The Key school brochure — back (contact, location, and identity)",
      newAlt: "The Key school brochure — front (brand, mission, and services overview)",
      intrinsicWidth: 1056,
      intrinsicHeight: 816,
    },
    thirdPanel: {
      src: `${POSTERS}/Key_Sign_Board.webp`,
      alt: "The Key exterior sign board",
      intrinsicWidth: 1920,
      intrinsicHeight: 2560,
    },
    businessCardPair: {
      blockTitle: "Business card",
      first: {
        src: `${POSTERS}/key_front_b.webp`,
        alt: "The Key business card — front (dark blue)",
        intrinsicWidth: 4200,
        intrinsicHeight: 2400,
      },
      second: {
        src: `${POSTERS}/The_Key_Card_Back_Dark_Blue.webp`,
        alt: "The Key business card — back (dark blue)",
        intrinsicWidth: 1344,
        intrinsicHeight: 768,
      },
    },
  },
  {
    id: "project-2",
    projectLabel: "Project 2",
    projectTitle: "Kirubai Clinic Banner",
    tagline: "Street-board revamp — before and after",
    overview:
      "Large-format board for the clinic: clearer information hierarchy, calmer lettering, and a more confident layout so it reads at a distance.",
    beforeAfter: {
      oldSrc: `${POSTERS}/Old.webp`,
      newSrc: `${POSTERS}/New_Clinic_Board.webp`,
      oldAlt: "Kirubai Clinic banner before redesign",
      newAlt: "Kirubai Clinic banner after redesign",
      intrinsicWidth: 6400,
      intrinsicHeight: 3072,
    },
  },
  {
    id: "project-3",
    projectLabel: "Project 3",
    projectTitle: "Infinex Corporation",
    tagline: "Building signage — outside & inside",
    overview:
      "Branded boards for the Infinex Corporation location: a clear read from the approach (outside) and a consistent, professional presence in the interior.",
    imagePairTitle: "Outside & inside",
    beforeAfter: {
      oldSrc: `${POSTERS}/Infinex_B_Outside.webp`,
      newSrc: `${POSTERS}/Infinex_B_Inside.webp`,
      oldAlt: "Infinex Corporation exterior signage",
      newAlt: "Infinex Corporation interior signage",
      intrinsicWidth: 10500,
      intrinsicHeight: 13500,
    },
  },
  {
    id: "project-4",
    projectLabel: "Project 4",
    projectTitle: "Essence of Asia",
    tagline: "Packaging identity for masala & health mix",
    overview:
      "Branding and print touchpoints for Essence of Asia — a masala and health mix line: logo and business cards with a food-forward, wellness-led presence.",
    imagePairTitle: "Logo",
    useMainRowSingleImage: true,
    beforeAfter: {
      oldSrc: `${POSTERS}/EOA_1.webp`,
      newSrc: `${POSTERS}/EOA_1.webp`,
      oldAlt: "Essence of Asia — logo",
      newAlt: "Essence of Asia — logo",
      intrinsicWidth: 1588,
      intrinsicHeight: 1580,
    },
    businessCardPair: {
      blockTitle: "Business card",
      first: {
        src: `${POSTERS}/EOA_Card_Front.webp`,
        alt: "Essence of Asia business card — front",
        intrinsicWidth: 4200,
        intrinsicHeight: 2400,
      },
      second: {
        src: `${POSTERS}/EOA_Card_Back.webp`,
        alt: "Essence of Asia business card — back",
        intrinsicWidth: 4200,
        intrinsicHeight: 2400,
      },
    },
  },
  {
    id: "project-5",
    projectLabel: "Project 5",
    projectTitle: "IR Stunner",
    tagline: "Packaging design · thermal shield powder for factory & home roofs",
    overview:
      "A powder mixed with paint so factory and home roofs act as a thermal shield — cutting radiant heat before it enters the building. The design goal was trust: credible numbers, a consult-first CTA, and packaging that reads cleanly in-store and in photos. Two distinct entry points — Industrial and CHILL HOME residential — so each audience sees only the story relevant to their roof.",
    imagePairTitle: "Packaging — all four sides",
    hideImageBlock: true,
    // beforeAfter is required by type but hidden via hideImageBlock — use front as placeholder
    beforeAfter: {
      oldSrc: `${IRSTUNNER}/front.webp`,
      newSrc: `${IRSTUNNER}/back.webp`,
      oldAlt: "IR Stunner box — front",
      newAlt: "IR Stunner box — back",
      intrinsicWidth: 800,
      intrinsicHeight: 800,
    },
    packagingImages: [
      { src: `${IRSTUNNER}/front.webp`, alt: "IR STUNNER box — front", label: "Front" },
      { src: `${IRSTUNNER}/back.webp`, alt: "IR STUNNER box — back", label: "Back" },
      { src: `${IRSTUNNER}/left.webp`, alt: "IR STUNNER box — left", label: "Left" },
      { src: `${IRSTUNNER}/right.webp`, alt: "IR STUNNER box — right", label: "Right" },
    ],
    marketingStats: [
      { label: "Sales growth (summer, WhatsApp-led)", value: "15% → 40%" },
      { label: "Core CTA", value: "WhatsApp + on-site audit" },
      { label: "Split positioning", value: "Industrial · CHILL HOME" },
      { label: "Sales motion", value: "Specifiers → field trials" },
      { label: "Channel focus", value: "Consult-led, not paint upsell" },
    ],
  },
  {
    id: "project-6",
    projectLabel: "Project 6",
    projectTitle: "BowlBae",
    tagline: "Subscription bowl menu pamphlet & packaging sticker",
    overview:
      "Full print identity for BowlBae's fresh fruit, egg, sprout, and protein subscriptions. Designed a dual-sided marketing pamphlet: Front spotlights tiered subscription plans (Mini, Classic, Prime, Elite) with weekly and monthly pricing, while the Back details curated box compositions and daily freshness guarantees. Accompanied by a circular die-cut delivery container sticker.",
    imagePairTitle: "Menu pamphlet — front & back",
    beforeAfter: {
      oldSrc: "/graphic-design/new-works/BowlBae_Pamphlet_Front_High.webp",
      newSrc: "/graphic-design/new-works/BowlBae_Pamphlet_Back_High.webp",
      oldAlt: "BowlBae subscription menu pamphlet — front (plans & pricing)",
      newAlt: "BowlBae subscription menu pamphlet — back (box compositions & ingredients)",
      intrinsicWidth: 1748,
      intrinsicHeight: 2480,
      leftLabel: "[PAMPHLET FRONT — PRICING & TIERS]",
      rightLabel: "[PAMPHLET BACK — NUTRITION & BOXES]",
    },
    businessCardPair: {
      blockTitle: "Delivery packaging sticker",
      second: {
        src: "/graphic-design/new-works/bowlbaeSticker_1.webp",
        alt: "BowlBae circular brand sticker for delivery bowls",
        intrinsicWidth: 718,
        intrinsicHeight: 738,
      },
    },
  },
  {
    id: "project-7",
    projectLabel: "Project 7",
    projectTitle: "Slice of Chaos",
    tagline: "Special brownie menu & packaging sticker",
    overview:
      "Artisan bakery print system for Slice of Chaos ('Baked and Bullets'). Features a crafted special menu poster breaking down full-sized fudgy brownie varieties (Classic, Nutella, Bullet Man) and mini bite-sized options, paired with an edgy round brand sticker for pastry boxes and seal tape.",
    imagePairTitle: "Menu poster",
    useMainRowSingleImage: true,
    beforeAfter: {
      oldSrc: "/graphic-design/new-works/SOC_MENU.webp",
      newSrc: "/graphic-design/new-works/SOC_MENU.webp",
      oldAlt: "Slice of Chaos special brownie menu poster",
      newAlt: "Slice of Chaos special brownie menu poster",
      intrinsicWidth: 595,
      intrinsicHeight: 842,
    },
    businessCardPair: {
      blockTitle: "Box seal sticker",
      second: {
        src: "/graphic-design/new-works/soc_sticker.webp",
        alt: "Slice of Chaos round packaging seal sticker",
        intrinsicWidth: 1024,
        intrinsicHeight: 1024,
      },
    },
  },
  {
    id: "project-8",
    projectLabel: "Project 8",
    projectTitle: "Harshi Salon & Tanushka Mehndi",
    tagline: "Double business card identity — front & back",
    overview:
      "Two premium beauty & salon print identities. 1) Harshi Salon Stylist: Elegant dark business card featuring HD bridal makeup, facial, and nail service offerings with clean Delhi studio contact details. 2) Tanushka Mehndi: Warm terracotta and henna-inspired card detailing bridal, Arabic, and creative hidden mehndi artistry.",
    imagePairTitle: "Harshi Salon Stylist — card pair",
    beforeAfter: {
      oldSrc: "/graphic-design/new-works/Harshi_Salon_Front.webp",
      newSrc: "/graphic-design/new-works/Harshi_Salon_Back.webp",
      oldAlt: "Harshi Salon Stylist business card — front",
      newAlt: "Harshi Salon Stylist business card — back with service list",
      intrinsicWidth: 1050,
      intrinsicHeight: 600,
      leftLabel: "[HARSHI SALON — FRONT]",
      rightLabel: "[HARSHI SALON — BACK (SERVICES)]",
    },
    businessCardPair: {
      blockTitle: "Tanushka Mehndi artist — card pair",
      first: {
        src: "/graphic-design/new-works/Tanushka_Mehndi_Front.webp",
        alt: "Tanushka Mehndi business card — front",
        intrinsicWidth: 1050,
        intrinsicHeight: 600,
      },
      second: {
        src: "/graphic-design/new-works/Tanushka_Mehndi_Back.webp",
        alt: "Tanushka Mehndi business card — back with bridal mehndi offerings",
        intrinsicWidth: 1050,
        intrinsicHeight: 600,
      },
    },
  },
];

