"use client";

import React from "react";
import { ArrowSquareOut, Lightning, CheckCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function RapidAiSprintBlock() {
  return (
    <div className="w-full bg-[#0A58CA] border-b-2 border-black p-5 sm:p-7 md:p-9 text-white relative overflow-hidden select-none">
      {/* Background Micro Grid Detail */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-10 max-w-[1360px] mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/20 mb-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAED00] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Lightning weight="fill" className="w-3.5 h-3.5 text-black" />
              24-HOUR RAPID AI SPRINT
            </span>
            <span className="text-white/80 font-mono text-xs uppercase tracking-wider">
              // AWS re/Start × Cultus Education
            </span>
          </div>

          <a
            href="https://www.cultusedu.com/aws-restart"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 bg-black hover:bg-zinc-900 text-[#FAED00] font-mono font-bold text-xs uppercase tracking-wider border-2 border-white/40 hover:border-white shadow-[2px_2px_0px_0px_rgba(250,237,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <span>VISIT LIVE PRODUCTION SITE</span>
            <ArrowSquareOut weight="bold" className="w-4 h-4" />
          </a>
        </div>

        {/* Title & Core Summary */}
        <div className="mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-mono font-black uppercase tracking-tight text-white leading-tight mb-2">
            AWS re/Start Admissions Portal
          </h3>
          <p className="text-white/90 font-sans text-sm sm:text-base max-w-4xl font-normal leading-relaxed">
            Zero-to-live nationwide cohort admissions platform redesigned, engineered, and shipped in <span className="text-[#FAED00] font-bold">under 24 hours</span>. Powered by <span className="underline decoration-[#FAED00] underline-offset-4 font-semibold text-white">Cursor AI &amp; Model Context Protocol (MCP) connectors</span> to translate high-fidelity UI directly into WordPress code overnight.
          </p>
        </div>

        {/* Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-6 font-mono">
          <div className="p-3 bg-black/30 border border-white/20 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-black text-[#FAED00] leading-none mb-1">10,000+</div>
            <div className="text-[11px] text-white/80 uppercase tracking-wider">Applications Captured</div>
          </div>
          <div className="p-3 bg-black/30 border border-white/20 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-black text-[#FAED00] leading-none mb-1">&lt; 24 Hours</div>
            <div className="text-[11px] text-white/80 uppercase tracking-wider">Sprint To Production</div>
          </div>
          <div className="p-3 bg-black/30 border border-white/20 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-black text-[#FAED00] leading-none mb-1">Cursor + MCP</div>
            <div className="text-[11px] text-white/80 uppercase tracking-wider">AI Prompt Toolchain</div>
          </div>
          <div className="p-3 bg-black/30 border border-white/20 backdrop-blur-sm">
            <div className="text-xl sm:text-2xl font-black text-[#FAED00] leading-none mb-1">Pan-India</div>
            <div className="text-[11px] text-white/80 uppercase tracking-wider">AWS Initiative Live</div>
          </div>
        </div>

        {/* STAR Method Breakdown (4 Symmetrical Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Situation */}
          <div className="p-4 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="inline-block px-2 py-0.5 bg-[#0A58CA] text-white font-mono font-black text-[11px] uppercase tracking-wider mb-2 border border-black">
                [S] SITUATION
              </div>
              <p className="text-xs sm:text-[13px] font-sans text-zinc-800 leading-relaxed">
                Cultus Education urgently needed a high-performance landing page for the national AWS re/Start cloud workforce initiative. With cohort deadlines looming, the page had to go live nationwide in under 24 hours on a legacy WordPress infrastructure outside my regular stack.
              </p>
            </div>
          </div>

          {/* Task */}
          <div className="p-4 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="inline-block px-2 py-0.5 bg-[#0A58CA] text-white font-mono font-black text-[11px] uppercase tracking-wider mb-2 border border-black">
                [T] TASK
              </div>
              <p className="text-xs sm:text-[13px] font-sans text-zinc-800 leading-relaxed">
                Overhaul the outdated layout into a modern, mobile-first admissions portal. Strip friction from multi-step registration forms, ensure fast load times for low-bandwidth learners, and deploy without missing the 1-day launch window.
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="p-4 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="inline-block px-2 py-0.5 bg-[#0A58CA] text-white font-mono font-black text-[11px] uppercase tracking-wider mb-2 border border-black">
                [A] ACTION
              </div>
              <p className="text-xs sm:text-[13px] font-sans text-zinc-800 leading-relaxed">
                Rather than getting blocked by WordPress intricacies, I integrated <strong>Cursor AI with MCP connectors</strong> to directly interface with the codebase. Using prompt-driven synthesis, I rapidly bridged high-fidelity layouts into production PHP/CSS templates overnight.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="p-4 bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="inline-block px-2 py-0.5 bg-[#0A58CA] text-white font-mono font-black text-[11px] uppercase tracking-wider mb-2 border border-black">
                [R] RESULT
              </div>
              <p className="text-xs sm:text-[13px] font-sans text-zinc-800 leading-relaxed">
                Launched within 24 hours at <strong>cultusedu.com/aws-restart</strong>. The streamlined admissions funnel successfully captured <strong>10,000+ student applications across India</strong> with high uptime and stable submission flow.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Proof Line */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/80 pt-3 border-t border-white/20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-bold text-white uppercase tracking-wider">Live &amp; Active Production Link:</span>
            <a 
              href="https://www.cultusedu.com/aws-restart" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FAED00] hover:underline font-bold"
            >
              cultusedu.com/aws-restart ↗
            </a>
          </div>
          <span className="text-[11px] text-white/60">
            [VERIFIED_AWS_RESTART_INITIATIVE]
          </span>
        </div>
      </div>
    </div>
  );
}
