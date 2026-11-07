"use client";

import { useState, useEffect, useRef } from "react";
import {
  Globe,
  Cpu,
  ShieldCheck,
  CurrencyInr,
  UsersThree,
  ChatCircleDots,
  ArrowRight,
  CheckCircle,
  Terminal,
} from "@phosphor-icons/react";

export type AgentItem = {
  id: string;
  step: string;
  name: string;
  shortName: string;
  category: string;
  role: string;
  tagline: string;
  icon: typeof Globe;
  whatWeBuilt: string;
  howItWorks: Array<{
    stepNum: string;
    title: string;
    desc: string;
  }>;
  stack: string;
  safeguard: string;
};

export const WE_TWO_AGENTS: AgentItem[] = [
  {
    id: "agent-sourcing",
    step: "01",
    name: "Sourcing Spider",
    shortName: "Spider",
    category: "AUTONOMOUS DISCOVERY",
    role: "Nightly Multi-Region Discovery Crawler",
    tagline: "Crawls curated global pet boutiques across 4 continents nightly.",
    icon: Globe,
    whatWeBuilt:
      "Headless Playwright spiders scouting curated pet boutiques across the US, UK, Europe, and Japan. Normalizes foreign catalogs and currencies into a quarantined staging queue with zero direct storefront access.",
    howItWorks: [
      {
        stepNum: "01",
        title: "Nightly Trigger",
        desc: "02:00 AM IST scheduled cron dispatches headless crawlers across global boutique supplier domains.",
      },
      {
        stepNum: "02",
        title: "Spec & FX Extraction",
        desc: "Parses high-res photography, materials, weight brackets, and multi-currency pricing (USD, EUR, GBP, JPY).",
      },
      {
        stepNum: "03",
        title: "Quarantine Queue",
        desc: "Inserts records into Supabase staging queue with status 'crawled'. Storefront completely ignores pending items.",
      },
    ],
    stack: "FastAPI · Playwright · Python · Supabase",
    safeguard: "Quarantined Staging: Zero auto-publishing to live storefront.",
  },
  {
    id: "agent-gemini",
    step: "02",
    name: "Gemini Vision Critic",
    shortName: "Gemini",
    category: "MULTIMODAL INGESTION",
    role: "Material & Safety Quality Scorer",
    tagline: "Analyzes build materials, ergonomic design, and safety from photography.",
    icon: Cpu,
    whatWeBuilt:
      "Cascading multi-model LLM inspection (Gemini 2.5 Flash → 2.0 → 1.5) governed by strict Pydantic JSON contracts. Inspects multi-angle photography to detect genuine ballistic nylon versus brittle plastic and audits foreign review sentiments.",
    howItWorks: [
      {
        stepNum: "01",
        title: "Vision Inspection",
        desc: "Sends multi-angle photos to Gemini Vision to detect stitch density, fastener hardware, and fabric durability.",
      },
      {
        stepNum: "02",
        title: "Review Sentiment Audit",
        desc: "Scans foreign customer reviews, penalizing recurring mentions of seam failure, chemical odor, or sizing drift.",
      },
      {
        stepNum: "03",
        title: "Typed Contract",
        desc: "Emits strict JSON with 0–100 quality score, pet size brackets, and seasonal suitability tags.",
      },
    ],
    stack: "Gemini 2.5 Flash · Pydantic · Python",
    safeguard: "Schema Strictness: Invalid JSON shapes or timeouts trigger instant cascade or drop.",
  },
  {
    id: "agent-veto",
    step: "03",
    name: "Marketplace Veto",
    shortName: "Veto",
    category: "ANTI-DUPLICATE GUARD",
    role: "11-Store Indian Competitor Cross-Check",
    tagline: "Cross-checks 11 Indian marketplaces to guarantee 100% exclusive gear.",
    icon: ShieldCheck,
    whatWeBuilt:
      "Automated exclusivity engine cross-referencing candidates against 11 Indian marketplaces (Amazon.in, Flipkart, HUFT, Supertails, Zigly). Guarantees We Two Pets never stocks generic mass-market knockoffs.",
    howItWorks: [
      {
        stepNum: "01",
        title: "Perceptual Image Hash",
        desc: "Generates 64-bit perceptual hashes (pHash) capturing structural image geometry regardless of crop or watermark.",
      },
      {
        stepNum: "02",
        title: "Concurrent 11-Store Sweep",
        desc: "Queries competitor search APIs and catalog indices using fuzzy title n-grams and brand lookups.",
      },
      {
        stepNum: "03",
        title: "Hard Exclusivity Veto",
        desc: "Hamming distance ≤ 6 or title overlap > 85% marks candidate 'rejected_domestic_duplicate'.",
      },
    ],
    stack: "pHash Image Hashing · Fuzzy NLP · Competitor APIs",
    safeguard: "Exclusivity Gate: Domestic hits are rejected before humans even review them.",
  },
  {
    id: "agent-pricing",
    step: "04",
    name: "Pricing Engine",
    shortName: "Pricing",
    category: "FINANCIAL GOVERNANCE",
    role: "Dynamic Margin & Festival Calendar Guard",
    tagline: "Calculates true landed costs in INR and enforces gross margin floors.",
    icon: CurrencyInr,
    whatWeBuilt:
      "Automated pricing engine that converts foreign wholesale costs into profitable INR retail prices. Factors in live forex rates, air freight per kilogram, customs duties, and Chennai unboxing QC, while flexing with Indian festival demand.",
    howItWorks: [
      {
        stepNum: "01",
        title: "Landed Cost Formula",
        desc: "Derives true landed cost in INR: Supplier Cost × FX + Air Freight + Customs (18% GST) + Hub QC.",
      },
      {
        stepNum: "02",
        title: "Festival Demand Tuning",
        desc: "Modulates markup based on an active Indian calendar (e.g. Diwali promo: 0.92×, Monsoon gear: 1.05×).",
      },
      {
        stepNum: "03",
        title: "Margin Guard Floor",
        desc: "Mathematical floor guarantees prices never drop below the minimum gross margin threshold.",
      },
    ],
    stack: "Python · Live FX Exchange API · India Festival Rules",
    safeguard: "Margin Floor: Mathematical constraint guarantees unit profitability.",
  },
  {
    id: "agent-curation",
    step: "05",
    name: "Curation Desk",
    shortName: "Curation",
    category: "HUMAN-IN-THE-LOOP",
    role: "Dual-Key Human Approval Gate",
    tagline: "Every SKU requires 2 independent human sign-offs before live launch.",
    icon: UsersThree,
    whatWeBuilt:
      "High-density private review desk where automated AI recommendations must pass two independent human sign-offs. Even a 98/100 Gemini score remains completely invisible until both curators approve aesthetics, freight dimensions, and margin.",
    howItWorks: [
      {
        stepNum: "01",
        title: "Ranked Staging Queue",
        desc: "Curators view prioritized batches sorted by Gemini quality score, computed margin %, and exclusivity.",
      },
      {
        stepNum: "02",
        title: "Dual Human Sign-Off",
        desc: "Curator 1 evaluates tactile curation and brand fit; Curator 2 checks supplier reliability and packaging.",
      },
      {
        stepNum: "03",
        title: "Live Storefront Release",
        desc: "Only when both votes are affirmative does Supabase atomically update product status to 'live'.",
      },
    ],
    stack: "Next.js 16 · Supabase RLS · Dual-Key Logic",
    safeguard: "0% Autonomous Drift: Humans hold 100% publication control over every SKU.",
  },
  {
    id: "agent-tailz",
    step: "06",
    name: "Tailz WhatsApp Agent",
    shortName: "Tailz",
    category: "CONVERSATIONAL COMMERCE",
    role: "Grounded Mobile Support & 1-Tap Reorder",
    tagline: "WhatsApp assistant grounded exclusively in live orders and published catalog.",
    icon: ChatCircleDots,
    whatWeBuilt:
      "WhatsApp commerce assistant grounded strictly in live Supabase order webhooks and the published catalog. Built for mobile shoppers to track parcels, clarify sizing, and reorder in under 300 characters without hallucinatory output.",
    howItWorks: [
      {
        stepNum: "01",
        title: "WhatsApp Message Ingestion",
        desc: "Customer asks for order status (e.g. 'Where is my parcel?') or size advice on WhatsApp.",
      },
      {
        stepNum: "02",
        title: "Database Context Match",
        desc: "Resolves customer phone number against Supabase order records and pet breed profile.",
      },
      {
        stepNum: "03",
        title: "Action Card Response",
        desc: "Delivers concise response with live courier tracking link or verified size recommendation card.",
      },
    ],
    stack: "Next.js /api/chat · WhatsApp Cloud API · Supabase Webhooks",
    safeguard: "Grounded Context: Cannot browse the open web or invent delivery timelines.",
  },
];

