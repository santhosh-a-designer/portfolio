"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  CaretDown,
  Check,
  Quotes,
  Sparkle,
  Lightning,
  Users,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import TableauSection from "./TableauSection";
import ArchitectureExplorer from "./ArchitectureExplorer";
import StackToolsSkills from "./StackToolsSkills";
import DesignSystemSection from "./DesignSystemSection";
import TryTheParser from "./TryTheParser";
import FailedTriesLedger from "./FailedTriesLedger";
import StarChallengeStack from "./StarChallengeStack";
import HighlightText from "./HighlightText";
import ScrollReveal from "./ScrollReveal";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import type { DesignSystemPdfMeta } from "@/lib/designSystemPdfMeta";
import {
  vidyasSnapshot,
  vidyasTimeline,
  vidyasKpis,
  vidyasResearchSnapshot,
  vidyasPersonas,
  vidyasInsightMap,
  vidyasJourneyCards,
  vidyas60SecStory,
  vidyasProductTour,
  vidyasTop4Challenges,
  vidyasChallenges,
  vidyasUsabilityTesting,
  vidyasPostLaunchFeedback,
  vidyasReflection,
  vidyasSkills,
  vidyasTools,
  vidyasArchitectureTree,
} from "@/lib/vidyasKitchenCaseStudyContent";

function SectionCard({
  num,
  title,
  subtitle,
  children,
}: {
  num: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between gap-2 font-mono text-xs select-none">
        <div className="flex items-center gap-2 truncate">
          <span className="px-2 py-0.5 bg-[#BD2320] text-white font-bold text-[10px]">
            {num}
          </span>
          <span className="font-bold text-black uppercase tracking-wider truncate">
            {title}
          </span>
        </div>
        {subtitle && (
          <span className="hidden sm:inline text-[10px] text-zinc-500 uppercase tracking-wider font-bold">
            {subtitle}
          </span>
        )}
      </div>
      <div className="p-4 sm:p-8 md:p-10">{children}</div>
    </section>
  );
}

const openEase = [0.22, 1, 0.36, 1] as const;

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: openEase } },
};

