"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, FileDoc } from "@phosphor-icons/react";
import { useEffect, useState, useRef, type ReactNode } from "react";
import ResumeModal from "@/components/ResumeModal";

/* Opacity starts at 0 for a true "reveal" feel. */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/** Order: experience → client markets → delivery volume → people → product reach */
const STATS = [
  { id: "years", kind: "number" as const, target: 5, suffix: "+", label: "Years" },
  { id: "markets", kind: "text" as const, final: "US · UK", label: "Clients" },
  { id: "projects", kind: "number" as const, target: 10, suffix: "+", label: "Projects" },
  { id: "mentored", kind: "number" as const, target: 100, suffix: "+", label: "Mentored" },
  { id: "downloads", kind: "number" as const, target: 10, suffix: "K+", label: "Downloads" },
];

/** Buttery deceleration — quick sweep, soft landing (all columns share this) */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/** One shared run: fast enough to feel snappy, long enough to read smooth */
const SLOT_DURATION_MS = 1450;
const SLOT_START_DELAY_MS = 0;

function useJackpotNumber(
  target: number,
  durationMs: number,
  delayMs: number,
  enabled: boolean
) {
  const [display, setDisplay] = useState(() => (enabled ? 0 : target));
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!enabled) {
      setDisplay(target);
      return;
    }

    const start = performance.now() + delayMs;

    const tick = (now: number) => {
      if (now < start) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);
      const next = t >= 1 ? target : Math.round(eased * target);

      setDisplay(next);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, durationMs, delayMs, enabled]);

  return display;
}

function useJackpotText(finalText: string, durationMs: number, delayMs: number, enabled: boolean) {
  const pool = ["US", "UK"];
  const [display, setDisplay] = useState(() => (enabled ? (pool[0] ?? "US") : finalText));
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!enabled) {
      setDisplay(finalText);
      return;
    }

    const start = performance.now() + delayMs;
    const CYCLE_MS = 130;

    const tick = (now: number) => {
      if (now < start) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);

      if (t >= 1) {
        setDisplay(finalText);
        return;
      }

      /* In sync with number reels: alternate, then ease to full label */
      if (t > 0.68) {
        setDisplay(finalText);
      } else {
        const step = Math.floor(elapsed / CYCLE_MS);
        setDisplay(pool[step % pool.length] ?? "US");
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [finalText, durationMs, delayMs, enabled]);

  return display;
}

function StatShell({
  index,
  label,
  children,
}: {
  index: number;
  label: string;
  children: ReactNode;
}) {
  return (
    <div
      className="flex-1 min-w-[18%] text-center py-3 px-1 sm:px-2 bg-[#0c0e12]"
      style={{ borderRight: index < STATS.length - 1 ? "1px solid #1e293b" : "none" }}
    >
      <div
        className="font-title text-base sm:text-lg font-black tabular-nums leading-tight min-h-[1.75rem] flex items-center justify-center"
        style={{ color: "#FF7410" }}
      >
        {children}
      </div>
      <div className="text-[8px] sm:text-[9px] text-[#475569] uppercase tracking-wider mt-0.5 leading-tight">
        {label}
      </div>
    </div>
  );
}

function NumberStatCell({
  target,
  suffix,
  label,
  index,
  reduceMotion,
}: {
  target: number;
  suffix: string;
  label: string;
  index: number;
  reduceMotion: boolean | null;
}) {
  const animate = reduceMotion !== true;

  const n = useJackpotNumber(target, SLOT_DURATION_MS, SLOT_START_DELAY_MS, animate);

  return (
    <StatShell index={index} label={label}>
      <>
        {animate ? (
          <>
            {n}
            {suffix}
          </>
        ) : (
          <>
            {target}
            {suffix}
          </>
        )}
      </>
    </StatShell>
  );
}

