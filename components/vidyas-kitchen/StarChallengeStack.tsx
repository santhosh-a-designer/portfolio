"use client";

import React, { useState } from "react";
import { CaretDown, CheckCircle, Warning, Sparkle } from "@phosphor-icons/react";
import type { VidyasStarChallenge, VidyasChallenge } from "@/lib/vidyasKitchenCaseStudyContent";
import HighlightText from "./HighlightText";

interface Props {
  challenges: VidyasStarChallenge[];
  collapsedChallenge?: VidyasChallenge;
}

export default function StarChallengeStack({ challenges, collapsedChallenge }: Props) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="space-y-6">
      {/* Top 4 STAR Challenges */}
      <div className="grid grid-cols-1 gap-6">
        {challenges.map((c, idx) => (
          <article
            key={c.id}
            className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex h-10 items-center justify-between gap-2 border-b-2 border-black bg-[#E2E8F0] px-3 sm:px-4 font-mono text-xs select-none">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 bg-[#BD2320] text-white font-bold text-[10px]">
                  {c.id}
                </span>
                <span className="font-bold text-black uppercase tracking-wider text-[11px] sm:text-xs">
                  {c.title}
                </span>
              </div>
              <span className="border border-black bg-white px-2 py-0.5 text-[10px] font-bold uppercase text-zinc-700">
                {c.surface}
              </span>
            </div>

            {/* STAR Grid */}
            <div className="p-4 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                {/* Left: Situation + Goal + Failed First */}
                <div className="space-y-3">
                  <div className="p-3 bg-zinc-50 border border-zinc-200">
                    <span className="font-mono text-[10px] font-black uppercase text-zinc-500 block mb-1">
                      Situation
                    </span>
                    <p className="text-zinc-800 leading-relaxed">{c.situation}</p>
                  </div>

                  <div className="p-3 bg-zinc-50 border border-zinc-200">
                    <span className="font-mono text-[10px] font-black uppercase text-[#BD2320] block mb-1">
                      Goal & Success Metric
                    </span>
                    <p className="text-zinc-800 leading-relaxed font-medium">{c.goal}</p>
                  </div>

                  <div className="p-3 bg-amber-50/60 border border-amber-200">
                    <span className="font-mono text-[10px] font-black uppercase text-amber-800 block mb-1 flex items-center gap-1">
                      <Warning weight="bold" className="w-3 h-3 text-amber-600" />
                      First Try Failed
                    </span>
                    <p className="text-zinc-700 leading-relaxed">{c.failedFirst}</p>
                  </div>
                </div>

                {/* Right: Action + Result + Evidence */}
                <div className="space-y-3">
                  <div className="p-3 bg-zinc-50 border border-zinc-200">
                    <span className="font-mono text-[10px] font-black uppercase text-black block mb-1">
                      Action (What Worked)
                    </span>
                    <p className="text-zinc-800 leading-relaxed">{c.action}</p>
                  </div>

                  <div className="p-3 bg-emerald-50 border border-emerald-300">
                    <span className="font-mono text-[10px] font-black uppercase text-emerald-800 block mb-1 flex items-center gap-1">
                      <CheckCircle weight="fill" className="w-3.5 h-3.5 text-emerald-600" />
                      Result
                    </span>
                    <p className="text-zinc-900 font-bold leading-relaxed">{c.result}</p>
                  </div>

                  <div className="p-3 bg-zinc-100 border border-dashed border-zinc-400">
                    <span className="font-mono text-[10px] font-black uppercase text-zinc-600 block mb-1 flex items-center gap-1">
                      <Sparkle weight="bold" className="w-3 h-3 text-[#BD2320]" />
                      Evidence Line
                    </span>
                    <p className="text-zinc-700 italic leading-relaxed text-[11px] sm:text-xs">
                      “{c.evidence}”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Collapsed "More decisions" accordion for CHAL_05 */}
      {collapsedChallenge && (
        <div className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="w-full text-left p-4 bg-zinc-100 flex items-center justify-between hover:bg-zinc-200 transition-colors font-mono text-xs select-none"
          >
            <div className="flex items-center gap-2">
              <span className="font-black text-black uppercase">
                {showMore ? "Collapse" : "Expand"} Secondary Decision: CHAL_{collapsedChallenge.id} // {collapsedChallenge.title}
              </span>
              <span className="text-[10px] bg-white border border-black px-1.5 py-0.5">
                {collapsedChallenge.surface}
              </span>
            </div>
            <CaretDown
              weight="bold"
              className={`w-4 h-4 text-black transition-transform duration-200 ${
                showMore ? "rotate-180" : ""
              }`}
            />
          </button>

          {showMore && (
            <div className="p-5 border-t-2 border-black space-y-3 text-xs sm:text-sm">
              <p className="font-mono text-[11px] font-bold text-[#BD2320]">
                {collapsedChallenge.stake}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-zinc-700">
                    <strong className="block text-zinc-900 font-mono text-[10px] uppercase">
                      Situation:
                    </strong>
                    {collapsedChallenge.happened}
                  </p>
                  <p className="text-zinc-700">
                    <strong className="block text-zinc-900 font-mono text-[10px] uppercase">
                      Why Hard:
                    </strong>
                    {collapsedChallenge.whyHard}
                  </p>
                </div>
                <div className="space-y-2 bg-zinc-50 p-3 border border-zinc-300">
                  <p className="text-zinc-700">
                    <strong className="block text-zinc-900 font-mono text-[10px] uppercase">
                      Solution:
                    </strong>
                    {collapsedChallenge.worked}
                  </p>
                  <p className="text-zinc-900 font-bold">
                    <strong className="block text-zinc-900 font-mono text-[10px] uppercase">
                      Outcome:
                    </strong>
                    {collapsedChallenge.outcome}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
