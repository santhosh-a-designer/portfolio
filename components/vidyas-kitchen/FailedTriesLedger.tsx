"use client";

import React, { useState } from "react";
import { CaretDown, WarningCircle, CheckCircle } from "@phosphor-icons/react";

interface FailedAttempt {
  id: string;
  strike: string;
  solution: string;
  whatBroke: string;
  lesson: string;
}

const LEDGER: FailedAttempt[] = [
  {
    id: "driver-auth",
    strike: "Driver SMS OTP on every shift login",
    solution: "Phone lookup + Kitchen-issued 4-digit PIN",
    whatBroke:
      "SMS delivery latency on 2G networks in Sivakasi caused drivers to abandon the app and call the kitchen.",
    lesson:
      "Field tools cannot depend on third-party telecom latency. Admin-provisioned PINs gave instantaneous auth.",
  },
  {
    id: "ai-pricing",
    strike: "LLM dynamically calculating order totals",
    solution: "Server-side pricing engine with database lookup",
    whatBroke:
      "Edge-case Tanglish sentences caused the model to hallucinate incorrect discounts and drop delivery charges.",
    lesson:
      "AI should only extract structured intent. Financial calculations must always remain strictly deterministic.",
  },
  {
    id: "bot-menu",
    strike: "4-level numerical menu drilldown in WhatsApp",
    solution: "Single-sentence natural language parser + card carousel",
    whatBroke:
      "Asking users to type '1 for Non-Veg, then 3 for Gravy' had high drop-off. Customers texted dishes anyway.",
    lesson:
      "Never force a desktop tree onto conversational chat. Match customer mental models where they already are.",
  },
  {
    id: "sync-state",
    strike: "Single unified status field for food and payment",
    solution: "Decoupled dual state machine (Food state + Payment state)",
    whatBroke:
      "Cash on delivery orders stayed locked in 'Pending Payment', stopping the kitchen from starting meal prep.",
    lesson:
      "Physical cooking cycles and financial settlement cycles are independent operational realities.",
  },
];

export default function FailedTriesLedger() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white border-2 border-black p-4 sm:p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-3 mb-4">
        <div>
          <span className="font-mono text-[10px] font-black uppercase text-[#BD2320] block mb-0.5">
            Architectural Post-Mortem
          </span>
          <h4 className="font-mono text-xs sm:text-sm font-black uppercase text-black tracking-wide">
            Failed First Tries Ledger
          </h4>
        </div>
        <span className="font-mono text-[10px] bg-zinc-100 border border-zinc-300 text-zinc-600 px-2 py-0.5">
          Tap to expand lessons
        </span>
      </div>

      <p className="text-xs sm:text-sm text-zinc-600 mb-4 leading-relaxed">
        Production resilience comes from what failed in testing. Here are the 4 discarded patterns and the concrete UX decisions that replaced them:
      </p>

      <div className="divide-y-2 divide-black border-2 border-black bg-zinc-50">
        {LEDGER.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="transition-colors">
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full text-left p-3 sm:p-4 flex items-center justify-between gap-3 hover:bg-zinc-100 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs">
                  <span className="line-through text-zinc-400 font-mono">
                    {item.strike}
                  </span>
                  <span className="hidden sm:inline text-zinc-400 font-bold">→</span>
                  <span className="font-mono font-bold text-black flex items-center gap-1.5">
                    <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0" />
                    {item.solution}
                  </span>
                </div>
                <CaretDown
                  weight="bold"
                  className={`w-4 h-4 text-zinc-600 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#BD2320]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="p-4 bg-white border-t border-zinc-200 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
                  <div className="p-3 bg-red-50/50 border border-red-200">
                    <div className="flex items-center gap-1 text-[#BD2320] font-mono text-[10px] font-bold uppercase mb-1">
                      <WarningCircle weight="bold" className="w-3.5 h-3.5" />
                      What broke in real usage
                    </div>
                    <p className="text-zinc-700">{item.whatBroke}</p>
                  </div>
                  <div className="p-3 bg-emerald-50/50 border border-emerald-200">
                    <div className="flex items-center gap-1 text-emerald-800 font-mono text-[10px] font-bold uppercase mb-1">
                      <CheckCircle weight="bold" className="w-3.5 h-3.5" />
                      The senior UX takeaway
                    </div>
                    <p className="text-zinc-800 font-medium">{item.lesson}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
