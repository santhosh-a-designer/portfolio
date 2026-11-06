"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, User, Bicycle, CookingPot, Quotes, Target, WarningCircle } from "@phosphor-icons/react";
import type { PersonaScenarioCard } from "@/lib/vidyasKitchenCaseStudyContent";

interface Props {
  personas: PersonaScenarioCard[];
}

const PERSONA_THEMES = [
  {
    // 01 Priya M. (Customer · Culinary Crimson & Rose)
    id: "persona-customer",
    cardBg: "bg-[#FFF6F6]",
    cardBorder: "border-[#BD2320]/25",
    accentColor: "#BD2320",
    tabActiveBg: "bg-[#BD2320] text-white border-[#BD2320]",
    avatarBg: "bg-[#BD2320] text-white border-[#BD2320]",
    surfaceTagClass: "bg-white text-zinc-900 border-[#BD2320]/25",
    uxBoxBorder: "border-[#BD2320]",
    techBoxBorder: "border-black",
    quoteAccent: "border-[#BD2320] text-[#BD2320]",
    peekBg1: "bg-[#FFFBEB] border-amber-300/40",
    peekBg2: "bg-[#F0FDF4] border-emerald-300/40",
  },
  {
    // 02 Murugan K. (Driver · Midday Sun Ochre & Amber)
    id: "persona-driver",
    cardBg: "bg-[#FFFBEB]",
    cardBorder: "border-amber-400/35",
    accentColor: "#D97706",
    tabActiveBg: "bg-amber-600 text-white border-amber-600",
    avatarBg: "bg-amber-600 text-white border-amber-600",
    surfaceTagClass: "bg-white text-amber-950 border-amber-400/30",
    uxBoxBorder: "border-amber-500",
    techBoxBorder: "border-black",
    quoteAccent: "border-amber-500 text-amber-600",
    peekBg1: "bg-[#F0FDF4] border-emerald-300/40",
    peekBg2: "bg-[#FFF6F6] border-[#BD2320]/25",
  },
  {
    // 03 Vidya R. (Kitchen Chef · Banana-Leaf / Stove-Side Emerald)
    id: "persona-kitchen",
    cardBg: "bg-[#F0FDF4]",
    cardBorder: "border-emerald-500/30",
    accentColor: "#059669",
    tabActiveBg: "bg-emerald-700 text-white border-emerald-700",
    avatarBg: "bg-emerald-700 text-white border-emerald-700",
    surfaceTagClass: "bg-white text-emerald-950 border-emerald-500/25",
    uxBoxBorder: "border-emerald-600",
    techBoxBorder: "border-black",
    quoteAccent: "border-emerald-600 text-emerald-700",
    peekBg1: "bg-[#FFF6F6] border-[#BD2320]/25",
    peekBg2: "bg-[#FFFBEB] border-amber-300/40",
  },
];

