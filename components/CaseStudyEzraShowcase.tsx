"use client";

import { CaseStudyScrollReveal } from "@/components/CaseStudyScrollReveal";
import { DesktopPwaShowcase, PhoneWalkthroughCard } from "@/components/CaseStudyVidyasShowcase";
import type { CaseStudy } from "@/lib/caseStudies";

const SECTION_H2 = "text-[12px] font-mono uppercase tracking-[0.2em] text-[#FF7410]";

type EzraData = NonNullable<NonNullable<CaseStudy["artifacts"]>["ezraShowcase"]>;

export default function CaseStudyEzraShowcase({ data }: { data: EzraData }) {
  return (
    <>
      {/* Text left; phone row centered (same card component as Vidya). */}
      <CaseStudyScrollReveal>
        <section className="mt-12 w-full min-w-0 border-t border-[#1e293b] pt-8" aria-label={data.mobile.title}>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#94a3b8]">{data.mobile.eyebrow}</p>
          <h2 className="mt-2 text-left font-title text-2xl font-black text-[#f8fafc] sm:text-3xl">{data.mobile.title}</h2>
          <p className="mt-3 w-full max-w-[75ch] text-pretty text-left text-[15px] leading-relaxed text-[#cbd5e1] sm:text-justify">
            {data.mobile.lead}
          </p>
          <p className="mt-2 w-full max-w-[75ch] text-pretty text-left text-[13px] leading-relaxed text-[#94a3b8] sm:text-justify">
            {data.mobile.contextAfter}
          </p>
          <div className="mt-6 flex w-full flex-wrap items-start justify-center gap-3">
            {data.mobile.clips.map((c) => (
              <div
                key={c.videoSrc}
                className="w-full min-w-0 max-w-sm shrink-0 sm:max-w-md md:max-w-[min(100%,22rem)]"
              >
                <PhoneWalkthroughCard label={c.label} caption={c.caption} src={c.videoSrc} />
              </div>
            ))}
          </div>
        </section>
      </CaseStudyScrollReveal>

      {/* Copy left; video block can span full read width (Vidya-style card). */}
      <CaseStudyScrollReveal delay={0.06}>
        <section className="mt-12 w-full min-w-0 border-t border-[#1e293b] pt-8" aria-label={data.dashboard.title}>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#94a3b8]">{data.dashboard.eyebrow}</p>
          <h2 className="mt-2 text-left font-title text-2xl font-black text-[#f8fafc] sm:text-3xl">{data.dashboard.title}</h2>
          <p className="mt-3 max-w-[75ch] text-pretty text-left text-[15px] leading-relaxed text-[#cbd5e1] sm:text-justify">
            {data.dashboard.introLine1}
          </p>
          <p className="mt-2 max-w-[75ch] text-pretty text-left text-[15px] leading-relaxed text-[#b4c0ce] sm:text-justify">
            {data.dashboard.introLine2}
          </p>
          <div className="mt-6 w-full min-w-0 max-w-5xl">
            <DesktopPwaShowcase
              textAlign="left"
              label="EZ-M · screen recording"
              caption={data.dashboard.caption}
              src={data.dashboard.videoSrc}
            />
          </div>
        </section>
      </CaseStudyScrollReveal>

      <CaseStudyScrollReveal delay={0.1}>
        <section className="mt-10 border-t border-[#1e293b] pt-8">
          <h2 className={SECTION_H2}>{data.upcoming.title}</h2>
          <p className="mt-3 max-w-[75ch] text-pretty text-[15px] leading-relaxed text-[#94a3b8] sm:text-justify">
            {data.upcoming.body}
          </p>
        </section>
      </CaseStudyScrollReveal>

      <CaseStudyScrollReveal delay={0.12}>
        <section className="mt-10 border-t border-[#1e293b] pt-8" aria-label={data.growth.title}>
          <h2 className="font-title text-lg font-bold text-[#e2e8f0] sm:text-xl">{data.growth.title}</h2>
          <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">Planned GTM + traction</p>
          <ul className="mt-4 max-w-[75ch] space-y-2.5 text-[14px] leading-relaxed text-[#cbd5e1]">
            {data.growth.marketing.map((line) => (
              <li key={line} className="flex gap-2 pl-0">
                <span className="shrink-0 text-[#FF7410]">·</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border border-[#FF7410]/25 bg-[#FF7410]/[0.04] p-4 sm:p-5">
            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-[#FF7410]">Earnings &amp; next step</p>
            <p className="mt-2 font-title text-base font-bold text-[#f1f5f9] sm:text-lg">{data.growth.revenueHeadline}</p>
            <p className="mt-2 text-[14px] leading-relaxed text-[#94a3b8]">{data.growth.revenueDetail}</p>
          </div>
        </section>
      </CaseStudyScrollReveal>
    </>
  );
}
