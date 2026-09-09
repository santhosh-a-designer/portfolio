"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowClockwise, ArrowSquareOut } from "@phosphor-icons/react";

type Props = {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
};

export default function CaseStudyLaptopMockup({
  src,
  alt,
  url = "https://makeon.build",
  priority = true,
}: Props) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div className="mx-auto my-6 flex justify-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 border border-[#FF7410]/50 bg-[#0c1014] px-4 py-2 text-[11px] font-mono uppercase tracking-[0.16em] text-[#FF7410] transition-colors hover:border-[#FF7410] hover:bg-[#FF7410]/10"
        >
          <span>Re-open preview ({url.replace(/^https?:\/\//, "")})</span>
          <ArrowSquareOut size={14} weight="bold" />
        </button>
      </div>
    );
  }

  const handleBack = () => {
    if (typeof window !== "undefined") {
      // If user came from external site or direct link, ensure they return to portfolio home
      const hasReferrer = document.referrer && document.referrer.includes(window.location.host);
      if (hasReferrer && window.history.length > 1) {
        window.history.back();
      } else {
        window.location.assign("/#works");
      }
    }
  };

  const handleReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <AnimatePresence>
      <div className="relative mx-auto my-8 w-full max-w-5xl px-4 sm:px-6">
        {/* Ambient background glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[300px] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF7410]/[0.08] blur-[80px]"
          aria-hidden
        />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex flex-col items-center"
        >
          {/* ─── MacBook Display Lid ─── */}
          <div className="relative w-full rounded-t-[18px] sm:rounded-t-[24px] border-[3px] sm:border-[4px] border-[#27272a] bg-[#09090b] p-2 sm:p-3 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
            {/* Top bezel with browser navigation controls */}
            <div className="relative mb-2 flex items-center justify-between px-2">
              
              {/* Traffic Light Window Controls */}
              <div className="flex items-center gap-1.5 group/traffic">
                <button
                  type="button"
                  title="Close preview"
                  aria-label="Close preview"
                  onClick={() => setIsOpen(false)}
                  className="relative flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#ef4444] transition-opacity hover:opacity-80 focus:outline-none"
                >
                  <span className="opacity-0 group-hover/traffic:opacity-100 text-[8px] font-bold leading-none text-black select-none">
                    ×
                  </span>
                </button>
                <span className="h-2.5 w-2.5 rounded-full bg-[#eab308]/80 cursor-default" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/80 cursor-default" />
              </div>

              {/* Navigation Arrows & Refresh Bar */}
              <div className="flex items-center gap-1.5 ml-3">
                <button
                  type="button"
                  onClick={handleBack}
                  title="Go Back"
                  aria-label="Go Back to previous view"
                  className="flex h-5 w-5 items-center justify-center rounded text-[#94a3b8] transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
                >
                  <ArrowLeft size={12} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined") window.history.forward();
                  }}
                  title="Go Forward"
                  aria-label="Go Forward"
                  className="flex h-5 w-5 items-center justify-center rounded text-[#64748b] transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
                >
                  <ArrowRight size={12} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={handleReload}
                  title="Reload"
                  aria-label="Reload"
                  className="flex h-5 w-5 items-center justify-center rounded text-[#94a3b8] transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
                >
                  <ArrowClockwise size={12} weight="bold" />
                </button>
              </div>

              {/* Camera dot */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
                <div className="h-2 w-2 rounded-full bg-[#18181b] ring-1 ring-[#3f3f46]/40" />
              </div>

              {/* Browser URL bar with direct external link */}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open ${url} in new tab`}
                className="flex items-center gap-2 rounded-md border border-[#27272a] bg-[#18181b]/90 px-3 py-0.5 text-[10px] font-mono text-[#94a3b8] transition-colors hover:border-[#FF7410]/50 hover:text-[#f8fafc] max-sm:hidden group/url"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                <span className="truncate max-w-[200px]">{url.replace(/^https?:\/\//, "")}</span>
                <ArrowSquareOut size={11} className="text-[#64748b] group-hover/url:text-[#FF7410] transition-colors" />
              </a>
            </div>

          {/* Screen Content Container */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px] sm:rounded-[12px] border border-[#1e293b] bg-[#08090b]">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 1100px"
            />
            {/* Subtle screen reflection gradient */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05]"
              aria-hidden
            />
          </div>
        </div>

        {/* ─── MacBook Base / Keyboard Deck Lip ─── */}
        <div className="relative -mt-0.5 h-3.5 sm:h-5 w-[103%] sm:w-[104%] rounded-b-[14px] sm:rounded-b-[18px] border-t border-[#3f3f46] bg-gradient-to-b from-[#27272a] via-[#18181b] to-[#09090b] shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
          {/* Center thumb groove for opening lid */}
          <div className="absolute left-1/2 top-0 h-1.5 w-16 sm:w-24 -translate-x-1/2 rounded-b-[6px] bg-[#09090b] border-b border-[#3f3f46]/50" />
        </div>

        {/* ─── Laptop Drop Shadow ─── */}
        <div
          className="h-4 w-[90%] -mt-1 rounded-full bg-black/60 blur-md"
          aria-hidden
        />
      </motion.div>
    </div>
  </AnimatePresence>
  );
}
