import type { Metadata } from "next";
import HeaderV2 from "@/app/v2/components/HeaderV2";
import FloatingActionTriggers from "@/app/v2/components/FloatingActionTriggers";
import WeTwoPetsCaseStudyView from "@/components/we-two-pets/WeTwoPetsCaseStudyView";

export const metadata: Metadata = {
  title: "We Two Pets — Case Study | Simon Santhosh",
  description:
    "0→1 pet commerce for India: a store, a hunt-and-veto engine, and a desk where two people vote before a product goes live.",
};

export default function WeTwoPetsCaseStudyPage() {
  return (
    <div className="relative min-h-screen bg-[#F4F4F0] font-sans text-black antialiased">
      <HeaderV2 />
      <FloatingActionTriggers />
      <WeTwoPetsCaseStudyView />
    </div>
  );
}
