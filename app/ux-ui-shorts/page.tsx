import type { Metadata } from "next";
import CaseStudyScrollToTop from "@/components/CaseStudyScrollToTop";
import UxUiShortsHubView from "@/components/UxUiShortsHubView";
import { getSiteUrl } from "@/lib/siteUrl";

const path = "/ux-ui-shorts";

export const metadata: Metadata = {
  title: "UX UI Shorts — Project 1 & 2",
  description:
    "IR Stunner and iRasus: two UX UI Shorts in one place — product web, packaging, and EV battery dashboard work.",
  alternates: {
    canonical: `${getSiteUrl()}${path}`,
  },
  openGraph: {
    title: "UX UI Shorts | Simon Santhosh",
    description: "IRSTUNNER + iRasus — case-study-style short projects.",
    url: `${getSiteUrl()}${path}`,
  },
};

export default function UxUiShortsPage() {
  return (
    <main className="min-h-screen blueprint-page text-[#e8edf2]">
      <CaseStudyScrollToTop />
      <UxUiShortsHubView />
    </main>
  );
}
