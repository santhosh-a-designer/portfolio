"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, ComponentProps } from "react";

/**
 * Keep `amount` low: `whileInView` compares visible area to the **element’s full height**.
 * A tall block (e.g. full product deep dive) can never hit 20% visible at once, so animation
 * never runs and `initial={{ opacity: 0 }}` sticks — content looks missing after CTA.
 */
const VIEWPORT = { once: true, amount: 0.03 } as const;

const motionTag = {
  div: motion.div,
  section: motion.section,
  header: motion.header,
  article: motion.article,
} as const;

type Tag = keyof typeof motionTag;

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger on multi-block lists (e.g. second card). */
  delay?: number;
  as?: Tag;
} & Omit<ComponentProps<"div">, "children" | "className">;

function staticShell(tag: Tag, className: string | undefined, children: ReactNode) {
  switch (tag) {
    case "header":
      return <header className={className}>{children}</header>;
    case "section":
      return <section className={className}>{children}</section>;
    case "article":
      return <article className={className}>{children}</article>;
    default:
      return <div className={className}>{children}</div>;
  }
}

export function CaseStudyScrollReveal({ children, className, delay = 0, as: tag = "div", ...rest }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return staticShell(tag, className, children);
  }

  const Motion = motionTag[tag];
  return (
    <Motion
      className={className}
      initial={{ opacity: 0, y: 64, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ delay, type: "spring", stiffness: 52, damping: 18, mass: 1.1 }}
      {...(rest as object)}
    >
      {children}
    </Motion>
  );
}
