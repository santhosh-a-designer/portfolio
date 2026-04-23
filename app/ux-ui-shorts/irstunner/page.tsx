import type { Metadata } from "next";
import CaseStudyScrollToTop from "@/components/CaseStudyScrollToTop";
import IrstunnerUxShortView from "@/components/IrstunnerUxShortView";
import { getSiteUrl } from "@/lib/siteUrl";

const path = "/ux-ui-shorts/irstunner";

export const metadata: Metadata = {
  title: "UX UI Shorts — IRSTUNNER",
  description:
    "Client work: IR STUNNER roof thermal coating — web positioning, WhatsApp-led growth, summer campaign, and packaging box design (front, back, sides).",
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
      <div className="border-b border-[#1e293b] px-5 py-2 sm:px-7 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-[9px] font-mono uppercase tracking-[0.2em] sm:text-[10px]">
          <span className="text-[#475569]">Index · 02.1 — UX UI Short</span>
          <span className="text-[#64748b]">IRSTUNNER</span>
        </div>
      </div>
      <IrstunnerUxShortView />
    </main>
  );
}
