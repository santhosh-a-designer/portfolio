"use client";

import React, { useState } from "react";
import { Sparkle, Code, Quotes, ShieldCheck } from "@phosphor-icons/react";
import type { PersonaScenarioCard } from "@/lib/vidyasKitchenCaseStudyContent";

interface Props {
  personas: PersonaScenarioCard[];
}

export default function PersonaScenariosSection({ personas }: Props) {
  const [activePersonaId, setActivePersonaId] = useState<string>(personas[0]?.id || "persona-customer");

  const currentPersona = personas.find((p) => p.id === activePersonaId) || personas[0];

  return (
    <div className="space-y-8">
      {/* Editorial Persona Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-black/15 scrollbar-none">
        {personas.map((p) => {
          const isActive = p.id === activePersonaId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActivePersonaId(p.id)}
              className={`flex items-center gap-2.5 px-3 sm:px-4 py-2 font-mono text-xs font-bold uppercase transition-all shrink-0 select-none ${
                isActive
                  ? "bg-black text-white"
                  : "bg-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-200"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  isActive ? "bg-[#BD2320]" : "bg-zinc-400"
                }`}
              />
              <span>{p.personaName}</span>
              <span className="text-[10px] opacity-60 hidden sm:inline">({p.surfaceTag})</span>
            </button>
          );
        })}
      </div>

      {/* Active Persona Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-black/15">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black font-mono">
              {currentPersona.personaName}
            </h3>
            <span className="px-2 py-0.5 bg-[#BD2320] text-white font-mono text-[10px] font-black uppercase tracking-wider">
              {currentPersona.surfaceTag}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium mt-1">{currentPersona.personaRole}</p>
        </div>
        <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest">
          {currentPersona.scenarios.length} Field Scenarios Unpacked
        </span>
      </div>

      {/* Scenarios — Editorial Magazine Style (No nested boxes) */}
      <div className="space-y-12">
        {currentPersona.scenarios.map((scen, idx) => (
          <article key={scen.id} className="space-y-4">
            {/* Scenario Header Bar */}
            <div className="flex items-baseline justify-between gap-4 border-b border-black/20 pb-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-black uppercase text-[#BD2320]">
                  {scen.tag}
                </span>
                <span className="text-zinc-300">/</span>
                <h4 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                  {scen.title}
                </h4>
              </div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest hidden sm:inline">
                Sivakasi Ground Friction
              </span>
            </div>

            {/* Sivakasi Ground Reality (Lead paragraph) */}
            <p className="text-sm sm:text-base text-zinc-800 leading-relaxed max-w-3xl">
              <strong>Ground Reality:</strong> {scen.groundReality}
            </p>

            {/* Two-Column Editorial Spread: What UX I Did vs What Technical I Did */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Left Column: UX */}
              <div className="space-y-2 md:pr-6 md:border-r border-zinc-200">
                <div className="flex items-center gap-2 text-black">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BD2320]" />
                  <span className="font-mono text-[11px] font-black uppercase tracking-wider">
                    What UX I Did (Ergonomics &amp; Flows)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {scen.whatUxIDid}
                </p>
              </div>

              {/* Right Column: Technical */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-black">
                  <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  <span className="font-mono text-[11px] font-black uppercase tracking-wider">
                    What Technical I Did (Architecture &amp; Logic)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-mono">
                  {scen.whatTechnicalIDid}
                </p>
              </div>
            </div>

            {/* Sivakasi Pull Quote */}
            {scen.quote && (
              <div className="pt-3 border-t border-dashed border-zinc-200">
                <blockquote className="border-l-2 border-[#BD2320] pl-3.5 py-0.5 text-xs sm:text-sm text-zinc-800 italic leading-relaxed">
                  “{scen.quote}”
                  <span className="block mt-1 font-mono text-[10px] uppercase font-bold text-zinc-500 not-italic">
                    — {scen.quoteAuthor}
                  </span>
                </blockquote>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
