import HighlightText from "./HighlightText";
import WhatsAppStoryBlock from "./WhatsAppStoryBlock";
import { vidyasHomeFoodStory } from "@/lib/vidyasKitchenCaseStudyContent";

export default function HomeFoodStory({ id = "whatsapp" }: { id?: string }) {
  const { headline, subhead, body, whatsAppStory } = vidyasHomeFoodStory;

  return (
    <section
      id={id}
      className="scroll-mt-20 sm:scroll-mt-24 overflow-hidden border-t border-b sm:border border-emerald-900/15 bg-[#F4FAF6] sm:shadow-[0_2px_16px_rgba(0,0,0,0.03)]"
    >
      <div className="flex h-11 select-none items-center justify-between border-b border-emerald-900/15 bg-[#EBF5EE] px-4 sm:px-8 font-mono text-xs">
        <div className="flex items-center gap-2.5 truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          <span className="truncate font-black tracking-widest text-[11px] uppercase text-black">
            Customer Surface // Why Home Food · WhatsApp First
          </span>
        </div>
        <span className="hidden sm:inline text-[10px] font-bold text-emerald-800 uppercase tracking-widest px-2 py-0.5 bg-white/70 border border-emerald-600/20">
          Sivakasi Conversational Flow
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
