import { writeFileSync, copyFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { jsPDF } from "/Users/simonsanthosh/Downloads/vidyas-kitchen/node_modules/jspdf/dist/jspdf.node.min.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_PDF_PORTFOLIO = path.join(ROOT, "public/case-studies/vidyas-kitchen/design-system.pdf");
const OUT_PDF_SOURCE = "/Users/simonsanthosh/Downloads/vidyas-kitchen/Vidya-Kitchen-UI-Design-System.pdf";

const doc = new jsPDF({ unit: "pt", format: "a4" });
const W = 595.28;
const H = 841.89;
const M = 36;
const CONTENT_W = W - M * 2;
const TOTAL_PAGES = 8;
let page = 1;

// ── Color Utilities ──────────────────────────────────────────────────────────
function hex(h) {
  const n = h.replace("#", "");
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)];
}
function setFill(h) { const [r, g, b] = hex(h); doc.setFillColor(r, g, b); }
function setTxt(h)  { const [r, g, b] = hex(h); doc.setTextColor(r, g, b); }
function setDraw(h) { const [r, g, b] = hex(h); doc.setDrawColor(r, g, b); }

function pageHeader(num, label) {
  setTxt("888888"); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5);
  doc.text("VIDYA'S KITCHEN  ·  UI DESIGN SYSTEM SPECIFICATION", M, 24);
  if (label) {
    setTxt("BD2320");
    doc.text(`${num ? num + " · " : ""}${label.toUpperCase()}`, W - M, 24, { align: "right" });
  }
  setDraw("E2E8F0"); doc.setLineWidth(0.6); doc.line(M, 30, W - M, 30);
}

function pageFooter() {
  setDraw("E2E8F0"); doc.setLineWidth(0.6); doc.line(M, H - 28, W - M, H - 28);
  setTxt("999999"); doc.setFont("helvetica", "normal"); doc.setFontSize(7);
  doc.text("Vidya's Kitchen  ·  Outfit Typeface  ·  Multi-Surface Ecosystem  ·  Production v2.1", M, H - 16);
  doc.setFont("helvetica", "bold");
  doc.text(`${page} / 0${TOTAL_PAGES}`, W - M, H - 16, { align: "right" });
}

function sectionHead(num, title, subtitle, topY = 48) {
  setFill("BD2320"); doc.roundedRect(M, topY, 22, 14, 3, 3, "F");
  setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
  doc.text(num, M + 6, topY + 10);

  setTxt("111111"); doc.setFont("helvetica", "bold"); doc.setFontSize(15);
  doc.text(title, M + 30, topY + 11);

  if (subtitle) {
    setTxt("666666"); doc.setFont("helvetica", "normal"); doc.setFontSize(8);
    const subLines = doc.splitTextToSize(subtitle, CONTENT_W);
    doc.text(subLines, M, topY + 24);
    return topY + 24 + subLines.length * 10 + 6;
  }
  return topY + 22;
}

// ── Component Spec Card Helper ───────────────────────────────────────────────
function renderComponentCard(cy, compNumber, compTitle, specs, drawPreviewFn, cardHeight = 220) {
  setFill("FFFFFF"); setDraw("E2E8F0"); doc.setLineWidth(1);
  doc.roundedRect(M, cy, CONTENT_W, cardHeight, 10, 10, "FD");

  // Top header strip inside card
  setFill("F8FAFC"); doc.roundedRect(M, cy, CONTENT_W, 28, 10, 10, "F");
  setFill("FFFFFF"); doc.rect(M, cy + 18, CONTENT_W, 10, "F"); // flatten bottom corners
  setDraw("E2E8F0"); doc.setLineWidth(0.6); doc.line(M, cy + 28, M + CONTENT_W, cy + 28);

  // Badge
  setFill("BD2320"); doc.roundedRect(M + 12, cy + 7, 24, 14, 3, 3, "F");
  setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5);
  doc.text(compNumber, M + 15, cy + 17);

  // Title
  setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(9.5);
  doc.text(compTitle, M + 42, cy + 18);

  // Split: Left Preview (w: 220), Right Specs (w: CONTENT_W - 240)
  const previewW = 214;
  const previewH = cardHeight - 44;
  const previewX = M + 12;
  const previewY = cy + 34;

  // Preview container box
  setFill("F8F9FA"); setDraw("E2E8F0"); doc.setLineWidth(0.8);
  doc.roundedRect(previewX, previewY, previewW, previewH, 8, 8, "FD");

  // Run custom preview drawing
  if (drawPreviewFn) {
    drawPreviewFn(previewX, previewY, previewW, previewH);
  }

  // Right column specifications
  const specX = M + 238;
  const specW = CONTENT_W - 250;
  let specY = cy + 42;

  setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
  doc.text("TECHNICAL SPECIFICATIONS & MEASURED HARNESS", specX, specY);
  specY += 13;

  setTxt("334155"); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
  specs.forEach(spec => {
    const isBullet = spec.startsWith("•");
    const isIndent = spec.startsWith("  ");
    const cleanText = isBullet ? spec : `•  ${spec}`;
    
    if (spec.includes(":") && !isIndent) {
      const [key, val] = cleanText.split(/:(.+)/);
      doc.setFont("helvetica", "bold");
      setTxt("0F172A");
      doc.text(key + ":", isIndent ? specX + 10 : specX, specY);
      const keyW = doc.getTextWidth(key + ": ");
      doc.setFont("helvetica", "normal");
      setTxt("475569");
      const valWrapped = doc.splitTextToSize(val ? val.trim() : "", specW - keyW);
      doc.text(valWrapped, (isIndent ? specX + 10 : specX) + keyW, specY);
      specY += valWrapped.length * 11;
    } else {
      setTxt(isIndent ? "64748B" : "334155");
      const wrapped = doc.splitTextToSize(cleanText, isIndent ? specW - 12 : specW);
      doc.text(wrapped, isIndent ? specX + 10 : specX, specY);
      specY += wrapped.length * 11;
    }
  });

  return cy + cardHeight + 14;
}

