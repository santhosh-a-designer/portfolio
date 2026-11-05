"use client";

import React, { useState } from "react";
import { User, Sparkle, Code, Quotes, CaretRight, ShieldCheck } from "@phosphor-icons/react";
import type { PersonaScenarioCard } from "@/lib/vidyasKitchenCaseStudyContent";

interface Props {
  personas: PersonaScenarioCard[];
}

export default function PersonaScenariosSection({ personas }: Props) {
  const [activePersonaId, setActivePersonaId] = useState<string>(personas[0]?.id || "persona-customer");

  const currentPersona = personas.find((p) => p.id === activePersonaId) || personas[0];

  return (
    <div className="space-y-6">
      {/* Persona Tab Switcher (Mobile Scrollable) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b-2 border-black scrollbar-none">
        {personas.map((p) => {
          const isActive = p.id === activePersonaId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActivePersonaId(p.id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 border-2 border-black font-mono text-xs font-bold uppercase transition-all shrink-0 select-none ${
                isActive
                  ? "bg-black text-white shadow-[3px_3px_0px_0px_rgba(189,35,32,1)]"
                  : "bg-white text-zinc-700 hover:bg-zinc-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              <span className={`w-5 h-5 flex items-center justify-center text-[10px] font-black border ${
                isActive ? "border-white bg-[#BD2320] text-white" : "border-black bg-zinc-100 text-black"
              }`}>
                {p.personaInitials}
              </span>
              <span>{p.personaName}</span>
              <span className="hidden sm:inline text-[10px] opacity-75">· {p.surfaceTag}</span>
            </button>
          );
        })}
      </div>

      {/* Active Persona Header Banner */}
      <div className="p-4 sm:p-5 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-black text-white font-mono font-black text-base flex items-center justify-center border-2 border-black shrink-0">
            {currentPersona.personaInitials}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-base sm:text-lg text-black font-mono">{currentPersona.personaName}</h3>
              <span className="px-2 py-0.5 bg-[#BD2320] text-white font-mono text-[10px] font-black uppercase tracking-wider">
                {currentPersona.surfaceTag}
              </span>
            </div>
            <p className="text-xs text-zinc-600 font-medium">{currentPersona.personaRole}</p>
          </div>
        </div>

        <span className="font-mono text-[11px] text-zinc-500 font-bold uppercase">
          {currentPersona.scenarios.length} Sivakasi Field Scenarios
        </span>
      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 gap-6">
        {currentPersona.scenarios.map((scen) => (
          <article
            key={scen.id}
            className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
          >
            {/* Header */}
            <div className="h-10 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between gap-2 font-mono text-xs select-none">
              <span className="px-1.5 py-0.5 bg-black text-white font-bold text-[10px] uppercase">
                {scen.tag}
              </span>
              <span className="font-bold text-black uppercase tracking-wider text-xs truncate">
                {scen.title}
              </span>
            </div>

            <div className="p-4 sm:p-6 space-y-4">
              {/* Ground Reality */}
              <div className="p-3.5 bg-zinc-50 border-2 border-black text-xs sm:text-sm">
                <span className="font-mono text-[10px] font-black uppercase text-[#BD2320] block mb-1">
                  Sivakasi Ground Reality &amp; Friction:
                </span>
                <p className="text-zinc-800 leading-relaxed">{scen.groundReality}</p>
              </div>

              {/* Two Columns: What UX I Did vs What Technical I Did */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                {/* UX */}
                <div className="p-4 bg-white border-2 border-black flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-zinc-200">
                      <span className="p-1 bg-[#BD2320] text-white">
                        <Sparkle weight="fill" className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-mono text-[11px] font-black uppercase text-black">
                        What UX I Did (Ergonomics &amp; Flows)
                      </span>
                    </div>
                    <p className="text-zinc-800 leading-relaxed">{scen.whatUxIDid}</p>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold pt-2 border-t border-dashed border-zinc-300">
                    Friction removed · Zero form dropouts
                  </span>
                </div>

                {/* Technical / Logic */}
                <div className="p-4 bg-[#FAF9F5] border-2 border-black flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-zinc-200">
                      <span className="p-1 bg-black text-white">
                        <Code weight="bold" className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-mono text-[11px] font-black uppercase text-black">
                        What Technical I Did (Architecture &amp; Logic)
                      </span>
                    </div>
                    <p className="text-zinc-800 leading-relaxed font-mono text-[11px] sm:text-xs">
                      {scen.whatTechnicalIDid}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-700 uppercase font-bold pt-2 border-t border-dashed border-zinc-300 flex items-center gap-1">
                    <ShieldCheck weight="bold" className="w-3 h-3 text-emerald-600" />
                    Production guardrail enforced
                  </span>
                </div>
              </div>

              {/* Real Sivakasi Quote */}
              {scen.quote && (
                <div className="p-3.5 bg-amber-50/70 border-l-4 border-[#BD2320] border-y border-r border-amber-300 text-xs text-zinc-900 flex items-start gap-2.5">
                  <Quotes weight="fill" className="w-4 h-4 text-[#BD2320] shrink-0 mt-0.5" />
                  <div>
                    <blockquote className="font-medium italic leading-relaxed text-zinc-800">
                      “{scen.quote}”
                    </blockquote>
                    <span className="block mt-1 font-mono text-[10px] font-bold uppercase text-zinc-500">
                      — {scen.quoteAuthor}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
