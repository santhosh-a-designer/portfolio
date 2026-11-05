"use client";

import React from "react";
import { Sparkle, Code, ShieldCheck, CheckCircle } from "@phosphor-icons/react";
import type { TopBottleneckItem } from "@/lib/vidyasKitchenCaseStudyContent";

interface Props {
  bottlenecks: TopBottleneckItem[];
}

export default function Top3BottlenecksSection({ bottlenecks }: Props) {
  return (
    <div className="space-y-12">
      <p className="text-xs sm:text-sm text-zinc-600 max-w-3xl leading-relaxed">
        The three hardest engineering and ergonomics bottlenecks encountered while scaling Vidya&apos;s Kitchen in Sivakasi—framed in the <strong>STAR</strong> interview format:
      </p>

      <div className="divide-y divide-black/20 space-y-12">
        {bottlenecks.map((b, idx) => (
          <article key={b.id} className={`${idx > 0 ? "pt-10" : ""} space-y-6`}>
            {/* Chapter Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-black/15">
              <div className="flex items-center gap-3">
                <span className="font-mono text-base sm:text-lg font-black text-[#BD2320]">
                  {b.num} /
                </span>
                <h3 className="font-mono text-sm sm:text-base font-black uppercase tracking-tight text-black">
                  {b.title}
                </h3>
              </div>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                {b.surface}
              </span>
            </div>

            {/* Situation & Task Briefing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="space-y-1 md:pr-6 md:border-r border-zinc-200">
                <span className="font-mono text-[10px] font-black uppercase text-[#BD2320] block">
                  The Bottleneck (Situation)
                </span>
                <p className="text-zinc-800 leading-relaxed">{b.situation}</p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] font-black uppercase text-black block">
                  Target &amp; Success Metric (Task)
                </span>
                <p className="text-zinc-800 leading-relaxed font-medium">{b.task}</p>
              </div>
            </div>

            {/* Actions: UX vs Technical */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3 border-t border-zinc-200 text-xs sm:text-sm">
              <div className="space-y-2 md:pr-6 md:border-r border-zinc-200">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BD2320]" />
                  <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
                    Action · UX Design &amp; Interaction
                  </span>
                </div>
                <p className="text-zinc-700 leading-relaxed">{b.actionUx}</p>
              </div>

              <div className="space-y-2">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-dashed border-zinc-300">
              <div className="md:col-span-2 flex items-start gap-2.5">
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

              <div className="border-l-2 border-[#BD2320] pl-3 py-0.5 font-mono text-xs">
                <span className="text-[9px] uppercase tracking-wider text-[#BD2320] font-black block mb-0.5">
                  Interview Takeaway
                </span>
                <p className="text-[11px] text-zinc-700 italic leading-snug">
                  “{b.interviewTakeaway}”
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
