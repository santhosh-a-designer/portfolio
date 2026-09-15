"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, DownloadSimple, ArrowSquareOut } from "@phosphor-icons/react";

const DEFAULT_FILENAME = "Santhosh-A-Resume";
const RESUME_PDF_PATH = "/Santhosh-A-Resume.pdf";

function downloadResumePdf() {
  const a = document.createElement("a");
  a.href = RESUME_PDF_PATH;
  a.download = `${DEFAULT_FILENAME}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

const DEFAULT_SCALE = 0.51; // A4 = 794×1123 → 405×573

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(DEFAULT_SCALE);

  useEffect(() => {
    if (!open) return;
    function updateScale() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Calculate max width for the iframe preview
      const maxAvailableW = Math.max(260, Math.min(vw - 64, 460));
      const maxAvailableH = Math.max(300, vh - 180);
      const scaleByW = maxAvailableW / 794;
      const scaleByH = maxAvailableH / 1123;
      const newScale = Math.min(scaleByW, scaleByH, DEFAULT_SCALE);
      setScale(Math.max(0.3, newScale));
    }
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [open]);
  /* Lock body scroll while modal is open */
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prev = document.body.style.overflow;
    const prevBodyPosition = document.body.style.position;
    const prevBodyTop = document.body.style.top;
    const prevBodyWidth = document.body.style.width;
    const prevBodyLeft = document.body.style.left;
    const prevBodyRight = document.body.style.right;
    const prevHtmlOverscroll = document.documentElement.style.overscrollBehavior;
    const prevBodyOverscroll = document.body.style.overscrollBehavior;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overscrollBehavior = "none";

    const blockScroll = (e: Event) => {
      e.preventDefault();
    };

    const blockScrollKeys = (e: KeyboardEvent) => {
      if ([" ", "PageUp", "PageDown", "Home", "End", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", blockScroll, { passive: false, capture: true });
    window.addEventListener("touchmove", blockScroll, { passive: false, capture: true });
    window.addEventListener("keydown", blockScrollKeys, { passive: false, capture: true });

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prev;
      document.body.style.position = prevBodyPosition;
      document.body.style.top = prevBodyTop;
      document.body.style.width = prevBodyWidth;
      document.body.style.left = prevBodyLeft;
      document.body.style.right = prevBodyRight;
      document.documentElement.style.overscrollBehavior = prevHtmlOverscroll;
      document.body.style.overscrollBehavior = prevBodyOverscroll;
      window.removeEventListener("wheel", blockScroll, true);
      window.removeEventListener("touchmove", blockScroll, true);
      window.removeEventListener("keydown", blockScrollKeys, true);
      window.scrollTo(0, scrollY);
    };
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
  const wrapW = Math.round(iframeW * scale);
  const wrapH = Math.round(iframeH * scale);

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
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4"
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
            className="relative z-10 flex flex-col border border-[#1e293b] bg-[#08090b] shadow-2xl shadow-black/60 max-w-full"
            style={{
              width: `${Math.min(wrapW + 32, 540)}px`,
              maxHeight: "calc(100dvh - 24px)",
              overflow: "hidden",
              scrollbarWidth: "none",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-[#1e293b] px-3 sm:px-4 py-2.5 sm:py-3 flex-shrink-0 bg-[#08090b]">
              <div className="flex items-center gap-2 sm:gap-3">
                <h2 id="resume-modal-title" className="font-title text-xs sm:text-sm font-bold text-white tracking-tight">
                  Preview
                </h2>
                <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-[#475569]">A4 · 1 page</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-[#94a3b8] border border-[#334155] hover:border-[#FF7410]/50 hover:text-white transition-colors"
                  title="Open in new tab"
                >
                  <ArrowSquareOut size={13} />
                  Open
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 sm:p-1.5 text-[#64748b] hover:text-white hover:bg-[#1e293b] transition-colors rounded-none"
                  aria-label="Close"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>
            </div>

            {/* Resume preview — scaled A4 iframe */}
            <div className="flex-1 bg-[#c8c8c8] flex items-center justify-center p-2 sm:p-3 overflow-hidden">
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
                    transform: `scale(${scale})`,
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
                onClick={downloadResumePdf}
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
