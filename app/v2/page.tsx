import HeaderV2 from "./components/HeaderV2";
import HeroV2 from "./components/HeroV2";
import SelectedWorkV2 from "./components/SelectedWorkV2";
import ExperienceSectionV2 from "./components/ExperienceSectionV2";
import ServicesAndFooterV2 from "./components/ServicesAndFooterV2";
import LenisProvider from "@/components/LenisProvider";
import ScrollFocusWrapper from "@/components/ScrollFocusWrapper";
import FloatingActionTriggers from "./components/FloatingActionTriggers";

export const metadata = {
  title: "Simon Santhosh — Portfolio V2",
  description: "A creative studio building bold brands and digital experiences that stand out.",
};

export default function V2Page() {
  return (
    <LenisProvider>
      <main className="min-h-screen bg-[#F4F4F0] text-black antialiased font-sans select-none w-full max-w-full relative">
        {/* Floating Action Triggers — always 100% sharp, fixed at bottom-right */}
        <FloatingActionTriggers />

        {/* Header — always 100% sharp, sticky, untouched */}
        <HeaderV2 />

        {/* Hero Section — sharp at load, gently softens as user scrolls down */}
        <ScrollFocusWrapper isFirst>
          <HeroV2 />
        </ScrollFocusWrapper>

        {/* Selected Work Section — kept 100% sharp with stacking cards */}
        <ScrollFocusWrapper disabled>
          <SelectedWorkV2 />
        </ScrollFocusWrapper>

        {/* Track Record / Experience Section — in-focus when centered */}
        <ScrollFocusWrapper>
          <ExperienceSectionV2 />
        </ScrollFocusWrapper>

        {/* Skills & Contact Section — sharpens on desktop; 100% sharp on mobile */}
        <ScrollFocusWrapper isLast disableOnMobile>
          <ServicesAndFooterV2 />
        </ScrollFocusWrapper>
      </main>
    </LenisProvider>
  );
}