// ── Vector Icon Helper ───────────────────────────────────────────────────────
function drawVectorIcon(name, x, y, sz) {
  const cx = x + sz / 2;
  const cy = y + sz / 2;
  const r = sz * 0.35;

  switch (name) {
    case "MapPin":
      setFill("BD2320"); doc.circle(cx, cy - r * 0.2, r * 0.65, "F");
      setFill("FFFFFF"); doc.circle(cx, cy - r * 0.2, r * 0.25, "F");
      setDraw("BD2320"); doc.setLineWidth(1.5);
      doc.line(cx, cy - r * 0.2 + r * 0.65, cx, cy + r * 0.85);
      break;
    case "CaretDown":
      setDraw("334155"); doc.setLineWidth(2);
      doc.line(cx - r * 0.6, cy - r * 0.25, cx, cy + r * 0.35);
      doc.line(cx, cy + r * 0.35, cx + r * 0.6, cy - r * 0.25);
      break;
    case "House":
      setDraw("FFFFFF"); doc.setLineWidth(1.5);
      doc.line(cx - r * 0.7, cy, cx, cy - r * 0.85);
      doc.line(cx, cy - r * 0.85, cx + r * 0.7, cy);
      doc.rect(cx - r * 0.55, cy, r * 1.1, r * 0.75);
      break;
    case "Receipt":
      setDraw("334155"); doc.setLineWidth(1.4);
      doc.rect(cx - r * 0.55, cy - r * 0.85, r * 1.1, r * 1.7);
      doc.line(cx - r * 0.3, cy - r * 0.35, cx + r * 0.3, cy - r * 0.35);
      doc.line(cx - r * 0.3, cy, cx + r * 0.3, cy);
      doc.line(cx - r * 0.3, cy + r * 0.35, cx + r * 0.3, cy + r * 0.35);
      break;
    case "User":
      setDraw("334155"); doc.setLineWidth(1.4);
      doc.circle(cx, cy - r * 0.35, r * 0.42, "S");
      doc.lines([[r * 0.65, 0], [0, r * 0.45], [-r * 1.3, 0], [0, -r * 0.45]], cx - r * 0.65, cy + r * 0.4);
      break;
    case "Plus":
      setDraw("FFFFFF"); doc.setLineWidth(2);
      doc.line(cx, cy - r * 0.65, cx, cy + r * 0.65);
      doc.line(cx - r * 0.65, cy, cx + r * 0.65, cy);
      break;
    case "Minus":
      setDraw("0F172A"); doc.setLineWidth(2);
      doc.line(cx - r * 0.65, cy, cx + r * 0.65, cy);
      break;
    case "ArrowRight":
      setDraw("BD2320"); doc.setLineWidth(1.8);
      doc.line(cx - r * 0.55, cy, cx + r * 0.55, cy);
      doc.line(cx + r * 0.1, cy - r * 0.45, cx + r * 0.55, cy);
      doc.line(cx + r * 0.1, cy + r * 0.45, cx + r * 0.55, cy);
      break;
    case "WhatsApp":
      setFill("25D366"); doc.circle(cx, cy, r * 0.9, "F");
      setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
      doc.text("WA", cx - 5.5, cy + 2.5);
      break;
    case "Lightning":
      setDraw("CA8A04"); setFill("FEF3C7"); doc.setLineWidth(1.2);
      doc.triangle(cx, cy - r * 0.9, cx - r * 0.5, cy + r * 0.1, cx + r * 0.1, cy + r * 0.1, "FD");
      doc.triangle(cx - r * 0.1, cy - r * 0.1, cx - r * 0.5, cy - r * 0.1, cx, cy + r * 0.9, "FD");
      break;
    case "Clock":
      setDraw("F5E32D"); doc.setLineWidth(1.4); doc.circle(cx, cy, r * 0.85, "S");
      doc.line(cx, cy, cx, cy - r * 0.55);
      doc.line(cx, cy, cx + r * 0.4, cy + r * 0.2);
      break;
    case "CheckCircle":
      setDraw("22C55E"); doc.setLineWidth(2);
      doc.line(cx - r * 0.55, cy, cx - r * 0.1, cy + r * 0.5);
      doc.line(cx - r * 0.1, cy + r * 0.5, cx + r * 0.65, cy - r * 0.4);
      break;
    case "Motorcycle":
      setDraw("34D469"); doc.setLineWidth(1.4);
      doc.circle(cx - r * 0.55, cy + r * 0.2, r * 0.35, "S");
      doc.circle(cx + r * 0.55, cy + r * 0.2, r * 0.35, "S");
      doc.line(cx - r * 0.2, cy + r * 0.2, cx + r * 0.2, cy + r * 0.2);
      doc.line(cx - r * 0.35, cy - r * 0.4, cx + r * 0.35, cy - r * 0.05);
      break;
    case "Wallet":
      setDraw("F5A623"); setFill("FEF3C7"); doc.setLineWidth(1.2);
      doc.roundedRect(cx - r * 0.75, cy - r * 0.5, r * 1.5, r, 2, 2, "FD");
      doc.circle(cx + r * 0.35, cy, r * 0.2, "F");
      break;
    case "Sparkle":
      setDraw("F5E32D"); doc.setLineWidth(1.4);
      doc.line(cx, cy - r * 0.85, cx, cy + r * 0.85);
      doc.line(cx - r * 0.85, cy, cx + r * 0.85, cy);
      doc.line(cx - r * 0.55, cy - r * 0.55, cx + r * 0.55, cy + r * 0.55);
      doc.line(cx + r * 0.55, cy - r * 0.55, cx - r * 0.55, cy + r * 0.55);
      break;
    case "CookingPot":
      setDraw("FFFFFF"); doc.setLineWidth(1.4);
      doc.roundedRect(cx - r * 0.75, cy - r * 0.35, r * 1.5, r * 0.9, 3, 3, "S");
      doc.line(cx - r * 0.75, cy - r * 0.35, cx + r * 0.75, cy - r * 0.35);
      break;
  }
}


// ══════════════════════════════════════════════════════════════════════════════
// PAGE 1: COVER & MULTI-SURFACE ECOSYSTEM
// ══════════════════════════════════════════════════════════════════════════════
pageHeader("", "Cover");

// Hero Banner
setFill("0A0A0A");
doc.roundedRect(M, 48, CONTENT_W, 150, 10, 10, "F");

// Brand Red Accent Strip
setFill("BD2320");
doc.roundedRect(M, 48, 6, 150, 3, 3, "F");

setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
doc.text("OFFICIAL SPECIFICATION  ·  MULTI-SURFACE ECOSYSTEM", M + 20, 72);

setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(26);
doc.text("Vidya's Kitchen", M + 20, 104);
setTxt("BD2320"); doc.text("— UI Design System", M + 230, 104);

setTxt("94A3B8"); doc.setFont("helvetica", "normal"); doc.setFontSize(9);
const covSub = "Unified visual baseline & component geometry across Customer PWA, Desktop Showcase, Driver Navigation, and Kitchen Dashboard.";
doc.text(doc.splitTextToSize(covSub, CONTENT_W - 40), M + 20, 122);

// Mini Metrics Row inside banner
setFill("141414");
doc.roundedRect(M + 20, 142, CONTENT_W - 40, 40, 6, 6, "F");

const covMetrics = [
  { label: "PRIMARY TYPEFACE", val: "Outfit (400 – 900)" },
  { label: "BRAND COLOR", val: "#BD2320 Crimson" },
  { label: "MIN TOUCH TARGET", val: "44px – 52px" },
  { label: "PURPOSE-BUILT SURFACES", val: "4 Dedicated Modes" }
];
covMetrics.forEach((m, i) => {
  const mx = M + 32 + i * ((CONTENT_W - 50) / 4);
  setTxt("64748B"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
  doc.text(m.label, mx, 156);
  setTxt("F8FAFC"); doc.setFont("helvetica", "bold"); doc.setFontSize(8.5);
  doc.text(m.val, mx, 170);
});

// 4 Surfaces Overview Cards
let p1y = 216;
setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(11);
doc.text("FOUR PURPOSE-BUILT PRODUCT SURFACES", M, p1y);
setTxt("64748B"); doc.setFont("helvetica", "normal"); doc.setFontSize(8);
doc.text("Each surface is individually tuned to user context rather than stretched over generic responsive breakpoints.", M, p1y + 11);

p1y += 24;
const p1CardW = (CONTENT_W - 14) / 2;
const p1CardH = 104;

const surfOverview = [
  {
    num: "01", name: "Customer Mobile PWA", env: "Home & Office · Handheld Mobile",
    bg: "#F5F5F7", accent: "#BD2320", radius: "18 – 28px", touch: "38 – 52px",
    desc: "Light glassmorphism over warm soft background. Food photography leads. Tactile buttons with generous pill radiuses."
  },
  {
    num: "02", name: "Desktop Showcase Landing", env: "Marketing & Acquisition · Large Screens",
    bg: "#0D0D0D", accent: "#BD2320", radius: "16 – 24px", touch: "Desktop / 52px",
    desc: "Cinematic dark canvas with ambient red spotlight and animated laser QR scanner targeting instant mobile adoption."
  },
  {
    num: "03", name: "Driver Delivery PWA", env: "Outdoor Sunlight · Two-Wheeler Transit",
    bg: "#0A0A0A", accent: "#34D469", radius: "14 – 16px", touch: "44 – 48px",
    desc: "High-contrast anti-glare dark shell. High-visibility green signal CTAs and high-contrast Cash-on-Delivery badges."
  },
  {
    num: "04", name: "Kitchen Station Dashboard", env: "Busy Prep Desk · 8+ Hr Continuous Shifts",
    bg: "#141414", accent: "#F5E32D", radius: "8 – 12px", touch: "44px Desktop",
    desc: "High-luminance prep cues, active order count beacons, real-time live storefront pill, and quick ticket timers."
  }
];

surfOverview.forEach((s, idx) => {
  const col = idx % 2;
  const row = Math.floor(idx / 2);
  const cx = M + col * (p1CardW + 14);
  const cy = p1y + row * (p1CardH + 12);

  setFill("FFFFFF"); setDraw("E2E8F0"); doc.setLineWidth(1);
  doc.roundedRect(cx, cy, p1CardW, p1CardH, 8, 8, "FD");

  // Top header bar
  setFill("0F172A"); doc.roundedRect(cx, cy, p1CardW, 26, 8, 8, "F");
  setFill("FFFFFF"); doc.rect(cx, cy + 18, p1CardW, 8, "F");
  setFill("BD2320"); doc.roundedRect(cx + 8, cy + 6, 18, 14, 3, 3, "F");
  setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
  doc.text(s.num, cx + 11, cy + 16);

  setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(8.5);
  doc.text(s.name, cx + 32, cy + 16);

  // Environment subtext
  setTxt("64748B"); doc.setFont("helvetica", "normal"); doc.setFontSize(7);
  doc.text(s.env, cx + 10, cy + 38);

  // Description
  setTxt("334155"); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
  const dLines = doc.splitTextToSize(s.desc, p1CardW - 20);
  doc.text(dLines, cx + 10, cy + 50);

  // Token pills row
  const pillY = cy + 78;
  setFill("F1F5F9"); doc.roundedRect(cx + 10, pillY, 68, 16, 4, 4, "F");
  setTxt("64748B"); doc.setFont("helvetica", "normal"); doc.setFontSize(6); doc.text("CANVAS", cx + 14, pillY + 7);
  setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); doc.text(s.bg, cx + 14, pillY + 13);

  setFill("F1F5F9"); doc.roundedRect(cx + 84, pillY, 78, 16, 4, 4, "F");
  setTxt("64748B"); doc.setFont("helvetica", "normal"); doc.setFontSize(6); doc.text("ACCENT", cx + 88, pillY + 7);
  setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); doc.text(s.accent, cx + 88, pillY + 13);

  setFill("F1F5F9"); doc.roundedRect(cx + 168, pillY, 78, 16, 4, 4, "F");
  setTxt("64748B"); doc.setFont("helvetica", "normal"); doc.setFontSize(6); doc.text("RADIUS", cx + 172, pillY + 7);
  setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5); doc.text(s.radius, cx + 172, pillY + 13);
});

