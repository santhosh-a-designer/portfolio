"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle } from "@phosphor-icons/react";

interface Props {
  onExpandFullStory: () => void;
}

const WE_TWO_KPIS = [
  { value: "3 Agents", label: "Autonomous Sourcing", highlight: "Trend, Scraper, & Catalog" },
  { value: "2 Humans", label: "Human Veto Desk", highlight: "Double margin approval" },
  { value: "0 Drift", label: "Brand Protection", highlight: "Strict quality curation gate" },
  { value: "38+ Guides", label: "SEO Trust Engine", highlight: "Organic pet care authority" },
];

export default function WeTwoPetsSkimReel({ onExpandFullStory }: Props) {
  return (
    <div className="w-full space-y-0 text-black font-sans divide-y divide-black/15">
      {/* ─── HERO BEAT: Hook + 4-KPI Strip ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-8 sm:py-10 bg-white space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-black/15 font-mono text-[10px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            <span className="font-black uppercase tracking-wider text-black">
              WE TWO PETS // 60-SECOND EXECUTIVE REEL
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#0D2E28] text-white font-black uppercase tracking-wider text-[9px]">
              Curated Pet Commerce
            </span>
            <a
              href="https://www.wetwopets.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#059669] hover:bg-[#0D2E28] text-white font-mono text-[10px] font-black uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>wetwopets.com ↗</span>
            </a>
          </div>
        </div>

        <div className="space-y-2 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-[0.9] flex items-baseline flex-wrap gap-2">
            <span>We Two Pets</span>
            <span className="font-serif italic lowercase text-2xl sm:text-4xl text-[#059669] font-normal tracking-normal select-none">
              curated pet gear
            </span>
            <span className="w-3 h-3 rounded-full bg-[#059669] shrink-0" />
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 leading-snug">
            “0→1 pet commerce for India: an editorial store, an autonomous sourcing engine, and a 2-human veto desk.”
          </p>
        </div>

        {/* 4-Stat KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-3 border-t border-black/15 font-mono">
          {WE_TWO_KPIS.map((kpi, idx) => (
            <div key={idx} className="space-y-0.5 border-l-2 border-[#059669]/30 pl-3 min-w-0">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight block leading-none whitespace-nowrap">
                {kpi.value}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase text-zinc-600 block leading-tight">
                {kpi.label}
              </span>
              <span className="text-[9px] text-[#059669] font-black uppercase tracking-wider block">
                {kpi.highlight}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BEAT 01: THE PROBLEM ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#059669]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#059669]">
            01 — THE PROBLEM
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “DROPSHIPPING TRAPS &amp; 30-DAY WAITS DESTROY PET COMMERCE TRUST.”
        </h2>
        <p className="text-sm sm:text-base text-zinc-700 max-w-[70ch] leading-relaxed">
          Indian pet parents seeking premium international gear faced generic marketplaces full of low-quality items, 30-day overseas transit, customs duty surprises, and affiliate sites that leaked checkout to third parties.
        </p>
      </section>

      {/* ─── BEAT 02: 3 CORE DECISIONS (STAR) ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0D2E28]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#0D2E28]">
            02 — THE DECISIONS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “THREE CALLS THAT SHAPED AGENTIC D2C COMMERCE.”
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
          {/* Decision 1 */}
          <div className="p-4 bg-zinc-50 border border-black/15 space-y-3">
            <span className="font-mono text-xs font-black uppercase text-black block pb-2 border-b border-black/10">
              01 / Autonomous Multi-Agent Sourcing
            </span>
            <div className="space-y-1.5 text-xs text-zinc-700">
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">S</span>
                <p className="leading-snug">Manual catalog hunting couldn&apos;t track currency, inventory, and foreign trends.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">T</span>
                <p className="leading-snug">Build an autonomous engine to crawl boutique global suppliers nightly.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">A</span>
                <p className="leading-snug">Engineered 3 autonomous agents for trend discovery, scraping, and normalization.</p>
              </div>
            </div>
            <div className="pt-2 border-t border-dashed border-black/15">
              <div className="flex items-start gap-1.5 bg-white p-2.5 border border-emerald-900/15">
                <CheckCircle weight="fill" className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] font-black uppercase text-[#059669] block">
                    Outcome
                  </span>
                  <p className="text-xs font-bold text-zinc-900 leading-snug">
                    Global candidate gear is crawled, scored, and staged nightly without manual effort.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 2 */}
          <div className="p-4 bg-zinc-50 border border-black/15 space-y-3">
            <span className="font-mono text-xs font-black uppercase text-black block pb-2 border-b border-black/10">
              02 / The 2-Human Margin Veto Desk
            </span>
            <div className="space-y-1.5 text-xs text-zinc-700">
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">S</span>
                <p className="leading-snug">Unchecked AI models risk publishing junk items or products already in India.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">T</span>
                <p className="leading-snug">Require strict human veto and visual duplicate checks before publishing.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">A</span>
                <p className="leading-snug">Engineered private approval portal requiring 2 human votes plus margin checks.</p>
              </div>
            </div>
            <div className="pt-2 border-t border-dashed border-black/15">
              <div className="flex items-start gap-1.5 bg-white p-2.5 border border-emerald-900/15">
                <CheckCircle weight="fill" className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] font-black uppercase text-[#059669] block">
                    Outcome
                  </span>
                  <p className="text-xs font-bold text-zinc-900 leading-snug">
                    Duplicate checks via image hashing and title matching ensure catalog exclusivity; answers are grounded in live order and catalog data, and every listing needs 2 human approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 3 */}
          <div className="p-4 bg-zinc-50 border border-black/15 space-y-3">
            <span className="font-mono text-xs font-black uppercase text-black block pb-2 border-b border-black/10">
              03 / High-Contrast Editorial Commerce
            </span>
            <div className="space-y-1.5 text-xs text-zinc-700">
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">S</span>
                <p className="leading-snug">Generic Shopify themes feel like cheap drop-ship sites and bleed buyer trust.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">T</span>
                <p className="leading-snug">Design high-contrast editorial storefront with direct 1-page OTP checkout.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">A</span>
                <p className="leading-snug">Built custom Deep Forest design system, unboxing hub, and direct payment flow.</p>
              </div>
            </div>
            <div className="pt-2 border-t border-dashed border-black/15">
              <div className="flex items-start gap-1.5 bg-white p-2.5 border border-emerald-900/15">
                <CheckCircle weight="fill" className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] font-black uppercase text-[#059669] block">
                    Outcome
                  </span>
                  <p className="text-xs font-bold text-zinc-900 leading-snug">
                    Customers pay directly on wetwopets.com without checkout redirects to third-party sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BEAT 03: PRODUCT TRIO ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#059669]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#059669]">
            03 — THE SHIPPED SURFACES
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “EDITORIAL STORE, APPROVAL DESK, AND CARE GUIDES.”
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="border border-black/15 bg-zinc-50 overflow-hidden space-y-2 p-2">
            <div className="flex items-center justify-between font-mono text-[10px] px-1">
              <span className="font-bold text-zinc-500 uppercase">STOREFRONT</span>
              <span className="font-black text-black uppercase">Editorial Home</span>
            </div>
            <div className="relative aspect-[4/3] bg-zinc-100 border border-black/10 overflow-hidden">
              <Image
                src="/case-studies/we-two-pets/home.jpg"
                alt="We Two Pets editorial storefront home"
                fill
                priority
                loading="eager"
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="border border-black/15 bg-zinc-50 overflow-hidden space-y-2 p-2">
            <div className="flex items-center justify-between font-mono text-[10px] px-1">
              <span className="font-bold text-zinc-500 uppercase">CURATED SHOP</span>
              <span className="font-black text-black uppercase">Vetted Imports</span>
            </div>
            <div className="relative aspect-[4/3] bg-zinc-100 border border-black/10 overflow-hidden">
              <Image
                src="/case-studies/we-two-pets/shop.jpg"
                alt="We Two Pets curated shop grid"
                fill
                priority
                loading="eager"
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="border border-black/15 bg-zinc-50 overflow-hidden space-y-2 p-2">
            <div className="flex items-center justify-between font-mono text-[10px] px-1">
              <span className="font-bold text-zinc-500 uppercase">CHECKOUT &amp; HUB</span>
              <span className="font-black text-black uppercase">Direct Order</span>
            </div>
            <div className="relative aspect-[4/3] bg-zinc-100 border border-black/10 overflow-hidden">
              <Image
                src="/case-studies/we-two-pets/product.jpg"
                alt="We Two Pets product page and checkout"
                fill
                priority
                loading="eager"
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── BEAT 04: VERIFIED OUTCOMES ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0D2E28]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#0D2E28]">
            04 — OUTCOMES
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “WHAT HAPPENED WHEN PET COMMERCE WAS REDESIGNED.”
        </h2>

        <div className="border-t border-b border-black/20 divide-y divide-black/15 font-mono">
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2">
            <span className="text-lg sm:text-xl font-black text-black tracking-tight whitespace-nowrap">
              Direct Checkout
            </span>
            <span className="text-xs text-zinc-600 font-sans sm:text-right">
              Direct on-domain checkout without third-party affiliate redirects.
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2">
            <span className="text-lg sm:text-xl font-black text-black tracking-tight whitespace-nowrap">
              Duplicate Curation Gate
            </span>
            <span className="text-xs text-zinc-600 font-sans sm:text-right">
              Duplicate checks via image hashing and title matching filter existing retailer items.
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2">
            <span className="text-lg sm:text-xl font-black text-black tracking-tight whitespace-nowrap">
              38+ Care Guides
            </span>
            <span className="text-xs text-zinc-600 font-sans sm:text-right">
              Comprehensive pet health &amp; gear advice driving organic Google traffic.
            </span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            type="button"
            onClick={onExpandFullStory}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#059669] hover:bg-black text-white font-mono text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-sm group"
          >
            <span>Read the full case study</span>
            <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://www.wetwopets.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 border border-black/20 hover:border-black bg-zinc-50 hover:bg-black text-black hover:text-white font-mono text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Live site · wetwopets.com</span>
            <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ─── BEAT 05: KEY LEARNING ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#059669]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#059669]">
            05 — WHAT I LEARNED
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “TWO LESSONS FROM MULTI-AGENT COMMERCE.”
        </h2>

        <div className="p-4 bg-zinc-50 border-l-4 border-[#059669] space-y-1">
          <span className="font-mono text-[10px] font-black uppercase text-[#059669] block">
            Core Takeaway
          </span>
          <p className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
            AI is for volume discovery; humans are for editorial taste and margin protection. A successful agentic pipeline protects the brand by enforcing human approval before anything touches real customers.
          </p>
        </div>
      </section>
    </div>
  );
}
