"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
};

/** Slide up + fade when entering, and dynamically blur when scrolled out of viewport focus */
export default function ScrollReveal({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Dynamic depth of field on desktop: sharp in center (0.28 to 0.72), soft blur (5.5px) and opacity (0.55) at edges
  const rawBlur = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [5.5, 0, 0, 5.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0.55, 1, 1, 0.55]);

  const filter = useTransform(rawBlur, (val) => {
    if (isMobile || !mounted || reduce || val <= 0.25) return "none";
    return `blur(${val.toFixed(1)}px)`;
  });

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`w-full ${isMobile ? "" : "transition-[filter,opacity] duration-300 ease-out will-change-[filter,opacity]"} ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      style={{
        filter: isMobile ? "none" : (mounted ? filter : "none"),
        opacity: isMobile ? 1 : (mounted ? opacity : 1),
      }}
    >
      {children}
    </motion.div>
  );
}
