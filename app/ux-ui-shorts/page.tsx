import type { Metadata } from "next";
import CaseStudyScrollToTop from "@/components/CaseStudyScrollToTop";
import UxUiShortsHubView from "@/components/UxUiShortsHubView";
import { getSiteUrl } from "@/lib/siteUrl";

const path = "/ux-ui-shorts";

export const metadata: Metadata = {
  title: "UX UI Shorts — P1, P2 & P3",
  description:
    "IR Stunner, iRasus, and IndiaOne ATM Manager — UX stories, showreels, and flows on one page.",
  alternates: {
    canonical: `${getSiteUrl()}${path}`,
  },
  openGraph: {
    title: "UX UI Shorts | Simon Santhosh",
    description: "IR Stunner, iRasus, and IndiaOne ATM — case-study-style shorts.",
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
