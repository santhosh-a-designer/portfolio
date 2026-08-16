import type { Metadata } from "next";
import UxUiShortsHubView from "@/components/UxUiShortsHubView";
import PageWrapper from "@/components/PageWrapper";
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
    <PageWrapper>
      <main className="min-h-screen blueprint-page text-[#e8edf2]">
        <UxUiShortsHubView />
      </main>
    </PageWrapper>
  );
}
