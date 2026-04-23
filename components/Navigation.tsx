"use client";

import { useState, useEffect, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis, HEADER_SCROLL_OFFSET } from "@/components/LenisProvider";
import { scrollToWorksSection } from "@/lib/scrollToWorksSection";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Contact", href: "#contact" },
];

const sectionLabels: Record<string, string> = {
  "": "00 — Hero",
  about: "01 — About",
  works: "02 — Works",
  skills: "03 — Skills",
  mentorship: "04 — Mentorship",
  contact: "06 — Contact",
};

export default function Navigation() {
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleInPageNav(
    e: MouseEvent<HTMLAnchorElement>,
    { closeMenu }: { closeMenu?: boolean } = {}
  ) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href == null) return;

    const afterNav = () => {
      if (closeMenu) setMenuOpen(false);
    };

    if (href === "#" || href === "#top") {
      if (lenis) {
        lenis.scrollTo(0, { onComplete: afterNav });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        afterNav();
      }
      history.pushState(null, "", window.location.pathname);
      return;
    }

    if (!href.startsWith("#")) {
      afterNav();
      return;
    }

    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) {
      afterNav();
      return;
    }

    if (id === "works") {
      scrollToWorksSection(lenis, { onStart: afterNav });
      history.pushState(null, "", href);
      return;
    }

    if (lenis) {
      lenis.scrollTo(el, {
        offset: HEADER_SCROLL_OFFSET,
        duration: 0.85,
        lerp: 0.12,
        onStart: afterNav,
      });
    } else {
      const y = el.getBoundingClientRect().top + window.scrollY + HEADER_SCROLL_OFFSET;
      window.scrollTo({ top: y, left: 0, behavior: "smooth" });
      afterNav();
    }
    history.pushState(null, "", href);
  }

  useEffect(() => {
    const ids = ["about", "works", "skills", "mentorship", "contact"];
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        let top = el.getBoundingClientRect().top + window.scrollY;
        // Match scroll target in scrollToWorksSection: #works layout top is one viewport above the visible band on md+.
        if (id === "works" && window.matchMedia("(min-width: 768px)").matches) {
          top += window.innerHeight;
        }
        if (window.scrollY >= top - 140) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const indexLabel = sectionLabels[active] ?? "00 — Hero";

  return (
      <motion.header
      suppressHydrationWarning
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-[200] transition-all duration-500 ${
        scrolled ? "glass border-b border-[#1e293b]" : "bg-transparent"
      }`}
    >
      {/* ── Top label bar (corner annotations) ── */}
      <div className="border-b border-[#1e293b]/60">
        <div className="max-w-6xl mx-auto px-6 py-1.5 flex items-center justify-between">
          <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#334155]">
            Index · {indexLabel}
          </span>
          <span className="text-[9px] font-mono uppercase tracking-[0.22em] hidden sm:block" style={{ color: "rgba(255,116,16,0.55)" }}>
            Selected Work · UX / Product
          </span>
        </div>
      </div>

      {/* ── Main nav row ── */}
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleInPageNav(e)}
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <div
            className="w-7 h-7 flex items-center justify-center text-[9px] font-bold font-mono group-hover:shadow-[0_0_14px_#FF7410] transition-all duration-300"
            style={{ border: "1px solid rgba(255,116,16,0.55)", color: "#FF7410", background: "rgba(255,116,16,0.06)" }}
          >
            SS
          </div>
          <span className="text-sm font-semibold text-white/75 group-hover:text-white transition-colors hidden sm:block">
            Simon Santhosh
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleInPageNav(e)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-[#FF7410]" : "text-[#5A7A9A] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-none"
                    style={{ background: "rgba(255,116,16,0.08)", border: "1px solid rgba(255,116,16,0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-1.5 text-[11px] text-[#475569] font-mono">
            <div className="status-dot" style={{ width: 6, height: 6 }} />
            <span>Available</span>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleInPageNav(e)}
            className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0a0908] bg-[#FF7410] hover:bg-[#FF8C30] transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden relative z-[210] -mr-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-[#5A7A9A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7410] transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden relative z-[205] max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain glass border-t border-[#1e293b] shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleInPageNav(e, { closeMenu: true })}
                  className="group flex items-center justify-between py-2.5 text-sm text-[#5A7A9A] hover:text-white transition-colors"
                >
                  {link.label}
                  <span className="text-[#334155] opacity-0 group-hover:opacity-100 arrow-slide transition-opacity">→</span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleInPageNav(e, { closeMenu: true })}
                className="mt-2 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#0a0908] bg-[#FF7410]"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
