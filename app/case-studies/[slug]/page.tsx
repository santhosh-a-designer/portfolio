import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackToWorksLink from "@/components/BackToWorksLink";
import CaseStudyCinematicIntro from "@/components/CaseStudyCinematicIntro";
import { VidyasAfterCinematicBlock, VidyasShowcaseSection } from "@/components/CaseStudyVidyasShowcase";
import { ArrowLeft, ArrowRight, ArrowSquareOut, CheckCircle, Sparkle, Warning, Lightbulb, ArrowFatRight } from "@phosphor-icons/react/dist/ssr";
import { caseStudyBySlug, getCaseStudyNeighbors, type CaseStudy } from "@/lib/caseStudies";
import CaseStudyArticleFooter from "@/components/CaseStudyArticleFooter";
import { CaseStudyScrollReveal } from "@/components/CaseStudyScrollReveal";
import CaseStudyUxOutcomeViz from "@/components/CaseStudyUxOutcomeViz";
import CaseStudyVideoShowcase from "@/components/CaseStudyVideoShowcase";
import CustomerSchedulerStory from "@/components/CustomerSchedulerStory";

const SECTION_H2 = "text-[12px] font-mono uppercase tracking-[0.2em] text-[#FF7410]";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function IntroGallerySection({ study }: { study: CaseStudy }) {
  const items = study.introGallery;
  if (!items?.length) return null;

  if (items.length === 3) {
    const [center, left, right] = [items[0]!, items[1]!, items[2]!];
    return (
      <div className="-mt-1 mb-6 w-full min-w-0" aria-label="Case study preview">
        <div className="relative mx-auto flex w-full max-w-6xl items-end justify-center px-3 sm:px-5 md:px-8">
          <figure
            className="case-study-intro-side-left relative z-10 w-[56%] min-w-0 shrink-0 sm:w-[54%] aspect-[45/32] -mr-[14%] sm:-mr-[15%] self-end overflow-hidden border border-[#1e293b] bg-[#0f1419] shadow-sm"
          >
            <Image
              src={left.src}
              alt={left.alt}
              fill
              className="object-contain object-top"
              sizes="(max-width: 640px) 52vw, 32vw"
            />
          </figure>
          <figure className="relative z-20 w-[58%] min-w-0 shrink-0 sm:w-[56%] aspect-[45/32] -mx-2 sm:-mx-3 overflow-hidden border border-[rgba(255,116,16,0.45)] bg-[#0f1419] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.45)]">
            <Image
              src={center.src}
              alt={center.alt}
              fill
              className="object-contain object-top"
              sizes="(max-width: 640px) 85vw, 52vw"
              priority
            />
          </figure>
          <figure
            className="case-study-intro-side-right relative z-10 w-[56%] min-w-0 shrink-0 sm:w-[54%] aspect-[45/32] -ml-[14%] sm:-ml-[15%] self-end overflow-hidden border border-[#1e293b] bg-[#0f1419] shadow-sm"
          >
            <Image
              src={right.src}
              alt={right.alt}
              fill
              className="object-contain object-top"
              sizes="(max-width: 640px) 52vw, 32vw"
            />
          </figure>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 mb-8 grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <figure
          key={item.src}
          className="relative aspect-[4/3] w-full min-w-0 overflow-hidden border border-[#1e293b] bg-[#0f1419] shadow-[0_1px_0_0_rgba(30,41,59,0.9)]"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain object-top"
            sizes="(max-width: 640px) 100vw, 40vw"
          />
        </figure>
      ))}
    </div>
  );
}

