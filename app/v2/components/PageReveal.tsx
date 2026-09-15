"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="page-reveal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)", scale: 1.03 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
          style={{ background: "#ffffff" }}
        >
          {/* Radial smoke dissolve from center */}
          <motion.div
            initial={{ scale: 0, opacity: 0.95 }}
            animate={{ scale: 60, opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
