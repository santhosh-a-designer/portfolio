import HighlightText from "./HighlightText";
import OpsScreenCarousel from "./OpsScreenCarousel";
import { vidyasKitchenOpsStory } from "@/lib/vidyasKitchenCaseStudyContent";

export default function KitchenOpsSection({ id = "kitchen" }: { id?: string }) {
  const { dashboard, driver } = vidyasKitchenOpsStory;

  return (
    <section
      id={id}
      className="scroll-mt-20 sm:scroll-mt-24 overflow-hidden border-t border-b sm:border border-slate-300 bg-[#F8FAFC] sm:shadow-[0_2px_16px_rgba(0,0,0,0.03)]"
    >
      <div className="flex h-11 select-none items-center justify-between border-b border-slate-200 bg-[#EEF2F6] px-4 sm:px-8 font-mono text-xs">
        <div className="flex items-center gap-2.5 truncate">
          <span className="w-2 h-2 rounded-full bg-slate-800" />
          <span className="truncate font-black tracking-widest text-[11px] uppercase text-black">
            Operations Surface // Kitchen Dashboard &amp; Driver Handoff
          </span>
        </div>
        <span className="hidden sm:inline text-[10px] font-bold text-slate-700 uppercase tracking-widest px-2 py-0.5 bg-white/80 border border-slate-300">
          Sivakasi Kitchen &amp; Logistics
        </span>
      </div>

      <div className="bg-[#F8FAFC] p-6 sm:p-10 md:p-12">
        <div className="mx-auto max-w-2xl text-center pb-8 border-b border-black/15">
          <p className="mb-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
            {vidyasKitchenOpsStory.eyebrow}
          </p>
          <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">
            {vidyasKitchenOpsStory.headline}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-600">
            <HighlightText text={vidyasKitchenOpsStory.intro} />
          </p>
        </div>

        {/* Dashboard */}
        <div className="py-10 border-b border-black/15 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-black flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
              {dashboard.label}
            </h4>
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
              Live Supervisory Board
            </span>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
            <HighlightText text={dashboard.body} />
          </p>
          <ul className="flex flex-wrap gap-2 pt-1 pb-2">
            {dashboard.highlights.map((item) => (
              <li
                key={item.id}
                className="border border-black/20 bg-zinc-100 px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wide text-black sm:text-[10px]"
              >
                {item.label}
              </li>
            ))}
          </ul>
          <OpsScreenCarousel
            screens={dashboard.screens}
            wide
            durationSec={36}
            label="Kitchen dashboard screens"
          />
        </div>

        {/* Driver */}
        <div className="pt-10 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h4 className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-black flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
              {driver.label}
            </h4>
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
              Field Logistics PWA
            </span>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
            <HighlightText text={driver.body} />
          </p>
          <ul className="flex flex-wrap gap-2 pt-1 pb-2">
            {driver.highlights.map((item) => (
              <li
                key={item.id}
                className="border border-black/20 bg-zinc-100 px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wide text-black sm:text-[10px]"
              >
                {item.label}
              </li>
            ))}
          </ul>
          <OpsScreenCarousel
            screens={driver.screens}
            durationSec={55}
            label="Driver app screens"
          />
        </div>
      </div>
    </section>
  );
}
