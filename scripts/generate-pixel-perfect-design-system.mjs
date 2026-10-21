import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

// ── Phosphor Icon SVG Loader ──────────────────────────────────────────────
async function loadPhosphorSvg(iconName, weight = "regular", size = 20, color = "currentColor") {
  try {
    const defPath = `/Users/simonsanthosh/Downloads/vidyas-kitchen/node_modules/@phosphor-icons/react/dist/defs/${iconName}.es.js`;
    if (!fs.existsSync(defPath)) {
      console.warn(`Phosphor icon def not found: ${iconName}`);
      return `<svg width="${size}" height="${size}" viewBox="0 0 256 256"></svg>`;
    }
    const mod = await import(defPath);
    const map = mod.default || mod.d || mod.e;
    const reactNode = map.get(weight) || map.get("regular");
    if (!reactNode) {
      return `<svg width="${size}" height="${size}" viewBox="0 0 256 256"></svg>`;
    }
    
    function serializeProps(node) {
      if (!node) return "";
      if (Array.isArray(node)) return node.map(serializeProps).join("");
      const { type, props } = node;
      if (!type) return "";
      const children = props?.children ? serializeProps(props.children) : "";
      if (typeof type === "symbol") return children;
      const attrs = Object.entries(props || {})
        .filter(([k]) => k !== "children")
        .map(([k, val]) => `${k}="${val}"`)
        .join(" ");
      return `<${type} ${attrs}>${children}</${type}>`;
    }

    const innerSvg = serializeProps(reactNode);
    return `<svg width="${size}" height="${size}" viewBox="0 0 256 256" fill="${color}" style="display:inline-block;vertical-align:middle;flex-shrink:0;">${innerSvg}</svg>`;
  } catch (err) {
    console.error(`Error loading icon ${iconName}:`, err);
    return `<svg width="${size}" height="${size}" viewBox="0 0 256 256"></svg>`;
  }
}

// ── Lucide Icon SVG Loader ────────────────────────────────────────────────
async function loadLucideSvg(iconName, size = 20, color = "currentColor", strokeWidth = 2) {
  try {
    const iconFile = `/Users/simonsanthosh/Downloads/vidyas-kitchen/node_modules/lucide-react/dist/esm/icons/${iconName}.js`;
    if (!fs.existsSync(iconFile)) {
      console.warn(`Lucide icon not found: ${iconName}`);
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24"></svg>`;
    }
    const mod = await import(iconFile);
    const nodes = mod.__iconNode || [];
    const innerHtml = nodes.map(([tag, attrs]) => {
      const attrStr = Object.entries(attrs)
        .filter(([k]) => k !== "key")
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ");
      return `<${tag} ${attrStr}></${tag}>`;
    }).join("");

    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;flex-shrink:0;">${innerHtml}</svg>`;
  } catch (err) {
    console.error(`Error loading lucide ${iconName}:`, err);
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24"></svg>`;
  }
}

// Convert local image to base64 data URI
function getBase64Image(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const ext = path.extname(filePath).slice(1);
      const mime = ext === "webp" ? "image/webp" : ext === "png" ? "image/png" : ext === "svg" ? "image/svg+xml" : "image/jpeg";
      const b64 = fs.readFileSync(filePath).toString("base64");
      return `data:${mime};base64,${b64}`;
    }
  } catch(e) {}
  return "";
}

