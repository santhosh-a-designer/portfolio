import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const ROOT = "/Users/simonsanthosh/Downloads/portfolio";
const VIDYA_ROOT = "/Users/simonsanthosh/Downloads/vidyas-kitchen";
const PWA_SHOTS = path.join(ROOT, "public/case-studies/vidyas-kitchen/component-shots");
const DASH_SHOTS = path.join(PWA_SHOTS, "dashboard");
const DRIVER_SHOTS = path.join(PWA_SHOTS, "driver");

const PDF_DEST = path.join(ROOT, "public/case-studies/vidyas-kitchen/design-system.pdf");
const VIDYA_PDF_DEST = path.join(VIDYA_ROOT, "Vidya-Kitchen-UI-Design-System.pdf");

// Helper: base64
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

// Phosphor Icon SVG Loader
async function loadPhosphorSvg(iconName, weight = "regular", size = 20, color = "#FFFFFF") {
  try {
    const defPath = `/Users/simonsanthosh/Downloads/vidyas-kitchen/node_modules/@phosphor-icons/react/dist/defs/${iconName}.es.js`;
    if (!fs.existsSync(defPath)) return `<svg width="${size}" height="${size}"></svg>`;
    const mod = await import(defPath);
    const map = mod.default || mod.d || mod.e;
    const reactNode = map.get(weight) || map.get("regular");
    if (!reactNode) return `<svg width="${size}" height="${size}"></svg>`;
    
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
    return `<svg width="${size}" height="${size}"></svg>`;
  }
}

// Lucide Icon SVG Loader
async function loadLucideSvg(iconName, size = 20, color = "#FFFFFF", strokeWidth = 2) {
  try {
    const iconFile = `/Users/simonsanthosh/Downloads/vidyas-kitchen/node_modules/lucide-react/dist/esm/icons/${iconName}.js`;
    if (!fs.existsSync(iconFile)) return `<svg width="${size}" height="${size}"></svg>`;
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
    return `<svg width="${size}" height="${size}"></svg>`;
  }
}

console.log("Master script scaffolding verified.");