// Bottom Note Box
const p1BottomY = p1y + 2 * (p1CardH + 12) + 8;
setFill("F0FDF4"); setDraw("86EFAC"); doc.setLineWidth(1);
doc.roundedRect(M, p1BottomY, CONTENT_W, 46, 8, 8, "FD");
setTxt("166534"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
doc.text("DESIGN SYSTEM ARCHITECTURAL MANDATE", M + 14, p1BottomY + 16);
setTxt("14532D"); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
doc.text("All four surfaces share Outfit typography tokens and touch target compliance (44–52px). Colors, radiuses, and density tokens are strictly isolated per surface to protect organic food aesthetics on consumer apps and rapid readability on operations consoles.", M + 14, p1BottomY + 28, { maxWidth: CONTENT_W - 28 });

pageFooter();


// ══════════════════════════════════════════════════════════════════════════════
// PAGE 2: 01 · TYPOGRAPHY HIERARCHY & SCALE
// ══════════════════════════════════════════════════════════════════════════════
page++; doc.addPage();
pageHeader("01", "Typography Hierarchy");

let p2y = sectionHead("01", "Typography Hierarchy & Scale",
  "Outfit is used exclusively across all 4 surfaces. Engineered for maximum legibility in high-tempo mobile food ordering.", 48);

// Typeface Banner Card
setFill("FFFFFF"); setDraw("E2E8F0"); doc.setLineWidth(1);
doc.roundedRect(M, p2y, CONTENT_W, 52, 8, 8, "FD");

// Big Aa Specimen
setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(30); doc.text("Aa", M + 16, p2y + 38);
setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.text("OUTFIT TYPEFACE", M + 64, p2y + 18);
setTxt("64748B"); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
doc.text("Google Fonts  ·  Geometric Sans  ·  High x-height  ·  Curved terminals  ·  Zero secondary display font permitted", M + 64, p2y + 29);

const weights = ["Regular 400", "Medium 500", "SemiBold 600", "Bold 700", "ExtraBold 800", "Black 900"];
const wtW = (CONTENT_W - 70) / weights.length;
weights.forEach((w, i) => {
  setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
  doc.text(w, M + 64 + i * wtW, p2y + 44);
});

p2y += 64;

// Typography Scale Table
setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(10);
doc.text("COMPLETE TYPOGRAPHY SCALE SPECIFICATION", M, p2y);
p2y += 10;

// Table column coordinates: Total CONTENT_W = 523.28
const typoCols = [M + 8, M + 124, M + 172, M + 224, M + 296, M + 356];
const typoHeaders = ["LEVEL / ROLE", "FONT SIZE", "LINE HT", "WEIGHT", "TRACKING", "APPLICATION / USAGE"];

setFill("0F172A"); doc.rect(M, p2y, CONTENT_W, 18, "F");
setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
typoHeaders.forEach((h, i) => doc.text(h, typoCols[i], p2y + 12));
p2y += 18;

const typoData = [
  ["Display · Hey Name", "36px", "1.1",  "ExtraBold 800", "-0.5px",  "Home screen greeting hero text"],
  ["Hero · Price / ID",  "30px", "1.12", "ExtraBold 800", "-0.02em", "Featured order ID, large metrics"],
  ["Title · H1",         "24px", "1.15", "ExtraBold 800", "-0.02em", "Screen titles: Checkout, Browse Menu"],
  ["Title Sm · H2",      "20px", "1.2",  "ExtraBold 800", "+0.01em", "Modal / sheet titles, OTP, Location"],
  ["Section Title",      "17px", "1.3",  "ExtraBold 800", "+0.01em", "Section headers: Your Order, Account"],
  ["Card Title",         "18px", "1.35", "Bold 700",      "normal",  "Dish names on cards & rows"],
  ["Body Regular",       "15px", "1.55", "Medium 500",    "normal",  "Default paragraph & item descriptions"],
  ["Body Medium",        "15px", "1.5",  "SemiBold 600",  "normal",  "Prices, slot times, delivery info"],
  ["Caption / Eyebrow",  "13px", "1.4",  "SemiBold 600",  "normal",  "Muted helper text, 'Delivering to'"],
  ["Dish Title Grid",    "16px", "1.35", "Bold 700",      "normal",  "Carousel / grid menu dish cards"],
  ["Price Display",      "16px", "1.2",  "Black 900",     "normal",  "Standard price tags & totals"],
  ["Button CTA",         "15px", "1.2",  "ExtraBold 800", "-0.01em", "Primary CTA & '+ ADD' button text"],
  ["Micro / Badge",      "10px", "1.2",  "ExtraBold 800", "+0.04em", "'20% Off', 'INSTANT', cart badge count"]
];

typoData.forEach((row, i) => {
  const rH = 17;
  setFill(i % 2 === 0 ? "FFFFFF" : "F8FAFC");
  doc.rect(M, p2y, CONTENT_W, rH, "F");
  setDraw("F1F5F9"); doc.setLineWidth(0.4); doc.line(M, p2y + rH, M + CONTENT_W, p2y + rH);

  setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5);
  doc.text(row[0], typoCols[0], p2y + 11.5);

  setTxt("BD2320"); doc.text(row[1], typoCols[1], p2y + 11.5);

  setTxt("64748B"); doc.setFont("helvetica", "normal");
  doc.text(row[2], typoCols[2], p2y + 11.5);
  doc.text(row[3], typoCols[3], p2y + 11.5);
  doc.text(row[4], typoCols[4], p2y + 11.5);
  setTxt("334155");
  doc.text(row[5], typoCols[5], p2y + 11.5);
  p2y += rH;
});

p2y += 18;

// Live Typographic Specimen Card with Clean Breathing Room
setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(10);
doc.text("LIVE VISUAL TYPOGRAPHY SPECIMEN (MEASURED IMPLEMENTATION)", M, p2y);
p2y += 10;

setFill("FFFFFF"); setDraw("E2E8F0"); doc.setLineWidth(1);
doc.roundedRect(M, p2y, CONTENT_W, 170, 8, 8, "FD");

// Specimen 1: Greeting
setTxt("94A3B8"); doc.setFont("helvetica", "normal"); doc.setFontSize(8);
doc.text("Midday feast?", M + 16, p2y + 20);

setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(22);
doc.text("Hey, ", M + 16, p2y + 44);
setTxt("BD2320"); doc.text("Santhosh.", M + 68, p2y + 44);

// Callout Tag
setFill("F1F5F9"); doc.roundedRect(M + 250, p2y + 32, 230, 16, 4, 4, "F");
setTxt("475569"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
doc.text("SPECIMEN A:  36px ExtraBold 800  ·  #BD2320 Accent", M + 258, p2y + 43);

setDraw("E2E8F0"); doc.setLineWidth(0.6); doc.line(M + 16, p2y + 54, M + CONTENT_W - 16, p2y + 54);

// Specimen 2: Dish Title & Chips
setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(14);
doc.text("Mom's Recipe — Chicken Gravy", M + 16, p2y + 74);

// Price Pill
setFill("0F172A"); doc.roundedRect(M + 246, p2y + 63, 46, 16, 8, 8, "F");
setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5); doc.text("Rs. 349", M + 253, p2y + 74);

// Offer Badge Pill
setFill("BD2320"); doc.roundedRect(M + 298, p2y + 63, 46, 16, 4, 4, "F");
setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5); doc.text("20% Off!", M + 303, p2y + 74);

