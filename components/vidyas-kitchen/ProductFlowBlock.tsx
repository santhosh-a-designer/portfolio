"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import MobileScreen, { MOBILE_SCREEN_WIDTH } from "./MobileScreen";
import FlowScreenCarousel from "./FlowScreenCarousel";
import HighlightText from "./HighlightText";
import type { VidyasProductFlowPanel } from "@/lib/vidyasKitchenCaseStudyContent";

/** Idle time on first tab before nudging the second */
const SECOND_TAB_PROMPT_MS = 2 * 60 * 1000;

type Props = {
  eyebrow: string;
  headline: string;
  flows: VidyasProductFlowPanel[];
};

type Screen = VidyasProductFlowPanel["screens"][number];

function ScreenCard({
  screen,
  showConnector,
}: {
  screen: Screen;
  showConnector: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center">
      <div className="flex flex-col items-center" style={{ width: MOBILE_SCREEN_WIDTH }}>
        <span
          className={`mb-2 font-mono text-[9px] font-black uppercase tracking-wider ${
            screen.featured
              ? "border-2 border-black bg-[#FF462D] px-2 py-0.5 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              : "text-[#FF462D]"
          }`}
        >
          {screen.tag}
        </span>
        <MobileScreen src={screen.src} alt={screen.alt} />
        <p className="mt-3 text-center text-[11px] font-bold leading-snug text-zinc-700 sm:text-xs">
          {screen.caption}
        </p>
      </div>
      {showConnector && (
        <div className="mx-1 hidden shrink-0 items-center self-center pb-10 sm:flex" aria-hidden>
          <div className="h-0.5 w-3 bg-black" />
          <div className="h-0 w-0 border-y-[3px] border-y-transparent border-l-[5px] border-l-black" />
        </div>
      )}
    </div>
  );
}

const panelMotion = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const screenMotion = {
  initial: { opacity: 0, y: 18, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

function FlowScreens({ flow }: { flow: VidyasProductFlowPanel }) {
  const reduceMotion = useReducedMotion();
  const scrollable = flow.screens.length > 4;
  const isTriple = flow.screens.length === 3;
  const gridCols =
    flow.screens.length === 4
      ? "grid-cols-2 lg:grid-cols-4"
      : "grid-cols-2 lg:grid-cols-4";

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] as const };

  const stagger = reduceMotion ? 0 : 0.07;

  if (scrollable) {
    return (
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <FlowScreenCarousel screens={flow.screens} />
      </motion.div>
    );
  }

  const containerClass = isTriple
    ? "mx-auto flex w-fit max-w-full flex-wrap items-start justify-center gap-x-6 gap-y-8 sm:gap-x-8"
    : `mx-auto grid ${gridCols} max-w-5xl gap-x-4 gap-y-8`;

  return (
    <motion.div
      className={containerClass}
      initial="initial"
      animate="animate"
      variants={{
        animate: { transition: { staggerChildren: stagger, delayChildren: 0.04 } },
      }}
    >
      {flow.screens.map((screen) => (
        <motion.div
          key={screen.id}
          variants={reduceMotion ? undefined : screenMotion}
          transition={transition}
        >
          <ScreenCard screen={screen} showConnector={false} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function ProductFlowBlock({ eyebrow, headline, flows }: Props) {
  const [activeId, setActiveId] = useState(flows[0]?.id ?? "");
  const [promptSecondTab, setPromptSecondTab] = useState(false);
  const reduceMotion = useReducedMotion();
  const flow = flows.find((f) => f.id === activeId) ?? flows[0];
  const firstFlowId = flows[0]?.id;
  const secondFlow = flows[1];

  useEffect(() => {
    if (!secondFlow || reduceMotion) {
      setPromptSecondTab(false);
      return;
    }

    if (activeId !== firstFlowId) {
      setPromptSecondTab(false);
      return;
    }

    setPromptSecondTab(false);
    const timer = window.setTimeout(() => setPromptSecondTab(true), SECOND_TAB_PROMPT_MS);
    return () => window.clearTimeout(timer);
  }, [activeId, firstFlowId, secondFlow, reduceMotion]);

  if (!flow) return null;

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <div className="border-t-2 border-black bg-[#FAF9F5] p-6 sm:p-8 md:p-10">
      <p className="mb-2 text-center font-mono text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
        {eyebrow}
      </p>
      <h3 className="mb-6 text-center text-lg font-black uppercase tracking-tight sm:text-xl">
        {headline}
      </h3>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`copy-${activeId}`}
          initial={reduceMotion ? false : "initial"}
          animate="animate"
          exit={reduceMotion ? undefined : "exit"}
          variants={panelMotion}
          transition={transition}
        >
          <p className="mx-auto mb-5 max-w-2xl text-center text-sm leading-relaxed text-zinc-600">
            <HighlightText text={flow.body} />
          </p>

          <ul className="mb-6 flex flex-wrap justify-center gap-2">
            {flow.highlights.map((item) => (
              <li
                key={item.id}
                className="border-2 border-black bg-[#FAED00] px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wide text-black sm:text-[10px]"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {flows.map((f) => {
          const active = f.id === activeId;
          const isSecond = f.id === secondFlow?.id;
          const shouldPrompt = Boolean(
            isSecond && !active && promptSecondTab && activeId === firstFlowId,
          );

          return (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setActiveId(f.id);
                setPromptSecondTab(false);
              }}
              className={`border-2 border-black px-5 py-2.5 font-mono text-[10px] font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors sm:px-7 sm:text-xs ${
                active
                  ? "bg-[#FF462D] text-white"
                  : shouldPrompt
                    ? "animate-flow-tab-prompt bg-white text-black"
                    : "bg-white text-black hover:bg-[#FAED00]"
              }`}
            >
              {f.tabLabel}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`screens-${activeId}`}
          initial={reduceMotion ? false : "initial"}
          animate="animate"
          exit={reduceMotion ? undefined : "exit"}
          variants={panelMotion}
          transition={transition}
        >
          <FlowScreens flow={flow} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