export default function PersonaScenariosSection({ personas }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentPersona = personas[activeIndex] || personas[0];
  const theme = PERSONA_THEMES[activeIndex] || PERSONA_THEMES[0];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % personas.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + personas.length) % personas.length);
  };

  const getPersonaIcon = (id: string) => {
    if (id.includes("driver")) return <Bicycle weight="bold" className="w-4 h-4 text-amber-600" />;
    if (id.includes("kitchen")) return <CookingPot weight="bold" className="w-4 h-4 text-emerald-700" />;
    return <User weight="bold" className="w-4 h-4 text-[#BD2320]" />;
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* ─── Top Control Bar: Tab Navigation + Carousel Arrows ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/15 font-mono">
        {/* Horizontal Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {personas.map((p, idx) => {
            const isActive = idx === activeIndex;
            const tabTheme = PERSONA_THEMES[idx] || PERSONA_THEMES[0];
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-bold uppercase transition-all shrink-0 cursor-pointer select-none border ${
                  isActive
                    ? tabTheme.tabActiveBg
                    : "bg-white text-zinc-600 border-black/15 hover:border-black/40 hover:text-black"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full transition-colors"
                  style={{ backgroundColor: isActive ? "#ffffff" : tabTheme.accentColor }}
                />
                <span>0{idx + 1} // {p.personaName}</span>
                <span className="text-[10px] opacity-75 hidden md:inline">({p.personaInitials})</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Prev / Next Controls */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <span className="text-xs font-bold text-zinc-500 mr-2 tracking-wider">
            0{activeIndex + 1} / 0{personas.length}
          </span>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous persona card"
            className="w-8 h-8 flex items-center justify-center border border-black/20 bg-white hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft weight="bold" className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next persona card"
            className="w-8 h-8 flex items-center justify-center border border-black/20 bg-white hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            <ArrowRight weight="bold" className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ─── 3 Horizontal Stacked Cards (Simon Thai Deck Pattern) ─── */}
      <div className="relative min-h-[520px] sm:min-h-[460px] select-none">
        {/* Layer 3: Farthest Background Card */}
        <div
          aria-hidden
          className={`absolute inset-0 translate-y-6 sm:translate-y-5 scale-[0.96] ${theme.peekBg2} border rounded-sm pointer-events-none transition-all duration-300 shadow-sm`}
        />

        {/* Layer 2: Middle Background Card */}
        <div
          aria-hidden
          className={`absolute inset-0 translate-y-3 sm:translate-y-2.5 scale-[0.98] ${theme.peekBg1} border rounded-sm pointer-events-none transition-all duration-300 shadow-sm`}
        />

        {/* Layer 1: Active Front Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPersona.id}
            initial={{ opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`relative z-10 ${theme.cardBg} border ${theme.cardBorder} shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6 sm:p-8 md:p-10 space-y-6`}
          >
            {/* Persona Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-black/15">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${theme.avatarBg} border flex items-center justify-center font-mono font-black text-sm sm:text-base shrink-0 shadow-sm`}>
                  {currentPersona.personaInitials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black font-mono">
                      {currentPersona.personaName}
                    </h3>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: theme.accentColor }} />
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 font-medium">
                    {currentPersona.personaRole}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                <span className="px-2 py-1 bg-white border border-black/15 font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                  {"Based on {{INTERVIEWS_COUNT: 18}} interviews"}
                </span>
                <div className={`flex items-center gap-1.5 px-2.5 py-1 ${theme.surfaceTagClass} border font-mono text-[10px] font-bold uppercase tracking-wider`}>
                  {getPersonaIcon(currentPersona.id)}
                  <span>{currentPersona.surfaceTag}</span>
                </div>
              </div>
            </div>

            {/* Persona Goal vs Frustration Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Goal */}
              <div className="space-y-1.5 p-4 bg-white/90 border border-black/10 shadow-sm">
                <div className="flex items-center gap-1.5 font-mono text-[11px] font-black uppercase tracking-wider text-black">
                  <Target weight="bold" className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Primary Goal</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  {currentPersona.goal}
                </p>
              </div>

              {/* Frustration */}
              <div className="space-y-1.5 p-4 bg-white/90 border border-black/10 shadow-sm">
                <div className="flex items-center gap-1.5 font-mono text-[11px] font-black uppercase tracking-wider text-black">
                  <WarningCircle weight="bold" className="w-3.5 h-3.5 text-[#BD2320]" />
                  <span>Core Frustration</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                  {currentPersona.frustration}
                </p>
              </div>
            </div>

            {/* Authentic Real Quote (Strictly Attributed) */}
            <div className="p-4 bg-white/95 border-l-4 shadow-sm" style={{ borderColor: theme.accentColor }}>
              <blockquote className="flex items-start gap-3">
                <Quotes weight="fill" className="w-5 h-5 shrink-0 mt-0.5" style={{ color: theme.accentColor }} />
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-zinc-800 italic font-medium leading-relaxed">
                    “{currentPersona.quote}”
                  </p>
                  <cite className="block font-mono text-[10px] uppercase font-bold text-zinc-500 not-italic">
                    — {currentPersona.quoteAuthor}
                  </cite>
                </div>
              </blockquote>
            </div>

            {/* Bottom Card Footer with Direct Deck Jumper */}
            <div className="pt-4 border-t border-black/15 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider">
                Click arrows to cycle through all 3 field roles
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 font-black uppercase text-black hover:opacity-75 transition-opacity cursor-pointer"
                style={{ color: theme.accentColor }}
              >
                <span>NEXT PERSONA</span>
                <ArrowRight weight="bold" className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
