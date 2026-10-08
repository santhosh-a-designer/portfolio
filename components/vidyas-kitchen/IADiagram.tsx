"use client";

import { useEffect, useRef, useState } from "react";
import type { IASurfaceColumn } from "@/lib/vidyasKitchenCaseStudyContent";

const TAG_STYLE: Record<IASurfaceColumn["tag"], string> = {
  PWA: "bg-[#0FE0E3] text-black",
  WhatsApp: "bg-[#25D366] text-white",
  Dashboard: "bg-[#FAED00] text-black",
  Driver: "bg-white text-black",
};

function VerticalConnector({ active, delay }: { active: boolean; delay: number }) {
  return (
    <div className="flex justify-center py-1" aria-hidden>
      <div
        className="w-0.5 h-5 bg-black origin-top"
        style={{
          transform: active ? "scaleY(1)" : "scaleY(0)",
          transition: active ? `transform 0.35s ease ${delay}ms` : "none",
        }}
      />
    </div>
  );
}

function HorizontalBus({ active }: { active: boolean }) {
  return (
    <div className="relative h-8 mx-auto max-w-3xl" aria-hidden>
      <div
        className="absolute left-1/2 top-0 w-0.5 h-4 bg-black origin-top -translate-x-1/2"
        style={{
          transform: active ? "translateX(-50%) scaleY(1)" : "translateX(-50%) scaleY(0)",
          transition: active ? "transform 0.4s ease 80ms" : "none",
        }}
      />
      <div
        className="absolute top-4 left-[12.5%] right-[12.5%] h-0.5 bg-black origin-left"
        style={{
          transform: active ? "scaleX(1)" : "scaleX(0)",
          transition: active ? "transform 0.5s ease 200ms" : "none",
        }}
      />
    </div>
  );
}

type Props = {
  root: string;
  subtitle: string;
  columns: IASurfaceColumn[];
};

export default function IADiagram({ root, subtitle, columns }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
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
      setActive(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  let stepDelay = 400;

  return (
    <div
      ref={ref}
      className="border-2 border-black bg-[#F4F4F0] p-5 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="text-center mb-2">
        <div
          className="inline-block px-5 py-2.5 bg-[#FAED00] border-2 border-black font-mono text-xs sm:text-sm font-black uppercase tracking-wide shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(6px)",
            transition: active ? "opacity 0.35s ease, transform 0.35s ease" : "none",
          }}
        >
          {root}
        </div>
        <p className="font-mono text-[10px] text-zinc-600 mt-3 uppercase tracking-wider">{subtitle}</p>
      </div>

      <HorizontalBus active={active} />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-4">
        {columns.map((col, colIndex) => (
          <div key={col.id} className="flex flex-col items-stretch">
            <VerticalConnector active={active} delay={280 + colIndex * 60} />

            <div
              className="border-2 border-black bg-[#FF462D] text-white px-3 py-2 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(8px)",
                transition: active ? `opacity 0.35s ease ${320 + colIndex * 70}ms, transform 0.35s ease ${320 + colIndex * 70}ms` : "none",
              }}
            >
              <span
                className={`inline-block px-1.5 py-0.5 mr-1.5 text-[9px] font-mono font-black uppercase border border-black ${TAG_STYLE[col.tag]}`}
              >
                {col.tag}
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-black uppercase">{col.label}</span>
            </div>

            {col.steps.map((step, stepIndex) => {
              stepDelay += 70;
              const delay = stepDelay;
              return (
                <div key={stepIndex}>
                  <VerticalConnector active={active} delay={delay - 40} />
                  <div
                    className="px-3 py-2.5 bg-white border-2 border-black text-xs sm:text-sm text-zinc-800 leading-snug shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    style={{
                      opacity: active ? 1 : 0,
                      transform: active ? "translateY(0)" : "translateY(6px)",
                      transition: active
                        ? `opacity 0.3s ease ${delay}ms, transform 0.3s ease ${delay}ms`
                        : "none",
                    }}
                  >
                    <span className="font-mono text-[9px] font-black text-[#FF462D] mr-1.5">
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
