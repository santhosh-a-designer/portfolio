"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowSquareOut,
  Sparkle,
  Cpu,
  CheckCircle,
  ShieldCheck,
  Robot,
  Users,
  Eye,
  MagnifyingGlass,
  Tag,
  ArrowsClockwise,
} from "@phosphor-icons/react";
import ChallengeWindowStack from "@/components/vidyas-kitchen/ChallengeWindowStack";
import IADiagram from "@/components/vidyas-kitchen/IADiagram";
import StackToolsSkills from "@/components/vidyas-kitchen/StackToolsSkills";
import UserFlowDiagram from "@/components/vidyas-kitchen/UserFlowDiagram";
import {
  weTwoAgents,
  weTwoChallenges,
  weTwoColors,
  weTwoFeedback,
  weTwoFlows,
  weTwoIA,
  weTwoJourney,
  weTwoPrinciples,
  weTwoResearch,
  weTwoScrape,
  weTwoSkills,
  weTwoTools,
  weTwoAIFlow,
} from "@/lib/weTwoPetsCaseStudyContent";

import EditorialTrustBento from "./EditorialTrustBento";
import PetCareGuidesShowcase from "./PetCareGuidesShowcase";
import WeTwoPetsDesignSystemSection from "./WeTwoPetsDesignSystemSection";
import WeTwoPetsCodeShowcase from "./WeTwoPetsCodeShowcase";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";

