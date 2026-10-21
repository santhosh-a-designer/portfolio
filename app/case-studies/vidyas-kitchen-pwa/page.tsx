import type { Metadata } from "next";
import HeaderV2 from "@/app/v2/components/HeaderV2";
import CaseStudyScrollToTop from "@/components/CaseStudyScrollToTop";
import VidyasKitchenCaseStudyView from "@/components/vidyas-kitchen/VidyasKitchenCaseStudyView";
import { getDesignSystemPdfMeta } from "@/lib/designSystemPdfMeta";

export const metadata: Metadata = {
  title: "Vidya's Kitchen — Case Study | Santhosh A",
  description:
    "0→1 home food delivery in Sivakasi: PWA, WhatsApp bot, kitchen dashboard with AI pricing, driver app — owned product design and build inside a 5-person team.",
};

export default function VidyasKitchenCaseStudyPage() {
  const designSystemPdfMeta = getDesignSystemPdfMeta();

  return (
    <div className="min-h-screen bg-[#F4F4F0] text-black font-sans antialiased relative">
      <CaseStudyScrollToTop />
      <HeaderV2 />
      <VidyasKitchenCaseStudyView designSystemPdfMeta={designSystemPdfMeta} />
    </div>
  );
}
