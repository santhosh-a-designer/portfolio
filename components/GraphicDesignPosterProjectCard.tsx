"use client";

import Image from "next/image";
import type { GraphicDesignPosterProject } from "@/lib/graphicDesignTypes";

const SECTION = "text-[10px] font-mono uppercase tracking-[0.24em] text-[#FF7410]";

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
        <p className={IMAGE_BLOCK_LABEL}>{pairTitle}</p>
        {mainSingle ? (
          <div className="border border-[#1e293b] bg-[#1e293b] p-1 sm:p-1.5">
            <div className="flex justify-center bg-[#0a0d10] p-0 sm:p-1">
              <div className="w-full max-w-[11rem] sm:max-w-[13rem] md:max-w-[15rem]">
                <Image
                  src={beforeAfter.oldSrc}
                  alt={beforeAfter.oldAlt}
                  width={iw}
                  height={ih}
                  quality={100}
                  className="block h-auto w-full align-top"
                  sizes="(max-width: 640px) 75vw, 15rem"
                  priority={data.id === "project-1"}
                />
              </div>
            </div>
          </div>
        ) : thirdPanel == null ? (
          <div className="grid w-full grid-cols-2 gap-px border border-[#1e293b] bg-[#1e293b]">
            <div className="bg-[#0a0d10] p-1 sm:p-1.5">
              <Image
                src={beforeAfter.oldSrc}
                alt={beforeAfter.oldAlt}
                width={iw}
                height={ih}
                className="block h-auto w-full max-w-full align-top"
                sizes="(max-width: 768px) 50vw, 40vw"
                priority={data.id === "project-1"}
              />
            </div>
            <div className="bg-[#0a0d10] p-1 sm:p-1.5">
              <Image
                src={beforeAfter.newSrc}
                alt={beforeAfter.newAlt}
                width={iw}
                height={ih}
                unoptimized={beforeAfter.newSrc.endsWith(".svg")}
                className="block h-auto w-full max-w-full align-top"
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
                  <Image
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
                  <Image
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
                  <Image
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
        )}

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
                  <Image
                    src={businessCardPair.first.src}
                    alt={businessCardPair.first.alt}
                    width={businessCardPair.first.intrinsicWidth ?? DEFAULT_W}
                    height={businessCardPair.first.intrinsicHeight ?? DEFAULT_H}
                    quality={100}
                    className="block h-auto w-full max-w-full align-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ) : null}
              <div className="bg-[#0a0d10] p-1 sm:p-1.5">
                <Image
                  src={businessCardPair.second.src}
                  alt={businessCardPair.second.alt}
                  width={businessCardPair.second.intrinsicWidth ?? DEFAULT_W}
                  height={businessCardPair.second.intrinsicHeight ?? DEFAULT_H}
                  quality={100}
                  className="block h-auto w-full max-w-full align-top"
                  sizes={businessCardTwoUp ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, 40vw"}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}
