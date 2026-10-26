"use client";

import React, { useEffect, useRef, useState } from "react";

interface LogoPoint {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  originX: number;
  originY: number;
  alpha: number;
  size: number;
  color: string;
}

const CLIENT_PRESETS = [
  { id: "all", label: "00 // SYSTEM CORE", caption: "Multi-Node Architecture & Full Studio Roster" },
  { id: "parla", label: "01 // PARLA × NFM", caption: "Live Assisted Video Commerce Engine · US Enterprise" },
  { id: "wetwo", label: "02 // WE TWO PETS", caption: "Curated Pet Care Ecosystem · Brand & Checkout Architecture" },
  { id: "irasus", label: "03 // IRASUS TELEMETRY", caption: "Industrial EV Battery Analytics · 3-Tier Alert Triage" },
  { id: "vidya", label: "04 // VIDYA'S KITCHEN", caption: "Zero-Commission Food Commerce PWA · Automated Dispatch" },
  { id: "makeon", label: "05 // MAKEON STEM", caption: "7-Move Interactive Hardware Build Loop · Scalable Design System" },
];

export default function DotMatrixLogoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeClient, setActiveClient] = useState("all");
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const pointsRef = useRef<LogoPoint[]>([]);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const updateSize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initGrid(rect.width, rect.height);
    };

    const initGrid = (width: number, height: number) => {
      const step = 14;
      const cols = Math.floor(width / step);
      const rows = Math.floor(height / step);
      const startX = (width - cols * step) / 2;
      const startY = (height - rows * step) / 2;
      const points: LogoPoint[] = [];

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = startX + c * step;
          const y = startY + r * step;
          points.push({
            x,
            y,
            targetX: x,
            targetY: y,
            originX: x,
            originY: y,
            alpha: 0.18,
            size: 1.5,
            color: "#ffffff",
          });
        }
      }
      pointsRef.current = points;
      applyPattern(activeClient, width, height);
    };

    const applyPattern = (mode: string, width: number, height: number) => {
      const points = pointsRef.current;
      const cx = width / 2;
      const cy = height / 2;

      points.forEach((p) => {
        const dx = p.originX - cx;
        const dy = p.originY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (mode === "all") {
          // Subtle circular wave constellation with concentric rings
          const ring1 = Math.abs(dist - 70) < 16;
          const ring2 = Math.abs(dist - 140) < 14;
          const ring3 = Math.abs(dist - 210) < 10;
          const cross = Math.abs(dx) < 6 || Math.abs(dy) < 6;

          if (ring1 || ring2 || ring3 || (cross && dist < 220)) {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = ring1 ? 0.95 : ring2 ? 0.75 : 0.45;
            p.size = ring1 ? 2.6 : ring2 ? 2.2 : 1.8;
            p.color = ring1 ? "#FF7410" : "#ffffff";
          } else {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = 0.12;
            p.size = 1.2;
            p.color = "#ffffff";
          }
        } else if (mode === "parla") {
          // P symbol in pixel dots
          const inPVertical = dx >= -70 && dx <= -42 && dy >= -80 && dy <= 80;
          const inPTop = dx >= -70 && dx <= 40 && dy >= -80 && dy <= -50;
          const inPMid = dx >= -70 && dx <= 40 && dy >= -10 && dy <= 20;
          const inPRight = dx >= 20 && dx <= 50 && dy >= -80 && dy <= 20;

          if (inPVertical || inPTop || inPMid || inPRight) {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = 0.95;
            p.size = 2.8;
            p.color = "#FF7410";
          } else {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = 0.08;
            p.size = 1.0;
            p.color = "#ffffff";
          }
        } else if (mode === "wetwo") {
          // W / Heart Pet Geometry
          const inWLeft = Math.abs(dx + 60) < 14 && Math.abs(dy) < 60;
          const inWRight = Math.abs(dx - 60) < 14 && Math.abs(dy) < 60;
          const inWCenter = Math.abs(dx) < 14 && dy > -10 && dy < 60;
          const inWDiag1 = Math.abs((dx + 30) - (dy - 20) * 0.5) < 12 && dy > 0 && dy < 60;
          const inWDiag2 = Math.abs((dx - 30) + (dy - 20) * 0.5) < 12 && dy > 0 && dy < 60;

          if (inWLeft || inWRight || inWCenter || inWDiag1 || inWDiag2) {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = 0.95;
            p.size = 2.8;
            p.color = "#ffffff";
          } else {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = 0.08;
            p.size = 1.0;
            p.color = "#ffffff";
          }
        } else if (mode === "irasus") {
          // Battery Telemetry Icon / Bolt
          const inBox =
            (Math.abs(dx) < 60 && Math.abs(dy) < 85 && (Math.abs(dx) > 46 || Math.abs(dy) > 72)) ||
            (Math.abs(dx) < 24 && dy <= -85 && dy >= -98);
          const inBolt =
            (Math.abs(dx + dy * 0.4) < 10 && dy > -50 && dy < 10) ||
            (Math.abs(dx + (dy - 20) * 0.5) < 10 && dy >= 0 && dy < 50);

          if (inBox || inBolt) {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = 0.95;
            p.size = 2.8;
            p.color = inBolt ? "#FF7410" : "#ffffff";
          } else {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = 0.08;
            p.size = 1.0;
            p.color = "#ffffff";
          }
        } else if (mode === "vidya") {
          // V + Steam Flame Geometry
          const inVLeft = Math.abs((dx + 35) + dy * 0.5) < 14 && dy > -70 && dy < 70;
          const inVRight = Math.abs((dx - 35) - dy * 0.5) < 14 && dy > -70 && dy < 70;
          const inTopStar = Math.abs(dx) < 8 && Math.abs(dy + 85) < 16;

          if (inVLeft || inVRight || inTopStar) {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = 0.95;
            p.size = 2.8;
            p.color = inTopStar ? "#FF7410" : "#ffffff";
          } else {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = 0.08;
            p.size = 1.0;
            p.color = "#ffffff";
          }
        } else if (mode === "makeon") {
          // 7-Move Loop / Hexagon Matrix
          const angle = Math.atan2(dy, dx);
          const r = Math.abs(dist - 75);
          const hexMod = Math.abs((angle % (Math.PI / 3)) - Math.PI / 6);
          const inHex = r < 18 && hexMod < 0.35;
          const inCore = dist < 22;

          if (inHex || inCore) {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = 0.95;
            p.size = 2.8;
            p.color = inCore ? "#FF7410" : "#ffffff";
          } else {
            p.targetX = p.originX;
            p.targetY = p.originY;
            p.alpha = 0.08;
            p.size = 1.0;
            p.color = "#ffffff";
          }
        }
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Animation Loop with interactive mouse repulsion
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const mx = mousePos.x;
      const my = mousePos.y;
      const points = pointsRef.current;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let forceX = 0;
        let forceY = 0;

        if (dist < 100 && dist > 0) {
          const force = (100 - dist) / 100;
          forceX = (dx / dist) * force * 16;
          forceY = (dy / dist) * force * 16;
        }

        // Smooth physics towards target + force
        p.x += (p.targetX + forceX - p.x) * 0.12;
        p.y += (p.targetY + forceY - p.y) * 0.12;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateSize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [activeClient, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  const currentPreset = CLIENT_PRESETS.find((c) => c.id === activeClient) || CLIENT_PRESETS[0];

  return (
    <div className="relative w-full overflow-hidden border border-[#1e242d] bg-[#07090c] p-4 sm:p-6 lg:p-8">
      {/* Top Console Status HUD */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#181f28] pb-4">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#FF7410]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e2e8f0]">
            DOT-MATRIX LOGO CONSTELLATION
          </span>
          <span className="font-mono text-[10px] text-[#64748b]">[ENGINE V2.4]</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-[#64748b]">
          <span>[ PARTICLES: ACTIVE ]</span>
          <span className="text-[#334155]">/</span>
          <span>[ INTERACTIVE MESH ]</span>
        </div>
      </div>

      {/* Main Interactive Canvas Area */}
      <div
        className="relative mx-auto h-[320px] w-full max-w-4xl sm:h-[400px] cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <canvas ref={canvasRef} className="h-full w-full" />

        {/* Ambient CRT Scanline Overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.45) 50%)",
            backgroundSize: "100% 4px",
          }}
        />

        {/* Subtle corner brackets */}
        <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] text-[#334155]">[ 00:00 ]</div>
        <div className="pointer-events-none absolute right-2 top-2 font-mono text-[10px] text-[#334155]">[ GRID_ACTIVE ]</div>
        <div className="pointer-events-none absolute bottom-2 left-2 font-mono text-[10px] text-[#334155]">[ CHENNAI_NODE ]</div>
        <div className="pointer-events-none absolute bottom-2 right-2 font-mono text-[10px] text-[#334155]">[ PARALLAX_ON ]</div>
      </div>

      {/* Active Preset Subtitle */}
      <div className="mt-3 text-center">
        <p className="font-mono text-[11px] text-[#FF7410]">{currentPreset.caption}</p>
      </div>

      {/* Preset Selector Tabs */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-[#181f28] pt-5">
        {CLIENT_PRESETS.map((preset) => {
          const isActive = activeClient === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => setActiveClient(preset.id)}
              className={`group flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all duration-200 ${
                isActive
                  ? "border-[#FF7410] bg-[#FF7410]/10 text-white shadow-[0_0_15px_rgba(255,116,16,0.15)]"
                  : "border-[#1e242d] bg-[#0c1015] text-[#94a3b8] hover:border-[#334155] hover:text-white"
              }`}
            >
              <span className={`inline-block h-1.5 w-1.5 ${isActive ? "bg-[#FF7410]" : "bg-[#475569] group-hover:bg-[#94a3b8]"}`} />
              <span>{preset.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
