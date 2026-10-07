"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import VidyasScreenShowcase from "./VidyasScreenShowcase";
import {
  vidyasChallenges,
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF462D] text-white border-2 border-black font-mono text-xs font-black uppercase tracking-widest">
            0→1 · SOLO DESIGN &amp; BUILD
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none">
            Vidya&apos;s Kitchen
          </h1>
          <p className="text-base sm:text-xl font-bold text-zinc-700 max-w-3xl leading-snug">
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

      {/* UX Research */}
      <SectionWindow num="01" title="UX research & system map">
        <div className="space-y-8">
          <p className="text-sm text-zinc-600 max-w-3xl">
            Working model from the product as shipped — not a formal research study with interviews on file.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-black font-mono uppercase text-[10px] tracking-wider">
                  <th className="py-2 pr-3">Stage</th>
                  <th className="py-2 pr-3">Goal</th>
                  <th className="py-2 pr-3">Pain</th>
                  <th className="py-2 pr-3">Fix</th>
                </tr>
              </thead>
              <tbody>
                {vidyasJourney.map((row) => (
                  <tr key={row.stage} className="border-b border-zinc-200 align-top">
                    <td className="py-3 pr-3 font-black text-[#FF462D]">{row.stage}</td>
                    <td className="py-3 pr-3 text-zinc-800">{row.goal}</td>
                    <td className="py-3 pr-3 text-zinc-600">{row.pain}</td>
                    <td className="py-3 pr-3 text-zinc-800">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(
              [
                ["Customer", vidyasIA.customer],
                ["Kitchen", vidyasIA.kitchen],
                ["Driver", vidyasIA.driver],
                ["Bot", vidyasIA.bot],
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
        </div>
      </SectionWindow>

      {/* Challenges */}
      <SectionWindow num="02" title="Six problems worth solving">
        <p className="text-sm text-zinc-600 mb-6 max-w-2xl">
          Each block is one decision I would walk an interviewer through — constraint, wrong turn, fix, proof.
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
                {c.stake}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <p className="text-zinc-800 leading-relaxed">
                    <span className="font-mono text-[10px] font-black uppercase text-zinc-400 block mb-1">What happened</span>
                    {c.happened}
                  </p>
                  <p className="text-zinc-700 leading-relaxed">
                    <span className="font-mono text-[10px] font-black uppercase text-zinc-400 block mb-1">Why it was hard</span>
                    {c.whyHard}
                  </p>
                  <p className="text-zinc-600 leading-relaxed">
                    <span className="font-mono text-[10px] font-black uppercase text-zinc-400 block mb-1">First try · failed</span>
                    {c.triedFirst}
                  </p>
                </div>
                <div className="space-y-3 p-4 bg-white border-2 border-black">
                  <p className="text-zinc-900 leading-relaxed">
                    <span className="font-mono text-[10px] font-black uppercase text-[#00C16A] block mb-1">What worked</span>
                    {c.worked}
                  </p>
                  <p className="text-zinc-800 leading-relaxed">
                    <span className="font-mono text-[10px] font-black uppercase text-black block mb-1">Outcome</span>
                    {c.outcome}
                  </p>
                </div>
              </div>
              {c.interviewLine && (
                <p className="text-xs sm:text-sm font-mono bg-black text-[#FAED00] px-3 py-2 border-2 border-black leading-relaxed">
                  <span className="text-white/70 uppercase text-[10px] block mb-0.5">Say it in the room →</span>
                  {c.interviewLine}
                </p>
              )}
            </article>
          ))}
        </div>
      </SectionWindow>

      {/* Mobbin showcase */}
      <SectionWindow num="03" title="Key screens — product showcase">
        <p className="text-sm text-zinc-600 mb-6 max-w-2xl">
          Nine screens that prove the loop — WhatsApp, PWA, kitchen dashboard, and driver. Placeholders until final screenshots are exported.
        </p>
        <VidyasScreenShowcase screens={vidyasShowcaseScreens} />
      </SectionWindow>

      {/* Tableau */}
      <SectionWindow num="04" title="Ops visibility · Tableau">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-3">
            <p className="text-sm text-zinc-700 leading-relaxed">
              I learned basic Tableau so the kitchen could <strong>see</strong> what the nightly pricing agent <strong>suggests</strong> — breakfast vs dinner revenue, top gravies vs quiet ones — without reading raw orders. Tableau is the view; the agent is the decision support.
            </p>
            <span className="inline-block px-2 py-1 bg-zinc-100 border border-black font-mono text-[10px] font-bold uppercase">
              Basic Tableau · Supabase-fed exports
            </span>
          </div>
          <div className="aspect-video border-2 border-black bg-zinc-100 flex items-center justify-center p-6 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div>
              <p className="font-mono font-black text-sm uppercase text-zinc-500 mb-1">Tableau dashboard</p>
              <p className="text-xs text-zinc-600">Screenshot coming — meals &amp; dish revenue charts</p>
            </div>
          </div>
        </div>
      </SectionWindow>

      {/* Architecture */}
      <SectionWindow num="05" title="Stack & architecture (no private code)">
        <p className="text-sm text-zinc-600 mb-4">
          Client codebase is confidential. Architecture and fee rules are shared; no API keys or live order exports.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {vidyasStack.map((t) => (
            <span key={t} className="px-2.5 py-1 bg-black text-white font-mono text-[10px] font-bold uppercase">
              {t}
            </span>
          ))}
        </div>
        <pre className="p-4 sm:p-6 bg-[#0D1117] text-emerald-400 font-mono text-[10px] sm:text-xs leading-relaxed overflow-x-auto border-2 border-black">
{`Customer PWA ──┐
WhatsApp Bot ──┼── Next.js on Vercel ── Supabase (orders, menu, users)
Driver app ────┤         │
Kitchen board ─┘         ├── Razorpay
                          ├── Firebase phone auth + Twilio OTP
                          ├── Mapbox / Google Places
                          └── OpenAI + Gemini + Whisper

Bot & app → draft → server prices → confirm → one order row
Dashboard & driver read and advance that row. Models never touch payments.`}
        </pre>
      </SectionWindow>

      {/* Outcomes */}
      <SectionWindow num="06" title="What I can stand behind">
        <ul className="space-y-3 mb-6">
          {vidyasHonestOutcomes.map((line) => (
            <li key={line} className="flex gap-2 text-sm text-zinc-800">
              <span className="text-[#00C16A] font-black">✓</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="p-4 border-2 border-dashed border-zinc-400 bg-zinc-50">
          <p className="font-mono font-black text-[10px] uppercase text-zinc-500 mb-2">Do not oversell</p>
          <ul className="space-y-1 text-xs text-zinc-600">
            {vidyasDoNotClaim.map((line) => (
              <li key={line}>· {line}</li>
            ))}
          </ul>
        </div>
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
