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
  Sparkle,
  Terminal,
} from "@phosphor-icons/react";

export type AgentDetail = {
  id: string;
  step: string;
  name: string;
  category: string;
  badge: string;
  icon: typeof Globe;
  tagline: string;
  whatWeBuilt: string;
  architectureHighlights: string[];
  howItWorks: Array<{
    phase: string;
    action: string;
    detail: string;
  }>;
  safeguard: string;
  stack: string;
  surface: string;
};

export const WE_TWO_AGENTS_DATA: AgentDetail[] = [
  {
    id: "agent-sourcing",
    step: "01",
    name: "Sourcing Spider",
    category: "AUTONOMOUS DISCOVERY",
    badge: "Nightly Multi-Region Crawler",
    icon: Globe,
    tagline: "Crawls curated global pet boutiques across 4 continents nightly.",
    whatWeBuilt:
      "Engineered an asynchronous multi-region web crawling pipeline that scouts boutique, design-forward pet manufacturers across the US, UK, Europe, and Japan. Normalizes raw supplier catalogs, multi-currency price lists, and high-resolution media into a secure quarantine staging queue without touching the customer storefront.",
    architectureHighlights: [
      "Headless Playwright cluster with rotating proxies to bypass anti-scraping blocks",
      "Dynamic multi-currency normalizer (USD, EUR, GBP, JPY → base FX)",
      "Strict isolation: writes exclusively to staging_products with status: 'crawled'",
    ],
    howItWorks: [
      {
        phase: "01 · Nightly Trigger",
        action: "Scheduled Cron Dispatch",
        detail:
          "FastAPI background worker launches headless spiders across targeted boutique supplier domains at 02:00 AM IST.",
      },
      {
        phase: "02 · Data Extraction",
        action: "DOM & Media Parsing",
        detail:
          "Extracts product titles, material specifications, ergonomic dimensions, weight brackets, and uncompressed supplier photography.",
      },
      {
        phase: "03 · Quarantine Queue",
        action: "Isolated Staging Commit",
        detail:
          "Commits raw records to Supabase staging queue. Zero live storefront access until validated by subsequent pipeline agents.",
      },
    ],
    safeguard: "Zero Auto-Publish: All raw data is quarantined in private staging tables.",
    stack: "FastAPI · Python · Headless Playwright · Supabase Staging Queue",
    surface: "Internal Pipeline / Staging Database",
  },
  {
    id: "agent-gemini",
    step: "02",
    name: "Gemini Vision Critic",
    category: "MULTIMODAL INGESTION",
    badge: "Computer Vision & Quality Scorer",
    icon: Cpu,
    tagline: "Analyzes build materials, ergonomic design, and safety from photography.",
    whatWeBuilt:
      "A cascading multi-model LLM inspection engine (Gemini 2.5 Flash → 2.0 Flash → 1.5 Flash) governed by strict Pydantic JSON schemas. Inspects multi-angle product photography to verify build materials (e.g. Cordura ballistic nylon vs brittle polyester) and parses user reviews for safety red flags.",
    architectureHighlights: [
      "Strict Pydantic JSON schema contracts eliminate prompt hallucination risk",
      "Automatic model cascading fallback on timeouts or HTTP 503 quota errors",
      "Extracts typed 0–100 quality score, pros/cons list, and pet size compatibility",
    ],
    howItWorks: [
      {
        phase: "01 · Vision Ingestion",
        action: "Multimodal Photography Scan",
        detail:
          "Sends high-res product photos to Gemini Vision to detect stitch density, fastener metal alloys, and fabric durability.",
      },
      {
        phase: "02 · Review Sentiment Analysis",
        action: "Real-World Durability Audit",
        detail:
          "Parses foreign customer reviews, penalizing products with recurring complaints of seam tears, chemical odors, or sizing drift.",
      },
      {
        phase: "03 · Structured Contract Output",
        action: "Typed Score & Metadata Generation",
        detail:
          "Outputs strict JSON containing ai_score (0–100), pet_family, life_stage, pros, cons, and seasonal suitability tags.",
      },
    ],
    safeguard: "Schema Strictness: Any LLM response failing the JSON schema is instantly dropped.",
    stack: "Gemini 2.5 Flash · Gemini 2.0 Flash · Pydantic · Python",
    surface: "AI Ingestion Engine / Pipeline Worker",
  },
  {
    id: "agent-veto",
    step: "03",
    name: "Marketplace Veto",
    category: "ANTI-DUPLICATE GUARD",
    badge: "India Market Cross-Reference",
    icon: ShieldCheck,
    tagline: "Cross-checks 11 Indian marketplaces to guarantee 100% exclusive gear.",
    whatWeBuilt:
      "A protective computer vision and text deduplication engine that cross-references candidates against 11 Indian pet marketplaces (Amazon.in, Flipkart, Heads Up For Tails, Supertails, Zigly, etc.). Guarantees that We Two Pets never stocks generic dropshipped items already readily available domestically.",
    architectureHighlights: [
      "Perceptual Image Hashing (pHash) detects duplicates despite watermarks or crops",
      "Fuzzy Levenshtein NLP matches brand, model, and category keywords across Indian sites",
      "Hard veto threshold: Hamming distance ≤ 6 or title similarity > 85% triggers auto-reject",
    ],
    howItWorks: [
      {
        phase: "01 · Perceptual Hash",
        action: "64-Bit Visual Fingerprinting",
        detail:
          "Generates a 64-bit perceptual hash (pHash) of candidate images, capturing structural luminance independent of scale or compression.",
      },
      {
        phase: "02 · 11-Store Sweep",
        action: "Concurrent Competitor API & Search",
        detail:
          "Searches domestic catalog indices across Indian pet platforms using fuzzy keyword n-grams and product barcode/model lookups.",
      },
      {
        phase: "03 · Rejection Veto",
        action: "Immediate Duplicate Exclusion",
        detail:
          "If a domestic match is discovered, the candidate is marked status: 'rejected_domestic_duplicate' and permanently pruned from the catalog.",
      },
    ],
    safeguard: "100% Brand Protection: Zero generic mass-market knockoffs can enter the catalog.",
    stack: "pHash Image Hashing · Fuzzy NLP (Levenshtein) · Competitor APIs · Python",
    surface: "Governance Desk / Pipeline Gatekeeper",
  },
  {
    id: "agent-pricing",
    step: "04",
    name: "Landed-Cost Pricing Engine",
    category: "FINANCIAL GOVERNANCE",
    badge: "Landed Cost & Festival Modifier",
    icon: CurrencyInr,
    tagline: "Calculates true landed costs in INR and enforces gross margin floors.",
    whatWeBuilt:
      "An automated financial calculation engine that transforms fluctuating foreign supplier costs into profitable, transparent INR pricing. Computes true landed costs (FX rates, air freight per kilogram, customs duties, Chennai hub unboxing QC) and modulates prices based on an Indian festival calendar while enforcing a strict margin floor.",
    architectureHighlights: [
      "True landed cost formula: Supplier Cost × FX + Air Freight + Customs Duty + Hub QC",
      "Indian festival calendar dynamically tunes promotional markups (Diwali, Monsoons)",
      "Mathematical gross margin floor prevents automated discounting below break-even",
    ],
    howItWorks: [
      {
        phase: "01 · Landed Derivation",
        action: "Multi-Variable Cost Aggregation",
        detail:
          "Calculates landed cost in INR factoring real-time forex exchange, air freight weight brackets, and 18% GST duties.",
      },
      {
        phase: "02 · Calendar Modulation",
        action: "Dynamic Cultural Demand Multiplier",
        detail:
          "Applies active festival calendar rules (e.g. Diwali festive campaign: 0.92× volume discount, Monsoon pet care: 1.05× demand modifier).",
      },
      {
        phase: "03 · Margin Floor Check",
        action: "Guaranteed Profitability Guard",
        detail:
          "Ensures final_price_inr is guarded above min_gross_margin_pct floor, rounding cleanly to e-commerce pricing (e.g. ₹2,499).",
      },
    ],
    safeguard: "Margin Guard Floor: Mathematical constraint prevents pricing below unit profitability.",
    stack: "Python · Live FX Exchange API · India Festival Calendar · Margin Formula",
    surface: "Financial Engine / Dynamic Pricing Service",
  },
  {
    id: "agent-curation",
    step: "05",
    name: "Two-Human Curation Desk",
    category: "HUMAN-IN-THE-LOOP",
    badge: "Dual-Curator Veto Gate",
    icon: UsersThree,
    tagline: "Every SKU requires 2 independent human sign-offs before live launch.",
    whatWeBuilt:
      "A specialized internal review interface where automated AI recommendations must pass dual human approvals. Even if Gemini awards a 98/100 score, two curators must independently review the physical sample, verify freight feasibility, and sign off before any SKU transitions to the live store.",
    architectureHighlights: [
      "High-density desktop desk displaying AI score, detected materials, margin %, and source URL",
      "Dual-key cryptographic sign-off in Supabase with granular audit trail logging",
      "Atomic catalog promotion: status flips to 'live' only when vote_count === 2",
    ],
    howItWorks: [
      {
        phase: "01 · Review Queue",
        action: "Prioritized Candidate Presentation",
        detail:
          "Curators receive ranked batches sorted by Gemini quality score, computed margin %, and exclusivity confidence.",
      },
      {
        phase: "02 · Independent Sign-Off",
        action: "Two-Person Verification",
        detail:
          "Curator 1 verifies aesthetic curation and brand alignment; Curator 2 checks supplier reliability and packaging dimensions.",
      },
      {
        phase: "03 · Live Storefront Release",
        action: "Atomic Catalog Promotion",
        detail:
          "Upon dual approval, the product status transitions to 'live', automatically deploying into the Next.js catalog cache.",
      },
    ],
    safeguard: "0% Autonomous Drift: AI only suggests and filters; humans hold 100% publication control.",
    stack: "Next.js 16 · Supabase Row-Level Security (RLS) · Dual-Approval Logic",
    surface: "Private Internal Admin Desk (admin.wetwopets.com)",
  },
  {
    id: "agent-tailz",
    step: "06",
    name: "Tailz WhatsApp Agent",
    category: "CONVERSATIONAL COMMERCE",
    badge: "Grounded Support & Reorder Assistant",
    icon: ChatCircleDots,
    tagline: "WhatsApp assistant grounded exclusively in live orders and published catalog.",
    whatWeBuilt:
      "A customer-facing conversational commerce assistant operating on WhatsApp Business API with the personality of a loyal, helpful golden retriever. Grounded strictly in real-time order records and the active live catalog, handling order tracking, size recommendations, and instant 1-tap reorders without hallucinatory output.",
    architectureHighlights: [
      "Strict zero-hallucination system prompt: explicitly forbidden from inventing ungrounded data",
      "Real-time webhook integration with Supabase order events and Cashfree payment states",
      "Short, high-clarity conversational format optimized for WhatsApp (< 300 characters)",
    ],
    howItWorks: [
      {
        phase: "01 · Message Ingestion",
        action: "WhatsApp Cloud Webhook",
        detail:
          "Receives customer inquiry (e.g. 'Where is my order?' or 'Will this harness fit a 12kg Frenchie?').",
      },
      {
        phase: "02 · Grounded Query Resolution",
        action: "Database Record Extraction",
        detail:
          "Queries Supabase for the customer's phone number, pulling latest order status, tracking number, or pet breed profile.",
      },
      {
        phase: "03 · Concise Action Response",
        action: "Direct WhatsApp Card",
        detail:
          "Delivers warm, concise response with live courier tracking link or verified size recommendation card.",
      },
    ],
    safeguard: "Grounded Context: Tailz cannot browse the open web or invent delivery timelines.",
    stack: "Next.js /api/chat · WhatsApp Cloud API · Supabase Orders · Webhook Handlers",
    surface: "WhatsApp Business Interface (+91 Live Channel)",
  },
];

