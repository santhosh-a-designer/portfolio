"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = ["about", "works", "skills", "mentorship", "contact"];
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
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
        <a href="#" className="flex items-center gap-2 group flex-shrink-0">
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
            className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0a0908] bg-[#FF7410] hover:bg-[#FF8C30] transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#5A7A9A] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
            className="md:hidden glass border-t border-[#1e293b] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-sm text-[#5A7A9A] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
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
