import { writeFileSync, copyFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Import jsPDF using direct path from vidyas-kitchen node_modules
import { jsPDF } from "/Users/simonsanthosh/Downloads/vidyas-kitchen/node_modules/jspdf/dist/jspdf.node.min.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_PDF_PORTFOLIO = path.join(ROOT, "public/case-studies/vidyas-kitchen/design-system.pdf");
const OUT_PDF_SOURCE = "/Users/simonsanthosh/Downloads/vidyas-kitchen/Vidya-Kitchen-UI-Design-System.pdf";

const doc = new jsPDF({ unit: "pt", format: "a4" });
const W = 595.28;
const H = 841.89;
const M = 40; // 40pt margin
const CONTENT_W = W - M * 2;
let page = 1;

function hex(h) {
  const n = h.replace("#", "");
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
}

function setFill(h) {
  const [r, g, b] = hex(h);
  doc.setFillColor(r, g, b);
}

function setText(h) {
  const [r, g, b] = hex(h);
  doc.setTextColor(r, g, b);
}

function setDraw(h) {
  const [r, g, b] = hex(h);
  doc.setDrawColor(r, g, b);
}

function drawHeader(sectionNum = "", sectionTitle = "") {
  setText("888888");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("VIDYA'S KITCHEN  ·  UI DESIGN SYSTEM SPECIFICATION", M, 30);
  if (sectionTitle) {
    setText("BD2320");
    doc.text(`${sectionNum ? sectionNum + " · " : ""}${sectionTitle.toUpperCase()}`, W - M, 30, { align: "right" });
  }
  setDraw("E5E5E5");
  doc.setLineWidth(0.75);
  doc.line(M, 36, W - M, 36);
}

function drawFooter() {
  setDraw("E5E5E5");
  doc.setLineWidth(0.75);
  doc.line(M, H - 30, W - M, H - 30);
  setText("888888");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text("Vidya's Kitchen Production Baseline  ·  Typeface: Outfit  ·  Multi-Surface Ecosystem", M, H - 18);
  doc.setFont("helvetica", "bold");
  doc.text(`Page 0${page} of 06`, W - M, H - 18, { align: "right" });
}

function startPage(sectionNum = "", sectionTitle = "") {
  if (page > 1) {
    doc.addPage();
  }
  drawHeader(sectionNum, sectionTitle);
  drawFooter();
}

function drawSectionHeading(sectionNum, title, desc, startY) {
  // Badge
  setFill("F5F5F7");
  setDraw("E5E5E5");
  doc.setLineWidth(1);
  doc.roundedRect(M, startY, 48, 16, 4, 4, "FD");
  setText("BD2320");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text(sectionNum, M + 8, startY + 11);

  // Title
  setText("1A1A1A");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(title, M + 56, startY + 13);

  // Red accent bar
  setFill("BD2320");
  doc.rect(M, startY + 22, 32, 2.5, "F");

  // Description
  setText("666666");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text(desc, M, startY + 36);

  return startY + 46;
}

// ============================================================================
// PAGE 1: COVER & SYSTEM ARCHITECTURE
// ============================================================================
page = 1;
startPage();

// Dark Cover Banner
setFill("0D0D0D");
doc.rect(M, 46, CONTENT_W, 160, "F");

// Red accent spine
setFill("BD2320");
doc.rect(M, 46, 6, 160, "F");

// Category tag
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("OFFICIAL MULTI-SURFACE DESIGN SYSTEM & COMPONENT SPECIFICATION", M + 24, 76);

// Main Title
setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(26);
doc.text("Vidya's Kitchen UI System", M + 24, 108);

// Subtitle
setText("AAAAAA");
doc.setFont("helvetica", "normal");
doc.setFontSize(10.5);
doc.text("Unified visual baseline across Customer PWA, Desktop Showcase, Driver Navigation & Kitchen Station.", M + 24, 126);

// Key Meta Row
setFill("1A1A1A");
doc.roundedRect(M + 24, 144, CONTENT_W - 48, 42, 6, 6, "F");

const metaItems = [
  { label: "PRIMARY FONT", val: "Outfit (Weights: 400-900)" },
  { label: "PRIMARY BRAND COLOR", val: "#BD2320 (Crimson Red)" },
  { label: "TOUCH TARGET SPEC", val: "44px - 52px Minimum" },
  { label: "SYSTEM STATUS", val: "Production Ready v2.1" },
];

metaItems.forEach((m, idx) => {
  const colW = (CONTENT_W - 48) / 4;
  const colX = M + 24 + idx * colW + 8;
  setText("777777");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(6.5);
  doc.text(m.label, colX, 158);
  setText("FFFFFF");
  doc.setFontSize(7.5);
  doc.text(m.val, colX, 172);
});

// Section: The Four Purpose-Built Ecosystem Surfaces
let curY = 224;
setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(12);
doc.text("THE FOUR PURPOSE-BUILT ECOSYSTEM SURFACES", M, curY);

setFill("BD2320");
doc.rect(M, curY + 6, 28, 2, "F");

setText("666666");
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.text("Vidya's Kitchen rejects one-size-fits-all generic responsiveness. Each operational role runs on a tailored ergonomics surface.", M, curY + 18);

curY += 28;

// 4 Surface Cards (2x2 Grid)
const surfaces = [
  {
    num: "01",
    name: "Customer Mobile PWA",
    context: "Home & Office Dining / Handheld Mobile",
    canvas: "Canvas: #F5F5F7 · Primary: #BD2320",
    radius: "Radius: 18px – 20px (Organic Comfort)",
    desc: "Engineered for relaxed thumb-reach browsing. High appetizing clarity, soft glare-reducing backdrop, 52px primary action wells, and natural bottom-sheet drawers.",
  },
  {
    num: "02",
    name: "Desktop Showcase Landing",
    context: "Marketing & Cross-Device Onboarding / Large Screens",
    canvas: "Canvas: #0D0D0D · Glow: rgba(189,35,32,0.22)",
    radius: "Radius: 16px – 24px (Glass Aesthetics)",
    desc: "Dark cinematic theater aesthetic. Features high-precision glass QR code box with laser scanning beam animation and instant WhatsApp order trigger.",
  },
  {
    num: "03",
    name: "Driver Delivery PWA",
    context: "Outdoor Sunlight & Night Navigation / Two-Wheelers",
    canvas: "Canvas: #0A0A0A · Action: #34D469 / #F5A623",
    radius: "Radius: 14px – 16px (Dense Tactility)",
    desc: "High-contrast daylight glare suppression. Ultra-bold typography, dedicated Amber Cash-on-Delivery banner, and oversized 48px one-tap dispatch buttons.",
  },
  {
    num: "04",
    name: "Kitchen Station Dashboard",
    context: "Busy Prep Desk / 8+ Hour Manager Shifts",
    canvas: "Canvas: #0D0D0D / #141414 · Accent: #F5E32D",
    radius: "Radius: 8px – 12px (Desktop Workspace)",
    desc: "Designed to eliminate eye fatigue. Action Yellow (#F5E32D) acts as a high-visibility beacon for live incoming orders, paired with live storefront status pills.",
  },
];

const gridColW = (CONTENT_W - 14) / 2;
const gridRowH = 120;

surfaces.forEach((s, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const cardX = M + col * (gridColW + 14);
  const cardY = curY + row * (gridRowH + 12);

  // Card outline
  setFill("FAFAFA");
  setDraw("E5E5E5");
  doc.setLineWidth(1);
  doc.roundedRect(cardX, cardY, gridColW, gridRowH, 8, 8, "FD");

  // Top header in card
  setFill("FFFFFF");
  doc.roundedRect(cardX, cardY, gridColW, 26, 8, 8, "F");
  setDraw("E5E5E5");
  doc.line(cardX, cardY + 26, cardX + gridColW, cardY + 26);

  // Badge
  setFill("BD2320");
  doc.roundedRect(cardX + 8, cardY + 6, 20, 14, 3, 3, "F");
  setText("FFFFFF");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text(s.num, cardX + 13, cardY + 16);

  // Surface title
  setText("1A1A1A");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(s.name, cardX + 34, cardY + 16);

  // Subtext context
  setText("777777");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text(s.context, cardX + 10, cardY + 40);

  // Specs pill lines
  setText("BD2320");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text(s.canvas, cardX + 10, cardY + 54);

  setText("444444");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.text(s.radius, cardX + 10, cardY + 66);

  // Body desc
  setText("555555");
  doc.setFontSize(7.5);
  const descLines = doc.splitTextToSize(s.desc, gridColW - 20);
  doc.text(descLines, cardX + 10, cardY + 80);
});

// Architecture Rule Box at bottom
const archBoxY = curY + gridRowH * 2 + 30;
setFill("F0FDF4");
setDraw("86EFAC");
doc.setLineWidth(1);
doc.roundedRect(M, archBoxY, CONTENT_W, 64, 8, 8, "FD");

setText("166534");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("CORE SYSTEM ARCHITECTURE MANDATE", M + 14, archBoxY + 18);

setText("15803D");
doc.setFont("helvetica", "normal");
doc.setFontSize(8);
const archLines = doc.splitTextToSize(
  "Every surface maintains independent visual tokens optimized for its environment while sharing strict geometry harnesses (minimum 44px tap bounding boxes, Outfit typography scale, and unified order telemetry). Components from one surface must never be imported into another without proper token mapping.",
  CONTENT_W - 28
);
doc.text(archLines, M + 14, archBoxY + 32);

// ============================================================================
// PAGE 2: 1. TYPOGRAPHY HIERARCHY
// ============================================================================
page = 2;
startPage("01", "Typography Hierarchy");

let p2Y = drawSectionHeading(
  "01",
  "Typography Hierarchy & Scale",
  "The system uses Outfit exclusively across all 4 surfaces. No secondary display font is permitted.",
  48
);

// Font Spec Box
setFill("F5F5F7");
setDraw("E0E0E0");
doc.setLineWidth(1);
doc.roundedRect(M, p2Y, CONTENT_W, 52, 6, 6, "FD");

setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.text("PRIMARY TYPEFACE: OUTFIT", M + 14, p2Y + 18);

setText("555555");
doc.setFont("helvetica", "normal");
doc.setFontSize(8);
doc.text("Google Fonts / Modern Geometric Sans with high x-height, curved terminals, and open counters designed for high legibility on mobile screens.", M + 14, p2Y + 30);

// Weights supported
const weights = [
  { name: "Regular 400", use: "Body text, descriptions" },
  { name: "Medium 500", use: "Subtext, prices in lists" },
  { name: "SemiBold 600", use: "Section subtitles, tabs" },
  { name: "Bold 700", use: "Headers, CTA labels" },
  { name: "Black 900", use: "Display numbers, accents" },
];

let weightX = M + 14;
weights.forEach((w) => {
  setText("BD2320");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text(w.name, weightX, p2Y + 44);
  weightX += 100;
});

p2Y += 66;

// Table of Typography Scale
setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(10.5);
doc.text("COMPLETE TYPOGRAPHY SCALE SPECIFICATION", M, p2Y);

p2Y += 10;

// Table Header
setFill("1A1A1A");
doc.rect(M, p2Y, CONTENT_W, 20, "F");

setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(7.5);
doc.text("LEVEL / ROLE", M + 10, p2Y + 13);
doc.text("SIZE", M + 110, p2Y + 13);
doc.text("LINE HT", M + 155, p2Y + 13);
doc.text("WEIGHT", M + 205, p2Y + 13);
doc.text("TRACKING", M + 280, p2Y + 13);
doc.text("PRIMARY APPLICATION & IMPLEMENTATION", M + 340, p2Y + 13);

p2Y += 20;

const typoTable = [
  {
    role: "Display / Greeting",
    size: "32px (2.0rem)",
    lh: "38px",
    weight: "Black (900)",
    track: "-0.03em",
    app: "Mobile Greeting ('Hey, Santhosh.' in #BD2320), Hero metrics",
  },
  {
    role: "Headline H1",
    size: "24px (1.5rem)",
    lh: "30px",
    weight: "Bold (700)",
    track: "-0.02em",
    app: "Modal titles, major drawer headers, desktop stage headlines",
  },
  {
    role: "Headline H2",
    size: "20px (1.25rem)",
    lh: "26px",
    weight: "Bold (700)",
    track: "-0.01em",
    app: "Section headers, cart drawer summary titles, driver order banners",
  },
  {
    role: "Title / Dish Name",
    size: "16px (1.0rem)",
    lh: "22px",
    weight: "SemiBold (600)",
    track: "normal",
    app: "Menu card titles ('Mom's Recipe — Chicken Gravy'), item headers",
  },
  {
    role: "Body Regular",
    size: "14px (0.875rem)",
    lh: "20px",
    weight: "Regular (400)",
    track: "normal",
    app: "Dish descriptions, ingredient lists, policy copy, invoice items",
  },
  {
    role: "Body Medium",
    size: "14px (0.875rem)",
    lh: "20px",
    weight: "Medium (500)",
    track: "normal",
    app: "Customer address lines, filter tab inactive labels, subtotal lines",
  },
  {
    role: "Button CTA",
    size: "14px - 15px",
    lh: "18px",
    weight: "Bold (700/800)",
    track: "0.01em",
    app: "52px Primary CTA button, + ADD buttons, Driver dispatch",
  },
  {
    role: "Caption / Meta",
    size: "12px (0.75rem)",
    lh: "16px",
    weight: "Medium (500)",
    track: "normal",
    app: "Address subtitle ('Delivering to • Home'), price tags (₹349)",
  },
  {
    role: "Micro / Badge",
    size: "10px (0.625rem)",
    lh: "14px",
    weight: "Black (900)",
    track: "0.02em",
    app: "'20% Off!' offer badges, '⚡ INSTANT', '9+' notification pill",
  },
];

typoTable.forEach((row, i) => {
  const rowH = 22;
  setFill(i % 2 === 0 ? "FFFFFF" : "F9F9FB");
  doc.rect(M, p2Y, CONTENT_W, rowH, "F");

  setDraw("EEEEEE");
  doc.setLineWidth(0.5);
  doc.line(M, p2Y + rowH, M + CONTENT_W, p2Y + rowH);

  setText("1A1A1A");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text(row.role, M + 10, p2Y + 14);

  setText("BD2320");
  doc.text(row.size, M + 110, p2Y + 14);

  setText("555555");
  doc.setFont("helvetica", "normal");
  doc.text(row.lh, M + 155, p2Y + 14);
  doc.text(row.weight, M + 205, p2Y + 14);
  doc.text(row.track, M + 280, p2Y + 14);

  setText("333333");
  doc.text(row.app, M + 340, p2Y + 14);

  p2Y += rowH;
});

// Visual Typographic Specimens Card
p2Y += 16;
setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(10.5);
doc.text("LIVE VISUAL TYPOGRAPHY SPECIMENS", M, p2Y);

p2Y += 10;

setFill("FAFAFC");
setDraw("E0E0E0");
doc.setLineWidth(1);
doc.roundedRect(M, p2Y, CONTENT_W, 160, 8, 8, "FD");

// Specimen 1: Greeting Hero
setText("777777");
doc.setFont("helvetica", "normal");
doc.setFontSize(8);
doc.text("Midday feast?", M + 16, p2Y + 22);

setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(22);
doc.text("Hey, ", M + 16, p2Y + 46);
setText("BD2320");
doc.text("Santhosh.", M + 68, p2Y + 46);

setText("888888");
doc.setFontSize(7);
doc.text("[Specimen A: 32px Outfit Display · #BD2320 Accent]", M + 220, p2Y + 46);

// Specimen 2: Dish Title & Price Tag
setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(14);
doc.text("Mom's Recipe — Chicken Gravy", M + 16, p2Y + 76);

setFill("111111");
doc.roundedRect(M + 240, p2Y + 65, 42, 16, 8, 8, "F");
setText("FFFFFF");
doc.setFontSize(8.5);
doc.text("₹349", M + 250, p2Y + 76);

setFill("F59E0B");
doc.roundedRect(M + 288, p2Y + 65, 52, 16, 4, 4, "F");
setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(7.5);
doc.text("20% Off!", M + 295, p2Y + 76);

setText("888888");
doc.setFont("helvetica", "normal");
doc.setFontSize(7);
doc.text("[Specimen B: 16px Title + 12px Price Pill + 10px Offer Badge]", M + 350, p2Y + 76);

// Specimen 3: Body & Delivery Subtext
setText("666666");
doc.setFont("helvetica", "normal");
doc.setFontSize(8.5);
doc.text("Slow-simmered chicken with crushed black pepper, shallots, and hand-ground Sivakasi spices.", M + 16, p2Y + 102);

// Specimen 4: Micro Labels & Instant Badges
setFill("DCFCE7");
doc.roundedRect(M + 16, p2Y + 118, 62, 18, 9, 9, "F");
setText("166534");
doc.setFont("helvetica", "bold");
doc.setFontSize(7.5);
doc.text("⚡ INSTANT", M + 24, p2Y + 130);

setFill("BD2320");
doc.roundedRect(M + 86, p2Y + 118, 68, 18, 9, 9, "F");
setText("FFFFFF");
doc.text("+ ADD", M + 104, p2Y + 130);

setText("888888");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text("Outfit Mono / Micro 10px tracking for timestamps, invoice serial numbers, and live status tags.", M + 164, p2Y + 130);

// ============================================================================
// PAGE 3: 2. COLOGRAPHY USED IN ALL FOUR DESIGNS
// ============================================================================
page = 3;
startPage("02", "Colography Across All Four Designs");

let p3Y = drawSectionHeading(
  "02",
  "Colography & Surface Color Palettes",
  "Color swatches, hex values, and functional roles across Customer PWA, Desktop Showcase, Driver Navigation, and Kitchen Dashboard.",
  48
);

// 4 Columns for the 4 Designs
const colW = (CONTENT_W - 24) / 4;
const colorPalettes = [
  {
    surface: "CUSTOMER PWA",
    bgTag: "Soft Daylight #F5F5F7",
    swatches: [
      { name: "Brand Crimson", hex: "#BD2320", role: "Primary CTA, active tabs, accents" },
      { name: "Canvas Warm Gray", hex: "#F5F5F7", role: "Page background, anti-glare" },
      { name: "Card Surface White", hex: "#FFFFFF", role: "Food cards, bottom sheets" },
      { name: "Charcoal Text", hex: "#1A1A1A", role: "Primary headings & body" },
      { name: "Muted Subtext", hex: "#666666", role: "Descriptions, secondary meta" },
      { name: "Discount Amber", hex: "#F59E0B", role: "20% Off offer badge" },
      { name: "Instant Green", hex: "#22C55E", role: "⚡ Instant badge & status" },
    ],
  },
  {
    surface: "DESKTOP LANDING",
    bgTag: "Dark Stage #0D0D0D",
    swatches: [
      { name: "Stage Pure Dark", hex: "#0D0D0D", role: "Cinematic desktop canvas" },
      { name: "Crimson Ambient", hex: "#BD2320", role: "Radial glow & laser scan" },
      { name: "Glass Card Border", hex: "#222222", role: "QR box boundary hairline" },
      { name: "WhatsApp Green", hex: "#25D366", role: "Primary desktop order CTA" },
      { name: "Pure White Text", hex: "#FFFFFF", role: "High-contrast hero title" },
      { name: "Muted Slate Gray", hex: "#888888", role: "Platform metadata" },
      { name: "Laser Flare", hex: "#FF4D4D", role: "Scanning QR animation" },
    ],
  },
  {
    surface: "DRIVER APP",
    bgTag: "Outdoor Night #0A0A0A",
    swatches: [
      { name: "Outdoor Midnight", hex: "#0A0A0A", role: "Anti-glare high contrast canvas" },
      { name: "Signal Green", hex: "#34D469", role: "Dispatch & complete order CTA" },
      { name: "COD Cash Amber", hex: "#F5A623", role: "Cash collection banner" },
      { name: "Urgency Red", hex: "#E84040", role: "Delay timers & flags" },
      { name: "Card Shell Gray", hex: "#161616", role: "Order container backdrop" },
      { name: "Pure White", hex: "#FFFFFF", role: "Customer address & phone" },
      { name: "Border Hairline", hex: "#2A2A2A", role: "Tactile card separation" },
    ],
  },
  {
    surface: "KITCHEN DASHBOARD",
    bgTag: "Desk Station #141414",
    swatches: [
      { name: "Station Shell", hex: "#141414", role: "Floating sidebar & app shell" },
      { name: "Active Yellow", hex: "#F5E32D", role: "Active order beacon & 9+ badge" },
      { name: "Storefront Live", hex: "#86EFAC", role: "Live storefront status pill" },
      { name: "Panel Background", hex: "#0D0D0D", role: "Order ticket container" },
      { name: "Control Hairline", hex: "#262626", role: "Component bounding dividers" },
      { name: "Text High Focus", hex: "#FFFFFF", role: "Recipe names, ticket numbers" },
      { name: "Text Secondary", hex: "#777777", role: "Elapsed cooking timers" },
    ],
  },
];

colorPalettes.forEach((pal, colIdx) => {
  const colX = M + colIdx * (colW + 8);
  let cardY = p3Y;

  // Header Box
  setFill("1A1A1A");
  doc.roundedRect(colX, cardY, colW, 30, 4, 4, "F");
  setText("FFFFFF");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text(pal.surface, colX + 6, cardY + 12);
  setText("BD2320");
  doc.setFontSize(6.5);
  doc.text(pal.bgTag, colX + 6, cardY + 22);

  cardY += 34;

  // Swatches List
  pal.swatches.forEach((sw) => {
    // Swatch box
    setFill(sw.hex);
    setDraw("DDDDDD");
    doc.setLineWidth(0.5);
    doc.roundedRect(colX, cardY, colW, 34, 4, 4, "FD");

    // Text info inside/below swatch
    // Contrast check for hex label
    const isDark = ["#0D0D0D", "#0A0A0A", "#141414", "#161616", "#1A1A1A", "#222222", "#262626", "#2A2A2A", "#BD2320", "#666666"].includes(sw.hex);
    setText(isDark ? "FFFFFF" : "000000");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text(sw.name, colX + 6, cardY + 11);

    doc.setFontSize(6.5);
    doc.text(sw.hex, colX + 6, cardY + 20);

    setText(isDark ? "DDDDDD" : "333333");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(5.5);
    doc.text(sw.role, colX + 6, cardY + 28);

    cardY += 38;
  });
});

// Color Governance & Contrast Rules
const p3BottomY = p3Y + 34 + 7 * 38 + 14;
setFill("FAFAFA");
setDraw("E0E0E0");
doc.setLineWidth(1);
doc.roundedRect(M, p3BottomY, CONTENT_W, 72, 6, 6, "FD");

setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("COLOR TOKENS & ACCESSIBILITY GOVERNANCE", M + 14, p3BottomY + 16);

const rules = [
  "1. Strict Surface Isolation: Brand Crimson (#BD2320) is exclusive to Customer PWA; Yellow (#F5E32D) is exclusive to Kitchen Dashboard; Signal Green (#34D469) is exclusive to Driver dispatch.",
  "2. Zero Pure Black Text on Customer PWA: Always use Charcoal (#1A1A1A) on soft gray (#F5F5F7) to preserve organic food warmth and avoid harsh contrast.",
  "3. WCAG 2.1 AAA Contrast: All button labels and price badges strictly maintain > 4.5:1 contrast ratio against their respective container backgrounds.",
  "4. Semantic Status Uniformity: Green (#22C55E / #86EFAC) = Online / Success; Amber (#F59E0B / #F5A623) = Promo / Cash-on-Delivery; Red = Urgency / Brand Focus.",
];

rules.forEach((r, idx) => {
  setText("444444");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text(r, M + 14, p3BottomY + 30 + idx * 10);
});

// ============================================================================
// PAGE 4: 3. ICONOGRAPHY SYSTEM
// ============================================================================
page = 4;
startPage("03", "Iconography System");

let p4Y = drawSectionHeading(
  "03",
  "Iconography System & Touch Bounding Harnesses",
  "Standardized Phosphor icon family, sizing matrix, stroke weights, and containment wells.",
  48
);

// Specs Summary Card
setFill("F5F5F7");
setDraw("E0E0E0");
doc.setLineWidth(1);
doc.roundedRect(M, p4Y, CONTENT_W, 44, 6, 6, "FD");

setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(9);
doc.text("ICON FAMILY: PHOSPHOR ICONS (CORE SET)", M + 14, p4Y + 16);

setText("555555");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text("All icons use uniform stroke caps and rounded joints. Regular weight (1.5px stroke) for passive icons; Bold weight (2.0px stroke) for active states, tab bars, and action triggers.", M + 14, p4Y + 28);

p4Y += 56;

// Sizing Matrix
setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(10.5);
doc.text("STANDARDIZED SIZING MATRIX & TOUCH BOUNDING HARNESSES", M, p4Y);

p4Y += 10;

const iconSizes = [
  {
    size: "16px",
    weight: "Bold",
    well: "24px pill",
    usage: "Micro indicators, chevron dropdowns, ratings stars, notification count dots",
  },
  {
    size: "18px - 20px",
    weight: "Regular / Bold",
    well: "36px - 40px",
    usage: "Bottom navigation tabs, search inputs, modal close buttons, category icons",
  },
  {
    size: "24px",
    weight: "Bold",
    well: "44px pill",
    usage: "Location delivery pin, WhatsApp action trigger, drawer headers, order dispatches",
  },
  {
    size: "32px",
    weight: "Bold",
    well: "44px circular",
    usage: "Quantity stepper +/- buttons, cart drawer actions, quick reorder buttons",
  },
  {
    size: "52px",
    weight: "Filled / Well",
    well: "52×52px r:18",
    usage: "Size variant dish preview icon well inside bottom selection drawers",
  },
];

// Table Header
setFill("1A1A1A");
doc.rect(M, p4Y, CONTENT_W, 20, "F");

setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(7.5);
doc.text("ICON SIZE", M + 10, p4Y + 13);
doc.text("STROKE WEIGHT", M + 80, p4Y + 13);
doc.text("TOUCH BOUNDING WELL", M + 175, p4Y + 13);
doc.text("PRIMARY APPLICATION & IMPLEMENTATION", M + 300, p4Y + 13);

p4Y += 20;

iconSizes.forEach((row, idx) => {
  const rowH = 22;
  setFill(idx % 2 === 0 ? "FFFFFF" : "F9F9FB");
  doc.rect(M, p4Y, CONTENT_W, rowH, "F");

  setDraw("EEEEEE");
  doc.setLineWidth(0.5);
  doc.line(M, p4Y + rowH, M + CONTENT_W, p4Y + rowH);

  setText("BD2320");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text(row.size, M + 10, p4Y + 14);

  setText("1A1A1A");
  doc.setFont("helvetica", "normal");
  doc.text(row.weight, M + 80, p4Y + 14);

  setText("000000");
  doc.setFont("helvetica", "bold");
  doc.text(row.well, M + 175, p4Y + 14);

  setText("444444");
  doc.setFont("helvetica", "normal");
  doc.text(row.usage, M + 300, p4Y + 14);

  p4Y += rowH;
});

p4Y += 16;

// Icon Showcase Grid
setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(10.5);
doc.text("COMPLETE ICON REGISTRY & FUNCTIONAL ROLES", M, p4Y);

p4Y += 10;

const iconGrid = [
  { name: "MapPin", category: "Location", role: "Header delivery location pin", token: "#BD2320 in #FEE2E2" },
  { name: "CaretDown", category: "Navigation", role: "Address selector dropdown", token: "#666666 (14px)" },
  { name: "Plus (+)", category: "Action", role: "Quantity increment / + ADD button", token: "#FFFFFF in #BD2320" },
  { name: "Minus (-)", category: "Action", role: "Quantity decrement stepper", token: "#1A1A1A in pill" },
  { name: "House", category: "Navigation", role: "Active bottom navigation home tab", token: "#FFFFFF in #BD2320" },
  { name: "Receipt", category: "Navigation", role: "Order history tab with badge '1'", token: "#666666 (20px)" },
  { name: "User", category: "Navigation", role: "Customer profile / accounts tab", token: "#666666 (20px)" },
  { name: "ArrowRight", category: "Action", role: "Circular navigation trigger button", token: "#BD2320 in pill" },
  { name: "WhatsappLogo", category: "Order", role: "Instant WhatsApp order trigger", token: "#FFFFFF in #25D366" },
  { name: "Lightning", category: "Status", role: "⚡ INSTANT speed badge indicator", token: "#166534 in #DCFCE7" },
  { name: "Clock", category: "Telemetry", role: "Preparation timer & dispatch ETA", token: "#F5E32D in station" },
  { name: "Motorcycle", category: "Driver", role: "Driver delivery transit tracking", token: "#34D469 in night" },
  { name: "Money / Wallet", category: "Payment", role: "Cash on delivery collection alert", token: "#000000 in #F5A623" },
  { name: "Sparkle", category: "Intelligence", role: "AI dynamic pricing engine", token: "#F5E32D in dashboard" },
  { name: "CheckCircle", category: "Success", role: "Order placed SLA confirmation", token: "#22C55E (56px ring)" },
  { name: "CookingPot", category: "Kitchen", role: "Live kitchen cooking progress", token: "#FFFFFF in #141414" },
];

const gridW = (CONTENT_W - 24) / 4;
const gridH = 48;

iconGrid.forEach((ic, idx) => {
  const row = Math.floor(idx / 4);
  const col = idx % 4;
  const icX = M + col * (gridW + 8);
  const icY = p4Y + row * (gridH + 8);

  setFill("FAFAFA");
  setDraw("E2E2E2");
  doc.setLineWidth(0.75);
  doc.roundedRect(icX, icY, gridW, gridH, 6, 6, "FD");

  // Icon name & Category
  setText("1A1A1A");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text(ic.name, icX + 8, icY + 14);

  setText("BD2320");
  doc.setFontSize(6.5);
  doc.text(`[${ic.category}]`, icX + gridW - 8, icY + 14, { align: "right" });

  // Role
  setText("555555");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(6.5);
  doc.text(ic.role, icX + 8, icY + 26);

  // Token callout
  setText("000000");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(6);
  doc.text(ic.token, icX + 8, icY + 38);
});

// Accessibility guideline
const p4BottomY = p4Y + 4 * (gridH + 8) + 12;
setFill("FEF3C7");
setDraw("F59E0B");
doc.setLineWidth(1);
doc.roundedRect(M, p4BottomY, CONTENT_W, 46, 6, 6, "FD");

setText("92400E");
doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.text("MANDATORY TOUCH TARGET ACCESSIBILITY HARNESS (WCAG 2.1 AAA)", M + 14, p4BottomY + 16);

setText("78350F");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text(
  "Although visual icon glyphs range from 16px to 24px, the invisible interactive bounding box MUST never drop below 44px × 44px on any handheld surface. For primary checkout and variant selection, bounding wells extend to 52px height.",
  M + 14,
  p4BottomY + 28
);

// ============================================================================
// PAGE 5: 4. COMPONENTS WITH EXACT MEASUREMENTS (PART 1: CUSTOMER PWA)
// ============================================================================
page = 5;
startPage("04", "Components & Measurements · Customer PWA");

let p5Y = drawSectionHeading(
  "04",
  "Component Specs with Exact Measurements (Part 1)",
  "Visual architecture, exact bounding dimensions, radii, padding, and layout harnesses for the Customer PWA.",
  48
);

// We will render 5 distinct visual component spec cards:
// 1. Location Delivery Header Pill
// 2. Category Filter Tabs
// 3. Food Menu Card (Mom's Recipe Chicken Gravy)
// 4. Vidya Bot WhatsApp Card
// 5. Floating Bottom Navigation Bar

// Component 1: Location Delivery Header Pill
setFill("FFFFFF");
setDraw("D0D0D0");
doc.setLineWidth(1);
doc.roundedRect(M, p5Y, CONTENT_W, 58, 8, 8, "FD");

// Inside representation of Location Pill
setFill("F5F5F7");
setDraw("E5E5E5");
doc.setLineWidth(1);
doc.roundedRect(M + 14, p5Y + 10, 220, 38, 19, 19, "FD");

// Red icon circle
setFill("FEE2E2");
doc.circle(M + 34, p5Y + 29, 12, "F");
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.text("PIN", M + 28, p5Y + 32);

// Location text
setText("777777");
doc.setFont("helvetica", "normal");
doc.setFontSize(6.5);
doc.text("Delivering to • Home", M + 54, p5Y + 23);

setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.text("5th Street 10th Main Rd 62...", M + 54, p5Y + 34);

// Chevron
setText("888888");
doc.text("v", M + 218, p5Y + 29);

// Dimension specs on right
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("COMPONENT 01: LOCATION DELIVERY HEADER PILL", M + 250, p5Y + 20);

setText("333333");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text("• Dimensions: Height: 44px (touch target) | Width: Auto / 100% (padded container)", M + 250, p5Y + 32);
doc.text("• Radius: 999px (full pill) | Background: #FFFFFF with soft border rgba(0,0,0,0.06)", M + 250, p5Y + 42);
doc.text("• Icon Well: 30×30px circle in #FEE2E2 | Typography: 10px Subtitle / 12px Bold Address", M + 250, p5Y + 52);

p5Y += 68;

// Component 2: Category Filter Tabs
setFill("FFFFFF");
setDraw("D0D0D0");
doc.setLineWidth(1);
doc.roundedRect(M, p5Y, CONTENT_W, 58, 8, 8, "FD");

// Inside representation of Tabs
setFill("F5F5F7");
doc.roundedRect(M + 14, p5Y + 11, 180, 36, 18, 18, "F");

// Active Pill: Kitchen picks
setFill("BD2320");
doc.roundedRect(M + 16, p5Y + 13, 90, 32, 16, 16, "F");
setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.text("Kitchen picks", M + 28, p5Y + 32);

// Inactive Pill: Favorites
setText("666666");
doc.setFont("helvetica", "normal");
doc.setFontSize(8);
doc.text("Favorites", M + 120, p5Y + 32);

// Dimension specs on right
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("COMPONENT 02: CATEGORY SEGMENTED FILTER TABS", M + 250, p5Y + 20);

setText("333333");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text("• Outer Track: Height: 44px | Radius: 999px pill | Background: #F5F5F7", M + 250, p5Y + 32);
doc.text("• Active Segment: Height: 36px | Radius: 999px | Background: #BD2320 (White text)", M + 250, p5Y + 42);
doc.text("• Inactive Segment: Height: 36px | Background: Transparent | Color: #666666 (500)", M + 250, p5Y + 52);

p5Y += 68;

// Component 3: Food Menu Card (Mom's Recipe Chicken Gravy)
setFill("FFFFFF");
setDraw("D0D0D0");
doc.setLineWidth(1);
doc.roundedRect(M, p5Y, CONTENT_W, 114, 8, 8, "FD");

// Card drawing
setFill("F9F9FB");
setDraw("E2E2E2");
doc.setLineWidth(1);
doc.roundedRect(M + 14, p5Y + 10, 160, 94, 12, 12, "FD");

// Image box
setFill("222222");
doc.roundedRect(M + 20, p5Y + 15, 148, 48, 8, 8, "F");

// Badges on image
setFill("111111");
doc.roundedRect(M + 24, p5Y + 19, 28, 12, 6, 6, "F");
setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(6);
doc.text("₹349", M + 28, p5Y + 27);

setFill("F59E0B");
doc.roundedRect(M + 124, p5Y + 19, 40, 12, 3, 3, "F");
setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(6);
doc.text("20% Off!", M + 128, p5Y + 27);

// Dish Title
setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(7.5);
doc.text("Mom's Recipe — Chicken...", M + 20, p5Y + 72);

// + ADD Button
setFill("BD2320");
doc.roundedRect(M + 50, p5Y + 78, 88, 20, 10, 10, "F");
setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(7);
doc.text("+ ADD", M + 80, p5Y + 91);

// Dimension specs on right
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("COMPONENT 03: FOOD MENU CARD & ADD BUTTON", M + 190, p5Y + 20);

setText("333333");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text("• Card Dimensions: Width: 220px (horizontal carousel) or 100% grid | Radius: 20px", M + 190, p5Y + 34);
doc.text("• Image Aspect: 4:3 ratio | Radius: 16px | Overlaid Badges: Price (24px) & Offer (22px)", M + 190, p5Y + 46);
doc.text("• Typography: Dish Title 15px Bold (#1A1A1A) | Subtext 13px Regular (#666666)", M + 190, p5Y + 58);
doc.text("• '+ ADD' Button: Height: 36px | Radius: 999px | Background: #BD2320 (Crimson Red)", M + 190, p5Y + 70);
doc.text("• Shadow: 0 8px 24px rgba(0,0,0,0.06) | Padding: 12px internal breathing space", M + 190, p5Y + 82);

p5Y += 124;

// Component 4: Vidya Bot Floating WhatsApp Card
setFill("FFFFFF");
setDraw("D0D0D0");
doc.setLineWidth(1);
doc.roundedRect(M, p5Y, CONTENT_W, 58, 8, 8, "FD");

// Card drawing
setFill("F5F5F7");
doc.roundedRect(M + 14, p5Y + 10, 180, 38, 12, 12, "F");

setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.text("Vidya Bot", M + 24, p5Y + 24);

setFill("DCFCE7");
doc.roundedRect(M + 68, p5Y + 16, 44, 12, 6, 6, "F");
setText("166534");
doc.setFont("helvetica", "bold");
doc.setFontSize(5.5);
doc.text("⚡ INSTANT", M + 72, p5Y + 24);

setText("777777");
doc.setFont("helvetica", "normal");
doc.setFontSize(6.5);
doc.text("Order via our bot", M + 24, p5Y + 36);

// Green WhatsApp circle
setFill("25D366");
doc.circle(M + 168, p5Y + 29, 13, "F");
setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(6);
doc.text("WA", M + 162, p5Y + 32);

// Dimension specs on right
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("COMPONENT 04: VIDYA BOT FLOATING WHATSAPP CARD", M + 210, p5Y + 20);

setText("333333");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text("• Dimensions: Height: 58px | Radius: 20px | Background: #FFFFFF / #F5F5F7", M + 210, p5Y + 32);
doc.text("• '⚡ INSTANT' Badge: Height: 20px | Radius: 999px | Background: #DCFCE7 | Color: #166534", M + 210, p5Y + 42);
doc.text("• WhatsApp Trigger: 44×44px circle | Background: #25D366 with 0 4px 12px green glow", M + 210, p5Y + 52);

p5Y += 68;

// Component 5: Floating Bottom Navigation Bar
setFill("FFFFFF");
setDraw("D0D0D0");
doc.setLineWidth(1);
doc.roundedRect(M, p5Y, CONTENT_W, 68, 8, 8, "FD");

// Bar drawing
setFill("F5F5F7");
setDraw("DCDCDC");
doc.setLineWidth(1);
doc.roundedRect(M + 14, p5Y + 12, 230, 44, 22, 22, "FD");

// Text: Explore
setText("777777");
doc.setFont("helvetica", "bold");
doc.setFontSize(6.5);
doc.text("Explore", M + 24, p5Y + 32);
doc.setFont("helvetica", "normal");
doc.setFontSize(5);
doc.text("17 dishes", M + 24, p5Y + 40);

// Active Home Pill
setFill("BD2320");
doc.roundedRect(M + 68, p5Y + 16, 62, 36, 18, 18, "F");
setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(7.5);
doc.text("Home", M + 86, p5Y + 38);

// Receipt icon with red dot
setText("555555");
doc.setFontSize(8);
doc.text("REC", M + 140, p5Y + 36);
setFill("BD2320");
doc.circle(M + 158, p5Y + 24, 4, "F");
setText("FFFFFF");
doc.setFontSize(5);
doc.text("1", M + 156.5, p5Y + 26);

// User icon
setText("555555");
doc.setFontSize(8);
doc.text("USR", M + 176, p5Y + 36);

// Red circular forward trigger
setFill("FEE2E2");
doc.circle(M + 214, p5Y + 34, 12, "F");
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.text("->", M + 210, p5Y + 37);

// Dimension specs on right
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("COMPONENT 05: FLOATING BOTTOM NAVIGATION DOCK", M + 260, p5Y + 20);

setText("333333");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text("• Dock Dimensions: Height: 64px | Radius: 999px | Background: rgba(255,255,255,0.95)", M + 260, p5Y + 32);
doc.text("• Active Tab Pill: Height: 46px | Radius: 999px | Background: #BD2320 (White bold text)", M + 260, p5Y + 42);
doc.text("• Notification Badge: 16×16px red circle (#BD2320) with white count numeral ('1')", M + 260, p5Y + 52);
doc.text("• Backdrop Blur: 16px blur filter | Elevation: 0 12px 36px rgba(0,0,0,0.12)", M + 260, p5Y + 62);

// ============================================================================
// PAGE 6: 4. COMPONENTS WITH EXACT MEASUREMENTS (PART 2: DESKTOP, DRIVER & DASHBOARD)
// ============================================================================
page = 6;
startPage("04", "Components & Measurements · Ecosystem Surfaces");

let p6Y = drawSectionHeading(
  "04",
  "Component Specs with Exact Measurements (Part 2)",
  "Size & Quantity Drawer, Desktop QR Station, Driver Night Card, and Kitchen Dashboard Controls.",
  48
);

// Component 6: SizeQtyDrawer (Customer PWA Bottom Sheet)
setFill("FFFFFF");
setDraw("D0D0D0");
doc.setLineWidth(1);
doc.roundedRect(M, p6Y, CONTENT_W, 96, 8, 8, "FD");

// Draw Drawer Card
setFill("F8F8FA");
setDraw("F59E0B");
doc.setLineWidth(1.5);
doc.roundedRect(M + 14, p6Y + 12, 180, 72, 12, 12, "FD");

// 52px Icon Well
setFill("FFFFFF");
setDraw("E0E0E0");
doc.setLineWidth(1);
doc.roundedRect(M + 22, p6Y + 20, 38, 38, 10, 10, "FD");
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(7);
doc.text("ICON", M + 28, p6Y + 42);

// Variant Title & Price
setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("Regular Pack", M + 68, p6Y + 32);
setText("BD2320");
doc.setFontSize(8);
doc.text("₹180", M + 68, p6Y + 46);

// Stepper representation
setFill("EAEAEA");
doc.roundedRect(M + 120, p6Y + 24, 66, 26, 13, 13, "F");
setText("1A1A1A");
doc.setFont("helvetica", "bold");
doc.setFontSize(9);
doc.text("-    1    +", M + 130, p6Y + 41);

// Primary 52px Action CTA Button below
setFill("BD2320");
doc.roundedRect(M + 22, p6Y + 62, 164, 18, 6, 6, "F");
setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(7);
doc.text("ADD ITEM TO CART  ·  ₹180", M + 50, p6Y + 74);

// Dimension specs on right
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("COMPONENT 06: SIZE & QUANTITY SELECTION DRAWER", M + 210, p6Y + 20);

setText("333333");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text("• Source File: src/components/ui/mobile/SizeQtyDrawer.tsx", M + 210, p6Y + 34);
doc.text("• Icon Well: 52×52px square with 18px border-radius | Soft background", M + 210, p6Y + 46);
doc.text("• Quantity Pill Stepper: Height: 44px | Radius: 999px | 32×32px circular buttons", M + 210, p6Y + 58);
doc.text("• Primary Action Button: Height: 52px | Radius: 18px | Background: #BD2320", M + 210, p6Y + 70);
doc.text("• Elevation Shadow: 0 8px 24px rgba(189,35,32,0.25) crimson glow", M + 210, p6Y + 82);

p6Y += 106;

// Component 7: Desktop QR Laser Station & CTA
setFill("0D0D0D");
setDraw("222222");
doc.setLineWidth(1);
doc.roundedRect(M, p6Y, CONTENT_W, 76, 8, 8, "FD");

// Inside QR Glass Box
setFill("1A1A1A");
setDraw("333333");
doc.setLineWidth(1);
doc.roundedRect(M + 14, p6Y + 12, 54, 52, 10, 10, "FD");
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.text("QR BOX", M + 20, p6Y + 38);

// WhatsApp Button
setFill("25D366");
doc.roundedRect(M + 80, p6Y + 24, 110, 30, 8, 8, "F");
setText("FFFFFF");
doc.setFont("helvetica", "bold");
doc.setFontSize(7.5);
doc.text("Order with Vidya Bot", M + 94, p6Y + 43);

// Dimension specs on right
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("COMPONENT 07: DESKTOP QR STATION & WHATSAPP CTA", M + 210, p6Y + 20);

setText("CCCCCC");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text("• Source File: src/components/ui/DesktopLanding.tsx", M + 210, p6Y + 34);
doc.text("• QR Glass Station: 240×240px container | Radius: 24px | Backdrop: rgba(255,255,255,0.06)", M + 210, p6Y + 46);
doc.text("• Scanning Laser Beam: Horizontal 2px crimson beam (#BD2320) with active CSS flare", M + 210, p6Y + 58);
doc.text("• WhatsApp CTA Button: Height: 52px | Radius: 16px | Background: #25D366 (Green)", M + 210, p6Y + 70);

p6Y += 86;

// Component 8: Driver App Outdoor Order Card & COD Banner
setFill("0A0A0A");
setDraw("222222");
doc.setLineWidth(1);
doc.roundedRect(M, p6Y, CONTENT_W, 82, 8, 8, "FD");

// Card drawing
setFill("141414");
doc.roundedRect(M + 14, p6Y + 10, 180, 62, 8, 8, "F");

// COD Cash Banner
setFill("F5A623");
doc.roundedRect(M + 20, p6Y + 16, 168, 20, 4, 4, "F");
setText("000000");
doc.setFont("helvetica", "bold");
doc.setFontSize(7.5);
doc.text("COLLECT CASH: ₹420 (COD)", M + 38, p6Y + 29);

// Dispatch green button
setFill("34D469");
doc.roundedRect(M + 20, p6Y + 42, 168, 24, 6, 6, "F");
setText("000000");
doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.text("SWIPE TO COMPLETE DELIVERY", M + 34, p6Y + 57);

// Dimension specs on right
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("COMPONENT 08: DRIVER OUTDOOR CARD & COD BANNER", M + 210, p6Y + 20);

setText("CCCCCC");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text("• Outdoor Anti-Glare Canvas: #0A0A0A base | Order Container: #141414 with 16px radius", M + 210, p6Y + 34);
doc.text("• Cash-on-Delivery Banner: Height: 40px | Radius: 10px | Background: #F5A623 (Amber)", M + 210, p6Y + 46);
doc.text("• Signal Green Dispatch Button: Height: 48px | Radius: 14px | Background: #34D469", M + 210, p6Y + 58);
doc.text("• Contrast: 100% white bold text on dark cards for split-second roadside legibility", M + 210, p6Y + 70);

p6Y += 92;

// Component 9: Kitchen Dashboard Floating Shell & Active Beacon
setFill("141414");
setDraw("262626");
doc.setLineWidth(1);
doc.roundedRect(M, p6Y, CONTENT_W, 82, 8, 8, "FD");

// Sidebar Item drawing
setFill("F5E32D");
doc.roundedRect(M + 14, p6Y + 12, 180, 28, 8, 8, "F");
setText("000000");
doc.setFont("helvetica", "bold");
doc.setFontSize(8);
doc.text("Live Kitchen Orders", M + 24, p6Y + 29);

// Black 9+ badge
setFill("000000");
doc.roundedRect(M + 160, p6Y + 18, 22, 16, 8, 8, "F");
setText("F5E32D");
doc.setFont("helvetica", "bold");
doc.setFontSize(7.5);
doc.text("9+", M + 167, p6Y + 29);

// Live on Storefront Pill
setFill("0D0D0D");
setDraw("86EFAC");
doc.setLineWidth(1);
doc.roundedRect(M + 14, p6Y + 46, 100, 24, 12, 12, "FD");
setText("86EFAC");
doc.setFont("helvetica", "bold");
doc.setFontSize(7);
doc.text("• Live on Storefront", M + 24, p6Y + 61);

// Approve button
setDraw("F5E32D");
doc.roundedRect(M + 120, p6Y + 46, 74, 24, 6, 6, "D");
setText("F5E32D");
doc.setFont("helvetica", "bold");
doc.setFontSize(7);
doc.text("Approve & Deploy", M + 126, p6Y + 61);

// Dimension specs on right
setText("BD2320");
doc.setFont("helvetica", "bold");
doc.setFontSize(8.5);
doc.text("COMPONENT 09: KITCHEN DASHBOARD CONTROLS", M + 210, p6Y + 20);

setText("CCCCCC");
doc.setFont("helvetica", "normal");
doc.setFontSize(7.5);
doc.text("• Source File: src/components/dashboard/DashboardSidebar.tsx", M + 210, p6Y + 34);
doc.text("• Active Nav Item: Height: 44px | Radius: 12px | Background: #F5E32D (Action Yellow)", M + 210, p6Y + 46);
doc.text("• Order Count Badge: 18×18px circular black pill with yellow bold text ('9+')", M + 210, p6Y + 58);
doc.text("• Storefront Live Indicator: Height: 28px pill | Background: rgba(134,239,172,0.12)", M + 210, p6Y + 70);

// ============================================================================
// SAVE OUTPUT
// ============================================================================
const pdfData = doc.output("arraybuffer");
writeFileSync(OUT_PDF_PORTFOLIO, Buffer.from(pdfData));
console.log(`Successfully generated portfolio PDF: ${OUT_PDF_PORTFOLIO} (${pdfData.byteLength} bytes)`);

copyFileSync(OUT_PDF_PORTFOLIO, OUT_PDF_SOURCE);
console.log(`Successfully synced to vidyas-kitchen: ${OUT_PDF_SOURCE}`);
