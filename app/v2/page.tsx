import HeaderV2 from "./components/HeaderV2";
import HeroV2 from "./components/HeroV2";
import SelectedWorkV2 from "./components/SelectedWorkV2";

export const metadata = {
  title: "Simon Santhosh — Portfolio V2",
  description: "A creative studio building bold brands and digital experiences that stand out.",
};

export default function V2Page() {
  return (
    <main className="min-h-screen bg-[#F4F4F0] text-black antialiased font-sans selection:bg-black selection:text-[#FAED00]">
      {/* Header based exactly on Brutalist reference */}
      <HeaderV2 />

      {/* Hero Section */}
      <HeroV2 />

      {/* Selected Work Section based on reference */}
      <SelectedWorkV2 />
    </main>
  );
}