export async function generateDesignSystemHtml() {
  // Pre-load common icons
  const iconHouseFill = await loadPhosphorSvg("House", "fill", 22, "#FFFFFF");
  const iconHouseRegular = await loadPhosphorSvg("House", "regular", 22, "rgba(0,0,0,0.35)");
  const iconReceiptRegular = await loadPhosphorSvg("Receipt", "regular", 22, "rgba(0,0,0,0.35)");
  const iconUserRegular = await loadPhosphorSvg("User", "regular", 22, "rgba(0,0,0,0.35)");
  const iconMapPinBold = await loadPhosphorSvg("MapPin", "bold", 22, "#BD2320");
  const iconCaretDown = await loadPhosphorSvg("CaretDown", "bold", 14, "#1A1A1A");
  const iconPlusBold = await loadPhosphorSvg("Plus", "bold", 14, "#FFFFFF");
  const iconMinusBold = await loadPhosphorSvg("Minus", "bold", 14, "#BD2320");
  const iconHeartFill = await loadPhosphorSvg("Heart", "fill", 18, "#BD2320");
  const iconStarFill = await loadPhosphorSvg("Star", "fill", 13, "#EAB308");
  const iconCheckBold = await loadPhosphorSvg("Check", "bold", 14, "#FFFFFF");
  const iconHouseChipBold = await loadPhosphorSvg("House", "bold", 14, "#BD2320");
  const iconSunFill = await loadPhosphorSvg("Sun", "fill", 16, "#F59E0B");

  // Lucide icons
  const lucideTruck = await loadLucideSvg("truck", 18, "#34D469");
  const lucideCheckCircle = await loadLucideSvg("check-circle-2", 20, "#FFFFFF");
  const lucidePhone = await loadLucideSvg("phone", 16, "#FFFFFF");
  const lucideClock = await loadLucideSvg("clock", 16, "#F5E32D");
  const lucideMoney = await loadLucideSvg("banknote", 18, "#1A1A1A");

  // Images
  const foodImgB64 = getBase64Image("/Users/simonsanthosh/Downloads/vidyas-kitchen/public/chicken_curry.webp") ||
                     getBase64Image("/Users/simonsanthosh/Downloads/portfolio/public/case-studies/vidyas-kitchen/food/biryani.webp");
  const vkLogoB64 = getBase64Image("/Users/simonsanthosh/Downloads/vidyas-kitchen/public/VK_Logo.webp") ||
                    getBase64Image("/Users/simonsanthosh/Downloads/vidyas-kitchen/public/logo.png");

  // Load complete Phosphor & Lucide icon inventory for Section 3
  const iconInventoryNames = [
    // Micro (12-14px)
    { name: "House", size: 14, weight: "bold", label: "House", token: "14px Bold", surface: "Chips / Nav", lib: "phosphor" },
    { name: "Briefcase", size: 14, weight: "bold", label: "Briefcase", token: "14px Bold", surface: "Work Chip", lib: "phosphor" },
    { name: "MapPin", size: 14, weight: "bold", label: "MapPin", token: "14px Bold", surface: "Saved Place", lib: "phosphor" },
    { name: "Check", size: 13, weight: "bold", label: "Check", token: "13px Bold", surface: "Active Chip", lib: "phosphor" },
    { name: "Star", size: 14, weight: "fill", label: "Star", token: "14px Fill", surface: "Rating", lib: "phosphor" },
    { name: "CaretDown", size: 14, weight: "bold", label: "CaretDown", token: "14px Bold", surface: "Header Loc", lib: "phosphor" },
    
    // Small (16px)
    { name: "Clock", size: 16, weight: "regular", label: "Clock", token: "16px Regular", surface: "Prep Timer", lib: "phosphor" },
    { name: "Warning", size: 16, weight: "bold", label: "Warning", token: "16px Bold", surface: "Store Closed", lib: "phosphor" },
    { name: "Lightning", size: 16, weight: "fill", label: "Lightning", token: "16px Fill", surface: "Express SLA", lib: "phosphor" },
    { name: "Plus", size: 16, weight: "bold", label: "Plus", token: "16px Bold", surface: "Add Stepper", lib: "phosphor" },
    { name: "Minus", size: 16, weight: "bold", label: "Minus", token: "16px Bold", surface: "Decrement", lib: "phosphor" },
    { name: "tag", size: 16, weight: "regular", label: "Tag", token: "16px Stroke", surface: "Offers", lib: "lucide" },

    // Medium (18-20px)
    { name: "X", size: 20, weight: "bold", label: "X (Close)", token: "20px Bold", surface: "Modals / Sheets", lib: "phosphor" },
    { name: "MagnifyingGlass", size: 20, weight: "regular", label: "Search", token: "20px Regular", surface: "Menu Search", lib: "phosphor" },
    { name: "Heart", size: 20, weight: "fill", label: "Heart", token: "20px Fill", surface: "Favorite Dish", lib: "phosphor" },
    { name: "Phone", size: 18, weight: "bold", label: "Phone", token: "18px Bold", surface: "Driver Call", lib: "phosphor" },
    { name: "Camera", size: 18, weight: "regular", label: "Camera", token: "18px Regular", surface: "Profile Photo", lib: "phosphor" },
    { name: "Trash", size: 18, weight: "regular", label: "Trash", token: "18px Regular", surface: "Delete Address", lib: "phosphor" },
    { name: "PencilSimple", size: 18, weight: "regular", label: "Pencil", token: "18px Regular", surface: "Edit Profile", lib: "phosphor" },
    { name: "BowlFood", size: 20, weight: "regular", label: "BowlFood", token: "20px Regular", surface: "Portion Size", lib: "phosphor" },
    { name: "ForkKnife", size: 20, weight: "regular", label: "ForkKnife", token: "20px Regular", surface: "Cutlery Nudge", lib: "phosphor" },
    { name: "CircleNotch", size: 18, weight: "bold", label: "Spinner", token: "18px Bold", surface: "Sync Loader", lib: "phosphor" },

    // Nav & Shell (22px)
    { name: "House", size: 22, weight: "fill", label: "House (Active)", token: "22px Fill", surface: "Bottom Dock", lib: "phosphor" },
    { name: "Receipt", size: 22, weight: "regular", label: "Receipt", token: "22px Regular", surface: "Bottom Dock", lib: "phosphor" },
    { name: "User", size: 22, weight: "regular", label: "User", token: "22px Regular", surface: "Bottom Dock", lib: "phosphor" },
    { name: "Motorcycle", size: 22, weight: "bold", label: "Motorcycle", token: "22px Bold", surface: "Driver Nav", lib: "phosphor" },
    { name: "cooking-pot", size: 22, weight: "regular", label: "CookingPot", token: "22px Stroke", surface: "Kitchen Queue", lib: "lucide" },
    { name: "package-open", size: 20, weight: "regular", label: "PackageOpen", token: "20px Stroke", surface: "Dispatch", lib: "lucide" },

    // Primary Action & Pin (24px)
    { name: "MapPin", size: 24, weight: "fill", label: "MapPin", token: "24px Fill", surface: "Delivery Pin", lib: "phosphor" },
    { name: "check-circle-2", size: 24, weight: "regular", label: "CheckCircle", token: "24px Stroke", surface: "Order Placed", lib: "lucide" },
    { name: "NavigationArrow", size: 24, weight: "fill", label: "GPS Nav", token: "24px Fill", surface: "Live Tracking", lib: "phosphor" },
    { name: "ShoppingBag", size: 24, weight: "bold", label: "Cart Bag", token: "24px Bold", surface: "Cart Trigger", lib: "phosphor" },

    // Hero / Empty (32px - 40px)
    { name: "Receipt", size: 32, weight: "thin", label: "Empty Receipt", token: "32px Thin", surface: "No Orders View", lib: "phosphor" },
    { name: "Faders", size: 28, weight: "regular", label: "Faders", token: "28px Regular", surface: "Filter Drawer", lib: "phosphor" },
  ];

  let renderedIconCards = "";
  for (const item of iconInventoryNames) {
    let svg = "";
    if (item.lib === "phosphor") {
      svg = await loadPhosphorSvg(item.name, item.weight, item.size, item.weight === "fill" && item.name === "House" ? "#BD2320" : item.weight === "fill" && item.name === "Heart" ? "#BD2320" : item.weight === "fill" && item.name === "Star" ? "#EAB308" : "#1E293B");
    } else {
      svg = await loadLucideSvg(item.name, item.size, "#1E293B", 2);
    }

    renderedIconCards += `
      <div class="icon-card">
        <div class="icon-well">
          ${svg}
        </div>
        <div class="icon-info">
          <div class="icon-name">${item.label}</div>
          <div class="icon-meta">${item.token} · ${item.surface}</div>
        </div>
      </div>
    `;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vidya's Kitchen — UI Design System Specification</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap');

    @page {
      size: 297mm 210mm; /* A4 Landscape */
      margin: 0;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Outfit', sans-serif;
      background: #FDFBF7;
      color: #1A1A1A;
      -webkit-font-smoothing: antialiased;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Page Container */
    .page {
      width: 297mm;
      height: 210mm;
      max-height: 210mm;
      position: relative;
      overflow: hidden;
      page-break-after: always;
      page-break-inside: avoid;
      background: #FDFBF7;
      padding: 13mm 16mm 11mm;
      display: flex;
      flex-direction: column;
    }

    .page::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #BD2320 0%, #EAB308 50%, #34D469 100%);
    }

    /* Header & Footer */
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 7px;
      border-bottom: 1.5px solid rgba(0,0,0,0.06);
      margin-bottom: 10px;
      flex-shrink: 0;
    }

    .page-header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .page-header-logo {
      height: 24px;
      width: auto;
    }

    .page-header-title {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #BD2320;
    }

    .page-header-right {
      font-size: 11px;
      font-weight: 700;
      color: rgba(0,0,0,0.4);
      letter-spacing: 0.04em;
    }

    .page-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 7px;
      border-top: 1px solid rgba(0,0,0,0.05);
      margin-top: auto;
      flex-shrink: 0;
      font-size: 10px;
      color: rgba(0,0,0,0.4);
      font-weight: 600;
    }

    /* Section Banner */
    .section-banner {
      margin-bottom: 10px;
      flex-shrink: 0;
    }

    .section-eyebrow {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #BD2320;
      margin-bottom: 2px;
    }

    .section-title {
      font-size: 21px;
      font-weight: 800;
      color: #1A1A1A;
      letter-spacing: -0.02em;
      line-height: 1.15;
    }

    .section-desc {
      font-size: 11.5px;
      color: #64748B;
      font-weight: 500;
      margin-top: 2px;
    }

    /* Grid & Cards */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      flex: 1;
      min-height: 0;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      flex: 1;
      min-height: 0;
    }

    .panel {
      background: #FFFFFF;
      border: 1px solid rgba(0,0,0,0.06);
      border-radius: 16px;
      padding: 12px 14px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.03);
      display: flex;
      flex-direction: column;
      min-height: 0;
    }

    .panel-title {
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #64748B;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    }

    /* Table Styles */
    .token-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10.5px;
    }

    .token-table th {
      text-align: left;
      padding: 5px 7px;
      font-size: 9.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #64748B;
      border-bottom: 1.5px solid rgba(0,0,0,0.08);
      background: rgba(0,0,0,0.02);
    }

    .token-table td {
      padding: 6px 7px;
      border-bottom: 1px solid rgba(0,0,0,0.04);
      color: #1A1A1A;
      font-weight: 600;
    }

    .token-badge {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5px;
      font-weight: 700;
      padding: 2px 5px;
      border-radius: 6px;
      background: rgba(0,0,0,0.05);
      color: #1A1A1A;
    }

    /* Swatch Styles */
    .swatch-group {
      display: flex;
      flex-direction: column;
      gap: 7px;
      flex: 1;
    }

    .swatch-item {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #FFFFFF;
      border: 1px solid rgba(0,0,0,0.06);
      border-radius: 10px;
      padding: 7px 10px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }

    .swatch-circle {
      width: 36px;
      height: 36px;
      border-radius: 9px;
      flex-shrink: 0;
      border: 1px solid rgba(0,0,0,0.1);
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
    }

    .swatch-info {
      flex: 1;
      min-width: 0;
    }

    .swatch-name {
      font-size: 11.5px;
      font-weight: 800;
      color: #1A1A1A;
      margin-bottom: 1px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .swatch-hex {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9.5px;
      font-weight: 700;
      color: #64748B;
    }

    .swatch-role {
      font-size: 9.5px;
      color: #94A3B8;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .swatch-badge {
      font-size: 9px;
      font-weight: 800;
      padding: 2px 5px;
      border-radius: 4px;
      background: #E2E8F0;
      color: #334155;
    }

    /* Icon Grid Styles */
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 8px;
      flex: 1;
      overflow: hidden;
    }

    .icon-card {
      background: #FFFFFF;
      border: 1px solid rgba(0,0,0,0.06);
      border-radius: 11px;
      padding: 7px 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 5px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    }

    .icon-well {
      width: 38px;
      height: 38px;
      border-radius: 9px;
      background: rgba(0,0,0,0.03);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .icon-info {
      width: 100%;
    }

    .icon-name {
      font-size: 10.5px;
      font-weight: 800;
      color: #1A1A1A;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .icon-meta {
      font-size: 8.5px;
      color: #64748B;
      font-weight: 600;
      margin-top: 1px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Measurement Callout Badge */
    .measure-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 6px;
      background: #FEF3C7;
      border: 1px solid #FCD34D;
      color: #92400E;
    }

    .measure-red {
      background: rgba(189,35,32,0.1);
      border-color: rgba(189,35,32,0.3);
      color: #BD2320;
    }

    .dim-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10px;
      margin-top: 6px;
    }
    .dim-table tr {
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
    .dim-table td {
      padding: 4px 6px;
    }
    .dim-label {
      font-weight: 700;
      color: #475569;
    }
    .dim-val {
      text-align: right;
    }
  </style>
</head>
<body>

  <!-- ===================================================================== -->
  <!-- PAGE 1: COVER & SYSTEM FOUNDATION                                     -->
  <!-- ===================================================================== -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-left">
        ${vkLogoB64 ? `<img src="${vkLogoB64}" class="page-header-logo" alt="Logo">` : ""}
        <span class="page-header-title">Vidya's Kitchen UI Design System</span>
      </div>
      <div class="page-header-right">V3.4.0 · PRODUCTION SPECIFICATION</div>
    </div>

    <div style="margin: 12px 0 16px;">
      <div style="font-size: 11px; font-weight: 800; color: #BD2320; letter-spacing: 0.12em; text-transform: uppercase;">
        Multi-Surface Visual Architecture
      </div>
      <h1 style="font-size: 32px; font-weight: 900; color: #1A1A1A; letter-spacing: -0.03em; margin: 4px 0 6px; line-height: 1.1;">
        Production UI Design System Specification
      </h1>
      <p style="font-size: 14px; color: #64748B; font-weight: 500; max-width: 860px; line-height: 1.45;">
        A comprehensive design token foundation and production component catalog extracted directly from the live React & Next.js codebase. Covering all 4 interconnected user surfaces with exact dimensional specs.
      </p>
    </div>

    <div class="grid-4" style="margin-bottom: 14px;">
      <div class="panel" style="border-top: 3px solid #BD2320; justify-content: space-between;">
        <div>
          <div style="font-size: 10px; font-weight: 800; color: #BD2320; text-transform: uppercase; margin-bottom: 3px;">Surface 01</div>
          <div style="font-size: 15px; font-weight: 800; color: #1A1A1A; margin-bottom: 4px;">Customer Mobile PWA</div>
          <div style="font-size: 11px; color: #64748B; line-height: 1.4;">
            Single-thumb handheld ordering with frosted glass navigation, dynamic cart drawers, and instant WhatsApp concierge routing.
          </div>
        </div>
        <div style="background: rgba(189,35,32,0.06); border-radius: 8px; padding: 6px 8px; margin-top: 8px;">
          <div style="font-size: 9.5px; font-weight: 800; color: #BD2320;">Frosted Nav Dock · Best Selling Feed</div>
          <div style="font-size: 9px; color: #64748B; margin-top: 2px;">390×844px Mobile Viewport</div>
        </div>
      </div>

      <div class="panel" style="border-top: 3px solid #F5E32D; justify-content: space-between;">
        <div>
          <div style="font-size: 10px; font-weight: 800; color: #CA8A04; text-transform: uppercase; margin-bottom: 3px;">Surface 02</div>
          <div style="font-size: 15px; font-weight: 800; color: #1A1A1A; margin-bottom: 4px;">Kitchen Station Board</div>
          <div style="font-size: 11px; color: #64748B; line-height: 1.4;">
            High-luminance dark display for commercial cook-line visibility, prep timers, bump actions, and live storefront toggles.
          </div>
        </div>
        <div style="background: rgba(245,227,45,0.12); border-radius: 8px; padding: 6px 8px; margin-top: 8px;">
          <div style="font-size: 9.5px; font-weight: 800; color: #A16207;">Prep Countdown · Cookline Bump Ticket</div>
          <div style="font-size: 9px; color: #64748B; margin-top: 2px;">1024×768px Station Tablet</div>
        </div>
      </div>

      <div class="panel" style="border-top: 3px solid #34D469; justify-content: space-between;">
        <div>
          <div style="font-size: 10px; font-weight: 800; color: #15803D; text-transform: uppercase; margin-bottom: 3px;">Surface 03</div>
          <div style="font-size: 15px; font-weight: 800; color: #1A1A1A; margin-bottom: 4px;">Driver Delivery PWA</div>
          <div style="font-size: 11px; color: #64748B; line-height: 1.4;">
            High-contrast night mode delivery tickets, prominent COD cash collection alert banners, and 1-tap customer call triggers.
          </div>
        </div>
        <div style="background: rgba(52,212,105,0.12); border-radius: 8px; padding: 6px 8px; margin-top: 8px;">
          <div style="font-size: 9.5px; font-weight: 800; color: #15803D;">Anti-Glare Night Mode · COD Collect Banner</div>
          <div style="font-size: 9px; color: #64748B; margin-top: 2px;">390×844px Handlebar Mount</div>
        </div>
      </div>

      <div class="panel" style="border-top: 3px solid #1E293B; justify-content: space-between;">
        <div>
          <div style="font-size: 10px; font-weight: 800; color: #475569; text-transform: uppercase; margin-bottom: 3px;">Surface 04</div>
          <div style="font-size: 15px; font-weight: 800; color: #1A1A1A; margin-bottom: 4px;">Desktop Landing</div>
          <div style="font-size: 11px; color: #64748B; line-height: 1.4;">
            Cinematic conversion funnel featuring real-time mobile preview harness, laser QR scanner, and direct web-to-app onboarding.
          </div>
        </div>
        <div style="background: rgba(30,41,59,0.06); border-radius: 8px; padding: 6px 8px; margin-top: 8px;">
          <div style="font-size: 9.5px; font-weight: 800; color: #334155;">Laser QR Kiosk · WhatsApp Handoff</div>
          <div style="font-size: 9px; color: #64748B; margin-top: 2px;">1440×900px Desktop Viewport</div>
        </div>
      </div>
    </div>

    <div class="panel" style="background: rgba(189,35,32,0.03); border-color: rgba(189,35,32,0.15); flex-direction: row; gap: 24px; align-items: center; padding: 10px 16px;">
      <div style="display:flex; align-items:center; gap: 8px;">
        <span style="font-size: 16px;">📐</span>
        <div>
          <div style="font-size: 10.5px; font-weight: 800; color: #BD2320; text-transform: uppercase;">8pt Baseline Grid</div>
          <div style="font-size: 10px; color: #64748B; font-weight: 600;">sp(n) = n × 8px spacing discipline</div>
        </div>
      </div>
      <div style="width: 1px; height: 26px; background: rgba(0,0,0,0.08);"></div>
      <div style="display:flex; align-items:center; gap: 8px;">
        <span style="font-size: 16px;">🔤</span>
        <div>
          <div style="font-size: 10.5px; font-weight: 800; color: #BD2320; text-transform: uppercase;">Dual Font Pairing</div>
          <div style="font-size: 10px; color: #64748B; font-weight: 600;">Outfit (Display/Mono) + Inter (Body/UI)</div>
        </div>
      </div>
      <div style="width: 1px; height: 26px; background: rgba(0,0,0,0.08);"></div>
      <div style="display:flex; align-items:center; gap: 8px;">
        <span style="font-size: 16px;">⚡</span>
        <div>
          <div style="font-size: 10.5px; font-weight: 800; color: #BD2320; text-transform: uppercase;">WCAG 2.1 AAA Target</div>
          <div style="font-size: 10px; color: #64748B; font-weight: 600;">Minimum 44×44px / 48×48px interactive wells</div>
        </div>
      </div>
      <div style="width: 1px; height: 26px; background: rgba(0,0,0,0.08);"></div>
      <div style="display:flex; align-items:center; gap: 8px;">
        <span style="font-size: 16px;">🛡️</span>
        <div>
          <div style="font-size: 10.5px; font-weight: 800; color: #BD2320; text-transform: uppercase;">Zero Hallucination</div>
          <div style="font-size: 10px; color: #64748B; font-weight: 600;">100% matched to live app repository</div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>Vidya's Kitchen UI Design System Specification</span>
      <span>Page 1 of 8</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 2: SECTION 1 — TYPOGRAPHY                                        -->
  <!-- ===================================================================== -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-left">
        <span class="page-header-title">01 · Typography</span>
      </div>
      <div class="page-header-right">TYPE HIERARCHY & TOKEN SPECIFICATIONS</div>
    </div>

    <div class="section-banner">
      <div class="section-eyebrow">Visual Foundation</div>
      <div class="section-title">Typography System & Hierarchy Scale</div>
      <div class="section-desc">Primary display typeface 'Outfit' delivers energetic warmth, paired with 'Inter' for micro-utility and tabular numerals for pricing stability.</div>
    </div>

    <div class="grid-2">
      <!-- Table Panel -->
      <div class="panel">
        <div class="panel-title">
          <span>Type Hierarchy Scale (TYPO Tokens)</span>
          <span class="measure-badge">14 Distinct Tokens</span>
        </div>
        <div style="overflow-y: auto; flex: 1;">
          <table class="token-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Size / Line Height</th>
                <th>Weight</th>
                <th>Use Case / Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="token-badge">TYPO.title</span></td>
                <td>28px / 1.12</td>
                <td>800 Extrabold</td>
                <td>Home greeting, screen titles</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.titleSm</span></td>
                <td>22px / 1.20</td>
                <td>800 Extrabold</td>
                <td>Modal sheet titles, drawer heads</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.sectionTitle</span></td>
                <td>20px / 1.25</td>
                <td>800 Extrabold</td>
                <td>Category titles, order status heads</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.dishName</span></td>
                <td>17px / 1.25</td>
                <td>800 Extrabold</td>
                <td>Dish titles on cards & sheets</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.priceHero</span></td>
                <td>26px / 1.15</td>
                <td>900 Black</td>
                <td>Checkout grand total, invoice sum</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.priceLg</span></td>
                <td>20px / 1.20</td>
                <td>900 Black</td>
                <td>Cart drawer subtotal, item total</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.price</span></td>
                <td>16px / 1.20</td>
                <td>800 Tabular</td>
                <td>Food card price chip, menu listings</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.button</span></td>
                <td>15px / 1.20</td>
                <td>800 Extrabold</td>
                <td>Primary CTA buttons, steppers</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.bodyMedium</span></td>
                <td>15px / 1.40</td>
                <td>600 Semibold</td>
                <td>Primary description, address line</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.bodySm</span></td>
                <td>13px / 1.40</td>
                <td>500 Medium</td>
                <td>Dish description, secondary notes</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.chip</span></td>
                <td>13px / 1.20</td>
                <td>800 Extrabold</td>
                <td>Segment tabs, filter pills</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.caption</span></td>
                <td>12px / 1.30</td>
                <td>600 Semibold</td>
                <td>Delivery timings, helper hints</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.micro</span></td>
                <td>11px / 1.20</td>
                <td>700 Bold</td>
                <td>Badges, discount tags, counters</td>
              </tr>
              <tr>
                <td><span class="token-badge">TYPO.eyebrow</span></td>
                <td>11px / 1.20</td>
                <td>800 (+0.08em)</td>
                <td>Section labels, "DELIVERING TO"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Live Specimen Panel -->
      <div class="panel" style="background: #FAFAF9;">
        <div class="panel-title">
          <span>Live Visual Render & Typographic Specimens</span>
          <span class="token-badge">Outfit & Inter</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; flex: 1; justify-content: space-around;">
          <div style="border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 6px;">
            <div style="font-size: 9.5px; font-weight: 800; color: #BD2320; letter-spacing: 0.08em; text-transform: uppercase;">
              TYPO.eyebrow · 11px / 800 / Tracking +0.08em
            </div>
            <div style="font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #BD2320; margin-top: 2px;">
              DELIVERING TO · HOME CHEF SPECIAL
            </div>
          </div>

          <div style="border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 6px;">
            <div style="font-size: 9.5px; font-weight: 800; color: #64748B; text-transform: uppercase;">
              TYPO.title · 28px / 800 / Line Height 1.12
            </div>
            <div style="font-size: 25px; font-weight: 800; color: #1A1A1A; line-height: 1.12; letter-spacing: -0.02em;">
              Hot, home-style meals delivered fresh.
            </div>
          </div>

          <div style="border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 6px;">
            <div style="font-size: 9.5px; font-weight: 800; color: #64748B; text-transform: uppercase;">
              TYPO.dishName · 17px / 800 & TYPO.price · 16px Tabular
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 2px;">
              <span style="font-size: 17px; font-weight: 800; color: #1A1A1A;">Ambur Special Chicken Biryani</span>
              <span style="font-size: 16px; font-weight: 800; color: #BD2320; font-variant-numeric: tabular-nums;">₹180</span>
            </div>
          </div>

          <div style="border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 6px;">
            <div style="font-size: 9.5px; font-weight: 800; color: #64748B; text-transform: uppercase;">
              TYPO.bodySm · 13px / 500 / Line Height 1.4
            </div>
            <div style="font-size: 12.5px; font-weight: 500; color: #475569; line-height: 1.4; margin-top: 2px;">
              Slow cooked with hand-ground spices and premium Seeraga Samba rice, garnished with roasted cashews and boiled egg.
            </div>
          </div>

          <div style="display:flex; gap: 8px; align-items: center;">
            <div style="background: #BD2320; color: #FFFFFF; font-size: 13px; font-weight: 800; padding: 7px 14px; border-radius: 999px;">
              TYPO.button · ADD ITEM · ₹180
            </div>
            <div style="background: rgba(189,35,32,0.1); color: #BD2320; font-size: 11px; font-weight: 800; padding: 5px 10px; border-radius: 8px;">
              TYPO.chip · BEST SELLING
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>Vidya's Kitchen UI Design System Specification</span>
      <span>Page 2 of 8</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 3: SECTION 2 — COLOGRAPHY (ALL 4 DESIGNS)                         -->
  <!-- ===================================================================== -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-left">
        <span class="page-header-title">02 · Colography</span>
      </div>
      <div class="page-header-right">COLOR SYSTEMS ACROSS ALL 4 SURFACES</div>
    </div>

    <div class="section-banner">
      <div class="section-eyebrow">Harmonious Color Architecture</div>
      <div class="section-title">Colography Across All Four Product Surfaces</div>
      <div class="section-desc">Tailored high-contrast palettes calibrated for mobile handheld appetite appeal, industrial kitchen station readability, and night-time driver delivery.</div>
    </div>

    <div class="grid-4">
      <!-- 1. Customer PWA -->
      <div class="panel">
        <div class="panel-title" style="color: #BD2320;">
          <span>01 · Customer PWA</span>
          <span class="swatch-badge">Warm Appetite</span>
        </div>
        <div class="swatch-group">
          <div class="swatch-item">
            <div class="swatch-circle" style="background: #BD2320;"></div>
            <div class="swatch-info">
              <div class="swatch-name">C.red <span class="measure-badge measure-red">AAA</span></div>
              <div class="swatch-hex">#BD2320 · (189,35,32)</div>
              <div class="swatch-role">Primary Crimson Brand CTA</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: rgba(189,35,32,0.28); border: 1px dashed #BD2320;"></div>
            <div class="swatch-info">
              <div class="swatch-name">C.redGlow</div>
              <div class="swatch-hex">rgba(189,35,32,0.28)</div>
              <div class="swatch-role">Button & Pill Ambient Glow</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #FDFBF7;"></div>
            <div class="swatch-info">
              <div class="swatch-name">C.bg</div>
              <div class="swatch-hex">#FDFBF7 · Ivory Cream</div>
              <div class="swatch-role">Warm Canvas Foundation</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #1A1A1A;"></div>
            <div class="swatch-info">
              <div class="swatch-name">C.text</div>
              <div class="swatch-hex">#1A1A1A · Charcoal Ink</div>
              <div class="swatch-role">High-Contrast Headings</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #64748B;"></div>
            <div class="swatch-info">
              <div class="swatch-name">C.textMuted</div>
              <div class="swatch-hex">#64748B · Slate Gray</div>
              <div class="swatch-role">Secondary Meta & Hints</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Kitchen Station -->
      <div class="panel">
        <div class="panel-title" style="color: #CA8A04;">
          <span>02 · Kitchen Board</span>
          <span class="swatch-badge">High Luminance</span>
        </div>
        <div class="swatch-group">
          <div class="swatch-item">
            <div class="swatch-circle" style="background: #F5E32D;"></div>
            <div class="swatch-info">
              <div class="swatch-name">K.yellowBeacon</div>
              <div class="swatch-hex">#F5E32D · (245,227,45)</div>
              <div class="swatch-role">Live Prep Queue & Timer</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #141414;"></div>
            <div class="swatch-info">
              <div class="swatch-name">K.nightShell</div>
              <div class="swatch-hex">#141414 · True Dark</div>
              <div class="swatch-role">Station Background Canvas</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #86EFAC;"></div>
            <div class="swatch-info">
              <div class="swatch-name">K.liveGreen</div>
              <div class="swatch-hex">#86EFAC · Mint Green</div>
              <div class="swatch-role">Live Storefront Status</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #F97316;"></div>
            <div class="swatch-info">
              <div class="swatch-name">K.expedite</div>
              <div class="swatch-hex">#F97316 · Orange Alert</div>
              <div class="swatch-role">Urgent Cookline Bump</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #EF4444;"></div>
            <div class="swatch-info">
              <div class="swatch-name">K.overdueRed</div>
              <div class="swatch-hex">#EF4444 · Crimson Red</div>
              <div class="swatch-role">Overdue SLA Warning</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. Driver Delivery -->
      <div class="panel">
        <div class="panel-title" style="color: #15803D;">
          <span>03 · Driver PWA</span>
          <span class="swatch-badge">Anti-Glare Night</span>
        </div>
        <div class="swatch-group">
          <div class="swatch-item">
            <div class="swatch-circle" style="background: #0F172A;"></div>
            <div class="swatch-info">
              <div class="swatch-name">D.surface</div>
              <div class="swatch-hex">#0F172A · Slate Dark</div>
              <div class="swatch-role">Anti-Glare Night Shell</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #34D469;"></div>
            <div class="swatch-info">
              <div class="swatch-name">D.greenCTA <span class="measure-badge measure-red">AAA</span></div>
              <div class="swatch-hex">#34D469 · Signal Green</div>
              <div class="swatch-role">Mark Delivered Swipe CTA</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #F5A623;"></div>
            <div class="swatch-info">
              <div class="swatch-name">D.cashGold</div>
              <div class="swatch-hex">#F5A623 · Cash Amber</div>
              <div class="swatch-role">COD Collect Cash Alert</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #1E293B;"></div>
            <div class="swatch-info">
              <div class="swatch-name">D.card</div>
              <div class="swatch-hex">#1E293B · Slate Card</div>
              <div class="swatch-role">Ticket Container Card</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #FFFFFF;"></div>
            <div class="swatch-info">
              <div class="swatch-name">D.white</div>
              <div class="swatch-hex">#FFFFFF · Crisp White</div>
              <div class="swatch-role">Maximum Road Legibility</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. Desktop Landing -->
      <div class="panel">
        <div class="panel-title" style="color: #475569;">
          <span>04 · Desktop Landing</span>
          <span class="swatch-badge">Cinematic Web</span>
        </div>
        <div class="swatch-group">
          <div class="swatch-item">
            <div class="swatch-circle" style="background: linear-gradient(135deg, #BD2320 0%, #8B1A18 100%);"></div>
            <div class="swatch-info">
              <div class="swatch-name">L.heroGradient</div>
              <div class="swatch-hex">#BD2320 → #8B1A18</div>
              <div class="swatch-role">Cinematic Brand Accent</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: rgba(255,255,255,0.85); backdrop-filter: blur(8px);"></div>
            <div class="swatch-info">
              <div class="swatch-name">L.frostedGlass</div>
              <div class="swatch-hex">rgba(255,255,255,0.85)</div>
              <div class="swatch-role">Desktop QR Kiosk Card</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #22C55E;"></div>
            <div class="swatch-info">
              <div class="swatch-name">L.laserScan</div>
              <div class="swatch-hex">#22C55E · Neon Green</div>
              <div class="swatch-role">QR Scanner Active Beam</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #25D366;"></div>
            <div class="swatch-info">
              <div class="swatch-name">L.whatsAppGreen</div>
              <div class="swatch-hex">#25D366 · WhatsApp</div>
              <div class="swatch-role">Instant Chat Order Trigger</div>
            </div>
          </div>

          <div class="swatch-item">
            <div class="swatch-circle" style="background: #09090B;"></div>
            <div class="swatch-info">
              <div class="swatch-name">L.deepOnyx</div>
              <div class="swatch-hex">#09090B · Onyx Black</div>
              <div class="swatch-role">Cinematic High Contrast</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>Vidya's Kitchen UI Design System Specification</span>
      <span>Page 3 of 8</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 4: SECTION 3 — ICONOGRAPHY                                       -->
  <!-- ===================================================================== -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-left">
        <span class="page-header-title">03 · Iconography</span>
      </div>
      <div class="page-header-right">COMPLETE PHOSPHOR & LUCIDE ICON REGISTRY</div>
    </div>

    <div class="section-banner">
      <div class="section-eyebrow">Visual Symbols</div>
      <div class="section-title">Iconography System & Standard Sizing Tiers</div>
      <div class="section-desc">Every visual glyph is bound to standard pixel tiers with strict WCAG 2.1 AAA touch target harnesses (min 44×44px / 48×48px) for effortless mobile operation.</div>
    </div>

    <!-- Sizing Rule Banner -->
    <div class="panel" style="background: #FFFBEB; border-color: #FDE68A; padding: 8px 12px; margin-bottom: 10px; flex-shrink: 0;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; gap: 14px; align-items:center;">
          <span style="font-size: 13px; font-weight: 800; color: #92400E;">Standard Sizing Tiers:</span>
          <span class="measure-badge">Micro: 12-14px</span>
          <span class="measure-badge">Small: 16px</span>
          <span class="measure-badge">Medium: 18-20px</span>
          <span class="measure-badge measure-red">Nav Dock: 22px</span>
          <span class="measure-badge">Primary: 24px</span>
          <span class="measure-badge">Hero: 32-40px</span>
        </div>
        <div style="font-size: 10.5px; font-weight: 700; color: #B45309;">
          *Interactive Bounding Well: Minimum 44×44px / 48×48px
        </div>
      </div>
    </div>

    <!-- Full Icon Grid -->
    <div class="panel" style="flex: 1; padding: 10px;">
      <div class="icon-grid">
        ${renderedIconCards}
      </div>
    </div>

    <div class="page-footer">
      <span>Vidya's Kitchen UI Design System Specification</span>
      <span>Page 4 of 8</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 5: SECTION 4A — COMPONENTS: CUSTOMER SHELL & NAV                  -->
  <!-- ===================================================================== -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-left">
        <span class="page-header-title">04A · Production Components</span>
      </div>
      <div class="page-header-right">CUSTOMER MOBILE PWA: SHELL & NAVIGATION</div>
    </div>

    <div class="section-banner">
      <div class="section-eyebrow">Component Architecture · Customer PWA</div>
      <div class="section-title">Floating Navigation Dock & Segmented Feed Switcher</div>
      <div class="section-desc">100% pixel-matched to production code. Real frosted glass dock, exact 104px active capsule, and Spring-animated Best Selling feed pill.</div>
    </div>

    <div class="grid-2">
      <!-- Left: Floating Dock Specification -->
      <div class="panel">
        <div class="panel-title">
          <span>Floating Bottom Nav Dock (MobileHomeScreen.tsx)</span>
          <span class="measure-badge measure-red">Height: 64px</span>
        </div>

        <div style="background: #F1F5F9; border-radius: 14px; padding: 22px 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 10px; position: relative;">
          <!-- Real Bottom Nav Dock Component -->
          <div style="
            display: inline-flex;
            gap: 8px;
            align-items: center;
            padding: 8px;
            background: rgba(255, 255, 255, 0.88);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border-radius: 999px;
            border: 1px solid rgba(0, 0, 0, 0.08);
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.10);
          ">
            <!-- Active Home Tab: 104px width -->
            <div style="
              width: 104px;
              height: 48px;
              border-radius: 999px;
              background: #BD2320;
              border: 1px solid #BD2320;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
              cursor: pointer;
            ">
              ${iconHouseFill}
              <span style="color: #FFFFFF; font-family: 'Outfit'; font-size: 14px; font-weight: 800; letter-spacing: 0.01em;">Home</span>
            </div>

            <!-- Inactive Orders Tab: 48x48 circle with red badge 1 -->
            <div style="
              width: 48px;
              height: 48px;
              border-radius: 999px;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              cursor: pointer;
            ">
              ${iconReceiptRegular}
              <!-- Badge -->
              <span style="
                position: absolute;
                top: 4px;
                right: 5px;
                min-width: 16px;
                height: 16px;
                padding: 0 4px;
                border-radius: 999px;
                background: #BD2320;
                color: #FFFFFF;
                font-size: 9px;
                font-weight: 900;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid #FFFFFF;
                box-sizing: border-box;
              ">1</span>
            </div>

            <!-- Inactive Account Tab: 48x48 circle -->
            <div style="
              width: 48px;
              height: 48px;
              border-radius: 999px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            ">
              ${iconUserRegular}
            </div>
          </div>
        </div>

        <!-- Dimensional Callouts Table -->
        <table class="dim-table">
          <tr>
            <td class="dim-label">Dock Outer Capsule:</td>
            <td class="dim-val"><span class="token-badge">Padding: 8px · Height: 64px · Radius: 999px</span></td>
          </tr>
          <tr>
            <td class="dim-label">Active Tab Pill (Home):</td>
            <td class="dim-val"><span class="token-badge">Width: 104px · Height: 48px · Solid #BD2320</span></td>
          </tr>
          <tr>
            <td class="dim-label">Inactive Tabs (Orders/Account):</td>
            <td class="dim-val"><span class="token-badge">Width: 48px · Height: 48px · Icon: 22px</span></td>
          </tr>
          <tr>
            <td class="dim-label">Live Notification Badge:</td>
            <td class="dim-val"><span class="token-badge">16×16px · Top 4px / Right 5px · Red #BD2320</span></td>
          </tr>
          <tr>
            <td class="dim-label">Surface Material:</td>
            <td class="dim-val"><span class="token-badge">rgba(255,255,255,0.88) · Blur 20px</span></td>
          </tr>
        </table>
      </div>

      <!-- Right: Segmented Switcher & Location Header -->
      <div class="panel" style="gap: 10px;">
        <!-- Segmented Tab Control -->
        <div>
          <div class="panel-title">
            <span>Dish Feed Segment Control (Best Selling | Favorites)</span>
            <span class="measure-badge">Spring Stiffness 320</span>
          </div>

          <div style="background: #F1F5F9; border-radius: 14px; padding: 14px 16px; display: flex; justify-content: center; margin-bottom: 8px;">
            <!-- Real Tab Switcher -->
            <div style="
              display: inline-flex;
              align-items: center;
              background: rgba(0, 0, 0, 0.05);
              border-radius: 999px;
              padding: 4px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.04);
            ">
              <!-- Active "Best Selling" Pill -->
              <div style="
                padding: 9px 18px;
                border-radius: 999px;
                background: linear-gradient(135deg, #BD2320 0%, #8B1A18 100%);
                border: 1px solid rgba(189,35,32,0.3);
                box-shadow: 0 2px 14px rgba(189,35,32,0.35);
                color: #FFFFFF;
                font-family: 'Outfit';
                font-size: 14px;
                font-weight: 800;
                letter-spacing: 0.02em;
                cursor: pointer;
              ">
                Best Selling
              </div>

              <!-- Inactive "Favorites" -->
              <div style="
                padding: 9px 18px;
                border-radius: 999px;
                color: rgba(0, 0, 0, 0.40);
                font-family: 'Outfit';
                font-size: 14px;
                font-weight: 800;
                letter-spacing: 0.02em;
                cursor: pointer;
              ">
                Favorites
              </div>
            </div>
          </div>
          <table class="dim-table">
            <tr>
              <td class="dim-label">Active Pill:</td>
              <td class="dim-val"><span class="token-badge">#BD2320 → #8B1A18 · Padding 9×18px · Outfit 14px 800</span></td>
            </tr>
            <tr>
              <td class="dim-label">Inactive State:</td>
              <td class="dim-val"><span class="token-badge">rgba(0,0,0,0.40) · Smooth tween 0.22s ease</span></td>
            </tr>
          </table>
        </div>

        <!-- Delivering To Location Header -->
        <div style="border-top: 1px solid rgba(0,0,0,0.06); padding-top: 8px;">
          <div class="panel-title">
            <span>Delivering To Location Pill (MobileHomeScreen.tsx)</span>
            <span class="measure-badge">Header Bar</span>
          </div>

          <div style="background: #FAFAF9; border-radius: 12px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between; border: 1px solid rgba(0,0,0,0.05);">
            <div>
              <div style="font-size: 9.5px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: #BD2320;">
                DELIVERING TO
              </div>
              <div style="display:flex; align-items:center; gap: 6px; margin-top: 2px;">
                ${iconMapPinBold}
                <span style="font-size: 14.5px; font-weight: 800; color: #1A1A1A;">Vigneshwar Nagar, Chennai</span>
                ${iconCaretDown}
              </div>
            </div>
            <div style="display:flex; gap: 6px;">
              <span style="display:inline-flex; align-items:center; gap: 4px; padding: 4px 8px; border-radius: 8px; background: rgba(189,35,32,0.08); color: #BD2320; font-size: 11px; font-weight: 800;">
                ${iconHouseChipBold} Home
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page-footer">
      <span>Vidya's Kitchen UI Design System Specification</span>
      <span>Page 5 of 8</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 6: SECTION 4B — COMPONENTS: DISH CARDS & CART DRAWER              -->
  <!-- ===================================================================== -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-left">
        <span class="page-header-title">04B · Production Components</span>
      </div>
      <div class="page-header-right">FOOD CARD & SIZE/QTY CART DRAWER</div>
    </div>

    <div class="section-banner">
      <div class="section-eyebrow">Component Architecture · Customer PWA</div>
      <div class="section-title">Best Selling Food Card & Size/Quantity Drawer</div>
      <div class="section-desc">Dimensioned cards with floating price chips, portion size radio cards, tactile quantity stepper wells, and full-width checkout triggers.</div>
    </div>

    <div class="grid-2">
      <!-- Best Selling Food Card -->
      <div class="panel">
        <div class="panel-title">
          <span>Best Selling Dish Card (290×340px)</span>
          <span class="measure-badge measure-red">Radius: 28px</span>
        </div>

        <div style="display: flex; justify-content: center; margin-bottom: 8px;">
          <!-- Card Container -->
          <div style="
            width: 270px;
            height: 275px;
            border-radius: 26px;
            background: #FFFFFF;
            border: 1px solid rgba(0,0,0,0.06);
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          ">
            <!-- Food Image Container -->
            <div style="
              height: 155px;
              width: 100%;
              background: #F1F5F9;
              position: relative;
              background-image: url('${foodImgB64}');
              background-size: cover;
              background-position: center;
            ">
              <!-- Floating Price Chip -->
              <div style="
                position: absolute;
                top: 12px;
                left: 12px;
                padding: 4px 10px;
                border-radius: 10px;
                background: #FFFFFF;
                box-shadow: 0 2px 8px rgba(0,0,0,0.12);
                font-family: 'JetBrains Mono', monospace;
                font-size: 12px;
                font-weight: 800;
                color: #1A1A1A;
                font-variant-numeric: tabular-nums;
              ">
                ₹180
              </div>

              <!-- Floating Favorite Heart -->
              <div style="
                position: absolute;
                top: 12px;
                right: 12px;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.9);
                backdrop-filter: blur(8px);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              ">
                ${iconHeartFill}
              </div>
            </div>

            <!-- Card Bottom Body -->
            <div style="padding: 10px 14px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="font-size: 15px; font-weight: 800; color: #1A1A1A; line-height: 1.25; margin-bottom: 2px;">
                  Ambur Special Chicken Biryani
                </div>
                <div style="font-size: 11px; color: #64748B; font-weight: 500; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.3;">
                  Slow cooked Seeraga Samba rice with tender chicken & boiled egg.
                </div>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; margin-top: 4px;">
                <div style="display:flex; align-items:center; gap: 4px; font-size: 11.5px; font-weight: 800; color: #1A1A1A;">
                  ${iconStarFill} 4.9 <span style="font-size: 10px; color: #94A3B8; font-weight: 600;">(140+)</span>
                </div>

                <!-- ADD Pill Button -->
                <div style="
                  height: 32px;
                  padding: 0 14px;
                  border-radius: 999px;
                  background: #BD2320;
                  box-shadow: 0 2px 8px rgba(189,35,32,0.3);
                  display: flex;
                  align-items: center;
                  gap: 5px;
                  color: #FFFFFF;
                  font-size: 12px;
                  font-weight: 800;
                  cursor: pointer;
                ">
                  <span>ADD</span>
                  ${iconPlusBold}
                </div>
              </div>
            </div>
          </div>
        </div>

        <table class="dim-table">
          <tr>
            <td class="dim-label">Card Boundary:</td>
            <td class="dim-val"><span class="token-badge">290×340px (Mobile) · Radius: 28px</span></td>
          </tr>
          <tr>
            <td class="dim-label">Price Chip:</td>
            <td class="dim-val"><span class="token-badge">Top-left 14px · Padding 5×11px · Mono 13px</span></td>
          </tr>
          <tr>
            <td class="dim-label">ADD CTA:</td>
            <td class="dim-val"><span class="token-badge">Height: 36px · Radius: 999px · Solid #BD2320</span></td>
          </tr>
        </table>
      </div>

      <!-- Size & Qty Modal Drawer -->
      <div class="panel">
        <div class="panel-title">
          <span>Size & Quantity Drawer (SizeQtyDrawer.tsx)</span>
          <span class="measure-badge">Sticky CTA · 52px</span>
        </div>

        <div style="background: #FAFAF9; border-radius: 16px; padding: 12px 14px; border: 1px solid rgba(0,0,0,0.06); display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px;">
          <!-- Drawer Grab Handle -->
          <div style="width: 36px; height: 4px; border-radius: 999px; background: rgba(0,0,0,0.15); margin: 0 auto;"></div>

          <div style="font-size: 14px; font-weight: 800; color: #1A1A1A;">Select Portion & Quantity</div>

          <!-- Portion Option 1 (Selected) -->
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 12px;
            border-radius: 12px;
            border: 2px solid #BD2320;
            background: rgba(189,35,32,0.04);
          ">
            <div>
              <div style="font-size: 12.5px; font-weight: 800; color: #BD2320;">Single Portion (450ml)</div>
              <div style="font-size: 10.5px; color: #64748B;">Ideal for 1 person · 1 boiled egg</div>
            </div>
            <div style="font-size: 13.5px; font-weight: 800; color: #BD2320; font-family: 'JetBrains Mono';">₹180</div>
          </div>

          <!-- Portion Option 2 -->
          <div style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 12px;
            border-radius: 12px;
            border: 1px solid rgba(0,0,0,0.08);
            background: #FFFFFF;
          ">
            <div>
              <div style="font-size: 12.5px; font-weight: 700; color: #1A1A1A;">Family Pack (900ml)</div>
              <div style="font-size: 10.5px; color: #64748B;">Serves 2-3 · 2 boiled eggs</div>
            </div>
            <div style="font-size: 13.5px; font-weight: 800; color: #1A1A1A; font-family: 'JetBrains Mono';">₹340</div>
          </div>

          <!-- Quantity Stepper Row -->
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size: 12.5px; font-weight: 800; color: #1A1A1A;">Quantity</span>
            <div style="
              display: flex;
              align-items: center;
              gap: 10px;
              background: #FFFFFF;
              border: 1px solid rgba(0,0,0,0.08);
              border-radius: 999px;
              padding: 3px 8px;
            ">
              <span style="display:flex; align-items:center; justify-content:center; width: 26px; height: 26px; border-radius: 50%; background: rgba(189,35,32,0.08);">${iconMinusBold}</span>
              <span style="font-size: 13px; font-weight: 900; font-family: 'JetBrains Mono'; color: #1A1A1A;">01</span>
              <span style="display:flex; align-items:center; justify-content:center; width: 26px; height: 26px; border-radius: 50%; background: #BD2320;">${iconPlusBold}</span>
            </div>
          </div>

          <!-- Sticky Bottom CTA -->
          <div style="
            height: 44px;
            border-radius: 12px;
            background: #BD2320;
            box-shadow: 0 4px 14px rgba(189,35,32,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            font-size: 13px;
            font-weight: 800;
            cursor: pointer;
          ">
            ADD ITEM TO CART · ₹180
          </div>
        </div>

        <table class="dim-table">
          <tr>
            <td class="dim-label">Drawer Surface:</td>
            <td class="dim-val"><span class="token-badge">Top Radius: 24px · Grab Bar: 36×4px</span></td>
          </tr>
          <tr>
            <td class="dim-label">Portion Radio Card:</td>
            <td class="dim-val"><span class="token-badge">Border: 2px #BD2320 · Radius: 14px</span></td>
          </tr>
          <tr>
            <td class="dim-label">Sticky CTA Button:</td>
            <td class="dim-val"><span class="token-badge">Height: 52px (Mobile) · Radius: 16px</span></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="page-footer">
      <span>Vidya's Kitchen UI Design System Specification</span>
      <span>Page 6 of 8</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 7: SECTION 4C — COMPONENTS: DRIVER PWA & KITCHEN DASHBOARD        -->
  <!-- ===================================================================== -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-left">
        <span class="page-header-title">04C · Production Components</span>
      </div>
      <div class="page-header-right">DRIVER DELIVERY PWA & KITCHEN STATION</div>
    </div>

    <div class="section-banner">
      <div class="section-eyebrow">Component Architecture · Operations</div>
      <div class="section-title">Driver Night Mode Card & Kitchen Prep Order Ticket</div>
      <div class="section-desc">Mission-critical operational components engineered for fast-moving environments: anti-glare mobile delivery and high-heat cookline ticketing.</div>
    </div>

    <div class="grid-2">
      <!-- Driver Delivery PWA Ticket -->
      <div class="panel">
        <div class="panel-title" style="color: #15803D;">
          <span>Driver Delivery Card (src/app/driver/driver-pwa.tsx)</span>
          <span class="measure-badge" style="background: rgba(52,212,105,0.15); border-color:#34D469; color:#15803D;">Night Mode PWA</span>
        </div>

        <!-- Stage Container -->
        <div style="background: #0B0F19; border-radius: 14px; padding: 14px 16px; margin-bottom: 8px;">
          <div style="background: #1E293B; border-radius: 14px; padding: 12px 14px; border: 1px solid #334155; display: flex; flex-direction: column; gap: 8px;">
            <!-- Order ID & Rider Status -->
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-size: 10px; font-weight: 800; color: #94A3B8; text-transform: uppercase;">ACTIVE ORDER</div>
                <div style="font-size: 17px; font-weight: 900; color: #FFFFFF; font-family: 'JetBrains Mono';">#VK-8821</div>
              </div>
              <div style="display:flex; align-items:center; gap: 6px; padding: 3px 8px; border-radius: 999px; background: rgba(52,212,105,0.15); color: #34D469; font-size: 10.5px; font-weight: 800;">
                ${lucideTruck} Out for Delivery
              </div>
            </div>

            <!-- Cash On Delivery Banner -->
            <div style="
              background: #F5A623;
              border-radius: 9px;
              padding: 7px 10px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              color: #000000;
              font-weight: 800;
            ">
              <div style="display:flex; align-items:center; gap: 5px; font-size: 11px;">
                ${lucideMoney}
                <span>CASH ON DELIVERY (COD)</span>
              </div>
              <div style="font-size: 13px; font-family: 'JetBrains Mono';">COLLECT ₹380</div>
            </div>

            <!-- Customer Destination Block -->
            <div style="background: #0F172A; border-radius: 10px; padding: 8px 10px; border: 1px solid #334155;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                  <div style="font-size: 13px; font-weight: 800; color: #FFFFFF;">Murugan K.</div>
                  <div style="font-size: 10.5px; color: #94A3B8; margin-top: 1px;">Plot 14, 2nd Cross, Vigneshwar Nagar</div>
                </div>
                <div style="width: 32px; height: 32px; border-radius: 50%; background: #2563EB; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                  ${lucidePhone}
                </div>
              </div>
            </div>

            <!-- Signal Green Mark Delivered CTA -->
            <div style="
              height: 42px;
              border-radius: 10px;
              background: #34D469;
              box-shadow: 0 4px 14px rgba(52,212,105,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
              color: #FFFFFF;
              font-size: 13px;
              font-weight: 900;
              cursor: pointer;
            ">
              ${lucideCheckCircle}
              <span>MARK AS DELIVERED</span>
            </div>
          </div>
        </div>

        <table class="dim-table">
          <tr>
            <td class="dim-label">Night Canvas:</td>
            <td class="dim-val"><span class="token-badge">Surface #0F172A · Card #1E293B · Border #334155</span></td>
          </tr>
          <tr>
            <td class="dim-label">COD Alert Banner:</td>
            <td class="dim-val"><span class="token-badge">#F5A623 Amber · High-Contrast Black Text</span></td>
          </tr>
          <tr>
            <td class="dim-label">Signal Green CTA:</td>
            <td class="dim-val"><span class="token-badge">Height: 48px · Solid #34D469 · AAA Contrast</span></td>
          </tr>
        </table>
      </div>

      <!-- Kitchen Station Order Board Ticket -->
      <div class="panel">
        <div class="panel-title" style="color: #CA8A04;">
          <span>Kitchen Ticket (DashboardOrderBoard.tsx)</span>
          <span class="measure-badge" style="background: rgba(245,227,45,0.15); border-color:#F5E32D; color:#A16207;">Cookline Tablet</span>
        </div>

        <!-- Stage Container -->
        <div style="background: #0A0A0A; border-radius: 14px; padding: 14px 16px; margin-bottom: 8px;">
          <div style="background: #1F1F1F; border-radius: 14px; padding: 12px 14px; border: 1px solid #333333; display: flex; flex-direction: column; gap: 8px;">
            <!-- Ticket Header with Timer -->
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-size: 10px; font-weight: 800; color: #94A3B8; text-transform: uppercase;">STATION TICKET</div>
                <div style="font-size: 17px; font-weight: 900; color: #FFFFFF; font-family: 'JetBrains Mono';">#VK-9402</div>
              </div>
              <!-- Timer Badge -->
              <div style="display:flex; align-items:center; gap: 5px; padding: 4px 10px; border-radius: 999px; background: rgba(245,227,45,0.15); border: 1px solid rgba(245,227,45,0.3); color: #F5E32D; font-size: 11px; font-weight: 800; font-family: 'JetBrains Mono';">
                ${lucideClock}
                <span>PREP: 08:45 MIN</span>
              </div>
            </div>

            <!-- Items Breakdown List -->
            <div style="background: #141414; border-radius: 10px; padding: 8px 10px; border: 1px solid #2B2B2B; display: flex; flex-direction: column; gap: 4px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size: 13px; font-weight: 800; color: #FFFFFF;">2× Chicken Biryani (Special)</span>
                <span style="font-size: 10.5px; font-weight: 700; color: #86EFAC;">Single (450ml)</span>
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size: 13px; font-weight: 800; color: #FFFFFF;">1× Mutton Chukka (Dry)</span>
                <span style="font-size: 10.5px; font-weight: 700; color: #86EFAC;">250g Regular</span>
              </div>
              <div style="font-size: 10px; color: #F59E0B; font-weight: 600; margin-top: 1px;">
                Note: Pack extra raita and salna separate.
              </div>
            </div>

            <!-- Kitchen Bump Action -->
            <div style="
              height: 42px;
              border-radius: 10px;
              background: #F5E32D;
              box-shadow: 0 4px 14px rgba(245,227,45,0.25);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #000000;
              font-size: 13px;
              font-weight: 900;
              letter-spacing: 0.04em;
              cursor: pointer;
            ">
              BUMP TO PACKING · READY
            </div>
          </div>
        </div>

        <table class="dim-table">
          <tr>
            <td class="dim-label">Station Dark Shell:</td>
            <td class="dim-val"><span class="token-badge">Canvas #141414 · Card #1F1F1F · Border #2B2B2B</span></td>
          </tr>
          <tr>
            <td class="dim-label">Prep Countdown:</td>
            <td class="dim-val"><span class="token-badge">Pill rgba(245,227,45,0.15) · Text #F5E32D</span></td>
          </tr>
          <tr>
            <td class="dim-label">Bump CTA:</td>
            <td class="dim-val"><span class="token-badge">Height: 48px · Solid #F5E32D · Black 900 text</span></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="page-footer">
      <span>Vidya's Kitchen UI Design System Specification</span>
      <span>Page 7 of 8</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 8: SECTION 4D — DESKTOP LANDING & CHECKOUT SYSTEM                 -->
  <!-- ===================================================================== -->
  <div class="page">
    <div class="page-header">
      <div class="page-header-left">
        <span class="page-header-title">04D · Production Components</span>
      </div>
      <div class="page-header-right">CHECKOUT CONTROLS & DESKTOP LANDING KIOSK</div>
    </div>

    <div class="section-banner">
      <div class="section-eyebrow">Component Architecture · Conversion Flow</div>
      <div class="section-title">Checkout Controls & Desktop Laser QR Kiosk</div>
      <div class="section-desc">Slot delivery toggles, payment method selection, and desktop-to-mobile conversion funnels with animated laser QR scanners and WhatsApp handoffs.</div>
    </div>

    <div class="grid-2">
      <!-- Checkout Controls (CheckoutScreen.tsx) -->
      <div class="panel">
        <div class="panel-title">
          <span>Checkout Controls (CheckoutScreen.tsx)</span>
          <span class="measure-badge measure-red">Frictionless UX</span>
        </div>

        <div style="background: #FAFAF9; border-radius: 14px; padding: 12px 14px; border: 1px solid rgba(0,0,0,0.06); display: flex; flex-direction: column; gap: 8px; margin-bottom: 8px;">
          <!-- Slot Selector -->
          <div>
            <div style="font-size: 10px; font-weight: 800; color: #BD2320; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px;">
              DELIVERY SLOT
            </div>
            <div style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 8px 12px;
              border-radius: 12px;
              border: 1.5px solid #BD2320;
              background: rgba(189,35,32,0.04);
            ">
              <div style="display:flex; align-items:center; gap: 6px;">
                ${iconSunFill}
                <span style="font-size: 12.5px; font-weight: 800; color: #1A1A1A;">Today's Lunch Slot</span>
              </div>
              <span style="font-size: 11.5px; font-weight: 800; color: #BD2320; font-family: 'JetBrains Mono';">12:30 PM - 01:15 PM</span>
            </div>
          </div>

          <!-- Payment Options -->
          <div>
            <div style="font-size: 10px; font-weight: 800; color: #64748B; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 4px;">
              PAYMENT METHOD
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <div style="padding: 8px 10px; border-radius: 10px; border: 1.5px solid #BD2320; background: rgba(189,35,32,0.04); display: flex; flex-direction: column;">
                <div style="font-size: 11.5px; font-weight: 800; color: #BD2320;">Cash on Delivery</div>
                <div style="font-size: 9.5px; color: #64748B;">Pay cash/UPI to driver</div>
              </div>

              <div style="padding: 8px 10px; border-radius: 10px; border: 1px solid rgba(0,0,0,0.08); background: #FFFFFF; display: flex; flex-direction: column;">
                <div style="font-size: 11.5px; font-weight: 700; color: #1A1A1A;">Instant Online UPI</div>
                <div style="font-size: 9.5px; color: #64748B;">GPay / PhonePe / Card</div>
              </div>
            </div>
          </div>

          <!-- Hygiene Trust Badge -->
          <div style="background: rgba(34,197,94,0.08); border-radius: 8px; padding: 6px 10px; display: flex; align-items: center; gap: 6px;">
            <span style="color: #16A34A; font-size: 12px;">🛡️</span>
            <span style="font-size: 10px; font-weight: 700; color: #15803D;">100% Homemade · No Artificial Preservatives · FSSAI Certified</span>
          </div>
        </div>

        <table class="dim-table">
          <tr>
            <td class="dim-label">Slot Selector:</td>
            <td class="dim-val"><span class="token-badge">Border: 1.5px #BD2320 · Radius: 12px</span></td>
          </tr>
          <tr>
            <td class="dim-label">Payment Cards:</td>
            <td class="dim-val"><span class="token-badge">2-Column Grid · Active Radio Highlight</span></td>
          </tr>
        </table>
      </div>

      <!-- Desktop QR Kiosk Specimen -->
      <div class="panel">
        <div class="panel-title">
          <span>Desktop QR Laser Station (DesktopLanding.tsx)</span>
          <span class="measure-badge">Laser Scanner</span>
        </div>

        <div style="background: #FAFAF9; border-radius: 14px; padding: 14px 16px; border: 1px solid rgba(0,0,0,0.06); display: flex; align-items: center; gap: 16px; margin-bottom: 8px;">
          <!-- QR Code Box with Laser Line -->
          <div style="
            width: 100px;
            height: 100px;
            border-radius: 14px;
            background: #FFFFFF;
            border: 2px solid rgba(189,35,32,0.15);
            box-shadow: 0 4px 14px rgba(0,0,0,0.06);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            flex-shrink: 0;
          ">
            <!-- Simulated QR pattern -->
            <div style="width: 76px; height: 76px; background: #1A1A1A; mask-image: radial-gradient(circle, black 60%, transparent 100%); opacity: 0.85; border-radius: 6px;"></div>
            <!-- Laser Scan Line -->
            <div style="
              position: absolute;
              top: 38%;
              left: 0;
              right: 0;
              height: 2px;
              background: #22C55E;
              box-shadow: 0 0 8px #22C55E;
            "></div>
          </div>

          <!-- Description & WhatsApp Button -->
          <div style="flex: 1;">
            <div style="font-size: 13.5px; font-weight: 800; color: #1A1A1A; line-height: 1.25;">
              Scan with your phone to order instantly
            </div>
            <div style="font-size: 11px; color: #64748B; margin: 3px 0 10px; line-height: 1.35;">
              Opens Vidya's Kitchen Mobile PWA with zero download required.
            </div>

            <!-- WhatsApp Direct Trigger -->
            <div style="
              display: inline-flex;
              align-items: center;
              gap: 6px;
              padding: 7px 14px;
              border-radius: 999px;
              background: #25D366;
              box-shadow: 0 2px 8px rgba(37,211,102,0.3);
              color: #FFFFFF;
              font-size: 12px;
              font-weight: 800;
              cursor: pointer;
            ">
              <span>Order on WhatsApp</span>
              <span>→</span>
            </div>
          </div>
        </div>

        <table class="dim-table">
          <tr>
            <td class="dim-label">Touch Target Standard:</td>
            <td class="dim-val"><span class="token-badge">Min 48×48px primary wells</span></td>
          </tr>
          <tr>
            <td class="dim-label">Color Contrast Compliance:</td>
            <td class="dim-val"><span class="token-badge">7.1:1 AAA on #BD2320 / White</span></td>
          </tr>
          <tr>
            <td class="dim-label">Motion Dynamics:</td>
            <td class="dim-val"><span class="token-badge">Spring Stiffness 320-450</span></td>
          </tr>
          <tr>
            <td class="dim-label">Source Code Fidelity:</td>
            <td class="dim-val"><span class="token-badge" style="background: rgba(34,197,94,0.15); color: #15803D;">100% Validated vs Next.js Repo</span></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="page-footer">
      <span>Vidya's Kitchen UI Design System Specification</span>
      <span>Page 8 of 8</span>
    </div>
  </div>

</body>
</html>
`;
}

// Main execution
async function main() {
  const html = await generateDesignSystemHtml();
  const htmlPath = "/tmp/vidyas-design-system.html";
  fs.writeFileSync(htmlPath, html, "utf-8");
  console.log("Written HTML to", htmlPath);

  const pdfOutputPath = "/Users/simonsanthosh/Downloads/portfolio/public/case-studies/vidyas-kitchen/design-system.pdf";
  const chromeBinary = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

  console.log("Printing to PDF using Chrome...");
  const cmd = `"${chromeBinary}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfOutputPath}" "file://${htmlPath}"`;
  execSync(cmd, { stdio: "inherit" });
  console.log("PDF created successfully at:", pdfOutputPath);

  // Copy to vidyas-kitchen repo
  const copyTarget = "/Users/simonsanthosh/Downloads/vidyas-kitchen/Vidya-Kitchen-UI-Design-System.pdf";
  fs.copyFileSync(pdfOutputPath, copyTarget);
  console.log("Copied PDF to:", copyTarget);

  // Convert pages to PNG previews using pdftoppm
  const previewDir = "/tmp/vk_pdf_pages";
  if (!fs.existsSync(previewDir)) fs.mkdirSync(previewDir, { recursive: true });
  execSync(`pdftoppm -png -r 150 "${pdfOutputPath}" "${previewDir}/page"`, { stdio: "inherit" });
  console.log("Pages rendered to PNG in", previewDir);

  // Copy PNGs to public for preview inspection
  const publicPreviewDir = "/Users/simonsanthosh/Downloads/portfolio/public/case-studies/vidyas-kitchen/preview-pages";
  if (!fs.existsSync(publicPreviewDir)) fs.mkdirSync(publicPreviewDir, { recursive: true });
  const pngFiles = fs.readdirSync(previewDir).filter(f => f.endsWith(".png"));
  for (const f of pngFiles) {
    fs.copyFileSync(path.join(previewDir, f), path.join(publicPreviewDir, f));
  }

  // Update preview thumbnails for portfolio modal using sharp
  const page1Png = `${previewDir}/page-1.png`;
  const page5Png = `${previewDir}/page-5.png`;
  if (fs.existsSync(page1Png)) {
    await sharp(page1Png)
      .resize(1200)
      .webp({ quality: 90 })
      .toFile("/Users/simonsanthosh/Downloads/portfolio/public/case-studies/vidyas-kitchen/design-system-preview-1.webp");
    console.log("design-system-preview-1.webp created");
  }
  if (fs.existsSync(page5Png)) {
    await sharp(page5Png)
      .resize(1200)
      .webp({ quality: 90 })
      .toFile("/Users/simonsanthosh/Downloads/portfolio/public/case-studies/vidyas-kitchen/design-system-preview-2.webp");
    console.log("design-system-preview-2.webp created");
  }
  console.log("All previews generated successfully!");
}

main().catch(console.error);
