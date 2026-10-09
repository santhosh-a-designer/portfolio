import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import type { CaseStudy } from "@/lib/caseStudies";

function SectionWindow({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden border-2 border-black bg-white shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000]">
      <div className="flex h-10 items-center gap-2 border-b-2 border-black bg-[#E2E8F0] px-3 font-mono text-xs select-none sm:h-11 sm:px-4">
        <span className="bg-[#FF462D] px-2 py-0.5 text-[10px] font-bold text-white">{num}</span>
        <span className="truncate font-bold uppercase tracking-wider text-black">{title}</span>
      </div>
      <div className="p-4 sm:p-8 md:p-10">{children}</div>
    </section>
  );
}

function Clip({
  label,
  caption,
  src,
}: {
  label: string;
  caption: string;
  src: string;
}) {
  return (
    <figure className="flex min-w-0 flex-col border-2 border-black bg-[#FAF9F5]">
      <figcaption className="border-b-2 border-black bg-[#FAED00] px-3 py-2 font-mono text-[10px] font-black uppercase tracking-wider">
        {label}
      </figcaption>
      <video
        className="aspect-video w-full bg-black object-contain"
        controls
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
      <p className="px-3 py-3 text-xs font-semibold leading-relaxed text-zinc-700 sm:text-sm">{caption}</p>
    </figure>
  );
}

