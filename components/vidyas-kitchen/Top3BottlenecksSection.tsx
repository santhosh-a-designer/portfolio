"use client";

import { CheckCircle } from "@phosphor-icons/react";
import type { TopBottleneckItem } from "@/lib/vidyasKitchenCaseStudyContent";

interface Props {
  bottlenecks: TopBottleneckItem[];
}

const BOTTLENECK_THEMES = [
  {
    // 01 ORDER IN ONE SENTENCE (Culinary Crimson)
    cardBg: "bg-[#FFF6F6]",
    cardBorder: "border-[#BD2320]/25",
    accentColor: "#BD2320",
    uxBoxBorder: "border-[#BD2320]",
  },
  {
    // 02 THE 24-HOUR RULE (WhatsApp Emerald)
    cardBg: "bg-[#F0FDF4]",
    cardBorder: "border-emerald-600/25",
    accentColor: "#059669",
    uxBoxBorder: "border-emerald-600",
  },
  {
    // 03 ORDER FOR SOMEONE IN SIVAKASI, FROM ANYWHERE (Turmeric Amber)
    cardBg: "bg-[#FFFBEB]",
    cardBorder: "border-amber-500/30",
    accentColor: "#D97706",
    uxBoxBorder: "border-amber-500",
  },
];

export default function Top3BottlenecksSection({ bottlenecks }: Props) {
  return (
    <div className="space-y-6 sm:space-y-8 select-none">
      <div className="space-y-6 sm:space-y-8">
        {bottlenecks.map((b, idx) => {
          const theme = BOTTLENECK_THEMES[idx] || BOTTLENECK_THEMES[0];

          return (
            <article
              key={b.id}
              className={`${theme.cardBg} border ${theme.cardBorder} shadow-[0_2px_16px_rgba(0,0,0,0.03)] p-6 sm:p-8 space-y-6`}
            >
              {/* Header: number + title + tag */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-black/15">
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-base sm:text-lg font-black"
                    style={{ color: theme.accentColor }}
                  >
                    0{idx + 1} /
                  </span>
                  <h3 className="font-mono text-sm sm:text-base font-black uppercase tracking-tight text-black">
                    {b.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest font-bold px-2 py-0.5 bg-white/80 border border-black/10">
                  {b.surface}
                </span>
              </div>

              {/* Row 1: SITUATION | PRODUCT GOAL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
                <div className="space-y-1 md:pr-6 md:border-r border-black/10">
                  <span
                    className="font-mono text-[10px] font-black uppercase block"
                    style={{ color: theme.accentColor }}
                  >
                    Situation
                  </span>
                  <p className="text-zinc-800 leading-relaxed font-sans">{b.situation}</p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-black uppercase text-black block">
                    Product Goal
                  </span>
                  <p className="text-zinc-800 leading-relaxed font-sans">{b.productGoal}</p>
                </div>
              </div>

              {/* Row 2: three blocks: UX DECISION | UI DESIGN | CODE DECISION */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-3 border-t border-black/10 text-xs sm:text-sm">
                {/* UX Decision */}
                <div className={`space-y-2 md:pr-4 md:border-r border-black/10 p-3.5 bg-white/90 border-l-2 ${theme.uxBoxBorder} shadow-sm`}>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.accentColor }} />
                    <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
                      UX Decision
                    </span>
                  </div>
                  <p className="text-zinc-800 leading-relaxed font-medium">{b.uxDecision}</p>
                </div>

                {/* UI Design */}
                <div className="space-y-2 md:pr-4 md:border-r border-black/10 p-3.5 bg-white/90 border-l-2 border-zinc-700 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
                      UI Design
                    </span>
                  </div>
                  <p className="text-zinc-800 leading-relaxed font-medium">{b.uiDesign}</p>
                </div>

                {/* Code Decision */}
                <div className="space-y-2 p-3.5 bg-white/90 border-l-2 border-black shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-black" />
                      <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
                        Code Decision
                      </span>
                    </div>
                    <p className="text-zinc-700 leading-relaxed font-mono text-[11px] sm:text-xs">
                      {b.codeDecision}
                    </p>
                  </div>
                  <a
                    href="#engineers"
                    className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-2 border-t border-black/5 hover:text-black transition-colors block"
                  >
                    Spec in For Engineers archive ↓
                  </a>
                </div>
              </div>

              {/* Row 3: OUTCOME | SENIOR TAKEAWAY */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-dashed border-black/15">
                <div className="md:col-span-2 flex items-start gap-2.5 bg-white/90 p-3.5 border border-black/10 shadow-sm">
                  <CheckCircle weight="fill" className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] font-black uppercase text-emerald-800 block">
                      Outcome
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                      {b.outcome}
                    </p>
                  </div>
                </div>

                <div className={`bg-white/90 p-3.5 border-l-2 ${theme.uxBoxBorder} border-y border-r border-black/10 font-mono text-xs shadow-sm`}>
                  <span
                    className="text-[9px] uppercase tracking-wider font-black block mb-0.5"
                    style={{ color: theme.accentColor }}
                  >
                    Senior Takeaway
                  </span>
                  <p className="text-[11px] text-zinc-700 italic leading-snug font-sans">
                    “{b.seniorTakeaway}”
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
