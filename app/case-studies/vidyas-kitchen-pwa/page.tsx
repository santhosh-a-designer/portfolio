import type { Metadata } from "next";
import HeaderV2 from "@/app/v2/components/HeaderV2";
import FloatingActionTriggers from "@/app/v2/components/FloatingActionTriggers";
import LenisProvider from "@/components/LenisProvider";
import VidyasKitchenCaseStudyView from "@/components/vidyas-kitchen/VidyasKitchenCaseStudyView";
import { getDesignSystemPdfMeta } from "@/lib/designSystemPdfMeta";

export const metadata: Metadata = {
  title: "Vidya's Kitchen — Case Study | Simon Santhosh",
  description:
    "0→1 home food delivery in Sivakasi: PWA, WhatsApp bot, kitchen dashboard with AI pricing, driver app — solo design and build.",
};

export default function VidyasKitchenCaseStudyPage() {
  const designSystemPdfMeta = getDesignSystemPdfMeta();

  return (
    <LenisProvider>
      <div className="min-h-screen bg-[#F4F4F0] text-black font-sans antialiased relative">
        <HeaderV2 />
        <FloatingActionTriggers />
        <VidyasKitchenCaseStudyView designSystemPdfMeta={designSystemPdfMeta} />
      </div>
    </LenisProvider>
  );
}
