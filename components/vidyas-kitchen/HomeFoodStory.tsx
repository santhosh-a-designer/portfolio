import HighlightText from "./HighlightText";
import WhatsAppStoryBlock from "./WhatsAppStoryBlock";
import { vidyasHomeFoodStory } from "@/lib/vidyasKitchenCaseStudyContent";

export default function HomeFoodStory() {
  const { headline, subhead, body, whatsAppStory } = vidyasHomeFoodStory;

  return (
    <section className="overflow-hidden border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex h-10 select-none items-center gap-2 border-b-2 border-black bg-[#E2E8F0] px-3 font-mono text-xs sm:h-11 sm:px-4">
        <span className="bg-[#FF462D] px-2 py-0.5 text-[10px] font-bold text-white">↳</span>
        <span className="truncate font-bold uppercase tracking-wider text-black">
          Why home food · WhatsApp first
        </span>
      </div>

      <div className="mx-auto max-w-2xl px-6 pb-6 pt-8 text-center sm:px-10 md:px-12">
        <h2 className="mb-3 text-2xl font-black uppercase leading-none tracking-tight sm:text-3xl">
          {headline}
        </h2>
        <p className="mb-2 text-sm font-bold leading-snug text-zinc-700 sm:text-base">{subhead}</p>
        <p className="text-sm leading-relaxed text-zinc-600">
          <HighlightText text={body} />
        </p>
      </div>

      <WhatsAppStoryBlock
        eyebrow={whatsAppStory.eyebrow}
        headline={whatsAppStory.headline}
        flows={whatsAppStory.flows}
      />
    </section>
  );
}