/* ─── UI Design System ───────────────────────────────────────────── */
function DesignSystemSection({ study }: { study: CaseStudy }) {
  const ds = study.artifacts?.designSystem;
  if (!ds) return null;
  return (
    <section className="mt-12 border-t border-[#1e293b] pt-8" aria-label="UI Design system">
      <CaseStudyScrollReveal>
        <h2 className={SECTION_H2}>UI design system</h2>
        <p className="mt-2 max-w-[72ch] text-[13px] leading-relaxed text-[#64748b]">{ds.blurb}</p>
      </CaseStudyScrollReveal>

      {/* color palette */}
      <CaseStudyScrollReveal delay={0.06}>
        <div className="mt-5 border border-[#1e293b] bg-[#0c1014]">
          <div className="border-b border-[#1e293b] px-4 py-2.5">
            <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#FF7410]">Colour palette</p>
          </div>
          <div className="grid gap-px bg-[#1e293b] sm:grid-cols-3 lg:grid-cols-5">
            {ds.colors.map((c) => (
              <div key={c.hex} className="flex flex-col bg-[#0c1014] p-3">
                <div
                  className="mb-2 h-8 w-full border border-[#1e293b]"
                  style={{ background: c.hex }}
                  aria-hidden
                />
                <p className="font-mono text-[10px] font-semibold text-[#f1f5f9]">{c.hex}</p>
                <p className="text-[10px] font-semibold text-[#64748b]">{c.name}</p>
                <p className="mt-1 text-[10px] leading-snug text-[#475569]">{c.use}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseStudyScrollReveal>

      {/* typography */}
      <CaseStudyScrollReveal delay={0.1}>
        <div className="mt-3 border border-[#1e293b] bg-[#0c1014]">
          <div className="border-b border-[#1e293b] px-4 py-2.5">
            <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#FF7410]">Typography</p>
          </div>
          <div className="grid gap-px bg-[#1e293b] sm:grid-cols-3">
            {ds.type.map((t) => (
              <div key={t.role} className="bg-[#0c1014] px-4 py-3">
                <p className="text-[9px] font-mono uppercase tracking-[0.14em] text-[#64748b]">{t.role}</p>
                <p className="mt-1 font-title text-[15px] font-bold text-[#f1f5f9]">{t.family}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-[#475569]">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseStudyScrollReveal>

      {/* components + principles */}
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <CaseStudyScrollReveal delay={0.13}>
          <div className="h-full border border-[#1e293b] bg-[#0c1014]">
            <div className="border-b border-[#1e293b] px-4 py-2.5">
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#FF7410]">Components</p>
            </div>
            <div className="flex flex-wrap gap-1.5 p-4">
              {ds.components.map((c) => (
                <span
                  key={c}
                  className="border border-[#334155] bg-[#08090b] px-2 py-0.5 text-[10px] font-mono text-[#94a3b8]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </CaseStudyScrollReveal>

        <CaseStudyScrollReveal delay={0.16}>
          <div className="h-full border border-[#1e293b] bg-[#0c1014]">
            <div className="border-b border-[#1e293b] px-4 py-2.5">
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#FF7410]">Design principles</p>
            </div>
            <ul className="divide-y divide-[#1e293b]">
              {ds.principles.map((p) => (
                <li key={p} className="flex items-start gap-2.5 px-4 py-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF7410]/50" aria-hidden />
                  <span className="text-[12px] leading-relaxed text-[#94a3b8]">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </CaseStudyScrollReveal>
      </div>
    </section>
  );
}

/* ─── User Personas ─────────────────────────────────────────────── */
function UserPersonasSection({ study }: { study: CaseStudy }) {
  const personas = study.artifacts?.userPersonas;
  if (!personas?.length) return null;
  return (
    <section className="mt-12 border-t border-[#1e293b] pt-8" aria-label="User personas">
      <CaseStudyScrollReveal>
        <h2 className={SECTION_H2}>User personas</h2>
      </CaseStudyScrollReveal>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {personas.map((p, i) => (
          <CaseStudyScrollReveal key={p.name} delay={i * 0.07}>
            <div className="flex h-full flex-col border border-[#1e293b] bg-[#0c1014]">
              {/* header strip */}
              <div className="flex items-start justify-between gap-3 border-b border-[#1e293b] px-4 py-3">
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-[0.16em] text-[#FF7410]">{p.role}</p>
                  <h3 className="mt-1 font-title text-base font-bold text-[#f1f5f9]">{p.name}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-0 divide-y divide-[#1e293b]">
                {/* one-liner */}
                <p className="px-4 py-3 text-[13px] italic leading-relaxed text-[#94a3b8]">{p.oneLiner}</p>
                {/* goals */}
                <div className="px-4 py-3">
                  <p className="mb-2 text-[9px] font-mono font-semibold uppercase tracking-[0.14em] text-[#64748b]">Goals</p>
                  <div className="flex flex-col gap-1.5">
                    {p.goals.map((g) => (
                      <div key={g} className="flex items-start gap-2 text-[12px] leading-relaxed text-[#cbd5e1]">
                        <CheckCircle size={12} className="mt-0.5 shrink-0 text-[#FF7410]/60" aria-hidden />
                        {g}
                      </div>
                    ))}
                  </div>
                </div>
                {/* pains */}
                <div className="px-4 py-3">
                  <p className="mb-2 text-[9px] font-mono font-semibold uppercase tracking-[0.14em] text-[#64748b]">Pains</p>
                  <div className="flex flex-col gap-1.5">
                    {p.pains.map((x) => (
                      <div key={x} className="flex items-start gap-2 text-[12px] leading-relaxed text-[#94a3b8]">
                        <Warning size={12} className="mt-0.5 shrink-0 text-[#f87171]/60" aria-hidden />
                        {x}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CaseStudyScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Journey Map ────────────────────────────────────────────────── */
function JourneyMapSection({ study }: { study: CaseStudy }) {
  if (!study.artifacts?.journeyMap?.length) return null;
  return (
    <section className="mt-12 border-t border-[#1e293b] pt-8">
      <CaseStudyScrollReveal>
        <h2 className={SECTION_H2}>Customer journey</h2>
      </CaseStudyScrollReveal>
      <div className="mt-5 space-y-3">
        {study.artifacts.journeyMap.map((row, i) => (
          <CaseStudyScrollReveal key={row.stage} delay={i * 0.06}>
            <div className="border border-[#1e293b] bg-[#0c1014]">
              {/* stage header */}
              <div className="flex items-center gap-3 border-b border-[#1e293b] px-4 py-2.5">
                <span className="shrink-0 font-mono text-[10px] font-bold text-[#FF7410]/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-title text-[14px] font-bold text-[#f1f5f9]">{row.stage}</h3>
              </div>
              {/* 3-col body */}
              <div className="grid gap-px bg-[#1e293b] sm:grid-cols-3">
                <div className="bg-[#0c1014] px-3 py-3">
                  <p className="mb-1.5 text-[9px] font-mono uppercase tracking-[0.12em] text-[#64748b]">Goal</p>
                  <p className="text-[12px] leading-relaxed text-[#94a3b8]">{row.userGoal}</p>
                </div>
                <div className="bg-[#0c1014] px-3 py-3">
                  <p className="mb-1.5 text-[9px] font-mono uppercase tracking-[0.12em] text-[#f87171]/60]">Pain</p>
                  <p className="text-[12px] leading-relaxed text-[#94a3b8]">{row.painPoint}</p>
                </div>
                <div className="bg-[#FF7410]/[0.04] px-3 py-3">
                  <p className="mb-1.5 text-[9px] font-mono uppercase tracking-[0.12em] text-[#FF7410]/70">Fix</p>
                  <p className="text-[12px] leading-relaxed text-[#cbd5e1]">{row.uxIntervention}</p>
                </div>
              </div>
              {/* impact footer */}
              <p className="border-t border-[#1e293b] px-4 py-2 text-[11px] italic leading-relaxed text-[#64748b]">
                → {row.impact}
              </p>
            </div>
          </CaseStudyScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ─── SWOT ───────────────────────────────────────────────────────── */
function SwotSection({ study }: { study: CaseStudy }) {
  if (!study.artifacts?.swot) return null;
  const quadrants = [
    { key: "Strengths",     points: study.artifacts.swot.strengths,     accent: "#4ade80" },
    { key: "Weaknesses",    points: study.artifacts.swot.weaknesses,     accent: "#f87171" },
    { key: "Opportunities", points: study.artifacts.swot.opportunities,  accent: "#FF7410" },
    { key: "Threats",       points: study.artifacts.swot.threats,        accent: "#fb923c" },
  ] as const;
  return (
    <section className="mt-12 border-t border-[#1e293b] pt-8">
      <CaseStudyScrollReveal>
        <h2 className={SECTION_H2}>SWOT</h2>
      </CaseStudyScrollReveal>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {quadrants.map(({ key, points, accent }, i) => (
          <CaseStudyScrollReveal key={key} delay={i * 0.07}>
            <div className="h-full border border-[#1e293b] bg-[#0c1014]">
              <div className="border-b border-[#1e293b] px-4 py-2.5">
                <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.18em]" style={{ color: accent }}>
                  {key}
                </p>
              </div>
              <ul className="flex flex-col gap-0 divide-y divide-[#1e293b]">
                {points.map((pt) => (
                  <li key={pt} className="px-4 py-2.5 text-[13px] leading-relaxed text-[#94a3b8]">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </CaseStudyScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Information Architecture ───────────────────────────────────── */
function InformationArchitectureSection({ study }: { study: CaseStudy }) {
  if (!study.artifacts?.visualIA) return null;
  return (
    <section className="mt-12 border-t border-[#1e293b] pt-8">
      <CaseStudyScrollReveal>
        <h2 className={SECTION_H2}>Information architecture</h2>
      </CaseStudyScrollReveal>
      <CaseStudyScrollReveal delay={0.05}>
        <div className="mt-5 overflow-x-auto border border-[#1e293b] bg-[#0c1014] p-4 sm:p-5">
          <div className="min-w-[760px]">
            {/* root node */}
            <div className="flex justify-center">
              <div className="border border-[#FF7410]/30 bg-[#FF7410]/[0.06] px-5 py-2 text-[13px] font-semibold text-[#f1f5f9]">
                {study.artifacts.visualIA.home}
              </div>
            </div>
            <div className="mx-[8%] mt-3 h-[1px] bg-[#334155]" />
            {/* columns */}
            <div className="mt-3 grid grid-cols-5 gap-3">
              {study.artifacts.visualIA.columns.map((col) => (
                <div key={col.primary} className="flex flex-col items-center gap-0 text-center">
                  <div className="h-3 w-[1px] bg-[#334155]" />
                  <div className="w-full border border-[#334155] bg-[#111827] px-2 py-2 text-[11px] font-semibold text-[#cbd5e1]">
                    {col.primary}
                  </div>
                  <div className="h-3 w-[1px] bg-[#334155]" />
                  <div className="w-full border border-[#1e293b] bg-[#0a0d12] px-2 py-2 text-[10px] text-[#64748b]">
                    {col.secondary}
                  </div>
                  {col.tertiary ? (
                    <>
                      <div className="h-3 w-[1px] bg-[#334155]" />
                      <div className="w-full border border-[#1e293b] bg-[#0a0d12] px-2 py-2 text-[10px] text-[#64748b]">
                        {col.tertiary}
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CaseStudyScrollReveal>

      {study.artifacts.informationArchitecture?.length ? (
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {study.artifacts.informationArchitecture.map((node, i) => (
            <CaseStudyScrollReveal key={node.node} delay={i * 0.05}>
              <div className="border border-[#1e293b] bg-[#0c1014] px-3.5 py-3">
                <p className="text-[11px] font-semibold text-[#f1f5f9]">{node.node}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-[#64748b]">{node.children.join(" · ")}</p>
              </div>
            </CaseStudyScrollReveal>
          ))}
        </div>
      ) : null}
    </section>
  );
}

/* ─── User Flows ─────────────────────────────────────────────────── */
function UserFlowSection({ study }: { study: CaseStudy }) {
  if (!study.artifacts?.userFlows?.length) return null;
  return (
    <section className="mt-12 border-t border-[#1e293b] pt-8">
      <CaseStudyScrollReveal>
        <h2 className={SECTION_H2}>User flows</h2>
      </CaseStudyScrollReveal>
      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {study.artifacts.userFlows.map((flow, i) => (
          <CaseStudyScrollReveal key={flow.title} delay={i * 0.08}>
            <div className="flex h-full flex-col border border-[#1e293b] bg-[#0c1014]">
              <div className="border-b border-[#1e293b] px-4 py-2.5">
                <h3 className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#FF7410]">{flow.title}</h3>
              </div>
              <div className="flex flex-1 flex-col p-3">
                {flow.steps.map((step, si) => (
                  <div key={step}>
                    <div className="flex items-start gap-2.5 border border-[#1a2030] bg-[#08090b] px-3 py-2.5">
                      <span className="mt-0.5 shrink-0 font-mono text-[10px] font-bold text-[#FF7410]/50">
                        {String(si + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[12px] leading-relaxed text-[#94a3b8]">{step}</span>
                    </div>
                    {si < flow.steps.length - 1 ? (
                      <div className="flex justify-center py-1.5">
                        <ArrowRight size={11} className="text-[#334155]" aria-hidden />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </CaseStudyScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Process Walkthrough ────────────────────────────────────────── */
function ProcessWalkthroughSection({ study }: { study: CaseStudy }) {
  if (!study.processSteps?.length) return null;
  return (
    <section className="mt-12 border-t border-[#1e293b] pt-8">
      <CaseStudyScrollReveal>
        <h2 className={SECTION_H2}>
          {study.processWalkthroughLabel ? (
            <span className="text-[#64748b]">{study.processWalkthroughLabel} · </span>
          ) : null}
          UX process
        </h2>
      </CaseStudyScrollReveal>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {study.processSteps.map((step, index) => (
          <CaseStudyScrollReveal key={step.step} delay={index * 0.08}>
            <div className="flex h-full flex-col border border-[#1e293b] bg-[#0c1014]">
              {/* step number + title */}
              <div className="border-b border-[#1e293b] px-4 py-3">
                <p className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#64748b]">Step {step.step}</p>
                <h3 className="mt-1 font-title text-[14px] font-bold leading-snug text-[#f1f5f9]">{step.title}</h3>
              </div>
              {/* body */}
              <div className="flex flex-1 flex-col gap-3 p-4">
                <p className="text-[13px] leading-relaxed text-[#94a3b8]">{step.content}</p>
                {/* methods */}
                <div className="flex flex-wrap gap-1.5">
                  {step.uxMethods.map((m) => (
                    <span
                      key={m}
                      className="border border-[#334155] bg-[#08090b] px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.12em] text-[#64748b]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              {/* outcome */}
              <div className="border-t border-[#FF7410]/15 bg-[#FF7410]/[0.03] px-4 py-3">
                <p className="text-[9px] font-mono uppercase tracking-[0.14em] text-[#FF7410]/60]">Outcome</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#cbd5e1]">{step.outcome}</p>
              </div>
            </div>
          </CaseStudyScrollReveal>
        ))}
      </div>
    </section>
  );
}

function ProductDeepDiveSection({ study }: { study: CaseStudy }) {
  if (!study.productDeepDive) return null;
  const story = study.productDeepDive.customerSchedulerStory;
  const ss = study.productDeepDive.showAndSell;
  const walk = ss.walkthrough;
  return (
    <>
      {story ? <CustomerSchedulerStory story={story} /> : null}
      <section className={story ? "mt-14 sm:mt-16" : "mt-10"}>
        <h2 className={SECTION_H2}>Show &amp; Sell</h2>
        <p className="mt-3 text-[16px] text-[#cbd5e1] leading-relaxed">{ss.intro}</p>
        <ul className="mt-3 space-y-2">
          {ss.bullets.map((b) => (
            <li key={b} className="text-[15px] text-[#cbd5e1] leading-relaxed">
              • {b}
            </li>
          ))}
        </ul>
        {walk ? (
          <>
            <p className="mt-6 max-w-[75ch] text-[15px] leading-relaxed text-[#cbd5e1]">{walk.lead}</p>
            <CaseStudyVideoShowcase
              showTopRule={false}
              videos={walk.videos}
              className="mt-5"
            />
            {walk.customerScreenTeaser ? (
              <p className="mt-6 max-w-[75ch] border-l-2 border-[#334155] pl-3 text-[14px] italic leading-relaxed text-[#94a3b8]">
                {walk.customerScreenTeaser}
              </p>
            ) : null}
          </>
        ) : null}
      </section>
    </>
  );
}

function CaseStudyArticle({
  study,
  prev,
  next,
}: {
  study: CaseStudy;
  prev: CaseStudy | null;
  next: CaseStudy | null;
}) {
  const cta = study.artifacts?.ctaVideoShowcase;
  const liveLabel = study.liveUrl
    ? (() => {
        try {
          return new URL(study.liveUrl as string).hostname.replace(/^www\./, "");
        } catch {
          return (study.liveUrl as string).replace(/^https?:\/\//, "");
        }
      })()
    : null;

  return (
    <article
      id="case-study-article"
      tabIndex={-1}
      className={
        "w-[80vw] max-w-[1400px] mx-auto px-5 sm:px-7 outline-none focus:outline-none " +
        (study.cinematicIntro ? "pt-4 sm:pt-6 pb-10 sm:pb-14" : "py-10 sm:py-14")
      }
    >
        <CaseStudyScrollReveal>
          <div>
            <IntroGallerySection study={study} />

            <header
              className={
                study.introGallery?.length
                  ? "border-b border-[#1e293b] pb-8"
                  : "mt-8 border-b border-[#1e293b] pb-8"
              }
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#94a3b8]">Case study</p>
              <h1 className="mt-3 font-title text-3xl sm:text-5xl font-black leading-tight text-[#f8fafc]">{study.project}</h1>
              {study.company ? (
                <p className="mt-2 text-sm sm:text-base font-medium text-[#cbd5e1]">{study.company}</p>
              ) : null}
              {study.subtitle && !study.company ? (
                <p className="mt-2 text-lg sm:text-xl text-[#FF7410] font-medium">{study.subtitle}</p>
              ) : null}
              <p className="mt-5 text-base text-[#b4c0ce] leading-relaxed">{study.summary}</p>

              <div
                className={
                  study.liveUrl
                    ? "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
                    : "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
                }
              >
                <div className="border border-[#1e293b] bg-[#0c1014] px-4 py-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">Timeline</div>
                  <div className="mt-1 text-sm font-semibold text-[#e2e8f0]">{study.timeline}</div>
                </div>
                <div className="border border-[#1e293b] bg-[#0c1014] px-4 py-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">Role</div>
                  <div className="mt-1 text-sm font-semibold text-[#e2e8f0]">{study.role}</div>
                </div>
                {study.liveUrl && liveLabel ? (
                  <div className="border border-[#1e293b] bg-[#0c1014] px-4 py-3 sm:col-span-2 lg:col-span-1">
                    <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">Live site</div>
                    <Link
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF7410] hover:underline"
                    >
                      {liveLabel}
                      <ArrowSquareOut size={16} className="shrink-0 text-[#FF7410]" aria-hidden />
                      <span className="sr-only"> (opens in new tab)</span>
                    </Link>
                  </div>
                ) : null}
              </div>
            </header>
          </div>
        </CaseStudyScrollReveal>

        {/* 1. STAR */}
        <section className="mt-10 border-t border-[#1e293b] pt-8">
          <div className="grid gap-3 md:grid-cols-2">
            {/* S */}
            <CaseStudyScrollReveal>
              <div className="flex h-full flex-col border border-[#1e293b] bg-[#0c1014]">
                <div className="flex items-baseline gap-3 border-b border-[#1e293b] px-4 py-3">
                  <span className="select-none font-title text-3xl font-black leading-none text-[#FF7410]/12">S</span>
                  <span className={SECTION_H2}>Situation</span>
                </div>
                <p className="p-4 text-[14px] leading-relaxed text-[#94a3b8]">{study.situation}</p>
              </div>
            </CaseStudyScrollReveal>

            {/* T */}
            <CaseStudyScrollReveal delay={0.07}>
              <div className="flex h-full flex-col border border-[#1e293b] bg-[#0c1014]">
                <div className="flex items-baseline gap-3 border-b border-[#1e293b] px-4 py-3">
                  <span className="select-none font-title text-3xl font-black leading-none text-[#FF7410]/12">T</span>
                  <span className={SECTION_H2}>Task</span>
                </div>
                <p className="p-4 text-[14px] leading-relaxed text-[#94a3b8]">{study.task}</p>
              </div>
            </CaseStudyScrollReveal>

            {/* A — full width */}
            <CaseStudyScrollReveal delay={0.12} className="md:col-span-2">
              <div className="border border-[#1e293b] bg-[#0c1014]">
                <div className="flex items-baseline gap-3 border-b border-[#1e293b] px-4 py-3">
                  <span className="select-none font-title text-3xl font-black leading-none text-[#FF7410]/12">A</span>
                  <span className={SECTION_H2}>Action</span>
                </div>
                <div className="grid gap-px bg-[#1e293b] sm:grid-cols-2 lg:grid-cols-3">
                  {study.actions.map((item, i) => (
                    <div key={item} className="flex items-start gap-3 bg-[#0c1014] px-4 py-3">
                      <span className="mt-0.5 shrink-0 font-mono text-[10px] font-bold text-[#FF7410]/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13px] leading-relaxed text-[#94a3b8]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CaseStudyScrollReveal>

            {/* R — full width */}
            <CaseStudyScrollReveal delay={0.18} className="md:col-span-2">
              <div className="border border-[#FF7410]/20 bg-[#FF7410]/[0.03]">
                <div className="flex items-baseline gap-3 border-b border-[#FF7410]/15 px-4 py-3">
                  <span className="select-none font-title text-3xl font-black leading-none text-[#FF7410]/20">R</span>
                  <span className={SECTION_H2}>Result</span>
                </div>
                <div className="grid gap-px bg-[#FF7410]/10 sm:grid-cols-2">
                  {study.results.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-[#0c1014] px-4 py-3">
                      <CheckCircle size={13} className="mt-0.5 shrink-0 text-[#FF7410]" aria-hidden />
                      <span className="text-[13px] leading-relaxed text-[#cbd5e1]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CaseStudyScrollReveal>
          </div>
        </section>

        {/* 2.1 UX process walkthrough… */}
        <ProcessWalkthroughSection study={study} />

        {/* 3. Customer journey map */}
        <CaseStudyScrollReveal>
          <JourneyMapSection study={study} />
        </CaseStudyScrollReveal>

        {study.artifacts?.userPersonas?.length ? (
          <CaseStudyScrollReveal>
            <UserPersonasSection study={study} />
          </CaseStudyScrollReveal>
        ) : null}

        {/* 4. SWOT */}
        <SwotSection study={study} />

        {/* 5. Information architecture */}
        <CaseStudyScrollReveal>
          <InformationArchitectureSection study={study} />
        </CaseStudyScrollReveal>

        {/* 6. User flow */}
        <UserFlowSection study={study} />

        <VidyasShowcaseSection study={study} />

        {/* 7. CTA — explanation and videos */}
        {cta ? (
          <CaseStudyScrollReveal>
            <section className="mt-12 w-full min-w-0 border-t border-[#1e293b] pt-8">
              <h2 className={SECTION_H2}>CTA</h2>
              <p className="mt-3 text-[16px] text-[#cbd5e1] leading-relaxed">{cta.reason}</p>
              <CaseStudyVideoShowcase
                showTopRule={false}
                videos={cta.videos}
                className="mt-5"
              />
            </section>
          </CaseStudyScrollReveal>
        ) : null}

        {/* 8. Customer scheduler + 9. Show & sell */}
        <CaseStudyScrollReveal>
          <ProductDeepDiveSection study={study} />
        </CaseStudyScrollReveal>

        {study.slug === "vidyas-kitchen-pwa" && study.artifacts?.vidyaShowcase?.afterCinematic ? (
          <CaseStudyScrollReveal>
            <VidyasAfterCinematicBlock data={study.artifacts.vidyaShowcase.afterCinematic} />
          </CaseStudyScrollReveal>
        ) : null}

        {/* UI Design System */}
        {study.artifacts?.designSystem ? (
          <CaseStudyScrollReveal>
            <DesignSystemSection study={study} />
          </CaseStudyScrollReveal>
        ) : null}

        {/* 10. UX outcome (donut or bars) */}
        <CaseStudyScrollReveal>
          <CaseStudyUxOutcomeViz study={study} />
        </CaseStudyScrollReveal>

        {/* 11. Learnings */}
        <section className="mt-12 border-t border-[#1e293b] pt-8">
          <CaseStudyScrollReveal>
            <h2 className={`${SECTION_H2} flex items-center gap-2`}>
              <Sparkle size={12} aria-hidden /> Learnings
            </h2>
          </CaseStudyScrollReveal>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {study.learnings.map((item, i) => (
              <CaseStudyScrollReveal key={item} delay={i * 0.07}>
                <div className="flex h-full items-start gap-3 border border-[#1e293b] bg-[#0c1014] p-4">
                  <Lightbulb size={14} className="mt-0.5 shrink-0 text-[#FF7410]/60" aria-hidden />
                  <p className="text-[13px] leading-relaxed text-[#94a3b8]">{item}</p>
                </div>
              </CaseStudyScrollReveal>
            ))}
          </div>
        </section>

        {study.slug !== "parla-show-and-sell" && study.imageSlots.length ? (
          <CaseStudyScrollReveal>
            <section className="mt-10 border border-[#1e293b] bg-[#0c1014] p-4 sm:p-6">
              <h2 className={SECTION_H2}>Image slots (draft)</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-2.5">
                {study.imageSlots.map((slot) => (
                  <div
                    key={slot}
                    className="border border-dashed border-[#475569] bg-[#111827] px-3 py-2.5 text-[12px] text-[#94a3b8]"
                  >
                    [Image] {slot}
                  </div>
                ))}
              </div>
            </section>
          </CaseStudyScrollReveal>
        ) : null}

        <CaseStudyScrollReveal>
          <CaseStudyArticleFooter prev={prev} next={next} />
        </CaseStudyScrollReveal>
    </article>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudyBySlug[slug];

  if (!study) notFound();

  const { prev, next } = getCaseStudyNeighbors(slug);

  const mainClass = "min-h-screen blueprint-page text-[#e8edf2]";

  const backLink = (
    <BackToWorksLink
      aria-label="Back to home"
      className={
        (study.cinematicIntro
          ? "z-[600] "
          : "z-[260] ") +
        "group fixed bottom-5 right-5 inline-flex h-12 w-12 items-center overflow-hidden rounded-none border border-[#FF7410] bg-[#FF7410] px-3 text-[#0a0908] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:w-44 hover:border-[#FF8C30] hover:bg-[#FF8C30] focus-visible:w-44 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7410]/50"
      }
    >
      <ArrowLeft size={18} className="shrink-0 text-[#0a0908]" aria-hidden />
      <span className="ml-2 whitespace-nowrap text-[11px] font-mono font-semibold uppercase tracking-[0.18em] opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
        Back to home
      </span>
    </BackToWorksLink>
  );

  if (study.cinematicIntro) {
    return (
      <main id="case-study-top" className={mainClass}>
        <CaseStudyCinematicIntro config={study.cinematicIntro}>
          <CaseStudyArticle study={study} prev={prev} next={next} />
        </CaseStudyCinematicIntro>
        {backLink}
      </main>
    );
  }

  return (
    <main id="case-study-top" className={mainClass}>
      <CaseStudyArticle study={study} prev={prev} next={next} />
      {backLink}
    </main>
  );
}
