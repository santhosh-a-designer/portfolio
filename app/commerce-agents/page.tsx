import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import DotMatrixLogoCanvas from "./components/DotMatrixLogoCanvas";

export const metadata: Metadata = {
  title: "Commerce Agents — Product Studio & Commerce Engineering",
  description:
    "Commerce Agents is a 0→1 digital product studio and design engineering practice based in Chennai, India. Specializing in high-trust commerce platforms, operational telemetry dashboards, and scalable design systems.",
};

export default function CommerceAgentsPage() {
  return (
    <div className="min-h-screen bg-[#040608] font-sans text-[#e2e8f0] selection:bg-[#FF7410] selection:text-black">
      {/* Top Fixed Terminal Header */}
      <header className="sticky top-0 z-50 border-b border-[#181f28] bg-[#040608]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 items-center justify-center">
              <span className="h-2 w-2 animate-ping rounded-full bg-[#FF7410] opacity-75" />
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
                COMMERCE AGENTS
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#64748b]">
                PRODUCT STUDIO · CHENNAI
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-6 font-mono text-[11px] text-[#94a3b8] md:flex">
            <span>[ LAT: 13.0583° N ]</span>
            <span>[ LON: 80.2508° E ]</span>
            <span className="text-[#22c55e]">[ STATUS: ONLINE ]</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="border border-[#1e242d] bg-[#0c1015] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[#94a3b8] transition-colors hover:border-[#FF7410] hover:text-white"
            >
              [ &larr; PORTFOLIO ]
            </Link>
            <a
              href="#contact"
              className="border border-[#FF7410] bg-[#FF7410] px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-black transition-opacity hover:opacity-90"
            >
              INITIATE TALK
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Section 01: The Hero Header (Cyber-Brutalist Layout - Ref Image 1 & 2) */}
        <section className="relative mb-16 overflow-hidden border border-[#1e242d] bg-[#07090c] p-6 sm:p-10 lg:p-14">
          {/* Subtle Ambient Grid Background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex flex-col justify-between">
            {/* Top Breadcrumb Badges */}
            <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF7410]">
              <span className="border border-[#FF7410]/30 bg-[#FF7410]/10 px-2 py-0.5">
                DISCIPLINE // 0→1 PRODUCT DESIGN &amp; ENGINEERING
              </span>
              <span className="border border-[#1e242d] bg-[#0c1015] px-2 py-0.5 text-[#94a3b8]">
                LOCATION // NUNGAMBAKKAM, CHENNAI
              </span>
            </div>

            {/* Massive Technical Headline */}
            <h1 className="font-title text-3xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              COMMERCE ENGINES &amp;
              <br />
              <span className="text-[#FF7410]">OPERATIONAL SYSTEMS</span>
            </h1>

            {/* Core Mission Statement */}
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#94a3b8] sm:text-lg">
              We design and engineer production-grade digital products for ambitious brands and high-consequence
              operational platforms. Combining advanced Figma design system architecture with hands-on technical
              engineering (React, Supabase, Next.js, and IoT telemetry). We build systems that perform, not static
              mockups.
            </p>

            {/* Live Metrics Grid (Ref Image 1 & 5) */}
            <div className="mt-10 grid grid-cols-2 gap-px border border-[#1e242d] bg-[#1e242d] sm:grid-cols-4">
              <div className="bg-[#090d12] p-4 sm:p-5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#64748b]">[ TRACK RECORD ]</div>
                <div className="mt-2 text-2xl font-black text-white sm:text-3xl">6+ YRS</div>
                <div className="mt-1 font-mono text-[10px] text-[#94a3b8]">Full-Stack Design Practice</div>
              </div>

              <div className="bg-[#090d12] p-4 sm:p-5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#64748b]">[ ENTERPRISE LIFT ]</div>
                <div className="mt-2 text-2xl font-black text-[#FF7410] sm:text-3xl">+31%</div>
                <div className="mt-1 font-mono text-[10px] text-[#94a3b8]">Booking Rate (Parla / NFM)</div>
              </div>

              <div className="bg-[#090d12] p-4 sm:p-5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#64748b]">[ TELEMETRY SCALE ]</div>
                <div className="mt-2 text-2xl font-black text-white sm:text-3xl">2,000+</div>
                <div className="mt-1 font-mono text-[10px] text-[#94a3b8]">EV Batteries Monitored</div>
              </div>

              <div className="bg-[#090d12] p-4 sm:p-5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#64748b]">[ COMMISSION CUT ]</div>
                <div className="mt-2 text-2xl font-black text-[#22c55e] sm:text-3xl">0%</div>
                <div className="mt-1 font-mono text-[10px] text-[#94a3b8]">Direct Kitchen Dispatch</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Interactive Dot-Matrix Logo Constellation Engine */}
        <section className="mb-16">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF7410]">
                [ 02 // ROSTER INTERACTION ]
              </span>
              <h2 className="mt-1 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                CLIENT &amp; PLATFORM CONSTELLATION
              </h2>
            </div>
            <div className="hidden font-mono text-xs text-[#64748b] sm:block">
              &gt; Select nodes to morph vector particle fields_
            </div>
          </div>

          {/* Interactive Canvas */}
          <DotMatrixLogoCanvas />
        </section>
      </main>

      {/* Footer System Status */}
      <footer className="border-t border-[#181f28] bg-[#07090c] py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 font-mono text-xs text-[#64748b] sm:px-6 lg:px-8">
          <div>
            <span>COMMERCE AGENTS &copy; 2026 // PRODUCT STUDIO</span>
          </div>
          <div className="flex items-center gap-4">
            <span>CHENNAI // TAMIL NADU</span>
            <span>&bull;</span>
            <span className="text-[#FF7410]">STEP 1 LOADED</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
