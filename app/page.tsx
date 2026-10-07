import type { Metadata } from "next";
import HeaderV2 from "./v2/components/HeaderV2";
import HeroV2 from "./v2/components/HeroV2";
import SelectedWorkV2 from "./v2/components/SelectedWorkV2";
import ExperienceSectionV2 from "./v2/components/ExperienceSectionV2";
import ServicesAndFooterV2 from "./v2/components/ServicesAndFooterV2";
import LenisProvider from "@/components/LenisProvider";
import ScrollFocusWrapper from "@/components/ScrollFocusWrapper";
import FloatingActionTriggers from "./v2/components/FloatingActionTriggers";
import HomeHashScroll from "@/components/HomeHashScroll";

export const metadata: Metadata = {
  title: "Simon Santhosh — UX Designer & Design Engineer",
  description:
    "6+ years crafting intuitive digital experiences. UX Designer, Mentor, and Design Engineer based in Chennai, India.",
};

export default function Home() {
  return (
    <LenisProvider>
      <HomeHashScroll />
      <main className="min-h-screen bg-[#F4F4F0] text-black antialiased font-sans select-none w-full max-w-full relative">
        <FloatingActionTriggers />
        <HeaderV2 />

        <ScrollFocusWrapper isFirst>
          <HeroV2 />
        </ScrollFocusWrapper>

        <ScrollFocusWrapper disabled>
          <SelectedWorkV2 />
        </ScrollFocusWrapper>

        <ScrollFocusWrapper>
          <ExperienceSectionV2 />
        </ScrollFocusWrapper>

        <ScrollFocusWrapper isLast>
          <ServicesAndFooterV2 />
        </ScrollFocusWrapper>
      </main>
    </LenisProvider>
  );
}