export default function WeTwoPetsAgentScroller() {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Smooth scroll to card when user clicks an agent on the left
  const scrollToAgent = (idx: number) => {
    setActiveIdx(idx);
    const target = cardRefs.current[idx];
    if (target) {
      const topOffset = 100; // Account for sticky headers
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Observe which agent card is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;

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
      {/* ─── Mobile Sticky Tab Bar (< 1024px) ─── */}
      <div className="lg:hidden sticky top-14 z-20 bg-white/95 backdrop-blur border-y border-black/15 -mx-4 px-4 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none shadow-xs">
        {WE_TWO_AGENTS_DATA.map((agent, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={agent.id}
              type="button"
              onClick={() => scrollToAgent(idx)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-black uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer shrink-0 ${
                isActive
                  ? "bg-[#0D2E28] text-white border-[#0D2E28] shadow-xs"
                  : "bg-zinc-50 text-zinc-700 border-black/15 hover:bg-zinc-100"
              }`}
            >
              <span className={isActive ? "text-[#059669]" : "text-zinc-400"}>
                {agent.step}
              </span>
              <span>{agent.name}</span>
            </button>
          );
        })}
      </div>

      {/* ─── 2-Column Split View (Desktop Sticky Left + Scrollable Right) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6 sm:mt-8">
        {/* ─── LEFT COLUMN: Sticky Agent Directory ─── */}
        <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 space-y-3 font-mono">
          <div className="flex items-center justify-between pb-2 border-b border-black/15">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
              ACTIVE PIPELINE DIRECTORY
            </span>
            <span className="text-[10px] font-bold text-[#059669] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
              6 AGENTS LIVE
            </span>
          </div>

          <div className="space-y-1.5">
            {WE_TWO_AGENTS_DATA.map((agent, idx) => {
              const isActive = activeIdx === idx;
              const Icon = agent.icon;

              return (
                <button
                  key={agent.id}
                  type="button"
                  onClick={() => scrollToAgent(idx)}
                  className={`w-full text-left p-3 sm:p-3.5 border transition-all cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? "bg-[#0D2E28] text-white border-[#0D2E28] shadow-sm translate-x-1"
                      : "bg-white text-zinc-800 border-black/15 hover:border-black/40 hover:bg-zinc-50"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`text-xs font-black ${
                        isActive ? "text-[#059669]" : "text-zinc-400 group-hover:text-black"
                      }`}
                    >
                      {agent.step}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <Icon
                          size={14}
                          className={isActive ? "text-[#059669]" : "text-zinc-500"}
                        />
                        <span className="text-xs font-black uppercase tracking-tight truncate">
                          {agent.name}
                        </span>
                      </div>
                      <span
                        className={`text-[9px] uppercase tracking-wider block truncate mt-0.5 ${
                          isActive ? "text-zinc-300" : "text-zinc-500"
                        }`}
                      >
                        {agent.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      isActive ? "bg-[#059669]" : "bg-transparent border border-black/20"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="p-3 bg-zinc-50 border border-black/10 text-[11px] font-sans text-zinc-600 space-y-1 mt-4">
            <div className="flex items-center gap-1.5 font-mono text-[10px] font-black uppercase text-[#0D2E28]">
              <Sparkle size={12} className="text-[#059669]" />
              <span>Scroll-Synchronized Engine</span>
            </div>
            <p className="leading-snug">
              As you scroll through the breakdown, the active autonomous agent highlights in real-time. Click any agent to inspect its mechanics directly.
            </p>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: Detailed Agent Mechanics Breakdown ─── */}
        <div className="lg:col-span-8 space-y-8 sm:space-y-12">
          {WE_TWO_AGENTS_DATA.map((agent, idx) => {
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
                  isActive
                    ? "border-black shadow-md"
                    : "border-black/20 shadow-xs"
                }`}
              >
                {/* Agent Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-b border-black/15 bg-zinc-50 font-mono">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2 py-0.5 bg-[#0D2E28] text-white font-black text-xs">
                      {agent.step}
                    </span>
                    <Icon size={18} className="text-[#059669]" />
                    <span className="text-xs sm:text-sm font-black uppercase text-black">
                      {agent.name}
                    </span>
                    <span className="hidden sm:inline-block text-[10px] font-bold text-zinc-400">
                      // {agent.badge}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                    Autonomous Active
                  </span>
                </div>

                <div className="p-5 sm:p-7 space-y-6 sm:space-y-7">
                  {/* Tagline */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#0D2E28] tracking-tight leading-snug">
                    “{agent.tagline}”
                  </h3>

                  {/* ─── BLOCK 1: WHAT WE BUILT ─── */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-black uppercase text-[#059669] tracking-wider">
                      <Terminal size={14} />
                      <span>WHAT WE BUILT</span>
                    </div>
                    <p className="text-sm sm:text-base text-zinc-800 font-sans leading-relaxed">
                      {agent.whatWeBuilt}
                    </p>

                    <div className="bg-zinc-50 border border-black/10 p-3.5 space-y-2">
                      <span className="font-mono text-[10px] font-black uppercase text-zinc-500 block">
                        Architecture Safeguards &amp; Design Decisions
                      </span>
                      <ul className="space-y-1.5 text-xs text-zinc-700">
                        {agent.architectureHighlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle
                              weight="fill"
                              className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ─── BLOCK 2: HOW IT WORKS (3-Phase Flow) ─── */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-black uppercase text-[#0D2E28] tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-[#059669]" />
                      <span>HOW IT WORKS (OPERATIONAL MECHANICS)</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono">
                      {agent.howItWorks.map((step) => (
                        <div
                          key={step.phase}
                          className="border border-black/15 bg-zinc-50 p-3.5 flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-[10px] font-black text-[#059669] uppercase block mb-1">
                              {step.phase}
                            </span>
                            <h4 className="text-xs font-black uppercase text-black leading-tight mb-2">
                              {step.action}
                            </h4>
                            <p className="text-[11px] font-sans text-zinc-600 leading-snug">
                              {step.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ─── FOOTER META: Stack, Safeguard, Surface ─── */}
                  <div className="pt-4 border-t border-black/15 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                    <div className="bg-zinc-50 p-3 border border-black/10 space-y-1">
                      <span className="text-[9px] font-black uppercase text-zinc-500 block">
                        Engine Tech Stack
                      </span>
                      <p className="text-xs font-black text-black">
                        {agent.stack}
                      </p>
                    </div>

                    <div className="bg-zinc-50 p-3 border border-black/10 space-y-1">
                      <span className="text-[9px] font-black uppercase text-[#059669] block">
                        Core System Safeguard
                      </span>
                      <p className="text-xs font-black text-zinc-900">
                        {agent.safeguard}
                      </p>
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
