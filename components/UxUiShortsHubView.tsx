"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react";
import BackToWorksLink from "@/components/BackToWorksLink";
import UxShortProjectCard from "@/components/UxShortProjectCard";
import { IRSTUNNER_UX_SHORT } from "@/lib/uxShortProjects/irStunner";
import { IRASUS_UX_SHORT } from "@/lib/uxShortProjects/irasus";

function ScrollToProject() {
  const sp = useSearchParams();

  useEffect(() => {
    const p = sp.get("p");
    const id = p === "2" ? "project-2" : p === "1" ? "project-1" : null;
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    window.history.replaceState(null, "", "/ux-ui-shorts");
  }, [sp]);

  return null;
}

/**
 * One scroll page: Project 1 (IR Stunner), then Project 2 (iRasus) — same as Project Snippets / UX UI Shorts.
 */
export default function UxUiShortsHubView() {
  return (
    <>
      <Suspense fallback={null}>
        <ScrollToProject />
      </Suspense>

      <div className="border-b border-[#1e293b] bg-[#08090b]">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-12 sm:px-6 sm:pt-14 md:px-10 lg:pt-16">
          <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#FF7410]">
            02.1 / UX UI Shorts
          </p>
          <h1 className="mt-2 font-title text-3xl font-black leading-tight text-[#f8fafc] sm:text-4xl md:text-5xl">
            UX UI Shorts
          </h1>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#94a3b8]">
            Project 1 and Project 2 on one page — same template, stacked below.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-28 pt-10 sm:px-6 sm:pt-12 md:px-10">
        <section id="project-1" className="scroll-mt-24">
          <UxShortProjectCard data={IRSTUNNER_UX_SHORT} />
        </section>

        <div
          className="my-14 border-t border-[#1e293b] md:my-20"
          aria-hidden
        />

        <section id="project-2" className="scroll-mt-24">
          <UxShortProjectCard data={IRASUS_UX_SHORT} />
        </section>
      </div>

      <BackToWorksLink
        aria-label="Back to home"
        className="group fixed bottom-5 right-5 z-[260] inline-flex h-12 w-12 items-center overflow-hidden rounded-none border border-[#FF7410] bg-[#FF7410] px-3 text-[#0a0908] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:w-44 hover:border-[#FF8C30] hover:bg-[#FF8C30] focus-visible:w-44 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7410]/50"
      >
        <ArrowLeft size={18} className="shrink-0 text-[#0a0908]" aria-hidden />
        <span className="ml-2 whitespace-nowrap text-[11px] font-mono font-semibold uppercase tracking-[0.18em] opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
          Back to home
        </span>
      </BackToWorksLink>
    </>
  );
}
