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
const M = 44; // Generous 44pt margin for breathing space
const CONTENT_W = W - M * 2;
let y = M;
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

function header(surfaceTag = "") {
  setText("888888");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("VIDYA'S KITCHEN  ·  MULTI-SURFACE DESIGN SYSTEM", M, 30);
  if (surfaceTag) {
    setText("BD2320");
    doc.text(surfaceTag.toUpperCase(), W - M, 30, { align: "right" });
  }
  setDraw("E5E5E5");
  doc.setLineWidth(0.75);
  doc.line(M, 36, W - M, 36);
}

function footer() {
  setDraw("E5E5E5");
  doc.setLineWidth(0.75);
  doc.line(M, H - 32, W - M, H - 32);
  setText("888888");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("Production Specification  ·  Live Token Baseline v2.1  ·  Sivakasi Hub", M, H - 20);
  doc.setFont("helvetica", "bold");
  doc.text(`Page 0${page} of 06`, W - M, H - 20, { align: "right" });
}

function newPage(surfaceTag = "") {
  footer();
  doc.addPage();
  page += 1;
  header(surfaceTag);
  y = 54;
}

function need(h) {
  if (y + h > H - 46) newPage();
}

function h1(title, subtitle = "") {
  need(subtitle ? 48 : 36);
  setText("1A1A1A");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(title, M, y);
  y += 7;
  setFill("BD2320");
  doc.rect(M, y, 32, 2.5, "F");
  y += 14;

  if (subtitle) {
    setText("666666");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    const subLines = doc.splitTextToSize(subtitle, CONTENT_W);
    doc.text(subLines, M, y);
    y += subLines.length * 13 + 10;
  }
}

function h2(text) {
  need(30);
  setText("1A1A1A");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11.5);
  doc.text(text.toUpperCase(), M, y);
  y += 14;
}

function p(text) {
  setText("2A2A2A");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const lines = doc.splitTextToSize(text, CONTENT_W);
  need(lines.length * 13.5 + 8);
  doc.text(lines, M, y);
  y += lines.length * 13.5 + 8;
}

function bullet(title, text) {
  setText("2A2A2A");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const fullText = title ? `${title}: ${text}` : text;
  const lines = doc.splitTextToSize(fullText, CONTENT_W - 16);
  need(lines.length * 13.5 + 4);

  setFill("BD2320");
  doc.circle(M + 4, y - 3, 1.8, "F");

  if (title) {
    doc.setFont("helvetica", "bold");
    const titleWidth = doc.getTextWidth(`${title}: `);
    doc.text(`${title}: `, M + 14, y);
    doc.setFont("helvetica", "normal");
    const restLines = doc.splitTextToSize(text, CONTENT_W - 16 - titleWidth);
    if (restLines.length === 1) {
      doc.text(text, M + 14 + titleWidth, y);
      y += 14;
    } else {
      doc.text(lines, M + 14, y);
      y += lines.length * 13.5 + 4;
    }
  } else {
    doc.text(lines, M + 14, y);
    y += lines.length * 13.5 + 4;
  }
}

function swatches(items) {
  const gap = 12;
  const cols = 3;
  const colW = (CONTENT_W - gap * (cols - 1)) / cols;
  const cardH = 38;

  need(Math.ceil(items.length / cols) * (cardH + 8) + 6);

  for (let i = 0; i < items.length; i += cols) {
    for (let c = 0; c < cols; c++) {
      const item = items[i + c];
      if (!item) continue;
      const x = M + c * (colW + gap);

      // Background Card
      setFill("FAFAFC");
      setDraw("E8E8EC");
      doc.setLineWidth(0.75);
      doc.roundedRect(x, y, colW, cardH, 5, 5, "FD");

      // Swatch Block
      setFill(item.hex);
      if (item.hex === "#FFFFFF" || item.hex === "#F5F5F7") {
        setDraw("D0D0D5");
        doc.roundedRect(x + 5, y + 5, 28, 28, 4, 4, "FD");
      } else {
        doc.roundedRect(x + 5, y + 5, 28, 28, 4, 4, "F");
      }

      // Labels
      setText("1A1A1A");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.text(item.name, x + 38, y + 15);

      setText("666666");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.text(item.hex, x + 38, y + 27);
    }
    y += cardH + 7;
  }
  y += 4;
}

