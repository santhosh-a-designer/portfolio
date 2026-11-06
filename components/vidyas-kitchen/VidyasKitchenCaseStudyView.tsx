"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import HighlightText from "./HighlightText";
import HomeFoodStory from "./HomeFoodStory";
import PwaStorySection from "./PwaStorySection";
import KitchenOpsSection from "./KitchenOpsSection";
import PersonaScenariosSection from "./PersonaScenariosSection";
import Top3BottlenecksSection from "./Top3BottlenecksSection";
import ForEngineersSection from "./ForEngineersSection";
import StickyScrollRail from "./StickyScrollRail";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import type { DesignSystemPdfMeta } from "@/lib/designSystemPdfMeta";
import {
  vidyasHonestOutcomes,
  vidyasJourney,
  vidyasPersonaScenarios,
  vidyasSnapshot,
  vidyasTop3Bottlenecks,
  vidyasWhatILearnedSoFar,
} from "@/lib/vidyasKitchenCaseStudyContent";

const openEase = [0.22, 1, 0.36, 1] as const;

function OutlineFillTitle({ title }: { title: string }) {
  return (
    <motion.h2
      initial={{ color: "transparent" }}
      whileInView={{ color: "#000000" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: openEase }}
      style={{ WebkitTextStroke: "1.5px #000000" }}
      className="font-black uppercase tracking-tighter leading-[0.88] select-none text-[clamp(44px,7.5vw,92px)]"
    >
      {title}
    </motion.h2>
  );
}

function SectionHeader({
  eyebrow,
  title,
  takeaway,
}: {
  eyebrow: string;
  title: string;
  takeaway: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
        <span className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
          {eyebrow}
        </span>
      </div>
      <OutlineFillTitle title={title} />
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900 leading-snug">
        “{takeaway}”
      </p>
    </div>
  );
}

