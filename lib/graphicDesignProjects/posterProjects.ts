import type { GraphicDesignPosterProject } from "@/lib/graphicDesignTypes";

const POSTERS = "/graphic-design/posters";

export const POSTER_PROJECTS: GraphicDesignPosterProject[] = [
  {
    id: "project-1",
    projectLabel: "Project 1",
    projectTitle: "Kirubai Clinic Banner",
    tagline: "Street-board revamp — before and after",
    overview:
      "Large-format board for the clinic: clearer information hierarchy, calmer lettering, and a more confident layout so it reads at a distance.",
    beforeAfter: {
      oldSrc: `${POSTERS}/Old.png`,
      newSrc: `${POSTERS}/New_Clinic_Board.png`,
      oldAlt: "Kirubai Clinic banner before redesign",
      newAlt: "Kirubai Clinic banner after redesign",
      intrinsicWidth: 6400,
      intrinsicHeight: 3072,
    },
  },
  {
    id: "project-2",
    projectLabel: "Project 2",
    projectTitle: "Infinex Corporation",
    tagline: "Building signage — outside & inside",
    overview:
      "Branded boards for the Infinex Corporation location: a clear read from the approach (outside) and a consistent, professional presence in the interior.",
    imagePairTitle: "Outside & inside",
    beforeAfter: {
      oldSrc: `${POSTERS}/Infinex_B_Outside.png`,
      newSrc: `${POSTERS}/Infinex_B_Inside.png`,
      oldAlt: "Infinex Corporation exterior signage",
      newAlt: "Infinex Corporation interior signage",
      intrinsicWidth: 10500,
      intrinsicHeight: 13500,
    },
  },
  {
    id: "project-3",
    projectLabel: "Project 3",
    projectTitle: "The Key",
    tagline: "The Centre for Special Education — tri-fold brochure",
    overview:
      "Tri-fold brochure for The Key — The Centre for Special Education (Chennai, Vadapalani), plus exterior signage. Navy, gold, and white, with student and classroom photography and a script logotype. Messaging leads with care: help every child unlock potential, with services from assessment and IEPs through instruction, parent–school collaboration, behaviour strategies, advocacy, professional development, and family support. Contact: No. 4/6, Thirunagar 5th St; +91 98409 80958; contact@thekey.school; www.thekey.school. The sign board extends the same identity to the approach.",
    imagePairTitle: "Brochure and signage",
    beforeAfter: {
      oldSrc: `${POSTERS}/The_Key_Brochure_Back.png`,
      newSrc: `${POSTERS}/The_Key_Brochure_Front.png`,
      oldAlt: "The Key school brochure — back (contact, location, and identity)",
      newAlt: "The Key school brochure — front (brand, mission, and services overview)",
      intrinsicWidth: 1056,
      intrinsicHeight: 816,
    },
    thirdPanel: {
      src: `${POSTERS}/Key_Sign_Board.png`,
      alt: "The Key exterior sign board",
      intrinsicWidth: 9000,
      intrinsicHeight: 12000,
    },
    businessCardPair: {
      blockTitle: "Business card",
      first: {
        src: `${POSTERS}/key_front_b.png`,
        alt: "The Key business card — front (dark blue)",
        intrinsicWidth: 4200,
        intrinsicHeight: 2400,
      },
      second: {
        src: `${POSTERS}/The_Key_Card_Back_Dark_Blue.png`,
        alt: "The Key business card — back (dark blue)",
        intrinsicWidth: 1344,
        intrinsicHeight: 768,
      },
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
      oldSrc: `${POSTERS}/EOA_1.png`,
      newSrc: `${POSTERS}/EOA_1.png`,
      oldAlt: "Essence of Asia — logo",
      newAlt: "Essence of Asia — logo",
      intrinsicWidth: 1588,
      intrinsicHeight: 1580,
    },
    businessCardPair: {
      blockTitle: "Business card",
      first: {
        src: `${POSTERS}/EOA_Card_Front.png`,
        alt: "Essence of Asia business card — front",
        intrinsicWidth: 4200,
        intrinsicHeight: 2400,
      },
      second: {
        src: `${POSTERS}/EOA_Card_Back.png`,
        alt: "Essence of Asia business card — back",
        intrinsicWidth: 4200,
        intrinsicHeight: 2400,
      },
    },
  },
];