function table(headers, rows, colWidths) {
  need(24);
  setFill("F2F2F5");
  doc.roundedRect(M, y - 10, CONTENT_W, 18, 3, 3, "F");

  setText("555555");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  let curX = M + 8;
  headers.forEach((label, i) => {
    doc.text(label.toUpperCase(), curX, y + 2);
    curX += colWidths[i];
  });
  y += 14;

  rows.forEach((row, idx) => {
    const useLines = doc.splitTextToSize(row[3], colWidths[3] - 10);
    const rowH = Math.max(18, useLines.length * 11.5 + 7);
    need(rowH);

    if (idx % 2 === 0) {
      setFill("FAFAFD");
      doc.rect(M, y - 9, CONTENT_W, rowH, "F");
    }

    setText("1A1A1A");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    curX = M + 8;
    doc.text(row[0], curX, y + 3);

    doc.setFont("helvetica", "normal");
    setText("333333");
    doc.text(row[1], curX + colWidths[0], y + 3);
    doc.text(row[2], curX + colWidths[0] + colWidths[1], y + 3);
    doc.text(useLines, curX + colWidths[0] + colWidths[1] + colWidths[2], y + 3);

    y += rowH;
  });
  y += 8;
}

// ==========================================
// PAGE 1: EXECUTIVE COVER (Deep Dark Studio)
// ==========================================
setFill("0D0D0D");
doc.rect(0, 0, W, H, "F");

// Brand Red Spine
setFill("BD2320");
doc.rect(0, 0, 8, H, "F");

// Eyebrow
setText("F5E32D");
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.text("VIDYA'S KITCHEN  ·  ENTERPRISE SYSTEM ARCHITECTURE", M + 10, 80);

// Main Title
setText("FFFFFF");
doc.setFontSize(26);
doc.text("Multi-Surface UI Design System", M + 10, 126);

// Subtitle
setText("BBBBBB");
doc.setFont("helvetica", "normal");
doc.setFontSize(11.5);
doc.text("Production token baseline across Customer PWA, Driver App, and Kitchen Dashboard", M + 10, 168);

// Rationale paragraph
setText("888888");
doc.setFontSize(9);
const coverIntro = doc.splitTextToSize(
  "This document codifies the design system as implemented in production code (vidyaskitchenhome.com). Rather than a theoretical UI kit, every measurement, hex token, and radius value corresponds directly to live components. The interface operates on Outfit typography across three distinct functional environments.",
  CONTENT_W - 20
);
doc.text(coverIntro, M + 10, 206);

// 3 Surface Showcase Cards
const surfaceCards = [
  {
    title: "01. CUSTOMER PWA",
    subtitle: "Warm #F5F5F7 canvas · #BD2320 primary · 52px button · 28px bottom sheets",
    badge: "LIGHT GLASS",
    bg: "#181818",
    accent: "#BD2320",
    border: "#2A2A2A"
  },
  {
    title: "02. DRIVER APP",
    subtitle: "Near-black #0A0A0A canvas · #E84040 alert · #34D469 delivery · 14px controls",
    badge: "SUNLIGHT HIGH CONTRAST",
    bg: "#181818",
    accent: "#34D469",
    border: "#2A2A2A"
  },
  {
    title: "03. KITCHEN DASHBOARD",
    subtitle: "#0D0D0D desk · #141414 shell · #F5E32D action yellow · 12px card grid",
    badge: "DARK DESK SHIFT",
    bg: "#181818",
    accent: "#F5E32D",
    border: "#2A2A2A"
  }
];

let cardY = 300;
surfaceCards.forEach((sc) => {
  setFill(sc.bg);
  setDraw(sc.border);
  doc.setLineWidth(1);
  doc.roundedRect(M + 10, cardY, CONTENT_W - 20, 68, 8, 8, "FD");

  // Accent Pill
  setFill(sc.accent);
  doc.roundedRect(M + 24, cardY + 18, 32, 32, 6, 6, "F");

  // Title
  setText("FFFFFF");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text(sc.title, M + 68, cardY + 28);

  // Subtitle
  setText("999999");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text(sc.subtitle, M + 68, cardY + 46);

  // Surface Badge
  setFill("#222222");
  setDraw("#333333");
  doc.roundedRect(W - M - 150, cardY + 24, 135, 18, 9, 9, "FD");
  setText(sc.accent);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text(sc.badge, W - M - 82, cardY + 36, { align: "center" });

  cardY += 80;
});

