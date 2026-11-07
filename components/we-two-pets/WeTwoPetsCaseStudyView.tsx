"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Cpu,
  CheckCircle,
  ShieldCheck,
  Users,
} from "@phosphor-icons/react";
import ChallengeWindowStack from "@/components/vidyas-kitchen/ChallengeWindowStack";
import IADiagram from "@/components/vidyas-kitchen/IADiagram";
import StackToolsSkills from "@/components/vidyas-kitchen/StackToolsSkills";
import UserFlowDiagram from "@/components/vidyas-kitchen/UserFlowDiagram";
import {
  weTwoChallenges,
  weTwoFlows,
  weTwoIA,
  weTwoJourney,
  weTwoPrinciples,
  weTwoResearch,
  weTwoSkills,
  weTwoTools,
  weTwoAIFlow,
} from "@/lib/weTwoPetsCaseStudyContent";

import EditorialTrustBento from "./EditorialTrustBento";
import PetCareGuidesShowcase from "./PetCareGuidesShowcase";
import WeTwoPetsDesignSystemSection from "./WeTwoPetsDesignSystemSection";
import WeTwoPetsCodeShowcase from "./WeTwoPetsCodeShowcase";
import WeTwoPetsSkimReel from "./WeTwoPetsSkimReel";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";

const openEase = [0.22, 1, 0.36, 1] as const;

function OutlineFillTitle({ title }: { title: string }) {
  return (
    <motion.h2
      initial={{ color: "transparent" }}
      whileInView={{ color: "#000000" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: openEase }}
      style={{ WebkitTextStroke: "1.5px #000000" }}
      className="font-black uppercase tracking-tighter leading-[0.88] select-none text-[clamp(44px,7vw,88px)]"
    >
      {title}
    </motion.h2>
  );
}

