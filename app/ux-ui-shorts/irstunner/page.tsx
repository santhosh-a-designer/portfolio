import type { Metadata } from "next";
import CaseStudyScrollToTop from "@/components/CaseStudyScrollToTop";
import IrstunnerUxShortView from "@/components/IrstunnerUxShortView";
import { getSiteUrl } from "@/lib/siteUrl";

const path = "/ux-ui-shorts/irstunner";

export const metadata: Metadata = {
  title: "UX UI Shorts — IR Stunner (Project 1)",
  description:
    "IR Stunner: UX/UI write-up, development notes, and packaging — tools, duration, live site, and product imagery.",
  alternates: {
    canonical: `${getSiteUrl()}${path}`,
  },
  openGraph: {
    title: "UX UI Shorts — IRSTUNNER | Simon Santhosh",
    description:
      "Product web story and packaging for infrared roof heat defense — IRSTUNNER.",
    url: `${getSiteUrl()}${path}`,
  },
};

export default function IrstunnerUxShortPage() {
  return (
    <main className="min-h-screen blueprint-page text-[#e8edf2]">
      <CaseStudyScrollToTop />
      <IrstunnerUxShortView />
    </main>
  );
}
