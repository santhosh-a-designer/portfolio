"use client";

import { useEffect, useRef, useState } from "react";

type TerminalLine = {
  text: string;
  tone?: "comment" | "keyword" | "string" | "muted" | "accent" | "default";
};

const TONE_CLASS: Record<NonNullable<TerminalLine["tone"]>, string> = {
  comment: "text-[#6A9955]",
  keyword: "text-[#569CD6]",
  string: "text-[#CE9178]",
  muted: "text-[#858585]",
  accent: "text-[#4EC9B0]",
  default: "text-[#D4D4D4]",
};

type Props = {
  lines: TerminalLine[];
  filename?: string;
};

export default function ArchitectureTerminal({
  lines,
  filename = "architecture.txt",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setVisibleCount(lines.length);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setStarted(true);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [lines.length, reducedMotion]);

  useEffect(() => {
    if (!started || reducedMotion || visibleCount >= lines.length) return;
    const id = window.setTimeout(() => setVisibleCount((c) => c + 1), 55);
    return () => clearTimeout(id);
  }, [started, visibleCount, lines.length, reducedMotion]);

  return (
    <div
      ref={ref}
      className="rounded border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono text-[10px] sm:text-xs leading-relaxed"
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-[#323233] border-b border-[#3c3c3c]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
        <span className="ml-2 text-[#cccccc] text-[10px]">{filename}</span>
        <span className="ml-auto text-[#858585] text-[9px] uppercase tracking-wider hidden sm:inline">
          bash · readonly
        </span>
      </div>
      <div className="bg-[#1e1e1e] p-4 sm:p-5 min-h-[220px] overflow-x-auto">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words">
            <span className="text-[#858585] select-none mr-3">{String(i + 1).padStart(2, " ")}</span>
            <span className={TONE_CLASS[line.tone ?? "default"]}>{line.text}</span>
          </div>
        ))}
        {visibleCount < lines.length && (
          <span className="inline-block w-2 h-4 bg-[#AEAFAD] animate-pulse ml-8 align-middle" aria-hidden />
        )}
      </div>
    </div>
  );
}
