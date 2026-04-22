import Image from "next/image";
import { notFound } from "next/navigation";
import BackToWorksLink from "@/components/BackToWorksLink";
import { ArrowLeft, CheckCircle, Sparkle } from "@phosphor-icons/react/dist/ssr";
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

  /* Center = introGallery[0] (full frame, object-contain). Sides = 80% of center width each; ~10% inner edge clipped under center. */
  if (items.length === 3) {
    const [center, left, right] = [items[0]!, items[1]!, items[2]!];
    return (
      <div className="mt-6 mb-10 w-full min-w-0 sm:-mx-2" aria-label="Case study preview">
        <div className="relative mx-auto flex w-full max-w-6xl items-end justify-center px-0">
          {/* Left — width ≈ 80% of center (48% vs 60%); tucked behind */}
          <figure
            className="relative z-10 w-[48%] min-w-0 shrink-0 sm:w-[48%] aspect-[45/32] -mr-[14%] sm:-mr-[16%] self-end overflow-hidden border border-[#1e293b] bg-[#11161c] shadow-sm [clip-path:inset(0_10%_0_0)]"
          >
            <Image
              src={left.src}
              alt={left.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 45vw, 28vw"
            />
          </figure>
          {/* Center — wide landscape box so full UI screenshot fits */}
          <figure className="relative z-20 w-[60%] min-w-0 shrink-0 sm:w-[60%] aspect-[45/32] -mx-2 sm:-mx-3 overflow-hidden border border-[rgba(255,116,16,0.45)] bg-[#0f1419] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.45)]">
            <Image
              src={center.src}
              alt={center.alt}
              fill
              className="object-contain object-top"
              sizes="(max-width: 640px) 85vw, 55vw"
              priority
            />
          </figure>
          {/* Right — same width ratio as left */}
          <figure
            className="relative z-10 w-[48%] min-w-0 shrink-0 sm:w-[48%] aspect-[45/32] -ml-[14%] sm:-ml-[16%] self-end overflow-hidden border border-[#1e293b] bg-[#11161c] shadow-sm [clip-path:inset(0_0_0_10%)]"
          >
            <Image
              src={right.src}
              alt={right.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 45vw, 28vw"
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
          className="relative aspect-[4/3] w-full min-w-0 overflow-hidden border border-[#1e293b] bg-[#0c1014] shadow-[0_1px_0_0_rgba(30,41,59,0.9)]"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 40vw"
          />
        </figure>
      ))}
    </div>
  );
}

