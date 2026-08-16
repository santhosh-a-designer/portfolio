"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Wraps page content in a smooth fade-up entry animation.
 * Use this in server-component pages where you can't use PageWrapper (which includes LenisProvider).
 */
export default function PageEntryAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