export default function WeTwoPetsAgentScroller() {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeAgent = WE_TWO_AGENTS[activeIdx] || WE_TWO_AGENTS[0];
  const ActiveIcon = activeAgent.icon;

  const scrollToAgent = (idx: number) => {
    setActiveIdx(idx);
    const target = cardRefs.current[idx];
    if (target) {
      const topOffset = 120;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 280;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveIdx(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* ─── DESKTOP SCROLLYTELLING SPLIT VIEW (≥ 1024px) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* ─── LEFT: PINNED STICKY TITLE (Changes smoothly as user scrolls) ─── */}
        <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          {/* Agent Category & Counter */}
          <div className="space-y-2 border-b border-black/15 pb-4 font-mono">
            <div className="flex items-center justify-between text-xs">
              <span className="font-black uppercase tracking-widest text-[#059669]">
                {activeAgent.category}
              </span>
              <span className="text-zinc-400 font-bold">
                {activeAgent.step} / 06
              </span>
            </div>

            {/* Dynamic Sticky Agent Name */}
            <div className="space-y-1.5 pt-1 transition-all duration-300">
              <div className="flex items-center gap-2.5">
                <ActiveIcon size={26} className="text-[#059669] shrink-0" />
                <h3 className="text-3xl sm:text-4xl font-black uppercase text-black tracking-tight leading-none">
                  {activeAgent.name}
                </h3>
              </div>
              <p className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wide">
                {activeAgent.role}
              </p>
            </div>
          </div>

          {/* Dynamic One-Line Tagline */}
          <div className="border-l-2 border-[#059669] pl-3 py-1">
            <p className="font-serif text-base italic text-zinc-700 leading-snug">
              “{activeAgent.tagline}”
            </p>
          </div>

          {/* Quick-Jump Step Indicators */}
          <div className="space-y-2 pt-2">
            <span className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-400 block">
              PIPELINE PROGRESSION
            </span>
            <div className="grid grid-cols-6 gap-1.5 font-mono">
              {WE_TWO_AGENTS.map((agent, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={agent.id}
                    type="button"
                    onClick={() => scrollToAgent(idx)}
                    className={`py-2 px-1 text-center border text-[11px] font-black transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#0D2E28] text-[#059669] border-[#0D2E28] shadow-xs"
                        : "bg-white text-zinc-500 border-black/15 hover:border-black/40 hover:text-black"
                    }`}
                    title={agent.name}
                  >
                    {agent.step}
                  </button>
                );
              })}
            </div>
            <p className="font-mono text-[10px] text-zinc-400 leading-tight">
              Scrolls down naturally or click 01–06 to jump.
            </p>
          </div>
        </div>

        {/* ─── RIGHT: LEAN, BITE-SIZED AGENT CARDS ─── */}
        <div className="lg:col-span-7 space-y-12 sm:space-y-16">
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
                className={`scroll-mt-28 border bg-white transition-all ${
                  isActive
                    ? "border-black shadow-md ring-1 ring-black/10"
                    : "border-black/20 shadow-xs"
                }`}
              >
                {/* ─── MOBILE STICKY PUSH HEADER (< 1024px) ─── */}
                {/* Pinned to top of phone screen; pushed out when next agent arrives */}
                <div className="lg:hidden sticky top-14 z-20 bg-white/95 backdrop-blur border-b border-black/15 px-4 py-2.5 flex items-center justify-between font-mono shadow-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="px-1.5 py-0.5 bg-[#0D2E28] text-white text-[10px] font-black shrink-0">
                      {agent.step}
                    </span>
                    <Icon size={16} className="text-[#059669] shrink-0" />
                    <span className="text-xs font-black uppercase text-black truncate">
                      {agent.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-[#059669] uppercase tracking-wider shrink-0">
                    {agent.step} / 06
                  </span>
                </div>

                {/* Desktop Card Header Bar */}
                <div className="hidden lg:flex items-center justify-between p-4 border-b border-black/10 bg-zinc-50/80 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#0D2E28] text-white font-black text-[11px]">
                      STAGE {agent.step}
                    </span>
                    <span className="font-black uppercase text-black">
                      {agent.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#059669] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                    Active Pipeline
                  </span>
                </div>

                {/* Card Body: Punchy & Concise */}
                <div className="p-5 sm:p-6 space-y-5">
                  {/* 1. What We Built (1-2 sentences) */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] font-black uppercase tracking-wider text-[#059669] block">
                      WHAT WE BUILT
                    </span>
                    <p className="text-sm sm:text-base font-sans text-zinc-900 leading-relaxed font-medium">
                      {agent.whatWeBuilt}
                    </p>
                  </div>

                  {/* 2. How It Works (3 clear bullet steps) */}
                  <div className="space-y-2 pt-2 border-t border-black/10 font-mono">
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500 block">
                      HOW IT WORKS
                    </span>
                    <div className="space-y-2">
                      {agent.howItWorks.map((hw) => (
                        <div
                          key={hw.stepNum}
                          className="flex items-start gap-2.5 bg-zinc-50 p-2.5 sm:p-3 border-l-2 border-[#059669]"
                        >
                          <span className="text-xs font-black text-[#059669] shrink-0 mt-0.5">
                            {hw.stepNum}.
                          </span>
                          <div className="text-xs space-y-0.5">
                            <strong className="text-black uppercase block tracking-wide">
                              {hw.title}
                            </strong>
                            <p className="text-zinc-600 font-sans leading-snug">
                              {hw.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Tech Stack & Safeguard Footnote */}
                  <div className="pt-3 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px]">
                    <div className="text-zinc-600">
                      <strong className="text-black">Stack: </strong>
                      <span>{agent.stack}</span>
                    </div>
                    <div className="text-[#059669] font-bold">
                      <span>✓ {agent.safeguard}</span>
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
