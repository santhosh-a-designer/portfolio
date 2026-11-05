"use client";

import React from "react";
import { CheckCircle, Warning, Sparkle, Code, ShieldCheck, ArrowRight } from "@phosphor-icons/react";
import type { TopBottleneckItem } from "@/lib/vidyasKitchenCaseStudyContent";

interface Props {
  bottlenecks: TopBottleneckItem[];
}

export default function Top3BottlenecksSection({ bottlenecks }: Props) {
  return (
    <div className="space-y-6">
      <p className="text-xs sm:text-sm text-zinc-600 max-w-3xl leading-relaxed">
        The three hardest engineering and ergonomics bottlenecks encountered while scaling Vidya&apos;s Kitchen in Sivakasi—framed in the <strong>STAR</strong> interview format:
      </p>

      <div className="grid grid-cols-1 gap-6">
        {bottlenecks.map((b) => (
          <article
            key={b.id}
            className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
          >
            {/* Header */}
            <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between gap-2 font-mono text-xs select-none">
              <div className="flex items-center gap-2 truncate">
                <span className="px-2 py-0.5 bg-[#BD2320] text-white font-bold text-[10px]">
                  BOTTLENECK {b.num}
                </span>
                <span className="font-bold text-black uppercase tracking-wider text-xs sm:text-sm truncate">
                  {b.title}
                </span>
              </div>
              <span className="border border-black bg-white px-2 py-0.5 text-[10px] font-bold uppercase text-zinc-700 shrink-0">
                {b.surface}
              </span>
            </div>

            {/* Content Body */}
            <div className="p-4 sm:p-6 space-y-4">
              {/* Situation & Task */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-zinc-50 border-2 border-black">
                  <span className="font-mono text-[10px] font-black uppercase text-[#BD2320] block mb-1 flex items-center gap-1">
                    <Warning weight="bold" className="w-3.5 h-3.5 text-[#BD2320]" />
                    Situation (The Bottleneck)
                  </span>
                  <p className="text-zinc-800 leading-relaxed">{b.situation}</p>
                </div>

                <div className="p-3.5 bg-zinc-50 border-2 border-black">
                  <span className="font-mono text-[10px] font-black uppercase text-black block mb-1">
                    Task &amp; Target Metric
                  </span>
                  <p className="text-zinc-800 leading-relaxed font-medium">{b.task}</p>
                </div>
              </div>

              {/* Action: UX vs Technical */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="p-4 bg-white border-2 border-black space-y-2">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-zinc-200">
                    <span className="p-1 bg-[#BD2320] text-white">
                      <Sparkle weight="fill" className="w-3 h-3" />
                    </span>
                    <span className="font-mono text-[11px] font-black uppercase text-black">
                      Action · UX Design &amp; Interaction
                    </span>
                  </div>
                  <p className="text-zinc-800 leading-relaxed">{b.actionUx}</p>
                </div>

                <div className="p-4 bg-[#FAF9F5] border-2 border-black space-y-2">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-zinc-200">
                    <span className="p-1 bg-black text-white">
                      <Code weight="bold" className="w-3 h-3" />
                    </span>
                    <span className="font-mono text-[11px] font-black uppercase text-black">
                      Action · Technical &amp; Systems Logic
                    </span>
                  </div>
                  <p className="text-zinc-800 leading-relaxed font-mono text-[11px] sm:text-xs">
                    {b.actionTech}
                  </p>
                </div>
              </div>

              {/* Result & Takeaway */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-emerald-50 border-2 border-black md:col-span-2 flex items-center gap-3">
                  <CheckCircle weight="fill" className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-mono text-[10px] font-black uppercase text-emerald-800 block mb-0.5">
                      Result &amp; Impact
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-zinc-900 leading-snug">
                      {b.result}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-black text-white border-2 border-black flex flex-col justify-center font-mono">
                  <span className="text-[9px] uppercase tracking-wider text-[#FAED00] font-black block mb-1">
                    Senior Takeaway
                  </span>
                  <p className="text-[11px] text-zinc-200 leading-snug">
                    “{b.interviewTakeaway}”
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