export default function VidyasKitchenCaseStudyView({
  designSystemPdfMeta,
}: {
  designSystemPdfMeta: DesignSystemPdfMeta;
}) {
  // 60-Second Version Toggle
  const [isFullStory, setIsFullStory] = useState(false);
  // Collapsed Engineering Accordion
  const [engineersExpanded, setEngineersExpanded] = useState(false);

  // Secondary challenge for accordion (CHAL_05)
  const secondaryChallenge = vidyasChallenges.find((c) => c.id === "05");

  return (
    <main className="max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-28 sm:pb-32 space-y-8 sm:space-y-12 min-w-0">
      {/* Top Bar Navigation */}
      <motion.div
        variants={heroItem}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-4 select-none font-mono"
      >
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
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-zinc-500 font-bold uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>PRODUCTION · SIVAKASI</span>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 01. HERO */}
      {/* ========================================================================= */}
      <motion.section
        variants={heroStagger}
        initial="hidden"
        animate="show"
        className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
      >
        <div className="p-5 sm:p-10 md:p-12 space-y-6 text-center">
          {/* Badges */}
          <motion.div variants={heroItem} className="flex flex-wrap gap-2 justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#BD2320] text-white border-2 border-black font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider">
              CASE STUDY · PRODUCT DESIGN &amp; UX ENGINEERING
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAED00] text-black border-2 border-black font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider">
              {vidyasSnapshot.firstInMarket}
            </span>
          </motion.div>

          {/* Outcome Headline */}
          <motion.div variants={heroItem} className="space-y-2">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black max-w-4xl mx-auto leading-tight">
              {vidyasSnapshot.outcomeHeadline}
            </h1>
            <p className="text-sm sm:text-lg text-zinc-600 max-w-2xl mx-auto font-medium">
              Connecting customers, kitchen supervisor, and bike dispatch on a single real-time state machine.
            </p>
          </motion.div>

          {/* Role, Team of 5 & Ownership Strip */}
          <motion.div
            variants={heroItem}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto w-full font-mono text-xs text-left"
          >
            <div className="p-3 bg-zinc-50 border-2 border-black">
              <span className="text-[10px] text-zinc-500 uppercase block mb-1 font-bold">Role</span>
              <span className="font-black text-black block">{vidyasSnapshot.role}</span>
            </div>
            <div className="p-3 bg-zinc-50 border-2 border-black">
              <span className="text-[10px] text-zinc-500 uppercase block mb-1 font-bold">Team of 5</span>
              <span className="font-bold text-zinc-800 block text-[11px] leading-snug">
                Solo designer &amp; builder + 3 interns + founder
              </span>
            </div>
            <div className="p-3 bg-zinc-50 border-2 border-black">
              <span className="text-[10px] text-zinc-500 uppercase block mb-1 font-bold">Timeline</span>
              <span className="font-bold text-zinc-800 block text-[11px] leading-snug">
                {vidyasTimeline.label}
              </span>
            </div>
            <a
              href={vidyasSnapshot.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black text-white hover:bg-zinc-800 border-2 border-black flex items-center justify-between transition-colors group"
            >
              <div>
                <span className="text-[10px] text-zinc-400 uppercase block font-bold">Live PWA</span>
                <span className="font-black uppercase text-[11px]">Visit site</span>
              </div>
              <ArrowUpRight weight="bold" className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* Ownership One-Liner */}
          <motion.p variants={heroItem} className="text-xs sm:text-sm text-zinc-600 max-w-3xl mx-auto italic">
            <strong>What I owned:</strong> End-to-end product design, conversational WhatsApp engine, daylight driver PWA, and kitchen management board.
          </motion.p>
        </div>
      </motion.section>

      {/* ========================================================================= */}
      {/* 02. KPI STRIP (Max 4 Tiles) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {vidyasKpis.map((kpi, idx) => (
            <div
              key={kpi.label}
              className="p-4 sm:p-5 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center flex flex-col justify-between"
            >
              <span className="font-mono text-[10px] sm:text-[11px] uppercase font-bold text-zinc-500 mb-1">
                {kpi.label}
              </span>
              <div className="text-2xl sm:text-3xl font-black font-mono text-[#BD2320] my-1">
                {kpi.value}
              </div>
              <span className="text-[11px] text-zinc-600 font-medium">
                {kpi.sub}
              </span>
            </div>
          ))}
        </section>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 03. PROBLEM */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <SectionCard num="01" title="The Problem" subtitle="Tier-3 Friction">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">
              In Sivakasi, home food moved entirely through <strong>unlogged WhatsApp messages</strong> and manual memory, losing 25% of peak-hour requests. Commercial apps like Swiggy assume instant restaurant kitchens, breaking down completely for a home chef cooking to order 24 hours in advance.
            </p>

            {/* Real Pull Quote */}
            <div className="p-5 sm:p-6 bg-[#FAF9F5] border-l-4 border-[#BD2320] border-y-2 border-r-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Quotes weight="fill" className="w-6 h-6 text-[#BD2320] mb-2" />
              <blockquote className="text-base sm:text-xl font-bold font-mono text-zinc-900 leading-snug">
                “{vidyasSnapshot.problemQuote}”
              </blockquote>
              <span className="block mt-2 font-mono text-xs uppercase text-zinc-500 font-bold">
                — Vidya R., Kitchen Founder (Field Interview)
              </span>
            </div>
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 04. RESEARCH SNAPSHOT (4 Small Stat Tiles) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <SectionCard num="02" title="Research Snapshot" subtitle="Field Groundwork">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {vidyasResearchSnapshot.tiles.map((tile) => (
              <div
                key={tile.label}
                className="p-4 bg-zinc-50 border-2 border-black flex flex-col justify-between text-left"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-zinc-500 block mb-1">
                    {tile.label}
                  </span>
                  <span className="font-mono text-lg sm:text-xl font-black text-black block mb-2">
                    {tile.stat}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 leading-normal">{tile.desc}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 05. PERSONAS (3 Cards, Side by Side) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <SectionCard num="03" title="Personas & Mental Models" subtitle="3 Operational Surfaces">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vidyasPersonas.map((persona) => (
              <div
                key={persona.name}
                className="p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-4"
              >
                <div>
                  {/* Initials Avatar & Header */}
                  <div className="flex items-center gap-3 pb-3 border-b-2 border-black">
                    <div className="w-10 h-10 rounded-none bg-black text-white font-mono font-black text-sm flex items-center justify-center border border-black shrink-0">
                      {persona.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-black">{persona.name}</h4>
                      <p className="text-[11px] text-zinc-500 leading-tight">{persona.role}</p>
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="my-2.5">
                    <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 bg-zinc-100 border border-zinc-300 text-zinc-600">
                      {persona.basis}
                    </span>
                  </div>

                  {/* Goal & Frustration */}
                  <div className="space-y-2 text-xs text-zinc-700 mt-3">
                    <p>
                      <strong className="text-black font-mono text-[10px] uppercase block">Goal:</strong>
                      {persona.goal}
                    </p>
                    <p>
                      <strong className="text-[#BD2320] font-mono text-[10px] uppercase block">Frustration:</strong>
                      {persona.frustration}
                    </p>
                  </div>
                </div>

                {/* Pull Quote */}
                <div className="p-3 bg-zinc-50 border border-zinc-300 font-mono text-[11px] text-zinc-800 italic">
                  “{persona.quote}”
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 06. INSIGHT -> DECISION MAP (Table of 4 rows, <12 words/cell) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <SectionCard num="04" title="Insight ➔ Decision Map" subtitle="Research to Architecture">
          <p className="text-xs sm:text-sm text-zinc-600 mb-4 max-w-2xl">
            Synthesized field evidence mapped directly to shipped engineering choices:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-xs sm:text-sm border-collapse border-2 border-black">
              <thead>
                <tr className="bg-[#E2E8F0] border-b-2 border-black font-mono text-[10px] uppercase tracking-wider">
                  <th className="p-3 border-r-2 border-black w-1/3">We Heard (Research)</th>
                  <th className="p-3 border-r-2 border-black w-1/3">So We Built (Action)</th>
                  <th className="p-3 w-1/3">Result (Outcome)</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black">
                {vidyasInsightMap.map((row, idx) => (
                  <tr key={idx} className="bg-white hover:bg-zinc-50 transition-colors">
                    <td className="p-3 border-r-2 border-black text-zinc-800 leading-snug">
                      {row.heard}
                    </td>
                    <td className="p-3 border-r-2 border-black font-medium text-black leading-snug">
                      {row.built}
                    </td>
                    <td className="p-3 font-mono font-bold text-[#BD2320] leading-snug">
                      {row.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 07. JOURNEY (5 One-Liner Cards: Discover · Order · Pay · Fulfill · Return) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <SectionCard num="05" title="User Journey Re-Architecture" subtitle="Pain to Fix">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {vidyasJourneyCards.map((j) => (
              <div
                key={j.stage}
                className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs font-black uppercase text-[#BD2320] pb-1 border-b-2 border-black block">
                    {j.stage}
                  </span>
                  <div className="text-xs space-y-1.5 pt-1">
                    <p className="text-zinc-500">
                      <strong className="text-zinc-700 font-mono text-[10px] uppercase block">Pain:</strong>
                      {j.pain}
                    </p>
                    <p className="text-zinc-900 font-medium">
                      <strong className="text-emerald-700 font-mono text-[10px] uppercase block">Fix:</strong>
                      {j.fix}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 08. 60-SECOND VERSION TOGGLE */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-black">
            <div className="flex items-center gap-2">
              <span className="p-1 bg-black text-white">
                <Lightning weight="fill" className="w-4 h-4" />
              </span>
              <h3 className="font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-black">
                60-Second Executive Summary
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsFullStory(!isFullStory)}
              className="font-mono text-xs px-3 py-1 bg-white border-2 border-black hover:bg-black hover:text-white transition-colors font-bold uppercase"
            >
              {isFullStory ? "Hide Full Story" : "Read Full Story"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4 text-xs sm:text-sm">
            {vidyas60SecStory.map((item, idx) => (
              <div key={item.pillar} className="p-3.5 bg-white border border-black">
                <span className="font-mono text-[10px] font-black uppercase text-[#BD2320] block mb-1">
                  0{idx + 1} · {item.pillar}
                </span>
                <p className="text-zinc-800 leading-snug">{item.decision}</p>
              </div>
            ))}
          </div>

          {isFullStory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pt-4 border-t-2 border-dashed border-zinc-400 text-xs sm:text-sm text-zinc-700 space-y-2 leading-relaxed"
            >
              <p>
                <strong>Full context:</strong> Sivakasi is an industrial printing and manufacturing town where residents prefer conversational messaging over app stores. Rather than attempting to change customer habits, we anchored the entire purchase lifecycle in WhatsApp with an AI parser, but safeguarded operations by routing every order into an immutable Supabase state machine.
              </p>
              <p>
                Kitchen dispatch runs on an audibly alerted Kanban board that schedules grocery orders 24 hours in advance. Motorcycle drivers receive high-contrast navigation cards with PIN-based authentication, achieving sub-second operational handoffs without mobile data latency.
              </p>
            </motion.div>
          )}
        </div>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 09. PRODUCT TOUR (WhatsApp · PWA · Dashboard · Driver App) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <SectionCard num="06" title="Product Tour" subtitle="4 Synchronized Surfaces">
          <p className="text-xs sm:text-sm text-zinc-600 mb-6 max-w-2xl">
            Each screen fulfills a specialized environmental role while sharing a single order state:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {vidyasProductTour.map((tour) => (
              <div
                key={tour.surface}
                className="bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[9/16] max-h-[300px] w-full bg-zinc-100 border-b-2 border-black overflow-hidden">
                    <Image
                      src={tour.src}
                      alt={tour.alt}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <span className="font-mono text-[10px] font-black uppercase text-[#BD2320] block mb-1">
                      {tour.surface}
                    </span>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {tour.line}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Unconventional Touch #1: Try The Parser */}
          <TryTheParser />
        </SectionCard>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 10. TOP 4 CHALLENGES (STAR Format) & FAILED FIRST TRIES LEDGER */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <SectionCard num="07" title="Top Challenges & Decisions" subtitle="STAR Post-Mortem">
          <p className="text-xs sm:text-sm text-zinc-600 mb-6 max-w-2xl">
            Rigorous engineering decisions framed with measurable targets and real chat evidence:
          </p>

          <StarChallengeStack
            challenges={vidyasTop4Challenges}
            collapsedChallenge={secondaryChallenge}
          />

          {/* Interactive Unconventional Touch #2: Failed First Tries Ledger */}
          <FailedTriesLedger />
        </SectionCard>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 11. USABILITY TESTING / VALIDATION */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <SectionCard num="08" title="Usability Testing & Iteration" subtitle="Tier-3 Validation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 bg-zinc-50 border-2 border-black space-y-3">
              <span className="font-mono text-[10px] font-black uppercase text-[#BD2320] block">
                Testing Parameters
              </span>
              <dl className="space-y-2 text-zinc-800">
                <div>
                  <dt className="text-zinc-500 font-mono text-[10px] uppercase">Cohort:</dt>
                  <dd className="font-bold">{vidyasUsabilityTesting.usersTested}</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 font-mono text-[10px] uppercase">Assigned Task:</dt>
                  <dd className="font-medium">{vidyasUsabilityTesting.taskGiven}</dd>
                </div>
              </dl>
            </div>

            <div className="p-4 bg-white border-2 border-black space-y-3">
              <span className="font-mono text-[10px] font-black uppercase text-black block">
                Friction &amp; Design Pivot
              </span>
              <p className="text-zinc-700">
                <strong className="text-red-600 font-mono text-[10px] uppercase block">What Broke:</strong>
                {vidyasUsabilityTesting.whatBroke}
              </p>
              <p className="text-zinc-900 font-medium pt-1 border-t border-zinc-200">
                <strong className="text-emerald-700 font-mono text-[10px] uppercase block">What Changed:</strong>
                {vidyasUsabilityTesting.whatChanged}
              </p>
            </div>
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 12. POST-LAUNCH FEEDBACK */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <SectionCard num="09" title="Post-Launch Feedback & Evolution" subtitle="3 Stakeholder Views">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vidyasPostLaunchFeedback.map((fb, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-3"
              >
                <div>
                  <Quotes weight="bold" className="w-5 h-5 text-[#BD2320] mb-2" />
                  <blockquote className="text-xs sm:text-sm font-mono font-bold text-zinc-900 leading-snug">
                    “{fb.quote}”
                  </blockquote>
                  <span className="block mt-2 text-[10px] font-mono text-zinc-500 uppercase font-bold">
                    — {fb.author}
                  </span>
                </div>
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-mono">
                  {fb.changed}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 13. DESIGN SYSTEM (Compact Overview Card) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <SectionCard num="10" title="Design System & Token Architecture" subtitle="Outfit Spec">
          <DesignSystemSection pdfMeta={designSystemPdfMeta} />
        </SectionCard>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 14. FOR ENGINEERS (Collapsed Accordion) */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <button
            type="button"
            onClick={() => setEngineersExpanded(!engineersExpanded)}
            className="w-full text-left p-4 sm:p-5 bg-[#E2E8F0] hover:bg-zinc-200 transition-colors flex items-center justify-between gap-3 font-mono text-xs select-none"
          >
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-black text-white font-bold text-[10px]">
                11
              </span>
              <span className="font-bold text-black uppercase tracking-wider text-xs sm:text-sm">
                For Engineers &amp; System Architects {engineersExpanded ? "(Collapse)" : "(Expand Stack, Tableau & Repo)"}
              </span>
            </div>
            <CaretDown
              weight="bold"
              className={`w-5 h-5 text-black transition-transform duration-200 ${
                engineersExpanded ? "rotate-180 text-[#BD2320]" : ""
              }`}
            />
          </button>

          {engineersExpanded && (
            <div className="p-4 sm:p-8 space-y-8 border-t-2 border-black">
              {/* Stack & Tools */}
              <div>
                <h4 className="font-mono text-xs font-black uppercase text-zinc-500 mb-3 tracking-wider">
                  01 · Core Skills &amp; Platforms
                </h4>
                <StackToolsSkills skills={vidyasSkills} tools={vidyasTools} />
              </div>

              {/* Tableau Data Visualizations */}
              <div className="pt-6 border-t-2 border-black">
                <TableauSection num="11.B" />
              </div>

              {/* Interactive Architecture Explorer */}
              <div className="pt-6 border-t-2 border-black">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h4 className="font-mono text-xs font-black uppercase text-zinc-500 tracking-wider">
                    02 · Live Codebase Explorer (Open Source)
                  </h4>
                  <a
                    href="https://github.com/commerceagents/vidyas-kitchen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#BD2320] underline font-bold hover:text-black flex items-center gap-1"
                  >
                    <span>github.com/commerceagents/vidyas-kitchen</span>
                    <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                  </a>
                </div>
                <ArchitectureExplorer tree={vidyasArchitectureTree} />
              </div>
            </div>
          )}
        </section>
      </ScrollReveal>

      {/* ========================================================================= */}
      {/* 15. REFLECTION & FOOTER NAVIGATION */}
      {/* ========================================================================= */}
      <ScrollReveal>
        <SectionCard num="12" title="Retrospective & Reflections" subtitle="Senior Lessons">
          <div className="max-w-3xl space-y-4 text-xs sm:text-sm">
            <div className="p-4 bg-zinc-50 border-2 border-black space-y-2">
              <span className="font-mono text-[10px] font-black uppercase text-[#BD2320] block">
                What I&apos;d Do Differently
              </span>
              <ul className="space-y-1.5 text-zinc-800 list-disc list-inside">
                {vidyasReflection.whatIdDoDifferently.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#FAF9F5] border-2 border-black space-y-1">
              <span className="font-mono text-[10px] font-black uppercase text-black block">
                What I Learned
              </span>
              <p className="text-zinc-800 font-medium leading-relaxed">
                {vidyasReflection.whatILearned}
              </p>
            </div>
          </div>
        </SectionCard>
      </ScrollReveal>

      {/* Footer Navigation */}
      <CaseStudyFooterNav
        currentTitle="Vidya's Kitchen · Real-Time Home Food Delivery PWA"
        currentSubtitle="Designed & Engineered by Santhosh A · Sivakasi's First Cloud Kitchen Ordering System"
        prev={{
          company: "We Two Pets · India",
          project: "We Two Pets Commerce",
          summary: "An Indian D2C store for international pet gear, powered by an autonomous AI sourcing engine and 2-human approval desk.",
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
