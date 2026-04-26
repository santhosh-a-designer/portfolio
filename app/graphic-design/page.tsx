import type { Metadata } from "next";
import CaseStudyScrollToTop from "@/components/CaseStudyScrollToTop";
import GraphicDesignHubView from "@/components/GraphicDesignHubView";
import { getSiteUrl } from "@/lib/siteUrl";

const path = "/graphic-design";

export const metadata: Metadata = {
  title: "Graphic design — P1–P4",
  description:
    "Print, signage, and brand work: Kirubai Clinic, Infinex, The Key, and Essence of Asia (masala & health mix) — same page layout as UX UI Shorts.",
  alternates: {
    canonical: `${getSiteUrl()}${path}`,
  },
  openGraph: {
    title: "Graphic design | Simon Santhosh",
    description: "Kirubai, Infinex, The Key, and Essence of Asia — P1–P4 on one page.",
    url: `${getSiteUrl()}${path}`,
  },
};

export default function GraphicDesignPage() {
  return (
    <main className="min-h-screen overflow-x-hidden blueprint-page text-[#e8edf2]">
      <CaseStudyScrollToTop />
      <GraphicDesignHubView />
    </main>
  );
}