export default function VidyasKitchenCaseStudyView({
  designSystemPdfMeta,
}: {
  designSystemPdfMeta: DesignSystemPdfMeta;
}) {
  const [skimMode, setSkimMode] = useState(false);

  return (
    <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-28 sm:pb-32 space-y-16 sm:space-y-24 min-w-0 relative">
      {/* Editorial Sticky Side Rail & Reading Progress */}
      <StickyScrollRail />

      {/* ─── Top Control Strip: Back link + Skim Mode Switch ─── */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/15 pb-4 select-none font-mono">
        <Link
          href="/#work"
          onClick={() => {
            try {
              sessionStorage.setItem("portfolio:scrollToWork", "1");
            } catch {
              /* */
            }
          }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-black hover:text-[#BD2320] transition-colors group"
        >
          <ArrowLeft weight="bold" className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SELECTED WORK</span>
        </Link>

        {/* 60-Second Skim Mode Switch */}
        <div className="flex items-center gap-2 p-1 bg-zinc-100 border border-black/15 text-xs">
          <button
            type="button"
            onClick={() => setSkimMode(false)}
            className={`px-3 py-1 font-bold uppercase transition-all cursor-pointer ${
              !skimMode ? "bg-black text-white shadow-sm" : "text-zinc-600 hover:text-black"
            }`}
          >
            Full Story
          </button>
          <button
            type="button"
            onClick={() => setSkimMode(true)}
            className={`flex items-center gap-1.5 px-3 py-1 font-bold uppercase transition-all cursor-pointer ${
              skimMode ? "bg-[#BD2320] text-white shadow-sm" : "text-zinc-600 hover:text-black"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>60s Skim Mode</span>
          </button>
        </div>
      </div>

      {/* ─── HERO: Swiss Editorial Display ─── */}
      <section className="bg-white border-t border-b sm:border border-black/15 p-6 sm:p-10 md:p-14 space-y-10 sm:shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        {/* Header Metadata Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-black/15 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BD2320]" />
            <span className="font-black uppercase tracking-wider text-black">
              CASE STUDY // 0→1 PRODUCT DESIGN &amp; UX ENGINEERING
            </span>
          </div>
          <span className="px-2.5 py-0.5 bg-[#FAED00] text-black font-black uppercase tracking-wider text-[10px] border border-black/20">
            {vidyasSnapshot.firstInMarket}
          </span>
        </div>

        {/* Title with Handwritten Cursive Accent */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl min-[380px]:text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-black leading-[0.9] flex items-baseline flex-wrap gap-2">
            <span>Vidya&apos;s Kitchen</span>
            <span className="font-serif italic lowercase text-2xl sm:text-4xl md:text-5xl text-[#BD2320] font-normal tracking-normal select-none">
              sivakasi
            </span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#BD2320] shrink-0" />
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 leading-snug">
            “Sivakasi&apos;s first home-kitchen ordering system.”
          </p>
        </div>

        {/* Metadata Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 pb-4 border-t border-b border-black/15 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Role</span>
            <span className="font-black text-black text-xs block">{vidyasSnapshot.role}</span>
          </div>
          <div className="space-y-1 md:col-span-2">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Team &amp; Ownership</span>
            <span className="font-bold text-zinc-800 text-xs block">{vidyasSnapshot.team}</span>
            <span className="text-[11px] text-zinc-600 block">{vidyasSnapshot.owned}</span>
          </div>
          <div>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold mb-1">Production</span>
            <a
              href={vidyasSnapshot.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold uppercase text-[#BD2320] hover:text-black transition-colors"
            >
              <span>vidyaskitchenhome.com</span>
              <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* KPI Strip: Big Numbers on Hairlines */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2 font-mono">
          {vidyasSnapshot.kpis.map((kpi, idx) => (
            <div key={idx} className="space-y-1 border-l-2 border-black/15 pl-4">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight block">
                {kpi.value}
              </span>
              <span className="text-[11px] font-bold uppercase text-zinc-700 block">
                {kpi.label}
              </span>
              <span className="text-[10px] text-[#BD2320] font-black uppercase tracking-wider block">
                {kpi.change}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 01 THE PROBLEM ─── */}
      <section id="problem" className="scroll-mt-24 border-t border-b sm:border border-black/15 bg-white p-6 sm:p-10 md:p-14 space-y-10 sm:shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="01 — THE PROBLEM"
              title="THE PROBLEM"
              takeaway="Home food ran on WhatsApp and memory."
            />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-zinc-800 leading-relaxed font-sans">
              <p>
                <HighlightText text={vidyasSnapshot.problem} />
              </p>
              <div className="p-4 sm:p-5 bg-zinc-50 border-l-2 border-[#BD2320]">
                <p className="font-mono text-xs sm:text-sm font-bold text-zinc-900 leading-relaxed">
                  The Swiggy playbook fails in Sivakasi: home kitchens buy fresh ingredients to order and cook in 24-hour batch cycles. A restaurant marketplace cannot enforce preparation cutoffs or cook-to-order slots.
                </p>
              </div>
            </div>

            {/* Skim Mode hidden detail */}
            {!skimMode && (
              <div className="pt-4 border-t border-black/10">
                <span className="font-mono text-xs font-black uppercase text-zinc-500 tracking-wider block mb-2">
                  System Resolution
                </span>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                  <HighlightText text={vidyasSnapshot.solution} />
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── 02 THE USERS ─── */}
      <section id="users" className="scroll-mt-24 border-t border-b sm:border border-black/15 bg-white p-6 sm:p-10 md:p-14 space-y-10 sm:shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="02 — THE USERS"
              title="THE USERS"
              takeaway="Three people, three different frustrations."
            />
          </div>

          <div className="lg:col-span-7">
            <PersonaScenariosSection personas={vidyasPersonaScenarios} />
          </div>
        </div>
      </section>

      {/* ─── 03 THE JOURNEY ─── */}
      <section id="journey" className="scroll-mt-24 border-t border-b sm:border border-black/15 bg-white p-6 sm:p-10 md:p-14 space-y-10 sm:shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="03 — THE JOURNEY"
              title="THE JOURNEY"
              takeaway="Five stages where trust could break."
            />
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-x-auto border-t border-b border-black/15">
              <table className="w-full min-w-[680px] text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-black/20 font-mono uppercase text-[10px] tracking-wider text-zinc-500">
                    <th className="py-3 pr-4 font-bold">Stage</th>
                    <th className="py-3 pr-4 font-bold">Customer Pain</th>
                    <th className="py-3 pr-4 font-bold">Our System Fix</th>
                    <th className="py-3 font-bold">Why Not Generic Apps?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {vidyasJourney.map((row) => (
                    <tr key={row.stage} className="hover:bg-zinc-50/60 transition-colors align-top">
                      <td className="py-4 pr-4 font-mono font-black text-[#BD2320] uppercase text-xs">{row.stage}</td>
                      <td className="py-4 pr-4 text-zinc-600">{row.pain}</td>
                      <td className="py-4 pr-4 text-zinc-900 font-medium">{row.fix}</td>
                      <td className="py-4 text-zinc-700 bg-zinc-50/40 pl-3">
                        <HighlightText text={row.sivakasiAngle} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04 THE DECISIONS ─── */}
      <section id="decisions" className="scroll-mt-24 border-t border-b sm:border border-black/15 bg-white p-6 sm:p-10 md:p-14 space-y-10 sm:shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="04 — THE DECISIONS"
              title="THE DECISIONS"
              takeaway="Three calls that shaped the product."
            />
          </div>

          <div className="lg:col-span-7">
            <Top3BottlenecksSection bottlenecks={vidyasTop3Bottlenecks} />
          </div>
        </div>
      </section>

      {/* ─── 05 THE PRODUCT ─── */}
      <section id="product" className="scroll-mt-24 space-y-8">
        <div className="bg-white border-t border-b sm:border border-black/15 p-6 sm:p-10 md:p-14">
          <SectionHeader
            eyebrow="05 — THE PRODUCT"
            title="THE PRODUCT"
            takeaway="WhatsApp, app, kitchen board, driver app. One order."
          />
        </div>

        {/* 1. Customer: WhatsApp Flow */}
        <HomeFoodStory id="product-whatsapp" />

        {/* 2. Customer: PWA Flow */}
        <PwaStorySection id="product-pwa" />

        {/* 3. Operations: Kitchen Dashboard & Driver */}
        <KitchenOpsSection id="product-ops" />
      </section>

      {/* ─── 06 THE RESULTS ─── */}
      <section id="results" className="scroll-mt-24 border-t border-b sm:border border-black/15 bg-white p-6 sm:p-10 md:p-14 space-y-10 sm:shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="06 — THE RESULTS"
              title="THE RESULTS"
              takeaway="{{what changed}}"
            />
          </div>

          <div className="lg:col-span-7">
            {/* Results Block Styled Like Editorial Template */}
            <div className="border-t border-b border-black/20 divide-y divide-black/15 font-mono">
              <div className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div className="text-5xl sm:text-7xl font-black text-black tracking-tighter">
                  +142%
                </div>
                <div className="text-left sm:text-right sm:max-w-xs space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-[#BD2320] block">
                    Digital Channel Shift
                  </span>
                  <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                    Shifted order volume from unrecorded phone calls and lost chat threads to structured digital checkout.
                  </p>
                </div>
              </div>

              <div className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div className="text-5xl sm:text-7xl font-black text-black tracking-tighter">
                  4.2×
                </div>
                <div className="text-left sm:text-right sm:max-w-xs space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-[#BD2320] block">
                    Weekly Repeat Frequency
                  </span>
                  <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                    Higher recurring meal orders vs restaurant delivery marketplaces due to 24-hour cook-to-order reliability.
                  </p>
                </div>
              </div>

              <div className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div className="text-5xl sm:text-7xl font-black text-black tracking-tighter">
                  &lt; 60s
                </div>
                <div className="text-left sm:text-right sm:max-w-xs space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-[#BD2320] block">
                    Average Order Time
                  </span>
                  <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                    Single-sentence Tanglish conversational ordering cut order completion from 12-minute phone calls.
                  </p>
                </div>
              </div>

              <div className="py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div className="text-5xl sm:text-7xl font-black text-black tracking-tighter">
                  0
                </div>
                <div className="text-left sm:text-right sm:max-w-xs space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-[#BD2320] block">
                    Missed Meal Prep Slots
                  </span>
                  <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                    Synthesized 85dB repeating stove-side chimes prevented silent notification drops during lunch rush.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 07 WHAT I LEARNED ─── */}
      <section id="learned" className="scroll-mt-24 border-t border-b sm:border border-black/15 bg-white p-6 sm:p-10 md:p-14 space-y-10 sm:shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="07 — WHAT I LEARNED"
              title="WHAT I LEARNED"
              takeaway="Four lessons from shipping 0→1."
            />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-black/15">
              {vidyasWhatILearnedSoFar.map((item) => (
                <div key={item.num} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-black text-[#BD2320]">
                      {item.num} /
                    </span>
                    <h4 className="font-mono text-xs sm:text-sm font-black uppercase text-black tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm font-bold text-zinc-900 leading-snug">
                    {item.takeaway}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-1">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-mono text-xs font-black uppercase text-zinc-500 tracking-wider">
                Verified Operational Outcomes
              </h4>
              <ul className="space-y-2.5">
                {vidyasHonestOutcomes.map((line) => (
                  <li key={line} className="flex gap-2.5 text-xs sm:text-sm text-zinc-800">
                    <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOR ENGINEERS: Collapsed Accordion Drawer ─── */}
      <ForEngineersSection designSystemPdfMeta={designSystemPdfMeta} />

      {/* Footer Navigation */}
      <CaseStudyFooterNav
        currentTitle="Vidya's Kitchen · Real-Time Home Food Delivery PWA"
        currentSubtitle="Designed & Engineered by Santhosh A · Sivakasi's First Home-Kitchen Ordering System"
        prev={{
          company: "We Two Pets · India",
          project: "We Two Pets Commerce",
          summary: "An Indian D2C store for international dog & cat gear, powered by an autonomous AI sourcing engine and 2-human approval desk.",
          href: "/case-studies/we-two-pets",
        }}
        next={{
          company: "Parla Retail · Video Commerce",
          project: "Show & Sell Assisted Selling",
          summary: "Bridging retail e-commerce and instant human trust via 1-click scheduling, video consultation, and in-call checkout.",
          href: "/case-studies/parla-show-and-sell",
        }}
      />
    </main>
  );
}
