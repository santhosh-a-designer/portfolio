"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Cpu,
  ShieldCheck,
  CurrencyInr,
  UsersThree,
  ChatCircleDots,
  CheckCircle,
  Terminal,
  ArrowRight,
} from "@phosphor-icons/react";

export type AgentInfo = {
  id: string;
  step: string;
  index: number;
  name: string;
  category: string;
  role: string;
  icon: typeof Globe;
  tagline: string;
  whatWeBuilt: string;
  howItWorks: Array<{
    num: string;
    title: string;
    detail: string;
  }>;
  stack: string;
  safeguard: string;
};

export const WE_TWO_AGENTS: AgentInfo[] = [
  {
    id: "agent-sourcing-spider",
    step: "01",
    index: 0,
    name: "Sourcing Spider",
    category: "AUTONOMOUS DISCOVERY",
    role: "Nightly Multi-Region Crawler",
    icon: Globe,
    tagline: "Crawls curated global pet boutiques across 4 continents nightly.",
    whatWeBuilt:
      "Asynchronous crawlers that scout boutique pet manufacturers across the US, UK, and Japan nightly, normalizing foreign multi-currency catalogs into an isolated staging database.",
    howItWorks: [
      {
        num: "1",
        title: "Nightly Cron Trigger",
        detail: "FastAPI headless worker launches across boutique supplier domains at 02:00 AM IST.",
      },
      {
        num: "2",
        title: "DOM & Currency Extraction",
        detail: "Extracts imagery, materials, dimensions, and converts foreign prices (USD, EUR, JPY) to base FX.",
      },
      {
        num: "3",
        title: "Quarantine Staging Commit",
        detail: "Writes raw records to private staging tables with zero access to public storefront.",
      },
    ],
    stack: "FastAPI · Playwright · Supabase Staging Queue",
    safeguard: "Zero Auto-Publish: Staging queue isolation prevents unvetted crawl data from going live.",
  },
  {
    id: "agent-gemini-critic",
    step: "02",
    index: 1,
    name: "Gemini Vision Critic",
    category: "MULTIMODAL INGESTION",
    role: "Computer Vision & Quality Scorer",
    icon: Cpu,
    tagline: "Analyzes build materials, ergonomic design, and safety from photography.",
    whatWeBuilt:
      "A cascading multi-model LLM engine (Gemini 2.5 Flash → 2.0 → 1.5) that inspects product photography for fabric durability and audits reviews for safety risks.",
    howItWorks: [
      {
        num: "1",
        title: "Multimodal Photography Scan",
        detail: "Sends multi-angle photos to Gemini Vision to detect fabric density, alloys, and stitching quality.",
      },
      {
        num: "2",
        title: "Customer Review Audit",
        detail: "Audits foreign customer reviews, penalizing products with recurring seam tears or chemical odors.",
      },
      {
        num: "3",
        title: "Strict Pydantic Contract",
        detail: "Outputs typed JSON containing 0–100 quality score, pet size brackets, and seasonal tags.",
      },
    ],
    stack: "Gemini 2.5/2.0 Flash · Pydantic · Python",
    safeguard: "Schema Strictness: Any LLM response failing the JSON schema is dropped immediately.",
  },
  {
    id: "agent-marketplace-veto",
    step: "03",
    index: 2,
    name: "Marketplace Veto",
    category: "ANTI-DUPLICATE GUARD",
    role: "India Market Cross-Reference",
    icon: ShieldCheck,
    tagline: "Cross-checks 11 Indian marketplaces for 100% catalog exclusivity.",
    whatWeBuilt:
      "A computer vision and fuzzy-matching engine cross-checking candidates against 11 Indian marketplaces (Amazon.in, Flipkart, HUFT, Supertails) to block generic knockoffs.",
    howItWorks: [
      {
        num: "1",
        title: "64-Bit Perceptual Hashing",
        detail: "Generates pHash fingerprints of candidate images to detect identical items despite watermarks.",
      },
      {
        num: "2",
        title: "Concurrent 11-Store Sweep",
        detail: "Queries domestic catalog indices and APIs using fuzzy keyword n-grams and barcodes.",
      },
      {
        num: "3",
        title: "Instant Hard Veto",
        detail: "Auto-rejects candidates if Hamming distance ≤ 6 or title similarity exceeds 85%.",
      },
    ],
    stack: "pHash Image Hashing · Fuzzy NLP · Competitor APIs",
    safeguard: "100% Exclusivity: Generic mass-market knockoffs are permanently pruned before review.",
  },
  {
    id: "agent-pricing-engine",
    step: "04",
    index: 3,
    name: "Landed-Cost Pricing",
    category: "FINANCIAL GOVERNANCE",
    role: "Dynamic Margin & Festival Guard",
    icon: CurrencyInr,
    tagline: "Calculates true landed costs in INR and enforces gross margin floors.",
    whatWeBuilt:
      "An automated financial calculation engine converting foreign unit costs into profitable INR prices, factoring in freight, customs duty, and Indian festival promotions.",
    howItWorks: [
      {
        num: "1",
        title: "True Landed Cost Formula",
        detail: "Derives landed cost factoring real-time forex, weight-bracket air freight, and 18% GST.",
      },
      {
        num: "2",
        title: "Festival Demand Modifier",
        detail: "Flexes markups with an active cultural calendar (e.g. Diwali volume promo, Monsoon surge).",
      },
      {
        num: "3",
        title: "Mathematical Margin Floor",
        detail: "Guarantees final price never drops below gross margin threshold, rounding to clean endings (₹2,499).",
      },
    ],
    stack: "Python · Live FX Exchange API · India Festival Calendar",
    safeguard: "Margin Guard Floor: Mathematical constraint prevents pricing below unit profitability.",
  },
  {
    id: "agent-curation-desk",
    step: "05",
    index: 4,
    name: "Two-Human Curation",
    category: "HUMAN-IN-THE-LOOP",
    role: "Dual-Curator Veto Gate",
    icon: UsersThree,
    tagline: "Every SKU requires 2 independent human sign-offs before live launch.",
    whatWeBuilt:
      "A dual-curator review desk where automated AI recommendations must receive two human approvals before any product appears on wetwopets.com.",
    howItWorks: [
      {
        num: "1",
        title: "Ranked Review Queue",
        detail: "Curators view prioritized batches sorted by AI score, detected materials, and computed margin %.",
      },
      {
        num: "2",
        title: "Independent Sign-Off",
        detail: "Curator 1 verifies aesthetic curation; Curator 2 verifies freight dimensions and margin feasibility.",
      },
      {
        num: "3",
        title: "Atomic Catalog Promotion",
        detail: "Product status flips to 'live' in Supabase only when vote count equals 2.",
      },
    ],
    stack: "Next.js 16 · Supabase RLS · Dual-Key Approval Logic",
    safeguard: "0% Autonomous Drift: AI only suggests and filters; humans hold 100% publication control.",
  },
  {
    id: "agent-tailz-assistant",
    step: "06",
    index: 5,
    name: "Tailz WhatsApp Agent",
    category: "CONVERSATIONAL COMMERCE",
    role: "Grounded Support & Reorder",
    icon: ChatCircleDots,
    tagline: "WhatsApp assistant grounded in live orders and published catalog.",
    whatWeBuilt:
      "A conversational commerce assistant operating on WhatsApp Business API, answering delivery questions, sizing queries, and reorders in under 300 characters.",
    howItWorks: [
      {
        num: "1",
        title: "WhatsApp Webhook Trigger",
        detail: "Ingests incoming customer messages via WhatsApp Cloud API webhook listener.",
      },
      {
        num: "2",
        title: "Grounded Database Lookup",
        detail: "Queries Supabase for customer phone number to retrieve active order state or live catalog items.",
      },
      {
        num: "3",
        title: "Instant Action Card",
        detail: "Sends concise message with live tracking link or 1-tap Cashfree checkout card without hallucination.",
      },
    ],
    stack: "Next.js /api/chat · WhatsApp Cloud API · Supabase Orders",
    safeguard: "Grounded Context: Cannot browse the open web or invent delivery timelines.",
  },
];

