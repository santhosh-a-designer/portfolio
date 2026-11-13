"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, Code, GitBranch, Cpu, ShieldCheck } from "@phosphor-icons/react";
import ArchitectureExplorer from "./ArchitectureExplorer";
import StackToolsSkills from "./StackToolsSkills";
import IADiagram from "./IADiagram";
import UserFlowDiagram from "./UserFlowDiagram";
import TableauSection from "./TableauSection";
import DesignSystemSection from "./DesignSystemSection";
import type { DesignSystemPdfMeta } from "@/lib/designSystemPdfMeta";
import {
  vidyasArchitectureTree,
  vidyasFlowDiagrams,
  vidyasIADiagram,
  vidyasSkills,
  vidyasTools,
} from "@/lib/vidyasKitchenCaseStudyContent";

interface Props {
  designSystemPdfMeta: DesignSystemPdfMeta;
}

export default function ForEngineersSection({ designSystemPdfMeta }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="engineers" className="scroll-mt-24 border-t border-b sm:border border-black/20 bg-zinc-900 text-white select-none">
      {/* Accordion Toggle Bar */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full h-16 sm:h-20 px-6 sm:px-10 flex items-center justify-between gap-4 bg-zinc-900 hover:bg-zinc-800/90 transition-colors text-left cursor-pointer focus:outline-none"
      >
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[#BD2320] shrink-0">
            <Code weight="bold" className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#BD2320]">
                COLLAPSIBLE ARCHIVE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <h3 className="font-mono text-sm sm:text-base md:text-lg font-black uppercase tracking-tight text-white truncate">
              FOR ENGINEERS &amp; ARCHITECTS // DEEP-DIVE
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider hidden md:inline">
            {isOpen ? "Collapse Spec [-]" : "Inspect Architecture & Code [+]"}
          </span>
          <div className={`w-8 h-8 rounded border border-zinc-700 flex items-center justify-center text-zinc-300 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#BD2320] text-white border-[#BD2320]" : "bg-zinc-800"}`}>
            <CaretDown weight="bold" className="w-4 h-4" />
          </div>
        </div>
      </button>

      {/* Accordion Content Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-zinc-800 bg-zinc-950/80"
          >
            <div className="p-6 sm:p-10 md:p-12 space-y-16">
              {/* Architecture Spec Excerpts Disclosure */}
              {/* TODO: Add public repository link once client permission is confirmed */}
              <div className="p-4 sm:p-5 bg-zinc-900 border border-zinc-800 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2 text-zinc-300 font-bold uppercase text-[11px] tracking-wider">
                  <ShieldCheck weight="bold" className="w-4 h-4 text-[#BD2320]" />
                  <span>Architecture Excerpts &amp; Engineering Specification</span>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Key modules shown below are redacted architectural excerpts from the production codebase, illustrating finite state machine controllers, Meta Cloud API webhook signatures, and stove-side ambient alert synthesis.
                </p>
              </div>

              {/* Sub-section 1: Codebase Explorer */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-zinc-800 font-mono">
                  <h4 className="text-sm sm:text-base font-black uppercase text-white tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
                    <span>01 // Architecture Excerpts &amp; State Transitions</span>
                  </h4>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                    NEXT.JS 15 ROUTE HANDLERS + SUPABASE
                  </span>
                </div>
                <ArchitectureExplorer tree={vidyasArchitectureTree} windowTitle="vidyas-kitchen — VS Code" defaultSelectedId="order-status" />
              </div>

              {/* Sub-section 2: Stack & Tools */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-zinc-800 font-mono">
                  <h4 className="text-sm sm:text-base font-black uppercase text-white tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
                    <span>02 // Full Stack &amp; Design-Engineering Competencies</span>
                  </h4>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    Production Stack
                  </span>
                </div>
                <StackToolsSkills skills={vidyasSkills} tools={vidyasTools} />
              </div>

              {/* Sub-section 3: Information Architecture & User Flows */}
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-zinc-800 font-mono">
                  <h4 className="text-sm sm:text-base font-black uppercase text-white tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
                    <span>03 // Information Architecture &amp; Lifecycle User Flows</span>
                  </h4>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    4 Surfaces · 1 Order Record
                  </span>
                </div>

                <div className="bg-white text-black p-6 sm:p-8 rounded-sm">
                  <h5 className="font-mono font-black text-xs uppercase mb-3 text-center tracking-wider text-black">
                    Information Architecture
                  </h5>
                  <IADiagram
                    root={vidyasIADiagram.root}
                    subtitle={vidyasIADiagram.subtitle}
                    columns={vidyasIADiagram.columns}
                  />
                </div>

                <div className="bg-white text-black p-6 sm:p-8 rounded-sm">
                  <h5 className="font-mono font-black text-xs uppercase mb-3 text-center tracking-wider text-black">
                    End-to-End User Flows
                  </h5>
                  <UserFlowDiagram flows={vidyasFlowDiagrams} />
                </div>
              </div>

              {/* Sub-section 4: Tableau Analytics */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-zinc-800 font-mono">
                  <h4 className="text-sm sm:text-base font-black uppercase text-white tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
                    <span>04 // Operations Visibility &amp; Tableau Telemetry</span>
                  </h4>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    Daily P&amp;L + Order Funnel
                  </span>
                </div>
                <TableauSection num="TECH" />
              </div>

              {/* Sub-section 5: Design System Tokens */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-zinc-800 font-mono">
                  <h4 className="text-sm sm:text-base font-black uppercase text-white tracking-wide flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
                    <span>05 // Design System Tokens &amp; Component Matrices</span>
                  </h4>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                    Multi-Surface Figma Token Library
                  </span>
                </div>
                <div className="bg-white text-black p-6 sm:p-8 rounded-sm">
                  <DesignSystemSection pdfMeta={designSystemPdfMeta} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