// Cover Footer
setDraw("282828");
doc.line(M + 10, H - 46, W - M - 10, H - 46);
setText("666666");
doc.setFont("helvetica", "normal");
doc.setFontSize(8);
doc.text("Source Repo: github.com/santhosh-a-designer/vidyas-kitchen  ·  Sivakasi East, Tamil Nadu", M + 10, H - 32);
doc.setFont("helvetica", "bold");
doc.text("SPECIFICATION v2.1", W - M - 10, H - 32, { align: "right" });

// ==========================================
// PAGE 2: ARCHITECTURE & SHARED GEOMETRY
// ==========================================
newPage("System Architecture");
h1("Multi-Surface Architecture", "A unified brand identity deployed across three purpose-built ergonomic environments.");

p(
  "Vidya's Kitchen is designed as a synchronized ecosystem with three distinct operational roles. Rather than forcing one generic responsive template across all screens, each surface is tuned for its human context: home comfort, outdoor mobile transit, and intensive kitchen station operation."
);

h2("Surface Ergonomics Breakdown");
bullet("Customer PWA (Home Dining)", "Built for relaxed browsing on high-DPI smartphone displays. Soft warm gray background (#F5F5F7) and translucent white cards give food photography maximum appetizing focus without visual fatigue.");
bullet("Driver App (Outdoor Sunlight)", "Engineered for two-wheeler couriers checking screens at daylight traffic stops. Pure dark canvas (#0A0A0A) eliminates glare, while high-saturation signal colors (#E84040, #34D469, #F5A623) ensure split-second readability.");
bullet("Kitchen Dashboard (Commercial Desk)", "Tuned for station managers working 8+ hour evening prep shifts. Dark desk canvas (#0D0D0D) prevents retinal strain, while bright yellow (#F5E32D) is strictly reserved as an action beacon for urgent operations.");

y += 6;
h2("Shared Geometry & Radius Hierarchy");
bullet("Customer Surfaces", "Generous organic radii (20px to 28px). Primary buttons use 18px radius; bottom sheets and choice drawers feature 28px top radii for natural thumb gestures.");
bullet("Driver Controls", "Compact, precise 14px to 16px radii. Status tags and payment reconciliation indicators use full circular pills (radius 999px).");
bullet("Dashboard Workspace", "Structured 12px panel cards on a 14–20px outer floating shell. Data inputs and action triggers maintain a 8px radius for desktop density.");
bullet("Minimum Touch Target", "All mobile touch targets across phone surfaces strictly observe a minimum height of 44px to 52px, exceeding WCAG 2.1 AAA accessibility thresholds.");

y += 6;
h2("Typography Standard");
bullet("Primary Typeface", "Outfit across all three environments (weights 500, 600, 700, 800, 900).");
bullet("Editorial Constraints", "Zero secondary fonts for functional controls, buttons, or price tags. Mono styling is strictly confined to telemetry coordinates and invoice IDs.");

// ==========================================
// PAGE 3: SURFACE 01 — CUSTOMER PWA
// ==========================================
newPage("Surface 01 · Customer PWA");
h1("Customer PWA Specification", "Translucent glass tiles over a warm neutral canvas, allowing fresh meals to lead.");

h2("Live Color Tokens");
swatches([
  { name: "Canvas", hex: "#F5F5F7" },
  { name: "Brand Red", hex: "#BD2320" },
  { name: "Body Text", hex: "#1A1A1A" },
  { name: "Pure White", hex: "#FFFFFF" },
  { name: "Verified Green", hex: "#22C55E" },
  { name: "Rating Star", hex: "#FBBF24" },
]);

p("Secondary body copy is set to rgba(0,0,0,0.65). Eyebrows and auxiliary metadata use rgba(0,0,0,0.42). Structural borders maintain crisp 1px borders at rgba(0,0,0,0.06). Brand red tints feature an 8% background wash, 18% border stroke, and 25% glow shadow.");

