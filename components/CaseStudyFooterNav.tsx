"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

export interface FooterNavItem {
  company: string;
  project: string;
  summary: string;
  href: string;
}

interface CaseStudyFooterNavProps {
  currentTitle: string;
  currentSubtitle: string;
  prev?: FooterNavItem | null;
  next?: FooterNavItem | null;
}

export default function CaseStudyFooterNav({
  currentTitle,
  currentSubtitle,
  prev,
  next,
}: CaseStudyFooterNavProps) {
  return (
    <footer className="mt-14 space-y-4 font-sans select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Previous Case Study */}
        {prev ? (
          <Link
            href={prev.href}
            className="group flex flex-col justify-between border-2 border-black bg-white p-5 shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-left"
          >
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-500 uppercase mb-2">
              <ArrowLeft weight="bold" className="group-hover:-translate-x-1 transition-transform" />
              <span>PREVIOUS CASE STUDY</span>
            </div>
            <div>
              <p className="font-mono text-[11px] font-black uppercase text-[#FF462D]">{prev.company}</p>
              <h4 className="text-lg font-black uppercase text-black leading-tight mt-0.5">{prev.project}</h4>
              <p className="text-xs text-zinc-600 line-clamp-2 mt-1 font-medium">{prev.summary}</p>
            </div>
          </Link>
        ) : (
          <div className="border-2 border-dashed border-zinc-300 bg-zinc-50 p-5 flex flex-col justify-center items-center text-center">
            <span className="font-mono text-xs font-bold uppercase text-zinc-400">START OF SELECTED WORK</span>
          </div>
        )}

        {/* Next Case Study */}
        {next ? (
          <Link
            href={next.href}
            className="group flex flex-col justify-between border-2 border-black bg-[#FAED00] p-5 shadow-[4px_4px_0_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-right"
          >
            <div className="flex items-center justify-end gap-2 font-mono text-xs font-bold text-black uppercase mb-2">
              <span>NEXT CASE STUDY</span>
              <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <p className="font-mono text-[11px] font-black uppercase text-[#1976D2]">{next.company}</p>
              <h4 className="text-lg font-black uppercase text-black leading-tight mt-0.5">{next.project}</h4>
              <p className="text-xs text-zinc-800 line-clamp-2 mt-1 font-medium">{next.summary}</p>
            </div>
          </Link>
        ) : (
          <div className="border-2 border-dashed border-zinc-300 bg-zinc-50 p-5 flex flex-col justify-center items-center text-center">
            <span className="font-mono text-xs font-bold uppercase text-zinc-400">END OF SELECTED WORK</span>
          </div>
        )}
      </div>

      {/* Bottom Sticky-Look Brand Strip */}
      <div className="border-2 border-black bg-black text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs shadow-[4px_4px_0_0_#000]">
        <div>
          <p className="text-[#FAED00] font-black uppercase">{currentTitle}</p>
          <p className="text-zinc-400 text-[11px] mt-0.5">{currentSubtitle}</p>
        </div>
        <Link
          href="/#work"
          onClick={() => {
            try {
              sessionStorage.setItem("portfolio:scrollToWork", "1");
            } catch {
              /* */
            }
          }}
          className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-[#FAED00] text-black font-black uppercase transition-colors border border-white text-center shrink-0 cursor-pointer"
        >
          Back to All Works ↑
        </Link>
      </div>
    </footer>
  );
}
