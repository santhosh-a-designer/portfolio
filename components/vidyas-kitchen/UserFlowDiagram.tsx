"use client";

import { useEffect, useRef, useState } from "react";
import type { FlowDiagramData, FlowStepNode } from "@/lib/vidyasKitchenCaseStudyContent";

function HFlowConnector({ active, delay }: { active: boolean; delay: number }) {
  return (
    <div className="flex shrink-0 items-center self-center px-0.5 sm:px-1" aria-hidden>
      <div
        className="h-0.5 w-4 sm:w-5 origin-left bg-black"
        style={{
          transform: active ? "scaleX(1)" : "scaleX(0)",
          transition: active ? `transform 0.3s ease ${delay}ms` : "none",
        }}
      />
      <div
        className="h-0 w-0 border-y-[3px] border-y-transparent border-l-[5px] border-l-black"
        style={{
          opacity: active ? 1 : 0,
          transition: active ? `opacity 0.2s ease ${delay + 150}ms` : "none",
        }}
      />
    </div>
  );
}

function StepNode({
  step,
  index,
  visible,
  delay,
}: {
  step: FlowStepNode;
  index: number;
  visible: boolean;
  delay: number;
}) {
  const baseAnim = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(-6px)",
    transition: visible ? `opacity 0.3s ease ${delay}ms, transform 0.3s ease ${delay}ms` : "none",
  };

  if (step.type === "start") {
    return (
      <div className="flex shrink-0 flex-col items-center self-center" style={baseAnim}>
        <div className="rounded-full border-2 border-black bg-black px-3 py-1.5 font-mono text-[8px] font-black uppercase tracking-wide text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:text-[9px]">
          Start
        </div>
        <p className="mt-1.5 max-w-[100px] text-center text-[8px] font-bold leading-tight text-black sm:max-w-[112px] sm:text-[9px]">
          {step.label}
        </p>
      </div>
    );
  }

  if (step.type === "decision") {
    return (
      <div className="flex shrink-0 flex-col items-center self-center" style={baseAnim}>
        <span className="mb-1 font-mono text-[7px] font-black uppercase tracking-wide text-zinc-500 sm:text-[8px]">
          Decision {String(index).padStart(2, "0")}
        </span>
        <div className="relative h-[72px] w-[72px] sm:h-[80px] sm:w-[80px]">
          <div
            className="absolute inset-[5px] border-2 border-black bg-[#FAED00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            style={{ transform: "rotate(45deg)" }}
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center justify-center px-1.5">
            <span className="text-center text-[7px] font-bold leading-[1.15] text-black sm:text-[8px]">
              {step.label}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (step.type === "end") {
    return (
      <div className="flex shrink-0 flex-col items-center self-center" style={baseAnim}>
        <div className="w-[100px] border-2 border-black bg-[#FF462D] px-2 py-2 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:w-[112px]">
          <span className="mb-0.5 block font-mono text-[7px] font-black uppercase text-white/70 sm:text-[8px]">
            Outcome
          </span>
          <span className="text-[8px] font-bold leading-tight text-white sm:text-[9px]">{step.label}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex shrink-0 flex-col items-center self-center" style={baseAnim}>
      <div className="w-[100px] border-2 border-black bg-white px-2 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:w-[112px]">
        <span className="mb-0.5 block font-mono text-[7px] font-black uppercase text-[#FF462D] sm:text-[8px]">
          Step {String(index).padStart(2, "0")}
        </span>
        <span className="text-[8px] leading-snug text-zinc-800 sm:text-[9px]">{step.label}</span>
      </div>
    </div>
  );
}

type Props = {
  flows: FlowDiagramData[];
};

export default function UserFlowDiagram({ flows }: Props) {
  const [activeId, setActiveId] = useState(flows[0]?.id ?? "");
  const flow = flows.find((f) => f.id === activeId) ?? flows[0];
  const containerRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setEntered(true);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setEntered(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!entered) return;
    if (reducedMotion) {
      setAnimating(true);
      return;
    }
    const t = window.setTimeout(() => setAnimating(true), 180);
    return () => window.clearTimeout(t);
  }, [entered, reducedMotion]);

  useEffect(() => {
    if (animating) setReplayKey((k) => k + 1);
  }, [activeId, animating]);

  const show = animating;
  const panelStyle = entered
    ? {
        opacity: 1,
        transform: "translateY(0)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }
    : {
        opacity: 0,
        transform: "translateY(10px)",
        transition: "none",
      };

  return (
    <div
      ref={containerRef}
      className="border-2 border-black bg-[#F4F4F0] p-4 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
      style={panelStyle}
    >
      <div
        className="mb-4 flex flex-wrap justify-center gap-2"
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(6px)",
          transition: entered ? "opacity 0.35s ease 80ms, transform 0.35s ease 80ms" : "none",
        }}
      >
        {flows.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActiveId(f.id)}
            className={`border-2 border-black px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${
              f.id === activeId ? "bg-[#FF462D] text-white" : "bg-white hover:bg-[#FAED00]"
            }`}
          >
            {f.title}
          </button>
        ))}
      </div>

      <div
        key={replayKey}
        className="overflow-x-auto border-2 border-black bg-[#FAF9F5] p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:p-4"
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? "translateY(0)" : "translateY(8px)",
          transition: entered ? "opacity 0.35s ease 160ms, transform 0.35s ease 160ms" : "none",
        }}
      >
        <div className="mx-auto flex w-max min-w-full items-center justify-center gap-0 py-1">
          {flow?.steps.map((step, i) => {
            const stepDelay = 80 + i * 70;
            const connDelay = stepDelay + 40;
            return (
              <div key={step.id} className="flex shrink-0 items-center">
                <StepNode step={step} index={i + 1} visible={show} delay={stepDelay} />
                {i < flow.steps.length - 1 && <HFlowConnector active={show} delay={connDelay} />}
              </div>
            );
          })}
        </div>
      </div>

      <p
        className="mt-2 text-center font-mono text-[9px] uppercase tracking-wider text-zinc-500"
        style={{
          opacity: entered ? 1 : 0,
          transition: entered ? "opacity 0.3s ease 280ms" : "none",
        }}
      >
        Horizontal flow · scroll if needed · switch tab to replay
      </p>
    </div>
  );
}