export default function ParlaCaseStudyView({ study }: { study: CaseStudy }) {
  const story = study.productDeepDive?.customerSchedulerStory;
  const sell = study.productDeepDive?.showAndSell;
  const ds = study.artifacts?.designSystem;
  const cta = study.artifacts?.ctaVideoShowcase;
  const journey = study.artifacts?.journeyMap ?? [];

  return (
    <main className="mx-auto min-w-0 max-w-[1240px] space-y-8 px-3 pb-28 pt-4 sm:space-y-12 sm:px-6 sm:pb-32 sm:pt-6 md:pt-8 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-4 font-mono select-none">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black hover:text-[#FF462D] sm:text-sm"
        >
          <ArrowLeft weight="bold" className="h-4 w-4" />
          Back to selected work
        </Link>
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 sm:text-xs">
          Parla Retail · US
        </span>
      </div>

      <section className="overflow-hidden border-2 border-black bg-white shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000]">
        <div className="space-y-5 p-4 text-center sm:space-y-6 sm:p-10 md:p-12">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex border-2 border-black bg-[#FF462D] px-3 py-1 font-mono text-xs font-black uppercase tracking-widest text-white">
              Assisted selling
            </span>
            <span className="inline-flex border-2 border-black bg-[#FAED00] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest sm:text-xs">
              {study.company}
            </span>
          </div>
          <h1 className="text-[1.7rem] font-black uppercase leading-none tracking-tight min-[380px]:text-3xl sm:text-5xl">
            Show &amp; Sell
          </h1>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-3 lg:grid-cols-2 sm:gap-4">
            <div className="flex min-h-[140px] flex-col justify-center border-2 border-black bg-zinc-50 p-4 text-left lg:text-center">
              <p className="mb-2 font-mono text-[10px] font-black uppercase text-[#FF462D]">The problem</p>
              <p className="text-sm leading-relaxed text-zinc-800 sm:text-base">{study.situation}</p>
            </div>
            <div className="flex min-h-[140px] flex-col justify-center border-2 border-black bg-[#FAF9F5] p-4 text-left lg:text-center">
              <p className="mb-2 font-mono text-[10px] font-black uppercase text-[#1976D2]">The job</p>
              <p className="text-sm leading-relaxed text-zinc-800 sm:text-base">{study.task}</p>
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-sm font-bold italic leading-snug text-zinc-600 sm:text-lg">
            {study.summary}
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-500">
            One thread: <strong className="text-zinc-800">the CTA on the store</strong>
            {" → "}
            <strong className="text-zinc-800">a scheduler people trust</strong>
            {" → "}
            <strong className="text-zinc-800">a live call</strong>
            {" → "}
            <strong className="text-zinc-800">checkout while intent is still hot</strong>.
          </p>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-2 font-mono text-xs md:grid-cols-3 sm:gap-3">
            <div className="flex min-h-[72px] flex-col items-center justify-center border-2 border-black bg-[#FAED00] p-3 text-center">
              <span className="mb-1 block text-[10px] uppercase text-black/60">Timeline</span>
              <span className="font-black leading-snug">{study.timeline}</span>
            </div>
            <div className="flex min-h-[72px] flex-col items-center justify-center border-2 border-black p-3 text-center">
              <span className="mb-1 block text-[10px] uppercase text-zinc-500">Role</span>
              <span className="font-black leading-snug">{study.role}</span>
            </div>
            <div className="col-span-2 flex min-h-[72px] flex-col items-center justify-center border-2 border-black p-3 text-center md:col-span-1">
              <span className="mb-1 block text-[10px] uppercase text-zinc-500">Craft</span>
              <span className="font-black leading-snug">{study.toolsAndLanguages}</span>
            </div>
          </div>
        </div>
        {study.introGallery?.length ? (
          <div className="grid grid-cols-1 gap-3 border-t-2 border-black bg-[#F4F4F0] p-3 sm:grid-cols-3 sm:p-4">
            {study.introGallery.map((shot) => (
              <figure key={shot.src} className="overflow-hidden border-2 border-black bg-white">
                <div className="relative aspect-[16/10]">
                  <Image src={shot.src} alt={shot.alt} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, 360px" />
                </div>
              </figure>
            ))}
          </div>
        ) : null}
      </section>

      <SectionWindow num="01" title="Where the sale actually happens">
        <p className="mb-6 max-w-3xl text-sm text-zinc-600">
          Five moments from browsing to payment. The work sat on the handoffs, not on a prettier product page.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-black font-mono text-[10px] uppercase tracking-wider">
                <th className="py-2 pr-3">Stage</th>
                <th className="py-2 pr-3">Goal</th>
                <th className="py-2 pr-3">Pain</th>
                <th className="py-2 pr-3">What I designed</th>
                <th className="py-2">What changed</th>
              </tr>
            </thead>
            <tbody>
              {journey.map((row) => (
                <tr key={row.stage} className="border-b border-zinc-200 align-top">
                  <td className="py-3 pr-3 font-black text-[#FF462D]">{row.stage}</td>
                  <td className="py-3 pr-3 text-zinc-800">{row.userGoal}</td>
                  <td className="py-3 pr-3 text-zinc-600">{row.painPoint}</td>
                  <td className="py-3 pr-3 text-zinc-800">{row.uxIntervention}</td>
                  <td className="bg-[#FAF9F5] py-3 text-zinc-800">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWindow>

      {cta ? (
        <SectionWindow num="02" title="The CTA, before the call">
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-700">{cta.reason}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {cta.videos.map((video) => (
              <Clip key={video.src} label={video.label} caption={video.caption} src={video.src} />
            ))}
          </div>
        </SectionWindow>
      ) : null}

      {story ? (
        <SectionWindow num="03" title="Customer scheduler">
          <p className="mb-2 font-mono text-[10px] font-black uppercase tracking-wider text-[#1976D2]">{story.eyebrow}</p>
          <h2 className="mb-3 text-xl font-black uppercase tracking-tight sm:text-2xl">{story.title}</h2>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-zinc-700">{story.intro}</p>
          <div className="space-y-8">
            {story.chapters.map((chapter) => (
              <article key={chapter.badge} className="space-y-4 border-2 border-black bg-[#FAF9F5] p-4 sm:p-6">
                <p className="font-mono text-[10px] font-black uppercase tracking-wider text-[#FF462D]">{chapter.badge}</p>
                <h3 className="text-lg font-black uppercase leading-tight">{chapter.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-800">{chapter.body}</p>
                {chapter.footnote ? (
                  <p className="text-xs font-semibold text-zinc-500">{chapter.footnote}</p>
                ) : null}
                {chapter.businessImpact ? (
                  <div className="border-2 border-black bg-white p-4">
                    <p className="font-mono text-[10px] font-black uppercase tracking-wider">{chapter.businessImpact.eyebrow}</p>
                    {chapter.businessImpact.intro ? (
                      <p className="mt-2 text-sm leading-relaxed text-zinc-700">{chapter.businessImpact.intro}</p>
                    ) : null}
                    <ul className="mt-4 grid list-none gap-3 sm:grid-cols-3">
                      {chapter.businessImpact.metrics.map((metric) => (
                        <li key={metric.value} className="border-2 border-black bg-[#FAED00] p-3">
                          <p className="font-mono text-2xl font-black leading-none">{metric.value}</p>
                          <p className="mt-2 text-xs font-semibold leading-snug text-zinc-800">{metric.label}</p>
                        </li>
                      ))}
                    </ul>
                    {chapter.businessImpact.footnote ? (
                      <p className="mt-3 border-t border-black/10 pt-3 text-[11px] leading-relaxed text-zinc-500">
                        {chapter.businessImpact.footnote}
                      </p>
                    ) : null}
                  </div>
                ) : null}
                {chapter.media.kind === "single" ? (
                  <Clip label={chapter.media.label} caption={chapter.media.caption} src={chapter.media.src} />
                ) : null}
                {chapter.media.kind === "responsive" ? (
                  <div className="space-y-3">
                    {chapter.media.bridge ? (
                      <p className="text-sm font-semibold text-zinc-600">{chapter.media.bridge}</p>
                    ) : null}
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                      <Clip label={chapter.media.desktop.label} caption={chapter.media.desktop.caption} src={chapter.media.desktop.src} />
                      <Clip label={chapter.media.mobile.label} caption={chapter.media.mobile.caption} src={chapter.media.mobile.src} />
                    </div>
                  </div>
                ) : null}
                {chapter.media.kind === "sideBySide" ? (
                  <div className="space-y-3">
                    {chapter.media.bridge ? (
                      <p className="text-sm font-semibold text-zinc-600">{chapter.media.bridge}</p>
                    ) : null}
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-black uppercase">{chapter.media.left.title}</h4>
                        <p className="text-sm leading-relaxed text-zinc-700">{chapter.media.left.body}</p>
                        <Clip label={chapter.media.left.label} caption={chapter.media.left.caption} src={chapter.media.left.src} />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-black uppercase">{chapter.media.right.title}</h4>
                        <p className="text-sm leading-relaxed text-zinc-700">{chapter.media.right.body}</p>
                        <Clip label={chapter.media.right.label} caption={chapter.media.right.caption} src={chapter.media.right.src} />
                      </div>
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </SectionWindow>
      ) : null}

      {sell ? (
        <SectionWindow num="04" title="Show & Sell on the call">
          <p className="mb-4 max-w-3xl text-sm leading-relaxed text-zinc-700">{sell.intro}</p>
          {sell.walkthrough ? (
            <p className="mb-6 max-w-3xl text-sm font-semibold leading-relaxed text-zinc-800">{sell.walkthrough.lead}</p>
          ) : null}
          <ul className="mb-8 grid list-none gap-2 sm:grid-cols-2">
            {sell.bullets.map((bullet) => (
              <li key={bullet} className="border-2 border-black bg-white px-3 py-3 text-sm font-semibold leading-relaxed text-zinc-800">
                {bullet}
              </li>
            ))}
          </ul>
          {sell.walkthrough ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {sell.walkthrough.videos.map((video) => (
                <Clip key={video.src} label={video.label} caption={video.caption} src={video.src} />
              ))}
            </div>
          ) : null}
        </SectionWindow>
      ) : null}

      {ds ? (
        <SectionWindow num="05" title="Design system">
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-700">{ds.blurb}</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {ds.colors.map((color) => (
              <div key={color.hex} className="flex items-center gap-2 border-2 border-black bg-white p-2 text-left">
                <span
                  className="h-9 w-9 shrink-0 border-2 border-black"
                  style={{ background: color.hex }}
                  aria-hidden
                />
                <span className="min-w-0 font-mono text-[9px]">
                  <span className="block font-black uppercase">{color.name}</span>
                  <span className="text-zinc-500">{color.hex}</span>
                </span>
              </div>
            ))}
          </div>
          <ul className="mt-4 space-y-2">
            {ds.colors.map((color) => (
              <li key={color.use} className="text-sm text-zinc-700">
                <span className="font-black">{color.name}. </span>
                {color.use}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {ds.principles.map((principle) => (
              <p key={principle} className="border-2 border-black bg-[#FAF9F5] p-4 text-sm font-semibold leading-relaxed text-zinc-800">
                {principle}
              </p>
            ))}
          </div>
        </SectionWindow>
      ) : null}

      <SectionWindow num="06" title="What I can stand behind">
        <ul className="space-y-3">
          {study.results.map((item) => (
            <li key={item} className="border-l-4 border-[#FF462D] pl-3 text-sm font-semibold leading-relaxed text-zinc-800">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {study.learnings.map((item) => (
            <p key={item} className="border-2 border-black bg-[#FAED00] p-4 text-sm font-semibold leading-relaxed">
              {item}
            </p>
          ))}
        </div>
      </SectionWindow>
    </main>
  );
}
