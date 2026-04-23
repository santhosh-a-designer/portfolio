"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import BackToWorksLink from "@/components/BackToWorksLink";

export const IRSTUNNER_FACES = [
  { src: "/project-snippets/irstunner/front.png", label: "Front" },
  { src: "/project-snippets/irstunner/back.png", label: "Back" },
  { src: "/project-snippets/irstunner/left.png", label: "Left" },
  { src: "/project-snippets/irstunner/right.png", label: "Right" },
] as const;

function PackagingFace({
  src,
  label,
  accent,
}: {
  src: string;
  label: string;
  accent: string;
}) {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  return (
    <figure className="relative overflow-hidden border border-[#1e293b] bg-[#0a0c10]">
      <div className="relative aspect-[3/4] w-full sm:aspect-[4/5]">
        {status === "loading" && (
          <div className="absolute inset-0 z-[1] overflow-hidden" aria-hidden>
            <div
              className="irstunner-skeleton-shimmer absolute inset-0 bg-[#111820]"
              style={{
                backgroundImage: `linear-gradient(90deg, transparent 0%, ${accent}18 40%, ${accent}30 50%, ${accent}18 60%, transparent 100%)`,
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, ${accent} 0.5px, transparent 0)`,
                backgroundSize: "14px 14px",
              }}
            />
          </div>
        )}
        {status === "error" ? (
          <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-1.5 p-3 text-center">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#64748b]">Image</span>
            <span className="text-[10px] text-[#475569]">Add {label.toLowerCase()}.png</span>
          </div>
        ) : (
          <Image
            src={src}
            alt={`IRSTUNNER packaging — ${label} face`}
            fill
            className={`object-contain p-2 transition-opacity duration-500 sm:p-3 ${
              status === "ready" ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 640px) 50vw, 25vw"
            onLoadingComplete={() => setStatus((s) => (s === "error" ? s : "ready"))}
            onError={() => setStatus("error")}
          />
        )}
      </div>
      <figcaption className="border-t border-[#1e293b] bg-[#08090b]/80 px-2 py-1.5 text-center text-[9px] font-mono font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">
        {label}
      </figcaption>
    </figure>
  );
}

/**
 * Full-page body for /ux-ui-shorts/irstunner — same content as the former modal, case-study layout.
 */
export default function IrstunnerUxShortView() {
  return (
    <>
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-10 sm:px-6 sm:pt-12 md:px-8 lg:pt-16">
        <p className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#64748b] sm:text-[10px]">
          02.1 / UX UI Shorts
        </p>
        <h1 className="mt-2 font-title text-2xl font-black leading-tight text-[#f8fafc] sm:text-3xl md:text-4xl">
          IRSTUNNER
        </h1>
        <p className="mt-2 text-[13px] leading-relaxed text-[#94a3b8] sm:text-sm">
          Product web story + box packaging for an infrared roof-coating line.
        </p>

        <div className="mb-2 mt-8">
          <Link
            href="/#snippets"
            className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-[#94a3b8] transition-colors hover:text-[#FF7410]"
          >
            <ArrowLeft size={16} className="text-[#FF7410]" weight="bold" aria-hidden />
            Project snippets
          </Link>
        </div>

        <div
          className="mt-2 border border-dashed border-[#334155] bg-[#08090b]/50 p-4 sm:p-5"
          style={{ boxShadow: "inset 0 0 0 1px rgba(255,116,16,0.08)" }}
        >
          <p className="font-title text-xs font-black uppercase tracking-[0.18em] text-[#FF7410] sm:text-sm">IRSTUNNER</p>
          <a
            href="https://irstunner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1.5 text-[12px] font-mono text-[#94a3b8] underline decoration-[#334155] underline-offset-4 transition-colors hover:text-[#e2e8f0] hover:decoration-[#FF7410]/60"
          >
            irstunner.com
            <ArrowRight size={12} className="translate-y-px text-[#FF7410]" weight="bold" />
          </a>
          <p className="mt-3 text-[13px] leading-relaxed text-[#94a3b8] sm:text-[14px]">
            Client work for a roof-coating line: a powder you mix with paint so treated roofs act like a{" "}
            <span className="text-[#e2e8f0]">thermal shield</span>—cutting heavy UV and infrared gain so less heat
            radiates into the space below. Positioned for factories and homes (including the{" "}
            <span className="text-[#e2e8f0]">CHILL HOME</span> line): cooler rooms, less ceiling heat, and a clearer story
            on <span className="text-[#e2e8f0]">infrared heat rejection</span> and roof performance in peak sun.
          </p>
          <ul className="mt-3 space-y-1.5 border-t border-[#1e293b]/80 pt-3 text-[12px] leading-relaxed text-[#94a3b8] sm:text-[13px]">
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-[#FF7410]">·</span>
              <span>
                <span className="text-[#e2e8f0]">WhatsApp-first community</span> for technical Q&amp;A and quick
                guidance—same motion as the site’s consult flow, so interest turns into conversation and orders.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-[#FF7410]">·</span>
              <span>
                <span className="text-[#e2e8f0]">Summer-led push</span> when roof heat is undeniable—timed reminders and
                stories while buyers feel the problem, not only read specs.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-[#FF7410]">·</span>
              <span>
                Community + seasonality fed <span className="text-[#e2e8f0]">stronger sales</span> through the hot
                months: more qualified chats, more closes after install stories spread in the group.
              </span>
            </li>
          </ul>
        </div>

        <p className="mb-1 mt-8 text-[10px] font-mono uppercase tracking-[0.12em] text-[#64748b]">Packaging — box faces</p>
        <div className="mt-1 grid grid-cols-2 gap-2 sm:gap-3">
          {IRSTUNNER_FACES.map((face) => (
            <PackagingFace key={face.label} src={face.src} label={face.label} accent="#FF7410" />
          ))}
        </div>

        <p className="mt-10 text-[12px] leading-relaxed text-[#64748b]">
          Use the <span className="text-[#94a3b8]">Back to home</span> control (bottom-right) to return to the site —
          you&apos;ll land on the homepage and scroll to <span className="text-[#FF7410]">Selected Works</span>.
        </p>
      </article>

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
