"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FilePdf } from "@phosphor-icons/react";
import VidyasScreenShowcase from "./VidyasScreenShowcase";
import HighlightText from "./HighlightText";
import ArchitectureTerminal from "./ArchitectureTerminal";
import {
  vidyasArchitectureLines,
  vidyasChallenges,
  vidyasDesignSystem,
  vidyasDoNotClaim,
  vidyasFlows,
  vidyasHonestOutcomes,
  vidyasIA,
  vidyasJourney,
  vidyasShowcaseScreens,
  vidyasSnapshot,
  vidyasStack,
  vidyasTimeline,
} from "@/lib/vidyasKitchenCaseStudyContent";

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
    <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center gap-2 font-mono text-xs select-none">
        <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">{num}</span>
        <span className="font-bold text-black uppercase tracking-wider truncate">{title}</span>
      </div>
      <div className="p-6 sm:p-8 md:p-10">{children}</div>
    </section>
  );
}

function ChallengeBlock({ text, label }: { text: string; label: string }) {
  return (
    <p className="text-zinc-800 leading-relaxed">
      <span className="font-mono text-[10px] font-black uppercase text-zinc-400 block mb-1">{label}</span>
      <HighlightText text={text} />
    </p>
  );
}

export default function VidyasKitchenCaseStudyView() {
  return (
    <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-32 space-y-8 sm:space-y-12">
      <div className="flex items-center justify-between gap-4 border-b-2 border-black pb-4 select-none font-mono">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-black hover:text-[#FF462D] transition-colors group"
        >
          <ArrowLeft weight="bold" className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SELECTED WORK</span>
        </Link>
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-zinc-500 font-bold uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="hidden sm:inline">PROD · SIVAKASI</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="p-6 sm:p-10 md:p-12 space-y-6">
          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF462D] text-white border-2 border-black font-mono text-xs font-black uppercase tracking-widest">
              0→1 · SOLO DESIGN &amp; BUILD
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAED00] text-black border-2 border-black font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest">
              {vidyasSnapshot.firstInMarket}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            Vidya&apos;s Kitchen
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl">
            <div className="p-4 border-2 border-black bg-zinc-50">
              <p className="font-mono text-[10px] font-black uppercase text-[#FF462D] mb-2">The problem</p>
              <p className="text-sm sm:text-base text-zinc-800 leading-relaxed">
                <HighlightText text={vidyasSnapshot.problem} />
              </p>
            </div>
            <div className="p-4 border-2 border-black bg-[#FAF9F5]">
              <p className="font-mono text-[10px] font-black uppercase text-[#00C16A] mb-2">The solution</p>
              <p className="text-sm sm:text-base text-zinc-800 leading-relaxed">
                <HighlightText text={vidyasSnapshot.solution} />
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg font-bold text-zinc-600 max-w-3xl leading-snug italic">
            {vidyasSnapshot.elevator}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs pt-2">
            <div className="p-3 border-2 border-black bg-[#FAED00]">
              <span className="text-[10px] text-black/60 uppercase block">Timeline</span>
              <span className="font-black">{vidyasTimeline.label}</span>
            </div>
            <div className="p-3 border-2 border-black">
              <span className="text-[10px] text-zinc-500 uppercase block">Role</span>
              <span className="font-black">{vidyasSnapshot.role}</span>
            </div>
            <div className="p-3 border-2 border-black">
              <span className="text-[10px] text-zinc-500 uppercase block">Market</span>
              <span className="font-black">{vidyasSnapshot.market}</span>
            </div>
            <a
              href={vidyasSnapshot.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-black bg-black text-white hover:bg-zinc-900 flex items-center justify-between gap-2"
            >
              <span className="font-black uppercase">Live site</span>
              <ArrowUpRight weight="bold" />
            </a>
          </div>
        </div>
      </section>

      {/* Design system */}
      <SectionWindow num="01" title="Design system">
        <p className="text-sm text-zinc-700 leading-relaxed max-w-3xl mb-6">
          <HighlightText text={vidyasDesignSystem.intro} />
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {vidyasDesignSystem.colors.map((c) => (
                <div key={c.hex} className="flex items-center gap-2">
                  <span
                    className="w-10 h-10 rounded border-2 border-black shrink-0"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="font-mono text-[10px]">
                    <p className="font-black uppercase">{c.name}</p>
                    <p className="text-zinc-500">{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
            <ul className="flex flex-wrap gap-2">
              {vidyasDesignSystem.components.map((c) => (
                <li
                  key={c}
                  className="px-2.5 py-1 bg-[#FAF9F5] border-2 border-black font-mono text-[10px] font-bold uppercase"
                >
                  {c}
                </li>
              ))}
            </ul>
            <a
              href={vidyasDesignSystem.pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAED00] border-2 border-black font-mono text-xs font-black uppercase tracking-wider hover:bg-white transition-colors"
            >
              <FilePdf weight="bold" className="w-4 h-4" />
              Design system PDF
            </a>
          </div>
          <div className="p-6 bg-[#1A1A1A] text-white border-2 border-black space-y-3">
            <p className="text-xl sm:text-2xl font-black tracking-tight">{vidyasDesignSystem.typeSample.display}</p>
            <p className="text-sm text-zinc-300">{vidyasDesignSystem.typeSample.body}</p>
          </div>
        </div>
      </SectionWindow>

      {/* Journey */}
      <SectionWindow num="02" title="Journey map — why generic apps fail here">
        <p className="text-sm text-zinc-600 max-w-3xl mb-6">
          Not a generic delivery funnel. Each stage includes what makes Sivakasi different from a dark-store app.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-black font-mono uppercase text-[10px] tracking-wider">
                <th className="py-2 pr-3">Stage</th>
                <th className="py-2 pr-3">Goal</th>
                <th className="py-2 pr-3">Pain</th>
                <th className="py-2 pr-3">Fix</th>
                <th className="py-2">Why not Swiggy?</th>
              </tr>
            </thead>
            <tbody>
              {vidyasJourney.map((row) => (
                <tr key={row.stage} className="border-b border-zinc-200 align-top">
                  <td className="py-3 pr-3 font-black text-[#FF462D]">{row.stage}</td>
                  <td className="py-3 pr-3 text-zinc-800">{row.goal}</td>
                  <td className="py-3 pr-3 text-zinc-600">{row.pain}</td>
                  <td className="py-3 pr-3 text-zinc-800">{row.fix}</td>
                  <td className="py-3 text-zinc-800 bg-[#FAF9F5]">
                    <HighlightText text={row.sivakasiAngle} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWindow>

      {/* IA */}
      <SectionWindow num="03" title="Information architecture">
        <p className="text-sm text-zinc-600 max-w-3xl mb-6">
          Four surfaces — customer PWA, WhatsApp bot, kitchen dashboard, driver app — each with its own nav tree, writing to one order record.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(
            [
              ["Customer PWA", vidyasIA.customer],
              ["Kitchen dashboard", vidyasIA.kitchen],
              ["Driver app", vidyasIA.driver],
              ["WhatsApp bot", vidyasIA.bot],
            ] as const
          ).map(([label, items]) => (
            <div key={label} className="p-4 border-2 border-black bg-[#FAF9F5]">
              <h3 className="font-mono font-black text-sm uppercase mb-3">{label}</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#FF462D]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWindow>

      {/* User flows */}
      <SectionWindow num="04" title="User flows">
        <p className="text-sm text-zinc-600 max-w-3xl mb-6">
          Three end-to-end paths — WhatsApp sentence order, PWA checkout, kitchen dispatch — all landing on the same ticket.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {vidyasFlows.map((flow) => (
            <div key={flow.title} className="p-4 border-2 border-black">
              <h3 className="font-mono font-black text-xs uppercase mb-3 text-black">{flow.title}</h3>
              <ol className="space-y-2">
                {flow.steps.map((step, i) => (
                  <li key={step} className="flex gap-2 text-xs text-zinc-700">
                    <span className="font-mono font-black text-zinc-400 shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </SectionWindow>

      {/* Challenges */}
      <SectionWindow num="05" title="Six problems worth solving">
        <p className="text-sm text-zinc-600 mb-6 max-w-2xl">
          Each block is one decision — constraint, wrong turn, fix, proof.
        </p>
        <div className="space-y-5">
          {vidyasChallenges.map((c) => (
            <article
              key={c.id}
              className="p-5 sm:p-6 border-2 border-black bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-black text-white font-mono text-xs font-black">{c.id}</span>
                <h3 className="font-mono font-black text-sm sm:text-base uppercase leading-snug">{c.title}</h3>
                <span className="px-2 py-0.5 bg-[#0FE0E3] border border-black text-[10px] font-mono font-black uppercase">
                  {c.surface}
                </span>
              </div>
              <p className="text-sm font-bold text-[#FF462D] border-l-4 border-[#FF462D] pl-3 leading-snug">
                <HighlightText text={c.stake} />
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <ChallengeBlock label="What happened" text={c.happened} />
                  <ChallengeBlock label="Why it was hard" text={c.whyHard} />
                  {c.triedFirst ? (
                    <ChallengeBlock label="First try · failed" text={c.triedFirst} />
                  ) : null}
                </div>
                <div className="space-y-3 p-4 bg-white border-2 border-black">
                  <ChallengeBlock label="What worked" text={c.worked} />
                  <ChallengeBlock label="Outcome" text={c.outcome} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWindow>

      {/* Showcase — all four surfaces */}
      <SectionWindow num="06" title="Key screens — all four surfaces">
        <p className="text-sm text-zinc-600 mb-6 max-w-2xl">
          WhatsApp bot, customer PWA, kitchen dashboard, and driver app — {vidyasShowcaseScreens.length} screens from the live product.
        </p>
        <VidyasScreenShowcase screens={vidyasShowcaseScreens} />
      </SectionWindow>

      {/* Architecture */}
      <SectionWindow num="07" title="Stack & architecture">
        <p className="text-sm text-zinc-600 mb-4 max-w-3xl">
          Client codebase is confidential. Architecture and fee rules are shared; no API keys or live order exports.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {vidyasStack.map((t) => (
            <span key={t} className="px-2.5 py-1 bg-black text-white font-mono text-[10px] font-bold uppercase">
              {t}
            </span>
          ))}
        </div>
        <ArchitectureTerminal lines={vidyasArchitectureLines} filename="architecture.ts" />
      </SectionWindow>

      {/* Outcomes */}
      <SectionWindow num="08" title="What I can stand behind">
        <ul className="space-y-3">
          {vidyasHonestOutcomes.map((line) => (
            <li key={line} className="flex gap-2 text-sm text-zinc-800">
              <span className="text-[#00C16A] font-black">✓</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        {vidyasDoNotClaim.length > 0 && (
          <div className="p-4 border-2 border-dashed border-zinc-400 bg-zinc-50 mt-6">
            <p className="font-mono font-black text-[10px] uppercase text-zinc-500 mb-2">Do not oversell</p>
            <ul className="space-y-1 text-xs text-zinc-600">
              {vidyasDoNotClaim.map((line) => (
                <li key={line}>· {line}</li>
              ))}
            </ul>
          </div>
        )}
      </SectionWindow>

      <footer className="bg-black text-white p-6 sm:p-8 border-2 border-black flex flex-col sm:flex-row justify-between gap-4 font-mono">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#FAED00] font-black mb-1">Vidya&apos;s Kitchen</p>
          <p className="text-sm font-bold">Designed &amp; developed by Simon Santhosh</p>
          <p className="text-xs text-zinc-400">{vidyasTimeline.label}</p>
        </div>
        <Link
          href="/#work"
          className="px-5 py-2.5 bg-[#FAED00] text-black text-xs font-black uppercase border-2 border-white hover:bg-white transition-colors text-center"
        >
          Back to work ↑
        </Link>
      </footer>
    </main>
  );
}