function TextStatCell({
  finalText,
  label,
  index,
  reduceMotion,
}: {
  finalText: string;
  label: string;
  index: number;
  reduceMotion: boolean | null;
}) {
  const animate = reduceMotion !== true;

  const text = useJackpotText(finalText, SLOT_DURATION_MS, SLOT_START_DELAY_MS, animate);

  return (
    <StatShell index={index} label={label}>
      <span className="tracking-tight text-[clamp(0.7rem,2.5vw,1.125rem)]">{animate ? text : finalText}</span>
    </StatShell>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 140]);
  const contentY = useTransform(scrollY, [0, 600], [0, -60]);
  const reduceMotion = useReducedMotion();
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden blueprint-grid border-b border-[#1e293b] pt-[clamp(6.5rem,14vh,9rem)] pb-10 sm:pb-14">
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Parallax glow */}
      <motion.div
        style={{
          y: bgY,
          background: "radial-gradient(ellipse 700px 500px at center, rgba(255,116,16,0.07) 0%, transparent 70%)",
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Corner marks */}
      <div className="absolute top-20 left-6 w-10 h-10 border-t-2 border-l-2 border-[#FF7410]/20" />
      <div className="absolute top-20 right-6 w-10 h-10 border-t-2 border-r-2 border-[#FF7410]/20" />
      <div className="absolute bottom-12 left-6 w-10 h-10 border-b-2 border-l-2 border-[#FF7410]/20" />
      <div className="absolute bottom-12 right-6 w-10 h-10 border-b-2 border-r-2 border-[#FF7410]/20" />

      {/* Watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-title font-black uppercase leading-none tracking-tighter opacity-[0.032]"
        style={{ fontSize: "clamp(3rem,16vw,13rem)", color: "#FF7410" }}
        aria-hidden
      >
        PORT_FOLIO
      </div>

      {/* Blueprint coords */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 1 }}
        className="absolute top-[4.5rem] left-14 text-[9px] font-mono uppercase tracking-widest hidden lg:block"
        style={{ color: "rgba(255,116,16,0.3)" }}
      >
        ux.portfolio / v2026
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 1 }}
        className="absolute top-[4.5rem] right-14 text-[9px] font-mono uppercase tracking-widest hidden lg:block"
        style={{ color: "rgba(255,116,16,0.3)" }}
      >
        chennai, india
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: contentY }} className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">

        {/* Available badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="flex justify-center mb-8">
          <div className="badge">
            <span className="status-dot" />
            Available for Freelance &amp; Full-time
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="font-title text-5xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tight text-white mb-5 leading-[1.05]"
        >
          Simon{" "}
          <span className="neon-text">Santhosh</span>
        </motion.h1>

        {/* Roles */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center justify-center gap-3 mb-6 flex-wrap"
        >
          {["UX Designer", "Vibe Coder", "Mentor"].map((role, i, arr) => (
            <span key={role} className="flex items-center gap-3">
              <span className="font-description text-base sm:text-lg text-[#64748b]">
                {role}
              </span>
              {i < arr.length - 1 && <span className="text-[#334155]">×</span>}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="font-description text-xl sm:text-2xl font-light text-white/85 mb-3 leading-relaxed"
        >
          I design experiences people{" "}
          <em className="neon-text not-italic font-medium">feel</em>
          {" "}— then build them.
        </motion.p>

        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="font-description text-sm text-[#64748b] max-w-lg mx-auto mb-10 leading-relaxed"
        >
          UX designer from Chennai focused on conversion-led products, practical systems, and clean handoffs.
        </motion.p>

        {/* Stats strip — jackpot count-up */}
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="flex flex-wrap sm:flex-nowrap items-stretch justify-center gap-px border border-[#1e293b] overflow-hidden max-w-3xl mx-auto mb-10 w-full"
        >
          {STATS.map((stat, i) =>
            stat.kind === "number" ? (
              <NumberStatCell
                key={stat.id}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                index={i}
                reduceMotion={reduceMotion}
              />
            ) : (
              <TextStatCell
                key={stat.id}
                finalText={stat.final}
                label={stat.label}
                index={i}
                reduceMotion={reduceMotion}
              />
            )
          )}
        </motion.div>

        {/* CTAs — no LinkedIn */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" animate="show"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#works"
            className="group flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#0a0908] bg-[#FF7410] hover:bg-[#FF8C30] transition-colors active:scale-[0.98]"
          >
            View Work
            <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <button
            type="button"
            onClick={() => setResumeOpen(true)}
            className="flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#94a3b8] border border-[#334155] hover:border-[#FF7410]/50 hover:text-white transition-all active:scale-[0.98]"
          >
            Get Resume
            <FileDoc size={15} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
