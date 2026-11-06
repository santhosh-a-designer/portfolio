"use client";

import { CheckCircle } from "@phosphor-icons/react";
import type { TopBottleneckItem } from "@/lib/vidyasKitchenCaseStudyContent";

interface Props {
  bottlenecks: TopBottleneckItem[];
}

const BOTTLENECK_THEMES = [
  {
    // 01 Tanglish Intent & Deterministic Pricing (Culinary Crimson)
    cardBg: "bg-[#FFF6F6]",
    cardBorder: "border-[#BD2320]/25",
    accentColor: "#BD2320",
    badgeBg: "bg-[#BD2320] text-white",
    uxBoxBorder: "border-[#BD2320]",
    quoteAccent: "border-[#BD2320] text-[#BD2320]",
  },
  {
    // 02 Meta 24h & Twilio Handoff (WhatsApp Emerald)
    cardBg: "bg-[#F0FDF4]",
    cardBorder: "border-emerald-600/25",
    accentColor: "#059669",
    badgeBg: "bg-emerald-700 text-white",
    uxBoxBorder: "border-emerald-600",
    quoteAccent: "border-emerald-600 text-emerald-700",
  },
  {
    // 03 Kitchen 85dB Chimes & Festival Surge (Turmeric Amber)
    cardBg: "bg-[#FFFBEB]",
    cardBorder: "border-amber-500/30",
    accentColor: "#D97706",
    badgeBg: "bg-amber-600 text-white",
    uxBoxBorder: "border-amber-500",
    quoteAccent: "border-amber-500 text-amber-700",
  },
];

export default function Top3BottlenecksSection({ bottlenecks }: Props) {
  return (
    <div className="space-y-6 sm:space-y-8">
      <p className="text-xs sm:text-sm text-zinc-600 max-w-3xl leading-relaxed">
        The three hardest engineering and ergonomics bottlenecks encountered while scaling Vidya&apos;s Kitchen in Sivakasi—framed in the <strong>STAR</strong> interview format:
      </p>

      <div className="space-y-6 sm:space-y-8">
        {bottlenecks.map((b, idx) => {
          const theme = BOTTLENECK_THEMES[idx] || BOTTLENECK_THEMES[0];

          return (
            <article
              key={b.id}
              className={`${theme.cardBg} border ${theme.cardBorder} shadow-[0_2px_16px_rgba(0,0,0,0.04)] p-6 sm:p-8 space-y-6 select-none`}
            >
              {/* Chapter Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-black/15">
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-base sm:text-lg font-black"
                    style={{ color: theme.accentColor }}
                  >
                    {b.num} /
                  </span>
                  <h3 className="font-mono text-sm sm:text-base font-black uppercase tracking-tight text-black">
                    {b.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest font-bold px-2 py-0.5 bg-white/80 border border-black/10">
                  {b.surface}
                </span>
              </div>

              {/* Situation & Task Briefing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
                <div className="space-y-1 md:pr-6 md:border-r border-black/10">
                  <span
                    className="font-mono text-[10px] font-black uppercase block"
                    style={{ color: theme.accentColor }}
                  >
                    The Bottleneck (Situation)
                  </span>
                  <p className="text-zinc-800 leading-relaxed font-sans">{b.situation}</p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] font-black uppercase text-black block">
                    Target &amp; Success Metric (Task)
                  </span>
                  <p className="text-zinc-800 leading-relaxed font-medium font-sans">{b.task}</p>
                </div>
              </div>

              {/* Actions: UX vs Technical */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-3 border-t border-black/10 text-xs sm:text-sm">
                <div className={`space-y-2 md:pr-6 md:border-r border-black/10 p-3.5 bg-white/90 border-l-2 ${theme.uxBoxBorder} shadow-sm`}>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.accentColor }} />
                    <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
                      Action · UX Design &amp; Interaction
                    </span>
                  </div>
                  <p className="text-zinc-700 leading-relaxed">{b.actionUx}</p>
                </div>

                <div className="space-y-2 p-3.5 bg-white/90 border-l-2 border-black shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
                      Action · Technical &amp; Systems Logic
                    </span>
                  </div>
                  <p className="text-zinc-700 leading-relaxed font-mono text-[11px] sm:text-xs">
                    {b.actionTech}
                  </p>
                </div>
              </div>

              {/* Result & Senior Interview Takeaway */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-dashed border-black/15">
                <div className="md:col-span-2 flex items-start gap-2.5 bg-white/90 p-3 border border-black/10 shadow-sm">
                  <CheckCircle weight="fill" className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] font-black uppercase text-emerald-800 block">
                      Measurable Result
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                      {b.result}
                    </p>
                  </div>
                </div>

                <div className={`bg-white/90 p-3 border-l-2 ${theme.uxBoxBorder} border-y border-r border-black/10 font-mono text-xs shadow-sm`}>
                  <span
                    className="text-[9px] uppercase tracking-wider font-black block mb-0.5"
                    style={{ color: theme.accentColor }}
                  >
                    Interview Takeaway
                  </span>
                  <p className="text-[11px] text-zinc-700 italic leading-snug font-sans">
                    “{b.interviewTakeaway}”
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