function JourneyMapSection({ study }: { study: CaseStudy }) {
  if (!study.artifacts?.journeyMap?.length) return null;
  return (
    <section className="mt-12 border-t border-[#1e293b] pt-8">
      <h2 className={SECTION_H2}>Customer Journey Map</h2>
      <div className="mt-4 w-full min-w-0 overflow-x-auto sm:overflow-x-visible [scrollbar-gutter:stable]">
        <div className="w-full min-w-[640px] border border-[#1e293b] bg-[#0c1014] sm:min-w-0">
          <div className="grid w-full grid-cols-5 border-b border-[#1e293b] text-left text-[10px] font-mono uppercase tracking-[0.14em] text-[#64748b]">
            <div className="px-2 py-2 sm:px-3 border-r border-[#1e293b] min-w-0">Stage</div>
            <div className="px-2 py-2 sm:px-3 border-r border-[#1e293b] min-w-0">User Goal</div>
            <div className="px-2 py-2 sm:px-3 border-r border-[#1e293b] min-w-0">Pain Point</div>
            <div className="px-2 py-2 sm:px-3 border-r border-[#1e293b] min-w-0">UX Intervention</div>
            <div className="px-2 py-2 sm:px-3 min-w-0">Impact</div>
          </div>
          {study.artifacts.journeyMap.map((row) => (
            <div
              key={row.stage}
              className="grid w-full grid-cols-5 border-b border-[#1e293b] text-left text-[12px] leading-relaxed text-[#94a3b8] last:border-b-0"
            >
              <div className="px-2 py-3 sm:px-3 border-r border-[#1e293b] font-semibold text-[#f1f5f9] min-w-0 [overflow-wrap:anywhere]">
                {row.stage}
              </div>
              <div className="px-2 py-3 sm:px-3 border-r border-[#1e293b] min-w-0 [overflow-wrap:anywhere]">{row.userGoal}</div>
              <div className="px-2 py-3 sm:px-3 border-r border-[#1e293b] min-w-0 [overflow-wrap:anywhere]">{row.painPoint}</div>
              <div className="px-2 py-3 sm:px-3 border-r border-[#1e293b] min-w-0 [overflow-wrap:anywhere]">
                {row.uxIntervention}
              </div>
              <div className="px-2 py-3 sm:px-3 min-w-0 [overflow-wrap:anywhere]">{row.impact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SwotSection({ study }: { study: CaseStudy }) {
  if (!study.artifacts?.swot) return null;
  return (
    <section className="mt-10">
      <CaseStudyScrollReveal>
        <h2 className={SECTION_H2}>SWOT Analysis</h2>
      </CaseStudyScrollReveal>
      <div className="mt-4 grid sm:grid-cols-2 gap-3">
        {(
          [
            ["Strengths", study.artifacts.swot.strengths],
            ["Weaknesses", study.artifacts.swot.weaknesses],
            ["Opportunities", study.artifacts.swot.opportunities],
            ["Threats", study.artifacts.swot.threats],
          ] as const
        ).map(([title, points], i) => (
          <CaseStudyScrollReveal key={title} delay={i * 0.07}>
            <div className="border border-[#1e293b] bg-[#0c1014] p-4 h-full">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#64748b]">{title}</h3>
              <ul className="mt-2.5 space-y-2">
                {points.map((point) => (
                  <li key={point} className="text-[13px] text-[#cbd5e1] leading-relaxed">
                    • {point}
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

function InformationArchitectureSection({ study }: { study: CaseStudy }) {
  if (!study.artifacts?.visualIA) return null;
  return (
    <section className="mt-10">
      <h2 className={SECTION_H2}>Information Architecture</h2>
      <div className="mt-4 border border-[#1e293b] bg-[#0c1014] p-4 sm:p-6 overflow-x-auto">
        <div className="min-w-[920px]">
          <div className="flex justify-center">
            <div className="border border-[#334155] bg-[#111827] px-6 py-2.5 text-[14px] font-semibold text-[#f1f5f9]">
              {study.artifacts.visualIA.home}
            </div>
          </div>

          <div className="mx-[6%] mt-4 h-[1px] bg-[#334155]" />

          <div className="mt-3 grid grid-cols-5 gap-4">
            {study.artifacts.visualIA.columns.map((col) => (
              <div key={col.primary} className="flex flex-col items-center text-center">
                <div className="h-3 w-[1px] bg-[#334155]" />
                <div className="border border-[#334155] bg-[#111827] px-3 py-2 text-[14px] font-semibold text-[#cbd5e1] min-h-[56px] flex items-center justify-center">
                  {col.primary}
                </div>
                <div className="h-6 w-[1px] bg-[#334155]" />
                <div className="border border-[#334155] bg-[#111827] px-3 py-2 text-[14px] font-semibold text-[#cbd5e1] min-h-[62px] flex items-center justify-center">
                  {col.secondary}
                </div>
                {col.tertiary ? (
                  <>
                    <div className="h-6 w-[1px] bg-[#334155]" />
                    <div className="border border-[#334155] bg-[#111827] px-3 py-2 text-[14px] font-semibold text-[#cbd5e1] min-h-[62px] flex items-center justify-center">
                      {col.tertiary}
                    </div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      {study.artifacts.informationArchitecture?.length ? (
        <ul className="mt-4 space-y-2 text-[14px] text-[#cbd5e1] leading-relaxed">
          {study.artifacts.informationArchitecture.map((node) => (
            <li key={node.node} className="border border-[#1e293b] bg-[#0c1014] px-3 py-2.5">
              <span className="font-semibold text-[#f1f5f9]">{node.node}</span>
              <span className="text-[#94a3b8]"> — {node.children.join(" · ")}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function UserFlowSection({ study }: { study: CaseStudy }) {
  if (!study.artifacts?.userFlows?.length) return null;
  return (
    <section className="mt-10">
      <CaseStudyScrollReveal>
        <h2 className={SECTION_H2}>User Flow</h2>
      </CaseStudyScrollReveal>
      <div className="mt-4 grid lg:grid-cols-3 gap-3">
        {study.artifacts.userFlows.map((flow, i) => (
          <CaseStudyScrollReveal key={flow.title} delay={i * 0.08}>
            <div className="border border-[#1e293b] bg-[#0c1014] p-4 h-full">
              <h3 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#64748b] mb-3">{flow.title}</h3>
              <div className="space-y-2">
                {flow.steps.map((step, stepIndex) => (
                  <div key={step}>
                    <div className="border border-[#334155] bg-[#111827] px-3 py-2 text-[13px] text-[#cbd5e1] leading-relaxed">
                      <span className="font-semibold text-[#f1f5f9]">{stepIndex + 1}.</span> {step}
                    </div>
                    {stepIndex < flow.steps.length - 1 ? (
                      <div className="text-center text-[#64748b] py-1 text-[12px]">↓</div>
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

function ProcessWalkthroughSection({ study }: { study: CaseStudy }) {
  if (!study.processSteps?.length) return null;
  return (
    <section className="mt-12 border-t border-[#1e293b] pt-8">
      <CaseStudyScrollReveal>
        <div>
          <h2 className={SECTION_H2}>
            {study.processWalkthroughLabel ? (
              <span className="text-[#64748b]">{study.processWalkthroughLabel} · </span>
            ) : null}
            UX Process Walkthrough
          </h2>
          <p className="mt-3 text-[15px] text-[#94a3b8] leading-relaxed">
            Detailed flow from strategy to execution, including UX methods and content reasoning.
          </p>
        </div>
      </CaseStudyScrollReveal>

      <div className="mt-6 space-y-5">
        {study.processSteps.map((step, index) => (
          <CaseStudyScrollReveal key={step.step} delay={index * 0.08}>
            <div className="border border-[#1e293b] bg-[#0c1014]">
              <div className="px-4 sm:px-5 py-3 border-b border-[#1e293b] flex items-center justify-between gap-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#64748b]">Step {step.step}</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#FF7410]/85">UX execution</p>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="font-title text-lg sm:text-xl font-black text-[#f8fafc]">{step.title}</h3>
                <p className="mt-2 text-[15px] text-[#cbd5e1] leading-relaxed">{step.content}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {step.uxMethods.map((method) => (
                    <span
                      key={method}
                      className="text-[10px] font-mono uppercase tracking-[0.14em] px-2 py-1 border border-[#334155] text-[#94a3b8] bg-[#0a0d12]"
                    >
                      {method}
                    </span>
                  ))}
                </div>

                <div className="mt-4 border-l-2 border-[rgba(255,116,16,0.45)] pl-3">
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#64748b]">Outcome</p>
                  <p className="mt-1 text-[14px] text-[#cbd5e1] leading-relaxed">{step.outcome}</p>
                </div>
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

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudyBySlug[slug];

  if (!study) notFound();

  const cta = study.artifacts?.ctaVideoShowcase;
  const { prev, next } = getCaseStudyNeighbors(slug);

  return (
    <main id="case-study-top" className="min-h-screen scroll-smooth blueprint-page text-[#e8edf2]">
      <article className="w-[80vw] max-w-[1400px] mx-auto px-5 sm:px-7 py-10 sm:py-14">
        <CaseStudyScrollReveal>
          <div>
            <BackToWorksLink className="inline-flex items-center justify-center gap-2 rounded-none border border-[rgba(255,116,16,0.55)] bg-[rgba(255,116,16,0.08)] px-4 py-2.5 text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-[#e8edf2] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-colors hover:border-[#FF7410] hover:bg-[rgba(255,116,16,0.14)] hover:text-white">
              <ArrowLeft size={14} className="text-[#FF7410]" aria-hidden />
              Back to works
            </BackToWorksLink>

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

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="border border-[#1e293b] bg-[#0c1014] px-4 py-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">Timeline</div>
                  <div className="mt-1 text-sm font-semibold text-[#e2e8f0]">{study.timeline}</div>
                </div>
                <div className="border border-[#1e293b] bg-[#0c1014] px-4 py-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">Role</div>
                  <div className="mt-1 text-sm font-semibold text-[#e2e8f0]">{study.role}</div>
                </div>
              </div>
            </header>
          </div>
        </CaseStudyScrollReveal>

        {/* 1. STAR */}
        <CaseStudyScrollReveal>
          <section className="mt-9 space-y-8">
          <div>
            <h2 className={SECTION_H2}>Situation</h2>
            <p className="mt-3 text-[16px] text-[#cbd5e1] leading-relaxed">{study.situation}</p>
          </div>

          <div>
            <h2 className={SECTION_H2}>Task</h2>
            <p className="mt-3 text-[16px] text-[#cbd5e1] leading-relaxed">{study.task}</p>
          </div>

          <div>
            <h2 className={SECTION_H2}>Action</h2>
            <ul className="mt-3 space-y-2.5">
              {study.actions.map((item) => (
                <li key={item} className="text-[15px] text-[#cbd5e1] leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={SECTION_H2}>Result</h2>
            <ul className="mt-3 space-y-2.5">
              {study.results.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-[#cbd5e1] leading-relaxed">
                  <CheckCircle size={16} className="text-[#FF7410] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        </CaseStudyScrollReveal>

        {/* 2.1 UX process walkthrough… */}
        <ProcessWalkthroughSection study={study} />

        {/* 3. Customer journey map */}
        <CaseStudyScrollReveal>
          <JourneyMapSection study={study} />
        </CaseStudyScrollReveal>

        {/* 4. SWOT */}
        <SwotSection study={study} />

        {/* 5. Information architecture */}
        <CaseStudyScrollReveal>
          <InformationArchitectureSection study={study} />
        </CaseStudyScrollReveal>

        {/* 6. User flow */}
        <UserFlowSection study={study} />

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

        {/* 10. UX outcome (donut or bars) */}
        <CaseStudyScrollReveal>
          <CaseStudyUxOutcomeViz study={study} />
        </CaseStudyScrollReveal>

        {/* 11. Learnings */}
        <CaseStudyScrollReveal>
          <section className="mt-10 border-t border-[#1e293b] pt-8">
            <h2 className={`${SECTION_H2} flex items-center gap-2`}>
              <Sparkle size={13} /> Learnings
            </h2>
            <ul className="mt-3 space-y-2">
              {study.learnings.map((item) => (
                <li key={item} className="text-[15px] text-[#cbd5e1] leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </section>
        </CaseStudyScrollReveal>

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
    </main>
  );
}
