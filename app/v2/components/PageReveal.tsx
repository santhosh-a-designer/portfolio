"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageReveal() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setShow(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (!mounted || !show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="page-reveal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden bg-white"
        >
          {/* Radial smoke dissolve from center */}
          <motion.div
            initial={{ scale: 0, opacity: 0.95 }}
            animate={{ scale: 40, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
