"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Stack, Swatches } from "@phosphor-icons/react";

const VP = { once: true, amount: 0.08 } as const;
const spring = { type: "spring" as const, stiffness: 55, damping: 18, mass: 1.1 };

const IRSTUNNER_FACES = [
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

export default function ProjectSnippets() {
  return (
    <section
      id="snippets"
      className="relative z-10 border-t border-[#1e293b] bg-[#08090b]"
    >
      <div className="border-b border-[#1e293b] px-5 py-2 sm:px-7 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-[9px] font-mono uppercase tracking-[0.2em] sm:text-[10px]">
          <span className="text-[#475569]">Index · 02.1 — Project snippets</span>
          <span className="text-[#475569]">UX shorts · Graphic</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-7 sm:py-12 md:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ ...spring }}
          className="mb-8"
        >
          <p className="mb-2 text-[9px] font-mono uppercase tracking-[0.24em] text-[#64748b] sm:text-[10px]">
            02.1 / Project snippets
          </p>
          <h2 className="font-title text-xl font-black leading-tight text-[#f8fafc] sm:text-2xl md:text-3xl">Project snippets</h2>
        </motion.header>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:items-start">
          {/* UX UI Shorts — IRSTUNNER */}
          <motion.article
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={VP}
            transition={{ ...spring, delay: 0 }}
            className="group relative flex min-h-[15rem] flex-col overflow-hidden border border-[#1e293b] bg-[#0c1014] shadow-[0_4px_0_0_rgba(0,0,0,0.2)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-[#334155] hover:shadow-[0_20px_48px_-24px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)] md:col-span-1"
          >
            <div
              className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
              style={{ background: "#FF7410" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,116,16,0.12) 0.5px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent to-45%"
              aria-hidden
            />
            <div className="relative h-[3px] w-full shrink-0 bg-[#FF7410]" />
            <div
              className="relative h-px w-full"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,116,16,0.5), transparent)",
              }}
              aria-hidden
            />

            <div className="relative z-[1] flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-start justify-between gap-3">
                <span
                  className="inline-flex items-center border px-2 py-1 text-[9px] font-mono font-semibold uppercase tracking-[0.12em]"
                  style={{
                    borderColor: "rgba(255,116,16,0.28)",
                    background: "color-mix(in srgb, #FF7410 12%, #0c1014)",
                    color: "color-mix(in srgb, #FF7410 70%, #e2e8f0)",
                  }}
                >
                  Product & UX
                </span>
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#1e293b] transition-colors duration-300 group-hover:border-[#334155]"
                  style={{
                    background: "color-mix(in srgb, #FF7410 14%, #08090b)",
                    boxShadow: "inset 0 0 0 1px rgba(255,116,16,0.15)",
                  }}
                >
                  <Stack size={20} style={{ color: "#FF7410" }} weight="duotone" aria-hidden />
                </div>
              </div>

              <h3 className="font-title text-lg font-bold leading-snug text-[#f1f5f9] sm:text-xl">UX UI Shorts!</h3>

              <div
                className="mt-4 border border-dashed border-[#334155] bg-[#08090b]/50 p-3 sm:p-4"
                style={{ boxShadow: "inset 0 0 0 1px rgba(255,116,16,0.08)" }}
              >
                <p className="font-title text-[11px] font-black uppercase tracking-[0.18em] text-[#FF7410] sm:text-xs">
                  IRSTUNNER
                </p>
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
                  <span className="text-[#e2e8f0]">CHILL HOME</span> line): cooler rooms, less ceiling heat, and a clearer
                  story on{" "}
                  <span className="text-[#e2e8f0]">infrared heat rejection</span> and roof performance in peak sun.
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
                      <span className="text-[#e2e8f0]">Summer-led push</span> when roof heat is undeniable—timed reminders
                      and stories while buyers feel the problem, not only read specs.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 shrink-0 text-[#FF7410]">·</span>
                    <span>
                      Community + seasonality fed <span className="text-[#e2e8f0]">stronger sales</span> through the
                      hot months: more qualified chats, more closes after install stories spread in the group.
                    </span>
                  </li>
                </ul>
              </div>

              <p className="mb-1 mt-5 text-[10px] font-mono uppercase tracking-[0.12em] text-[#64748b]">Packaging — box faces</p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {IRSTUNNER_FACES.map((face) => (
                  <PackagingFace key={face.label} src={face.src} label={face.label} accent="#FF7410" />
                ))}
              </div>

              <div className="mt-6 border-t border-[#1e293b] pt-5">
                <Link
                  href="/#works"
                  scroll
                  className="inline-flex w-full items-center justify-between gap-3 border border-[#1e293b] bg-[#08090b] px-4 py-3 text-left text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#e2e8f0] transition-all duration-300 hover:border-[#334155] sm:w-auto"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(255,116,16,0.1), 0 8px 20px -12px rgba(255,116,16,0.35)",
                  }}
                >
                  <span className="min-w-0 text-[#FF7410]">View work</span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#1e293b] transition-transform duration-300 group-hover:translate-x-0.5"
                    style={{ background: "rgba(255,116,16,0.1)", borderColor: "rgba(255,116,16,0.3)" }}
                  >
                    <ArrowRight size={16} weight="bold" style={{ color: "#FF7410" }} aria-hidden />
                  </span>
                </Link>
                <p className="mt-2 text-[10px] text-[#64748b]">Jump to full case studies in Selected Works.</p>
              </div>
            </div>
          </motion.article>

          {/* Graphic design */}
          <motion.article
            initial={{ opacity: 0, y: 48, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={VP}
            transition={{ ...spring, delay: 0.06 }}
            className="group relative flex min-h-[15rem] flex-col overflow-hidden border border-[#1e293b] bg-[#0c1014] shadow-[0_4px_0_0_rgba(0,0,0,0.2)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-[#334155] hover:shadow-[0_20px_48px_-24px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            <div
              className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
              style={{ background: "#E07010" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(224,112,16,0.12) 0.5px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent to-45%"
              aria-hidden
            />

            <div className="relative h-[3px] w-full shrink-0 bg-[#E07010]" />
            <div
              className="relative h-px w-full"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(224,112,16,0.5), transparent)",
              }}
              aria-hidden
            />

            <div className="relative z-[1] flex flex-1 flex-col p-5 sm:p-6">
              <div className="mb-3 flex items-start justify-between gap-3">
                <span
                  className="inline-flex items-center border px-2 py-1 text-[9px] font-mono font-semibold uppercase tracking-[0.12em] text-[#94a3b8]"
                  style={{
                    borderColor: "rgba(224,112,16,0.4)",
                    background: "color-mix(in srgb, #E07010 12%, #0c1014)",
                    color: "color-mix(in srgb, #E07010 70%, #e2e8f0)",
                  }}
                >
                  Print &amp; brand
                </span>
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#1e293b] transition-colors duration-300 group-hover:border-[#334155]"
                  style={{
                    background: "color-mix(in srgb, #E07010 14%, #08090b)",
                    boxShadow: "inset 0 0 0 1px rgba(224,112,16,0.15)",
                  }}
                >
                  <Swatches size={20} style={{ color: "#E07010" }} weight="duotone" aria-hidden />
                </div>
              </div>

              <h3 className="font-title text-lg font-bold leading-snug text-[#f1f5f9] sm:text-xl">Graphic design</h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#94a3b8]">
                Poster design, logos, and business cards we&apos;ve shipped for different clients — print-first and brand
                touchpoints beyond product UI.
              </p>

              <div className="mt-6 border-t border-[#1e293b] pt-5">
                <Link
                  href="/#contact"
                  scroll
                  className="inline-flex w-full items-center justify-between gap-3 border border-[#1e293b] bg-[#08090b] px-4 py-3 text-left text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#e2e8f0] transition-all duration-300 hover:border-[#334155] sm:w-auto"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(224,112,16,0.12), 0 8px 20px -12px rgba(224,112,16,0.4)",
                  }}
                >
                  <span className="min-w-0" style={{ color: "#E07010" }}>
                    View work
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#1e293b] transition-transform duration-300 group-hover:translate-x-0.5"
                    style={{ background: "rgba(224,112,16,0.1)", borderColor: "rgba(224,112,16,0.3)" }}
                  >
                    <ArrowRight size={16} weight="bold" style={{ color: "#E07010" }} aria-hidden />
                  </span>
                </Link>
                <p className="mt-2 text-[10px] text-[#64748b]">Open contact — we&apos;ll line up a graphic brief.</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
