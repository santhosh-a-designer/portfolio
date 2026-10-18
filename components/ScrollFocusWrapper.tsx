"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollFocusWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  isFirst?: boolean;
  isLast?: boolean;
  disabled?: boolean;
  maxBlur?: number;
  minOpacity?: number;
}

export default function ScrollFocusWrapper({
  children,
  id,
  className = "",
  isFirst = false,
  isLast = false,
  disabled = false,
  maxBlur = 5.5,
  minOpacity = 0.55,
}: ScrollFocusWrapperProps) {
  // If disabled, render standard container without any useScroll hook
  if (disabled) {
    return (
      <div id={id} className={`w-full ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <ActiveScrollFocusItem
      id={id}
      className={className}
      isFirst={isFirst}
      isLast={isLast}
      maxBlur={maxBlur}
      minOpacity={minOpacity}
    >
      {children}
    </ActiveScrollFocusItem>
  );
}

function ActiveScrollFocusItem({
  children,
  id,
  className = "",
  isFirst = false,
  isLast = false,
  maxBlur = 5.5,
  minOpacity = 0.55,
}: Omit<ScrollFocusWrapperProps, "disabled">) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    target: containerRef,
    offset: isFirst
      ? ["start start", "end start"]
      : isLast
      ? ["start end", "end end"]
      : ["start end", "end start"],
  });

  // Calculate blur and opacity mappings: in-focus sweet spot is between 0.35 and 0.65
  const blurRangeInput = isFirst
    ? [0, 0.45, 0.82, 1]
    : isLast
    ? [0, 0.35, 1]
    : [0, 0.28, 0.72, 1];

  const blurRangeOutput = isFirst
    ? [0, 0, maxBlur, maxBlur]
    : isLast
    ? [maxBlur, 0, 0]
    : [maxBlur, 0, 0, maxBlur];

  const opacityRangeInput = isFirst
    ? [0, 0.45, 0.82, 1]
    : isLast
    ? [0, 0.35, 1]
    : [0, 0.28, 0.72, 1];

  const opacityRangeOutput = isFirst
    ? [1, 1, minOpacity, minOpacity]
    : isLast
    ? [minOpacity, 1, 1]
    : [minOpacity, 1, 1, minOpacity];

  const rawBlur = useTransform(scrollYProgress, blurRangeInput, blurRangeOutput);
  const opacity = useTransform(scrollYProgress, opacityRangeInput, opacityRangeOutput);

  // Performance optimization: set filter to "none" when on mobile or in focus (val <= 0.25px)
  const filter = useTransform(rawBlur, (val) => {
    if (isMobile || !mounted || val <= 0.25) return "none";
    return `blur(${val.toFixed(1)}px)`;
  });

  return (
    <motion.div
      ref={containerRef}
      id={id}
      style={{
        filter: isMobile ? "none" : (mounted ? filter : "none"),
        opacity: isMobile ? 1 : (mounted ? opacity : 1),
      }}
      className={`w-full ${isMobile ? "" : "transition-[filter,opacity] duration-300 ease-out will-change-[filter,opacity]"} ${className}`}
    >
      {children}
    </motion.div>
  );
}
