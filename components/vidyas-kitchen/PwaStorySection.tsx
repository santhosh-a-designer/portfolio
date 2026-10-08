import ProductFlowBlock from "./ProductFlowBlock";
import { vidyasPwaStory } from "@/lib/vidyasKitchenCaseStudyContent";

export default function PwaStorySection() {
  return (
    <section className="overflow-hidden border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex h-10 select-none items-center gap-2 border-b-2 border-black bg-[#E2E8F0] px-3 font-mono text-xs sm:h-11 sm:px-4">
        <span className="bg-[#FF462D] px-2 py-0.5 text-[10px] font-bold text-white">↳</span>
        <span className="truncate font-bold uppercase tracking-wider text-black">
          Customer PWA · installable app
        </span>
      </div>

      <ProductFlowBlock
        eyebrow={vidyasPwaStory.eyebrow}
        headline={vidyasPwaStory.headline}
        flows={vidyasPwaStory.flows}
      />
    </section>
  );
}
