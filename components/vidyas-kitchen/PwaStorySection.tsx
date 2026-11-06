import ProductFlowBlock from "./ProductFlowBlock";
import { vidyasPwaStory } from "@/lib/vidyasKitchenCaseStudyContent";

export default function PwaStorySection({ id = "pwa" }: { id?: string }) {
  return (
    <section
      id={id}
      className="scroll-mt-20 sm:scroll-mt-24 overflow-hidden border-t border-b sm:border border-[#BD2320]/20 bg-[#FFF8F6] sm:shadow-[0_2px_16px_rgba(0,0,0,0.03)]"
    >
      <div className="flex h-11 select-none items-center justify-between border-b border-[#BD2320]/15 bg-[#FFF0ED] px-4 sm:px-8 font-mono text-xs">
        <div className="flex items-center gap-2.5 truncate">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="truncate font-black tracking-widest text-[11px] uppercase text-black">
            Customer Surface // PWA Flow &amp; Map Pin Selection
          </span>
        </div>
        <span className="hidden sm:inline text-[10px] font-bold text-[#BD2320] uppercase tracking-widest px-2 py-0.5 bg-white/80 border border-[#BD2320]/20">
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
