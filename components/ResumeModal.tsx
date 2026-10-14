"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, DownloadSimple, ArrowSquareOut, FilePdf } from "@phosphor-icons/react";
import { useLenis } from "@/components/LenisProvider";

const DEFAULT_FILENAME = "Santhosh-A-Resume";
const RESUME_PDF_PATH = "/Santhosh-A-Resume.pdf";
const RESUME_PREVIEW_IMG = "/resume-preview.webp";

function downloadResumePdf() {
  const a = document.createElement("a");
  a.href = RESUME_PDF_PATH;
  a.download = `${DEFAULT_FILENAME}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const lenis = useLenis();
  const [imgError, setImgError] = useState(false);

  /* Freeze background Lenis and window scroll while modal is open */
  useEffect(() => {
    if (!open) return;

    if (lenis) {
      lenis.stop();
    }

    const scrollY = window.scrollY;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPosition = document.body.style.position;
    const prevBodyTop = document.body.style.top;
    const prevBodyWidth = document.body.style.width;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.position = prevBodyPosition;
      document.body.style.top = prevBodyTop;
      document.body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);

      if (lenis) {
        lenis.start();
      }
    };
  }, [open, lenis, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-[200] flex items-center justify-center p-2.5 sm:p-4 md:p-6 select-none"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container — 2px Brutalist Theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl max-h-[92vh] bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col z-10 overflow-hidden"
          >
            {/* Modal Header Bar — Electric Orange/Red with Brutalist Badge */}
            <div className="p-3 sm:p-4 bg-[#FF462D] text-white border-b-2 border-black flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 bg-black shrink-0" />
                <h2
                  id="resume-modal-title"
                  className="text-[11px] sm:text-xs font-black uppercase tracking-wider truncate"
                >
                  // CURRICULUM_VITAE / [A4 · 1_PAGE]
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="/Santhosh-A-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden min-[400px]:flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-black bg-white hover:bg-[#FAED00] border-2 border-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  title="Open PDF directly in new tab"
                >
                  <ArrowSquareOut size={13} weight="bold" />
                  <span>OPEN_TAB</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-8 h-8 bg-black text-white hover:bg-white hover:text-black transition-colors border-2 border-black flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  aria-label="Close modal"
                >
                  <X weight="bold" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sub-header Information Strip */}
            <div className="px-3 sm:px-4 py-2 bg-[#FAED00] border-b-2 border-black flex items-center justify-between text-black font-mono text-[10px] sm:text-[11px] font-bold uppercase shrink-0">
              <div className="flex items-center gap-2">
                <FilePdf size={14} weight="fill" className="text-black shrink-0" />
                <span className="tracking-wide">SANTHOSH_A_RESUME.PDF</span>
              </div>
              <span className="text-[9.5px] bg-black text-[#FAED00] px-1.5 py-0.5 border border-black font-pixel">
                VERIFIED_A4
              </span>
            </div>

            {/* Resume Preview Body — Crisp Render with Scroll Support */}
            <div
              data-lenis-prevent="true"
              className="flex-1 min-h-0 bg-[#E8E8E4] p-3 sm:p-5 overflow-y-auto overflow-x-hidden flex flex-col items-center justify-start scrollbar-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            >
              {/* White A4 Paper Card with 2px Brutalist Border */}
              <div className="relative w-full max-w-[480px] bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden shrink-0 aspect-[1/1.414]">
                {!imgError ? (
                  <Image
                    src={RESUME_PREVIEW_IMG}
                    alt="Santhosh A — UX/UI Designer & Developer Resume Preview"
                    fill
                    priority
                    sizes="(max-width: 640px) 92vw, 480px"
                    className="object-contain object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Fallback to responsive PDF embed / object if webp fails */
                  <object
                    data={`${RESUME_PDF_PATH}#toolbar=0&navpanes=0&scrollbar=0`}
                    type="application/pdf"
                    className="w-full h-full border-none"
                  >
                    <div className="p-6 text-center font-mono text-xs text-zinc-700">
                      <p className="font-bold mb-2">Resume Document Ready</p>
                      <p className="text-[11px] text-zinc-500 mb-4">Click below to download the high-resolution PDF</p>
                    </div>
                  </object>
                )}
              </div>
            </div>

            {/* Modal Footer Bar — Theme Yellow Download Button */}
            <div className="p-3 sm:p-4 bg-white border-t-2 border-black flex items-center justify-between gap-3 shrink-0">
              <a
                href="/Santhosh-A-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="min-[400px]:hidden text-[10px] font-mono font-bold text-zinc-600 underline"
              >
                Open PDF
              </a>
              <button
                type="button"
                onClick={downloadResumePdf}
                className="w-full py-3 sm:py-3.5 px-5 bg-[#FAED00] hover:bg-[#ffe600] active:bg-[#e6d000] text-black font-mono font-black text-xs sm:text-sm tracking-wider uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer scanline-btn scanline-btn-light"
              >
                <DownloadSimple size={18} weight="bold" className="shrink-0 stroke-[3px]" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