export default function WeTwoPetsAgentScroller() {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update active index based on scroll position using getBoundingClientRect
  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.5; // middle of viewport
      let currentIdx = 0;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY) {
          currentIdx = idx;
        }
      });

      setActiveIdx(currentIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeAgent = WE_TWO_AGENTS[activeIdx] || WE_TWO_AGENTS[0];
  const ActiveIcon = activeAgent.icon;

  const scrollToAgent = (idx: number) => {
    setActiveIdx(idx);
    const target = cardRefs.current[idx];
    if (target) {
      const topOffset = 110;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      {/* ─── DESKTOP SCROLLYTELLING (Sticky Left Title + Scrolling Right Cards) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* ─── LEFT: Sticky Title (Pinned in place, changes on scroll) ─── */}
        <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28 space-y-6 font-mono">
          <div className="space-y-4">
            {/* Step Counter & Category Pill */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-[#059669]">
                AGENT {activeAgent.step} OF 06 // {activeAgent.category}
              </span>
            </div>

            {/* Dynamic Sticky Title with Morphing Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAgent.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-black">
                    {activeAgent.step}
                  </span>
                  <ActiveIcon size={36} weight="bold" className="text-[#059669]" />
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-[0.95]">
                  {activeAgent.name}
                </h3>

                <p className="text-sm font-sans text-zinc-600 font-medium leading-relaxed pt-1">
                  “{activeAgent.tagline}”
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Pipeline Step Tracker Pills */}
            <div className="pt-4 border-t border-black/15">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-2">
                MULTI-AGENT PIPELINE PROGRESS
              </span>
              <div className="grid grid-cols-6 gap-1.5">
                {WE_TWO_AGENTS.map((agent, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <button
                      key={agent.id}
                      type="button"
                      onClick={() => scrollToAgent(idx)}
                      className={`py-1.5 px-1 text-center font-mono text-xs font-black transition-all cursor-pointer border ${
                        isActive
                          ? "bg-[#0D2E28] text-[#059669] border-[#0D2E28] shadow-xs"
                          : "bg-white text-zinc-400 border-black/15 hover:border-black/40 hover:text-black"
                      }`}
                    >
                      {agent.step}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-3 bg-zinc-50 border border-black/10 text-[11px] font-sans text-zinc-600">
              <strong className="font-mono font-bold text-black block mb-0.5">
                Autonomous with Human Gate:
              </strong>
              Each agent operates independently within strict contract boundaries. No product ever reaches the storefront without dual curator approval.
            </div>
          </div>
        </div>

        {/* ─── RIGHT: Concise, Short Agent Cards (Scrolls naturally) ─── */}
        <div className="lg:col-span-7 space-y-10 sm:space-y-14">
          {WE_TWO_AGENTS.map((agent, idx) => {
            const Icon = agent.icon;
            const isActive = activeIdx === idx;

            return (
              <div
                key={agent.id}
                id={agent.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`border bg-white transition-all scroll-mt-28 ${
                  isActive ? "border-black shadow-md" : "border-black/20 shadow-xs"
                }`}
              >
                {/* ─── Mobile Sticky Push Header (Option 1) ─── */}
                <div className="lg:hidden sticky top-14 z-10 bg-white/95 backdrop-blur border-b border-black/15 p-3 sm:p-4 flex items-center justify-between font-mono">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="px-2 py-0.5 bg-[#0D2E28] text-white font-black text-xs shrink-0">
                      {agent.step}
                    </span>
                    <Icon size={16} className="text-[#059669] shrink-0" />
                    <span className="text-xs sm:text-sm font-black uppercase text-black truncate">
                      {agent.name}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider shrink-0">
                    {agent.category}
                  </span>
                </div>

                {/* Card Content: Concise & Bite-Sized */}
                <div className="p-5 sm:p-7 space-y-5 sm:space-y-6">
                  {/* Desktop Card Header Tag */}
                  <div className="hidden lg:flex items-center justify-between pb-3 border-b border-black/10 font-mono text-xs">
                    <span className="text-zinc-500 font-bold uppercase">
                      ROLE // {agent.role}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-wider border border-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                      Active Engine
                    </span>
                  </div>

                  {/* 1. What We Built (1-2 sentences) */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#059669] block">
                      WHAT WE BUILT
                    </span>
                    <p className="text-sm sm:text-base text-zinc-900 font-sans leading-relaxed font-medium">
                      {agent.whatWeBuilt}
                    </p>
                  </div>

                  {/* 2. How It Works (3 quick bullet steps) */}
                  <div className="space-y-2.5 pt-1">
                    <span className="font-mono text-[10px] font-black uppercase tracking-wider text-black block">
                      HOW IT WORKS
                    </span>
                    <div className="space-y-2">
                      {agent.howItWorks.map((item) => (
                        <div
                          key={item.num}
                          className="flex items-start gap-3 bg-zinc-50 p-3 border border-black/10 text-xs"
                        >
                          <span className="w-5 h-5 rounded-full bg-[#0D2E28] text-white font-mono font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                            {item.num}
                          </span>
                          <div className="space-y-0.5 min-w-0">
                            <strong className="font-mono text-[11px] font-bold text-black uppercase block">
                              {item.title}
                            </strong>
                            <p className="text-zinc-600 font-sans leading-snug">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Footer Meta (Stack + Safeguard) */}
                  <div className="pt-3 border-t border-black/10 font-mono text-[11px] space-y-1.5">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-zinc-600">
                      <strong className="text-black uppercase">Stack:</strong>
                      <span>{agent.stack}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-zinc-600">
                      <strong className="text-[#059669] uppercase">Safeguard:</strong>
                      <span>{agent.safeguard}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
