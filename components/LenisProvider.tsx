"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/** Approx. fixed header: index strip + main nav (matches sticky offsets elsewhere). */
const HEADER_SCROLL_OFFSET = -108;

type Props = { children: ReactNode };

export default function LenisProvider({ children }: Props) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("lenis", "lenis-smooth");

    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ultra-smooth exponential inertia decay
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      lerp: 0.08,
      anchors: {
        offset: HEADER_SCROLL_OFFSET,
        duration: 0.9,
        lerp: 0.1,
      },
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: one-time init from external system (Lenis)
    setLenis(instance);

    let frameId = 0;
    const raf = (time: number) => {
      instance.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      instance.destroy();
      root.classList.remove("lenis", "lenis-smooth");
      // defer to avoid synchronous setState inside cleanup
      setTimeout(() => setLenis(null), 0);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export { HEADER_SCROLL_OFFSET };
