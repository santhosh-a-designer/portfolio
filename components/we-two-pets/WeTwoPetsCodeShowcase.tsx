"use client";

import { useState } from "react";
import {
  Code,
  CheckCircle,
  Copy,
  Terminal,
  Cpu,
  ShieldCheck,
  Robot,
  CurrencyInr,
  ChatCircleDots,
} from "@phosphor-icons/react";

type SnippetTab = {
  id: string;
  badge: string;
  title: string;
  file: string;
  language: string;
  icon: typeof Cpu;
  architectureSummary: string;
  code: string;
  keyCallouts: Array<{ label: string; text: string }>;
};

const SNIPPETS: SnippetTab[] = [
  {
    id: "gemini-contract",
    badge: "01 · MULTI-MODEL FALLBACK",
    title: "Gemini Structured Ingestion Contract",
    file: "backend/main.py",
    language: "python",
    icon: Cpu,
    architectureSummary:
      "Production LLM calls fail on 503s or quota spikes. We engineered a cascading fallback array (Gemini 2.5 Flash → 2.0 Flash → 1.5 Flash) with strict JSON contracts, extracting typed scores (0–100), pros/cons, and target pet categories.",
    keyCallouts: [
      { label: "Resilience", text: "Tries next model candidate if timeout or 503 occurs." },
      { label: "Zero Hallucination UI", text: "Forces exact typed JSON keys; invalid shapes are dropped." },
      { label: "Critic Layer", text: "Separates nominal score from real-world usage review score." },
    ],
    code: `# Multi-model fallback: if 2.5 Flash times out or hits 503, cascade gracefully
GEMINI_MODEL_CANDIDATES = [
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-1.5-flash",
]

def analyze_product_with_gemini(product_title: str, category: str, reviews_text: str = "") -> dict:
    """
    Calls Gemini with retries, timeout, and fallback models.
    Enforces strict structured JSON output for the Pet Engine pipeline.
    """
    prompt = f"""
You are a world-class pet product analyst for an Indian e-commerce platform.
Analyze this product: {product_title} (Category: {category})
Customer Reviews: {reviews_text or "No reviews provided."}

Return ONLY a valid JSON object with EXACTLY these keys:
{{
  "score": <int 0-100 based on quality, value, safety, customer satisfaction>,
  "real_usage_score": <int 0-100 based on actual real-world usage from reviews>,
  "pros": ["<specific pro 1>", "<specific pro 2>", "<specific pro 3>"],
  "cons": ["<specific con 1>", "<specific con 2>"],
  "ai_verdict": "<2-3 sentence expert verdict for Indian pet owners>",
  "target_pet": "<e.g. 'Large Dogs', 'All Cats', 'Kittens'>",
  "seasonality_tags": ["<e.g. Summer, March-May>"],
  "flag_for_international": <true if score >= 85, else false>
}}
"""
    last_err: Optional[Exception] = None
    for model_name in GEMINI_MODEL_CANDIDATES:
        for attempt in range(2):
            try:
                m = genai.GenerativeModel(model_name)
                response = m.generate_content(prompt, request_options={"timeout": 120})
                return _parse_gemini_json(response.text.strip())
            except Exception as e:
                last_err = e
                time.sleep(2.0 if attempt == 0 else 1.0)
    raise RuntimeError(f"All Gemini models exhausted. Last error: {last_err}")`,
  },
  {
    id: "india-veto",
    badge: "02 · THE INDIA VETO",
    title: "11-Store Marketplace Gap Checker",
    file: "backend/india_checker.py",
    language: "python",
    icon: ShieldCheck,
    architectureSummary:
      "A product is NOT exclusive if someone in India already sells it. This engine cross-checks 11 Indian platforms (Amazon.in, Flipkart, HUFT, Supertails, Zigly) via Bright Data Web Unlocker and Shopify JSON search APIs, vetoing duplicates immediately.",
    keyCallouts: [
      { label: "Coverage", text: "Cross-checks general marketplaces + specialty Indian pet retail." },
      { label: "Anti-Bot Bypass", text: "Routes through Bright Data Web Unlocker to prevent empty-HTML false positives." },
      { label: "Fuzzy Matching", text: "SequenceMatcher + brand token overlap catches deceptive supplier renames." },
    ],
    code: `# Check across 11 Indian marketplaces before approving catalog gap
DOMESTIC_CHANNELS = {
    "marketplaces": ["Amazon.in", "Flipkart", "Ubuy India", "Cart2India", "IndiaMART"],
    "pet_specialty": ["Heads Up For Tails", "Supertails", "Zigly", "Petsworld", "PawsIndia"]
}

def check_single_store(product_title: str, brand: str, store_url: str) -> dict:
    """
    Scrapes Indian store via Bright Data Web Unlocker (or Shopify suggest.json).
    Returns match_score and auto-vetoes if product already exists locally.
    """
    clean_query = _normalize(f"{brand} {product_title}")
    rendered_html = _fetch_via_bright_data(f"{store_url}/search?q={quote(clean_query)}")
    
    candidates = _parse_store_results(rendered_html)
    for item in candidates:
        similarity = SequenceMatcher(None, _normalize(item.title), clean_query).ratio()
        
        # High confidence match: Product already sold in India
        if similarity >= 0.82 or (brand.lower() in item.title.lower() and similarity >= 0.65):
            return {
                "is_gap": False,
                "status": "REJECTED",
                "reason": f"Found Indian match on {item.store_name} (similarity: {similarity:.2f})",
                "matched_url": item.url
            }
            
    return {"is_gap": True, "status": "PENDING_REVIEW", "confidence": 0.94}`,
  },
  {
    id: "human-gate",
    badge: "03 · HUMAN-IN-THE-LOOP",
    title: "Two-Human Manager Approval Lock",
    file: "backend/main.py & database/v19_manager_bridge.sql",
    language: "python",
    icon: CheckCircle,
    architectureSummary:
      "We strictly blocked the AI from auto-publishing products to wetwopets.com. Ingestion agents write to STAGING or PENDING; a product row is only promoted to LIVE after two distinct human managers sign off on margin and quality.",
    keyCallouts: [
      { label: "Zero Self-Publishing", text: "AI score is advisory; only human credentials can flip status." },
      { label: "Dual Signature", text: "Requires two distinct manager IDs to eliminate single-curator bias." },
      { label: "Audit Ledger", text: "Timestamped audit trail logged in manager_votes before Launch Pad activation." },
    ],
    code: `@app.post("/approve/{product_id}")
async def approve_product_for_live(
    product_id: str, 
    manager_auth: HTTPBasicCredentials = Depends(verify_manager_credentials)
):
    """
    Enforces the Two-Human Veto rule.
    Even with a 98/100 AI score, products remain unlisted until two humans vote.
    """
    manager = get_manager_by_email(manager_auth.username)
    
    # 1. Record the human curator's vote in audit ledger
    supabase.table("manager_votes").upsert({
        "product_id": product_id,
        "manager_id": manager["id"],
        "vote": "APPROVE",
        "voted_at": datetime.now(timezone.utc).isoformat()
    }).execute()
    
    # 2. Check total unique approvals for this product
    votes = supabase.table("manager_votes") \\
        .select("manager_id") \\
        .eq("product_id", product_id) \\
        .eq("vote", "APPROVE") \\
        .execute()
        
    unique_approvals = len({v["manager_id"] for v in votes.data})
    
    # 3. Only flip to LIVE when two distinct human managers have signed off
    if unique_approvals >= 2:
        supabase.table("products").update({
            "status": "APPROVED",
            "ready_for_launchpad": True
        }).eq("id", product_id).execute()
        
        return {"status": "APPROVED", "approvals": unique_approvals, "message": "Two approvals verified. Unlocked for Launch Pad."}
        
    return {"status": "WAITING_SECOND_VOTE", "approvals": unique_approvals, "message": "1/2 approvals recorded."}`,
  },
  {
    id: "tailz-agent",
    badge: "04 · AUTONOMOUS AGENT",
    title: "Tailz WhatsApp Shopping Assistant Guardrails",
    file: "backend/whatsapp_bot.py",
    language: "python",
    icon: ChatCircleDots,
    architectureSummary:
      "Tailz handles customer support and order tracking over WhatsApp. Strict system prompts enforce brand boundaries (never discuss foreign suppliers or customs) while speaking in an approachable pet companion persona.",
    keyCallouts: [
      { label: "Operational Containment", text: "Hard prompt veto: never mention drop-shipping, suppliers, or foreign ports." },
      { label: "Grounded Lookup", text: "Only references live orders and active catalog rows from Supabase." },
      { label: "Customer-Safe Stages", text: "Translates internal procurement stages into 8 reassuring milestones." },
    ],
    code: `WHATSAPP_SYSTEM_PROMPT = """You are Tailz AI, the wetwopets WhatsApp assistant.
wetwopets is an Indian e-commerce store that sells premium pet products, delivered across India.

STRICT OPERATIONAL RULES (Never break these):
1. NEVER discuss supply chain, suppliers, sourcing countries, imports, customs, or where products 
   ship from. If asked, say "We deliver straight from our store to your doorstep!"
2. NEVER invent order information. Only reference order data retrieved from our database.
3. NEVER make up product names, prices, or URLs. Recommend ONLY from the active catalog.
4. Keep text clean: use bold (*text*) and italic (_text_) formatting. NO emojis.

Your Persona:
- A fun, loyal pet companion — think a clever golden retriever who learned to type.
- Keep messages short, warm, and helpful (under 300 characters for WhatsApp).
- Sign off casually: "— Tailz" or "Your pal, Tailz".

Key Business Information:
- Delivery timeline: 10-14 business days (free shipping across India).
- Payment options: Cashfree (UPI, cards, netbanking), Cash on Delivery (COD + ₹49 fee).
- Returns: 30-day hassle-free return policy.
- Paws Plus members: 10% off exclusive imports + free express delivery."""`,
  },
  {
    id: "dynamic-pricing",
    badge: "05 · MARGIN GUARD",
    title: "Dynamic Landed-Cost Pricing Engine",
    file: "backend/dynamic_pricing.py & pricing_calendar.py",
    language: "python",
    icon: CurrencyInr,
    architectureSummary:
      "Automated set-and-forget pricing engine that computes landed costs in INR (supplier unit cost, FX conversion, air freight, customs buffer, and packaging), flexes with an Indian festival calendar, and protects gross margins.",
    keyCallouts: [
      { label: "Landed Formula", text: "Cost includes FX rate, customs duty, air freight, and Chennai hub unboxing." },
      { label: "Festival Surge/Drop", text: "Calendar modifiers adjust markup during Diwali or monsoon campaigns." },
      { label: "Margin Guard Floor", text: "Hard floor blocks prices from dropping below minimum profitability." },
    ],
    code: `def compute_dynamic_price(product_row: dict, supplier_cost_foreign: float, currency: str) -> dict:
    """
    Computes automated customer price:
    Price = Landed Cost (INR) × Category Multiplier × Calendar Modifier
    Always guarded above a strict minimum gross margin floor.
    """
    config = get_pricing_config()
    
    # 1. Derive true landed cost in INR (FX + freight + customs + hub QC repack)
    landed_inr = compute_landed_cost_inr(supplier_cost_foreign, currency, weight_kg=product_row.get("weight_kg", 0.8))
    
    # 2. Resolve category multiplier (e.g. Travel: 2.2×, Toys: 2.5×)
    category_multiplier = config["category_multipliers"].get(product_row["category"], 2.0)
    
    # 3. Apply live India festival calendar modifier (e.g. Diwali promo: 0.92×, Monsoon demand: 1.05×)
    calendar_mod = active_calendar_modifier(datetime.now(timezone.utc))
    
    # 4. Calculate raw target price
    raw_price = landed_inr * category_multiplier * calendar_mod["multiplier"]
    
    # 5. Margin Guard: Ensure price never drops below minimum gross margin
    margin_floor = landed_inr / (1.0 - config["min_gross_margin_pct"])
    final_price_inr = max(raw_price, margin_floor)
    
    return {
        "price_inr": _round_clean(final_price_inr), # Rounds to clean e-commerce endings (e.g. ₹2,499)
        "compare_at_inr": _round_clean(final_price_inr * 1.18),
        "gross_margin_pct": round((final_price_inr - landed_inr) / final_price_inr * 100, 1),
        "calendar_event": calendar_mod["event_name"]
    }`,
  },
];

