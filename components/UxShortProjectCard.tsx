"use client";

import { ArrowSquareOut } from "@phosphor-icons/react";
import type { UxShortProjectContent } from "@/lib/uxShortProjectTypes";

const SECTION_H = "text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF7410]";

/**
 * Reusable UX Short project layout — exact same structure for every project.
 * Matches the case study design system (sharp borders, dark panels, orange accents).
 */
export default function UxShortProjectCard({ data }: { data: UxShortProjectContent }) {
  const live = data.liveUrlDisplay ?? new URL(data.liveUrl).host.replace(/^www\./, "");

  return (
    <article className="w-full min-w-0">
      {/* —— Header: label → title —— */}
      <header className="mb-8 border-b border-[#1e293b] pb-8">
        <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#FF7410]">
          {data.projectLabel}
        </p>
        <h2 className="mt-2 font-title text-2xl font-black leading-tight text-[#f8fafc] sm:text-3xl md:text-4xl">
          {data.projectTitle}
        </h2>
      </header>

      {/* —— Info bar: 3 boxes —— */}
      <div className="mb-10 grid grid-cols-1 gap-px bg-[#1e293b] sm:grid-cols-3">
        <div className="bg-[#0c1014] px-4 py-3">
          <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">Tools &amp; languages</p>
          <p className="mt-1.5 text-sm font-semibold leading-snug text-[#e2e8f0]">{data.tools}</p>
        </div>
        <div className="bg-[#0c1014] px-4 py-3">
          <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">Duration</p>
          <p className="mt-1.5 text-sm font-semibold text-[#e2e8f0]">{data.duration}</p>
        </div>
        <div className="bg-[#0c1014] px-4 py-3">
          <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">Live site</p>
          <a
            href={data.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF7410] hover:underline"
          >
            {live}
            <ArrowSquareOut size={16} className="shrink-0" aria-hidden />
          </a>
        </div>
      </div>

      {/* —— Content blocks —— */}
      <div className="grid gap-3 md:grid-cols-2">
        {/* Overview — full width */}
        <div className="border border-[#1e293b] bg-[#0c1014] md:col-span-2">
          <div className="border-b border-[#1e293b] px-4 py-3">
            <span className={SECTION_H}>Project overview</span>
          </div>
          <p className="p-4 text-[14px] leading-relaxed text-[#94a3b8]">{data.overview}</p>
        </div>

        {/* UX & UI */}
        <div className="border border-[#1e293b] bg-[#0c1014]">
          <div className="border-b border-[#1e293b] px-4 py-3">
            <span className={SECTION_H}>UX &amp; UI</span>
          </div>
          <p className="p-4 text-[14px] leading-relaxed text-[#94a3b8]">{data.uxUi}</p>
        </div>

        {/* Development */}
        <div className="border border-[#1e293b] bg-[#0c1014]">
          <div className="border-b border-[#1e293b] px-4 py-3">
            <span className={SECTION_H}>Development</span>
          </div>
          <p className="p-4 text-[14px] leading-relaxed text-[#94a3b8]">{data.development}</p>
        </div>
      </div>

      {/* —— Packaging / product images — horizontal row, no containers —— */}
      <section className="mt-10 border-t border-[#1e293b] pt-8">
        <h3 className={`${SECTION_H} mb-6`}>Packaging &amp; product</h3>
        <div className="grid w-full min-w-0 grid-cols-4 gap-0.5 sm:gap-1 md:gap-1.5">
          {data.packagingImages.map((img) => (
            <figure
              key={img.src}
              className="flex min-w-0 flex-col items-center justify-end gap-1 sm:gap-1.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="h-auto w-full max-h-40 object-contain sm:max-h-52 md:max-h-60 lg:max-h-72"
                loading="lazy"
                decoding="async"
              />
              {img.label && (
                <figcaption className="text-center text-[8px] font-mono font-semibold uppercase tracking-[0.14em] text-[#64748b] sm:text-[9px]">
                  {img.label}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>
    </article>
  );
}
