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
} from "@phosphor-icons/react";
import HeaderV2 from "@/app/v2/components/HeaderV2";
import FloatingActionTriggers from "@/app/v2/components/FloatingActionTriggers";
import LenisProvider from "@/components/LenisProvider";

export default function VidyasKitchenCaseStudyPage() {
  const [activeSurfaceTab, setActiveSurfaceTab] = useState<"pwa" | "admin" | "driver">("pwa");

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
              <span>PROD DEPLOYED · 2024</span>
            </div>
          </div>

          {/* ─── WINDOW_01 // OVERVIEW ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            {/* Window Chrome Titlebar */}
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/40" />
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-black ml-1.5 truncate">
                  WINDOW_01 // OVERVIEW
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block px-2 py-0.5 bg-black text-[#FAED00] font-black text-[9px] uppercase tracking-widest border border-black">
                  CASE_FILE // 01 OF 07
                </span>
                <a
                  href="https://www.vidyaskitchenhome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-black uppercase text-black hover:text-[#FF462D] transition-colors"
                >
                  <span>LIVE PRODUCT</span>
                  <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
              {/* Title & One-Line Bold Definition */}
              <div>
                <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FF462D] mb-2">
                  <span className="w-2 h-2 bg-[#FF462D] inline-block" />
                  <span>FOOD ORDERING PLATFORM &amp; DISPATCH ECOSYSTEM</span>
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black font-mono leading-none mb-4">
                  VIDYA&apos;S KITCHEN
                </h1>
                <p className="text-base sm:text-xl md:text-2xl font-black uppercase tracking-tight text-black font-sans leading-snug max-w-4xl">
                  A full-stack ordering ecosystem that unifies a <span className="underline decoration-4 decoration-[#FF462D]">Customer PWA</span>, <span className="underline decoration-4 decoration-black">Kitchen Admin Dashboard</span>, <span className="underline decoration-4 decoration-[#FAED00] bg-black text-white px-1">Driver App</span>, and <span className="underline decoration-4 decoration-[#22C55E]">Automated WhatsApp Bot</span> into one system.
                </p>
              </div>

              {/* Tag Pills for Role, Timeline, Platform */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
                <div className="px-3 py-1.5 bg-black text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  ROLE: PRODUCT DESIGNER &amp; DEVELOPER (SOLO)
                </div>
                <div className="px-3 py-1.5 bg-[#FAED00] text-black font-mono text-xs font-black uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  TIMELINE: ~6 MONTHS (DESIGN + FULL BUILD)
                </div>
                <div className="px-3 py-1.5 bg-white text-black font-mono text-xs font-black uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  SURFACES: 4 INTERCONNECTED APPS
                </div>
              </div>

              {/* Hero Product Shot: Responsive Multi-Device Composition */}
              <div className="mt-6 border-2 border-black bg-[#0A0D12] p-4 sm:p-8 relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {/* Tech grid texture overlay */}
                <div 
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                  }}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Left: Mobile App Hero (Customer Menu) */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative w-full max-w-[280px] sm:max-w-[310px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]">
                      <div className="bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] p-2 sm:p-2.5 rounded-[36px] border-2 border-[#64748B] shadow-2xl">
                        <div className="rounded-[28px] overflow-hidden border border-black/80 bg-[#F5F5F7] aspect-[9/19.5] relative">
                          <Image
                            src="/case-studies/vidyas-kitchen/customer-menu.png"
                            alt="Vidya's Kitchen Customer PWA Browse Menu"
                            fill
                            className="object-cover object-top"
                            priority
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#BD2320] text-white font-mono text-[10px] font-black uppercase tracking-widest border border-black shadow-md whitespace-nowrap">
                        CUSTOMER PWA · IOS-INSPIRED GLASS
                      </div>
                    </div>
                  </div>

                  {/* Right: Kitchen Admin Dashboard Preview */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="border-2 border-black bg-[#0D0D0F] shadow-[4px_4px_0px_0px_rgba(250,237,0,1)] overflow-hidden">
                      <div className="h-8 bg-[#1A1A1A] border-b border-zinc-800 px-3 flex items-center justify-between text-zinc-400 font-mono text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500/70" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                          <span className="w-2 h-2 rounded-full bg-green-500/70" />
                          <span className="ml-2 text-zinc-300 font-bold">dashboard.vidyaskitchenhome.com</span>
                        </div>
                        <span className="text-[#F5E32D] font-bold">REALTIME SYNCED</span>
                      </div>
                      <div className="relative aspect-[16/10] w-full bg-black">
                        <Image
                          src="/case-studies/vidyas-kitchen/admin-dashboard.png"
                          alt="Vidya's Kitchen Kitchen Admin Dashboard"
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-zinc-400">
                      <span>OLED DARK CONTROL CENTRE · SINGLE-VIEW LIVE ORDERS</span>
                      <span className="text-[#22C55E] font-bold">● 300MS REALTIME DISPATCH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── WINDOW_02 // THE PROBLEM ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/40" />
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-black ml-1.5 truncate">
                  WINDOW_02 // THE PROBLEM
                </span>
              </div>
              <span className="px-2 py-0.5 bg-black text-[#FF462D] font-black text-[9px] uppercase tracking-widest border border-black">
                CASE_FILE // 02 OF 07
              </span>
            </div>

            <div className="p-5 sm:p-8 md:p-10 space-y-6">
              <div className="max-w-3xl">
                <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest text-[#FF462D] block mb-1">
                  // THE ROOT FRICTION
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-mono leading-tight">
                  ZERO INFRASTRUCTURE. CHAOTIC CHATS.
                </h2>
              </div>

              {/* 3 Bullets Max as Brutalist Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-2">
                <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="w-8 h-8 rounded-none border-2 border-black bg-[#FF462D] text-white flex items-center justify-center font-mono font-black text-sm mb-3">
                      01
                    </span>
                    <h3 className="text-sm sm:text-base font-black uppercase font-mono text-black leading-snug mb-2">
                      No Digital Infrastructure
                    </h3>
                    <p className="text-xs sm:text-sm font-bold uppercase text-zinc-700 leading-relaxed font-sans">
                      100% of orders ran over phone calls and WhatsApp voice notes — resulting in lost requests and meal prep confusion.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-black text-[#FF462D] uppercase tracking-wider">
                    // 10-MIN PER ORDER CHAT OVERHEAD
                  </span>
                </div>

                <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="w-8 h-8 rounded-none border-2 border-black bg-black text-[#FAED00] flex items-center justify-center font-mono font-black text-sm mb-3">
                      02
                    </span>
                    <h3 className="text-sm sm:text-base font-black uppercase font-mono text-black leading-snug mb-2">
                      Zero Tracking &amp; Payment Records
                    </h3>
                    <p className="text-xs sm:text-sm font-bold uppercase text-zinc-700 leading-relaxed font-sans">
                      No order status visibility for pending meals, no driver GPS coordinates, and zero automated payment confirmations.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-black text-black uppercase tracking-wider">
                    // MANUAL CASH &amp; UNVERIFIED UPI
                  </span>
                </div>

                <div className="p-5 sm:p-6 bg-[#FAED00] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="w-8 h-8 rounded-none border-2 border-black bg-black text-white flex items-center justify-center font-mono font-black text-sm mb-3">
                      ★
                    </span>
                    <h3 className="text-sm sm:text-base font-black uppercase font-mono text-black leading-snug mb-2">
                      The Core Design Goal
                    </h3>
                    <p className="text-xs sm:text-sm font-black uppercase text-black leading-relaxed font-sans">
                      Preserve the warm, personal feel of ordering home-cooked meals from a friend, while delivering enterprise operational reliability.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-black text-black uppercase tracking-wider">
                    // WARMTH + BULLETPROOF DISPATCH
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ─── WINDOW_02.5 // INFORMATION ARCHITECTURE ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/40" />
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-black ml-1.5 truncate">
                  WINDOW_02.5 // INFORMATION ARCHITECTURE
                </span>
              </div>
              <span className="px-2 py-0.5 bg-black text-white font-black text-[9px] uppercase tracking-widest border border-black">
                SYSTEM FLOWS
              </span>
            </div>

            <div className="p-5 sm:p-8 md:p-10 space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest text-[#FF462D] block mb-1">
                  // CROSS-SURFACE USER JOURNEYS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-mono leading-tight">
                  ONE FLOW LINE PER SURFACE
                </h2>
              </div>

              {/* One flow line per surface */}
              <div className="space-y-3 font-mono">
                {/* Surface 1: Customer PWA */}
                <div className="p-3.5 sm:p-4 bg-[#FAF9F5] border-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className="px-2 py-0.5 bg-[#BD2320] text-white font-black text-[10px] tracking-wider uppercase border border-black">
                      CUSTOMER PWA
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-bold text-black">
                    <span className="px-2 py-1 bg-white border border-black">Login</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-white border border-black">Menu</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-[#FAED00] border border-black">Slot Picker</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-white border border-black">Cart</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-white border border-black">Checkout</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-black text-white border border-black">Live Tracking</span>
                  </div>
                </div>

                {/* Surface 2: Admin Dashboard */}
                <div className="p-3.5 sm:p-4 bg-[#FAF9F5] border-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className="px-2 py-0.5 bg-black text-[#F5E32D] font-black text-[10px] tracking-wider uppercase border border-black">
                      ADMIN DASHBOARD
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-bold text-black">
                    <span className="px-2 py-1 bg-black text-white border border-black">Single-View Live Orders</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-white border border-black">Driver Dispatch</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-[#FAED00] border border-black">Offers &amp; Promo Engine</span>
                  </div>
                </div>

                {/* Surface 3: Driver App */}
                <div className="p-3.5 sm:p-4 bg-[#FAF9F5] border-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className="px-2 py-0.5 bg-[#12833F] text-white font-black text-[10px] tracking-wider uppercase border border-black">
                      DRIVER APP
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-bold text-black">
                    <span className="px-2 py-1 bg-white border border-black">Auto-PIN Login</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-white border border-black">Assigned Orders</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-[#FAED00] border border-black">Navigate</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-black text-white border border-black">Mark Delivered</span>
                  </div>
                </div>

                {/* Surface 4: WhatsApp Bot */}
                <div className="p-3.5 sm:p-4 bg-[#FAF9F5] border-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className="px-2 py-0.5 bg-[#22C55E] text-white font-black text-[10px] tracking-wider uppercase border border-black">
                      WHATSAPP BOT
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-bold text-black">
                    <span className="px-2 py-1 bg-white border border-black">Order Event</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-white border border-black">Rich Confirmation</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-[#FAED00] border border-black">Live GPS Link</span>
                    <span className="text-[#FF462D] font-black">→</span>
                    <span className="px-2 py-1 bg-black text-white border border-black">5-Star Rate</span>
                  </div>
                </div>
              </div>

              {/* Rationale Quote Card */}
              <div className="p-4 sm:p-5 bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(250,237,0,1)] flex items-start gap-3">
                <span className="text-xl font-mono text-[#FAED00]">✦</span>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
                    // UX ARCHITECTURE RATIONALE
                  </span>
                  <p className="text-xs sm:text-base font-black uppercase tracking-wide text-white leading-relaxed font-mono">
                    &ldquo;Flattened to 4 taps max — older, non-tech customers abandon deep nested navigation flows.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ─── WINDOW_03 // RESEARCH → DECISIONS ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/40" />
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-black ml-1.5 truncate">
                  WINDOW_03 // RESEARCH → DECISIONS
                </span>
              </div>
              <span className="px-2 py-0.5 bg-black text-[#FAED00] font-black text-[9px] uppercase tracking-widest border border-black">
                CASE_FILE // 03 OF 07
              </span>
            </div>

            <div className="p-5 sm:p-8 md:p-10 space-y-8">
              <div>
                <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest text-[#FF462D] block mb-1">
                  // CORE INSIGHTS TRANSLATED TO INTERACTION
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-mono leading-tight">
                  ONE LINE EACH: OBSERVATION → EXECUTION
                </h2>
              </div>

              {/* 4 One-line Research Decisions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs sm:text-sm">
                <div className="p-4 bg-[#FAF9F5] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-[10px] font-black uppercase text-zinc-500 block mb-1">01 / USER DEMOGRAPHICS</span>
                  <span className="font-bold text-zinc-600 block mb-1">Non-tech users</span>
                  <span className="text-black font-black uppercase block text-sm sm:text-base">
                    → OTP-only login (zero passwords, &lt;10s into menu)
                  </span>
                </div>

                <div className="p-4 bg-[#FAF9F5] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-[10px] font-black uppercase text-zinc-500 block mb-1">02 / HOME KITCHEN REALITY</span>
                  <span className="font-bold text-zinc-600 block mb-1">Fixed prep times</span>
                  <span className="text-black font-black uppercase block text-sm sm:text-base">
                    → 24hr slot picker with soft visual constraints
                  </span>
                </div>

                <div className="p-4 bg-[#FAF9F5] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-[10px] font-black uppercase text-zinc-500 block mb-1">03 / KITCHEN SHIFT OPERATIONALITY</span>
                  <span className="font-bold text-zinc-600 block mb-1">Kitchen glanceable state</span>
                  <span className="text-black font-black uppercase block text-sm sm:text-base">
                    → OLED dark, color-coded real-time dashboard
                  </span>
                </div>

                <div className="p-4 bg-[#FAF9F5] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-[10px] font-black uppercase text-zinc-500 block mb-1">04 / FIELD ENVIRONMENT</span>
                  <span className="font-bold text-zinc-600 block mb-1">Drivers on motorcycle</span>
                  <span className="text-black font-black uppercase block text-sm sm:text-base">
                    → Single-hand UI with auto 10-digit PIN lookup
                  </span>
                </div>
              </div>

              {/* Real Mobile App Screen Progressions */}
              <div className="pt-4 border-t-2 border-black">
                <div className="flex items-center justify-between mb-4 font-mono">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black">
                    // CUSTOMER PWA SCREEN PROGRESSION
                  </span>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase">
                    5 KEY SCREENS
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                  {/* Screen 1: Phone Login */}
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

                  {/* Screen 2: OTP Verify */}
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

                  {/* Screen 3: Browse Menu */}
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

                  {/* Screen 4: Cart Bottom Sheet */}
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

                  {/* Screen 5: Checkout & Razorpay */}
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

          {/* ─── WINDOW_04 // DESIGN SYSTEM ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/40" />
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-black ml-1.5 truncate">
                  WINDOW_04 // DESIGN SYSTEM
                </span>
              </div>
              <span className="px-2 py-0.5 bg-black text-[#0FE0E3] font-black text-[9px] uppercase tracking-widest border border-black">
                CASE_FILE // 04 OF 07
              </span>
            </div>

            <div className="p-5 sm:p-8 md:p-10 space-y-8">
              <div>
                <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest text-[#FF462D] block mb-1">
                  // THREE DISTINCT SURFACES · ONE UNIFIED LANGUAGE
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-mono leading-tight">
                  SWATCHES, TYPE SCALES &amp; SURFACE PERSONALITY
                </h2>
                <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-zinc-600 mt-1">
                  Shared thread: <span className="text-[#BD2320] font-black">#BD2320 RED</span> + <span className="text-black font-black">OUTFIT</span> thread all three surfaces.
                </p>
              </div>

              {/* Surface Switcher Tabs */}
              <div className="flex flex-wrap gap-2 border-b-2 border-black pb-3 font-mono">
                <button
                  type="button"
                  onClick={() => setActiveSurfaceTab("pwa")}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
                    activeSurfaceTab === "pwa"
                      ? "bg-[#BD2320] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white hover:bg-zinc-100 text-black"
                  }`}
                >
                  01 / CUSTOMER PWA
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSurfaceTab("admin")}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
                    activeSurfaceTab === "admin"
                      ? "bg-black text-[#F5E32D] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white hover:bg-zinc-100 text-black"
                  }`}
                >
                  02 / KITCHEN ADMIN
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSurfaceTab("driver")}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
                    activeSurfaceTab === "driver"
                      ? "bg-[#12833F] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white hover:bg-zinc-100 text-black"
                  }`}
                >
                  03 / DRIVER APP
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[220px]">
                {activeSurfaceTab === "pwa" && (
                  <div className="space-y-6">
                    <div className="p-4 bg-[#FAF9F5] border-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">SURFACE PERSONALITY</span>
                        <h4 className="text-base sm:text-lg font-black uppercase font-mono text-black">
                          Customer PWA: Light glassmorphism, iOS-inspired, warm and personal
                        </h4>
                      </div>
                      <span className="px-2.5 py-1 bg-white text-[#BD2320] font-mono text-xs font-black uppercase border border-black shrink-0">
                        MOBILE-FIRST PWA
                      </span>
                    </div>

                    {/* Palette Swatches */}
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 block mb-2">
                        COLOR PALETTE (ACTUAL HEX TOKENS):
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
                        <div className="p-3 border-2 border-black bg-[#F5F5F7]">
                          <div className="w-6 h-6 rounded-full border border-black bg-[#F5F5F7] mb-2" />
                          <span className="font-bold block">#F5F5F7</span>
                          <span className="text-[10px] text-zinc-500 uppercase">Apple Base</span>
                        </div>
                        <div className="p-2.5 sm:p-3 border-2 border-black bg-white overflow-hidden">
                          <div className="w-6 h-6 rounded-full border border-black bg-white/75 backdrop-blur-md mb-2 shadow-inner" />
                          <span className="font-bold block text-[10px] sm:text-xs break-all leading-tight">
                            rgba(255,255,255,0.72)
                          </span>
                          <span className="text-[9px] sm:text-[10px] text-zinc-500 uppercase block mt-0.5">Glass Surface</span>
                        </div>
                        <div className="p-3 border-2 border-black bg-[#BD2320] text-white">
                          <div className="w-6 h-6 rounded-full border border-white bg-[#BD2320] mb-2" />
                          <span className="font-bold block">#BD2320</span>
                          <span className="text-[10px] text-zinc-200 uppercase">Brand Red CTA</span>
                        </div>
                        <div className="p-3 border-2 border-black bg-[#1A1A1A] text-white">
                          <div className="w-6 h-6 rounded-full border border-zinc-500 bg-[#1A1A1A] mb-2" />
                          <span className="font-bold block">#1A1A1A</span>
                          <span className="text-[10px] text-zinc-400 uppercase">Text Primary</span>
                        </div>
                        <div className="p-3 border-2 border-black bg-[#22c55e] text-white">
                          <div className="w-6 h-6 rounded-full border border-white bg-[#22c55e] mb-2" />
                          <span className="font-bold block">#22C55E</span>
                          <span className="text-[10px] text-zinc-100 uppercase">Success Green</span>
                        </div>
                      </div>
                    </div>

                    {/* Typography Pills */}
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 block mb-2">
                        TYPOGRAPHY SPECIFICATION (OUTFIT ROUNDED):
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-black text-white font-mono text-xs font-bold uppercase border border-black">
                          Outfit · 36px Display (Splash)
                        </span>
                        <span className="px-3 py-1.5 bg-[#FAED00] text-black font-mono text-xs font-black uppercase border border-black">
                          17px Input (Anti-Zoom on iOS)
                        </span>
                        <span className="px-3 py-1.5 bg-black text-white font-mono text-xs font-bold uppercase border border-black">
                          16px / 900 Heavy Price Display
                        </span>
                        <span className="px-3 py-1.5 bg-zinc-100 text-black font-mono text-xs font-bold uppercase border border-black">
                          15px / 800 Primary Button
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeSurfaceTab === "admin" && (
                  <div className="space-y-6">
                    <div className="p-4 bg-black text-white border-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">SURFACE PERSONALITY</span>
                        <h4 className="text-base sm:text-lg font-black uppercase font-mono text-[#F5E32D]">
                          Kitchen Dashboard: OLED true-black control centre, high-contrast operational status
                        </h4>
                      </div>
                      <span className="px-2.5 py-1 bg-[#1A1A1A] text-white font-mono text-xs font-bold uppercase border border-zinc-700 shrink-0">
                        DESKTOP &amp; KITCHEN MOUNT
                      </span>
                    </div>

                    {/* Palette Swatches */}
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 block mb-2">
                        COLOR PALETTE (OLED-FRIENDLY):
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs">
                        <div className="p-3 border-2 border-black bg-black text-white">
                          <div className="w-6 h-6 rounded-full border border-zinc-700 bg-black mb-2" />
                          <span className="font-bold block">#000000</span>
                          <span className="text-[10px] text-zinc-400 uppercase">OLED Black</span>
                        </div>
                        <div className="p-3 border-2 border-black bg-[#0D0D0F] text-white">
                          <div className="w-6 h-6 rounded-full border border-zinc-700 bg-[#0D0D0F] mb-2" />
                          <span className="font-bold block">#0D0D0F</span>
                          <span className="text-[10px] text-zinc-400 uppercase">Card Surface</span>
                        </div>
                        <div className="p-3 border-2 border-black bg-[#F5E32D] text-black">
                          <div className="w-6 h-6 rounded-full border border-black bg-[#F5E32D] mb-2" />
                          <span className="font-bold block">#F5E32D</span>
                          <span className="text-[10px] text-black uppercase">Pending Yellow</span>
                        </div>
                        <div className="p-3 border-2 border-black bg-[#3B82F6] text-white">
                          <div className="w-6 h-6 rounded-full border border-white bg-[#3B82F6] mb-2" />
                          <span className="font-bold block">#3B82F6</span>
                          <span className="text-[10px] text-white uppercase">Preparing Blue</span>
                        </div>
                        <div className="p-3 border-2 border-black bg-[#22C55E] text-white">
                          <div className="w-6 h-6 rounded-full border border-white bg-[#22C55E] mb-2" />
                          <span className="font-bold block">#22C55E</span>
                          <span className="text-[10px] text-white uppercase">Delivered Green</span>
                        </div>
                      </div>
                    </div>

                    {/* Typography Pills */}
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 block mb-2">
                        TYPOGRAPHY &amp; CONTAINER QUERIES:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-black text-[#F5E32D] font-mono text-xs font-bold uppercase border border-black">
                          clamp(22px, 5.5vw, 30px) Fluid Headers
                        </span>
                        <span className="px-3 py-1.5 bg-black text-white font-mono text-xs font-bold uppercase border border-black">
                          Container Queries (@container &lt;420px switches to vertical)
                        </span>
                        <span className="px-3 py-1.5 bg-zinc-100 text-black font-mono text-xs font-bold uppercase border border-black">
                          Non-blocking Framer Motion Modals
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeSurfaceTab === "driver" && (
                  <div className="space-y-6">
                    <div className="p-4 bg-[#FAF9F5] border-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">SURFACE PERSONALITY</span>
                        <h4 className="text-base sm:text-lg font-black uppercase font-mono text-black">
                          Driver App: Light &amp; low-chroma for outdoor daylight &amp; bright sunlight legibility
                        </h4>
                      </div>
                      <span className="px-2.5 py-1 bg-[#12833F] text-white font-mono text-xs font-black uppercase border border-black shrink-0">
                        OUTDOOR HIGH CONTRAST
                      </span>
                    </div>

                    {/* Palette Swatches */}
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 block mb-2">
                        COLOR PALETTE (SUNLIGHT READABLE):
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                        <div className="p-3 border-2 border-black bg-white">
                          <div className="w-6 h-6 rounded-full border border-black bg-white mb-2" />
                          <span className="font-bold block">#FFFFFF</span>
                          <span className="text-[10px] text-zinc-500 uppercase">Pure White Sheet</span>
                        </div>
                        <div className="p-3 border-2 border-black bg-[#F6F6F7]">
                          <div className="w-6 h-6 rounded-full border border-black bg-[#F6F6F7] mb-2" />
                          <span className="font-bold block">#F6F6F7</span>
                          <span className="text-[10px] text-zinc-500 uppercase">App Canvas</span>
                        </div>
                        <div className="p-3 border-2 border-black bg-[#101010] text-white">
                          <div className="w-6 h-6 rounded-full border border-zinc-700 bg-[#101010] mb-2" />
                          <span className="font-bold block">#101010</span>
                          <span className="text-[10px] text-zinc-400 uppercase">Near-Black Contrast</span>
                        </div>
                        <div className="p-3 border-2 border-black bg-[#12833F] text-white">
                          <div className="w-6 h-6 rounded-full border border-white bg-[#12833F] mb-2" />
                          <span className="font-bold block">#12833F</span>
                          <span className="text-[10px] text-zinc-100 uppercase">Forest Green COD</span>
                        </div>
                      </div>
                    </div>

                    {/* Typography Pills */}
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 block mb-2">
                        DRIVER ERGONOMICS SPEC:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-black text-white font-mono text-xs font-bold uppercase border border-black">
                          Outfit · 24px Bold Screen Title
                        </span>
                        <span className="px-3 py-1.5 bg-[#FAED00] text-black font-mono text-xs font-black uppercase border border-black">
                          RADIUS.control: 14px Touch Targets
                        </span>
                        <span className="px-3 py-1.5 bg-black text-white font-mono text-xs font-bold uppercase border border-black">
                          10-Digit Auto-Detect API Trigger
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ─── WINDOW_05 // CHALLENGES SOLVED ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/40" />
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-black ml-1.5 truncate">
                  WINDOW_05 // CHALLENGES SOLVED
                </span>
              </div>
              <span className="px-2 py-0.5 bg-black text-[#FF462D] font-black text-[9px] uppercase tracking-widest border border-black">
                CASE_FILE // 05 OF 07
              </span>
            </div>

            <div className="p-5 sm:p-8 md:p-10 space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest text-[#FF462D] block mb-1">
                  // CRITICAL BUGS &amp; ARCHITECTURAL SOLUTIONS
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-mono leading-tight">
                  PROBLEM → FIX (ONE LINE EACH)
                </h2>
              </div>

              {/* 4 Callout Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Challenge 1 */}
                <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase text-[#FF462D] block mb-1">
                      CHALLENGE 01 // PWA REGISTRATION
                    </span>
                    <h4 className="text-base font-black font-mono uppercase text-black mb-2">
                      Two PWAs, One Single Domain
                    </h4>
                    <p className="text-xs sm:text-sm font-bold uppercase text-zinc-700 leading-relaxed font-sans mb-3">
                      Chrome suppresses the install prompt if an app from the same origin is already installed.
                    </p>
                  </div>
                  <div className="pt-3 border-t-2 border-black/10 font-mono text-xs font-black text-black bg-white p-2.5 border border-black">
                    <span className="text-emerald-700">FIX:</span> Separate dynamic manifests &amp; scope-aware service workers (`/` vs `/driver/`).
                  </div>
                </div>

                {/* Challenge 2 */}
                <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase text-[#FF462D] block mb-1">
                      CHALLENGE 02 // SAFARI VIEWPORT JANK
                    </span>
                    <h4 className="text-base font-black font-mono uppercase text-black mb-2">
                      iOS Safari Auto-Zoom on Inputs
                    </h4>
                    <p className="text-xs sm:text-sm font-bold uppercase text-zinc-700 leading-relaxed font-sans mb-3">
                      Tapping input fields on iPhone automatically zoomed the viewport, breaking full-screen PWA feel.
                    </p>
                  </div>
                  <div className="pt-3 border-t-2 border-black/10 font-mono text-xs font-black text-black bg-white p-2.5 border border-black">
                    <span className="text-emerald-700">FIX:</span> Strict 17px input font size silently bypasses Safari&apos;s 16px auto-zoom trigger.
                  </div>
                </div>

                {/* Challenge 3 */}
                <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase text-[#FF462D] block mb-1">
                      CHALLENGE 03 // LAYOUT STABILITY
                    </span>
                    <h4 className="text-base font-black font-mono uppercase text-black mb-2">
                      Promo Code Layout Jump
                    </h4>
                    <p className="text-xs sm:text-sm font-bold uppercase text-zinc-700 leading-relaxed font-sans mb-3">
                      Validating promo codes caused an empty white box and visual layout jump during async API calls.
                    </p>
                  </div>
                  <div className="pt-3 border-t-2 border-black/10 font-mono text-xs font-black text-black bg-white p-2.5 border border-black">
                    <span className="text-emerald-700">FIX:</span> `AnimatePresence mode=&quot;wait&quot;` cross-fade with in-place spinning spinner.
                  </div>
                </div>

                {/* Challenge 4 */}
                <div className="p-5 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase text-[#FF462D] block mb-1">
                      CHALLENGE 04 // OPERATIONAL UX
                    </span>
                    <h4 className="text-base font-black font-mono uppercase text-black mb-2">
                      Native `window.confirm()` Thread Freeze
                    </h4>
                    <p className="text-xs sm:text-sm font-bold uppercase text-zinc-700 leading-relaxed font-sans mb-3">
                      Browser-native alert dialogs looked alien in a dark dashboard and blocked the JS animation thread.
                    </p>
                  </div>
                  <div className="pt-3 border-t-2 border-black/10 font-mono text-xs font-black text-black bg-white p-2.5 border border-black">
                    <span className="text-emerald-700">FIX:</span> Custom Framer Motion dark modal system with non-blocking spring physics.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── WINDOW_06 // OUTCOMES ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/40" />
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-black ml-1.5 truncate">
                  WINDOW_06 // OUTCOMES
                </span>
              </div>
              <span className="px-2 py-0.5 bg-black text-[#FAED00] font-black text-[9px] uppercase tracking-widest border border-black">
                CASE_FILE // 06 OF 07
              </span>
            </div>

            <div className="p-5 sm:p-8 md:p-10 space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest text-[#FF462D] block mb-1">
                  // QUANTIFIABLE BUSINESS IMPACT
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-mono leading-tight">
                  MEASURED RESULTS IN PRODUCTION
                </h2>
              </div>

              {/* 4 Brutalist Stat Tiles (Matching V2 Hero Stats Style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-black bg-white font-mono">
                {/* Stat 1 */}
                <div className="p-5 sm:p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-black flex flex-col justify-between hover:bg-zinc-50 transition-colors">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FF462D] tracking-tighter leading-none mb-2">
                    10m → 2m
                  </span>
                  <div>
                    <span className="text-xs font-black uppercase text-black block mb-0.5">
                      80% FASTER ORDERS
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                      From chat exchanges to 4-tap checkout
                    </span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="p-5 sm:p-6 border-b-2 sm:border-b-0 lg:border-r-2 border-black flex flex-col justify-between hover:bg-zinc-50 transition-colors">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tighter leading-none mb-2">
                    300ms
                  </span>
                  <div>
                    <span className="text-xs font-black uppercase text-black block mb-0.5">
                      REALTIME GPS SYNC
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                      Driver map gliding with 0.4s CSS ease
                    </span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="p-5 sm:p-6 border-b-2 sm:border-b-0 sm:border-r-2 border-black flex flex-col justify-between hover:bg-zinc-50 transition-colors">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FF462D] tracking-tighter leading-none mb-2">
                    0 BACKEND
                  </span>
                  <div>
                    <span className="text-xs font-black uppercase text-black block mb-0.5">
                      ZERO WEBSOCKET SERVERS
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                      Powered by Supabase PostgreSQL listeners
                    </span>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="p-5 sm:p-6 bg-[#FAED00] flex flex-col justify-between">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tighter leading-none mb-2">
                    100%
                  </span>
                  <div>
                    <span className="text-xs font-black uppercase text-black block mb-0.5">
                      AUTOMATED ONBOARDING
                    </span>
                    <span className="text-[10px] text-black/80 font-bold uppercase tracking-wider block">
                      Driver WhatsApp dispatch &amp; PIN setup
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─── WINDOW_07 // WHAT I LEARNED ─── */}
          <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/40" />
                </div>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-black ml-1.5 truncate">
                  WINDOW_07 // WHAT I LEARNED
                </span>
              </div>
              <span className="px-2 py-0.5 bg-black text-white font-black text-[9px] uppercase tracking-widest border border-black">
                CASE_FILE // 07 OF 07
              </span>
            </div>

            <div className="p-5 sm:p-8 md:p-10 space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest text-[#FF462D] block mb-1">
                  // POST-MORTEM &amp; ENGINEERING TAKEAWAYS
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-black font-mono leading-tight">
                  2 BULLETS MAX: RETROSPECTIVE
                </h2>
              </div>

              {/* 2 Bullets Max */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 font-mono">
                <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-none bg-black text-white flex items-center justify-center text-xs font-black">
                      01
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-[#FF462D]">
                      SYSTEM ARCHITECTURE
                    </span>
                  </div>
                  <h4 className="text-base font-black uppercase text-black mb-2">
                    Build design system tokens before components, not after
                  </h4>
                  <p className="text-xs sm:text-sm font-sans font-bold uppercase text-zinc-700 leading-relaxed">
                    Building components ad-hoc created subtle style drift across surfaces. Defining color tokens and typography scale primitives upfront eliminated technical theming debt.
                  </p>
                </div>

                <div className="p-5 sm:p-6 bg-[#FAF9F5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-none bg-black text-white flex items-center justify-center text-xs font-black">
                      02
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-[#FF462D]">
                      USER RESEARCH
                    </span>
                  </div>
                  <h4 className="text-base font-black uppercase text-black mb-2">
                    Test with real end users earlier, not just client reviews
                  </h4>
                  <p className="text-xs sm:text-sm font-sans font-bold uppercase text-zinc-700 leading-relaxed">
                    Testing with elderly family members and field delivery drivers exposed real-world edge cases (input auto-zoom, sunlight glare) much faster than stakeholder walkthroughs.
                  </p>
                </div>
              </div>

              {/* Tech Specs as Compact Tag Pills Only (No Table) */}
              <div className="pt-6 border-t-2 border-black">
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 block mb-3">
                  COMPLETE PRODUCTION STACK (COMPACT TECH SPEC):
                </span>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {["Next.js 14 (App Router)", "TypeScript", "Supabase (PostgreSQL)", "Supabase Realtime", "Razorpay Payment Gateway", "Meta WhatsApp Cloud API", "Firebase Auth (OTP)", "Framer Motion", "Vercel Edge Functions", "Custom PWA Service Worker", "Gemini AI Pricing Agent"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-black text-white font-bold uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FAED00] hover:text-black transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Closing CTA */}
              <div className="pt-6 border-t-2 border-black flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 select-none">
                <a
                  href="https://www.vidyaskitchenhome.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-4 bg-black text-white hover:bg-zinc-900 border-2 border-black shadow-[4px_4px_0px_0px_rgba(250,237,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-xs sm:text-sm font-black font-mono tracking-widest uppercase flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>OPEN LIVE PRODUCT</span>
                  <ArrowUpRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <Link
                  href="/v2#work"
                  className="px-6 py-4 bg-white text-black hover:bg-zinc-100 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-xs sm:text-sm font-black font-mono tracking-widest uppercase flex items-center justify-center gap-2 transition-all"
                >
                  <ArrowLeft weight="bold" className="w-4 h-4" />
                  <span>BACK TO SELECTED WORK</span>
                </Link>
              </div>
            </div>
          </section>

        </main>
      </div>
    </LenisProvider>
  );
}
