import type { Metadata } from "next";
import BackToWorksLink from "@/components/BackToWorksLink";
import { getSiteUrl } from "@/lib/siteUrl";

const path = "/graphic-design";

export const metadata: Metadata = {
  title: "Graphic Design — Coming soon",
  description: "Graphic design showcase page is currently getting built.",
  alternates: {
    canonical: `${getSiteUrl()}${path}`,
  },
  openGraph: {
    title: "Graphic Design — Coming soon | Simon Santhosh",
    description: "This page is currently getting built.",
    url: `${getSiteUrl()}${path}`,
  },
};

export default function GraphicDesignComingSoonPage() {
  return (
    <main className="min-h-screen blueprint-page text-[#e8edf2]">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl items-center justify-center px-6 py-20">
        <div className="w-full max-w-2xl border border-[#1e293b] bg-[#0c1014] p-8 text-center sm:p-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#64748b]">Graphic design</p>
          <h1 className="mt-3 font-title text-3xl font-black leading-tight text-[#f8fafc] sm:text-4xl">
            Page is getting built
          </h1>
          <p className="mt-4 text-[14px] leading-relaxed text-[#94a3b8]">
            We are currently preparing the poster, logo, and business-card case stories.
          </p>
        </div>
      </section>

      <BackToWorksLink
        aria-label="Back to home"
        href="/#snippets"
        className="group fixed bottom-5 right-5 z-[260] inline-flex h-12 items-center overflow-hidden rounded-none border border-[#FF7410] bg-[#FF7410] px-4 text-[#0a0908] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:border-[#FF8C30] hover:bg-[#FF8C30] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7410]/50"
      >
        <span className="whitespace-nowrap text-[11px] font-mono font-semibold uppercase tracking-[0.18em]">
          Back to snippets
        </span>
      </BackToWorksLink>
    </main>
  );
}
