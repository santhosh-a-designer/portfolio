"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import HighlightText from "./HighlightText";
import HomeFoodStory from "./HomeFoodStory";
import PwaStorySection from "./PwaStorySection";
import KitchenOpsSection from "./KitchenOpsSection";
import PersonaScenariosSection from "./PersonaScenariosSection";
import Top3BottlenecksSection from "./Top3BottlenecksSection";
import ForEngineersSection from "./ForEngineersSection";
import VidyasSkimReel from "./VidyasSkimReel";
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
      className="font-black uppercase tracking-tighter leading-[0.88] select-none text-[clamp(48px,7.5vw,92px)]"
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

  // Sync Skim Mode with URL query param ?mode=60s and document data-mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const is60s = params.get("mode") === "60s";
      if (is60s) {
        setSkimMode(true);
        document.documentElement.setAttribute("data-mode", "60s");
      } else {
        document.documentElement.setAttribute("data-mode", "full");
      }
    }
  }, []);

  const handleSkimToggle = (mode: boolean) => {
    setSkimMode(mode);
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-mode", mode ? "60s" : "full");
      const url = new URL(window.location.href);
      if (mode) {
        url.searchParams.set("mode", "60s");
      } else {
        url.searchParams.delete("mode");
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <main className="w-full min-w-0 overflow-x-clip pb-28 sm:pb-32 bg-[#FAFAFA] relative">
      {/* ─── Top Control Strip: Back link + Skim Mode Switch ─── */}
      <div className="w-full px-[clamp(20px,4vw,64px)] pt-4 pb-4 flex flex-wrap items-center justify-between gap-4 border-b border-black/15 select-none font-mono bg-[#FAFAFA]">
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
            onClick={() => handleSkimToggle(false)}
            className={`px-3 py-1 font-bold uppercase transition-all cursor-pointer ${
              !skimMode ? "bg-black text-white shadow-sm" : "text-zinc-600 hover:text-black"
            }`}
          >
            Full Story
          </button>
          <button
            type="button"
            onClick={() => handleSkimToggle(true)}
            className={`flex items-center gap-1.5 px-3 py-1 font-bold uppercase transition-all cursor-pointer ${
              skimMode ? "bg-[#BD2320] text-white shadow-sm" : "text-zinc-600 hover:text-black"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>60s Skim Mode</span>
          </button>
        </div>
      </div>

      {/* ─── Skim Mode Active Banner ─── */}
      <AnimatePresence>
        {skimMode && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full bg-[#BD2320] text-white px-[clamp(20px,4vw,64px)] py-2.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between gap-4 select-none sticky top-0 z-30 shadow-md"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>⚡ 60s Skim Reel Active: One-line story beats + key screens</span>
            </div>
            <button
              type="button"
              onClick={() => handleSkimToggle(false)}
              className="px-2.5 py-0.5 bg-white text-black font-black uppercase text-[10px] hover:bg-zinc-100 transition-colors cursor-pointer shrink-0"
            >
              Show Full Story
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── RENDER EITHER DEDICATED 6-BEAT SKIM REEL OR FULL STORY ─── */}
      {skimMode ? (
        <VidyasSkimReel onExpandFullStory={() => handleSkimToggle(false)} />
      ) : (
        <div className="w-full space-y-0">
          {/* ─── HERO: Swiss Editorial Display ─── */}
          <section className="w-full px-[clamp(20px,4vw,64px)] py-10 sm:py-14 md:py-16 bg-white border-b border-black/15 space-y-8 sm:space-y-10">
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

            {/* KPI Strip: 4 Equal Columns, Big Numbers on Hairlines */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-black/15 font-mono">
              {vidyasSnapshot.kpis.map((kpi, idx) => (
                <div key={idx} className="space-y-1 border-l-2 border-black/15 pl-3 sm:pl-4 min-w-0">
                  <span className="text-[clamp(28px,3.8vw,56px)] font-black text-black tracking-tight block leading-none whitespace-nowrap">
                    {kpi.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold uppercase text-zinc-700 block">
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
          <section id="problem" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="01 — THE PROBLEM"
                  title="THE PROBLEM"
                  takeaway="Home food ran on WhatsApp and memory."
                />
              </div>

              <div className="lg:col-span-7 space-y-8 max-w-[70ch]">
                <div className="space-y-4 text-base sm:text-lg text-zinc-800 leading-relaxed font-sans">
                  <p>
                    <HighlightText text={vidyasSnapshot.problem} />
                  </p>
                  <div className="p-4 sm:p-5 bg-zinc-50 border-l-2 border-[#BD2320]">
                    <p className="font-mono text-xs sm:text-sm font-bold text-zinc-900 leading-relaxed">
                      The generic marketplace model chokes in Sivakasi: home kitchens buy fresh ingredients to order and cook in 24-hour batch cycles. Restaurant apps cannot enforce preparation cutoffs or cook-to-order slots.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10">
                  <span className="font-mono text-xs font-black uppercase text-zinc-500 tracking-wider block mb-2">
                    System Resolution
                  </span>
                  <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                    <HighlightText text={vidyasSnapshot.solution} />
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 02 THE USERS ─── */}
          <section id="users" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
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
          <section id="journey" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
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
          <section id="decisions" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
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
          <section id="product" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-12">
            <div>
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
          <section id="results" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
                <SectionHeader
                  eyebrow="06 — THE RESULTS"
                  title="THE RESULTS"
                  takeaway="What changed when home food got a system."
                />

                {vidyasSnapshot.realQuote && (
                  <div className="p-5 bg-zinc-50 border-l-2 border-[#BD2320]">
                    <blockquote className="font-serif italic text-base sm:text-lg text-zinc-900 leading-snug">
                      “{vidyasSnapshot.realQuote.quote}”
                    </blockquote>
                    <cite className="block font-mono text-[10px] uppercase font-bold text-zinc-500 mt-2 not-italic">
                      — {vidyasSnapshot.realQuote.author}
                    </cite>
                  </div>
                )}
              </div>

              <div className="lg:col-span-7">
                <div className="border-t border-b border-black/20 divide-y divide-black/15 font-mono">
                  <div className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter whitespace-nowrap shrink-0">
                      4 Surfaces
                    </div>
                    <div className="md:max-w-md space-y-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#BD2320] block">
                        One Shared Order Record
                      </span>
                      <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                        WhatsApp bot, customer PWA, kitchen board, and driver app all sync to a single Supabase order state machine.
                      </p>
                    </div>
                  </div>

                  <div className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter whitespace-nowrap shrink-0">
                      15 km / 24h
                    </div>
                    <div className="md:max-w-md space-y-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#BD2320] block">
                        Geodesic Radius &amp; Cook Window
                      </span>
                      <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                        Mapbox pin boundary enforced at checkout with 24-hour advance slot scheduling for batch cooking.
                      </p>
                    </div>
                  </div>

                  <div className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter whitespace-nowrap shrink-0">
                      12h Window
                    </div>
                    <div className="md:max-w-md space-y-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#BD2320] block">
                        Fair Cancellation &amp; Automated Refund
                      </span>
                      <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                        Customer cancellation permitted up to 12 hours prior to prep slot; trigger-based Razorpay refund dispatches automatically.
                      </p>
                    </div>
                  </div>

                  <div className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter whitespace-nowrap shrink-0">
                      100% Veto
                    </div>
                    <div className="md:max-w-md space-y-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#BD2320] block">
                        Human-in-the-Loop AI Pricing
                      </span>
                      <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                        Nightly pricing suggestions require explicit 1-click kitchen approval; dishes rated under 3.0 are programmatically blocked from promotion.
                      </p>
                    </div>
                  </div>

                  <div className="py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tighter whitespace-nowrap shrink-0">
                      1-Tap Reorder
                    </div>
                    <div className="md:max-w-md space-y-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#BD2320] block">
                        Quick Reorder Intent Flow
                      </span>
                      <p className="text-xs text-zinc-600 font-sans leading-relaxed">
                        Returning customers reorder saved items in a single sentence or tap, bypassing multi-level restaurant category trees.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 07 WHAT I LEARNED ─── */}
          <section id="learned" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="07 — WHAT I LEARNED"
                  title="WHAT I LEARNED"
                  takeaway="Four lessons from shipping 0→1."
                />
              </div>

              <div className="lg:col-span-7 space-y-8 max-w-[70ch]">
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
          <div className="w-full px-[clamp(20px,4vw,64px)]">
            <ForEngineersSection designSystemPdfMeta={designSystemPdfMeta} />
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="w-full px-[clamp(20px,4vw,64px)] pt-12">
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
      </div>
    </main>
  );
}