h2("Customer Type Scale");
table(
  ["Role", "Size", "Weight", "Design Application"],
  [
    ["Display", "36px", "800", "Hero greeting & welcome header"],
    ["Hero Price", "30px", "800", "Order total headline & dish spotlight"],
    ["Title", "24px", "800", "Screen titles: Checkout, Menu, Cart"],
    ["Sheet Title", "20-22px", "800-900", "Size selection & OTP drawers"],
    ["Section", "17px", "800", "Your Order, Delivery Address headers"],
    ["Dish Name", "16-18px", "700", "Primary menu item title on grid cards"],
    ["Body Copy", "15px", "500", "Menu item descriptions & meal notes"],
    ["Field Label", "15px", "700", "Form inputs, delivery instruction tags"],
    ["Primary CTA", "16px", "900", "Add to Cart, Complete Order buttons"],
    ["Badge Pill", "10-12px", "700-800", "Discount chips, spice indicators"]
  ],
  [95, 55, 65, CONTENT_W - 215]
);

y += 4;
h2("Recreated Production Components");
bullet("Primary Action CTA", "52px height, 18px radius, #BD2320 red background, bold white label, and 0 8px 24px rgba(189,35,32,0.25) elevation glow.");
bullet("Size & Portion Drawer", "Top radius 28px bottom sheet with 36x4px gray grab handle. Variant cards with 52px icon wells, quantity counter with 44px pill container.");
bullet("Verification Ring & Chip", "56px circular green status ring (rgba(34,197,94,0.14)) paired with white 999px pill chip for OTP confirmation.");

// ==========================================
// PAGE 4: SURFACE 02 — DRIVER APP
// ==========================================
newPage("Surface 02 · Driver App");
h1("Driver App Specification", "Ultra-high contrast outdoor mobile interface for fast dispatch comprehension on the road.");

h2("Driver Color Tokens");
swatches([
  { name: "Night Canvas", hex: "#0A0A0A" },
  { name: "Job Card Tile", hex: "#141414" },
  { name: "Direct Text", hex: "#FFFFFF" },
  { name: "Action Red", hex: "#E84040" },
  { name: "Delivered Green", hex: "#34D469" },
  { name: "Cash Attention", hex: "#F5A623" },
]);

p("Subdued text utilizes white at 46% opacity. Minimal container boundaries use white at 7% and 12% opacity. Status signals feature a dedicated 10% background tint for icon wells and contextual pills.");

h2("Outdoor Ergonomic Tokens");
bullet("Visual Contrast", "Background stays anchored to #0A0A0A. Contrast ratio exceeds 14:1 for white typography on night cards, preventing glare during daylight transitions.");
bullet("Component Geometry", "Job cards use a 16px radius with 1px border at rgba(255,255,255,0.12). Action buttons feature a 14px radius and 48px touch height.");
bullet("Cash Callout Banner", "Amber #F5A623 background tint (rgba(245,166,35,0.12)) with bold 13px warning label to prevent unpaid cash delivery handoffs.");
bullet("Icon Standard", "Lucide icons rendered at 20px with 2px stroke weight for package, navigation, clock, cash, and phone contact.");

y += 6;
h2("Key Driver Screens");
bullet("Shift Authentication", "Phone PIN login with oversized 56px keypad tap targets.");
bullet("Active Run List", "Chronological queue displaying drop-off location, meal count, promised slot, and cash collection badge.");
bullet("Delivery Hand-off", "One-tap Google Maps launch, direct customer call trigger, and high-visibility 'Mark Delivered' completion button (#34D469).");

// ==========================================
// PAGE 5: SURFACE 03 — KITCHEN DASHBOARD
// ==========================================
newPage("Surface 03 · Kitchen Dashboard");
h1("Kitchen Dashboard Specification", "Low-glare dark control center for high-volume shift management and live order dispatch.");

h2("Dashboard Color Tokens");
swatches([
  { name: "Base Page", hex: "#0D0D0D" },
  { name: "Shell Panel", hex: "#141414" },
  { name: "Data Card", hex: "#1A1A1A" },
  { name: "Form Input", hex: "#222222" },
  { name: "Action Yellow", hex: "#F5E32D" },
  { name: "Live Green", hex: "#86EFAC" },
]);

p("Sidebar idle navigation text is #888888. Active navigation row features pure #F5E32D yellow fill with #000000 black text and icon. Panel border is #222222; card border is #2A2A2A. Destructive triggers use #F87171.");

