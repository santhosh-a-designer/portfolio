"use client";

import React, { useState } from "react";
import { Check, Sparkle, ShieldCheck, ArrowRight } from "@phosphor-icons/react";

interface ParsedResult {
  dish: string;
  qty: number;
  slot: string;
  payment: string;
  unitPrice: number;
  itemTotal: number;
  packaging: number;
  delivery: number;
  gst: number;
  total: number;
  guardrailNote: string;
}

const PRESETS = [
  { label: "Chicken Biryani", text: "2 chicken biryani tomorrow lunch cash" },
  { label: "Mutton Gravy", text: "mutton gravy 500gm dinner online" },
  { label: "Chilly Chicken", text: "1 chilly chicken gravy for tonight dinner" },
];

export default function TryTheParser() {
  const [input, setInput] = useState("2 chicken biryani tomorrow lunch cash");

  const parseSentence = (query: string): ParsedResult => {
    const q = query.toLowerCase();
    let dish = "Mom's Recipe Chicken Gravy";
    let unitPrice = 180;
    let qty = 1;
    let slot = "Tomorrow Dinner (8:00 PM)";
    let payment = "Cash on Delivery";

    if (q.includes("biryani")) {
      dish = "Special Chicken Biryani";
      unitPrice = 160;
    } else if (q.includes("mutton")) {
      dish = "Homestyle Mutton Gravy (500g)";
      unitPrice = 280;
    } else if (q.includes("chilly") || q.includes("chilli")) {
      dish = "Chilly Chicken Gravy";
      unitPrice = 170;
    }

    const qtyMatch = q.match(/(\d+)\s*(biryani|plate|packet|portion|piece|kg|gm|order)?/);
    if (qtyMatch && parseInt(qtyMatch[1], 10) > 0 && parseInt(qtyMatch[1], 10) <= 10) {
      qty = parseInt(qtyMatch[1], 10);
    }

    if (q.includes("lunch")) {
      slot = "Tomorrow Lunch (1:00 PM)";
    } else if (q.includes("breakfast")) {
      slot = "Tomorrow Breakfast (8:30 AM)";
    } else if (q.includes("tonight") || q.includes("today")) {
      slot = "Tonight Dinner (8:00 PM)";
    }

    if (q.includes("online") || q.includes("upi") || q.includes("gpay")) {
      payment = "Razorpay UPI / Online";
    }

    const itemTotal = unitPrice * qty;
    const packaging = 20;
    const delivery = 35;
    const gst = Math.round(itemTotal * 0.05);
    const total = itemTotal + packaging + delivery + gst;

    return {
      dish,
      qty,
      slot,
      payment,
      unitPrice,
      itemTotal,
      packaging,
      delivery,
      gst,
      total,
      guardrailNote: "Strict server-side validation. Zero LLM hallucination on price.",
    };
  };

  const parsed = parseSentence(input);

  return (
    <div className="bg-[#FAF9F5] border-2 border-black p-4 sm:p-6 my-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-black pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="p-1 bg-[#BD2320] text-white">
            <Sparkle weight="fill" className="w-4 h-4" />
          </span>
          <span className="font-mono text-xs font-black uppercase tracking-wider text-black">
            Interactive Test · WhatsApp Intent Parser
          </span>
        </div>
        <span className="font-mono text-[10px] text-zinc-500 font-bold uppercase">
          Client Intent vs Server Gate
        </span>
      </div>

      <p className="text-xs sm:text-sm text-zinc-700 mb-3 leading-relaxed">
        Type an informal Tanglish order sentence below or pick a preset to see the{" "}
        <strong>two-tier boundary</strong>: the LLM extracts intent, while the server enforces pricing.
      </p>

      {/* Preset pills */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="font-mono text-[10px] text-zinc-500 uppercase font-bold">Presets:</span>
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => setInput(p.text)}
            className={`font-mono text-[11px] px-2.5 py-1 border border-black transition-all ${
              input === p.text
                ? "bg-black text-white font-bold"
                : "bg-white text-zinc-700 hover:bg-zinc-100"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Input box */}
      <div className="relative mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., 2 chicken biryani tomorrow lunch cash"
          className="w-full bg-white border-2 border-black px-3 py-2.5 text-xs sm:text-sm font-mono text-black focus:outline-none focus:ring-2 focus:ring-[#BD2320]"
        />
      </div>

      {/* Two columns: Intent Extraction vs Server-Priced Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 font-mono text-xs">
        {/* Left: Client Intent */}
        <div className="bg-white border-2 border-black p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200">
              <span className="font-bold text-zinc-500 uppercase text-[10px]">
                1. Intent Extracted (LLM)
              </span>
              <span className="text-[10px] bg-zinc-100 text-zinc-600 px-1.5 py-0.5 border border-zinc-300">
                timeout: 2.5s
              </span>
            </div>
            <dl className="space-y-1.5 text-zinc-800">
              <div className="flex justify-between">
                <dt className="text-zinc-500">Dish detected:</dt>
                <dd className="font-bold text-right truncate max-w-[160px]">{parsed.dish}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Quantity:</dt>
                <dd className="font-bold">{parsed.qty}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Target slot:</dt>
                <dd className="font-bold text-right">{parsed.slot}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Payment mode:</dt>
                <dd className="font-bold">{parsed.payment}</dd>
              </div>
            </dl>
          </div>
          <div className="mt-3 pt-2 border-t border-dashed border-zinc-300 text-[10px] text-zinc-500 flex items-center gap-1.5">
            <ArrowRight weight="bold" className="w-3 h-3 text-[#BD2320]" />
            <span>Passed to Supabase transition gate</span>
          </div>
        </div>

        {/* Right: Server Priced Confirmation */}
        <div className="bg-white border-2 border-black p-3.5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200">
              <span className="font-bold text-[#BD2320] uppercase text-[10px] flex items-center gap-1">
                <ShieldCheck weight="bold" className="w-3.5 h-3.5" />
                2. Server-Priced Bill
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 border border-emerald-300">
                Authoritative
              </span>
            </div>
            <dl className="space-y-1 text-zinc-700">
              <div className="flex justify-between">
                <dt>{parsed.dish} (×{parsed.qty}):</dt>
                <dd className="font-mono">₹{parsed.itemTotal}</dd>
              </div>
              <div className="flex justify-between text-zinc-500 text-[11px]">
                <dt>Fixed Kitchen Packing:</dt>
                <dd className="font-mono">₹{parsed.packaging}</dd>
              </div>
              <div className="flex justify-between text-zinc-500 text-[11px]">
                <dt>Sivakasi Zone Delivery:</dt>
                <dd className="font-mono">₹{parsed.delivery}</dd>
              </div>
              <div className="flex justify-between text-zinc-500 text-[11px]">
                <dt>5% GST on Food:</dt>
                <dd className="font-mono">₹{parsed.gst}</dd>
              </div>
              <div className="flex justify-between pt-1 border-t-2 border-black font-bold text-black text-sm">
                <dt>Total Due:</dt>
                <dd className="text-[#BD2320]">₹{parsed.total}</dd>
              </div>
            </dl>
          </div>
          <p className="mt-3 pt-2 border-t border-zinc-200 text-[10px] text-emerald-700 font-bold flex items-center gap-1">
            <Check weight="bold" className="w-3 h-3" />
            <span>{parsed.guardrailNote}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
