import HighlightText from "./HighlightText";
import OpsScreenCarousel from "./OpsScreenCarousel";
import { vidyasKitchenOpsStory } from "@/lib/vidyasKitchenCaseStudyContent";

export default function KitchenOpsSection() {
  const { dashboard, driver } = vidyasKitchenOpsStory;

  return (
    <section className="overflow-hidden border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex h-10 select-none items-center gap-2 border-b-2 border-black bg-[#E2E8F0] px-3 font-mono text-xs sm:h-11 sm:px-4">
        <span className="bg-[#FAED00] px-2 py-0.5 text-[10px] font-bold text-black">↳</span>
        <span className="truncate font-bold uppercase tracking-wider text-black">
          Kitchen ops · dashboard &amp; driver
        </span>
      </div>

      <div className="border-t-2 border-black bg-[#FAF9F5] p-6 sm:p-8 md:p-10">
        <p className="mb-2 text-center font-mono text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          {vidyasKitchenOpsStory.eyebrow}
        </p>
        <h3 className="mb-4 text-center text-lg font-black uppercase tracking-tight sm:text-xl">
          {vidyasKitchenOpsStory.headline}
        </h3>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-zinc-600">
          <HighlightText text={vidyasKitchenOpsStory.intro} />
        </p>

        {/* Dashboard */}
        <div className="mb-10 border-2 border-black bg-white p-5 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="mb-1 font-mono text-[10px] font-black uppercase tracking-wider text-[#FF462D]">
            {dashboard.label}
          </p>
          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-zinc-600">
            <HighlightText text={dashboard.body} />
          </p>
          <ul className="mb-5 flex flex-wrap gap-2">
            {dashboard.highlights.map((item) => (
              <li
                key={item.id}
                className="border-2 border-black bg-[#FAED00] px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wide text-black sm:text-[10px]"
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
        <div className="border-2 border-black bg-white p-5 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="mb-1 font-mono text-[10px] font-black uppercase tracking-wider text-[#FF462D]">
            {driver.label}
          </p>
          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-zinc-600">
            <HighlightText text={driver.body} />
          </p>
          <ul className="mb-5 flex flex-wrap gap-2">
            {driver.highlights.map((item) => (
              <li
                key={item.id}
                className="border-2 border-black bg-[#FAED00] px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wide text-black sm:text-[10px]"
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