export default function WeTwoPetsCodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippet = SNIPPETS[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-2 border-black bg-white shadow-[4px_4px_0_0_#000] overflow-hidden my-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-black bg-[#FAF9F5] p-3 sm:px-5 sm:py-3.5 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Terminal size={18} weight="bold" className="text-[#0D2E28] shrink-0" />
          <span className="font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider text-black truncate">
            From the Code: AI Agent Architectures &amp; Contracts
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] uppercase font-bold text-zinc-500 bg-white px-2 py-0.5 sm:py-1 border border-black/20">
            <span className="w-2 h-2 rounded-full bg-[#00C16A] animate-pulse" />
            Production Engine
          </span>
        </div>
      </div>

      {/* Tab Navigation — Smooth horizontal touch-scroll on mobile, rigid grid on desktop */}
      <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 border-b-2 border-black bg-zinc-100 overflow-x-auto divide-x-2 divide-black select-none scrollbar-none">
        {SNIPPETS.map((tab, idx) => {
          const isActive = activeTab === idx;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`p-2.5 sm:p-3 text-left transition-colors font-mono cursor-pointer flex flex-col justify-between min-h-[58px] sm:min-h-[64px] min-w-[160px] sm:min-w-0 shrink-0 sm:shrink ${
                isActive
                  ? "bg-black text-white"
                  : "bg-white text-zinc-800 hover:bg-[#FAF9F5]"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Icon size={14} className={isActive ? "text-[#FAED00]" : "text-zinc-500"} />
                <span
                  className={`text-[8.5px] sm:text-[9px] font-black tracking-wider uppercase truncate ${
                    isActive ? "text-[#FAED00]" : "text-zinc-500"
                  }`}
                >
                  {tab.badge}
                </span>
              </div>
              <span className="text-[10.5px] sm:text-[11px] font-bold leading-tight truncate">
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Code Container */}
      <div className="p-3 sm:p-6 bg-[#0B0F12] text-zinc-100">
        {/* File Path & Copy Row — Wraps cleanly on mobile without clipping */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-3 mb-3 sm:mb-4">
          <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs min-w-0 max-w-[calc(100%-110px)]">
            <Code size={15} className="text-[#FAED00] shrink-0" />
            <span className="text-zinc-400 shrink-0">File:</span>
            <span className="text-white font-bold truncate">{snippet.file}</span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 px-2.5 py-1 rounded transition-colors cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <CheckCircle size={13} className="text-[#00C16A]" />
                <span className="text-[#00C16A]">Copied</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Plain-English Architecture Context */}
        <div className="mb-3 sm:mb-4 bg-zinc-900/90 border-l-4 border-[#FAED00] p-2.5 sm:p-3 text-[11px] sm:text-xs leading-relaxed text-zinc-300">
          <strong className="text-white block font-mono text-[9px] sm:text-[10px] uppercase tracking-wider mb-1">
            System Design Context:
          </strong>
          {snippet.architectureSummary}
        </div>

        {/* Syntax-Highlighted Code Block with Touch-Scroll */}
        <pre className="font-mono text-[10px] sm:text-xs leading-relaxed overflow-x-auto p-3 sm:p-4 bg-[#050709] border border-zinc-800 text-zinc-200 rounded touch-pan-x">
          <code>{snippet.code}</code>
        </pre>

        {/* Key Architectural Callouts */}
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {snippet.keyCallouts.map((item) => (
            <div key={item.label} className="bg-zinc-900/70 p-2.5 rounded border border-zinc-800">
              <span className="font-mono text-[10px] font-bold text-[#FAED00] block uppercase tracking-wider">
                {item.label}
              </span>
              <p className="text-[11px] text-zinc-300 mt-1 leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
