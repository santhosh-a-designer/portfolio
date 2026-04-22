import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { caseStudyBySlug, getCaseStudyNeighbors, type CaseStudy } from "@/lib/caseStudies";
import CaseStudyArticleFooter from "@/components/CaseStudyArticleFooter";
import { CaseStudyScrollReveal } from "@/components/CaseStudyScrollReveal";
import CaseStudyUxOutcomeViz from "@/components/CaseStudyUxOutcomeViz";
import CaseStudyVideoShowcase from "@/components/CaseStudyVideoShowcase";
import CustomerSchedulerStory from "@/components/CustomerSchedulerStory";

const SECTION_H2 = "text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function JourneyMapSection({ study }: { study: CaseStudy }) {
  if (!study.artifacts?.journeyMap?.length) return null;
  return (
    <section className="mt-12 border-t border-[#e7ddcf] pt-8">
      <h2 className={SECTION_H2}>Customer Journey Map</h2>
      <div className="mt-4 w-full min-w-0 overflow-x-auto sm:overflow-x-visible [scrollbar-gutter:stable]">
        <div className="w-full min-w-[640px] border border-[#e7ddcf] bg-white sm:min-w-0">
          <div className="grid w-full grid-cols-5 border-b border-[#efe7dc] text-left text-[10px] font-mono uppercase tracking-[0.14em] text-[#8a7460]">
            <div className="px-2 py-2 sm:px-3 border-r border-[#efe7dc] min-w-0">Stage</div>
            <div className="px-2 py-2 sm:px-3 border-r border-[#efe7dc] min-w-0">User Goal</div>
            <div className="px-2 py-2 sm:px-3 border-r border-[#efe7dc] min-w-0">Pain Point</div>
            <div className="px-2 py-2 sm:px-3 border-r border-[#efe7dc] min-w-0">UX Intervention</div>
            <div className="px-2 py-2 sm:px-3 min-w-0">Impact</div>
          </div>
          {study.artifacts.journeyMap.map((row) => (
            <div
              key={row.stage}
              className="grid w-full grid-cols-5 border-b border-[#f3ece2] text-left text-[12px] leading-relaxed text-[#51463a] last:border-b-0"
            >
              <div className="px-2 py-3 sm:px-3 border-r border-[#f3ece2] font-semibold text-[#2f2820] min-w-0 [overflow-wrap:anywhere]">
                {row.stage}
              </div>
              <div className="px-2 py-3 sm:px-3 border-r border-[#f3ece2] min-w-0 [overflow-wrap:anywhere]">{row.userGoal}</div>
              <div className="px-2 py-3 sm:px-3 border-r border-[#f3ece2] min-w-0 [overflow-wrap:anywhere]">{row.painPoint}</div>
              <div className="px-2 py-3 sm:px-3 border-r border-[#f3ece2] min-w-0 [overflow-wrap:anywhere]">
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
            <div className="border border-[#e7ddcf] bg-white p-4 h-full">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8a7460]">{title}</h3>
              <ul className="mt-2.5 space-y-2">
                {points.map((point) => (
                  <li key={point} className="text-[13px] text-[#4d4136] leading-relaxed">
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
      <div className="mt-4 border border-[#e7ddcf] bg-white p-4 sm:p-6 overflow-x-auto">
        <div className="min-w-[920px]">
          <div className="flex justify-center">
            <div className="border border-[#dfcfbd] bg-[#faf8f4] px-6 py-2.5 text-[14px] font-semibold text-[#2f2820]">
              {study.artifacts.visualIA.home}
            </div>
          </div>

          <div className="mx-[6%] mt-4 h-[1px] bg-[#d8c7b3]" />

          <div className="mt-3 grid grid-cols-5 gap-4">
            {study.artifacts.visualIA.columns.map((col) => (
              <div key={col.primary} className="flex flex-col items-center text-center">
                <div className="h-3 w-[1px] bg-[#d8c7b3]" />
                <div className="border border-[#dfcfbd] bg-[#faf8f4] px-3 py-2 text-[14px] font-semibold text-[#4f4337] min-h-[56px] flex items-center justify-center">
                  {col.primary}
                </div>
                <div className="h-6 w-[1px] bg-[#d8c7b3]" />
                <div className="border border-[#dfcfbd] bg-[#faf8f4] px-3 py-2 text-[14px] font-semibold text-[#4f4337] min-h-[62px] flex items-center justify-center">
                  {col.secondary}
                </div>
                {col.tertiary ? (
                  <>
                    <div className="h-6 w-[1px] bg-[#d8c7b3]" />
                    <div className="border border-[#dfcfbd] bg-[#faf8f4] px-3 py-2 text-[14px] font-semibold text-[#4f4337] min-h-[62px] flex items-center justify-center">
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
        <ul className="mt-4 space-y-2 text-[14px] text-[#3f352b] leading-relaxed">
          {study.artifacts.informationArchitecture.map((node) => (
            <li key={node.node} className="border border-[#efe7dc] bg-white px-3 py-2.5">
              <span className="font-semibold text-[#2f2820]">{node.node}</span>
              <span className="text-[#6b5a4a]"> — {node.children.join(" · ")}</span>
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
            <div className="border border-[#e7ddcf] bg-white p-4 h-full">
              <h3 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#8a7460] mb-3">{flow.title}</h3>
              <div className="space-y-2">
                {flow.steps.map((step, stepIndex) => (
                  <div key={step}>
                    <div className="border border-[#dfcfbd] bg-[#faf8f4] px-3 py-2 text-[13px] text-[#4f4337] leading-relaxed">
                      <span className="font-semibold text-[#2f2820]">{stepIndex + 1}.</span> {step}
                    </div>
                    {stepIndex < flow.steps.length - 1 ? (
                      <div className="text-center text-[#b99777] py-1 text-[12px]">↓</div>
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
    <section className="mt-12 border-t border-[#e7ddcf] pt-8">
      <CaseStudyScrollReveal>
        <div>
          <h2 className={SECTION_H2}>
            {study.processWalkthroughLabel ? (
              <span className="text-[#8a7460]">{study.processWalkthroughLabel} · </span>
            ) : null}
            UX Process Walkthrough
          </h2>
          <p className="mt-3 text-[15px] text-[#5d5145] leading-relaxed">
            Detailed flow from strategy to execution, including UX methods and content reasoning.
          </p>
        </div>
      </CaseStudyScrollReveal>

      <div className="mt-6 space-y-5">
        {study.processSteps.map((step, index) => (
          <CaseStudyScrollReveal key={step.step} delay={index * 0.08}>
            <div className="border border-[#e7ddcf] bg-white">
              <div className="px-4 sm:px-5 py-3 border-b border-[#efe7dc] flex items-center justify-between gap-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8a7460]">Step {step.step}</p>
                <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#bf8c63]">UX execution</p>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="font-title text-lg sm:text-xl font-black text-[#1b1712]">{step.title}</h3>
                <p className="mt-2 text-[15px] text-[#4d4136] leading-relaxed">{step.content}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {step.uxMethods.map((method) => (
                    <span
                      key={method}
                      className="text-[10px] font-mono uppercase tracking-[0.14em] px-2 py-1 border border-[#ddceb9] text-[#6f5e4d] bg-[#fbf8f3]"
                    >
                      {method}
                    </span>
                  ))}
                </div>

                <div className="mt-4 border-l-2 border-[#d6ab84] pl-3">
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8a7460]">Outcome</p>
                  <p className="mt-1 text-[14px] text-[#4d4136] leading-relaxed">{step.outcome}</p>
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
        <p className="mt-3 text-[16px] text-[#3f352b] leading-relaxed">{ss.intro}</p>
        <ul className="mt-3 space-y-2">
          {ss.bullets.map((b) => (
            <li key={b} className="text-[15px] text-[#3f352b] leading-relaxed">
              • {b}
            </li>
          ))}
        </ul>
        {walk ? (
          <>
            <p className="mt-6 max-w-[75ch] text-[15px] leading-relaxed text-[#3f352b]">{walk.lead}</p>
            <CaseStudyVideoShowcase
              showTopRule={false}
              videos={walk.videos}
              className="mt-5"
            />
            {walk.customerScreenTeaser ? (
              <p className="mt-6 max-w-[75ch] border-l-2 border-[#e0cdb8] pl-3 text-[14px] italic leading-relaxed text-[#5d5145]">
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
    <main id="case-study-top" className="min-h-screen scroll-smooth bg-[#faf8f4] text-[#1d1b17]">
      <article className="w-[80vw] max-w-[1400px] mx-auto px-5 sm:px-7 py-10 sm:py-14">
        <CaseStudyScrollReveal>
          <div>
            <Link
              href="/#works"
              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-[#8a7460] hover:text-[#c96010] transition-colors"
            >
              <ArrowLeft size={14} /> Back to works
            </Link>

            <header className="mt-8 border-b border-[#e7ddcf] pb-8">
              <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#b69272]">Case study</p>
              <h1 className="mt-3 font-title text-3xl sm:text-5xl font-black leading-tight text-[#15120d]">{study.project}</h1>
              {study.company ? (
                <p className="mt-2 text-sm sm:text-base font-medium text-[#3a332c]">{study.company}</p>
              ) : null}
              {study.subtitle && !study.company ? (
                <p className="mt-2 text-lg sm:text-xl text-[#c96010] font-medium">{study.subtitle}</p>
              ) : null}
              <p className="mt-5 text-base text-[#4e4338] leading-relaxed">{study.summary}</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="border border-[#e7ddcf] bg-white px-4 py-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#8a7460]">Timeline</div>
                  <div className="mt-1 text-sm font-semibold text-[#2b241d]">{study.timeline}</div>
                </div>
                <div className="border border-[#e7ddcf] bg-white px-4 py-3">
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#8a7460]">Role</div>
                  <div className="mt-1 text-sm font-semibold text-[#2b241d]">{study.role}</div>
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
            <p className="mt-3 text-[16px] text-[#3f352b] leading-relaxed">{study.situation}</p>
          </div>

          <div>
            <h2 className={SECTION_H2}>Task</h2>
            <p className="mt-3 text-[16px] text-[#3f352b] leading-relaxed">{study.task}</p>
          </div>

          <div>
            <h2 className={SECTION_H2}>Action</h2>
            <ul className="mt-3 space-y-2.5">
              {study.actions.map((item) => (
                <li key={item} className="text-[15px] text-[#3f352b] leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={SECTION_H2}>Result</h2>
            <ul className="mt-3 space-y-2.5">
              {study.results.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-[#3f352b] leading-relaxed">
                  <CheckCircle size={16} className="text-[#c96010] mt-0.5 flex-shrink-0" />
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
            <section className="mt-12 w-full min-w-0 border-t border-[#e7ddcf] pt-8">
              <h2 className={SECTION_H2}>CTA</h2>
              <p className="mt-3 text-[16px] text-[#3f352b] leading-relaxed">{cta.reason}</p>
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
          <section className="mt-10 border-t border-[#e7ddcf] pt-8">
            <h2 className={`${SECTION_H2} flex items-center gap-2`}>
              <Sparkle size={13} /> Learnings
            </h2>
            <ul className="mt-3 space-y-2">
              {study.learnings.map((item) => (
                <li key={item} className="text-[15px] text-[#3f352b] leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </section>
        </CaseStudyScrollReveal>

        {study.slug !== "parla-show-and-sell" && study.imageSlots.length ? (
          <CaseStudyScrollReveal>
            <section className="mt-10 border border-[#e7ddcf] bg-white p-4 sm:p-6">
              <h2 className={SECTION_H2}>Image slots (draft)</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-2.5">
                {study.imageSlots.map((slot) => (
                  <div
                    key={slot}
                    className="border border-dashed border-[#ccb9a6] bg-[#faf8f4] px-3 py-2.5 text-[12px] text-[#6b5a4a]"
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
