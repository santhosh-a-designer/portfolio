"use client";

import { ArrowClockwise } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { VidyasOrderSyncLine, VidyasOrderSyncRules } from "@/lib/vidyasKitchenCaseStudyContent";

const TONE_CLASS: Record<NonNullable<VidyasOrderSyncLine["tone"]>, string> = {
  comment: "text-[#6A9955]",
  keyword: "text-[#569CD6]",
  string: "text-[#CE9178]",
  muted: "text-[#858585]",
  accent: "text-[#4EC9B0]",
  default: "text-[#D4D4D4]",
  heading: "text-[#DCDCAA] font-bold",
};

function useTypewriter(text: string, active: boolean, speed = 14) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    if (count >= text.length) return;
    const id = window.setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(id);
  }, [active, text, count, speed]);

  return active ? text.slice(0, count) : text;
}

function CodeLine({
  line,
  lineNumber,
  visible,
  isTyping,
  isHovered,
  isPulse,
  onHover,
}: {
  line: VidyasOrderSyncLine;
  lineNumber: number;
  visible: boolean;
  isTyping: boolean;
  isHovered: boolean;
  isPulse: boolean;
  onHover: (n: number | null) => void;
}) {
  const display = useTypewriter(line.text, isTyping, 10);
  const indent = (line.indent ?? 0) * 16;

  if (!visible) return null;

  return (
    <div
      className={`relative flex items-start gap-0 min-h-[22px] transition-colors duration-200 ${
        isHovered || isPulse ? "bg-[#264f78]/60" : "hover:bg-[#2a2d2e]"
      } ${isPulse ? "sync-line-pulse" : ""}`}
      onMouseEnter={() => onHover(lineNumber)}
      onMouseLeave={() => onHover(null)}
    >
      {(isHovered || isPulse) && (
        <span
          className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#FF462D]"
          aria-hidden
        />
      )}
      <span className="w-8 shrink-0 text-right pr-3 text-[#858585] select-none text-[11px] leading-[22px]">
        {lineNumber}
      </span>
      <span
        className={`flex-1 whitespace-pre-wrap break-words text-[11px] sm:text-xs leading-[22px] ${TONE_CLASS[line.tone ?? "default"]}`}
        style={{ paddingLeft: indent }}
      >
        {display}
        {isTyping && (
          <span className="inline-block w-2 h-3.5 bg-[#AEAFAD] animate-pulse ml-0.5 align-middle" aria-hidden />
        )}
        {line.highlight && !isTyping && visible && (
          <span className="ml-2 inline-block px-1 py-0 text-[8px] font-bold uppercase tracking-wider bg-[#FF462D] text-white align-middle">
            key
          </span>
        )}
      </span>
    </div>
  );
}

type Props = {
  rules: VidyasOrderSyncRules;
};

export default function OrderSyncRules({ rules }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [revealedLines, setRevealedLines] = useState(0);
  const [animationDone, setAnimationDone] = useState(false);
  const [hoverLine, setHoverLine] = useState<number | null>(null);
  const [pulseIndex, setPulseIndex] = useState(0);
  const [replayKey, setReplayKey] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const highlightLines = rules.lines
    .map((line, i) => (line.highlight ? i + 1 : null))
    .filter((n): n is number => n !== null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setStarted(true);
      setRevealedLines(rules.lines.length);
      setAnimationDone(true);
    }
  }, [reducedMotion, rules.lines.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setStarted(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, replayKey]);

  useEffect(() => {
    if (!started || reducedMotion || animationDone) return;
    if (revealedLines >= rules.lines.length) {
      setAnimationDone(true);
      return;
    }
    const line = rules.lines[revealedLines];
    const delay = line.text === "" ? 40 : Math.min(120, 30 + line.text.length * 2);
    const id = window.setTimeout(() => setRevealedLines((n) => n + 1), delay);
    return () => clearTimeout(id);
  }, [started, revealedLines, rules.lines, reducedMotion, animationDone]);

  useEffect(() => {
    if (!animationDone || reducedMotion || highlightLines.length === 0) return;
    const id = window.setInterval(() => {
      setPulseIndex((i) => (i + 1) % highlightLines.length);
    }, 2200);
    return () => clearInterval(id);
  }, [animationDone, reducedMotion, highlightLines.length]);

  const replay = useCallback(() => {
    setStarted(false);
    setRevealedLines(0);
    setAnimationDone(false);
    setPulseIndex(0);
    setHoverLine(null);
    setReplayKey((k) => k + 1);
    requestAnimationFrame(() => setStarted(true));
  }, []);

  const activePulseLine = animationDone ? highlightLines[pulseIndex] : null;

  return (
    <div ref={ref} className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h3 className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-sm bg-[#519aba]" />
          Sync contract · redacted snippet
        </h3>
        <button
          type="button"
          onClick={replay}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-2 border-black font-mono text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FAED00] transition-colors"
        >
          <ArrowClockwise weight="bold" className="w-3.5 h-3.5" />
          Replay
        </button>
      </div>

      <div
        key={replayKey}
        className="rounded border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-[#323233] border-b border-[#3c3c3c]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
          <span className="ml-2 text-[#cccccc] text-[10px] font-mono truncate">{rules.filename}</span>
          <span className="ml-auto px-1.5 py-0.5 bg-[#FF462D] text-white text-[9px] font-bold uppercase">
            Redacted
          </span>
        </div>

        <div className="bg-[#1e1e1e] py-3 px-2 sm:px-4 font-mono overflow-x-auto min-h-[320px]">
          {rules.lines.map((line, index) => {
            const lineNumber = index + 1;
            const visible = index < revealedLines;
            const isTyping = index === revealedLines - 1 && !animationDone;
            return (
              <CodeLine
                key={`${replayKey}-${index}`}
                line={line}
                lineNumber={lineNumber}
                visible={visible}
                isTyping={isTyping}
                isHovered={hoverLine === lineNumber}
                isPulse={activePulseLine === lineNumber}
                onHover={setHoverLine}
              />
            );
          })}
        </div>

        <div className="px-4 py-2 bg-[#FAED00] border-t-2 border-black font-mono text-[10px] font-bold uppercase tracking-wide space-y-1">
          <p>{rules.illustrationNote}</p>
          <p className="text-zinc-700 normal-case font-normal">
            Four KEY marks: never create an order · never set a price · write only after confirm · one row for every surface
          </p>
        </div>
      </div>

      <style jsx>{`
        .sync-line-pulse {
          animation: syncPulse 2.2s ease-in-out infinite;
        }
        @keyframes syncPulse {
          0%,
          100% {
            background-color: rgba(38, 79, 120, 0.35);
          }
          50% {
            background-color: rgba(255, 70, 45, 0.15);
          }
        }
      `}</style>
    </div>
  );
}
