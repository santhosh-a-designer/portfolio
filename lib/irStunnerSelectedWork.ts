import type { SelectedWorkProjectContent } from "@/components/SelectedWorkProjectCard";

const PACK = "/project-snippets/irstunner";

/** Shared assets: four box faces (front / back / left / right). */
export const IR_STUNNER_FACE_IMAGES: { src: string; alt: string; label: string }[] = [
  { src: `${PACK}/front.png`, alt: "IR STUNNER packaging — front face", label: "Front" },
  { src: `${PACK}/back.png`, alt: "IR STUNNER packaging — back face", label: "Back" },
  { src: `${PACK}/left.png`, alt: "IR STUNNER packaging — left face", label: "Left" },
  { src: `${PACK}/right.png`, alt: "IR STUNNER packaging — right face", label: "Right" },
];

/**
 * Project 1 — Selected Works: IR Stunner (aligned with irstunner.com positioning).
 */
export const IR_STUNNER_SELECTED_WORK: SelectedWorkProjectContent = {
  index: "01",
  title: "IR Stunner",
  subtitle: "UX Design & Development",
  duration: "Mar 2026",
  heroImages: IR_STUNNER_FACE_IMAGES.map(({ src, alt }) => ({ src, alt })),
  description:
    "IR STUNNER is an infrared heat–defence coating for factory and home roofs: mixed with paint, it cuts radiant heat before it enters the building—so spaces stay cooler and cooling load drops. The work was to make a technical B2B/B2C story land with authority, then carry that trust into shelf-ready packaging.",
  metrics: [
    { value: "Up to 95%", label: "Radiant block" },
    { value: "15–25°C", label: "Under-roof drop" },
    { value: "WhatsApp", label: "GTM + support" },
    { value: "Summer push", label: "Seasonal lift" },
  ],
  packagingImages: IR_STUNNER_FACE_IMAGES.map(({ src, alt, label }) => ({ src, alt, label })),
  href: "/ux-ui-shorts/irstunner",
  accentColor: "#1E40AF",
  linkLabel: "View project",
};
