import ProductFlowBlock from "./ProductFlowBlock";
import { vidyasPwaStory } from "@/lib/vidyasKitchenCaseStudyContent";

export default function PwaStorySection() {
  return (
    <section className="overflow-hidden border-t border-b sm:border border-black/15 bg-white sm:shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      <div className="flex h-11 select-none items-center justify-between border-b border-black/15 bg-zinc-50/90 px-4 sm:px-8 font-mono text-xs">
        <div className="flex items-center gap-2.5 truncate">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="truncate font-black tracking-widest text-[11px] uppercase text-black">
            Customer Surface // PWA Flow &amp; Map Pin Selection
          </span>
        </div>
        <span className="hidden sm:inline text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
          15km Delivery Radius
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
