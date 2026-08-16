"use client";

import { motion } from "framer-motion";
import LenisProvider from "@/components/LenisProvider";
import { useEffect } from "react";

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  // Ensure we always land at the top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <LenisProvider>
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="show"
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </LenisProvider>
  );
}
