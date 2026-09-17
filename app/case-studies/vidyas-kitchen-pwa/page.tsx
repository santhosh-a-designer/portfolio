"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  DeviceMobile,
  Monitor,
  NavigationArrow,
  ChatCircleDots,
  ShieldCheck,
  CheckCircle,
  Lightning,
  Sparkle,
  Cpu,
  Clock,
  MapPin,
  Flame,
  Check,
} from "@phosphor-icons/react";
import HeaderV2 from "@/app/v2/components/HeaderV2";
import FloatingActionTriggers from "@/app/v2/components/FloatingActionTriggers";
import LenisProvider from "@/components/LenisProvider";

export default function VidyasKitchenCaseStudyPage() {
  const [activeSurfaceTab, setActiveSurfaceTab] = useState<"pwa" | "admin" | "driver" | "whatsapp">("pwa");

  return (
    <LenisProvider>
      <div className="min-h-screen bg-[#F4F4F0] text-black font-sans selection:bg-black selection:text-[#FAED00] antialiased relative">
        {/* Global Sticky Header & Floating Triggers */}
        <HeaderV2 />
        <FloatingActionTriggers />

        <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 pb-32 space-y-8 sm:space-y-12">
          
          {/* ─── Breadcrumb & Quick Nav Bar ─── */}
          <div className="flex items-center justify-between gap-4 border-b-2 border-black pb-4 select-none font-mono">
            <Link
              href="/v2#work"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-black hover:text-[#FF462D] transition-colors group"
            >
              <ArrowLeft weight="bold" className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>BACK TO SELECTED WORK</span>
            </Link>

            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-zinc-500 font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>PROD DEPLOYED · SIVAKASI, TAMIL NADU</span>
            </div>
          </div>

          {/* ─── HERO WINDOW // CASE STUDY HEADER ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {/* Window Chrome Titlebar */}
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-3 h-3 rounded-full bg-[#FF462D] border border-black inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FAED00] border border-black inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#00C16A] border border-black inline-block" />
                </div>
                <span className="font-bold text-black uppercase tracking-wider truncate ml-2">
                  FULL-STACK UX/UI &amp; ENGINEERING CASE STUDY
                </span>
              </div>
              <a
                href="https://vidyaskitchenhome.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 font-bold uppercase tracking-wider hover:text-[#FF462D] transition-colors shrink-0 text-[11px]"
              >
                <span>LIVE PRODUCT</span>
                <ArrowUpRight weight="bold" size={14} />
              </a>
            </div>

            {/* Hero Card Body */}
            <div className="p-6 sm:p-8 md:p-12 space-y-8">
              <div className="space-y-4 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF462D] text-white border-2 border-black font-mono text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <Flame weight="fill" className="w-4 h-4 text-[#FAED00]" />
                  <span>FULL-STACK UX/UI &amp; ENGINEERING CASE STUDY</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-black">
                  Vidya&apos;s Kitchen — Home Food Ecosystem
                </h1>

                <p className="text-base sm:text-xl md:text-2xl font-bold text-zinc-700 leading-snug">
                  Designing &amp; Building Sivakasi&apos;s First Digital Home-Chef Platform across Customer PWA, Admin Dashboard, Driver App &amp; WhatsApp Bot.
                </p>
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs pt-4 border-t-2 border-dashed border-black/30">
                <div className="p-3.5 bg-[#FAF9F5] border-2 border-black">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase block mb-1">ROLE</span>
                  <span className="font-black text-black text-sm block">Solo Designer &amp; Developer</span>
                </div>
                <div className="p-3.5 bg-[#FAF9F5] border-2 border-black">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase block mb-1">TIMELINE</span>
                  <span className="font-black text-black text-sm block">6 Months (End-to-End)</span>
                </div>
                <div className="p-3.5 bg-[#FAF9F5] border-2 border-black">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase block mb-1">TARGET MARKET</span>
                  <span className="font-black text-black text-sm block">Sivakasi, Tamil Nadu</span>
                </div>
                <div className="p-3.5 bg-[#FAED00] border-2 border-black">
                  <span className="text-[10px] text-black/70 font-black uppercase block mb-1">CORE METRIC</span>
                  <span className="font-black text-black text-sm block">0% Aggregator Tax</span>
                </div>
              </div>

              {/* 4 Stat Hero Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                <div className="p-4 sm:p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF462D] block leading-none mb-1">
                    0%
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-zinc-600 block">
                    PLATFORM COMMISSION
                  </span>
                </div>
                <div className="p-4 sm:p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-black block leading-none mb-1">
                    &lt; 10s
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-zinc-600 block">
                    PHONE OTP CHECKOUT
                  </span>
                </div>
                <div className="p-4 sm:p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#00C16A] block leading-none mb-1">
                    100%
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-zinc-600 block">
                    ORDER CAPTURE ACCURACY
                  </span>
                </div>
                <div className="p-4 sm:p-5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-black block leading-none mb-1">
                    99.2%
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-zinc-600 block">
                    HOME-SCREEN PWA INSTALLS
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ─── SECTION 01 // ABOUT THE PROJECT & TOOLS ECOSYSTEM ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">01</span>
                <span className="font-bold text-black uppercase tracking-wider">ABOUT THE PROJECT &amp; TOOLS ECOSYSTEM</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
                Vidya&apos;s Kitchen is an end-to-end digital food ordering network built for a home chef business operating in <strong>Sivakasi, Tamil Nadu</strong>. Prior to this platform, all orders were taken manually over WhatsApp chat and phone calls — causing lost orders, delayed payments, and uncoordinated logistics. The goal was to build a tailored 4-surface digital infrastructure with <strong>zero third-party commission</strong>.
              </p>

              {/* Design vs Engineering Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Design & Research Tools */}
                <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎨</span>
                    <h3 className="text-base sm:text-lg font-black uppercase font-mono tracking-tight">
                      Design &amp; Research Tools
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Created complete component tokens, wireframes, and responsive design systems.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Figma UI System", "FigJam Journeys", "Phosphor Icons", "Lucide Icons", "Interactive Prototyping"].map((tool) => (
                      <span key={tool} className="px-2.5 py-1 bg-white border border-black text-xs font-mono font-bold text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engineering & Tech Tools */}
                <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">💻</span>
                    <h3 className="text-base sm:text-lg font-black uppercase font-mono tracking-tight">
                      Engineering &amp; Tech Tools
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Built for instant loads, offline reliability, and live GPS map tracking.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "Next.js 15 App Router",
                      "TypeScript",
                      "Supabase Realtime",
                      "Firebase Phone Auth",
                      "Razorpay UPI",
                      "Framer Motion",
                      "Mapbox GL",
                      "Twilio WhatsApp API",
                    ].map((tool) => (
                      <span key={tool} className="px-2.5 py-1 bg-white border border-black text-xs font-mono font-bold text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Business Perspective Banner */}
              <div className="p-5 sm:p-6 bg-[#FFF9E6] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-4">
                <div className="flex items-center gap-2 border-b-2 border-black pb-3">
                  <span className="w-3 h-3 bg-[#FF462D] border border-black" />
                  <h3 className="text-base sm:text-lg font-black uppercase font-mono text-black">
                    Business Perspective: Monetization &amp; Profitability in Sivakasi Town
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-zinc-800 leading-relaxed">
                  Sivakasi is India&apos;s industrial printing and fireworks hub, populated by thousands of factory directors, press supervisors, and migrant workers who endure 10–14 hour shifts. Most eat outside daily, but restaurant food causes health fatigue. As the <strong>first dedicated digital home-food platform in Sivakasi</strong>, Vidya&apos;s Kitchen captures high margins through:
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-800 font-medium">
                  <li className="flex items-start gap-2.5 bg-white border border-black p-3 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[#00C16A] font-black text-sm">✔</span>
                    <span><strong>Direct Margin Retention (0% Aggregator Tax):</strong> Retains the full 25%–30% fee typically extracted by Swiggy/Zomato, yielding a <strong>+28% net profit margin</strong> on every plate.</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-white border border-black p-3 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[#00C16A] font-black text-sm">✔</span>
                    <span><strong>B2B Corporate Lunch Subscriptions:</strong> Guaranteed recurring monthly tiffin plans for printing press offices, ensuring zero food waste.</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-white border border-black p-3 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[#00C16A] font-black text-sm">✔</span>
                    <span><strong>Tiered Micro-Zone Delivery:</strong> In-house drivers deliver 5–8 pre-ordered meals along single cluster routes (Zone 1: ₹20, Zone 2: ₹35, Zone 3: ₹50).</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-white border border-black p-3 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[#00C16A] font-black text-sm">✔</span>
                    <span><strong>Bulk Festival &amp; Event Pre-Orders:</strong> Sivakasi&apos;s festive peaks (Diwali, Pongal) bring high-ticket sweet and meal orders (AOV jumps from ₹160 to ₹850+).</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-white border border-black p-3 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[#00C16A] font-black text-sm">✔</span>
                    <span><strong>AI Dynamic Margin Assistant:</strong> Gemini AI calculates wholesale ingredient shifts and recommends margin-preserving menu prices.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ─── SECTION 02 // CLIENT COMMUNICATION MILESTONES ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">02</span>
                <span className="font-bold text-black uppercase tracking-wider">CLIENT COMMUNICATION MILESTONES</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    step: "1",
                    title: "Discovery & Scoping",
                    desc: "Mapped the chef's peak kitchen bottlenecks, manual WhatsApp mistakes, and cash-on-delivery tracking needs.",
                    accent: "bg-[#FF462D] text-white",
                  },
                  {
                    step: "2",
                    title: "Figma Review",
                    desc: "Demonstrated interactive prototype; rejected complex passwords in favor of one-step phone OTP.",
                    accent: "bg-[#FAED00] text-black",
                  },
                  {
                    step: "3",
                    title: "Field Testing",
                    desc: "Live kitchen orders, driver app sunlight readability tests, and automated WhatsApp alert verification.",
                    accent: "bg-[#0FE0E3] text-black",
                  },
                  {
                    step: "✓",
                    title: "Zero-Commission Launch",
                    desc: "Full deployment in Sivakasi with automated order dispatch and real-time ledger sync.",
                    accent: "bg-[#00C16A] text-white",
                  },
                ].map((milestone) => (
                  <div key={milestone.title} className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <span className={`w-7 h-7 rounded-full border border-black font-mono text-xs font-black flex items-center justify-center ${milestone.accent}`}>
                        {milestone.step}
                      </span>
                      <h4 className="font-mono font-black uppercase text-sm text-black">
                        {milestone.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── SECTION 03 // COMPETITOR ANALYSIS: SWIGGY VS VIDYA'S KITCHEN ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">03</span>
                <span className="font-bold text-black uppercase tracking-wider">COMPETITOR ANALYSIS: SWIGGY VS. VIDYA&apos;S KITCHEN</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <div className="overflow-x-auto border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <table className="w-full text-left border-collapse text-xs sm:text-sm font-mono">
                  <thead>
                    <tr className="bg-black text-white border-b-2 border-black uppercase tracking-wider text-[11px] sm:text-xs">
                      <th className="p-3 sm:p-4 border-r-2 border-zinc-700 w-1/4">ATTRIBUTE</th>
                      <th className="p-3 sm:p-4 border-r-2 border-zinc-700 w-3/8 text-zinc-300">SWIGGY / ZOMATO</th>
                      <th className="p-3 sm:p-4 w-3/8 text-[#FAED00]">VIDYA&apos;S KITCHEN (INDEPENDENT ECOSYSTEM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-black bg-white">
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-zinc-50">Commission Cut</td>
                      <td className="p-3 sm:p-4 border-r-2 border-black text-red-600 font-bold">25% – 33% per plate deducted from chef</td>
                      <td className="p-3 sm:p-4 text-emerald-700 font-black bg-emerald-50/50">0% (100% chef revenue retention)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-zinc-50">Preparation Model</td>
                      <td className="p-3 sm:p-4 border-r-2 border-black text-zinc-600">On-demand instant fast food (15–30 mins)</td>
                      <td className="p-3 sm:p-4 font-bold text-black">24-hour advance scheduled batch booking</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-zinc-50">Customer Relation</td>
                      <td className="p-3 sm:p-4 border-r-2 border-black text-zinc-600">Aggregator locks customer data and contact</td>
                      <td className="p-3 sm:p-4 font-bold text-black">Direct chef-customer relationship &amp; WhatsApp bot</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-zinc-50">App Footprint</td>
                      <td className="p-3 sm:p-4 border-r-2 border-black text-zinc-600">Heavy 70MB–110MB app download</td>
                      <td className="p-3 sm:p-4 font-bold text-black">Lightweight &lt;2MB PWA, instant home screen install</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-zinc-50">Tier-2 Delivery Economics</td>
                      <td className="p-3 sm:p-4 border-r-2 border-black text-zinc-600">Third-party riders with surge fees</td>
                      <td className="p-3 sm:p-4 font-bold text-black">Dedicated local delivery routes at flat ₹20–₹50 zones</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ─── SECTION 04 // INFORMATION ARCHITECTURE ACROSS 4 SURFACES ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">04</span>
                <span className="font-bold text-black uppercase tracking-wider">INFORMATION ARCHITECTURE ACROSS 4 SURFACES</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-6">
              {/* 3 Main Surfaces Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* 1. Customer PWA */}
                <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-4">
                  <div className="border-b-2 border-black pb-2">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">SURFACE 01</span>
                    <h4 className="text-base sm:text-lg font-black uppercase font-mono text-black">1. Customer PWA</h4>
                    <span className="text-[10px] font-mono font-bold text-[#FF462D] uppercase block">
                      MOBILE / IOS &amp; ANDROID (LIGHT GLASS)
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-800 font-medium">
                    <li className="flex items-center gap-2">• Home &amp; Category Browsing</li>
                    <li className="flex items-center gap-2">• 24-Hr Meal Slot Scheduler</li>
                    <li className="flex items-center gap-2">• Slide-Over Animated Cart</li>
                    <li className="flex items-center gap-2">• Razorpay UPI &amp; COD Checkout</li>
                    <li className="flex items-center gap-2">• Live Realtime Driver Tracking Map</li>
                  </ul>
                </div>

                {/* 2. Admin Dashboard */}
                <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-4">
                  <div className="border-b-2 border-black pb-2">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">SURFACE 02</span>
                    <h4 className="text-base sm:text-lg font-black uppercase font-mono text-black">2. Admin Dashboard</h4>
                    <span className="text-[10px] font-mono font-bold text-black uppercase block">
                      DESKTOP &amp; TABLET (OLED DARK MODE)
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-800 font-medium">
                    <li className="flex items-center gap-2">• Live Orders Kanban with Chimes</li>
                    <li className="flex items-center gap-2">• Accept / Prep / Dispatch / Reject</li>
                    <li className="flex items-center gap-2">• Driver Assignment &amp; PIN Generator</li>
                    <li className="flex items-center gap-2">• Offers &amp; Promo Code Engine</li>
                    <li className="flex items-center gap-2">• Gemini AI Menu Pricing Insights</li>
                  </ul>
                </div>

                {/* 3. Driver App */}
                <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-4">
                  <div className="border-b-2 border-black pb-2">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">SURFACE 03</span>
                    <h4 className="text-base sm:text-lg font-black uppercase font-mono text-black">3. Driver App</h4>
                    <span className="text-[10px] font-mono font-bold text-[#00C16A] uppercase block">
                      MOBILE PWA (DAYLIGHT HIGH-CONTRAST)
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-800 font-medium">
                    <li className="flex items-center gap-2">• 10-Digit Auto Phone Lookup</li>
                    <li className="flex items-center gap-2">• Quick 4-Digit PIN Authentication</li>
                    <li className="flex items-center gap-2">• Active Route &amp; Delivery Queue</li>
                    <li className="flex items-center gap-2">• One-Tap Customer Calling</li>
                    <li className="flex items-center gap-2">• Cash-on-Delivery Ledger Confirm</li>
                  </ul>
                </div>
              </div>

              {/* Surface 4: Automated WhatsApp Cloud Bot */}
              <div className="p-4 sm:p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-start gap-3">
                <span className="text-2xl shrink-0">💬</span>
                <div className="space-y-1">
                  <h4 className="font-mono text-xs sm:text-sm font-black uppercase text-[#25D366]">
                    Surface 4: Automated WhatsApp Cloud Bot
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal">
                    Triggered via Supabase webhooks to keep non-tech customers informed without opening the browser: <strong>Instant Order Confirmation (with PDF receipt) → Out for Delivery Alert (with driver name and live tracking link) → Delivery Complete &amp; Rating Request.</strong>
                  </p>
                </div>
              </div>

              {/* High-Resolution Screen Gallery */}
              <div className="pt-6 border-t-2 border-dashed border-black/20">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                  <div className="space-y-1.5">
                    <div className="rounded-xl overflow-hidden border-2 border-black bg-white aspect-[9/19] relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="/case-studies/vidyas-kitchen/login-phone.png"
                        alt="Vidya's Kitchen Phone Login"
                        fill
                        quality={100}
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase text-black block text-center">
                      01 / PHONE LOGIN
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="rounded-xl overflow-hidden border-2 border-black bg-white aspect-[9/19] relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="/case-studies/vidyas-kitchen/login-otp.png"
                        alt="Vidya's Kitchen OTP Verification"
                        fill
                        quality={100}
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase text-black block text-center">
                      02 / OTP AUTO-ADVANCE
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="rounded-xl overflow-hidden border-2 border-black bg-white aspect-[9/19] relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="/case-studies/vidyas-kitchen/customer-menu.png"
                        alt="Vidya's Kitchen Browse Menu"
                        fill
                        quality={100}
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase text-black block text-center">
                      03 / BROWSABLE MENU
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="rounded-xl overflow-hidden border-2 border-black bg-white aspect-[9/19] relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="/case-studies/vidyas-kitchen/cart-bottom-sheet.png"
                        alt="Vidya's Kitchen Cart Sheet"
                        fill
                        quality={100}
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase text-black block text-center">
                      04 / CART BOTTOM SHEET
                    </span>
                  </div>

                  <div className="space-y-1.5 col-span-2 sm:col-span-1">
                    <div className="rounded-xl overflow-hidden border-2 border-black bg-white aspect-[9/19] relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="/case-studies/vidyas-kitchen/checkout-razorpay.png"
                        alt="Vidya's Kitchen Checkout with Razorpay"
                        fill
                        quality={100}
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase text-black block text-center">
                      05 / 1-TAP CHECKOUT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── SECTION 05 // UNIFIED DESIGN SYSTEM & VISUAL TOKENS ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">05</span>
                <span className="font-bold text-black uppercase tracking-wider">UNIFIED DESIGN SYSTEM &amp; VISUAL TOKENS</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-normal">
                All three surfaces share a single foundational brand thread: the <strong>Outfit typeface</strong>, the <strong>#BD2320 Brand Crimson</strong>, and a unified Framer Motion spring physics engine — with color palettes optimized for their physical environments.
              </p>

              {/* Palette by Environment */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-black uppercase tracking-wider text-zinc-500 block">
                  Color Palette by Environment
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 font-mono text-xs">
                  <div className="p-3 border-2 border-black bg-white flex flex-col justify-between">
                    <div className="w-6 h-6 rounded-full border border-black bg-[#BD2320] mb-2" />
                    <span className="font-bold text-[11px]">#BD2320</span>
                    <span className="text-[9px] text-zinc-500 uppercase">Brand Red</span>
                  </div>
                  <div className="p-3 border-2 border-black bg-white flex flex-col justify-between">
                    <div className="w-6 h-6 rounded-full border border-black bg-[#F5F5F7] mb-2" />
                    <span className="font-bold text-[11px]">#F5F5F7</span>
                    <span className="text-[9px] text-zinc-500 uppercase">PWA Base</span>
                  </div>
                  <div className="p-3 border-2 border-black bg-black text-white flex flex-col justify-between">
                    <div className="w-6 h-6 rounded-full border border-zinc-700 bg-[#000000] mb-2" />
                    <span className="font-bold text-[11px]">#000000</span>
                    <span className="text-[9px] text-zinc-400 uppercase">OLED Dark</span>
                  </div>
                  <div className="p-3 border-2 border-black bg-[#F5E32D] text-black flex flex-col justify-between">
                    <div className="w-6 h-6 rounded-full border border-black bg-[#F5E32D] mb-2" />
                    <span className="font-bold text-[11px]">#F5E32D</span>
                    <span className="text-[9px] text-black uppercase">Kitchen Amber</span>
                  </div>
                  <div className="p-3 border-2 border-black bg-[#12833F] text-white flex flex-col justify-between">
                    <div className="w-6 h-6 rounded-full border border-white bg-[#12833F] mb-2" />
                    <span className="font-bold text-[11px]">#12833F</span>
                    <span className="text-[9px] text-zinc-100 uppercase">Driver Green</span>
                  </div>
                  <div className="p-3 border-2 border-black bg-[#101010] text-white flex flex-col justify-between">
                    <div className="w-6 h-6 rounded-full border border-zinc-700 bg-[#101010] mb-2" />
                    <span className="font-bold text-[11px]">#101010</span>
                    <span className="text-[9px] text-zinc-400 uppercase">Driver Text</span>
                  </div>
                </div>
              </div>

              {/* Typography Hierarchy Table */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-black uppercase tracking-wider text-zinc-500 block">
                  Typography Hierarchy (Outfit &amp; JetBrains Mono)
                </span>
                <div className="overflow-x-auto border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm font-mono">
                    <thead>
                      <tr className="bg-[#FAED00] text-black border-b-2 border-black uppercase tracking-wider text-[11px] sm:text-xs">
                        <th className="p-3 sm:p-4 border-r-2 border-black">ROLE</th>
                        <th className="p-3 sm:p-4 border-r-2 border-black">SIZE</th>
                        <th className="p-3 sm:p-4 border-r-2 border-black">WEIGHT</th>
                        <th className="p-3 sm:p-4 border-r-2 border-black">TRACKING</th>
                        <th className="p-3 sm:p-4">DESIGN PURPOSE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-black bg-white">
                      <tr className="hover:bg-[#FAF9F5]">
                        <td className="p-3 sm:p-4 font-bold border-r-2 border-black">Display Hero</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black">36px</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black font-extrabold">800 Extrabold</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black">-0.5px</td>
                        <td className="p-3 sm:p-4">Splash screen welcome greeting</td>
                      </tr>
                      <tr className="hover:bg-[#FAF9F5]">
                        <td className="p-3 sm:p-4 font-bold border-r-2 border-black">Screen Titles</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black">24px</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black font-extrabold">800 Extrabold</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black">-0.02em</td>
                        <td className="p-3 sm:p-4">Primary section and sheet headings</td>
                      </tr>
                      <tr className="hover:bg-[#FAF9F5]">
                        <td className="p-3 sm:p-4 font-bold border-r-2 border-black">Form Inputs</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black">17px</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black font-semibold">600 Semibold</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black">0</td>
                        <td className="p-3 sm:p-4 text-[#FF462D] font-bold">Bypasses iOS Safari 16px auto-zoom</td>
                      </tr>
                      <tr className="hover:bg-[#FAF9F5]">
                        <td className="p-3 sm:p-4 font-bold border-r-2 border-black">Price Display</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black">16–24px</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black font-black">900 Black</td>
                        <td className="p-3 sm:p-4 border-r-2 border-black">0</td>
                        <td className="p-3 sm:p-4">Instant monetary glanceability without color clutter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* ─── SECTION 06 // ENGINEERING CHALLENGES & UX SOLUTIONS ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">06</span>
                <span className="font-bold text-black uppercase tracking-wider">ENGINEERING CHALLENGES &amp; UX SOLUTIONS</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-5">
              {[
                {
                  id: "CHALLENGE 1",
                  title: "Dual PWA Installation on a Single Origin (vidyaskitchenhome.com)",
                  obstacle: "Chrome suppresses PWA install prompts if the root domain already has an installed PWA scope. Drivers visiting /driver could not install their app.",
                  fix: "Served dual-scoped manifests (/driver/manifest.webmanifest) and created an interactive, animated OS-detection guide showing step-by-step installation.",
                },
                {
                  id: "CHALLENGE 2",
                  title: "iOS Safari Auto-Zoom Breaking Full-Screen Immersion",
                  obstacle: "Safari forcibly zooms into any form input with font size < 16px on focus, breaking the native app illusion and requiring manual pinch-out.",
                  fix: "Enforced TYPO.input at exactly 17px. The 1px difference is invisible to the eye but eliminates 100% of unwanted iOS viewport shifts.",
                },
                {
                  id: "CHALLENGE 3",
                  title: "Promo Code Empty Box & Layout Jumping",
                  obstacle: "Applying a coupon caused a visible white box to flash and an abrupt layout jump while awaiting the server validation response.",
                  fix: "Implemented <AnimatePresence mode=\"wait\"> with a spinning CircleNotch embedded inside the button, cross-fading smoothly into success state.",
                },
                {
                  id: "CHALLENGE 4",
                  title: "Browser Native window.confirm() Blocking UI Thread",
                  obstacle: "Native browser alert dialogs blocked the JavaScript event loop and rendered ugly light-grey browser popups inside the dark kitchen dashboard.",
                  fix: "Replaced all native prompts with a custom Framer Motion dark glass modal with warning icons and spring physics, eliminating UI jank during busy kitchen hours.",
                },
                {
                  id: "CHALLENGE 5",
                  title: "Choppy Live GPS Driver Marker Teleportation",
                  obstacle: "Sending driver GPS coordinates every 5 seconds caused the map pin to jump erratically across customer screens.",
                  fix: "Paired Supabase Realtime subscriptions with a CSS transition: transform 0.4s ease on the marker element, creating a smooth gliding effect.",
                },
              ].map((challenge) => (
                <div key={challenge.id} className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-4">
                  <div className="flex flex-wrap items-center gap-2 border-b-2 border-black pb-3">
                    <span className="px-2.5 py-1 bg-black text-white font-mono text-xs font-black uppercase">
                      {challenge.id}
                    </span>
                    <h4 className="font-mono font-black text-sm sm:text-base text-black uppercase">
                      {challenge.title}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-normal">
                    <div className="p-4 bg-[#FF462D]/10 border border-black space-y-1.5">
                      <span className="font-mono text-xs font-black uppercase text-[#FF462D] block">
                        TECHNICAL OBSTACLE
                      </span>
                      <p className="text-zinc-900 leading-relaxed">
                        {challenge.obstacle}
                      </p>
                    </div>

                    <div className="p-4 bg-[#00C16A]/15 border border-black space-y-1.5">
                      <span className="font-mono text-xs font-black uppercase text-emerald-800 block">
                        ENGINEERING &amp; UX FIX
                      </span>
                      <p className="text-zinc-900 leading-relaxed">
                        {challenge.fix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── CASE STUDY FOOTER ATTRIBUTION ─── */}
          <footer className="bg-black text-white p-6 sm:p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#FAED00] font-black mb-1">
                Vidya&apos;s Kitchen End-to-End Case Study
              </p>
              <p className="text-sm font-bold text-white">
                Designed &amp; Developed by Simon Santhosh
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                vidyaskitchenhome.com · Sivakasi, Tamil Nadu
              </p>
            </div>
            <Link
              href="/v2#work"
              className="px-5 py-2.5 bg-[#FAED00] text-black font-mono text-xs font-black uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black transition-colors shrink-0"
            >
              Back to Selected Work ↑
            </Link>
          </footer>

        </main>
      </div>
    </LenisProvider>
  );
}
