"use client";

import { ArrowSquareOut } from "@phosphor-icons/react";
import type { UxShortProjectContent } from "@/lib/uxShortProjectTypes";

const SECTION_H = "text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF7410]";

function liveLinkLabel(d: UxShortProjectContent): string {
  if (!d.liveUrl?.trim()) return "";
  if (d.liveUrlDisplay?.trim()) return d.liveUrlDisplay.trim();
  try {
    return new URL(d.liveUrl).host.replace(/^www\./, "");
  } catch {
    return d.liveUrl;
  }
}

export default function UxShortProjectCard({ data }: { data: UxShortProjectContent }) {
  const thirdLabel = data.thirdInfoLabel ?? "Live site";
  const linkText = liveLinkLabel(data);

  const packaging = data.packagingImages ?? [];
  const stats = data.marketingStats ?? [];
  const statGridClass =
    stats.length > 4
      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4";

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
          <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">{thirdLabel}</p>
          {data.liveUrl != null && data.liveUrl.length > 0 ? (
            <a
              href={data.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex max-w-full min-w-0 items-center gap-1.5 break-all text-sm font-semibold text-[#FF7410] hover:underline"
            >
              {linkText}
              <ArrowSquareOut size={16} className="shrink-0" aria-hidden />
            </a>
          ) : (
            <p className="mt-1.5 text-sm font-semibold leading-snug text-[#e2e8f0]">
              {data.thirdInfoFallback ?? "—"}
            </p>
          )}
        </div>
      </div>

      {/* —— Content blocks —— */}
      <div className="grid gap-3 md:grid-cols-2">
        <div className="border border-[#1e293b] bg-[#0c1014] md:col-span-2">
          <div className="border-b border-[#1e293b] px-4 py-3">
            <span className={SECTION_H}>Project overview</span>
          </div>
          <p className="p-4 text-[14px] leading-relaxed text-[#94a3b8]">{data.overview}</p>
        </div>

        <div className="border border-[#1e293b] bg-[#0c1014]">
          <div className="border-b border-[#1e293b] px-4 py-3">
            <span className={SECTION_H}>UX &amp; UI</span>
          </div>
          <p className="p-4 text-[14px] leading-relaxed text-[#94a3b8]">{data.uxUi}</p>
        </div>

        <div className="border border-[#1e293b] bg-[#0c1014]">
          <div className="border-b border-[#1e293b] px-4 py-3">
            <span className={SECTION_H}>Development</span>
          </div>
          <p className="p-4 text-[14px] leading-relaxed text-[#94a3b8]">{data.development}</p>
        </div>
      </div>

      {/* —— Marketing & sales —— */}
      {stats.length > 0 ? (
        <section className="mt-10 border-t border-[#1e293b] pt-8">
          <h3 className={`${SECTION_H} mb-4`}>Marketing &amp; sales / impact</h3>
          <div className={`grid gap-px bg-[#1e293b] ${statGridClass}`}>
            {stats.map((s) => (
              <div key={`${s.label}:${s.value}`} className="bg-[#0c1014] px-3 py-3 sm:px-4 sm:py-3.5">
                <p className="text-[9px] font-mono uppercase tracking-[0.12em] text-[#64748b] sm:text-[10px]">
                  {s.label}
                </p>
                <p className="mt-1.5 text-sm font-bold tabular-nums text-[#e2e8f0] sm:text-base">{s.value}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* —— Centered showreel —— */}
      {data.showreel ? (
        <section className="mt-10 border-t border-[#1e293b] pt-8">
          <h3 className={`${SECTION_H} mb-5 text-center`}>
            {data.showreel.title ?? "Design walkthrough"}
          </h3>
          <div className="mx-auto flex w-full max-w-4xl justify-center">
            <video
              className="w-full max-w-full border border-[#1e293b] bg-[#0c1014] shadow-[0_0_0_1px_rgba(15,23,42,0.4)]"
              controls
              playsInline
              preload="metadata"
              poster={data.showreel.poster}
            >
              {data.showreel.mimeType ? (
                <source src={data.showreel.src} type={data.showreel.mimeType} />
              ) : (
                <source src={data.showreel.src} />
              )}
              <a href={data.showreel.src} className="text-[#FF7410] underline">
                Download / open video
              </a>
            </video>
          </div>
        </section>
      ) : null}

      {/* —— Packaging / product —— */}
      {packaging.length > 0 ? (
        <section className="mt-10 border-t border-[#1e293b] pt-8">
          <h3 className={`${SECTION_H} mb-6`}>Packaging &amp; product</h3>
          <div className="grid w-full min-w-0 grid-cols-4 gap-0.5 sm:gap-1 md:gap-1.5">
            {packaging.map((img) => (
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
      ) : null}
    </article>
  );
}
