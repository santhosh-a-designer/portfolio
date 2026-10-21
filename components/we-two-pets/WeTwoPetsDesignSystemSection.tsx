"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlass,
  Heart,
  User,
  ShoppingBag,
  CaretDown,
  CaretUp,
  Check,
  Tag,
  Truck,
  Lightning,
  Star,
  PawPrint,
  Crown,
  BookOpen,
  Users,
  Plant,
  MapPin,
  Certificate,
  Buildings,
  ArrowRight,
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  PaperPlaneTilt,
  Copy,
  CheckCircle,
} from "@phosphor-icons/react";

export default function WeTwoPetsDesignSystemSection() {
  // Wishlist heart interactive toggle
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isPackWishlisted, setIsPackWishlisted] = useState(true);

  // Category tab active state
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Travel & Outdoor",
    "Designer Furniture",
    "Fashion & Accessories",
    "Toys & Enrichment",
  ];

  // Sort dropdown interactive state
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Price: Low to High");
  const sortOptions = ["Price: Low to High", "Price: High to Low", "Top Rated", "Newest"];

  // Value prop badge theme toggle
  const [badgeVariant, setBadgeVariant] = useState<"dark" | "light">("dark");

  // Copied hex state
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  const colors = [
    {
      name: "Deep Forest",
      role: "Primary Brand / Hero Header",
      hex: "#0D2E28",
      bgClass: "bg-[#0D2E28]",
      textClass: "text-white",
      desc: "High-contrast brand tone, hero canvas, primary buttons & active tags",
    },
    {
      name: "Night Pine",
      role: "Dark Surface / Contrast",
      hex: "#001C18",
      bgClass: "bg-[#001C18]",
      textClass: "text-white",
      desc: "Button hover states, rich contrast surfaces, deep borders",
    },
    {
      name: "Warm Ivory",
      role: "Base Background Canvas",
      hex: "#FAF7F2",
      bgClass: "bg-[#FAF7F2]",
      textClass: "text-[#0D2E28]",
      desc: "Quiet editorial breathing room, eliminates aggressive stark whites",
    },
    {
      name: "Linen Stone",
      role: "Card & Pill Surface",
      hex: "#EDEBE6",
      bgClass: "bg-[#EDEBE6]",
      textClass: "text-[#0D2E28]",
      desc: "Product card backgrounds, inactive category tabs, secondary containers",
    },
    {
      name: "Mint Sage",
      role: "Accent & Status Ping",
      hex: "#5FB89C",
      bgClass: "bg-[#5FB89C]",
      textClass: "text-[#0D2E28]",
      desc: "In-stock indicators, verified trust badges, subtle micro-highlights",
    },
    {
      name: "Ochre Gold",
      role: "Merchandising / Crown",
      hex: "#C9893A",
      bgClass: "bg-[#C9893A]",
      textClass: "text-white",
      desc: "Top Rated badges, Paws Plus crown icon, accent button frames",
    },
    {
      name: "Coral Red",
      role: "Active Favorited State",
      hex: "#FF4D4F",
      bgClass: "bg-[#FF4D4F]",
      textClass: "text-white",
      desc: "Wishlist filled state, urgency badges, critical stock alerts",
    },
    {
      name: "Charcoal Slate",
      role: "Primary Typography",
      hex: "#2C2C2C",
      bgClass: "bg-[#2C2C2C]",
      textClass: "text-white",
      desc: "Product titles, body copy, descriptions with high optical legibility",
    },
  ];

  return (
    <div className="space-y-12 bg-[#FAF8F5] p-4 sm:p-7 md:p-9 border-2 border-black text-[#1A2E2A]">
      {/* Design System Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-black/15 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-[#0D2E28] text-white px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider">
              DESIGN SYSTEM
            </span>
            <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider">
              WETWOPETS.COM FOUNDATIONS &amp; COMPONENTS
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-black text-[#0D2E28]">
            Visual Foundations &amp; Component System
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-zinc-600 font-medium max-w-2xl">
            A restrained luxury pet design system built on high-contrast forest tones, warm ivory breathing space, Cormorant Garamond editorial serif, and sharp 0px border radiuses.
          </p>
        </div>
        <div className="font-mono text-[11px] text-zinc-600 bg-white border border-black px-3 py-1.5 shrink-0 self-start sm:self-auto shadow-[2px_2px_0_0_#000]">
          Ordered By: <strong className="text-[#0D2E28]">Type → Color → Icons → UI</strong>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. TYPOGRAPHY
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-black/15 pb-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#FF462D]" />
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#0D2E28]">
              01. Typography Hierarchy &amp; Pairing
            </h4>
          </div>
          <span className="font-mono text-[10px] text-zinc-500">Cormorant Garamond + Inter + Mono</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Font Family 1: Editorial Serif */}
          <div className="border border-zinc-300 bg-white p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <span className="font-mono text-[10px] font-black uppercase text-[#0D2E28]">
                Display &amp; Headings
              </span>
              <span className="font-mono text-[10px] text-zinc-400">Serif</span>
            </div>
            <p className="font-serif text-3xl font-bold text-[#0D2E28] leading-none">
              Cormorant Garamond
            </p>
            <p className="font-serif text-xl italic text-zinc-600">
              Aa Bb Cc Dd Ee Ff Gg Hh 0123456789
            </p>
            <div className="pt-2 text-xs text-zinc-600 leading-relaxed font-sans space-y-1">
              <p><strong>Role:</strong> Storytelling, value promises, hero headlines, product names.</p>
              <p><strong>Intent:</strong> Replaces chaotic marketplace bolding with warm, calming editorial authority.</p>
            </div>
          </div>

          {/* Font Family 2: Clean Interface Sans */}
          <div className="border border-zinc-300 bg-white p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <span className="font-mono text-[10px] font-black uppercase text-[#1976D2]">
                Body, UI &amp; Inputs
              </span>
              <span className="font-mono text-[10px] text-zinc-400">Sans-Serif</span>
            </div>
            <p className="font-sans text-2xl font-bold text-zinc-900 leading-none">
              Inter UI Sans
            </p>
            <p className="font-sans text-lg text-zinc-600">
              Aa Bb Cc Dd Ee Ff Gg Hh 0123456789
            </p>
            <div className="pt-2 text-xs text-zinc-600 leading-relaxed font-sans space-y-1">
              <p><strong>Role:</strong> Product descriptions, specs, checkout steps, search inputs.</p>
              <p><strong>Intent:</strong> Utmost optical clarity for numeric pricing, sizing charts, and currency symbols.</p>
            </div>
          </div>

          {/* Font Family 3: Metadata Mono */}
          <div className="border border-zinc-300 bg-white p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <span className="font-mono text-[10px] font-black uppercase text-[#C9893A]">
                Badges, Status &amp; SKU
              </span>
              <span className="font-mono text-[10px] text-zinc-400">Monospace</span>
            </div>
            <p className="font-mono text-xl font-black uppercase text-zinc-900 leading-none">
              JetBrains Mono
            </p>
            <p className="font-mono text-base text-zinc-600">
              Aa Bb Cc Dd Ee 0123456789 [LIMITED]
            </p>
            <div className="pt-2 text-xs text-zinc-600 leading-relaxed font-sans space-y-1">
              <p><strong>Role:</strong> &quot;EXCLUSIVE IMPORT&quot;, &quot;25% OFF&quot;, GST numbers, status tags.</p>
              <p><strong>Intent:</strong> Technical precision distinguishing curated metadata from editorial reading text.</p>
            </div>
          </div>
        </div>

        {/* Typographic Scale in Action */}
        <div className="border border-zinc-300 bg-white p-5 shadow-sm space-y-4">
          <p className="font-mono text-[10px] font-bold uppercase text-zinc-500">
            Typographic Scale &amp; Tracking Specifications
          </p>
          <div className="space-y-3 divide-y divide-zinc-100">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2">
              <span className="font-mono text-[11px] text-zinc-400 w-32 shrink-0">H1 · Hero Title</span>
              <span className="font-serif text-2xl sm:text-3xl font-black text-[#0D2E28]">
                Intentional Pet Care, Delivered to India.
              </span>
              <span className="font-mono text-[10px] text-zinc-500">36px / Serif Bold</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2">
              <span className="font-mono text-[11px] text-zinc-400 w-32 shrink-0">H2 · Product Name</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-zinc-900">
                Space Capsule Pack · Travel &amp; Outdoor
              </span>
              <span className="font-mono text-[10px] text-zinc-500">24px / Serif SemiBold</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2">
              <span className="font-mono text-[11px] text-zinc-400 w-32 shrink-0">Body Text</span>
              <span className="font-sans text-xs sm:text-sm text-zinc-700 leading-relaxed max-w-xl">
                Practical advice and tested gear for the problems you notice before reaching for your wallet.
              </span>
              <span className="font-mono text-[10px] text-zinc-500">14px / Inter Regular</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2">
              <span className="font-mono text-[11px] text-zinc-400 w-32 shrink-0">Micro Badge / CTA</span>
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#0D2E28]">
                SHOP THE COLLECTION · [EXCLUSIVE IMPORT]
              </span>
              <span className="font-mono text-[10px] text-zinc-500">11px / Mono Tracking+0.1em</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. COLOGRAPHY (COLOR SYSTEM)
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-black/15 pb-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#0D2E28]" />
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#0D2E28]">
              02. Colography &amp; Color Palette Tokens
            </h4>
          </div>
          <span className="font-mono text-[10px] text-zinc-500">Click to copy HEX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {colors.map((c) => {
            const isCopied = copiedColor === c.hex;
            return (
              <button
                key={c.hex}
                type="button"
                onClick={() => copyHex(c.hex)}
                className="border-2 border-black bg-white p-3 text-left shadow-[3px_3px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#000] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`h-16 w-full border border-black mb-2 flex items-center justify-center font-mono text-xs font-bold ${c.bgClass} ${c.textClass}`}
                  >
                    {isCopied ? "COPIED! ✓" : c.hex}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs font-black uppercase text-zinc-900">{c.name}</p>
                    <span className="font-mono text-[9px] text-zinc-400 uppercase">{c.role}</span>
                  </div>
                  <p className="text-[11px] text-zinc-600 mt-1 font-sans leading-snug">{c.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. ICONOGRAPHY
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-black/15 pb-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#5FB89C]" />
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#0D2E28]">
              03. Iconography &amp; Micro-Action Symbols
            </h4>
          </div>
          <span className="font-mono text-[10px] text-zinc-500">Phosphor Icons · 1.5px Stroke</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Group 1: Navigation & Header */}
          <div className="border border-zinc-300 bg-white p-4 shadow-sm space-y-3">
            <p className="font-mono text-[10px] font-bold uppercase text-zinc-500">Navigation &amp; Header</p>
            <div className="flex items-center justify-around py-3 bg-[#FAF7F2] border border-zinc-200 text-[#0D2E28]">
              <div className="text-center" title="Search">
                <MagnifyingGlass size={22} />
                <span className="block font-mono text-[9px] mt-1 text-zinc-500">Search</span>
              </div>
              <div className="text-center" title="Wishlist">
                <Heart size={22} />
                <span className="block font-mono text-[9px] mt-1 text-zinc-500">Wishlist</span>
              </div>
              <div className="text-center" title="Profile">
                <User size={22} />
                <span className="block font-mono text-[9px] mt-1 text-zinc-500">Profile</span>
              </div>
              <div className="text-center" title="Cart Bag">
                <ShoppingBag size={22} />
                <span className="block font-mono text-[9px] mt-1 text-zinc-500">Cart</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-600">Direct, borderless linear icons with zero clutter.</p>
          </div>

          {/* Group 2: Value Prop Icons */}
          <div className="border border-zinc-300 bg-white p-4 shadow-sm space-y-3">
            <p className="font-mono text-[10px] font-bold uppercase text-zinc-500">3 Pillars &amp; Curation</p>
            <div className="flex items-center justify-around py-3 bg-[#FAF7F2] border border-zinc-200">
              <div className="h-9 w-9 bg-[#0D2E28] text-white flex items-center justify-center" title="Curated">
                <Plant size={18} />
              </div>
              <div className="h-9 w-9 bg-[#0D2E28] text-white flex items-center justify-center" title="Guided">
                <BookOpen size={18} />
              </div>
              <div className="h-9 w-9 bg-[#0D2E28] text-white flex items-center justify-center" title="Relationships">
                <Users size={18} />
              </div>
            </div>
            <p className="text-[11px] text-zinc-600">Leaf, Book, and Companion pillars in dark green badges.</p>
          </div>

          {/* Group 3: Membership Perks */}
          <div className="border border-zinc-300 bg-white p-4 shadow-sm space-y-3">
            <p className="font-mono text-[10px] font-bold uppercase text-zinc-500">Paws Plus Perks</p>
            <div className="flex items-center justify-around py-3 bg-[#FAF7F2] border border-zinc-200 text-[#0D2E28]">
              <div className="text-center" title="Discount">
                <Tag size={18} />
                <span className="block font-mono text-[8px] mt-1 text-zinc-500">Imports</span>
              </div>
              <div className="text-center" title="Express">
                <Truck size={18} />
                <span className="block font-mono text-[8px] mt-1 text-zinc-500">Shipping</span>
              </div>
              <div className="text-center" title="Early Access">
                <Lightning size={18} />
                <span className="block font-mono text-[8px] mt-1 text-zinc-500">Early</span>
              </div>
              <div className="text-center" title="AI Picks">
                <Star size={18} />
                <span className="block font-mono text-[8px] mt-1 text-zinc-500">AI</span>
              </div>
              <div className="text-center" title="Deals">
                <PawPrint size={18} />
                <span className="block font-mono text-[8px] mt-1 text-zinc-500">Deals</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-600">Standardized 18px icons within square neutral tiles.</p>
          </div>

          {/* Group 4: Trust & Corporate Icons */}
          <div className="border border-zinc-300 bg-white p-4 shadow-sm space-y-3">
            <p className="font-mono text-[10px] font-bold uppercase text-zinc-500">Trust &amp; Verification</p>
            <div className="flex items-center justify-around py-3 bg-[#FAF7F2] border border-zinc-200 text-[#5FB89C]">
              <div className="text-center" title="GST Registered">
                <Certificate size={20} />
                <span className="block font-mono text-[8px] mt-1 text-zinc-600">GST</span>
              </div>
              <div className="text-center" title="Location">
                <MapPin size={20} />
                <span className="block font-mono text-[8px] mt-1 text-zinc-600">Chennai</span>
              </div>
              <div className="text-center" title="Entity">
                <Buildings size={20} />
                <span className="block font-mono text-[8px] mt-1 text-zinc-600">Firm</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-600">Sage green icons signaling verified Indian trade legitimacy.</p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. COMPONENTS & BUTTONS
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-black/15 pb-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#C9893A]" />
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#0D2E28]">
              04. Authentic Components, Interactive States &amp; Buttons
            </h4>
          </div>
          <span className="font-mono text-[10px] text-zinc-500">Live Interactive Components</span>
        </div>

        {/* 4A. Search Bar & Filter Strip */}
        <div className="border border-zinc-300 bg-white p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs font-black uppercase tracking-wider text-[#0D2E28]">
              A. Search Bar, Category Filter Strip &amp; Sort Dropdown
            </p>
            <span className="font-mono text-[10px] text-zinc-500">Interactive</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[220px] max-w-sm">
              <input
                type="text"
                placeholder="Search products..."
                readOnly
                className="w-full border border-zinc-300 bg-white px-3.5 py-2 pl-9 text-xs text-zinc-800 placeholder-zinc-400 focus:outline-none cursor-default font-sans"
              />
              <MagnifyingGlass
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#0D2E28] text-white shadow-sm"
                        : "bg-[#EDEBE6] text-zinc-800 hover:bg-[#E5E1DA]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSortOpen(!sortOpen)}
                className={`flex items-center gap-2.5 border px-3.5 py-1.5 text-xs font-medium bg-white transition-all cursor-pointer ${
                  sortOpen ? "border-[#0D2E28] shadow-sm" : "border-zinc-300 hover:border-zinc-400"
                }`}
              >
                <span>{selectedSort}</span>
                {sortOpen ? (
                  <CaretUp size={13} weight="bold" className="text-[#0D2E28]" />
                ) : (
                  <CaretDown size={13} weight="bold" className="text-zinc-600" />
                )}
              </button>

              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 w-44 border border-zinc-200 bg-white py-1 shadow-lg z-20 font-sans">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSelectedSort(opt);
                        setSortOpen(false);
                      }}
                      className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs transition-colors hover:bg-zinc-50 ${
                        selectedSort === opt ? "font-bold text-[#0D2E28] bg-zinc-50" : "text-zinc-700"
                      }`}
                    >
                      <span>{opt}</span>
                      {selectedSort === opt && (
                        <Check size={13} weight="bold" className="text-[#0D2E28]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4B. Authentic Product Cards (Space Capsule Pack & Social Pack) */}
        <div className="space-y-3">
          <p className="font-mono text-xs font-black uppercase tracking-wider text-[#0D2E28]">
            B. E-Commerce Product Cards (With Isolated Authentic Photography)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Space Capsule Pack */}
            <div className="border border-zinc-300 bg-white p-4 shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative aspect-square w-full bg-[#EDEBE6] overflow-hidden">
                  <Image
                    src="/case-studies/we-two-pets/space-capsule.webp"
                    alt="Space Capsule Pack Carrier"
                    fill
                    className="object-cover object-center"
                  />
                  {/* Exclusive Import Badge */}
                  <span className="absolute top-3 left-3 bg-[#0D2E28] text-white px-2.5 py-1 font-mono text-[9px] font-bold tracking-widest uppercase">
                    EXCLUSIVE IMPORT
                  </span>
                  {/* Floating Wishlist Heart */}
                  <button
                    type="button"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-3 right-3 h-8 w-8 bg-white/90 shadow-sm flex items-center justify-center hover:bg-white transition-all cursor-pointer"
                    title="Toggle Wishlist"
                  >
                    <Heart
                      size={16}
                      weight={isWishlisted ? "fill" : "regular"}
                      className={isWishlisted ? "text-[#FF4D4F]" : "text-zinc-500"}
                    />
                  </button>
                </div>

                <div className="mt-4 space-y-1">
                  <h4 className="font-serif text-lg font-bold text-zinc-900 leading-tight">
                    Space Capsule Pack
                  </h4>
                  <p className="text-xs text-zinc-500">Travel &amp; Outdoor</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-black text-zinc-900">₹4,491</span>
                  <span className="text-xs text-zinc-400 line-through">₹5,988</span>
                </div>
                <span className="bg-[#0D2E28] text-white px-2 py-0.5 font-mono text-[10px] font-bold">
                  25% OFF
                </span>
              </div>
            </div>

            {/* Card 2: Social Pack */}
            <div className="border border-zinc-300 bg-white p-4 shadow-sm flex flex-col justify-between">
              <div>
                <div className="relative aspect-square w-full bg-[#EDEBE6] overflow-hidden">
                  <Image
                    src="/case-studies/we-two-pets/social-pack.webp"
                    alt="Social Pack Pet Carrier"
                    fill
                    className="object-cover object-center"
                  />
                  {/* Top Rated Badge */}
                  <span className="absolute top-3 left-3 bg-[#C9893A] text-white px-2.5 py-1 font-mono text-[9px] font-black tracking-widest uppercase flex items-center gap-1">
                    <span>★</span> TOP RATED
                  </span>
                  {/* Floating Wishlist Heart */}
                  <button
                    type="button"
                    onClick={() => setIsPackWishlisted(!isPackWishlisted)}
                    className="absolute top-3 right-3 h-8 w-8 bg-white/90 shadow-sm flex items-center justify-center hover:bg-white transition-all cursor-pointer"
                    title="Toggle Wishlist"
                  >
                    <Heart
                      size={16}
                      weight={isPackWishlisted ? "fill" : "regular"}
                      className={isPackWishlisted ? "text-[#FF4D4F]" : "text-zinc-500"}
                    />
                  </button>
                </div>

                <div className="mt-4 space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                    TRAVEL &amp; OUTDOOR
                  </p>
                  <h4 className="font-serif text-xl font-bold text-zinc-900 leading-tight">
                    Social Pack
                  </h4>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-zinc-900">₹2,994</span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0D2E28]">
                    <span className="h-2 w-2 rounded-xs bg-[#5FB89C]" />
                    <span>In stock</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full bg-[#0D2E28] hover:bg-[#001C18] text-white py-3 font-mono text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4C. Value Props & Curatorial Principles */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs font-black uppercase tracking-wider text-[#0D2E28]">
              C. Value Pillars &amp; Curatorial Principle 01 Card
            </p>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-zinc-500">Badge variant:</span>
              <button
                type="button"
                onClick={() => setBadgeVariant(badgeVariant === "dark" ? "light" : "dark")}
                className="font-mono text-[10px] font-bold px-2 py-0.5 border border-black bg-white hover:bg-zinc-100"
              >
                {badgeVariant === "dark" ? "Dark Green Badge" : "Soft Linen Badge"}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-zinc-200 bg-white p-6 text-center flex flex-col items-center justify-center space-y-3 shadow-sm">
              <div
                className={`h-11 w-11 flex items-center justify-center transition-colors ${
                  badgeVariant === "dark" ? "bg-[#0D2E28] text-white" : "bg-[#EDEBE6] text-[#0D2E28]"
                }`}
              >
                <Plant size={22} />
              </div>
              <h5 className="font-serif text-lg font-bold text-[#0D2E28]">Thoughtfully Curated</h5>
              <p className="text-xs text-zinc-600 leading-relaxed max-w-[220px]">
                Only products we would confidently recommend.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-6 text-center flex flex-col items-center justify-center space-y-3 shadow-sm">
              <div
                className={`h-11 w-11 flex items-center justify-center transition-colors ${
                  badgeVariant === "dark" ? "bg-[#0D2E28] text-white" : "bg-[#EDEBE6] text-[#0D2E28]"
                }`}
              >
                <BookOpen size={22} />
              </div>
              <h5 className="font-serif text-lg font-bold text-[#0D2E28]">Guided by Experience</h5>
              <p className="text-xs text-zinc-600 leading-relaxed max-w-[220px]">
                Practical advice and insights to help you make better choices.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-6 text-center flex flex-col items-center justify-center space-y-3 shadow-sm">
              <div
                className={`h-11 w-11 flex items-center justify-center transition-colors ${
                  badgeVariant === "dark" ? "bg-[#0D2E28] text-white" : "bg-[#EDEBE6] text-[#0D2E28]"
                }`}
              >
                <Users size={22} />
              </div>
              <h5 className="font-serif text-lg font-bold text-[#0D2E28]">Built Around Relationships</h5>
              <p className="text-xs text-zinc-600 leading-relaxed max-w-[220px]">
                Helping pets and families thrive together always.
              </p>
            </div>
          </div>

          {/* Curatorial Principle Card */}
          <div className="border border-zinc-300 bg-white p-4 sm:p-5 flex items-start gap-4 shadow-sm">
            <span className="font-serif text-3xl font-bold text-[#5FB89C] shrink-0 leading-none">
              01
            </span>
            <div className="space-y-1">
              <h5 className="font-medium text-sm sm:text-base text-zinc-900 leading-snug">
                Does this product solve a real problem for pets or their parents?
              </h5>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Every item must earn a place in a real routine.
              </p>
            </div>
          </div>
        </div>

        {/* 4D. Paws Plus Membership Pricing & Perks */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs font-black uppercase tracking-wider text-[#0D2E28]">
              D. Paws Plus Membership Ecosystem &amp; Perk Cards
            </p>
            <div className="inline-flex items-center gap-1.5 border border-[#0D2E28] bg-[#0D2E28] px-2.5 py-1 text-white">
              <Crown size={14} weight="fill" className="text-[#C9893A]" />
              <span className="font-mono text-[10px] font-black uppercase tracking-widest">
                PAWS PLUS
              </span>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Early Access */}
            <div className="relative border-2 border-[#0D2E28] bg-white p-6 flex flex-col justify-between shadow-sm">
              <div className="absolute -top-3 left-6 bg-[#0D2E28] text-white px-2.5 py-0.5 font-mono text-[9px] font-black tracking-widest uppercase">
                LIMITED
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#0D2E28]">Early Access</h4>
                  <p className="text-xs text-zinc-500 mt-1">Free for 3 months — first 100 members only</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-black text-zinc-900">Free</span>
                  <span className="text-xs text-zinc-500">/ 90 days</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-700 pt-2 border-t border-zinc-100">
                  <li className="flex items-center gap-2">
                    <Check size={14} weight="bold" className="text-[#0D2E28]" />
                    <span>10% off exclusive imports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} weight="bold" className="text-[#0D2E28]" />
                    <span>Free express shipping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} weight="bold" className="text-[#0D2E28]" />
                    <span>3-day early access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} weight="bold" className="text-[#0D2E28]" />
                    <span>AI-powered picks</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="mt-6 w-full bg-[#0D2E28] hover:bg-[#001C18] text-white py-3 font-mono text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                JOIN FREE
              </button>
            </div>

            {/* Monthly */}
            <div className="border border-zinc-300 bg-white p-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif text-xl font-bold text-[#0D2E28]">Monthly</h4>
                  <p className="text-xs text-zinc-500 mt-1">All perks, cancel anytime</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-black text-zinc-900">₹199</span>
                  <span className="text-xs text-zinc-500">/ month</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-700 pt-2 border-t border-zinc-100">
                  <li className="flex items-center gap-2">
                    <Check size={14} weight="bold" className="text-[#0D2E28]" />
                    <span>10% off exclusive imports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} weight="bold" className="text-[#0D2E28]" />
                    <span>Free express shipping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} weight="bold" className="text-[#0D2E28]" />
                    <span>3-day early access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} weight="bold" className="text-[#0D2E28]" />
                    <span>AI-powered picks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} weight="bold" className="text-[#0D2E28]" />
                    <span>Members-only flash sales</span>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="mt-6 w-full border border-black bg-white hover:bg-zinc-50 text-black py-3 font-mono text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                SUBSCRIBE — ₹199/MO
              </button>
            </div>
          </div>

          {/* 5 Perk Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            <div className="border border-zinc-200 bg-white p-4 shadow-sm space-y-2">
              <div className="h-8 w-8 bg-[#EDEBE6] text-[#0D2E28] flex items-center justify-center">
                <Tag size={16} />
              </div>
              <h5 className="font-serif text-sm font-bold text-[#0D2E28]">10% Off Exclusive Imports</h5>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Member-only pricing on every international product — savings that add up fast.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-4 shadow-sm space-y-2">
              <div className="h-8 w-8 bg-[#EDEBE6] text-[#0D2E28] flex items-center justify-center">
                <Truck size={16} />
              </div>
              <h5 className="font-serif text-sm font-bold text-[#0D2E28]">Free Express Shipping</h5>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Every order ships express at no extra cost. Your pet doesn&apos;t like to wait either.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-4 shadow-sm space-y-2">
              <div className="h-8 w-8 bg-[#EDEBE6] text-[#0D2E28] flex items-center justify-center">
                <Lightning size={16} />
              </div>
              <h5 className="font-serif text-sm font-bold text-[#0D2E28]">Early Access</h5>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                See and buy new drops 3 days before everyone else. First dibs on the best stuff.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-4 shadow-sm space-y-2">
              <div className="h-8 w-8 bg-[#EDEBE6] text-[#0D2E28] flex items-center justify-center">
                <Star size={16} />
              </div>
              <h5 className="font-serif text-sm font-bold text-[#0D2E28]">AI-Powered Picks</h5>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Personalised suggestions matched to your pet&apos;s breed, size, and activity routine.
              </p>
            </div>

            <div className="border border-zinc-200 bg-white p-4 shadow-sm space-y-2 sm:col-span-2 md:col-span-1">
              <div className="h-8 w-8 bg-[#EDEBE6] text-[#0D2E28] flex items-center justify-center">
                <PawPrint size={16} />
              </div>
              <h5 className="font-serif text-sm font-bold text-[#0D2E28]">Members-Only Deals</h5>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Flash sales, birthday treats, and surprise discounts — just for the Pack.
              </p>
            </div>
          </div>
        </div>

        {/* 4E. Button Variations, Contact Inputs & Verification Badges */}
        <div className="space-y-4">
          <p className="font-mono text-xs font-black uppercase tracking-wider text-[#0D2E28]">
            E. Button Hierarchy, Social States, Contact Inputs &amp; Legitimacy Badges
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Buttons & Socials */}
            <div className="border border-zinc-200 bg-white p-4 sm:p-5 shadow-sm space-y-4">
              <p className="font-mono text-[10px] font-bold text-zinc-500 uppercase">
                Action Button Hierarchy
              </p>
              <div className="space-y-2.5">
                <button
                  type="button"
                  className="w-full bg-[#0D2E28] text-white py-3 px-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#001C18] transition-colors cursor-pointer"
                >
                  SHOP THE COLLECTION
                </button>
                <button
                  type="button"
                  className="w-full border border-[#0D2E28] bg-[#F5F3EF] text-[#0D2E28] py-3 px-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#EAE6DE] transition-colors cursor-pointer"
                >
                  JOIN OUR COMMUNITY
                </button>
                <button
                  type="button"
                  className="w-full bg-[#0D2E28] text-white border-2 border-[#D09A3F] py-3 px-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#001C18] transition-colors cursor-pointer"
                >
                  EXPLORE OUR PRODUCTS
                </button>
              </div>

              {/* Social Bar */}
              <div className="pt-3 border-t border-zinc-100">
                <p className="font-mono text-[10px] text-zinc-400 uppercase mb-2">
                  Social Tiles (Default, Active Hover &amp; WhatsApp Accent)
                </p>
                <div className="flex items-center gap-2 bg-[#0D2E28] p-3">
                  <a
                    href="#instagram"
                    className="h-9 w-9 border border-zinc-600 flex items-center justify-center text-zinc-400 hover:border-[#5FB89C] hover:text-[#5FB89C] transition-colors"
                    title="Instagram"
                  >
                    <InstagramLogo size={18} />
                  </a>
                  <a
                    href="#facebook"
                    className="h-9 w-9 border border-zinc-600 flex items-center justify-center text-zinc-400 hover:border-[#5FB89C] hover:text-[#5FB89C] transition-colors"
                    title="Facebook"
                  >
                    <FacebookLogo size={18} />
                  </a>
                  <a
                    href="#whatsapp"
                    className="h-9 w-9 border border-zinc-600 flex items-center justify-center text-zinc-400 hover:border-[#5FB89C] hover:text-[#5FB89C] transition-colors"
                    title="WhatsApp"
                  >
                    <WhatsappLogo size={18} />
                  </a>
                  <a
                    href="#instagram-active"
                    className="h-9 w-9 border border-[#5FB89C] flex items-center justify-center text-[#5FB89C]"
                    title="Active Hover State"
                  >
                    <InstagramLogo size={18} />
                  </a>
                  <a
                    href="#whatsapp-accent"
                    className="h-9 w-9 bg-[#25D366] flex items-center justify-center text-white ml-auto"
                    title="WhatsApp Floating Help"
                  >
                    <WhatsappLogo size={20} weight="fill" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Underline Inputs */}
            <div className="border border-zinc-200 bg-[#FAF9F5] p-4 sm:p-5 shadow-sm space-y-4">
              <p className="font-mono text-[10px] font-bold text-zinc-500 uppercase">
                Underline Form Controls
              </p>
              <div className="space-y-4 font-sans text-xs">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-zinc-300 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#0D2E28]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-transparent border-b border-zinc-300 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#0D2E28]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full bg-transparent border-b border-zinc-300 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#0D2E28]"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-[#0D2E28] hover:bg-[#001C18] text-white py-3 font-mono text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>SEND MESSAGE</span>
                  <PaperPlaneTilt size={14} weight="bold" />
                </button>
              </div>
            </div>
          </div>

          {/* Legitimacy Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            <div className="border border-zinc-300 bg-white p-4 text-center space-y-1 shadow-sm">
              <div className="mx-auto h-7 w-7 text-[#5FB89C] flex items-center justify-center">
                <Certificate size={22} />
              </div>
              <p className="font-mono text-[11px] font-bold uppercase text-zinc-800">
                GST REGISTERED
              </p>
              <p className="font-mono text-[10px] text-zinc-500">GSTIN 33AAWFT0216D1ZE</p>
            </div>

            <div className="border border-zinc-300 bg-white p-4 text-center space-y-1 shadow-sm">
              <div className="mx-auto h-7 w-7 text-[#5FB89C] flex items-center justify-center">
                <MapPin size={22} />
              </div>
              <p className="font-mono text-[11px] font-bold uppercase text-zinc-800">
                CHENNAI, TAMIL NADU
              </p>
              <p className="text-[11px] text-zinc-500">AE Block, Anna Nagar — 600 040</p>
            </div>

            <div className="border border-zinc-300 bg-white p-4 text-center space-y-1 shadow-sm">
              <div className="mx-auto h-7 w-7 text-[#5FB89C] flex items-center justify-center">
                <Buildings size={22} />
              </div>
              <p className="font-mono text-[11px] font-bold uppercase text-zinc-800">
                THE WETWO INTERNATIONAL
              </p>
              <p className="text-[11px] text-zinc-500">Registered partnership firm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