function SectionWindow({
  num,
  title,
  children,
  allowOverflow = false,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
  allowOverflow?: boolean;
}) {
  return (
    <section
      className={`border-2 border-black bg-white shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] ${
        allowOverflow ? "overflow-visible" : "overflow-hidden"
      }`}
    >
      <div className="flex h-10 items-center gap-2 border-b-2 border-black bg-[#E2E8F0] px-3 font-mono text-xs select-none sm:h-11 sm:px-4">
        <span className="bg-[#FF462D] px-2 py-0.5 text-[10px] font-bold text-white">{num}</span>
        <span className="truncate font-bold uppercase tracking-wider text-black">{title}</span>
      </div>
      <div className="p-4 sm:p-8 md:p-10">{children}</div>
    </section>
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
    <div className="relative border-l-4 border-[#0D2E28] bg-[#FAF9F5] p-4 sm:p-5 my-6 shadow-[2px_2px_0_0_#000]">
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
    <figure className="flex min-w-0 flex-col border-2 border-black bg-[#FAF9F5]">
      <figcaption className="border-b-2 border-black bg-[#FAED00] px-3 py-2 font-mono text-[10px] font-black uppercase tracking-wider">
        {label}
      </figcaption>
      <div className="relative aspect-[1440/900] bg-[#F3EEE4]">
        <Image
          src={src}
          alt={alt}
          fill
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
  return (
    <main className="mx-auto min-w-0 max-w-[1240px] space-y-8 px-3 pb-28 pt-4 sm:space-y-12 sm:px-6 sm:pb-32 sm:pt-6 md:pt-8 lg:px-8">
      {/* Top Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-4 font-mono select-none">
        <Link
          href="/#work"
          onClick={() => {
            try {
              sessionStorage.setItem("portfolio:scrollToWork", "1");
            } catch {
              /* */
            }
          }}
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black hover:text-[#FF462D] sm:text-sm"
        >
          <ArrowLeft weight="bold" className="h-4 w-4" />
          Back to selected work
        </Link>
        <a
          href="https://www.wetwopets.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-black sm:text-xs"
        >
          wetwopets.com
          <ArrowSquareOut weight="bold" className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Case Study Hero Header & STAR Executive Summary */}
      <section className="overflow-hidden border-2 border-black bg-white shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000]">
        <div className="space-y-5 p-4 text-center sm:space-y-6 sm:p-10 md:p-12">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex border-2 border-black bg-[#FF462D] px-3 py-1 font-mono text-xs font-black uppercase tracking-widest text-white">
              0→1 · Design &amp; Engineering
            </span>
            <span className="inline-flex border-2 border-black bg-[#0D2E28] px-3 py-1 font-mono text-xs font-black uppercase tracking-widest text-white">
              AI-Powered Agentic Commerce
            </span>
            <span className="inline-flex border-2 border-black bg-[#FAED00] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest sm:text-xs text-black">
              We Two Pets · India
            </span>
          </div>

          <h1 className="text-[1.7rem] font-black uppercase leading-none tracking-tight min-[380px]:text-3xl sm:text-5xl font-serif text-[#0D2E28]">
            We Two Pets
          </h1>

          <p className="mx-auto max-w-3xl text-sm font-bold italic leading-snug text-zinc-600 sm:text-lg">
            An intentional Indian D2C brand for international dog &amp; cat gear — powered by an autonomous multimodal AI sourcing engine, verified by two human curators, and fulfilled through a dedicated Chennai hub.
          </p>

          {/* Key Metric Highlights */}
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="border-2 border-black bg-[#FAF9F5] p-3 text-center shadow-[2px_2px_0_0_#000]">
              <div className="flex items-center justify-center gap-1.5 text-[#0D2E28]">
                <CheckCircle size={18} weight="fill" />
                <span className="font-mono text-xs font-black uppercase tracking-wider">100% Direct Checkout</span>
              </div>
              <p className="mt-1 text-[11px] text-zinc-600 font-medium">Bypassed affiliate links to own customer orders end-to-end</p>
            </div>
            <div className="border-2 border-black bg-[#FAF9F5] p-3 text-center shadow-[2px_2px_0_0_#000]">
              <div className="flex items-center justify-center gap-1.5 text-[#0D2E28]">
                <ShieldCheck size={18} weight="fill" />
                <span className="font-mono text-xs font-black uppercase tracking-wider">0 Duplicate Imports</span>
              </div>
              <p className="mt-1 text-[11px] text-zinc-600 font-medium">Vision hashing &amp; NLP auto-reject items already in India</p>
            </div>
            <div className="border-2 border-black bg-[#FAF9F5] p-3 text-center shadow-[2px_2px_0_0_#000]">
              <div className="flex items-center justify-center gap-1.5 text-[#0D2E28]">
                <Users size={18} weight="fill" />
                <span className="font-mono text-xs font-black uppercase tracking-wider">2-Human Veto Gate</span>
              </div>
              <p className="mt-1 text-[11px] text-zinc-600 font-medium">AI scores candidates; two humans must vote before launch</p>
            </div>
          </div>

          {/* STAR Methodology Breakdown Bento */}
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 text-left pt-2">
            <div className="border-2 border-black bg-zinc-50 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#FF462D] text-white px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-widest">
                  S · SITUATION
                </span>
                <h4 className="mt-2 font-serif text-base font-bold text-zinc-900 leading-snug">
                  Fragmented Indian Pet Market &amp; Affiliate Dropshipping Trap
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700">
                  Indian pet parents seeking high-end international gear face generic, noisy marketplaces saturated with mass-produced items. Buying from overseas meant 30-day delivery waits, customs duty surprises, and zero brand accountability.
                </p>
              </div>
              <p className="mt-3 font-mono text-[11px] font-bold text-[#FF462D]">
                Challenge: How to deliver curated global pet gear under a trusted Indian brand?
              </p>
            </div>

            <div className="border-2 border-black bg-[#FAF9F5] p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#0D2E28] text-white px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-widest">
                  T · TASK
                </span>
                <h4 className="mt-2 font-serif text-base font-bold text-zinc-900 leading-snug">
                  Full-Stack D2C Brand, AI Sourcing &amp; Transparent Hub
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700">
                  Build an editorial e-commerce platform that takes payments directly on our domain, crawls international boutique catalogs nightly via AI, verifies unique gaps against Indian competitors, and fulfills through our Chennai hub.
                </p>
              </div>
              <p className="mt-3 font-mono text-[11px] font-bold text-[#0D2E28]">
                Mandate: Own the order, filter noise with AI, and mandate human approvals.
              </p>
            </div>

            <div className="border-2 border-black bg-[#FAF9F5] p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#1976D2] text-white px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-widest">
                  A · ACTION
                </span>
                <h4 className="mt-2 font-serif text-base font-bold text-zinc-900 leading-snug">
                  Next.js Storefront, 1-Page Checkout &amp; Multi-Model Engine
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700">
                  Shipped a 1-page phone OTP checkout (Cashfree &amp; COD). Engineered Pet Engine: Gemini multimodal vision generates 0–100 quality scores; pHash vision checks Amazon.in/HUFT; 2 curators vote on private desk; cron personalizes Paws Plus recommendations.
                </p>
              </div>
              <p className="mt-3 font-mono text-[11px] font-bold text-[#1976D2]">
                Craft: Deep Forest design system, Tailz support assistant, and unboxing hub.
              </p>
            </div>

            <div className="border-2 border-black bg-[#FAED00]/25 p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-black text-[#FAED00] px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-widest">
                  R · RESULT
                </span>
                <h4 className="mt-2 font-serif text-base font-bold text-zinc-900 leading-snug">
                  100% Brand Ownership &amp; Zero Duplicate Catalog
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700">
                  Zero checkout leakage to third-party marketplaces. A 100% human-vetted catalog where every product is an authentic import. Launched the Paws Plus membership tier offering AI-tailored weekly drops and member benefits.
                </p>
              </div>
              <p className="mt-3 font-mono text-[11px] font-bold text-black">
                Outcome: A production D2C experience trusted by modern pet families across India.
              </p>
            </div>
          </div>

          <QuoteBlock
            quote="The job was never to build a cute pet shop. It was to own the order, filter out the noise with multimodal AI, and make sure every single product earns its place through two human votes."
            author="Santhosh A"
            role="Product Designer & Full-Stack Builder"
          />

          <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-2 font-mono text-xs md:grid-cols-4 sm:gap-3">
            <div className="flex min-h-[72px] flex-col items-center justify-center border-2 border-black bg-[#FAED00] p-3 text-center">
              <span className="mb-1 block text-[10px] uppercase text-black/60">Category</span>
              <span className="font-black leading-snug">Dog &amp; Cat Gear</span>
            </div>
            <div className="flex min-h-[72px] flex-col items-center justify-center border-2 border-black p-3 text-center">
              <span className="mb-1 block text-[10px] uppercase text-zinc-500">Exclusions</span>
              <span className="font-black leading-snug">Food &amp; Consumables</span>
            </div>
            <div className="flex min-h-[72px] flex-col items-center justify-center border-2 border-black p-3 text-center">
              <span className="mb-1 block text-[10px] uppercase text-zinc-500">Role</span>
              <span className="font-black leading-snug">Design &amp; Engineering</span>
            </div>
            <a
              href="https://www.wetwopets.com/"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[72px] flex-col items-center justify-center border-2 border-black bg-black p-3 text-center text-white hover:bg-zinc-900"
            >
              <span className="font-black uppercase">Live Site</span>
              <ArrowSquareOut weight="bold" className="mt-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 01: Why a Marketplace Was Not the Product */}
      <SectionWindow num="01" title="Customer Journey: Why a Template Fails">
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
          The job was never to install a Shopify template. Generic e-commerce themes assume every SKU in a supplier CSV is sellable and push checkout to Amazon. We engineered an intentional journey where each stage safeguards trust.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-black font-mono text-[10px] uppercase tracking-wider">
                <th className="py-2 pr-3">Stage</th>
                <th className="py-2 pr-3">Goal</th>
                <th className="py-2 pr-3">Pain Point</th>
                <th className="py-2 pr-3">What Shipped</th>
                <th className="py-2">Why a Generic Template Fails</th>
              </tr>
            </thead>
            <tbody>
              {weTwoJourney.map((row) => (
                <tr key={row.stage} className="border-b border-zinc-200 align-top">
                  <td className="py-3 pr-3 font-black text-[#FF462D]">{row.stage}</td>
                  <td className="py-3 pr-3 text-zinc-800">{row.goal}</td>
                  <td className="py-3 pr-3 text-zinc-600">{row.pain}</td>
                  <td className="py-3 pr-3 text-zinc-800">{row.shipped}</td>
                  <td className="bg-[#FAF9F5] py-3 font-semibold text-zinc-800">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWindow>

      {/* Section 02: Storefront Walkthrough & Editorial Modules */}
      <SectionWindow num="02" title="The Storefront: High-Contrast Editorial Commerce">
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
          The live storefront is built on warm ivory tones, serif hierarchy, and deep forest contrast. We intentionally excluded pet food to bypass regulatory gray zones, focusing strictly on functional gear, calming routines, and curated pet lifestyle items.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {shots.map((shot) => (
            <Shot key={shot.src} {...shot} />
          ))}
        </div>

        {/* Live Storefront Modules */}
        <div className="mt-10 space-y-10 border-t-2 border-black/15 pt-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-[#0D2E28] text-white px-2 py-0.5 border border-black">
                LIVE STORE MODULE 01
              </span>
              <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider">
                Editorial Trust Architecture &amp; Social Proof Bento
              </span>
            </div>
            <EditorialTrustBento />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[10px] font-black uppercase tracking-wider bg-[#FF462D] text-white px-2 py-0.5 border border-black">
                LIVE STORE MODULE 02
              </span>
              <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider">
                Content Strategy · Pet Care Guides (&quot;Know Before You Buy&quot;)
              </span>
            </div>
            <PetCareGuidesShowcase />
          </div>
        </div>
      </SectionWindow>

      {/* Section 03: The Three Core Design & Engineering Challenges */}
      <SectionWindow num="03" title="The Three Core Challenges" allowOverflow>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-sm text-zinc-600">
            Three critical problems defined the product: owning the order directly, engineering a multi-model AI sourcing engine with a human veto gate, and establishing Chennai fulfillment transparency.
          </p>
          <p className="flex shrink-0 items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF462D]" />
            Stacking windows scroll ↓
          </p>
        </div>
        <ChallengeWindowStack challenges={weTwoChallenges} />
      </SectionWindow>

      {/* Section 04: The Multi-Model AI Architecture & Flow */}
      <SectionWindow num="04" title="How the AI Flow Works: Global Crawl to Tailz Assistant">
        <div className="space-y-6">
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            AI is not a buzzword in We Two Pets; it is an autonomous operational pipeline. The engine handles global multi-region crawls, runs multimodal computer vision against Indian competitors, and delivers personalized recommendation feeds for Paws Plus members.
          </p>

          {/* AI Pipeline 6-Phase Flow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {weTwoAIFlow.map((item) => (
              <div
                key={item.step}
                className="border-2 border-black bg-white p-4 sm:p-5 flex flex-col justify-between shadow-[3px_3px_0_0_#000]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-2 mb-3">
                    <span className="font-mono text-[10px] font-black uppercase text-[#FF462D]">
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
              <span className="w-2 h-2 bg-[#FF462D] inline-block" />
              <span>PRODUCTION CODEBASE INSPECTION · MULTI-AGENT INGESTION &amp; GOVERNANCE</span>
            </div>
            <WeTwoPetsCodeShowcase />
          </div>

          {/* Hard Business & Regulatory Constraint Callout: The No-Food Policy */}
          <div className="border-2 border-black bg-[#FAF9F5] p-4 sm:p-5 shadow-[3px_3px_0_0_#000]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#FF462D]">
              <span className="px-2 py-0.5 bg-[#FF462D] text-white text-[10px] font-black">LEGAL CONSTRAINT</span>
              <span>Why We Two Pets Strictly Excluded Pet Food &amp; Treats</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-zinc-700 leading-relaxed">
              Early competitor research revealed that importing animal-origin food into India mandates Sanitary Import Permits (SIP) and mandatory AQCS quarantine inspections. Building a brand on gray-market food imports creates severe liability. By engineering strict keyword vetoes into our ingestion taxonomy, the AI pipeline permanently rejects all consumable food, treats, and animal-origin chews—focusing 100% of our catalog on durable gear, calming furniture, smart enrichment, and travel safety.
            </p>
          </div>

          {/* Codebase Deep-Dive: Scoring Formula & Real-World Guardrails */}
          <div className="border-2 border-black bg-[#FAF9F5] p-5 sm:p-6 shadow-[3px_3px_0_0_#000]">
            <div className="flex items-center gap-2 mb-3">
              <Cpu size={20} className="text-[#0D2E28]" />
              <h4 className="font-serif text-lg font-bold text-[#0D2E28]">
                From the Code: Personalization &amp; Recommendation Engine (api/cron/recommendations)
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed max-w-3xl">
              We inspect member preferences in Supabase (<code className="bg-zinc-200 px-1 py-0.5 text-black font-mono text-[11px]">pet_type</code>, <code className="bg-zinc-200 px-1 py-0.5 text-black font-mono text-[11px]">pet_size</code>, <code className="bg-zinc-200 px-1 py-0.5 text-black font-mono text-[11px]">budget_range</code>) and correlate them with real-time user intent signals to calculate an authentic recommendation score:
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
              <div className="bg-white border border-black p-3">
                <span className="text-[10px] text-zinc-500 uppercase block">Interest Match</span>
                <span className="font-bold text-[#0D2E28] text-sm">+0.30</span>
                <p className="text-[10px] text-zinc-500 mt-1 font-sans">Category aligns with pet parent preference tags</p>
              </div>
              <div className="bg-white border border-black p-3">
                <span className="text-[10px] text-zinc-500 uppercase block">High Intent Signals</span>
                <span className="font-bold text-[#0D2E28] text-sm">+0.25</span>
                <p className="text-[10px] text-zinc-500 mt-1 font-sans">Abandoned in cart or active in member wishlist</p>
              </div>
              <div className="bg-white border border-black p-3">
                <span className="text-[10px] text-zinc-500 uppercase block">AI Quality Score</span>
                <span className="font-bold text-[#0D2E28] text-sm">+0.10</span>
                <p className="text-[10px] text-zinc-500 mt-1 font-sans">Weighted against Gemini multimodal visual inspection</p>
              </div>
              <div className="bg-white border border-black p-3">
                <span className="text-[10px] text-zinc-500 uppercase block">Hard Anti-Loop Veto</span>
                <span className="font-bold text-[#FF462D] text-sm">-1.00</span>
                <p className="text-[10px] text-zinc-500 mt-1 font-sans">Purchased items never repeated in member feeds</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWindow>

      {/* Section 05: Information Architecture & User Flows */}
      <SectionWindow num="05" title="Information Architecture &amp; User Flows">
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-zinc-600">
          Four surfaces share one central truth. The shop only displays what has achieved live status. The AI engine can suggest and evaluate. The curation desk signs off. Tailz provides grounded conversational support.
        </p>
        <h3 className="mb-3 text-center font-mono text-xs font-black uppercase tracking-wider">Information architecture</h3>
        <IADiagram root="One live catalog" subtitle="Pending items are invisible to public storefront" columns={weTwoIA} />
        <h3 className="mb-3 mt-8 text-center font-mono text-xs font-black uppercase tracking-wider">User flows</h3>
        <UserFlowDiagram flows={weTwoFlows} />
      </SectionWindow>

      {/* Section 06: Authentic UI Component System */}
      <SectionWindow num="06" title="Authentic UI Component Library &amp; States" allowOverflow>
        <div className="space-y-4">
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            Every component in We Two Pets is engineered with intentional restraint: zero rounded corners, crisp 1px borders, deep forest palettes, and high-readability typography. Explore the live interactive foundations below:
          </p>
          <WeTwoPetsDesignSystemSection />
        </div>
      </SectionWindow>

      {/* Section 07: Tech Stack and Principles */}
      <SectionWindow num="07" title="Technology Stack &amp; Architectural Principles">
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-700">
          Storefront on Next.js with Tailwind CSS. Database, auth, and real-time queues on Supabase. AI pipeline running on FastAPI with Gemini. Payment via Cashfree &amp; COD. Shipping logistics via Shiprocket and transactional alerts via Resend.
        </p>
        <StackToolsSkills skills={weTwoSkills} tools={weTwoTools} />

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {weTwoPrinciples.map((principle) => (
            <p key={principle} className="border-2 border-black bg-[#FAF9F5] p-4 text-sm font-semibold leading-relaxed text-zinc-800 shadow-[2px_2px_0_0_#000]">
              {principle}
            </p>
          ))}
        </div>

        <div className="mt-8 pt-5 border-t-2 border-black flex items-center justify-end">
          <a
            href="https://wetwopets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 bg-black hover:bg-zinc-800 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0_0_#000] transition-colors flex items-center justify-center gap-2"
          >
            <ArrowSquareOut size={16} weight="bold" />
            <span>VISIT LIVE STORE (WETWOPETS.COM)</span>
          </a>
        </div>
      </SectionWindow>

      {/* Section 08: What I Stand Behind */}
      <SectionWindow num="08" title="What I Stand Behind (Honest Product Scope)">
        <ul className="space-y-3">
          {[
            "Customers check out directly on wetwopets.com. They are never bounced to foreign affiliate dropshipping pages.",
            "AI agents write strictly to staging queues. Two human approvals are required before any listing goes live.",
            "Consumable pet foods and treats are excluded to prevent regulatory compliance compromises.",
            "Order tracking explicitly clarifies the Chennai Quality Hub step and custom unboxing timeline.",
            "Tailz AI assistant is strictly bound to the live database, preventing price hallucinations.",
          ].map((line) => (
            <li key={line} className="border-l-4 border-[#FF462D] pl-3 text-sm font-semibold leading-relaxed text-zinc-800">
              {line}
            </li>
          ))}
        </ul>
        <div className="mt-6 border-2 border-dashed border-zinc-400 bg-zinc-50 p-4">
          <p className="mb-2 font-mono text-[10px] font-black uppercase text-zinc-500">Documented Scope Boundaries</p>
          <ul className="space-y-1 text-xs font-semibold text-zinc-600">
            <li>· Pageviews and conversion rates are proprietary and kept private.</li>
            <li>· Catalog sizes are intentionally restrained to maintain 100% human-verified quality.</li>
            <li>· No ungrounded LLM customer chat: conversational responses are tied strictly to active orders.</li>
          </ul>
        </div>
      </SectionWindow>

      {/* Case Study Footer Navigation */}
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
    </main>
  );
}
