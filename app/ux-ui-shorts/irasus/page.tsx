import type { Metadata } from "next";
import CaseStudyScrollToTop from "@/components/CaseStudyScrollToTop";
import IrasusUxShortView from "@/components/IrasusUxShortView";
import { getSiteUrl } from "@/lib/siteUrl";

const path = "/ux-ui-shorts/irasus";

export const metadata: Metadata = {
  title: "UX UI Shorts — iRasus (Project 2)",
  description:
    "iRasus: EV battery monitoring dashboard — competitor research, layout and table patterns, and a Figma walkthrough. Public reference: irasus.com.",
  alternates: {
    canonical: `${getSiteUrl()}${path}`,
  },
  openGraph: {
    title: "UX UI Shorts — iRasus | Simon Santhosh",
    description:
      "Dashboard revamp for AI-driven battery analytics — real-time fleet and pack monitoring.",
    url: `${getSiteUrl()}${path}`,
  },
};

export default function IrasusUxShortPage() {
  return (
    <main className="min-h-screen blueprint-page text-[#e8edf2]">
      <CaseStudyScrollToTop />
      <IrasusUxShortView />
    </main>
  );
}
