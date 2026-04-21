"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, DownloadSimple, ArrowSquareOut } from "@phosphor-icons/react";

const DEFAULT_FILENAME = "Santhosh-A-Resume";

function openForPrint() {
  const win = window.open("/resume.html", "_blank", "noopener,noreferrer");
  if (win) {
    win.addEventListener("load", () => {
      win.document.title = DEFAULT_FILENAME;
      setTimeout(() => win.print(), 400);
    });
  }
}

const SCALE = 0.58; // A4 = 794×1123 → 460×651 inside modal

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  /* Lock body scroll while modal is open */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  /* Escape to close */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleKeyDown]);

  /* ── Calculated iframe wrapper dimensions ── */
  const iframeW = 794;
  const iframeH = 1123;
  const wrapW = Math.round(iframeW * SCALE); // 460
  const wrapH = Math.round(iframeH * SCALE); // 651

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ overflow: "hidden" }}
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/78 backdrop-blur-[3px]"
            aria-label="Close"
            onClick={onClose}
          />

          {/* ── Modal panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col border border-[#1e293b] bg-[#08090b] shadow-2xl shadow-black/60"
            style={{
              width: `${wrapW + 120}px`,
              maxWidth: "calc(100vw - 32px)",
              maxHeight: "calc(100dvh - 32px)",
              overflow: "hidden",
              scrollbarWidth: "none",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-[#1e293b] px-4 py-3 flex-shrink-0 bg-[#08090b]">
              <div className="flex items-center gap-3">
                <h2 id="resume-modal-title" className="font-title text-sm font-bold text-white tracking-tight">
                  Preview
                </h2>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#475569]">A4 · 1 page</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#94a3b8] border border-[#334155] hover:border-[#FF7410]/50 hover:text-white transition-colors"
                  title="Open in new tab"
                >
                  <ArrowSquareOut size={13} />
                  Open
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 text-[#64748b] hover:text-white hover:bg-[#1e293b] transition-colors rounded-sm"
                  aria-label="Close"
                >
                  <X size={20} weight="bold" />
                </button>
              </div>
            </div>

            {/* Resume preview — scaled A4 iframe */}
            <div className="flex-shrink-0 bg-[#c8c8c8] flex items-start justify-center p-3" style={{ overflow: "hidden" }}>
              <div
                style={{
                  width: `${wrapW}px`,
                  height: `${wrapH}px`,
                  overflow: "hidden",
                  flexShrink: 0,
                  boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
                }}
              >
                <iframe
                  src="/resume.html"
                  title="Resume preview"
                  scrolling="no"
                  style={{
                    width: `${iframeW}px`,
                    height: `${iframeH}px`,
                    transform: `scale(${SCALE})`,
                    transformOrigin: "top left",
                    border: "none",
                    pointerEvents: "none",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Footer — one clear action */}
            <div className="border-t border-[#1e293b] px-4 py-4 flex-shrink-0 bg-[#08090b]" style={{ overflow: "hidden" }}>
              <button
                type="button"
                onClick={openForPrint}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0a0908] bg-[#FF7410] hover:bg-[#FF8C30] transition-colors"
              >
                <DownloadSimple size={17} weight="bold" />
                Download Resume
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
