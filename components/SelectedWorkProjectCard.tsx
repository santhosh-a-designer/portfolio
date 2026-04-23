"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowSquareOut } from "@phosphor-icons/react";

const cardSpring = { type: "spring" as const, stiffness: 80, damping: 18, mass: 0.9 };

/**
 * Reusable “rich” work card: header, hero image grid, description, impact chips, horizontal sticker row.
 * Use for projects that need more than the compact case-study teaser (e.g. IR Stunner).
 */
export type SelectedWorkProjectContent = {
  index: string;
  title: string;
  subtitle: string;
  /** Shown in header, e.g. "Mar 2026" */
  duration: string;
  heroImages: { src: string; alt: string }[];
  /** 2–3 line summary; keep short on purpose */
  description: string;
  /** Business / marketing / product impact chips */
  metrics: { value: string; label: string }[];
  /** Packaging or sticker art — horizontal scroller, natural width per image */
  packagingImages: { src: string; alt: string; label?: string }[];
  href: string;
  accentColor: string;
  linkLabel?: string;
};

type Props = {
  data: SelectedWorkProjectContent;
  i: number;
  borderClass: string;
};

export default function SelectedWorkProjectCard({ data, i, borderClass }: Props) {
  const {
    index,
    title,
    subtitle,
    duration,
    heroImages,
    description,
    metrics,
    packagingImages,
    href,
    accentColor,
    linkLabel = "View project",
  } = data;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ ...cardSpring, delay: i * 0.09 }}
      className={`flex flex-col overflow-hidden rounded-2xl border border-[#e3d8ce] bg-[#faf6f0] ${borderClass}`}
    >
      <div
        className="flex h-full min-w-0 flex-col p-4 sm:p-5"
        style={
          {
            // contained card; no edge-to-edge breakout
            boxShadow: "inset 0 0 0 1px color-mix(in srgb, var(--work-accent, #0f172a) 6%, transparent)",
            ["--work-accent" as string]: accentColor,
          } as CSSProperties
        }
      >
        {/* —— Header block —— */}
        <div className="mb-3 flex min-w-0 flex-wrap items-start justify-between gap-2 border-b border-[#e3d8ce]/90 pb-3">
          <div className="min-w-0">
            <p
              className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] sm:text-[9px]"
              style={{ color: accentColor }}
            >
              Project {index}
            </p>
            <h3 className="mt-0.5 font-title text-base font-black leading-tight text-[#130e08] sm:text-lg">
              {title}
            </h3>
            <p className="mt-0.5 text-[12px] font-medium leading-snug text-[#5a4a3d] sm:text-[13px]">{subtitle}</p>
          </div>
          <span
            className="shrink-0 rounded-md border px-2 py-1 text-[8px] font-mono font-bold uppercase tracking-wider"
            style={{
              color: accentColor,
              background: `color-mix(in srgb, ${accentColor} 9%, #faf6f0)`,
              borderColor: `color-mix(in srgb, ${accentColor} 32%, #e3d8ce)`,
            }}
          >
            {duration}
          </span>
        </div>

        {/* —— Hero / visual block (all key images, contained) —— */}
        <div
          className="mb-3 min-w-0 overflow-hidden rounded-xl border border-[#e8e0d8] p-1.5 sm:p-2"
          style={{ background: `color-mix(in srgb, ${accentColor} 4%, #f5f0e8)` }}
        >
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            {heroImages.map((img) => (
              <div
                key={img.src}
                className="relative flex h-[5.5rem] min-w-0 items-center justify-center sm:h-28"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain p-0.5"
                  sizes="(max-width: 768px) 40vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* —— Description (2–3 lines) —— */}
        <p className="mb-3 line-clamp-3 min-w-0 text-[12px] leading-[1.55] text-[#5a4a3d] sm:text-[13px] sm:leading-relaxed">
          {description}
        </p>

        {/* —— Marketing & business (sub-box) —— */}
        <div
          className="mb-3 min-w-0 rounded-xl border p-2.5 sm:p-3"
          style={{
            background: `color-mix(in srgb, ${accentColor} 5%, #ffffff)`,
            borderColor: `color-mix(in srgb, ${accentColor} 22%, #e3d8ce)`,
          }}
        >
          <p
            className="mb-1.5 text-[8px] font-mono font-semibold uppercase tracking-[0.16em] sm:text-[9px]"
            style={{ color: accentColor }}
          >
            Impact &amp; GTM
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {metrics.map((m) => (
              <div
                key={`${m.label}-${m.value}`}
                className="max-w-full rounded-md border border-[#e3d8ce] bg-[#faf6f0]/90 px-2 py-1.5 text-center"
              >
                <p className="font-title text-[10px] font-black leading-tight text-[#130e08] sm:text-[11px]">
                  {m.value}
                </p>
                <p className="mt-0.5 text-[6px] font-mono font-semibold uppercase leading-tight tracking-wider text-[#6b5d4d] sm:text-[7px]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* —— Packaging stickers (horizontal scroll, natural width, fixed height) —— */}
        <div className="min-w-0">
          <p className="mb-1.5 text-[8px] font-mono font-semibold uppercase tracking-[0.12em] text-[#9a8a7a]">
            Packaging
          </p>
          <div className="overflow-x-auto overflow-y-hidden rounded-lg border border-[#e3d8ce] bg-white/30 [-webkit-overflow-scrolling:touch] [scrollbar-color:rgba(0,0,0,0.2)_transparent] [scrollbar-width:thin]">
            <div className="flex w-max min-w-0 items-end gap-2 px-2 py-2 sm:gap-3 sm:px-3 sm:py-2.5">
              {packagingImages.map((img) => (
                <div
                  key={img.src + (img.label ?? "")}
                  className="flex w-fit shrink-0 flex-col items-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- natural width per sticker */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-20 w-auto max-w-[min(220px,78vw)] object-contain sm:h-24"
                    loading="lazy"
                    decoding="async"
                  />
                  {img.label ? (
                    <span className="mt-0.5 text-[6px] font-mono font-semibold uppercase tracking-widest text-[#9a8a7a]">
                      {img.label}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA: internal page — not full-card link so sticker scroll stays usable */}
        <Link
          href={href}
          className="mt-3 inline-flex w-full min-w-0 items-center justify-between gap-2 rounded-lg border border-[#e3d8ce] bg-[#130e08]/5 px-3 py-2.5 text-left transition-colors hover:bg-[#130e08]/8 sm:w-auto sm:min-w-[12rem]"
        >
          <span className="min-w-0 text-[9px] font-mono font-bold uppercase tracking-[0.14em]" style={{ color: accentColor }}>
            {linkLabel}
          </span>
          <span className="flex shrink-0 items-center gap-1" style={{ color: accentColor }}>
            <span className="text-[8px] font-mono max-sm:sr-only">Page</span>
            <ArrowSquareOut className="h-3.5 w-3.5" weight="bold" />
          </span>
        </Link>
        <p className="mt-1.5 text-[7px] font-mono uppercase tracking-wider text-[#9a8a7a]">
          Full write-up, web &amp; packaging
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-[7px] text-[#9a8a7a] sm:text-[8px]">
          <a
            href="https://irstunner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 font-mono text-[#5a4a3d] underline decoration-[#c9bfb4] underline-offset-2 transition-colors hover:text-[#130e08]"
            onClick={(e) => e.stopPropagation()}
          >
            irstunner.com
            <ArrowRight size={10} weight="bold" className="shrink-0" aria-hidden />
          </a>
        </p>
      </div>
    </motion.article>
  );
}
