"use client";

import type { GraphicDesignPosterProject } from "@/lib/graphicDesignTypes";
import FadeInImage from "@/components/FadeInImage";

const SECTION = "text-[10px] font-mono uppercase tracking-[0.24em] text-[#FF7410]";
const STAT_H = "text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF7410]";

/** Image-area subsection labels (e.g. brochure/signage, business card) — same as slate/mono cap style site-wide. */
const IMAGE_BLOCK_LABEL =
  "mb-1.5 px-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b] sm:px-2";

type Props = { data: GraphicDesignPosterProject };

const DEFAULT_W = 1600;
const DEFAULT_H = 768;

/** One row, equal-height cells, full art visible (object-contain) — for mixed aspect ratios. */
const TRIPLE_ROW_H =
  "relative h-[min(52vh,44rem)] w-full min-h-0 sm:h-[min(58vh,50rem)] md:h-[min(64vh,56rem)] lg:h-[min(70vh,60rem)]";

export default function GraphicDesignPosterProjectCard({ data }: Props) {
  const {
    beforeAfter,
    businessCardPair,
    imagePairTitle,
    overview,
    projectLabel,
    projectTitle,
    tagline,
    thirdPanel,
    useMainRowSingleImage = false,
    hideImageBlock = false,
    packagingImages = [],
    marketingStats = [],
  } = data;
  const pairTitle = imagePairTitle ?? "Before & after";
  const businessCardTwoUp = businessCardPair != null && businessCardPair.first != null;
  const iw = beforeAfter.intrinsicWidth ?? DEFAULT_W;
  const ih = beforeAfter.intrinsicHeight ?? DEFAULT_H;
  const mainSingle = useMainRowSingleImage && thirdPanel == null;
  return (
    <article className="w-full min-w-0 border border-[#1e293b] bg-[#0c1014]">
      <header className="border-b border-[#1e293b] px-4 py-5 sm:px-6 sm:py-6">
        <p className={SECTION}>{projectLabel}</p>
        <h2 className="mt-2 font-title text-2xl font-black leading-tight text-[#f8fafc] sm:text-3xl">
          {projectTitle}
        </h2>
        <p className="mt-2 text-[11px] font-mono uppercase tracking-[0.14em] text-[#94a3b8]">{tagline}</p>
      </header>

      {overview != null && overview.length > 0 ? (
        <div className="border-b border-[#1e293b] px-4 py-4 sm:px-6 sm:py-5">
          <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">Overview</p>
          <p className="mt-2 text-[14px] leading-relaxed text-[#94a3b8]">{overview}</p>
        </div>
      ) : null}

      <div className="px-2 pb-0 pt-2 sm:px-3 sm:pt-3">
        {!hideImageBlock && <p className={IMAGE_BLOCK_LABEL}>{pairTitle}</p>}
        {!hideImageBlock && (mainSingle ? (
          <div className="border border-[#1e293b] bg-[#1e293b] p-1 sm:p-1.5">
            <div className="flex justify-center bg-[#0a0d10] p-0 sm:p-1">
              <div className="w-full max-w-[11rem] sm:max-w-[13rem] md:max-w-[15rem]">
                <FadeInImage
                  src={beforeAfter.oldSrc}
                  alt={beforeAfter.oldAlt}
                  width={iw}
                  height={ih}
                  quality={85}
                  className="object-contain object-top"
                  sizes="(max-width: 640px) 75vw, 15rem"
                  priority={data.id === "project-1"}
                />
              </div>
            </div>
          </div>
        ) : thirdPanel == null ? (
          <div className="grid w-full grid-cols-2 gap-px border border-[#1e293b] bg-[#1e293b]">
            <div className="bg-[#0a0d10] p-1 sm:p-1.5">
              <FadeInImage
                src={beforeAfter.oldSrc}
                alt={beforeAfter.oldAlt}
                width={iw}
                height={ih}
                className="object-contain object-top"
                sizes="(max-width: 768px) 50vw, 40vw"
                priority={data.id === "project-1"}
              />
            </div>
            <div className="bg-[#0a0d10] p-1 sm:p-1.5">
              <FadeInImage
                src={beforeAfter.newSrc}
                alt={beforeAfter.newAlt}
                width={iw}
                height={ih}
                unoptimized={beforeAfter.newSrc.endsWith(".svg")}
                className="object-contain object-top"
                sizes="(max-width: 768px) 50vw, 40vw"
                priority={data.id === "project-1"}
              />
            </div>
          </div>
        ) : (
          <div className="border border-[#1e293b] bg-[#1e293b] p-1 sm:p-1.5">
            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-px">
              <div className="bg-[#0a0d10] p-0 sm:p-1">
                <div className={TRIPLE_ROW_H}>
                  <FadeInImage
                    src={beforeAfter.oldSrc}
                    alt={beforeAfter.oldAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    priority={data.id === "project-1"}
                  />
                </div>
              </div>
              <div className="bg-[#0a0d10] p-0 sm:p-1">
                <div className={TRIPLE_ROW_H}>
                  <FadeInImage
                    src={beforeAfter.newSrc}
                    alt={beforeAfter.newAlt}
                    fill
                    unoptimized={beforeAfter.newSrc.endsWith(".svg")}
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    priority={data.id === "project-1"}
                  />
                </div>
              </div>
              <div className="bg-[#0a0d10] p-0 sm:p-1">
                <div className={TRIPLE_ROW_H}>
                  <FadeInImage
                    src={thirdPanel.src}
                    alt={thirdPanel.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {businessCardPair != null ? (
          <div className="border-t border-[#1e293b] px-2 pb-0 pt-4 sm:px-3 sm:pt-5">
            <p className={IMAGE_BLOCK_LABEL}>{businessCardPair.blockTitle}</p>
            <div
              className={
                businessCardTwoUp
                  ? "grid w-full grid-cols-1 gap-2 border border-[#1e293b] bg-[#1e293b] sm:grid-cols-2 sm:gap-px"
                  : "border border-[#1e293b] bg-[#1e293b]"
              }
            >
              {businessCardTwoUp && businessCardPair.first != null ? (
                <div className="bg-[#0a0d10] p-1 sm:p-1.5">
                  <FadeInImage
                    src={businessCardPair.first.src}
                    alt={businessCardPair.first.alt}
                    width={businessCardPair.first.intrinsicWidth ?? DEFAULT_W}
                    height={businessCardPair.first.intrinsicHeight ?? DEFAULT_H}
                    quality={85}
                    className="object-contain object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ) : null}
              <div className="bg-[#0a0d10] p-1 sm:p-1.5">
                <FadeInImage
                  src={businessCardPair.second.src}
                  alt={businessCardPair.second.alt}
                  width={businessCardPair.second.intrinsicWidth ?? DEFAULT_W}
                  height={businessCardPair.second.intrinsicHeight ?? DEFAULT_H}
                  quality={85}
                  className="object-contain object-top"
                  sizes={businessCardTwoUp ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 40vw"}
                />
              </div>
            </div>
          </div>
        ) : null}

        {/* Packaging images — 4-up grid (IR Stunner P5) */}
        {packagingImages.length > 0 ? (
          <div className="border-t border-[#1e293b] px-2 pb-4 pt-4 sm:px-3 sm:pt-5">
            <p className={IMAGE_BLOCK_LABEL}>Packaging &amp; product</p>
            <div className="grid w-full grid-cols-4 gap-0.5 sm:gap-1 md:gap-1.5">
              {packagingImages.map((img) => (
                <figure
                  key={img.src}
                  className="flex min-w-0 flex-col items-center justify-end gap-1 sm:gap-1.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-auto w-full max-h-40 object-contain sm:max-h-52 md:max-h-64 lg:max-h-72"
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
          </div>
        ) : null}

        {/* Marketing & sales stats */}
        {marketingStats.length > 0 ? (
          <div className="border-t border-[#1e293b] px-2 pb-4 pt-4 sm:px-3 sm:pt-5">
            <p className={`${STAT_H} mb-3 px-1 sm:px-2`}>Marketing &amp; sales / impact</p>
            <div className="grid grid-cols-2 gap-px bg-[#1e293b] sm:grid-cols-3 lg:grid-cols-5">
              {marketingStats.map((s) => (
                <div key={`${s.label}:${s.value}`} className="bg-[#0c1014] px-3 py-3 sm:px-4">
                  <p className="text-[9px] font-mono uppercase tracking-[0.12em] text-[#64748b] sm:text-[10px]">
                    {s.label}
                  </p>
                  <p className="mt-1.5 text-sm font-bold text-[#e2e8f0] sm:text-base">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
