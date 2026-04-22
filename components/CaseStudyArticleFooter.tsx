import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUp, StackSimple } from "@phosphor-icons/react/dist/ssr";
import type { CaseStudy } from "@/lib/caseStudies";

const cell = "flex min-h-[8.5rem] flex-col justify-center px-4 py-5 sm:min-h-[9rem] sm:px-6 sm:py-6";

export default function CaseStudyArticleFooter({
  prev,
  next,
}: {
  prev: CaseStudy | null;
  next: CaseStudy | null;
}) {
  return (
    <nav className="mt-16 border-t border-[#e0d4c8] pt-10" aria-label="Case study navigation">
      <div className="overflow-hidden rounded-none border border-[#d0c3b6] bg-gradient-to-b from-white to-[#f9f4ed] shadow-[0_1px_0_0_rgba(27,20,10,0.06),inset_0_1px_0_0_rgba(255,255,255,0.85)]">
        <div className="grid grid-cols-1 divide-y divide-[#e3d8d0] md:grid-cols-[1fr_auto_1fr] md:divide-x md:divide-y-0">
          {/* Previous */}
          <div className={`${cell} min-w-0`}>
            {prev ? (
              <Link
                href={`/case-studies/${prev.slug}`}
                className="group -m-1 flex h-full min-h-0 flex-col justify-center gap-2 rounded-none p-1 text-left transition-colors hover:bg-[#FF7410]/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c96010]/50"
              >
                <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-[#8a7460]">Previous</span>
                <span className="font-title text-[15px] font-bold leading-snug text-[#1a1510] group-hover:text-[#c96010] sm:text-base">
                  <span className="inline-flex items-start gap-2">
                    <ArrowLeft
                      className="mt-0.5 flex-shrink-0 text-[#c4b4a0] transition-colors group-hover:text-[#c96010]"
                      size={18}
                      weight="bold"
                      aria-hidden
                    />
                    <span className="min-w-0 line-clamp-3">{prev.project}</span>
                  </span>
                </span>
              </Link>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-none border border-[#e0d4c8] bg-[#faf6f0] text-[#c4b4a0]"
                  aria-hidden
                >
                  <StackSimple size={18} weight="duotone" />
                </div>
                <p className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-[#a89880]">Start of the series</p>
                <p className="max-w-[16ch] text-[12px] leading-relaxed text-[#8a7d6f]">This is the first case study in the list.</p>
              </div>
            )}
          </div>

          {/* Center actions */}
          <div
            className={`flex min-h-0 flex-col items-stretch justify-center gap-2.5 border-[#e3d8d0] bg-[#f5f0e8]/80 px-4 py-5 sm:px-5 md:min-w-[11.5rem] md:border-x md:bg-[#f3ece3]/60`}
          >
            <Link
              href="/#works"
              className="inline-flex w-full items-center justify-center gap-2 rounded-none border border-[#d0c3b6] bg-white px-3 py-2.5 text-center text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-[#3d342c] shadow-sm transition hover:border-[#c96010] hover:text-[#c96010] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c96010]/40"
            >
              <ArrowLeft size={15} className="flex-shrink-0 opacity-80" aria-hidden />
              Back to works
            </Link>
            <a
              href="#case-study-top"
              className="inline-flex w-full items-center justify-center gap-2 rounded-none border border-[#d8c9bc] bg-transparent px-3 py-2.5 text-center text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-[#5c5148] transition hover:border-[#c96010]/60 hover:text-[#c96010] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c96010]/40"
            >
              <ArrowUp size={15} className="flex-shrink-0 opacity-80" aria-hidden />
              Top
            </a>
          </div>

          {/* Next */}
          <div className={`${cell} min-w-0`}>
            {next ? (
              <Link
                href={`/case-studies/${next.slug}`}
                className="group -m-1 flex h-full min-h-0 flex-col items-end justify-center gap-2 rounded-none p-1 text-right transition-colors hover:bg-[#FF7410]/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c96010]/50"
              >
                <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-[#8a7460]">Next</span>
                <span className="font-title text-[15px] font-bold leading-snug text-[#1a1510] group-hover:text-[#c96010] sm:text-base">
                  <span className="inline-flex items-start justify-end gap-2 text-right">
                    <span className="min-w-0 line-clamp-3">{next.project}</span>
                    <ArrowRight
                      className="mt-0.5 flex-shrink-0 text-[#c4b4a0] transition-colors group-hover:text-[#c96010]"
                      size={18}
                      weight="bold"
                      aria-hidden
                    />
                  </span>
                </span>
              </Link>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-center md:items-end md:text-right">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-none border border-[#e0d4c8] bg-[#faf6f0] text-[#c4b4a0] md:mr-0"
                  aria-hidden
                >
                  <StackSimple size={18} weight="duotone" className="rotate-180" />
                </div>
                <p className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-[#a89880]">End of the series</p>
                <p className="max-w-[16ch] text-[12px] leading-relaxed text-[#8a7d6f] md:ml-auto">You are viewing the latest case study.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