// Callout Tag
setFill("F1F5F9"); doc.roundedRect(M + 350, p2y + 63, 150, 16, 4, 4, "F");
setTxt("475569"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
doc.text("SPECIMEN B:  16px Bold + Micro", M + 356, p2y + 74);

setDraw("E2E8F0"); doc.setLineWidth(0.6); doc.line(M + 16, p2y + 88, M + CONTENT_W - 16, p2y + 88);

// Specimen 3: Description Body
setTxt("334155"); doc.setFont("helvetica", "normal"); doc.setFontSize(8.5);
doc.text("Slow-simmered chicken with crushed black pepper, shallots, and hand-ground Sivakasi spices.", M + 16, p2y + 104);
setTxt("94A3B8"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
doc.text("SPECIMEN C:  15px Medium 500 Body token  ·  #334155", M + 16, p2y + 116);

setDraw("E2E8F0"); doc.setLineWidth(0.6); doc.line(M + 16, p2y + 124, M + CONTENT_W - 16, p2y + 124);

// Specimen 4: Action Badges & Buttons
// INSTANT badge
setFill("DCFCE7"); setDraw("86EFAC"); doc.setLineWidth(0.8);
doc.roundedRect(M + 16, p2y + 134, 68, 22, 11, 11, "FD");
setFill("CA8A04"); doc.circle(M + 27, p2y + 145, 3.5, "F");
setTxt("166534"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
doc.text("INSTANT", M + 34, p2y + 148);

// ADD button
setFill("BD2320"); doc.roundedRect(M + 94, p2y + 134, 64, 22, 11, 11, "F");
setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
doc.text("+ ADD", M + 112, p2y + 148);

// Callout Tag
setFill("F1F5F9"); doc.roundedRect(M + 168, p2y + 137, 280, 16, 4, 4, "F");
setTxt("475569"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
doc.text("SPECIMEN D:  10px Micro ExtraBold Badge  ·  15px CTA Button 800", M + 176, p2y + 148);

pageFooter();


// ══════════════════════════════════════════════════════════════════════════════
// PAGE 3: 02 · COLOGRAPHY — ALL FOUR DESIGNS
// ══════════════════════════════════════════════════════════════════════════════
page++; doc.addPage();
pageHeader("02", "Colography — All Four Designs");

let p3y = sectionHead("02", "Colography & Surface Color Palettes",
  "Tailored color architecture across Customer PWA, Desktop Showcase, Driver Navigation, and Kitchen Dashboard.", 48);

// Render 4 clean surface palette cards (2 columns x 2 rows)
const p3CardW = (CONTENT_W - 14) / 2;
const p3CardH = 175;

const surfacePalettes = [
  {
    title: "CUSTOMER MOBILE PWA",
    surfaceEnv: "Soft Daylight · Warm Food Canvas",
    bgTag: "#F5F5F7",
    tokens: [
      { name: "Brand Crimson", hex: "BD2320", role: "Primary CTA & Active Tabs", dark: true },
      { name: "Canvas Warm Gray", hex: "F5F5F7", role: "Page Canvas Background", dark: false },
      { name: "Surface White", hex: "FFFFFF", role: "Cards & Bottom Sheets", dark: false, border: true },
      { name: "Charcoal Text", hex: "1A1A1A", role: "Primary Headings & Titles", dark: true },
      { name: "Muted Text", hex: "666666", role: "Descriptions & Eyebrows", dark: true },
      { name: "Discount Amber", hex: "F59E0B", role: "20% Off Offer Badge", dark: false },
      { name: "Instant Green", hex: "22C55E", role: "Instant Delivery Badge", dark: false },
      { name: "Glass Surface", hex: "E5E7EB", role: "rgba(255,255,255,0.72) Glass", dark: false }
    ]
  },
  {
    title: "DESKTOP SHOWCASE LANDING",
    surfaceEnv: "Cinematic Dark · Radial Spotlight",
    bgTag: "#0D0D0D",
    tokens: [
      { name: "Stage Dark Canvas", hex: "0D0D0D", role: "Cinematic Dark Canvas", dark: true },
      { name: "Card Shell Glass", hex: "1A1A1A", role: "QR Scanner Glass Station", dark: true },
      { name: "WhatsApp Green", hex: "25D366", role: "Primary Launch Trigger", dark: false },
      { name: "Crimson Ambient", hex: "BD2320", role: "Spotlight Ambient Glow", dark: true },
      { name: "Laser Flare Red", hex: "FF4D4D", role: "Animated QR Scanning Beam", dark: true },
      { name: "Pure White", hex: "FFFFFF", role: "Hero Typography", dark: false, border: true },
      { name: "Muted Slate", hex: "888888", role: "Platform Meta Details", dark: true },
      { name: "Hairline Border", hex: "333333", role: "rgba(255,255,255,0.08) Border", dark: true }
    ]
  },
  {
    title: "DRIVER DELIVERY PWA",
    surfaceEnv: "Outdoor Sunlight · Anti-Glare Transit",
    bgTag: "#0A0A0A",
    tokens: [
      { name: "Outdoor Midnight", hex: "0A0A0A", role: "Anti-Glare Outdoor Canvas", dark: true },
      { name: "Signal Green", hex: "34D469", role: "Dispatch & Complete CTA", dark: false },
      { name: "COD Cash Amber", hex: "F5A623", role: "Cash On Delivery Alert", dark: false },
      { name: "Urgency Flag Red", hex: "E84040", role: "Delay & Warning Timer", dark: true },
      { name: "Order Card Shell", hex: "161616", role: "Order Container Backdrop", dark: true },
      { name: "Tactile Border", hex: "2A2A2A", role: "Card Separation Hairline", dark: true },
      { name: "High-Focus White", hex: "FFFFFF", role: "Address & Customer Info", dark: false, border: true },
      { name: "Secondary Muted", hex: "CCCCCC", role: "Subtext on Dark Canvas", dark: false }
    ]
  },
  {
    title: "KITCHEN STATION DASHBOARD",
    surfaceEnv: "Prep Desk · High-Luminance Contrast",
    bgTag: "#141414",
    tokens: [
      { name: "Station Shell Dark", hex: "141414", role: "Dashboard App Shell", dark: true },
      { name: "Active Action Yellow", hex: "F5E32D", role: "Active Nav Beacon & Approve", dark: false },
      { name: "Live Store Green", hex: "86EFAC", role: "Storefront Live Status Pill", dark: false },
      { name: "Ticket Panel Dark", hex: "0D0D0D", role: "Kitchen Order Card Shell", dark: true },
      { name: "Alert Crimson", hex: "BD2320", role: "Error & Overdue Alert", dark: true },
      { name: "High-Focus White", hex: "FFFFFF", role: "Recipe Names & Quantities", dark: false, border: true },
      { name: "Control Divider", hex: "262626", role: "Module Bounding Dividers", dark: true },
      { name: "Timer Secondary", hex: "777777", role: "Elapsed Time Counters", dark: true }
    ]
  }
];

surfacePalettes.forEach((pal, idx) => {
  const col = idx % 2;
  const row = Math.floor(idx / 2);
  const cx = M + col * (p3CardW + 14);
  const cy = p3y + row * (p3CardH + 12);

  setFill("FFFFFF"); setDraw("E2E8F0"); doc.setLineWidth(1);
  doc.roundedRect(cx, cy, p3CardW, p3CardH, 8, 8, "FD");

  // Header strip
  setFill("F8FAFC"); doc.roundedRect(cx, cy, p3CardW, 26, 8, 8, "F");
  setFill("FFFFFF"); doc.rect(cx, cy + 18, p3CardW, 8, "F");
  setDraw("E2E8F0"); doc.setLineWidth(0.6); doc.line(cx, cy + 26, cx + p3CardW, cy + 26);

  setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(8.5);
  doc.text(pal.title, cx + 10, cy + 17);

  // Surface Canvas Pill
  setFill("E2E8F0"); doc.roundedRect(cx + p3CardW - 74, cy + 6, 64, 14, 3, 3, "F");
  setTxt("475569"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
  doc.text(`BG: ${pal.bgTag}`, cx + p3CardW - 68, cy + 16);

  // 8 Token Chips Grid: 4 columns x 2 rows
  const swatchColW = (p3CardW - 24) / 4;
  const swatchH = 22;

  pal.tokens.forEach((t, ti) => {
    const sc = ti % 4;
    const sr = Math.floor(ti / 4);
    const sx = cx + 8 + sc * (swatchColW + 4);
    const sy = cy + 34 + sr * 66;

    // Color Box
    setFill(t.hex);
    if (t.border) {
      setDraw("CBD5E1"); doc.setLineWidth(0.75);
      doc.roundedRect(sx, sy, swatchColW, swatchH, 4, 4, "FD");
    } else {
      doc.roundedRect(sx, sy, swatchColW, swatchH, 4, 4, "F");
    }

    // Hex label below swatch
    setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
    doc.text(`#${t.hex}`, sx, sy + swatchH + 9);

    // Name
    setTxt("334155"); doc.setFont("helvetica", "bold"); doc.setFontSize(6);
    const nameLines = doc.splitTextToSize(t.name, swatchColW);
    doc.text(nameLines[0], sx, sy + swatchH + 18);

    // Role
    setTxt("94A3B8"); doc.setFont("helvetica", "normal"); doc.setFontSize(5.5);
    const roleLines = doc.splitTextToSize(t.role, swatchColW);
    doc.text(roleLines[0], sx, sy + swatchH + 26);
  });
});

// Color Token Governance Note
const p3BottomY = p3y + 2 * (p3CardH + 12) + 6;
setFill("F8FAFC"); setDraw("E2E8F0"); doc.setLineWidth(1);
doc.roundedRect(M, p3BottomY, CONTENT_W, 46, 8, 8, "FD");

setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
doc.text("COLOR TOKEN ISOLATION & ACCESSIBILITY GOVERNANCE", M + 14, p3BottomY + 16);

setTxt("475569"); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
doc.text("1.  Strict Surface Isolation: #BD2320 is dedicated to Customer PWA; #F5E32D is dedicated to Kitchen KDS; #34D469 to Driver transit.", M + 14, p3BottomY + 27);
doc.text("2.  Zero Pure Black (#000000) on Consumer PWA: Always use Charcoal #1A1A1A on #F5F5F7 to preserve organic food warmth.", M + 14, p3BottomY + 37);

pageFooter();


// ══════════════════════════════════════════════════════════════════════════════
// PAGE 4: 03 · ICONOGRAPHY SYSTEM & TOUCH HARNESSES
// ══════════════════════════════════════════════════════════════════════════════
page++; doc.addPage();
pageHeader("03", "Iconography System");

let p4y = sectionHead("03", "Iconography System & Touch Bounding Harnesses",
  "Phosphor Icons library — Regular (1.5px stroke) for passive state; Bold (2.0px stroke) for active tabs and action buttons.", 48);

// Icon Family Banner
setFill("FFFFFF"); setDraw("E2E8F0"); doc.setLineWidth(1);
doc.roundedRect(M, p4y, CONTENT_W, 36, 8, 8, "FD");
setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(9);
doc.text("CORE ICON FAMILY: PHOSPHOR ICONS (phosphor.dev)", M + 14, p4y + 14);
setTxt("64748B"); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
doc.text("All icons share consistent stroke caps, rounded joins, and strict touch bounding wells that adhere to WCAG 2.1 AAA accessibility.", M + 14, p4y + 25);

p4y += 44;

// Sizing Matrix Table
setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(10);
doc.text("SIZING MATRIX & TOUCH BOUNDING HARNESSES", M, p4y);
p4y += 10;

const szCols = [M + 8, M + 80, M + 165, M + 265, M + 345];
setFill("0F172A"); doc.rect(M, p4y, CONTENT_W, 18, "F");
setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
["GLYPH SIZE", "STROKE WEIGHT", "INTERACTIVE WELL", "SURFACE", "PRIMARY USAGE"].forEach((h, i) => doc.text(h, szCols[i], p4y + 12));
p4y += 18;

const iconSizes = [
  ["16px", "Bold 2.0px", "24px pill well", "All Surfaces", "Badges, chevrons, ratings, nav indicators"],
  ["18 – 20px", "Regular / Bold", "36 – 40px circle", "Customer PWA", "Tab icons (House, Receipt, User), search field"],
  ["22px", "Fill / Bold", "48px NAV_CIRCLE", "Customer PWA", "Exact bottom dock container (NAV_CIRCLE=48)"],
  ["24px", "Bold 2.0px", "44px pill target", "All Surfaces", "Location MapPin, WhatsApp primary action trigger"],
  ["32px", "Bold 2.0px", "44px circle", "Customer PWA", "Quantity stepper (+ / -) circular touch targets"],
  ["52px well", "Fill 26px glyph", "52×52px r:18 well", "Customer PWA", "Dish size variant selector well in SizeQtyDrawer"]
];

iconSizes.forEach((row, i) => {
  const rH = 16;
  setFill(i % 2 === 0 ? "FFFFFF" : "F8FAFC");
  doc.rect(M, p4y, CONTENT_W, rH, "F");
  setDraw("F1F5F9"); doc.setLineWidth(0.4); doc.line(M, p2y + rH, M + CONTENT_W, p2y + rH);

  setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5);
  doc.text(row[0], szCols[0], p4y + 11);

  setTxt("475569"); doc.setFont("helvetica", "normal");
  doc.text(row[1], szCols[1], p4y + 11);
  doc.setFont("helvetica", "bold"); doc.text(row[2], szCols[2], p4y + 11);
  doc.setFont("helvetica", "normal"); setTxt("BD2320"); doc.text(row[3], szCols[3], p4y + 11);
  setTxt("334155"); doc.text(row[4], szCols[4], p4y + 11);
  p4y += rH;
});

p4y += 18;

// Icon Visual Representation Grid (16 icons, 4 columns x 4 rows)
setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(10);
doc.text("CORE ICON REGISTRY & VISUAL SYMBOLS", M, p4y);
p4y += 10;

const iconRegistry = [
  { sym: "MapPin", name: "MapPin", cat: "Location", role: "Header delivery pin", token: "#BD2320 in #FEE2E2", bg: "FEE2E2" },
  { sym: "CaretDown", name: "CaretDown", cat: "Navigation", role: "Address dropdown", token: "#334155 (14px)", bg: "F1F5F9" },
  { sym: "House", name: "House", cat: "Navigation", role: "Bottom nav active", token: "White in #BD2320", bg: "BD2320" },
  { sym: "Receipt", name: "Receipt", cat: "Navigation", role: "Order history tab", token: "#334155 (22px)", bg: "F1F5F9" },
  { sym: "User", name: "User", cat: "Navigation", role: "Account profile tab", token: "#334155 (22px)", bg: "F1F5F9" },
  { sym: "Plus", name: "Plus", cat: "Action", role: "ADD button / Stepper", token: "White in #BD2320", bg: "BD2320" },
  { sym: "Minus", name: "Minus", cat: "Action", role: "Stepper decrement", token: "#0F172A in pill", bg: "E2E8F0" },
  { sym: "ArrowRight", name: "ArrowRight", cat: "Action", role: "Nav forward trigger", token: "#BD2320 in #FEE2E2", bg: "FEE2E2" },
  { sym: "WhatsApp", name: "WhatsApp", cat: "Order", role: "Instant WhatsApp bot", token: "White in #25D366", bg: "25D366" },
  { sym: "Lightning", name: "Lightning", cat: "Status", role: "INSTANT speed badge", token: "#CA8A04 in #FEF3C7", bg: "FEF3C7" },
  { sym: "Clock", name: "Clock", cat: "Telemetry", role: "Station order timer", token: "#F5E32D in station", bg: "1A1A1A" },
  { sym: "CheckCircle", name: "CheckCircle", cat: "Success", role: "Order SLA complete", token: "#22C55E ring", bg: "F0FDF4" },
  { sym: "Motorcycle", name: "Motorcycle", cat: "Driver", role: "Driver delivery map", token: "#34D469 in night", bg: "141414" },
  { sym: "Wallet", name: "Wallet/COD", cat: "Payment", role: "Cash collection alert", token: "#000 in #F5A623", bg: "F5A623" },
  { sym: "Sparkle", name: "Sparkle", cat: "AI Intel", role: "Dynamic pricing", token: "#F5E32D on dark", bg: "111111" },
  { sym: "CookingPot", name: "CookingPot", cat: "Kitchen", role: "Kitchen prep queue", token: "White in #141414", bg: "141414" }
];

const icCardW = (CONTENT_W - 24) / 4;
const icCardH = 56;

iconRegistry.forEach((ic, idx) => {
  const col = idx % 4;
  const row = Math.floor(idx / 4);
  const ix = M + col * (icCardW + 8);
  const iy = p4y + row * (icCardH + 8);

  setFill("FFFFFF"); setDraw("E2E8F0"); doc.setLineWidth(0.8);
  doc.roundedRect(ix, iy, icCardW, icCardH, 6, 6, "FD");

  // Icon symbol box
  setFill(ic.bg); doc.roundedRect(ix + 6, iy + 8, 30, 30, 5, 5, "F");
  drawVectorIcon(ic.sym, ix + 6, iy + 8, 30);

  // Category pill (placed cleanly to avoid collision!)
  setFill("F1F5F9"); doc.roundedRect(ix + 42, iy + 7, icCardW - 48, 12, 3, 3, "F");
  setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(5.5);
  doc.text(ic.cat.toUpperCase(), ix + 46, iy + 15);

  // Icon name
  setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
  doc.text(ic.name, ix + 42, iy + 28);

  // Role
  setTxt("64748B"); doc.setFont("helvetica", "normal"); doc.setFontSize(6);
  const rLines = doc.splitTextToSize(ic.role, icCardW - 46);
  doc.text(rLines[0], ix + 42, iy + 37);

  // Token
  setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(5.5);
  doc.text(ic.token, ix + 42, iy + 47);
});

// WCAG Compliance Box
const p4BottomY = p4y + 4 * (icCardH + 8) + 8;
setFill("FEF3C7"); setDraw("F59E0B"); doc.setLineWidth(1);
doc.roundedRect(M, p4BottomY, CONTENT_W, 40, 8, 8, "FD");
setTxt("92400E"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
doc.text("MANDATORY TOUCH TARGET HARNESS — WCAG 2.1 AAA", M + 14, p4BottomY + 14);
setTxt("78350F"); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
const wcagText = "Visual icon glyphs may be 16–24px, but their interactive bounding box must NEVER drop below 44×44px on any handheld surface. Primary CTA wells extend to 48–52px height.";
doc.text(doc.splitTextToSize(wcagText, CONTENT_W - 28), M + 14, p4BottomY + 25);

pageFooter();


// ══════════════════════════════════════════════════════════════════════════════
// PAGE 5: 04 · COMPONENTS & MEASUREMENTS (PART 1 — HEADER, TABS, NAV)
// ══════════════════════════════════════════════════════════════════════════════
page++; doc.addPage();
pageHeader("04", "Components & Measurements · Part 1");

let p5y = sectionHead("04", "Component Specs — Exact Measurements (Part 1)",
  "Visual architecture, exact radii, touch bounds, and styling from MobileHomeScreen.tsx.", 48);

// C1: Location Delivery Header Pill
p5y = renderComponentCard(
  p5y,
  "01",
  "LOCATION DELIVERY HEADER PILL (MobileHomeScreen.tsx)",
  [
    "Source: Location Header bar in MobileHomeScreen.tsx",
    "Dimensions: Height: 44px (touch target) · Width: 100% full-width header",
    "Outer Track: Background: transparent · padding: 0 16px · gap: 10px",
    "Location Icon Well: 36×36px circle · bg: rgba(189,35,32,0.10) red glow",
    "  border: 1px solid rgba(189,35,32,0.25) · MapPin 16px fill #BD2320",
    "Eyebrow: 13px SemiBold 600 · color: rgba(0,0,0,0.42) · 'Delivering to • Home'",
    "Address Line: 15px Bold 700 Outfit · #1A1A1A · letterSpacing: 0.02em",
    "Caret Indicator: 14px SVG stroke rgba(0,0,0,0.30) · rotates 180° when open"
  ],
  (px, py, pw, ph) => {
    const midY = py + ph / 2;
    // Location Pill Preview
    setFill("FFFFFF"); setDraw("E2E8F0"); doc.setLineWidth(1);
    doc.roundedRect(px + 8, midY - 22, pw - 16, 44, 22, 22, "FD");

    // Pin circle
    setFill("FEE2E2"); doc.circle(px + 28, midY, 13, "F");
    setFill("BD2320"); doc.circle(px + 28, midY - 2, 4.5, "F");
    setDraw("BD2320"); doc.setLineWidth(1.2); doc.line(px + 28, midY + 2.5, px + 28, midY + 6);

    // Text
    setTxt("64748B"); doc.setFont("helvetica", "normal"); doc.setFontSize(7);
    doc.text("Delivering to • Home", px + 48, midY - 4);
    setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(8.5);
    doc.text("5th Street 10th Main Rd 62...", px + 48, midY + 8);

    // Caret
    setDraw("64748B"); doc.setLineWidth(1.5);
    doc.line(px + pw - 24, midY - 2, px + pw - 20, midY + 3);
    doc.line(px + pw - 20, midY + 3, px + pw - 16, midY - 2);

    // Callout dimensions
    setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
    doc.text("h: 44px  ·  r: 999px pill", px + 14, py + 16);
  },
  150
);

// C2: Category Segmented Filter Tabs
p5y = renderComponentCard(
  p5y,
  "02",
  "CATEGORY SEGMENTED FILTER TABS (MobileHomeScreen.tsx)",
  [
    "Source: Filter Tab switcher in MobileHomeScreen.tsx",
    "Outer Capsule Track: Height: 44px · Radius: 999px (full pill)",
    "  Background: #FFFFFF · border: 1px solid rgba(0,0,0,0.06)",
    "  Padding: 4px internal breathing margin around active segment",
    "Active Segment: Height: 36px · Radius: 999px · bg: #BD2320 (Crimson)",
    "  Label: 12px Bold 700 Outfit · #FFFFFF · letterSpacing: 0.01em",
    "  Active width: 'Kitchen picks' (104px) · 'Favorites' (94px)",
    "Inactive Tab: Height: 36px · transparent · color: #666666 (500)",
    "  Transition: spring physics on active pill layoutId slider"
  ],
  (px, py, pw, ph) => {
    const midY = py + ph / 2;
    // Outer white capsule
    setFill("FFFFFF"); setDraw("E2E8F0"); doc.setLineWidth(1);
    doc.roundedRect(px + 12, midY - 20, 186, 40, 20, 20, "FD");

    // Active Tab Pill
    setFill("BD2320"); doc.roundedRect(px + 16, midY - 16, 100, 32, 16, 16, "F");
    setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(8.5);
    doc.text("Kitchen picks", px + 28, midY + 4);

    // Inactive Tab
    setTxt("64748B"); doc.setFont("helvetica", "normal"); doc.setFontSize(8);
    doc.text("Favorites", px + 130, midY + 4);

    // Dimension callout
    setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
    doc.text("Outer: 44px  |  Active Tab: 36px  |  r: 999px", px + 14, py + 16);
  },
  150
);

// C3: Floating Bottom Navigation Dock
p5y = renderComponentCard(
  p5y,
  "03",
  "FLOATING BOTTOM NAVIGATION DOCK (MobileHomeScreen.tsx)",
  [
    "Source: Floating Nav bar in MobileHomeScreen.tsx",
    "Dock Dimensions: Height: 58px · Radius: 999px · margin: 0 16px bottom",
    "  Background: rgba(255,255,255,0.92) · backdropFilter: blur(20px)",
    "  Border: 1px solid rgba(0,0,0,0.06) · shadow: 0 12px 36px rgba(0,0,0,0.12)",
    "Active Home Tab: Height: 44px · Radius: 999px · bg: #BD2320 (Crimson)",
    "  Icon: 20px fill white · Label: 12px Bold 700 white · activeWidth: 104px",
    "Order Tab with Badge: 44px circle · Receipt icon 20px #666666",
    "  Notification Badge: 16×16px red circle (#BD2320) · white numeral '1'",
    "Action Trigger: 42×42px circular button · bg: #F87171 · white arrow icon"
  ],
  (px, py, pw, ph) => {
    const midY = py + ph / 2;
    // Dock container
    setFill("FFFFFF"); setDraw("CBD5E1"); doc.setLineWidth(1);
    doc.roundedRect(px + 8, midY - 24, pw - 16, 48, 24, 24, "FD");

    // Active Home pill
    setFill("BD2320"); doc.roundedRect(px + 14, midY - 18, 70, 36, 18, 18, "F");
    drawVectorIcon("House", px + 22, midY - 10, 16);
    setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
    doc.text("Home", px + 44, midY + 4);

    // Orders tab with badge
    drawVectorIcon("Receipt", px + 98, midY - 10, 18);
    setFill("BD2320"); doc.circle(px + 116, midY - 10, 5, "F");
    setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(5.5);
    doc.text("1", px + 114, midY - 8);

    // User tab
    drawVectorIcon("User", px + 134, midY - 10, 18);

    // Forward action circle
    setFill("F87171"); doc.circle(px + pw - 24, midY, 14, "F");
    drawVectorIcon("ArrowRight", px + pw - 32, midY - 8, 16);

    // Callout
    setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
    doc.text("h: 58px  ·  r: 999px  ·  blur(20px)", px + 14, py + 14);
  },
  150
);

pageFooter();


// ══════════════════════════════════════════════════════════════════════════════
// PAGE 6: 04 · COMPONENTS & MEASUREMENTS (PART 2 — FOOD CARD & WHATSAPP BOT)
// ══════════════════════════════════════════════════════════════════════════════
page++; doc.addPage();
pageHeader("04", "Components & Measurements · Part 2");

let p6y = sectionHead("04", "Component Specs — Exact Measurements (Part 2)",
  "BestSelling food card architecture and floating Vidya Bot WhatsApp row.", 48);

// C4: BestSelling Food Menu Card
p6y = renderComponentCard(
  p6y,
  "04",
  "BESTSELLING FOOD MENU CARD (MobileHomeScreen.tsx)",
  [
    "Source: BestSellingCard component in MobileHomeScreen.tsx",
    "Card Frame: Width: 280–290px · Height: 340px · Radius: 28px",
    "  Background: rgba(255,255,255,0.78) glassmorphism · padding: 10px",
    "  Border: 1px solid rgba(0,0,0,0.06) · shadow: 0 4px 20px rgba(0,0,0,0.06)",
    "Image Container: Width: 100% · Height: 220px · Radius: 22px",
    "  Overlaid Price Pill (Top-Left): padding: 5px 11px · radius: 12px · #0F172A",
    "    Font: 13px Mono 800 Outfit · color: #FFFFFF · 'Rs. 349'",
    "  Overlaid Offer Badge (Top-Right): padding: 4px 8px · radius: 8px · #F59E0B",
    "    Font: 10px Micro ExtraBold 800 · color: #FFFFFF · '20% Off!'",
    "Dish Name: 14px Bold 800 Outfit · #1A1A1A · 2-line clamp · centered",
    "+ ADD CTA Button: Height: 38px · minWidth: 124px · radius: 999px (full pill)",
    "  Background: #BD2320 (Crimson) · shadow: 0 4px 14px rgba(189,35,32,0.25)"
  ],
  (px, py, pw, ph) => {
    // Scaled Card Representation: fits cleanly inside 214 x (ph - 10)
    const cardW = 120;
    const cardH = 176;
    const cx = px + (pw - cardW) / 2;
    const cy = py + 22;

    setFill("FFFFFF"); setDraw("CBD5E1"); doc.setLineWidth(1);
    doc.roundedRect(cx, cy, cardW, cardH, 14, 14, "FD");

    // Food image area
    setFill("1E293B"); doc.roundedRect(cx + 6, cy + 6, cardW - 12, 105, 11, 11, "F");

    // Overlaid Price Pill
    setFill("0F172A"); doc.roundedRect(cx + 10, cy + 10, 36, 14, 6, 6, "F");
    setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
    doc.text("Rs. 349", cx + 13, cy + 20);

    // Overlaid Offer Badge
    setFill("F59E0B"); doc.roundedRect(cx + cardW - 46, cy + 10, 36, 14, 5, 5, "F");
    setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(6);
    doc.text("20% Off!", cx + cardW - 42, cy + 20);

    // Dish title
    setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
    doc.text("Mom's Recipe", cx + 10, cy + 124);
    doc.text("Chicken Gravy", cx + 10, cy + 135);

    // + ADD Button
    setFill("BD2320"); doc.roundedRect(cx + 12, cy + 146, cardW - 24, 22, 11, 11, "F");
    setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
    doc.text("+ ADD", cx + 44, cy + 160);

    // Dimension Callout
    setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
    doc.text("Scale: 290×340px  ·  r: 28px", px + 10, py + 14);
  },
  245
);

// C5: Vidya Bot WhatsApp Floating Card
p6y = renderComponentCard(
  p6y,
  "05",
  "VIDYA BOT FLOATING WHATSAPP ROW (MobileHomeScreen.tsx)",
  [
    "Source: WhatsApp Bot Row in MobileHomeScreen.tsx",
    "Container: Width: 100% · Height: 60px · Radius: 24px · padding: 12px 18px",
    "  Background: rgba(255,255,255,0.72) glass · border: 1px solid rgba(0,0,0,0.06)",
    "  BackdropFilter: blur(16px) saturate(180%) · shadow: 0 2px 12px rgba(0,0,0,0.04)",
    "Title: 15px ExtraBold 800 Outfit · #1A1A1A · 'Vidya Bot'",
    "INSTANT Speed Badge: padding: 3px 8px · radius: 999px · bg: rgba(22,163,74,0.18)",
    "  Border: 1px solid rgba(21,128,61,0.45) · text: 10px ExtraBold 800 #14532D",
    "Subtitle: 13px Medium 500 Outfit · rgba(0,0,0,0.42) · 'Order via our bot'",
    "WhatsApp Action Circle: 40×40px circle · bg: #25D366 · shadow: 0 4px 12px green"
  ],
  (px, py, pw, ph) => {
    const midY = py + ph / 2;
    // Outer Row
    setFill("FFFFFF"); setDraw("E2E8F0"); doc.setLineWidth(1);
    doc.roundedRect(px + 8, midY - 24, pw - 16, 48, 20, 20, "FD");

    // Title
    setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(9);
    doc.text("Vidya Bot", px + 18, midY - 5);

    // INSTANT badge
    setFill("DCFCE7"); setDraw("86EFAC"); doc.setLineWidth(0.6);
    doc.roundedRect(px + 68, midY - 14, 46, 13, 6, 6, "FD");
    setFill("CA8A04"); doc.circle(px + 74, midY - 7.5, 2.5, "F");
    setTxt("166534"); doc.setFont("helvetica", "bold"); doc.setFontSize(6);
    doc.text("INSTANT", px + 79, midY - 5);

    // Subtitle
    setTxt("64748B"); doc.setFont("helvetica", "normal"); doc.setFontSize(7.5);
    doc.text("Order via our bot", px + 18, midY + 11);

    // WhatsApp Circle
    setFill("25D366"); doc.circle(px + pw - 26, midY, 15, "F");
    setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
    doc.text("WA", px + pw - 31, midY + 2.5);

    // Dimension Callout
    setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
    doc.text("h: 60px  ·  r: 24px", px + 10, py + 14);
  },
  200
);

pageFooter();


// ══════════════════════════════════════════════════════════════════════════════
// PAGE 7: 04 · COMPONENTS & MEASUREMENTS (PART 3 — DRAWER & DESKTOP STATION)
// ══════════════════════════════════════════════════════════════════════════════
page++; doc.addPage();
pageHeader("04", "Components & Measurements · Part 3");

let p7y = sectionHead("04", "Component Specs — Exact Measurements (Part 3)",
  "SizeQtyDrawer selection sheet and Desktop launch QR acquisition stage.", 48);

// C6: Size & Quantity Drawer Controls
p7y = renderComponentCard(
  p7y,
  "06",
  "SIZE & QUANTITY DRAWER CONTROLS (SizeQtyDrawer.tsx)",
  [
    "Source: SizeQtyDrawer.tsx bottom sheet component",
    "Size Variant Card: Radius: 20px · padding: 14px · border: 1.5px solid #BD2320",
    "  Background: rgba(255,255,255,0.78) · shadow: 0 4px 20px rgba(189,35,32,0.25)",
    "Icon Well: 52×52px · borderRadius: 18px · bg: rgba(189,35,32,0.10) with 26px icon",
    "Quantity Stepper: Height: 44px · Radius: 999px pill · bg: rgba(0,0,0,0.05)",
    "  Stepper Buttons: 32×32px circle · Minus/Plus 15px bold · Count: 16px Mono 900",
    "Primary CTA Button: Height: 52px · Radius: 18px · bg: #BD2320 (Crimson)",
    "  Label: 15px ExtraBold 800 · #FFFFFF · 'ADD ITEM TO CART · Rs. 180'"
  ],
  (px, py, pw, ph) => {
    const midY = py + ph / 2;
    // Variant Card
    setFill("FFFFFF"); setDraw("BD2320"); doc.setLineWidth(1.2);
    doc.roundedRect(px + 8, midY - 34, pw - 16, 68, 10, 10, "FD");

    // Icon well
    setFill("FEE2E2"); doc.roundedRect(px + 14, midY - 26, 36, 40, 8, 8, "F");
    drawVectorIcon("CookingPot", px + 17, midY - 20, 30);

    // Variant details
    setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
    doc.text("Regular Pack", px + 56, midY - 14);
    setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
    doc.text("Rs. 180", px + 56, midY - 2);

    // Stepper
    setFill("F1F5F9"); doc.roundedRect(px + 120, midY - 22, 68, 28, 14, 14, "F");
    setTxt("0F172A"); doc.setFont("helvetica", "bold"); doc.setFontSize(10);
    doc.text("-", px + 128, midY - 4);
    doc.setFontSize(8.5); doc.text("01", px + 148, midY - 4);
    doc.setFontSize(10); doc.text("+", px + 172, midY - 4);

    // CTA Button
    setFill("BD2320"); doc.roundedRect(px + 14, midY + 16, pw - 28, 22, 6, 6, "F");
    setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5);
    doc.text("ADD ITEM TO CART  ·  Rs. 180", px + 44, midY + 30);

    // Dimension Callout
    setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
    doc.text("Stepper h: 44px  |  CTA Button h: 52px  |  r: 18px", px + 10, py + 14);
  },
  210
);

// C7: Desktop Launch Station
p7y = renderComponentCard(
  p7y,
  "07",
  "DESKTOP LAUNCH STATION & QR BEAM (DesktopLanding.tsx)",
  [
    "Source: DesktopLanding.tsx marketing acquisition stage",
    "Canvas: #0D0D0D · Ambient spotlight: radial rgba(189,35,32,0.22) blur 200px",
    "QR Glass Box: bg: rgba(255,255,255,0.06) · backdropFilter: blur(40px)",
    "  Border: 1px solid rgba(255,255,255,0.08) · radius: 16px · padding: 16px",
    "  Shadow: 0 20px 40px rgba(0,0,0,0.50)",
    "Laser Scanning Line: height: 2px · linear-gradient crimson → transparent",
    "  BoxShadow: 0 0 20px rgba(189,35,32,1) · vertical loop animation",
    "WhatsApp Launch CTA: Height: 52px · Radius: 16px · bg: #25D366 (Green)",
    "  Icon: WhatsappLogo 22px fill white · Label: 15px Black 900 Outfit"
  ],
  (px, py, pw, ph) => {
    // Dark canvas box
    setFill("0D0D0D"); doc.roundedRect(px + 8, py + 8, pw - 16, ph - 16, 8, 8, "F");

    // QR glass container
    setFill("1A1A1A"); setDraw("334155"); doc.setLineWidth(1);
    doc.roundedRect(px + 62, py + 22, 74, 64, 8, 8, "FD");

    // QR dummy matrix
    setFill("BD2320"); doc.roundedRect(px + 70, py + 30, 16, 16, 3, 3, "F");
    doc.roundedRect(px + 112, py + 30, 16, 16, 3, 3, "F");
    doc.roundedRect(px + 70, py + 62, 16, 16, 3, 3, "F");

    // Laser scanning beam
    setDraw("FF4D4D"); doc.setLineWidth(2);
    doc.line(px + 62, py + 52, px + 136, py + 52);

    // Launch Button
    setFill("25D366"); doc.roundedRect(px + 24, py + 98, pw - 48, 24, 6, 6, "F");
    setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
    doc.text("Order with Vidya Bot", px + 52, py + 113);

    // Callout
    setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
    doc.text("CTA h: 52px  ·  QR: blur(40px)", px + 14, py + 16);
  },
  210
);

pageFooter();


// ══════════════════════════════════════════════════════════════════════════════
// PAGE 8: 04 · COMPONENTS & MEASUREMENTS (PART 4 — DRIVER & KITCHEN SURFACES)
// ══════════════════════════════════════════════════════════════════════════════
page++; doc.addPage();
pageHeader("04", "Components & Measurements · Part 4");

let p8y = sectionHead("04", "Component Specs — Exact Measurements (Part 4)",
  "Driver delivery high-contrast navigation card and Kitchen station KDS order tickets.", 48);

// C8: Driver Outdoor Order Card & COD Banner
p8y = renderComponentCard(
  p8y,
  "08",
  "DRIVER HIGH-CONTRAST CARD & COD BANNER (driver-pwa.tsx)",
  [
    "Source: src/app/driver/driver-pwa.tsx + driver-theme.ts",
    "Canvas: #0A0A0A · anti-glare high-contrast outdoor night theme",
    "Order Card: bg: #161616 · radius: 16px · border: 1px solid rgba(255,255,255,0.12)",
    "Customer Name: 15–16px Bold 800 Outfit · #FFFFFF · Delivery Address: 13px",
    "COD Cash Banner: bg: rgba(245,166,35,0.12) · border: rgba(245,166,35,0.35)",
    "  Radius: 12px · padding: 10px 14px · Label: 12px Mono Black #F5A623",
    "Dispatch Button: Height: 48px · Radius: 14px · bg: #34D469 (Signal Green)",
    "  Label: 14–15px ExtraBold 800 · #000000 · letterSpacing: 0.02em"
  ],
  (px, py, pw, ph) => {
    // Dark Canvas
    setFill("0A0A0A"); doc.roundedRect(px + 8, py + 8, pw - 16, ph - 16, 8, 8, "F");

    // Card
    setFill("161616"); setDraw("334155"); doc.setLineWidth(1);
    doc.roundedRect(px + 14, py + 22, pw - 28, ph - 38, 8, 8, "FD");

    setTxt("FFFFFF"); doc.setFont("helvetica", "bold"); doc.setFontSize(8.5);
    doc.text("Murugan K.  ·  #VK-8821", px + 22, py + 38);
    setTxt("94A3B8"); doc.setFont("helvetica", "normal"); doc.setFontSize(7);
    doc.text("14/B Gandhi Rd, Sivakasi East", px + 22, py + 50);

    // COD Banner
    setFill("2A1500"); setDraw("F5A623"); doc.setLineWidth(0.8);
    doc.roundedRect(px + 22, py + 58, pw - 44, 20, 4, 4, "FD");
    setTxt("F5A623"); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5);
    doc.text("Rs. 180 CASH ON DELIVERY", px + 36, py + 71);

    // Dispatch button
    setFill("34D469"); doc.roundedRect(px + 22, py + 86, pw - 44, 22, 6, 6, "F");
    setTxt("000000"); doc.setFont("helvetica", "bold"); doc.setFontSize(8);
    doc.text("MARK DELIVERED", px + 62, py + 100);

    // Callout
    setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
    doc.text("Btn: 48px  ·  COD: #F5A623", px + 14, py + 16);
  },
  210
);

// C9: Kitchen Station Live Order Ticket & Controls
p8y = renderComponentCard(
  p8y,
  "09",
  "KITCHEN STATION LIVE ORDER TICKET & CONTROLS (DashboardSidebar.tsx)",
  [
    "Source: DashboardSidebar.tsx + DashboardOrderBoard.tsx",
    "Station Shell: bg: #141414 · high-luminance ambient kitchen display",
    "Active Nav Item: Height: 44px · Radius: 12px · bg: #F5E32D (Action Yellow)",
    "  Label: 13px Bold 900 · #000000 · Order Count Badge: 18×18px shows '9+'",
    "Live Storefront Pill: padding: 4px 12px · radius: 999px pill",
    "  bg: rgba(134,239,172,0.12) · border: rgba(134,239,172,0.30) · text: #86EFAC",
    "Approve Action Button: Height: 40px · Radius: 8px · border: 1px #F5E32D",
    "  Color: #F5E32D · Font: 12px ExtraBold 800 Outfit"
  ],
  (px, py, pw, ph) => {
    // Dark Canvas
    setFill("141414"); doc.roundedRect(px + 8, py + 8, pw - 16, ph - 16, 8, 8, "F");

    // Active Yellow Nav Item
    setFill("F5E32D"); doc.roundedRect(px + 16, py + 22, pw - 32, 28, 6, 6, "F");
    setTxt("000000"); doc.setFont("helvetica", "bold"); doc.setFontSize(8.5);
    doc.text("Live Kitchen Orders", px + 26, py + 39);
    // 9+ Badge
    setFill("000000"); doc.roundedRect(px + pw - 42, py + 27, 18, 16, 8, 8, "F");
    setTxt("F5E32D"); doc.setFont("helvetica", "bold"); doc.setFontSize(7);
    doc.text("9+", px + pw - 37, py + 38);

    // Live Storefront Pill
    setFill("064E3B"); setDraw("86EFAC"); doc.setLineWidth(0.8);
    doc.roundedRect(px + 16, py + 58, 100, 18, 9, 9, "FD");
    setFill("86EFAC"); doc.circle(px + 26, py + 67, 3, "F");
    setTxt("86EFAC"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
    doc.text("Live on Storefront", px + 33, py + 70);

    // Approve Button
    setDraw("F5E32D"); doc.setLineWidth(1);
    doc.roundedRect(px + 16, py + 84, pw - 32, 24, 6, 6, "D");
    setTxt("F5E32D"); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5);
    doc.text("Approve & Deploy SLA", px + 44, py + 99);

    // Callout
    setTxt("BD2320"); doc.setFont("helvetica", "bold"); doc.setFontSize(6.5);
    doc.text("Nav h: 44px  ·  Beacon: #F5E32D", px + 14, py + 16);
  },
  210
);

pageFooter();


// ══════════════════════════════════════════════════════════════════════════════
// WRITE OUTPUT & SYNC
// ══════════════════════════════════════════════════════════════════════════════
const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
writeFileSync(OUT_PDF_PORTFOLIO, pdfBuffer);
console.log(`✓ PDF successfully written to ${OUT_PDF_PORTFOLIO} (${pdfBuffer.byteLength} bytes, ${TOTAL_PAGES} pages)`);

copyFileSync(OUT_PDF_PORTFOLIO, OUT_PDF_SOURCE);
console.log(`✓ Synced to source: ${OUT_PDF_SOURCE}`);
