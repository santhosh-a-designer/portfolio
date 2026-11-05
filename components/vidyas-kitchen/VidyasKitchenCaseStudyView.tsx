"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import TableauSection from "./TableauSection";
import IADiagram from "./IADiagram";
import UserFlowDiagram from "./UserFlowDiagram";
import HighlightText from "./HighlightText";
import ArchitectureExplorer from "./ArchitectureExplorer";
import StackToolsSkills from "./StackToolsSkills";
import HomeFoodStory from "./HomeFoodStory";
import PwaStorySection from "./PwaStorySection";
import KitchenOpsSection from "./KitchenOpsSection";
import DesignSystemSection from "./DesignSystemSection";
import PersonaScenariosSection from "./PersonaScenariosSection";
import Top3BottlenecksSection from "./Top3BottlenecksSection";
import StickyScrollRail from "./StickyScrollRail";
import ScrollReveal from "./ScrollReveal";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";
import type { DesignSystemPdfMeta } from "@/lib/designSystemPdfMeta";
import {
  vidyasArchitectureTree,
  vidyasChallenges,
  vidyasDoNotClaim,
  vidyasFlowDiagrams,
  vidyasHonestOutcomes,
  vidyasIADiagram,
  vidyasJourney,
  vidyasPersonaScenarios,
  vidyasSkills,
  vidyasSnapshot,
  vidyasTools,
  vidyasTimeline,
  vidyasTop3Bottlenecks,
  vidyasWhatILearnedSoFar,
} from "@/lib/vidyasKitchenCaseStudyContent";

