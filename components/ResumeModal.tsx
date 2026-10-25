"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import {
  X,
  DownloadSimple,
  ArrowSquareOut,
  FilePdf,
  MagnifyingGlassPlus,
  MagnifyingGlassMinus,
  ArrowsClockwise,
} from "@phosphor-icons/react";
import { useLenis } from "@/components/LenisProvider";

const DEFAULT_FILENAME = "Santhosh-A-Resume";
const RESUME_PDF_PATH = "/Santhosh-A-Resume.pdf";
const RESUME_PREVIEW_P1 = "/resume-preview-p1.webp";
const RESUME_PREVIEW_P2 = "/resume-preview-p2.webp";

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
  const [mounted, setMounted] = useState(false);
  const lenis = useLenis();
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Reset zoom when reopened */
  useEffect(() => {
    if (open) {
      setZoomLevel(100);
    }
  }, [open]);

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

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 25, 175));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 25, 75));
  const zoomReset = () => setZoomLevel(100);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-0 sm:p-4 md:p-6 select-none"
        >
          {/* Backdrop (Solid high-contrast dark overlay, zero blur for crisp mobile rendering) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 cursor-pointer"
          />

          {/* Modal Container — Full-screen app view on mobile, Brutalist 4xl dialog on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-[100dvh] sm:h-[92vh] sm:max-w-4xl max-h-[94vh] bg-white border-0 sm:border-2 border-black sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col z-10 overflow-hidden"
          >
            {/* Modal Header Bar — Electric Orange/Red with Brutalist Badge */}
            <div className="p-3 sm:p-4 bg-[#FF462D] text-white border-b-2 border-black flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 bg-black shrink-0" />
                <h2
                  id="resume-modal-title"
                  className="text-[11px] sm:text-xs font-black uppercase tracking-wider truncate"
                >
                  // CURRICULUM_VITAE / [A4 · 2_PAGES]
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="/Santhosh-A-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-black bg-white hover:bg-[#FAED00] border-2 border-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  title="Open PDF directly in new tab"
                >
                  <ArrowSquareOut size={13} weight="bold" />
                  <span className="hidden min-[380px]:inline">OPEN_TAB</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-9 h-9 sm:w-8 sm:h-8 bg-black text-white hover:bg-white hover:text-black transition-colors border-2 border-black flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95"
                  aria-label="Close modal"
                >
                  <X weight="bold" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sub-header Information Strip & Zoom Toolbar */}
            <div className="px-3 sm:px-4 py-2 bg-[#FAED00] border-b-2 border-black flex items-center justify-between text-black font-mono text-[10px] sm:text-[11px] font-bold uppercase shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <FilePdf size={15} weight="fill" className="text-black shrink-0" />
                <span className="tracking-wide truncate">SANTHOSH_A_RESUME.PDF</span>
                <span className="hidden sm:inline text-[9.5px] bg-black text-[#FAED00] px-1.5 py-0.5 border border-black font-pixel ml-1 shrink-0">
                  VERIFIED_A4
                </span>
              </div>

              {/* Interactive Zoom Controls */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] font-mono font-bold text-zinc-800 mr-1 hidden min-[480px]:inline">
                  ZOOM:
                </span>
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={zoomLevel <= 75}
                  className="w-6 h-6 bg-white hover:bg-black hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black border border-black flex items-center justify-center cursor-pointer transition-colors"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <MagnifyingGlassMinus size={13} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={zoomReset}
                  className="px-1.5 h-6 bg-white hover:bg-black hover:text-white border border-black text-[9px] font-mono font-bold flex items-center justify-center cursor-pointer transition-colors min-w-[38px]"
                  title="Reset Zoom"
                >
                  {zoomLevel}%
                </button>
                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={zoomLevel >= 175}
                  className="w-6 h-6 bg-white hover:bg-black hover:text-white disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-black border border-black flex items-center justify-center cursor-pointer transition-colors"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <MagnifyingGlassPlus size={13} weight="bold" />
                </button>
              </div>
            </div>

            {/* Resume Preview Body — Crisp Render with Touch Pan Support */}
            <div
              data-lenis-prevent="true"
              className="flex-1 min-h-0 bg-[#E8E8E4] p-2 sm:p-6 overflow-y-auto overflow-x-auto flex flex-col items-center justify-start scrollbar-none touch-pan-y"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
              }}
            >
              {!imgError ? (
                <>
                  {/* Page 1 */}
                  <div
                    style={{
                      width: `${Math.round(620 * (zoomLevel / 100))}px`,
                      maxWidth: "100%",
                      transition: "width 0.15s ease-out",
                    }}
                    className="flex flex-col items-center shrink-0 w-full"
                  >
                    <div className="w-full flex items-center justify-between font-mono text-[9.5px] uppercase font-bold text-zinc-600 mb-1 px-1">
                      <span>// PAGE 01 OF 02</span>
                      <span>SUMMARY &amp; RECENT EXPERIENCE</span>
                    </div>
                    <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-[2314/3275] relative w-full">
                      <Image
                        src={RESUME_PREVIEW_P1}
                        alt="Santhosh A — Product Designer & Design Engineer Resume Page 1"
                        fill
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 680px"
                        className="object-contain object-top"
                        onError={() => setImgError(true)}
                      />
                    </div>
                  </div>

                  {/* Page 2 */}
                  <div
                    style={{
                      width: `${Math.round(620 * (zoomLevel / 100))}px`,
                      maxWidth: "100%",
                      transition: "width 0.15s ease-out",
                    }}
                    className="flex flex-col items-center shrink-0 w-full mt-2"
                  >
                    <div className="w-full flex items-center justify-between font-mono text-[9.5px] uppercase font-bold text-zinc-600 mb-1 px-1">
                      <span>// PAGE 02 OF 02</span>
                      <span>PARLA, INTELLEMO &amp; EDUCATION</span>
                    </div>
                    <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-[2314/3275] relative w-full">
                      <Image
                        src={RESUME_PREVIEW_P2}
                        alt="Santhosh A — Product Designer & Design Engineer Resume Page 2"
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 680px"
                        className="object-contain object-top"
                        onError={() => setImgError(true)}
                      />
                    </div>
                  </div>
                </>
              ) : (
                /* Fallback to responsive PDF embed / object if webp fails */
                <div
                  style={{
                    width: `${Math.round(620 * (zoomLevel / 100))}px`,
                    maxWidth: "100%",
                    transition: "width 0.15s ease-out",
                  }}
                  className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden shrink-0 aspect-[2314/3275] relative w-full"
                >
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
                </div>
              )}
            </div>

            {/* Modal Footer Bar — Theme Yellow Download Button with safe area padding */}
            <div className="p-3 sm:p-4 pb-[max(12px,env(safe-area-inset-bottom))] bg-white border-t-2 border-black flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={downloadResumePdf}
                className="w-full py-3.5 px-5 bg-[#FAED00] hover:bg-[#ffe600] active:bg-[#e6d000] text-black font-mono font-black text-xs sm:text-sm tracking-wider uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer scanline-btn scanline-btn-light"
              >
                <DownloadSimple size={18} weight="bold" className="shrink-0 stroke-[3px]" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
