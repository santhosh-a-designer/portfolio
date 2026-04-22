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
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
      lerp: 0.085,
      anchors: {
        offset: HEADER_SCROLL_OFFSET,
        duration: 0.8,
        lerp: 0.12,
      },
    });

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
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export { HEADER_SCROLL_OFFSET };