function SectionWindow({
  num,
  title,
  tag,
  id,
  children,
  allowOverflow = false,
}: {
  num: string;
  title: string;
  tag?: string;
  id?: string;
  children: React.ReactNode;
  /** Required for sticky stacked cards — overflow-hidden breaks position:sticky */
  allowOverflow?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 sm:scroll-mt-24 bg-white border-t border-b sm:border border-black/15 sm:border-black/20 sm:shadow-[0_2px_12px_rgba(0,0,0,0.03)] ${
        allowOverflow ? "overflow-visible" : "overflow-hidden"
      }`}
    >
      <div className="h-11 px-4 sm:px-8 bg-zinc-50/90 border-b border-black/15 flex items-center justify-between gap-3 font-mono text-xs select-none">
        <div className="flex items-center gap-2.5 truncate">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="font-black text-black tracking-widest text-[11px] uppercase">
            {num} / {title}
          </span>
        </div>
        {tag && (
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest hidden sm:inline">
            {tag}
          </span>
        )}
      </div>
      <div className="p-5 sm:p-8 md:p-12">{children}</div>
    </section>
  );
}

const openEase = [0.22, 1, 0.36, 1] as const;

const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: openEase } },
};

export default function VidyasKitchenCaseStudyView({
  designSystemPdfMeta,
}: {
  designSystemPdfMeta: DesignSystemPdfMeta;
}) {
  return (
    <main className="max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-28 sm:pb-32 space-y-8 sm:space-y-12 min-w-0 relative">
      {/* Editorial Sticky Side Rail & Reading Progress */}
      <StickyScrollRail />

      <motion.div
        variants={heroItem}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center justify-between gap-3 border-b border-black/15 pb-4 select-none font-mono"
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
          <span className="hidden min-[380px]:inline">PROD · SIVAKASI</span>
        </div>
      </motion.div>

      {/* Hero — Clean Editorial Newspaper Style */}
      <motion.section
        variants={heroStagger}
        initial="hidden"
        animate="show"
        className="bg-white border-t border-b sm:border border-black/15 sm:border-black/20 sm:shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden"
      >
        <div className="p-6 sm:p-10 md:p-14 space-y-8">
          {/* Header Metadata Pill */}
          <motion.div variants={heroItem} className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-black/15 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#BD2320]" />
              <span className="font-black uppercase tracking-wider text-black">
                CASE STUDY // 0→1 PRODUCT DESIGN &amp; SYSTEMS ARCHITECTURE
              </span>
            </div>
            <span className="px-2.5 py-0.5 bg-[#FAED00] text-black font-black uppercase tracking-wider text-[10px] border border-black/20">
              {vidyasSnapshot.firstInMarket}
            </span>
          </motion.div>

          {/* Main Title & Elevator */}
          <div className="space-y-4 max-w-4xl">
            <motion.h1 variants={heroItem} className="text-3xl min-[380px]:text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none flex items-center flex-wrap gap-3">
              <span>Vidya&apos;s Kitchen</span>
              <span className="w-3.5 h-3.5 rounded-full bg-[#BD2320] shrink-0" />
            </motion.h1>
            <motion.p variants={heroItem} className="text-base sm:text-xl font-medium text-zinc-700 leading-snug">
              {vidyasSnapshot.elevator}
            </motion.p>
          </div>

          {/* Editorial 2-Column: Problem & Solution Spread */}
          <motion.div variants={heroItem} className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 pb-4 border-t border-b border-black/15">
            <div className="space-y-2 md:pr-8 md:border-r border-zinc-200">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-black uppercase tracking-wider text-[#BD2320]">
                  01 / The Local Market Problem
                </span>
              </div>
              <p className="text-sm sm:text-base text-zinc-800 leading-relaxed">
                <HighlightText text={vidyasSnapshot.problem} />
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-black uppercase tracking-wider text-emerald-700">
                  02 / The Multi-Surface Solution
                </span>
              </div>
              <p className="text-sm sm:text-base text-zinc-800 leading-relaxed">
                <HighlightText text={vidyasSnapshot.solution} />
              </p>
            </div>
          </motion.div>

          {/* Narrative Index */}
          <motion.p variants={heroItem} className="text-xs sm:text-sm text-zinc-500 font-mono">
            This study follows: <strong className="text-black">why Sivakasi is different</strong>
            {" → "}
            <strong className="text-black">how customers order</strong>
            {" → "}
            <strong className="text-black">how the kitchen runs</strong>
            {" → "}
            <strong className="text-black">the 3 critical engineering bottlenecks</strong>.
          </motion.p>

          {/* Clean Editorial Metadata Strip */}
          <motion.div variants={heroItem} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-black/15 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Role</span>
              <span className="font-black text-black text-xs block">{vidyasSnapshot.role}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Timeline</span>
              <span className="font-bold text-zinc-800 text-xs block">{vidyasTimeline.label}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Market</span>
              <span className="font-bold text-zinc-800 text-xs block">{vidyasSnapshot.market}</span>
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold mb-1">Production</span>
              <a
                href={vidyasSnapshot.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold uppercase text-[#BD2320] hover:text-black transition-colors"
              >
                <span>Live Site</span>
                <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 01 — Why this market needs its own product */}
      <ScrollReveal>
        <SectionWindow id="reality" num="01" title="The Sivakasi Reality" tag="Tier-3 Friction">
          <p className="text-sm text-zinc-600 max-w-3xl mb-6">
            Before writing a single screen: each stage of the home food journey—and why a dark-store Swiggy playbook fails in Sivakasi.
          </p>
          <div className="overflow-x-auto border-t border-b border-black/15">
            <table className="w-full min-w-[760px] text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-black/20 font-mono uppercase text-[10px] tracking-wider text-zinc-500">
                  <th className="py-3 pr-4 font-bold">Stage</th>
                  <th className="py-3 pr-4 font-bold">Goal</th>
                  <th className="py-3 pr-4 font-bold">Customer Pain</th>
                  <th className="py-3 pr-4 font-bold">Our System Fix</th>
                  <th className="py-3 font-bold">Why Not Swiggy?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {vidyasJourney.map((row) => (
                  <tr key={row.stage} className="hover:bg-zinc-50/60 transition-colors align-top">
                    <td className="py-4 pr-4 font-mono font-black text-[#BD2320] uppercase text-xs">{row.stage}</td>
                    <td className="py-4 pr-4 text-zinc-900 font-medium">{row.goal}</td>
                    <td className="py-4 pr-4 text-zinc-600">{row.pain}</td>
                    <td className="py-4 pr-4 text-zinc-900 font-medium">{row.fix}</td>
                    <td className="py-4 text-zinc-700 bg-zinc-50/50 pl-3">
                      <HighlightText text={row.sivakasiAngle} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionWindow>
      </ScrollReveal>

      {/* 02 — Sivakasi field research & ground personas */}
      <ScrollReveal>
        <SectionWindow id="personas" num="02" title="3 Field Personas" tag="Field Scenarios">
          <p className="text-sm text-zinc-600 max-w-3xl mb-6">
            Ground-level friction uncovered during on-site user interviews in Sivakasi—and the explicit <strong>UX decisions</strong> and <strong>technical architecture</strong> engineered to eliminate each failure mode:
          </p>
          <PersonaScenariosSection personas={vidyasPersonaScenarios} />
        </SectionWindow>
      </ScrollReveal>

      {/* 03 — Top 3 interview bottlenecks & STAR solutions */}
      <ScrollReveal>
        <SectionWindow id="bottlenecks" num="03" title="Top 3 Bottlenecks" tag="STAR Solutions">
          <Top3BottlenecksSection bottlenecks={vidyasTop3Bottlenecks} />
        </SectionWindow>
      </ScrollReveal>

      {/* Product Flow Screens — Customer: WhatsApp */}
      <ScrollReveal>
        <HomeFoodStory id="whatsapp" />
      </ScrollReveal>

      {/* Product Flow Screens — Customer: PWA */}
      <ScrollReveal>
        <PwaStorySection id="pwa" />
      </ScrollReveal>

      {/* Product Flow Screens — Operations: Kitchen & driver */}
      <ScrollReveal>
        <KitchenOpsSection id="kitchen" />
      </ScrollReveal>

      {/* 04 — How all four surfaces connect */}
      <ScrollReveal>
        <SectionWindow id="ia" num="04" title="Information Architecture &amp; User Flows">
          <p className="text-sm text-zinc-600 max-w-3xl mx-auto mb-8 text-center">
            Four surfaces — PWA, WhatsApp, kitchen dashboard, driver app — branch from one Supabase order record. Scroll to watch each diagram build in.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="font-mono font-black text-xs uppercase mb-3 text-center tracking-wider">
                Information architecture
              </h3>
              <IADiagram
                root={vidyasIADiagram.root}
                subtitle={vidyasIADiagram.subtitle}
                columns={vidyasIADiagram.columns}
              />
            </div>
            <div>
              <h3 className="font-mono font-black text-xs uppercase mb-3 text-center tracking-wider">
                User flows
              </h3>
              <UserFlowDiagram flows={vidyasFlowDiagrams} />
            </div>
          </div>
        </SectionWindow>
      </ScrollReveal>

      {/* 05 — Design system */}
      <ScrollReveal>
        <SectionWindow id="design-system" num="05" title="Design System &amp; Tokens">
          <DesignSystemSection pdfMeta={designSystemPdfMeta} />
        </SectionWindow>
      </ScrollReveal>

      {/* 06 — Ops visibility · Tableau */}
      <ScrollReveal>
        <TableauSection num="06" />
      </ScrollReveal>

      {/* 07 — Stack & architecture */}
      <ScrollReveal>
        <SectionWindow id="architecture" num="07" title="Systems Architecture &amp; Codebase">
          <p className="text-sm text-zinc-700 mb-4 max-w-3xl leading-relaxed">
            Production architecture from the official open-source repository (<a href="https://github.com/commerceagents/vidyas-kitchen" target="_blank" rel="noopener noreferrer" className="font-mono font-bold text-black underline hover:text-[#BD2320]">github.com/commerceagents/vidyas-kitchen</a>). Explore the live code files below: finite state machine transitions, OpenAI cart intent parsers, Meta WhatsApp Cloud API webhooks, and driver phone-lookup authentication.
          </p>
          <StackToolsSkills skills={vidyasSkills} tools={vidyasTools} />
          <ArchitectureExplorer tree={vidyasArchitectureTree} />
        </SectionWindow>
      </ScrollReveal>

      {/* 08 — What I have learned so far */}
      <ScrollReveal>
        <SectionWindow id="retrospective" num="08" title="What I Have Learned So Far" tag="Senior Retrospective">
          <p className="text-sm text-zinc-600 max-w-3xl mb-8 leading-relaxed">
            Key product design, UX ergonomics, and systems architecture takeaways from shipping Vidya&apos;s Kitchen 0→1 in Sivakasi:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-black/15">
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
                  <span className="text-[#00C16A] font-black">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            {vidyasDoNotClaim.length > 0 && (
              <div className="p-4 border-l-2 border-zinc-400 bg-zinc-50 mt-6">
                <p className="font-mono font-black text-[10px] uppercase text-zinc-500 mb-2">Do not oversell</p>
                <ul className="space-y-1 text-xs text-zinc-600">
                  {vidyasDoNotClaim.map((line) => (
                    <li key={line}>· {line}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </SectionWindow>
      </ScrollReveal>

      <CaseStudyFooterNav
        currentTitle="Vidya's Kitchen · Real-Time Home Food Delivery PWA"
        currentSubtitle="Designed & Engineered by Santhosh A · Sivakasi's First Cloud Kitchen Ordering System"
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