h2("Control Center Layout Specs");
bullet("Sidebar Navigation", "240px default width (collapses to 72px icon rail). Navigation rows are 44px min-height with a 12px radius.");
bullet("Floating Shell Container", "Dark #141414 workspace enclosed in a 14px to 20px rounded shell with 0 8px 32px rgba(0,0,0,0.45) elevation.");
bullet("Action Buttons", "Transparent fill with 1px border in #F5E32D at 40% opacity, yellow text, and an 8–10px radius for compact desktop toolbars.");
bullet("Live Status Pill", "Green border tint (rgba(134,239,172,0.3)) with pulsing green icon for items active on the consumer storefront.");
bullet("Input Fields", "Dark #222222 background, #2A2A2A border, 8px radius, and 14px crisp white text.");

y += 6;
h2("Operational Modules Covered");
bullet("Live Order Board", "Real-time kitchen ticket queue with automated alert sounds and elapsed cooking countdowns.");
bullet("AI Pricing Engine", "Predictive surge recommendations with manual 'Approve & Deploy' safeguards.");
bullet("Inventory & Offers", "Universal promotional cards sharing identical live toggles and yellow confirmation buttons.");

// ==========================================
// PAGE 6: SYSTEM RULES & DECISION MATRIX
// ==========================================
newPage("System Rules & Matrix");
h1("Governance & Decision Matrix", "Strict separation of concerns to prevent cross-surface design drift.");

h2("Surface Cross-Reference Matrix");
table(
  ["Surface Target", "Height / Size", "Radius", "Primary Color Token & Use"],
  [
    ["Customer Button", "52px tall", "18px", "Red #BD2320 fill, white text, 24px red glow"],
    ["Customer Sheet", "Max 92vh", "28px top", "Warm #F5F5F7 canvas, 36x4px grab handle"],
    ["Customer Price", "16-24px", "Pill / Raw", "Always heavy 900 weight, brand red on primary"],
    ["Driver Status", "28-32px", "Full Pill", "Amber #F5A623 (cash), Green #34D469 (delivered)"],
    ["Driver Action", "48px tall", "14px", "High-contrast #34D469 fill or outlined white"],
    ["Dashboard Action", "32-36px", "8-10px", "Yellow #F5E32D hairline, transparent background"],
    ["Dashboard Card", "Variable", "12px", "#1A1A1A card resting on #141414 shell"]
  ],
  [100, 65, 60, CONTENT_W - 225]
);

y += 6;
h2("System Mandates (Do's)");
bullet("Color Discipline", "Strictly isolate primary anchors per surface: Brand Red (#BD2320) for Customer, Outdoor Green/Amber for Driver, and Action Yellow (#F5E32D) for Dashboard.");
bullet("Bill Itemization", "Always render meal subtotal, packaging, delivery fee, and GST as separate lines. Never obscure statutory tax inside general charges.");
bullet("Typographic Weight", "Reserve weight 800-900 strictly for active numbers and operational verbs; utilize weight 500 for descriptive context.");
bullet("Touch Target Rule", "All interactive elements on phone surfaces must maintain a minimum bounding box of 44px by 44px.");

y += 6;
h2("Strict Prohibitions (Don'ts)");
bullet("No Dashboard Leaks", "Never apply the dashboard yellow button style to customer food menus.");
bullet("No Glass on Drivers", "Never import translucent customer glass cards into the high-contrast outdoor driver interface.");
bullet("No Pure Black Text", "Never use pure #000000 text on the customer PWA; use #1A1A1A to preserve soft organic contrast.");
bullet("No Typeface Fragmentation", "Never introduce a second font family for price tags, numbers, or button labels.");

footer();

// Export the PDF
const pdfData = Buffer.from(doc.output("arraybuffer"));
writeFileSync(OUT_PDF_PORTFOLIO, pdfData);
console.log(`Wrote portfolio PDF: ${OUT_PDF_PORTFOLIO} (${pdfData.length} bytes)`);

try {
  writeFileSync(OUT_PDF_SOURCE, pdfData);
  console.log(`Synced to source repo: ${OUT_PDF_SOURCE}`);
} catch (e) {
  console.warn("Could not sync to source repo path directly:", e.message);
}