function SectionHeader({
  eyebrow,
  title,
  takeaway,
  accentColor = "#059669",
}: {
  eyebrow: string;
  title: string;
  takeaway: string;
  accentColor?: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
        <span
          className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em]"
          style={{ color: accentColor }}
        >
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

function QuoteBlock({
  quote,
  author,
  role,
}: {
  quote: string;
  author?: string;
  role?: string;
}) {
  return (
    <div className="relative border-l-4 border-[#059669] bg-zinc-50 p-4 sm:p-5 my-6">
      <span className="font-serif text-3xl sm:text-4xl leading-none text-zinc-300 select-none block -mb-2">“</span>
      <p className="font-serif text-sm sm:text-base italic leading-relaxed text-zinc-800 font-medium">
        {quote}
      </p>
      {author ? (
        <div className="mt-2.5 pt-2 border-t border-black/10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
          <span className="font-black text-black">{author}</span>
          {role ? <span className="text-zinc-400">· {role}</span> : null}
        </div>
      ) : null}
    </div>
  );
}

function Shot({
  src,
  alt,
  label,
  caption,
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
}) {
  return (
    <figure className="flex min-w-0 flex-col border border-black/15 bg-white">
      <figcaption className="border-b border-black/15 bg-zinc-100 px-3 py-2 font-mono text-[10px] font-black uppercase tracking-wider flex items-center justify-between">
        <span className="text-black">{label}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
      </figcaption>
      <div className="relative aspect-[1440/900] bg-zinc-100">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          loading="eager"
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 560px"
        />
      </div>
      <p className="px-3 py-3 text-xs font-semibold leading-relaxed text-zinc-700 sm:text-sm">{caption}</p>
    </figure>
  );
}

const shots = [
  {
    src: "/case-studies/we-two-pets/home.jpg",
    alt: "We Two Pets homepage with a cat, pug, and golden retriever.",
    label: "Home",
    caption: "The store opens on a decision. Three promises sit under the hero: curated, guided, built around the relationship.",
  },
  {
    src: "/case-studies/we-two-pets/shop.jpg",
    alt: "We Two Pets shop grid with exclusive-import badges and rupee prices.",
    label: "Shop",
    caption: "A short grid. Exclusive imports are marked on the card. Anything still pending never reaches this page.",
  },
  {
    src: "/case-studies/we-two-pets/product.jpg",
    alt: "Space Capsule Pack product page with price, colour, and Add to Cart.",
    label: "Product",
    caption: "Colour, price, and Add to Cart stay on wetwopets.com. The recommendation under the button is the engine talking.",
  },
  {
    src: "/case-studies/we-two-pets/about.jpg",
    alt: "About page: Intentional pet care, delivered to India.",
    label: "About",
    caption: "The about page says the bet out loud. Products families in India were missing, plus practical advice.",
  },
] as const;

export default function WeTwoPetsCaseStudyView() {
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
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-black hover:text-[#059669] transition-colors group"
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
              skimMode ? "bg-[#059669] text-white shadow-sm" : "text-zinc-600 hover:text-black"
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
            className="w-full bg-[#0D2E28] text-white px-[clamp(20px,4vw,64px)] py-2.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between gap-4 select-none sticky top-0 z-30 shadow-md"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
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
        <WeTwoPetsSkimReel onExpandFullStory={() => handleSkimToggle(false)} />
      ) : (
        <div className="w-full space-y-0">
          {/* ─── HERO: Swiss Editorial Display ─── */}
          <section className="w-full px-[clamp(20px,4vw,64px)] py-10 sm:py-14 md:py-16 bg-white border-b border-black/15 space-y-8 sm:space-y-10">
            {/* Header Metadata Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-black/15 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
                <span className="font-black uppercase tracking-wider text-black">
                  CASE STUDY // 0→1 E-COMMERCE &amp; MULTI-AGENT PIPELINE
                </span>
              </div>
              <span className="px-2.5 py-0.5 bg-[#0D2E28] text-white font-black uppercase tracking-wider text-[10px] border border-black/10">
                Delhi Luxury Pet Commerce
              </span>
            </div>

            {/* Title with Handwritten Cursive Accent */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl min-[380px]:text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-black leading-[0.9] flex items-baseline flex-wrap gap-2">
                <span>We Two Pets</span>
                <span className="font-serif italic lowercase text-2xl sm:text-4xl md:text-5xl text-[#059669] font-normal tracking-normal select-none">
                  delhi luxury
                </span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#059669] shrink-0" />
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 leading-snug">
                “0→1 pet commerce for India: an editorial store, an autonomous sourcing engine, and a 2-human veto desk.”
              </p>
            </div>

            {/* ─── HIGHLIGHTED METADATA STRIP: Role, Team & Ownership ─── */}
            <div className="border border-black/20 bg-zinc-50/80 p-5 sm:p-7 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start font-mono">
                {/* 1. ROLE */}
                <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-black/15 pb-5 lg:pb-0 lg:pr-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
                    <span className="text-xs font-black uppercase tracking-widest text-[#059669]">
                      ROLE &amp; RESPONSIBILITY
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black leading-tight tracking-tight">
                    Sole Designer &amp; Full-Stack Builder
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-black/15 text-xs font-black text-zinc-900 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                    <span>0→1 Brand &amp; Multi-Agent Pipeline Architect</span>
                  </div>
                </div>

                {/* 2. TEAM & OWNERSHIP */}
                <div className="lg:col-span-5 space-y-2.5 border-b lg:border-b-0 lg:border-r border-black/15 pb-5 lg:pb-0 lg:pr-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
                    <span className="text-xs font-black uppercase tracking-widest text-[#059669]">
                      TEAM COMPOSITION &amp; SCOPE OWNED
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-black text-zinc-950 leading-snug">
                    2 Founders · Brand, Autonomous Agents, Curation Desk &amp; Storefront
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-700 font-sans leading-relaxed pt-1">
                    <strong className="font-mono font-black text-zinc-900">End-to-End Scope: </strong>
                    Engineered the multi-agent sourcing pipeline (Trend, Scraper, Catalog), 2-human margin approval desk, 1-page OTP checkout, and Chennai fulfillment hub.
                  </p>
                </div>

                {/* 3. PRODUCTION & VERIFICATION */}
                <div className="lg:col-span-3 space-y-3 flex flex-col justify-between h-full">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span className="text-xs font-black uppercase tracking-widest text-zinc-800">
                        VERIFIED PRODUCTION
                      </span>
                    </div>
                    <span className="text-xs text-zinc-500 font-medium block">
                      Live in New Delhi &amp; Chennai Hub
                    </span>
                  </div>

                  <a
                    href="https://www.wetwopets.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-2 px-4 py-3 bg-[#059669] hover:bg-black text-white font-mono text-xs sm:text-sm font-black uppercase tracking-wider transition-all shadow-md border border-black/20 group cursor-pointer"
                  >
                    <span>wetwopets.com</span>
                    <ArrowUpRight weight="bold" className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* KPI Strip: 4 Equal Columns, Big Numbers on Hairlines with Green accents */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-black/15 font-mono">
              <div className="space-y-1.5 border-l-2 border-[#059669]/40 pl-3 sm:pl-4 min-w-0">
                <span className="text-[clamp(28px,3.8vw,56px)] font-black text-black tracking-tight block leading-none whitespace-nowrap">
                  3 Agents
                </span>
                <span className="text-xs sm:text-[13px] font-black uppercase text-zinc-900 block leading-snug tracking-wide">
                  Autonomous Sourcing
                </span>
                <span className="text-[11px] sm:text-xs text-[#059669] font-black uppercase tracking-wider block">
                  Trend, Scraper, &amp; Catalog
                </span>
              </div>

              <div className="space-y-1.5 border-l-2 border-[#059669]/40 pl-3 sm:pl-4 min-w-0">
                <span className="text-[clamp(28px,3.8vw,56px)] font-black text-black tracking-tight block leading-none whitespace-nowrap">
                  2-Human Desk
                </span>
                <span className="text-xs sm:text-[13px] font-black uppercase text-zinc-900 block leading-snug tracking-wide">
                  Approval Threshold
                </span>
                <span className="text-[11px] sm:text-xs text-[#0D2E28] font-black uppercase tracking-wider block">
                  Double human margin veto
                </span>
              </div>

              <div className="space-y-1.5 border-l-2 border-[#059669]/40 pl-3 sm:pl-4 min-w-0">
                <span className="text-[clamp(28px,3.8vw,56px)] font-black text-black tracking-tight block leading-none whitespace-nowrap">
                  0 Drift
                </span>
                <span className="text-xs sm:text-[13px] font-black uppercase text-zinc-900 block leading-snug tracking-wide">
                  Brand Protection
                </span>
                <span className="text-[11px] sm:text-xs text-[#059669] font-black uppercase tracking-wider block">
                  Zero junk product slip-through
                </span>
              </div>

              <div className="space-y-1.5 border-l-2 border-[#059669]/40 pl-3 sm:pl-4 min-w-0">
                <span className="text-[clamp(28px,3.8vw,56px)] font-black text-black tracking-tight block leading-none whitespace-nowrap">
                  38+ Guides
                </span>
                <span className="text-xs sm:text-[13px] font-black uppercase text-zinc-900 block leading-snug tracking-wide">
                  SEO Trust Engine
                </span>
                <span className="text-[11px] sm:text-xs text-[#0D2E28] font-black uppercase tracking-wider block">
                  Organic pet care authority
                </span>
              </div>
            </div>
          </section>

          {/* ─── 01 THE JOURNEY ─── */}
          <section id="journey" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="01 — THE JOURNEY"
                  title="THE JOURNEY"
                  takeaway="Why generic templates fail Indian pet commerce."
                  accentColor="#059669"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-sans">
                  The job was never to install a Shopify template. Generic e-commerce themes assume every SKU in a supplier CSV is sellable and push checkout to Amazon. We engineered an intentional journey where each stage safeguards trust.
                </p>

                <QuoteBlock quote="Indian pet retail already looks like an orange marketplace full of knockoffs. Our mandate was an editorial home where only human-vetted products exist." />

                <div className="overflow-x-auto border-t border-b border-black/15">
                  <table className="w-full min-w-[720px] text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-black/20 font-mono uppercase text-[10px] tracking-wider text-zinc-500">
                        <th className="py-3 pr-3 font-bold">Stage</th>
                        <th className="py-3 pr-3 font-bold">Goal</th>
                        <th className="py-3 pr-3 font-bold">Pain Point</th>
                        <th className="py-3 pr-3 font-bold">What Shipped</th>
                        <th className="py-3 font-bold">Why a Template Fails</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200">
                      {weTwoJourney.map((row) => (
                        <tr key={row.stage} className="hover:bg-zinc-50/60 transition-colors align-top">
                          <td className="py-4 pr-3 font-mono font-black text-[#059669] uppercase text-xs">{row.stage}</td>
                          <td className="py-4 pr-3 text-zinc-800 font-medium">{row.goal}</td>
                          <td className="py-4 pr-3 text-zinc-600">{row.pain}</td>
                          <td className="py-4 pr-3 text-zinc-800 font-medium">{row.shipped}</td>
                          <td className="py-4 text-zinc-700 bg-zinc-50/40 pl-3">{row.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 02 THE STOREFRONT ─── */}
          <section id="storefront" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="02 — THE STOREFRONT"
                  title="STOREFRONT"
                  takeaway="High-contrast editorial commerce with zero marketplace clutter."
                  accentColor="#0D2E28"
                />
              </div>

              <div className="lg:col-span-7 space-y-8">
                <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-sans">
                  The live storefront is built on warm ivory tones, serif hierarchy, and deep forest contrast. We intentionally excluded pet food to bypass regulatory gray zones, focusing strictly on functional gear, calming routines, and curated pet lifestyle items.
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {shots.map((shot) => (
                    <Shot key={shot.src} {...shot} />
                  ))}
                </div>

                {/* Live Storefront Modules */}
                <div className="space-y-8 pt-4 border-t border-black/15">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#059669]" />
                      <span className="font-mono text-xs font-black uppercase tracking-wider text-[#059669]">
                        LIVE STORE MODULE 01 · TRUST ARCHITECTURE
                      </span>
                    </div>
                    <EditorialTrustBento />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0D2E28]" />
                      <span className="font-mono text-xs font-black uppercase tracking-wider text-[#0D2E28]">
                        LIVE STORE MODULE 02 · PET CARE GUIDES (&quot;KNOW BEFORE YOU BUY&quot;)
                      </span>
                    </div>
                    <PetCareGuidesShowcase />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 03 THE 3 CHALLENGES ─── */}
          <section id="challenges" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="03 — THE CHALLENGES"
                  title="CHALLENGES"
                  takeaway="Three friction points solved with intentional architecture."
                  accentColor="#059669"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-sans">
                  Three critical problems defined the product: owning the order directly, engineering a multi-model AI sourcing engine with a human veto gate, and establishing Chennai fulfillment transparency.
                </p>

                <ChallengeWindowStack challenges={weTwoChallenges} />
              </div>
            </div>
          </section>

          {/* ─── 04 THE AI PIPELINE ─── */}
          <section id="ai-pipeline" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="04 — THE AI PIPELINE"
                  title="THE AI ENGINE"
                  takeaway="Global crawl to Gemini multimodal scoring and human veto."
                  accentColor="#0D2E28"
                />
              </div>

              <div className="lg:col-span-7 space-y-8">
                <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-sans">
                  AI is an autonomous operational pipeline at We Two Pets. The engine handles global multi-region crawls, runs multimodal computer vision against Indian competitors, and delivers personalized recommendation feeds for Paws Plus members.
                </p>

                {/* AI Pipeline 6-Phase Flow Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {weTwoAIFlow.map((item) => (
                    <div
                      key={item.step}
                      className="border border-black/15 bg-zinc-50 p-4 sm:p-5 flex flex-col justify-between hover:bg-white transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-2 mb-3">
                          <span className="font-mono text-[10px] font-black uppercase text-[#059669]">
                            STAGE {item.step}
                          </span>
                          <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase">
                            {item.phase}
                          </span>
                        </div>
                        <h4 className="font-serif text-base font-bold text-[#0D2E28] leading-tight">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-zinc-600 font-medium">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-dashed border-zinc-200">
                        <p className="font-mono text-[10px] text-zinc-500">
                          <strong className="text-zinc-800">Stack:</strong> {item.tech}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Real Multi-Agent Code Snippets & Architecture */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-2 font-mono text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                    <span className="w-2 h-2 bg-[#059669] inline-block" />
                    <span>PRODUCTION CODEBASE INSPECTION · MULTI-AGENT INGESTION &amp; GOVERNANCE</span>
                  </div>
                  <WeTwoPetsCodeShowcase />
                </div>

                {/* Legal & Regulatory Constraint: The No-Food Policy */}
                <div className="border border-black/15 bg-zinc-50 p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#0D2E28]">
                    <span className="px-2 py-0.5 bg-[#0D2E28] text-white text-[10px] font-black">LEGAL CONSTRAINT</span>
                    <span>Why We Two Pets Strictly Excluded Pet Food &amp; Treats</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    Importing animal-origin food into India mandates Sanitary Import Permits (SIP) and mandatory AQCS quarantine inspections. Building a brand on gray-market food imports creates severe liability. By engineering strict keyword vetoes into our ingestion taxonomy, the AI pipeline permanently rejects all consumable food, treats, and animal-origin chews—focusing 100% of our catalog on durable gear, calming furniture, smart enrichment, and travel safety.
                  </p>
                </div>

                {/* Codebase Deep-Dive: Scoring Formula */}
                <div className="border border-black/15 bg-zinc-50 p-5 sm:p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Cpu size={20} className="text-[#059669]" />
                    <h4 className="font-serif text-lg font-bold text-[#0D2E28]">
                      From the Code: Personalization &amp; Recommendation Engine (api/cron/recommendations)
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    We inspect member preferences in Supabase (<code className="bg-zinc-200 px-1 py-0.5 text-black font-mono text-[11px]">pet_type</code>, <code className="bg-zinc-200 px-1 py-0.5 text-black font-mono text-[11px]">pet_size</code>, <code className="bg-zinc-200 px-1 py-0.5 text-black font-mono text-[11px]">budget_range</code>) and correlate them with real-time user intent signals to calculate an authentic recommendation score:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
                    <div className="bg-white border border-black/15 p-3">
                      <span className="text-[10px] text-zinc-500 uppercase block">Interest Match</span>
                      <span className="font-bold text-[#059669] text-sm">+0.30</span>
                      <p className="text-[10px] text-zinc-500 mt-1 font-sans">Category aligns with pet parent preference tags</p>
                    </div>
                    <div className="bg-white border border-black/15 p-3">
                      <span className="text-[10px] text-zinc-500 uppercase block">High Intent Signals</span>
                      <span className="font-bold text-[#059669] text-sm">+0.25</span>
                      <p className="text-[10px] text-zinc-500 mt-1 font-sans">Abandoned in cart or active in member wishlist</p>
                    </div>
                    <div className="bg-white border border-black/15 p-3">
                      <span className="text-[10px] text-zinc-500 uppercase block">AI Quality Score</span>
                      <span className="font-bold text-[#059669] text-sm">+0.10</span>
                      <p className="text-[10px] text-zinc-500 mt-1 font-sans">Weighted against Gemini multimodal inspection</p>
                    </div>
                    <div className="bg-white border border-black/15 p-3">
                      <span className="text-[10px] text-zinc-500 uppercase block">Hard Anti-Loop Veto</span>
                      <span className="font-bold text-[#0D2E28] text-sm">-1.00</span>
                      <p className="text-[10px] text-zinc-500 mt-1 font-sans">Purchased items never repeated in member feeds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 05 IA & USER FLOWS ─── */}
          <section id="ia-and-flows" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="05 — ARCHITECTURE"
                  title="ARCHITECTURE"
                  takeaway="Clean separation between customer storefront and ops approval desk."
                  accentColor="#059669"
                />
              </div>

              <div className="lg:col-span-7 space-y-8">
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                  Four surfaces share one central truth. The shop only displays what has achieved live status. The AI engine can suggest and evaluate. The curation desk signs off. Tailz provides grounded conversational support.
                </p>

                <div className="space-y-4">
                  <h3 className="font-mono text-xs font-black uppercase tracking-wider text-black">
                    Information Architecture
                  </h3>
                  <IADiagram root="One live catalog" subtitle="Pending items are invisible to public storefront" columns={weTwoIA} />
                </div>

                <div className="space-y-4 pt-4 border-t border-black/15">
                  <h3 className="font-mono text-xs font-black uppercase tracking-wider text-black">
                    User Flows
                  </h3>
                  <UserFlowDiagram flows={weTwoFlows} />
                </div>
              </div>
            </div>
          </section>

          {/* ─── 06 DESIGN DECISIONS ─── */}
          <section id="decisions" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="06 — THE DECISIONS"
                  title="THE DECISIONS"
                  takeaway="Why behind every choice: brand promises as engineering constraints."
                  accentColor="#0D2E28"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-sans">
                  Every constraint in We Two Pets was a design decision — not a technical limitation. Here&apos;s the reasoning behind the three biggest calls that shaped the product.
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {/* Decision 1 */}
                  <div className="flex flex-col border border-black/15 bg-zinc-50">
                    <div className="border-b border-black/15 bg-[#059669] px-4 py-3">
                      <p className="font-mono text-[10px] font-black uppercase tracking-widest text-white">Decision 01</p>
                      <h4 className="mt-1 font-serif text-base font-bold leading-snug text-white">
                        Two human veto votes — not one, not AI alone
                      </h4>
                    </div>
                    <div className="flex flex-1 flex-col p-4 space-y-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">User Need</p>
                        <p className="text-xs leading-relaxed text-zinc-700">
                          Pet owners buying imported gear need to trust curation completely. One approver creates a single point of bias; AI alone creates hallucinations.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-black/10">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">The Call</p>
                        <p className="text-xs leading-relaxed text-zinc-700">
                          Two humans must vote &quot;yes&quot; before any product goes live. The AI quality score surfaces candidates, but never publishes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decision 2 */}
                  <div className="flex flex-col border border-black/15 bg-zinc-50">
                    <div className="border-b border-black/15 bg-[#0D2E28] px-4 py-3">
                      <p className="font-mono text-[10px] font-black uppercase tracking-widest text-white">Decision 02</p>
                      <h4 className="mt-1 font-serif text-base font-bold leading-snug text-white">
                        pHash vision check before human review
                      </h4>
                    </div>
                    <div className="flex flex-1 flex-col p-4 space-y-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">Constraint</p>
                        <p className="text-xs leading-relaxed text-zinc-700">
                          Indian pet parents lose trust fast if they find the same product cheaper on Amazon.in or HUFT. Title matching failed because suppliers rename items.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-black/10">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">The Call</p>
                        <p className="text-xs leading-relaxed text-zinc-700">
                          Combined perceptual image hashing (pHash) with NLP overlap. Competitor hits auto-reject candidates before humans review them.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decision 3 */}
                  <div className="flex flex-col border border-black/15 bg-zinc-50">
                    <div className="border-b border-black/15 bg-black px-4 py-3">
                      <p className="font-mono text-[10px] font-black uppercase tracking-widest text-white">Decision 03</p>
                      <h4 className="mt-1 font-serif text-base font-bold leading-snug text-white">
                        1-page OTP checkout on our domain
                      </h4>
                    </div>
                    <div className="flex flex-1 flex-col p-4 space-y-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">User Need</p>
                        <p className="text-xs leading-relaxed text-zinc-700">
                          Indian mobile shoppers abandon email forms. Affiliate redirects to Amazon would have made us a blog with a logo.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-black/10">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1">The Call</p>
                        <p className="text-xs leading-relaxed text-zinc-700">
                          Single-URL checkout: cart → phone OTP → Cashfree or COD. We own every order on wetwopets.com, protecting repeat purchase loops.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <QuoteBlock
                  quote="The AI doesn't publish. Two people vote. A constraint set by the brand promise, not the tech stack — and the architecture follows from that."
                  author="Santhosh A"
                  role="Design Engineer"
                />
              </div>
            </div>
          </section>

          {/* ─── 07 DESIGN SYSTEM ─── */}
          <section id="design-system" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="07 — DESIGN SYSTEM"
                  title="DESIGN SYSTEM"
                  takeaway="Deep Forest tokens, editorial typography, and component states."
                  accentColor="#059669"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">
                  Every component in We Two Pets is engineered with intentional restraint: zero rounded corners, crisp 1px borders, deep forest palettes, and high-readability typography. Explore the live interactive foundations below:
                </p>
                <WeTwoPetsDesignSystemSection />
              </div>
            </div>
          </section>

          {/* ─── 08 CODE & TECH STACK ─── */}
          <section id="tech-stack" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="08 — TECH STACK"
                  title="TECH STACK"
                  takeaway="Next.js App Router, Supabase queues, and Gemini multimodal vision."
                  accentColor="#0D2E28"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm sm:text-base leading-relaxed text-zinc-700">
                  Storefront on Next.js with Tailwind CSS. Database, auth, and real-time queues on Supabase. AI pipeline running on FastAPI with Gemini. Payment via Cashfree &amp; COD. Shipping logistics via Shiprocket and transactional alerts via Resend.
                </p>

                <StackToolsSkills skills={weTwoSkills} tools={weTwoTools} />

                <div className="grid gap-3 md:grid-cols-3 pt-2">
                  {weTwoPrinciples.map((principle) => (
                    <p key={principle} className="border border-black/15 bg-zinc-50 p-4 text-xs sm:text-sm font-semibold leading-relaxed text-zinc-800">
                      {principle}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ─── 09 VERIFIED OUTCOMES ─── */}
          <section id="outcomes" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="09 — OUTCOMES"
                  title="THE RESULTS"
                  takeaway="100% direct checkout, zero duplicate imports, and brand trust."
                  accentColor="#059669"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <ul className="space-y-2.5">
                  {[
                    "Customers check out directly on wetwopets.com. They are never bounced to foreign affiliate dropshipping pages.",
                    "AI agents write strictly to staging queues. Two human approvals are required before any listing goes live.",
                    "Consumable pet foods and treats are excluded to prevent regulatory compliance compromises.",
                    "Order tracking explicitly clarifies the Chennai Quality Hub step and custom unboxing timeline.",
                    "Tailz AI assistant is strictly bound to the live database, preventing price hallucinations.",
                  ].map((line) => (
                    <li key={line} className="flex gap-2.5 text-xs sm:text-sm text-zinc-800 bg-zinc-50 p-3 border-l-2 border-[#059669]">
                      <CheckCircle weight="fill" className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="border border-dashed border-zinc-400 bg-zinc-50 p-4 space-y-2">
                  <p className="font-mono text-[10px] font-black uppercase text-zinc-500">Documented Scope Boundaries</p>
                  <ul className="space-y-1 text-xs font-semibold text-zinc-600">
                    <li>· Pageviews and conversion rates are proprietary and kept private.</li>
                    <li>· Catalog sizes are intentionally restrained to maintain 100% human-verified quality.</li>
                    <li>· No ungrounded LLM customer chat: conversational responses are tied strictly to active orders.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="w-full px-[clamp(20px,4vw,64px)] pt-12">
        <CaseStudyFooterNav
          currentTitle="We Two Pets · Intentional Pet Care Commerce"
          currentSubtitle="Designed & Built by Santhosh A · 0→1 Editorial D2C Brand & AI Sourcing Engine"
          prev={{
            company: "Parla Retail · Video Commerce",
            project: "Show & Sell Assisted Selling",
            summary: "Bridging retail e-commerce and instant human trust via 1-click scheduling, video consultation, and in-call checkout.",
            href: "/case-studies/parla-show-and-sell",
          }}
          next={{
            company: "Sivakasi Town · D2C PWA",
            project: "Vidya's Kitchen PWA",
            summary: "First-ever home food delivery app in Sivakasi — PWA, kitchen dashboard, driver app, real-time WhatsApp dispatch.",
            href: "/case-studies/vidyas-kitchen-pwa",
          }}
        />
      </div>
    </main>
  );
}
