"use client";

import Image from "next/image";
import { Star, Globe, ShieldCheck } from "@phosphor-icons/react";

export default function EditorialTrustBento() {
  return (
    <div className="border-2 border-black bg-white shadow-[4px_4px_0_0_#000] overflow-hidden">
      {/* Subdued Store Nav Header Preview */}
      <div className="flex items-center justify-between border-b-2 border-black bg-[#FAF9F5] px-4 py-3 font-mono text-[11px] tracking-wider text-zinc-700 select-none">
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase">
          <span className="hover:text-black cursor-pointer">Shop</span>
          <span className="hover:text-black cursor-pointer">Paws Plus</span>
          <span className="hover:text-black cursor-pointer">About Us</span>
          <span className="hover:text-black cursor-pointer">Support</span>
        </div>
        <div className="flex items-center gap-1.5 font-serif font-black text-xs sm:text-sm text-[#0D2E28]">
          <span className="h-2 w-2 rounded-full bg-[#0D2E28]" />
          <span>We Two Pets</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-zinc-500">
          <span>Search</span>
          <span>·</span>
          <span>Cart (0)</span>
        </div>
      </div>

      {/* Bento Grid Canvas */}
      <div className="bg-[#FAF9F5] p-3 sm:p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
          {/* Row 1, Card 1: Community (3 cols) */}
          <div className="md:col-span-4 border-2 border-black bg-white p-5 flex flex-col justify-between shadow-[2px_2px_0_0_#000]">
            <div>
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-400 block mb-3">
                OUR COMMUNITY
              </span>
              <p className="font-serif text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
                1,200+
              </p>
              <p className="text-sm font-semibold text-zinc-700 mt-1">Happy families</p>
            </div>
            <p className="font-serif italic text-xs text-zinc-500 mt-6 pt-3 border-t border-black/10">
              “Pets and people, thriving together.”
            </p>
          </div>

          {/* Row 1, Card 2: 4.5 Rating with Golden Retriever Peeking (4 cols) */}
          <div className="md:col-span-4 border-2 border-black bg-[#0D2E28] text-white p-5 flex flex-col justify-between shadow-[2px_2px_0_0_#000] relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-1 text-[#E8A94A] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} weight="fill" />
                ))}
              </div>
              <p className="font-serif text-4xl sm:text-5xl font-black text-white leading-none">
                4.5
              </p>
              <p className="text-xs text-zinc-300 mt-1">Average rating</p>
            </div>

            {/* Golden Retriever Image with bone */}
            <div className="absolute -right-2 top-2 bottom-0 w-44 sm:w-48 pointer-events-none select-none">
              <Image
                src="/case-studies/we-two-pets/editorial/golden-peeking-bone-v2.webp"
                alt="Golden retriever puppy breaking through paper holding a bone"
                fill
                className="object-contain object-right"
              />
            </div>

            <div className="relative z-10 mt-6">
              <p className="font-serif italic text-xs text-white">Every product tested</p>
              <span className="font-mono text-[9px] font-black tracking-widest uppercase text-emerald-400 block mt-0.5">
                100% VET-REVIEWED
              </span>
              <div className="w-28 h-1 bg-emerald-500/30 rounded-full mt-1.5 overflow-hidden">
                <div className="w-full h-full bg-emerald-400" />
              </div>
            </div>
          </div>

          {/* Row 1, Card 3: Handpicked Store Philosophy (4 cols) */}
          <div className="md:col-span-4 border-2 border-black bg-[#09221D] text-white p-5 flex flex-col justify-between shadow-[2px_2px_0_0_#000]">
            <div>
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#A3B899] block mb-2">
                OUR STORE
              </span>
              <h4 className="font-serif text-3xl sm:text-4xl font-black text-[#D4973B] tracking-tight">
                Handpicked
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1">Products in our entire store</p>
            </div>

            <div className="border-t border-white/15 pt-3 mt-4 space-y-1 font-serif text-xs text-zinc-300 leading-relaxed">
              <p>Not one more than necessary.</p>
              <p>Not one less than exceptional.</p>
              <p className="font-sans text-[11px] text-zinc-400 pt-1 font-normal">
                Every product was tested for a minimum of 30 days before listing.
              </p>
            </div>
          </div>

          {/* Row 2, Card 1 & 2: Real Voices with Persian Cat Megaphone (8 cols) */}
          <div className="md:col-span-8 border-2 border-black bg-[#0D2E28] text-white p-5 flex flex-col sm:flex-row items-center gap-4 shadow-[2px_2px_0_0_#000] relative overflow-hidden">
            {/* Sunglasses Cat Image */}
            <div className="relative w-36 sm:w-44 h-40 sm:h-44 shrink-0 select-none">
              <Image
                src="/case-studies/we-two-pets/editorial/persian-cat-megaphone-v2.webp"
                alt="White Persian cat wearing sunglasses holding megaphone on rock"
                fill
                className="object-contain object-bottom"
              />
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-black uppercase tracking-widest text-emerald-400">
                  REAL VOICES
                </span>
                <div className="flex items-center gap-0.5 text-[#E8A94A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} weight="fill" />
                  ))}
                </div>
              </div>

              <blockquote className="font-serif italic text-sm sm:text-base text-white leading-snug">
                “The travel bag made our road trip actually enjoyable. My pup settled in 5 minutes flat.”
              </blockquote>

              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 pt-1">
                ANANYA R. — HYDERABAD · INDIE DOG PARENT
              </p>

              <div className="flex items-center gap-1.5 pt-1">
                <span className="h-1.5 w-1.5 bg-emerald-400 rounded-none" />
                <span className="h-1.5 w-1.5 bg-white/30 rounded-none" />
                <span className="h-1.5 w-1.5 bg-white/30 rounded-none" />
                <span className="h-1.5 w-1.5 bg-white/30 rounded-none" />
              </div>
            </div>
          </div>

          {/* Row 2, Card 3: Metrics & Peeking Pug (4 cols) */}
          <div className="md:col-span-4 border-2 border-black bg-white flex flex-col justify-between shadow-[2px_2px_0_0_#000] overflow-hidden">
            {/* Top 2 Mini Cards */}
            <div className="grid grid-cols-2 gap-2 p-3">
              <div className="border border-black/15 bg-[#FAF9F5] p-2.5 flex items-start justify-between">
                <div>
                  <span className="font-mono text-[8px] font-black uppercase tracking-wider text-zinc-400 block">
                    COUNTRIES
                  </span>
                  <span className="font-serif text-xl font-black text-zinc-900 block mt-0.5">14</span>
                  <span className="text-[10px] text-zinc-500 block leading-tight">Best wins globally</span>
                </div>
                <Globe size={16} className="text-emerald-700 shrink-0" weight="bold" />
              </div>

              <div className="border border-black/15 bg-[#FAF9F5] p-2.5 flex items-start justify-between">
                <div>
                  <span className="font-mono text-[8px] font-black uppercase tracking-wider text-zinc-400 block">
                    RETURN WINDOW
                  </span>
                  <span className="font-serif text-xl font-black text-zinc-900 block mt-0.5">30 days</span>
                  <span className="text-[10px] text-zinc-500 block leading-tight">No questions asked</span>
                </div>
                <ShieldCheck size={16} className="text-emerald-700 shrink-0" weight="bold" />
              </div>
            </div>

            {/* Pug peeking over dark ledge */}
            <div className="relative h-24 sm:h-28 w-full bg-[#0D2E28] flex items-end justify-center select-none">
              <Image
                src="/case-studies/we-two-pets/editorial/pug-peeking.webp"
                alt="Cute pug puppy peeking over ledge"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
