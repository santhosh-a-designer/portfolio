import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { caseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyVideoShowcase from "@/components/CaseStudyVideoShowcase";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudyBySlug[slug];

  if (!study) notFound();

  return (
    <main className="min-h-screen bg-[#faf8f4] text-[#1d1b17]">
      <article className="w-[80vw] max-w-[1400px] mx-auto px-5 sm:px-7 py-10 sm:py-14">
        <Link
          href="/#works"
          className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-[#8a7460] hover:text-[#c96010] transition-colors"
        >
          <ArrowLeft size={14} /> Back to works
        </Link>

        <header className="mt-8 border-b border-[#e7ddcf] pb-8">
          <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#b69272]">Case Study</p>
          <h1 className="mt-3 font-title text-3xl sm:text-5xl font-black leading-tight text-[#15120d]">
            {study.project}
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-[#c96010] font-medium">{study.subtitle}</p>
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

        <section className="mt-9 space-y-8">
          <div>
            <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]">Situation</h2>
            <p className="mt-3 text-[16px] text-[#3f352b] leading-relaxed">{study.situation}</p>
          </div>

          <div>
            <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]">Task</h2>
            <p className="mt-3 text-[16px] text-[#3f352b] leading-relaxed">{study.task}</p>
          </div>

          <div>
            <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]">Action</h2>
            <ul className="mt-3 space-y-2.5">
              {study.actions.map((item) => (
                <li key={item} className="text-[15px] text-[#3f352b] leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]">Result</h2>
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

        {study.artifacts?.ctaVideoShowcase ? (
          <CaseStudyVideoShowcase
            title={study.artifacts.ctaVideoShowcase.title}
            reason={study.artifacts.ctaVideoShowcase.reason}
            videos={study.artifacts.ctaVideoShowcase.videos}
          />
        ) : null}

        {study.artifacts?.journeyMap?.length ? (
          <section className="mt-12 border-t border-[#e7ddcf] pt-8">
            <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]">
              Customer Journey Map
            </h2>
            <div className="mt-4 overflow-x-auto">
              <div className="min-w-[860px] border border-[#e7ddcf] bg-white">
                <div className="grid grid-cols-[160px_170px_170px_180px_180px] border-b border-[#efe7dc] text-[10px] font-mono uppercase tracking-[0.14em] text-[#8a7460]">
                  <div className="px-3 py-2 border-r border-[#efe7dc]">Stage</div>
                  <div className="px-3 py-2 border-r border-[#efe7dc]">User Goal</div>
                  <div className="px-3 py-2 border-r border-[#efe7dc]">Pain Point</div>
                  <div className="px-3 py-2 border-r border-[#efe7dc]">UX Intervention</div>
                  <div className="px-3 py-2">Impact</div>
                </div>
                {study.artifacts.journeyMap.map((row) => (
                  <div
                    key={row.stage}
                    className="grid grid-cols-[160px_170px_170px_180px_180px] border-b border-[#f3ece2] text-[12px] leading-relaxed text-[#51463a]"
                  >
                    <div className="px-3 py-3 border-r border-[#f3ece2] font-semibold text-[#2f2820]">{row.stage}</div>
                    <div className="px-3 py-3 border-r border-[#f3ece2]">{row.userGoal}</div>
                    <div className="px-3 py-3 border-r border-[#f3ece2]">{row.painPoint}</div>
                    <div className="px-3 py-3 border-r border-[#f3ece2]">{row.uxIntervention}</div>
                    <div className="px-3 py-3">{row.impact}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {study.artifacts?.swot ? (
          <section className="mt-10">
            <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]">SWOT Analysis</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {(
                [
                  ["Strengths", study.artifacts.swot.strengths],
                  ["Weaknesses", study.artifacts.swot.weaknesses],
                  ["Opportunities", study.artifacts.swot.opportunities],
                  ["Threats", study.artifacts.swot.threats],
                ] as const
              ).map(([title, points]) => (
                <div key={title} className="border border-[#e7ddcf] bg-white p-4">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8a7460]">{title}</h3>
                  <ul className="mt-2.5 space-y-2">
                    {points.map((point) => (
                      <li key={point} className="text-[13px] text-[#4d4136] leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {study.artifacts?.visualIA ? (
          <section className="mt-10">
            <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]">
              Information Architecture Diagram
            </h2>
            <div className="mt-4 border border-[#e7ddcf] bg-white p-4 sm:p-6 overflow-x-auto">
              <div className="min-w-[920px]">
                <div className="flex justify-center">
                  <div className="border border-[#dfcfbd] bg-[#faf8f4] px-10 py-3 text-2xl font-title font-black text-[#2f2820]">
                    {study.artifacts.visualIA.home}
                  </div>
                </div>

                <div className="mx-[6%] mt-5 h-[1px] bg-[#d8c7b3]" />

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
          </section>
        ) : null}

        {study.artifacts?.userFlows?.length ? (
          <section className="mt-10">
            <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]">
              User Flow — How It Works
            </h2>
            <div className="mt-4 grid lg:grid-cols-3 gap-3">
              {study.artifacts.userFlows.map((flow) => (
                <div key={flow.title} className="border border-[#e7ddcf] bg-white p-4">
                  <h3 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#8a7460] mb-3">{flow.title}</h3>
                  <div className="space-y-2">
                    {flow.steps.map((step, i) => (
                      <div key={step}>
                        <div className="border border-[#dfcfbd] bg-[#faf8f4] px-3 py-2 text-[13px] text-[#4f4337] leading-relaxed">
                          <span className="font-semibold text-[#2f2820]">{i + 1}.</span> {step}
                        </div>
                        {i < flow.steps.length - 1 ? (
                          <div className="text-center text-[#b99777] py-1 text-[12px]">↓</div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {study.artifacts?.uxScoreChart?.length ? (
          <section className="mt-10 border border-[#e7ddcf] bg-white p-4 sm:p-6">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8a7460]">UX Score Chart (Before vs After)</h2>
            <p className="mt-2 text-[12px] text-[#6d5d4e]">
              Derived from design audit and implementation review across core journey checkpoints.
            </p>
            <div className="mt-4 space-y-3">
              {study.artifacts.uxScoreChart.map((row) => (
                <div key={row.metric} className="grid grid-cols-[140px_1fr] items-center gap-3">
                  <div className="text-[12px] text-[#3f352b]">{row.metric}</div>
                  <div className="space-y-1.5">
                    <div>
                      <div className="flex justify-between text-[10px] font-mono uppercase tracking-[0.12em] text-[#8a7460]">
                        <span>Before</span>
                        <span>{row.before}/10</span>
                      </div>
                      <div className="h-2 bg-[#eee4d8]">
                        <div className="h-full bg-[#b78f6f]" style={{ width: `${row.before * 10}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-mono uppercase tracking-[0.12em] text-[#8a7460]">
                        <span>After</span>
                        <span>{row.after}/10</span>
                      </div>
                      <div className="h-2 bg-[#eee4d8]">
                        <div className="h-full bg-[#c96010]" style={{ width: `${row.after * 10}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {study.processSteps?.length ? (
          <section className="mt-12 border-t border-[#e7ddcf] pt-8">
            <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]">
              UX Process Walkthrough
            </h2>
            <p className="mt-3 text-[15px] text-[#5d5145] leading-relaxed">
              Detailed flow from strategy to execution, including UX methods, content reasoning, charts, and screen evidence.
            </p>

            <div className="mt-6 space-y-5">
              {study.processSteps.map((step) => (
                <div key={step.step} className="border border-[#e7ddcf] bg-white">
                  <div className="px-4 sm:px-5 py-3 border-b border-[#efe7dc] flex items-center justify-between gap-3">
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8a7460]">
                      Step {step.step}
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#bf8c63]">
                      UX Execution
                    </p>
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

                    {step.chartSlots?.length ? (
                      <div className="mt-4">
                        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8a7460] mb-2">
                          Chart Placeholders
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {step.chartSlots.map((slot) => (
                            <div
                              key={slot}
                              className="border border-dashed border-[#cfbaa3] bg-[#faf7f2] px-3 py-2 text-[12px] text-[#6b5a4a]"
                            >
                              [Chart] {slot}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-4">
                      <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#8a7460] mb-2">
                        Screen Placeholders
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {step.imageSlots.map((slot) => (
                          <div
                            key={slot}
                            className="border border-dashed border-[#ccb9a6] bg-[#faf8f4] px-3 py-2 text-[12px] text-[#6b5a4a]"
                          >
                            [Image] {slot}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-10 border border-[#e7ddcf] bg-white p-4 sm:p-6">
          <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#8a7460] mb-3">Image Slots (Draft)</h3>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {study.imageSlots.map((slot) => (
              <div key={slot} className="border border-dashed border-[#ccb9a6] bg-[#faf8f4] px-3 py-2.5 text-[12px] text-[#6b5a4a]">
                [Image] {slot}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 border-t border-[#e7ddcf] pt-6">
          <h3 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14] flex items-center gap-2">
            <Sparkle size={13} /> Learnings
          </h3>
          <ul className="mt-3 space-y-2">
            {study.learnings.map((item) => (
              <li key={item} className="text-[15px] text-[#3f352b] leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
