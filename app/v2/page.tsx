import HeaderV2 from "./components/HeaderV2";
import HeroV2 from "./components/HeroV2";
import SelectedWorkV2 from "./components/SelectedWorkV2";
import ExperienceSectionV2 from "./components/ExperienceSectionV2";
import ServicesAndFooterV2 from "./components/ServicesAndFooterV2";
import LenisProvider from "@/components/LenisProvider";
import PageReveal from "./components/PageReveal";

export const metadata = {
  title: "Simon Santhosh — Portfolio V2",
  description: "A creative studio building bold brands and digital experiences that stand out.",
};

export default function V2Page() {
  return (
    <LenisProvider>
      {/* White smoke dissolve intro */}
      <PageReveal />
      <main className="min-h-screen bg-[#F4F4F0] text-black antialiased font-sans selection:bg-black selection:text-[#FAED00] w-full max-w-full overflow-x-hidden">
        {/* Header */}
        <HeaderV2 />

        {/* Hero Section */}
        <HeroV2 />

        {/* Selected Work Section */}
        <SelectedWorkV2 />

        {/* Experience Section in exact wireframe layout */}
        <ExperienceSectionV2 />

        {/* Built to Disrupt / Services & Contact Footer Section */}
        <ServicesAndFooterV2 />
      </main>
    </LenisProvider>
  );
}

