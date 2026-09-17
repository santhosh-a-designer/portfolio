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
  User,
  CookingPot,
  Bicycle,
  Database,
  LockKey,
  CreditCard,
  BellRinging,
  DeviceMobileCamera,
  Graph,
  Tag,
  ArrowsLeftRight,
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

          {/* ─── HERO WINDOW // CASE STUDY COVER OVERVIEW ─── */}
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

                <p className="text-xs sm:text-sm font-mono text-zinc-500 italic">
                  &ldquo;Bridging authentic home-cooked meals with modern digital convenience — Sivakasi’s first zero-commission food delivery network.&rdquo;
                </p>
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs pt-4 border-t-2 border-dashed border-black/30">
                <div className="p-3.5 bg-[#FAF9F5] border-2 border-black">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase block">ROLE</span>
                  <span className="font-black text-xs sm:text-sm text-black">Solo Designer &amp; Developer</span>
                </div>
                <div className="p-3.5 bg-[#FAF9F5] border-2 border-black">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase block">TIMELINE</span>
                  <span className="font-black text-xs sm:text-sm text-black">6 Months (End-to-End)</span>
                </div>
                <div className="p-3.5 bg-[#FAF9F5] border-2 border-black">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase block">TARGET MARKET</span>
                  <span className="font-black text-xs sm:text-sm text-black">Sivakasi, Tamil Nadu</span>
                </div>
                <div className="p-3.5 bg-[#FAED00] border-2 border-black">
                  <span className="text-[10px] text-black/70 font-bold uppercase block">CORE METRIC</span>
                  <span className="font-black text-xs sm:text-sm text-black">0% Aggregator Tax</span>
                </div>
              </div>

              {/* 4 Metric Strips */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                <div className="p-4 sm:p-5 bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center space-y-1">
                  <div className="text-2xl sm:text-4xl font-black font-mono text-[#FF462D]">0%</div>
                  <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">PLATFORM COMMISSION</div>
                </div>
                <div className="p-4 sm:p-5 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center space-y-1">
                  <div className="text-2xl sm:text-4xl font-black font-mono text-black">&lt; 10s</div>
                  <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-600">PHONE OTP CHECKOUT</div>
                </div>
                <div className="p-4 sm:p-5 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center space-y-1">
                  <div className="text-2xl sm:text-4xl font-black font-mono text-[#00C16A]">100%</div>
                  <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-600">ORDER CAPTURE ACCURACY</div>
                </div>
                <div className="p-4 sm:p-5 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center space-y-1">
                  <div className="text-2xl sm:text-4xl font-black font-mono text-black">99.2%</div>
                  <div className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-600">HOME-SCREEN PWA INSTALLS</div>
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
              {/* The Genesis narrative */}
              <div className="space-y-3">
                <h3 className="font-mono font-black text-lg sm:text-xl uppercase tracking-tight text-black">
                  The Genesis
                </h3>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed max-w-4xl">
                  Vidya&apos;s Kitchen is an end-to-end digital food ordering network built for a home chef business operating in Sivakasi, Tamil Nadu. Known for authentic, hygienic, and nostalgic traditional meals with hundreds of regular patrons, 100% of operations were previously handled manually through chaotic WhatsApp chats, missed voice notes, and uncoordinated logistics. The mission was to design an independent, 4-surface digital infrastructure with zero third-party commission without stripping away the personal, warm touch of home dining.
                </p>
              </div>

              {/* Tools Ecosystem Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Design & Research */}
                <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black space-y-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 font-mono font-black text-sm uppercase text-black">
                    <span className="text-lg">🎨</span>
                    <h4>Design &amp; Research Tools</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Created complete component tokens, wireframes, empathy maps, and responsive design systems.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Figma UI System", "FigJam Journeys", "Phosphor Icons", "Lucide Icons", "Interactive Prototyping"].map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 bg-white border-2 border-black font-mono text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engineering & Tech */}
                <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black space-y-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 font-mono font-black text-sm uppercase text-black">
                    <span className="text-lg">💻</span>
                    <h4>Engineering &amp; Tech Stack</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Built for instant loads, offline reliability, live GPS driver tracking, and instant automated messaging.
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
                      <span
                        key={tool}
                        className="px-3 py-1.5 bg-white border-2 border-black font-mono text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Business Perspective Banner */}
              <div className="p-6 bg-[#FAF9F5] border-2 border-black border-l-8 border-l-[#FF462D] space-y-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="space-y-1">
                  <h4 className="font-mono font-black text-base sm:text-lg uppercase text-[#BD2320]">
                    Business Perspective: Monetization &amp; Profitability in Sivakasi Town
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    Sivakasi is India&apos;s industrial printing, packaging, and fireworks hub, populated by thousands of factory directors, press supervisors, and migrant administrative workers who endure 10–14 hour shifts. Most eat outside daily, but restaurant food causes health fatigue. As the <strong>first dedicated digital home-food platform in Sivakasi</strong>, Vidya&apos;s Kitchen captures high margins through:
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-800 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BD2320] mt-1.5 shrink-0" />
                    <span><strong>Direct Margin Retention (0% Aggregator Tax):</strong> Retains the full 25%–30% fee typically extracted by Swiggy/Zomato, yielding a <strong>+28% net profit margin</strong> on every plate.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BD2320] mt-1.5 shrink-0" />
                    <span><strong>B2B Corporate Lunch Subscriptions:</strong> Guaranteed recurring monthly tiffin plans for printing press offices, ensuring zero food waste.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BD2320] mt-1.5 shrink-0" />
                    <span><strong>Tiered Micro-Zone Delivery:</strong> In-house drivers deliver 5–8 pre-ordered meals along single cluster routes (Zone 1: ₹20, Zone 2: ₹35, Zone 3: ₹50).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BD2320] mt-1.5 shrink-0" />
                    <span><strong>Bulk Festival &amp; Event Pre-Orders:</strong> Sivakasi&apos;s festive peaks (Diwali, Pongal) bring high-ticket sweet and meal orders (AOV jumps from ₹160 to ₹850+).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BD2320] mt-1.5 shrink-0" />
                    <span><strong>AI Dynamic Margin Assistant:</strong> Gemini AI calculates wholesale ingredient shifts and recommends margin-preserving menu prices (maintaining 38%+ gross margin).</span>
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

            <div className="p-6 sm:p-8 md:p-10 space-y-6">
              <p className="text-xs sm:text-sm font-mono text-zinc-600 uppercase">
                The project was executed across 3 strategic client discussion milestones to align business goals with design and engineering solutions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Step 1 */}
                <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-full bg-[#FF462D] text-white font-mono font-black text-sm flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      1
                    </div>
                    <h4 className="font-mono font-black text-sm sm:text-base text-black uppercase">
                      Discovery &amp; Scoping
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Mapped the chef&apos;s peak kitchen bottlenecks, manual WhatsApp mistakes, and cash-on-delivery tracking needs.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-black/20 text-[11px] font-mono text-zinc-500">
                    Phase: Problem Framing
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-full bg-[#FAED00] text-black font-mono font-black text-sm flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      2
                    </div>
                    <h4 className="font-mono font-black text-sm sm:text-base text-black uppercase">
                      Figma Review
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Demonstrated interactive prototype; rejected complex passwords in favor of one-step phone OTP.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-black/20 text-[11px] font-mono text-zinc-500">
                    Phase: Prototyping
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-full bg-black text-white font-mono font-black text-sm flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      3
                    </div>
                    <h4 className="font-mono font-black text-sm sm:text-base text-black uppercase">
                      Field Testing
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Live kitchen orders, driver app sunlight readability tests, and automated WhatsApp alert verification.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-black/20 text-[11px] font-mono text-zinc-500">
                    Phase: Dry-Runs
                  </div>
                </div>

                {/* Step 4 (Launch) */}
                <div className="p-5 bg-[#00C16A]/10 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-full bg-[#00C16A] text-white font-mono font-black text-sm flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      ✓
                    </div>
                    <h4 className="font-mono font-black text-sm sm:text-base text-black uppercase">
                      Zero-Commission Launch
                    </h4>
                    <p className="text-xs text-zinc-800 leading-relaxed">
                      Full deployment in Sivakasi with automated order dispatch and real-time ledger sync.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-black/20 text-[11px] font-mono text-emerald-800 font-bold">
                    Phase: Production
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── SECTION 03 // USER PERSONAS & OPERATIONAL CONSTRAINTS ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">03</span>
                <span className="font-bold text-black uppercase tracking-wider">USER RESEARCH &amp; OPERATIONAL CONSTRAINTS</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              {/* 3 Personas */}
              <div className="space-y-4">
                <h3 className="font-mono font-black text-base sm:text-lg uppercase text-black">
                  Contextual User Interviews (15 Local Sivakasi Users)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                  {/* Persona 1 */}
                  <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-[#FF462D] text-white border border-black">
                        <User weight="bold" size={16} />
                      </div>
                      <div>
                        <div className="font-black text-sm text-black">Priya, 34</div>
                        <div className="text-[10px] text-zinc-500 uppercase">Working Mother &amp; Office Executive</div>
                      </div>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-black/10 font-sans text-xs text-zinc-700">
                      <p><strong>Goal:</strong> Preservative-free, healthy food for kids; schedule meals 3 days in advance effortlessly.</p>
                      <p className="text-zinc-500"><strong>Pain:</strong> No time to cook morning breakfast; dislikes oily restaurant takeout.</p>
                    </div>
                  </div>

                  {/* Persona 2 */}
                  <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-[#FAED00] text-black border border-black">
                        <CookingPot weight="bold" size={16} />
                      </div>
                      <div>
                        <div className="font-black text-sm text-black">Chef Vidya, 48</div>
                        <div className="text-[10px] text-zinc-500 uppercase">Home Kitchen Founder &amp; Chef</div>
                      </div>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-black/10 font-sans text-xs text-zinc-700">
                      <p><strong>Goal:</strong> Glanceable dashboard with loud order sound chimes; zero manual typing during cooking.</p>
                      <p className="text-zinc-500"><strong>Pain:</strong> Lost orders on WhatsApp, delayed customer payments, uncoordinated riders.</p>
                    </div>
                  </div>

                  {/* Persona 3 */}
                  <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-[#00C16A] text-white border border-black">
                        <Bicycle weight="bold" size={16} />
                      </div>
                      <div>
                        <div className="font-black text-sm text-black">Murugan, 26</div>
                        <div className="text-[10px] text-zinc-500 uppercase">Two-Wheeler Delivery Driver</div>
                      </div>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-black/10 font-sans text-xs text-zinc-700">
                      <p><strong>Goal:</strong> Big buttons, phone-number PIN login, 1-tap WhatsApp/calling, simple Cash on Delivery ledger.</p>
                      <p className="text-zinc-500"><strong>Pain:</strong> Harsh outdoor sunlight glare on phone, complex navigation menus.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Physical Operational Constraints */}
              <div className="p-5 sm:p-6 bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
                <h4 className="font-mono font-black text-sm sm:text-base uppercase text-[#FAED00]">
                  Handling Real Physical Operational Constraints
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-4 bg-[#1A1A1A] border border-zinc-700 space-y-1.5">
                    <span className="text-[#FF462D] font-bold block">01. BATCH PREP SCHEDULE</span>
                    <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                      Home cooking is not 15-minute fast food. Hardcoded 24-hour advance booking windows tied to 3 discrete slots (Breakfast 7-9 AM, Lunch 12-2 PM, Dinner 7-9 PM).
                    </p>
                  </div>
                  <div className="p-4 bg-[#1A1A1A] border border-zinc-700 space-y-1.5">
                    <span className="text-[#FAED00] font-bold block">02. CASH ON DELIVERY (COD)</span>
                    <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                      Local customers heavily favor COD. Driver App enforces a mandatory &ldquo;Cash Collected: ₹X&rdquo; confirmation step before completion to sync real-time ledgers.
                    </p>
                  </div>
                  <div className="p-4 bg-[#1A1A1A] border border-zinc-700 space-y-1.5">
                    <span className="text-[#00C16A] font-bold block">03. ZERO APP STORE FRICTION</span>
                    <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                      Tier-2 users resist downloading heavy 80MB native apps. Built as a lightweight (&lt; 2MB) PWA with instant browser loading and 1-tap homescreen install.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── SECTION 04 // COMPETITOR ANALYSIS: SWIGGY VS. VIDYA'S KITCHEN ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">04</span>
                <span className="font-bold text-black uppercase tracking-wider">COMPETITOR ANALYSIS: SWIGGY / ZOMATO VS. VIDYA&apos;S KITCHEN</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-6">
              <div className="overflow-x-auto border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <table className="w-full text-left border-collapse text-xs sm:text-sm font-mono">
                  <thead>
                    <tr className="bg-[#FAED00] text-black border-b-2 border-black uppercase tracking-wider text-[11px] sm:text-xs">
                      <th className="p-3 sm:p-4 border-r-2 border-black">ATTRIBUTE</th>
                      <th className="p-3 sm:p-4 border-r-2 border-black">SWIGGY / ZOMATO</th>
                      <th className="p-3 sm:p-4 bg-black text-[#FAED00]">VIDYA&apos;S KITCHEN (INDEPENDENT ECOSYSTEM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-black bg-white">
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black">Commission Cut</td>
                      <td className="p-3 sm:p-4 border-r-2 border-black text-red-600 font-bold">25% – 33% per plate deducted from chef</td>
                      <td className="p-3 sm:p-4 bg-emerald-50 text-emerald-900 font-bold">0% (100% chef revenue retention)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black">Preparation Model</td>
                      <td className="p-3 sm:p-4 border-r-2 border-black">On-demand instant fast food (15–30 mins)</td>
                      <td className="p-3 sm:p-4 font-bold">24-hour advance scheduled batch booking</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black">Food Quality &amp; Health</td>
                      <td className="p-3 sm:p-4 border-r-2 border-black">Commercial restaurant cooking, high oil/MSG</td>
                      <td className="p-3 sm:p-4 font-bold text-emerald-900">Hygienic, 100% home-cooked authentic recipes</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black">Customer Relation</td>
                      <td className="p-3 sm:p-4 border-r-2 border-black">Aggregator locks customer data and contact</td>
                      <td className="p-3 sm:p-4 font-bold">Direct chef-customer relationship &amp; WhatsApp bot</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black">App Footprint</td>
                      <td className="p-3 sm:p-4 border-r-2 border-black">Heavy 70MB–110MB app download</td>
                      <td className="p-3 sm:p-4 font-bold text-emerald-900">Lightweight &lt;2MB PWA, instant home screen install</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black">Tier-2 Delivery Economics</td>
                      <td className="p-3 sm:p-4 border-r-2 border-black">Third-party riders with surge fees</td>
                      <td className="p-3 sm:p-4 font-bold">Dedicated local delivery routes at flat ₹20–₹50 zones</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ─── SECTION 05 // INFORMATION ARCHITECTURE & USER FLOWS ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">05</span>
                <span className="font-bold text-black uppercase tracking-wider">INFORMATION ARCHITECTURE ACROSS 4 SURFACES</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              {/* 3 Physical Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Surface 1: Customer PWA */}
                <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-[#FF462D] text-white border border-black font-mono text-xs font-black">
                      1
                    </span>
                    <h4 className="font-mono font-black text-base text-black uppercase">
                      Customer PWA
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-zinc-500 block">
                    MOBILE / IOS &amp; ANDROID (LIGHT GLASS)
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 pt-2 border-t border-black/10">
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#BD2320]" /> Home &amp; Category Browsing</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#BD2320]" /> 24-Hr Meal Slot Scheduler</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#BD2320]" /> Slide-Over Animated Cart</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#BD2320]" /> Razorpay UPI &amp; COD Checkout</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#BD2320]" /> Live Realtime Driver Tracking Map</li>
                  </ul>
                </div>

                {/* Surface 2: Admin Dashboard */}
                <div className="p-5 sm:p-6 bg-[#000000] text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-[#FAED00] text-black border border-black font-mono text-xs font-black">
                      2
                    </span>
                    <h4 className="font-mono font-black text-base text-white uppercase">
                      Admin Dashboard
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block">
                    DESKTOP &amp; TABLET (OLED DARK MODE)
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-200 pt-2 border-t border-zinc-700">
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#FAED00]" /> Live Orders Kanban with Audio Chimes</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#FAED00]" /> Accept / Prep / Dispatch / Reject</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#FAED00]" /> Driver Assignment &amp; PIN Generator</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#FAED00]" /> Offers &amp; Promo Code Engine</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#FAED00]" /> Gemini AI Menu Pricing Insights</li>
                  </ul>
                </div>

                {/* Surface 3: Driver App */}
                <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-[#12833F] text-white border border-black font-mono text-xs font-black">
                      3
                    </span>
                    <h4 className="font-mono font-black text-base text-black uppercase">
                      Driver App
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-zinc-500 block">
                    MOBILE PWA (DAYLIGHT HIGH-CONTRAST)
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 pt-2 border-t border-black/10">
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#12833F]" /> 10-Digit Auto Phone Lookup</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#12833F]" /> Quick 4-Digit PIN Authentication</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#12833F]" /> Active Route &amp; Delivery Queue</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#12833F]" /> One-Tap Customer Calling &amp; Maps</li>
                    <li className="flex items-center gap-2"><Check weight="bold" className="w-3.5 h-3.5 text-[#12833F]" /> Cash-on-Delivery Ledger Confirm</li>
                  </ul>
                </div>
              </div>

              {/* Surface 4: Automated WhatsApp Cloud Bot */}
              <div className="p-5 sm:p-6 bg-[#25D366]/10 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-2">
                <div className="flex items-center gap-2">
                  <ChatCircleDots weight="fill" className="w-5 h-5 text-[#128C7E]" />
                  <h4 className="font-mono font-black text-sm sm:text-base text-black uppercase">
                    Surface 4: Automated WhatsApp Cloud Bot
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  Triggered via Supabase webhooks to keep non-tech customers informed without opening the browser: <strong>Instant Order Confirmation</strong> (with PDF receipt) → <strong>Out for Delivery Alert</strong> (with driver name and live tracking link) → <strong>Delivery Complete &amp; Rating Request</strong>.
                </p>
              </div>

              {/* End-to-End User Flow Architecture */}
              <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black space-y-4">
                <span className="font-mono text-xs font-black uppercase text-zinc-500 block">
                  End-to-End Synchronized User Flows
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 bg-white border border-black space-y-2">
                    <span className="font-black text-black block uppercase text-[11px]">A. Customer PWA Flow</span>
                    <ol className="space-y-1 text-zinc-700 list-decimal list-inside font-sans text-xs">
                      <li>Customer opens PWA on mobile and authenticates via Phone OTP.</li>
                      <li>Selects meal slot (e.g. Lunch 12–2 PM) with 24-hr advance booking.</li>
                      <li>Adds dishes to slide-over animated cart and applies promo coupon.</li>
                      <li>Pays via Razorpay UPI / COD and enters live tracking map.</li>
                    </ol>
                  </div>
                  <div className="p-4 bg-white border border-black space-y-2">
                    <span className="font-black text-black block uppercase text-[11px]">B. Kitchen &amp; Driver Dispatch Flow</span>
                    <ol className="space-y-1 text-zinc-700 list-decimal list-inside font-sans text-xs">
                      <li>Realtime audio chime rings on Admin Kanban board for new order.</li>
                      <li>Chef reviews and clicks &lsquo;Accept&rsquo;, assigning driver &lsquo;Murugan&rsquo;.</li>
                      <li>Driver receives instant push alert, calls customer in 1 tap.</li>
                      <li>Driver collects COD cash, confirms delivery, and updates ledger.</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Detailed Screen Walkthrough & UX Explanation */}
              <div className="space-y-6 pt-6 border-t-2 border-black">
                <div>
                  <span className="text-xs font-mono font-black uppercase tracking-wider text-[#FF462D] block mb-1">
                    SURFACE WALKTHROUGH &amp; UX BREAKDOWN
                  </span>
                  <h3 className="font-mono font-black text-lg sm:text-xl uppercase text-black">
                    Interactive Screen Architecture &amp; Rationale
                  </h3>
                </div>

                {/* Responsive Side-by-Side 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Splash & Opening Screen",
                      tag: "Instant Brand Recognition",
                      img: "/case-studies/vidyas-kitchen/v3/01-splash-screen.png",
                      desc: "The introductory launch experience immediately establishes Vidya’s Kitchen brand identity with an inviting culinary mascot and warm crimson motif. Optimized as an ultra-fast loading PWA splash state that hides initial asset hydration seamlessly without white screen flashes.",
                      highlights: ["Lightweight SVG mascot badge", "Animated pulsing loader", "< 2MB initial bundle"],
                    },
                    {
                      step: "02",
                      title: "Personalized Phone Login Screen",
                      tag: "Low-Friction Onboarding",
                      img: "/case-studies/vidyas-kitchen/v3/02-phone-login.png",
                      desc: "Designed specifically for Sivakasi’s user base by completely removing traditional email and password barriers. Greets returning users personally ('Hey, Dee.') while new visitors enter their preferred nickname and 10-digit mobile number with standard +91 India formatting.",
                      highlights: ["17px input token (no iOS zoom)", "Pre-filled returning user greeting", "1-tap 'Send OTP' with Firebase"],
                    },
                    {
                      step: "03",
                      title: "6-Digit OTP Verification Screen",
                      tag: "Frictionless Authentication",
                      img: "/case-studies/vidyas-kitchen/v3/03-otp-screen-clean.png",
                      desc: "An auto-advancing 6-digit OTP keypad interface with real-time numeric entry states, an active field indicator, countdown resend safety throttle (16s), and direct 'Change number' fallback. Seamlessly verifies sessions without complex passwords.",
                      highlights: ["High-contrast input tiles", "Active yellow focus indicator", "Direct 'Change number' safety hatch"],
                    },
                    {
                      step: "04",
                      title: "Delivery Location & Address Confirmation",
                      tag: "Precision Local Logistics",
                      img: "/case-studies/vidyas-kitchen/v3/04-location-selector.png",
                      desc: "Features interactive 3D map pin placement, saved tags (Home, Work), manual flat/building inputs, and a one-tap 'Use current location' GPS detector. Includes friendly fallback alert banners with clear instructions if location permission is denied.",
                      highlights: ["Mapbox GL pin geolocation picker", "Saved places quick chips", "Graceful permission fallback"],
                    },
                    {
                      step: "05",
                      title: "Home Menu & Dish Browsing",
                      tag: "Batch Discovery & 1-Tap Ordering",
                      img: "/case-studies/vidyas-kitchen/v3/05-menu-browsing.png",
                      desc: "Presents traditional home-cooked delicacies (Mom's Recipe Chicken Gravy, Pepper Chicken) with high-definition dish photography, real-time discount tags, category switchers (Kitchen picks, Favorites), and bottom navigation for rapid access.",
                      highlights: ["Card-based meal browsing with discount badges", "Floating bottom navigation dock", "Instant + ADD action button"],
                    },
                  ].map((screen) => (
                    <div
                      key={screen.step}
                      className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between space-y-5"
                    >
                      {/* Top Meta Header */}
                      <div className="space-y-2 font-mono">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="px-2.5 py-1 bg-[#FF462D] text-white text-xs font-black">
                            SCREEN {screen.step}
                          </span>
                          <span className="px-2.5 py-1 bg-[#FAED00] text-black text-xs font-bold uppercase border border-black">
                            {screen.tag}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-black text-black uppercase pt-1">
                          {screen.title}
                        </h4>
                      </div>

                      {/* Only The Pure Image */}
                      <div className="flex justify-center w-full">
                        <div className="relative w-full max-w-[280px] aspect-[9/19]">
                          <Image
                            src={screen.img}
                            alt={screen.title}
                            fill
                            sizes="280px"
                            quality={100}
                            className="object-contain object-center"
                          />
                        </div>
                      </div>

                      {/* Explanation & Highlights */}
                      <div className="space-y-3 font-mono">
                        <p className="font-sans text-xs sm:text-sm text-zinc-700 leading-relaxed">
                          {screen.desc}
                        </p>

                        <div className="pt-3 border-t border-black/15">
                          <span className="text-[10px] font-bold text-zinc-500 uppercase block mb-1.5">
                            Key UX Highlights:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {screen.highlights.map((h, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 bg-white border border-black text-[10px] font-bold text-black flex items-center gap-1"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00C16A]" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ─── SECTION 06 // UNIFIED DESIGN SYSTEM & VISUAL TOKENS ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">06</span>
                <span className="font-bold text-black uppercase tracking-wider">UNIFIED DESIGN SYSTEM &amp; VISUAL TOKENS</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                All surfaces share a single foundational brand thread: the <strong>Outfit</strong> typeface, the <strong>#BD2320 Brand Crimson</strong>, and a unified <strong>Framer Motion spring physics engine</strong> — with color palettes optimized for their physical environments.
              </p>

              {/* Color Swatches */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-black uppercase tracking-wider text-zinc-500 block">
                  Color Palette by Physical Environment
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

          {/* ─── SECTION 07 // DETAILED ENGINEERING CHALLENGES & UX SOLUTIONS ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">07</span>
                <span className="font-bold text-black uppercase tracking-wider">ENGINEERING CHALLENGES &amp; HOW UX SOLVED THEM</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-5">
              {[
                {
                  id: "CHALLENGE 1",
                  title: "Single Domain Dual PWA Installation (vidyaskitchenhome.com)",
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
                {
                  id: "CHALLENGE 6",
                  title: "Driver Management False 'Save' State",
                  obstacle: "Deleting a driver left local state desynchronized with baseline state, incorrectly showing the 'Save Drivers' warning button.",
                  fix: "Synced savedDrivers synchronously upon receiving a 200 OK deletion response, eliminating user confusion and false warnings.",
                },
                {
                  id: "CHALLENGE 7",
                  title: "In-Memory Cart Loss on Mobile Reload",
                  obstacle: "Refreshing the mobile browser tab destroyed the in-memory React cart state during checkout.",
                  fix: "Built a versioned localStorage persistence engine (vk-cart-v2) that hydrates cart items before initial layout render.",
                },
                {
                  id: "CHALLENGE 8",
                  title: "Driver Search Tap Friction",
                  obstacle: "Requiring drivers to click 'Search Account' before entering a PIN led to confusion in outdoor field environments.",
                  fix: "Attached an effect watcher to the phone input; entering the 10th digit automatically triggers the backend lookup and animates the PIN pad into view.",
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

          {/* ─── SECTION 08 // MEASURABLE IMPACT & BUSINESS RESULTS ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">08</span>
                <span className="font-bold text-black uppercase tracking-wider">MEASURABLE IMPACT &amp; KEY TAKEAWAYS</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono">
                <div className="p-5 bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-2">
                  <div className="text-2xl sm:text-3xl font-black text-[#FAED00]">₹45,000+</div>
                  <div className="text-xs font-bold uppercase text-zinc-300">Monthly Commission Saved</div>
                  <p className="text-xs text-zinc-400 font-sans">100% chef revenue retention by bypassing aggregator fees.</p>
                </div>

                <div className="p-5 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-2">
                  <div className="text-2xl sm:text-3xl font-black text-[#00C16A]">100%</div>
                  <div className="text-xs font-bold uppercase text-zinc-700">Order Capture Accuracy</div>
                  <p className="text-xs text-zinc-600 font-sans">Eliminated handwritten kitchen mixups and missed voice notes.</p>
                </div>

                <div className="p-5 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-2">
                  <div className="text-2xl sm:text-3xl font-black text-[#FF462D]">&lt; 10s</div>
                  <div className="text-xs font-bold uppercase text-zinc-700">Checkout Time</div>
                  <p className="text-xs text-zinc-600 font-sans">Reduced checkout from 4+ minutes on WhatsApp to under 10 seconds.</p>
                </div>
              </div>

              <div className="p-5 bg-[#FAF9F5] border-2 border-black space-y-2 font-mono text-xs">
                <span className="font-black text-black uppercase block">First Mover in Sivakasi Town</span>
                <p className="text-zinc-700 font-sans leading-relaxed">
                  Established Vidya&apos;s Kitchen as the premier, tech-enabled home culinary brand in the region with an active, growing customer base and 99.2% home-screen PWA install rate among recurring weekly subscription customers.
                </p>
              </div>
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
