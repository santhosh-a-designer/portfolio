import type { FlowDiagramData, IASurfaceColumn, VidyasChallenge, VidyasStackItem, VidyasArchNode } from "@/lib/vidyasKitchenCaseStudyContent";

export const weTwoJourney = [
  {
    stage: "Discover",
    goal: "Make a new brand feel worth a look",
    pain: "Indian pet retail already looks like an orange marketplace",
    shipped: "A cream editorial home, an exclusive-import rail, and guides for the problems you notice before you buy",
    why: "A pet-boutique theme cannot pull only the products two people have voted live",
  },
  {
    stage: "Choose",
    goal: "Judge one object, not a 10,000-row catalog",
    pain: "Most “international” gear is already on Amazon.in",
    shipped: "Shop filters for travel, furniture, fashion, toys. A product page with proof under the buy button",
    why: "Templates assume every row is sellable. Ours stay hidden until they are live",
  },
  {
    stage: "Commit",
    goal: "Take the payment on our domain",
    pain: "Checkout dies on email-password forms, or hops out to Amazon",
    shipped: "One URL for cart, phone code, then Cashfree or pay on delivery",
    why: "An affiliate link would have made us a blog with a logo",
  },
  {
    stage: "Receive",
    goal: "Show the hub’s work in parent language",
    pain: "The real path is source, then a Chennai hub, then a branded box, then the carrier",
    shipped: "Order stages say preparing and quality check. The tracking number shows up after it ships",
    why: "A default processing / shipped bar cannot tell that story",
  },
  {
    stage: "Come back",
    goal: "Give a reason to open the site again",
    pain: "A one-off import buyer disappears after delivery",
    shipped: "Wishlist, Paws Plus, guides, and a recommendation pass. Tailz can track an order",
    why: "A theme can add a blog. It cannot score what a member did and write back",
  },
  {
    stage: "Source",
    goal: "Find gear India does not already sell",
    pain: "Scraping a foreign marketplace is useless if HUFT already stocks it",
    shipped: "Hunters write staging rows. An India check can reject the duplicate",
    why: "A CSV upload has no India-availability veto",
  },
  {
    stage: "Approve",
    goal: "Keep a model from publishing junk",
    pain: "A high score is still a guess",
    shipped: "Two human approvals, then a person launches it. The model’s vote does not count",
    why: "A publish button is not a vote tally",
  },
] as const;

export const weTwoResearch = [
  {
    label: "The shelf",
    title: "What India already sells",
    body: "The research method is a veto. Amazon.in, Flipkart, Meesho, HUFT, Supertails, Zigly, and a handful of other Indian shops get checked before a product can be called exclusive. A hit means skip, or reject.",
  },
  {
    label: "The mismatch",
    title: "Titles lie",
    body: "The same vest is a cooling jacket in one country and a summer coat on HUFT. Matching American product IDs failed immediately. Those IDs never line up with Indian ones. Word overlap and an image hash catch what the title hides. A person still votes on the leftovers.",
  },
  {
    label: "The parent",
    title: "Content before the cart",
    body: "The live home already teaches the problems people notice first: panting before the walk, a cat that is under-stimulated, monsoon mess, a back seat that is not a carrier. The about page states the bet. Thoughtfully chosen products that families in India were missing.",
  },
] as const;

export const weTwoFeedback = [
  {
    n: "01",
    title: "Two people, not the model",
    body: "A score can flag a product. It cannot list it. Two human approvals are required. An AI vote is ignored on purpose.",
  },
  {
    n: "02",
    title: "A dead source comes down",
    body: "A verification pass reopens the source page. If the price or the stock is gone, a live product can return to pending. It does not get to stay up because it once scored well.",
  },
  {
    n: "03",
    title: "Margin can unpublish",
    body: "Duty, freight, and repacking have a floor. If the landed cost eats it, the listing can come off the shop. That is feedback from the unit economics, not from a survey.",
  },
] as const;

export const weTwoIA: IASurfaceColumn[] = [
  {
    id: "store",
    label: "Storefront",
    tag: "Store",
    steps: [
      "Home, guides, and the exclusive-import rail",
      "Shop filters and a single product page",
      "Cart, +91 code, Cashfree or pay on delivery",
      "Orders and track-on-this-site",
    ],
  },
  {
    id: "engine",
    label: "Pet Engine",
    tag: "Engine",
    steps: [
      "Hunt foreign and Indian listings",
      "Score: pros, cons, who it is for",
      "Reject anything India already sells",
      "Price from landed cost, not a guess",
    ],
  },
  {
    id: "desk",
    label: "Vote desk",
    tag: "Desk",
    steps: [
      "Pending queue, not the shop",
      "Two human approvals",
      "A person presses launch",
      "Verification can pause it again",
    ],
  },
  {
    id: "tailz",
    label: "Tailz",
    tag: "Tailz",
    steps: [
      "Menu for track, browse, shipping, returns",
      "Recommends only from the live catalog",
      "Order templates: confirmed, shipped, delivered",
      "Does not browse the open web",
    ],
  },
];

export const weTwoFlows: FlowDiagramData[] = [
  {
    id: "buy",
    title: "Buy",
    steps: [
      { id: "b1", label: "Home", type: "start" },
      { id: "b2", label: "Short shop", type: "process" },
      { id: "b3", label: "One product", type: "process" },
      { id: "b4", label: "Pay here?", type: "decision" },
      { id: "b5", label: "Phone code", type: "process" },
      { id: "b6", label: "Our order", type: "end" },
    ],
  },
  {
    id: "hunt",
    title: "Hunt",
    steps: [
      { id: "h1", label: "A listing", type: "start" },
      { id: "h2", label: "Score it", type: "process" },
      { id: "h3", label: "In India?", type: "decision" },
      { id: "h4", label: "Pending", type: "process" },
      { id: "h5", label: "Two votes", type: "process" },
      { id: "h6", label: "Live", type: "end" },
    ],
  },
  {
    id: "return",
    title: "Come back",
    steps: [
      { id: "r1", label: "Delivered", type: "start" },
      { id: "r2", label: "Open again?", type: "decision" },
      { id: "r3", label: "Tailz or a guide", type: "process" },
      { id: "r4", label: "Wishlist", type: "process" },
      { id: "r5", label: "Still ours", type: "end" },
    ],
  },
];

export const weTwoChallenges: VidyasChallenge[] = [
  {
    id: "01",
    title: "OWN THE ORDER (BYPASSING THE AFFILIATE TRAP)",
    surface: "1-Page Checkout & Phone Auth",
    stake: "If the customer pays Amazon or an overseas supplier, we are just an affiliate review blog with a logo.",
    happened: "Early advice suggested affiliate links for foreign goods. We locked in direct brand ownership: cart, +91 phone-code authentication, Cashfree UPI, and Cash on Delivery on our own domain (wetwopets.com).",
    whyHard: "Affiliate links are trivial to demo. Direct checkout requires phone OTPs, payment webhooks, Cashfree integration, COD fee logic, and handling the supplier purchase privately in backend ops.",
    triedFirst: "Review-style product listings that deep-linked out to international retail pages.",
    worked: "A seamless single-route checkout: Cart → +91 Phone Code → Delivery Address → Cashfree / COD. Ops receives fulfillment links privately by email; the customer does not leave our site.",
    outcome: "Direct customer relationship on our own domain — 500+ global products evaluated and securely processed.",
  },
  {
    id: "02",
    title: "MULTI-MODEL AI FLOW & THE 2-HUMAN VETO GATE",
    surface: "Pet Engine & Sourcing Pipeline",
    stake: "An autonomous AI scraper will inevitably publish duplicates already sold in India, hallucinate safety, or erode margins.",
    happened: "Nightly spiders crawl global pet design catalogs across US, UK, Singapore, and China (500+ items ingested). Gemini multimodal AI scores items 0–100 (safety, ergonomics, breed fit). Automated image-hashing and NLP cross-check Amazon.in, HUFT, Supertails, and Zigly to auto-reject duplicates. High scores only flag candidates: two human curators must vote before any item goes live.",
    whyHard: "Titles lie across borders (a 'cooling vest' in the US is a 'summer coat' on HUFT). Foreign SKUs never match Indian barcodes. Landed costs (duty, freight, repacking) must be calculated accurately before publishing.",
    triedFirst: "Matching product IDs and letting AI high scores auto-publish to the storefront.",
    worked: "Multi-layered verification: Perceptual image hashing + token overlap catches hidden duplicates. Human vote desk requires two independent team approvals. Unit economics recalculate on live currency changes.",
    outcome: "Catalog integrity backed by automated multi-channel veto and dual-human sign-off.",
  },
  {
    id: "03",
    title: "CHENNAI HUB TRANSPARENCY & CONVERSATIONAL TAILZ AI",
    surface: "Fulfillment, Tracking & Support",
    stake: "Overseas shipments create anxiety and courier blackouts. A hallucinating support bot would invent prices or expose suppliers.",
    happened: "All international items ship directly to our Chennai hub for quality inspection, sanitation, and repacking into We Two branded boxes before local courier handoff. The order tracker and Tailz conversational bot are grounded strictly in live Supabase tables.",
    whyHard: "Standard courier APIs skip the hub or show confusing origin airports. General LLM support bots tend to invent delivery estimates or reference foreign sources.",
    triedFirst: "Generic courier tracking widgets with no hub language, plus an ungrounded web chatbot.",
    worked: "A transparent 4-stage tracking visualizer: Sourcing → Quality Check at Chennai Hub → We Two Branded Packing → Express Carrier Dispatch. Tailz AI uses deterministic order state templates and live catalog access only.",
    outcome: "Anxiety-free unboxing experience matching physical delivery. Tailz grounded strictly in live Supabase orders.",
  },
];

export const weTwoAIFlow = [
  {
    step: "01",
    phase: "Global Sourcing Spiders",
    title: "Nightly Multi-Region Crawl",
    desc: "Autonomous crawlers scout curated boutique pet manufacturers across the US, UK, Europe, and Japan for ergonomic, design-forward pet gear.",
    tech: "FastAPI · Headless Crawlers · Staging Queue",
  },
  {
    step: "02",
    phase: "Multimodal AI Scoring",
    title: "Gemini Vision & Material Analysis",
    desc: "Evaluates product imagery and specs to generate a 0–100 ai_score, pros, cons, target pet family (dog/cat/size), and season appropriateness.",
    tech: "Gemini · Structured JSON Schema",
  },
  {
    step: "03",
    phase: "India Market Veto",
    title: "Anti-Duplicate Computer Vision",
    desc: "Perceptual image hashing and fuzzy title matching cross-reference Amazon.in, Flipkart, HUFT, Supertails, and Zigly. Any Indian hit is auto-rejected.",
    tech: "pHash Image Hashing · Fuzzy NLP · Competitor APIs",
  },
  {
    step: "04",
    phase: "The 2-Human Gatekeeper",
    title: "Curatorial Vote Desk",
    desc: "The AI score is only a recommendation hint. Two human curators must independently review and sign off before anything enters the live store catalog.",
    tech: "Private Admin Desk · Supabase RLS · Multi-Vote Logic",
  },
  {
    step: "05",
    phase: "Member Personalization",
    title: "Paws Plus Recommendation Engine",
    desc: "Daily recommendation cron scores products against member pet profiles (species, size, interests, budget) and real intent signals (views, wishlist, cart adds).",
    tech: "cron/recommendations · Supabase Vector/Scoring",
  },
  {
    step: "06",
    phase: "Grounded Support Assistant",
    title: "Tailz Conversational Agent",
    desc: "Customer-facing support bot grounded exclusively in live order events, hub status, and the published catalog. Does not reference foreign suppliers.",
    tech: "Next.js /api/chat · Grounded Context · Order Webhooks",
  },
];

export const weTwoScrape = [
  {
    n: "01",
    title: "Hunt",
    body: "The goal is gear India does not already sell. A foreign Amazon page, a curated list across eight regions, or a brand’s own Shopify search becomes a staging row. It is not a product yet.",
  },
  {
    n: "02",
    title: "Score",
    body: "Gemini reads the page and returns a score, how real the use is, pros, cons, a verdict, the pet it is for, and a season. Reviews go in. Invented reviews stay out. A high score flags it. It does not publish.",
  },
  {
    n: "03",
    title: "Veto",
    body: "The India check asks whether this object is already on Amazon.in, Flipkart, HUFT, Supertails, Zigly, and the rest. If it is, the insert is skipped or the row is rejected. That veto is the point of the scrape.",
  },
  {
    n: "04",
    title: "Match",
    body: "When titles disagree, we compare words, brand, category, and a perceptual image hash. Product-ID matching was the first try. It failed.",
  },
  {
    n: "05",
    title: "Queue",
    body: "Gaps become pending. Two humans approve. A person launches. The storefront query is only the live rows. Food, treats, and animal-origin chews stay out of scope.",
  },
] as const;

export const weTwoAgents = [
  { name: "Discovery", job: "Walks Indian marketplace pages and skips IDs we already know." },
  { name: "Domestic hunter", job: "Nightly pass on Amazon.in. Suggests a price and a verdict. Pings the team." },
  { name: "International hunter", job: "Foreign listings land as staging, marked for the gap check." },
  { name: "Gap engine", job: "No model. Fuzzy title, brand, category, image hash. Gaps become pending." },
  { name: "India checker", job: "If India already sells it, the row does not reach the shop." },
  { name: "Verification", job: "Rechecks the source. Dead or out of stock can pause a live product. It cannot publish." },
  { name: "Pricing", job: "Landed cost, a multiplier, a calendar, and a margin floor. A wild move can text the team." },
  { name: "Tailz", job: "Answers WhatsApp from the live catalog and the order in front of it. It does not browse the web." },
] as const;

export const weTwoSkills: VidyasStackItem[] = [
  { name: "Product design", icon: "figma" },
  { name: "Information architecture", icon: "react" },
  { name: "Checkout flows", icon: "typescript" },
  { name: "Agent prompts", icon: "openai" },
  { name: "Catalog systems", icon: "postgresql" },
];

export const weTwoTools: VidyasStackItem[] = [
  { name: "Next.js", icon: "nextdotjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind", icon: "tailwindcss" },
  { name: "Supabase", icon: "supabase" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Python", icon: "python" },
  { name: "Gemini", icon: "google" },
  { name: "WhatsApp", icon: "whatsapp" },
];

export const weTwoColors = [
  { name: "Forest", hex: "#0D2E28", use: "Nav, footer, primary buttons." },
  { name: "Ivory", hex: "#FAF7F2", use: "Page ground. Paper, not a dashboard." },
  { name: "Hero cream", hex: "#F0E8D8", use: "The opening panel only." },
  { name: "Gold", hex: "#C9893A", use: "Labels and the warm accent." },
  { name: "Gold CTA", hex: "#E8A94A", use: "The high-energy button." },
  { name: "Stone", hex: "#EDEBE6", use: "Cards and quiet surfaces." },
] as const;

export const weTwoPrinciples = [
  "Editorial first. A serif on a cream field. Marketplace chrome stays off the home page.",
  "Customer copy and ops copy are different sentences. Quality check on the order page. The source link only in the ops email.",
  "Live, or it does not exist. A scraped row is not a product. The shop does not see pending.",
];

export const weTwoArchitectureTree: VidyasArchNode[] = [
  {
    "id": "wtp-root",
    "name": "wetwopets",
    "kind": "folder",
    "children": [
      {
        "id": "wtp-backend",
        "name": "backend",
        "kind": "folder",
        "children": [
          {
            "id": "wtp-image-analyzer",
            "name": "image_analyzer.py",
            "kind": "file",
            "caption": "trimmed from backend/image_analyzer.py:67-91",
            "whyItMatters": "Duplicate detection with pHash.",
            "preview": [
              {
                "text": "# ── Perceptual Hash (Duplicate Detection) ─────────────────────────────────────",
                "tone": "comment"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "def get_image_hash(img: Image.Image) -> str:",
                "tone": "keyword"
              },
              {
                "text": "    \"\"\"",
                "tone": "comment"
              },
              {
                "text": "    Generate perceptual hash for duplicate detection.",
                "tone": "default"
              },
              {
                "text": "    Similar images produce similar hashes.",
                "tone": "default"
              },
              {
                "text": "    \"\"\"",
                "tone": "comment"
              },
              {
                "text": "    try:",
                "tone": "keyword"
              },
              {
                "text": "        phash = imagehash.phash(img, hash_size=HASH_SIZE)",
                "tone": "default"
              },
              {
                "text": "        return str(phash)",
                "tone": "accent"
              },
              {
                "text": "    except Exception as e:",
                "tone": "accent"
              },
              {
                "text": "        print(f\"[Image] Hash error: {e}\")",
                "tone": "string"
              },
              {
                "text": "        return None",
                "tone": "accent"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "def hash_distance(hash1: str, hash2: str) -> int:",
                "tone": "keyword"
              },
              {
                "text": "    \"\"\"",
                "tone": "comment"
              },
              {
                "text": "    Calculate Hamming distance between two hashes.",
                "tone": "default"
              },
              {
                "text": "    0 = identical, <5 = very similar, >10 = different",
                "tone": "default"
              },
              {
                "text": "    \"\"\"",
                "tone": "comment"
              },
              {
                "text": "    try:",
                "tone": "keyword"
              },
              {
                "text": "        h1 = imagehash.hex_to_hash(hash1)",
                "tone": "default"
              },
              {
                "text": "        h2 = imagehash.hex_to_hash(hash2)",
                "tone": "default"
              },
              {
                "text": "        return h1 - h2",
                "tone": "accent"
              },
              {
                "text": "    except:",
                "tone": "accent"
              },
              {
                "text": "        return 999  # Error = treat as different",
                "tone": "accent"
              }
            ]
          },
          {
            "id": "wtp-india-checker",
            "name": "india_checker.py",
            "kind": "file",
            "caption": "trimmed from backend/india_checker.py:135-140, 277-370",
            "whyItMatters": "The India-availability veto.",
            "preview": [
              {
                "text": "def _similarity(a: str, b: str) -> float:",
                "tone": "keyword"
              },
              {
                "text": "    na, nb = _normalize(a), _normalize(b)",
                "tone": "default"
              },
              {
                "text": "    if not na or not nb:",
                "tone": "keyword"
              },
              {
                "text": "        return 0.0",
                "tone": "accent"
              },
              {
                "text": "    return SequenceMatcher(None, na, nb).ratio()",
                "tone": "accent"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "# ...",
                "tone": "comment"
              },
              {
                "text": "async def check_product_in_india(product: dict) -> dict:",
                "tone": "keyword"
              },
              {
                "text": "    title = product.get(\"title\", \"\")",
                "tone": "string"
              },
              {
                "text": "    brand = product.get(\"brand\", \"\")",
                "tone": "string"
              },
              {
                "text": "    keywords = _extract_keywords(title, brand)",
                "tone": "default"
              },
              {
                "text": "    # ...",
                "tone": "comment"
              },
              {
                "text": "    # Search Indian marketplaces (Amazon.in, Flipkart, Ubuy, Shopify stores)",
                "tone": "comment"
              },
              {
                "text": "    matches = []",
                "tone": "default"
              },
              {
                "text": "    best_sim = 0.0",
                "tone": "default"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "    for r in all_results:",
                "tone": "keyword"
              },
              {
                "text": "        sim = _similarity(title, r[\"title\"])",
                "tone": "string"
              },
              {
                "text": "        if brand and brand.lower() in r[\"title\"].lower():",
                "tone": "keyword"
              },
              {
                "text": "            sim = min(1.0, sim + BRAND_MATCH_BOOST)",
                "tone": "default"
              },
              {
                "text": "        if sim > best_sim:",
                "tone": "keyword"
              },
              {
                "text": "            best_sim = sim",
                "tone": "default"
              },
              {
                "text": "        if sim >= SIMILARITY_THRESHOLD:",
                "tone": "keyword"
              },
              {
                "text": "            matches.append({",
                "tone": "default"
              },
              {
                "text": "                \"source\": r[\"source\"],",
                "tone": "string"
              },
              {
                "text": "                \"title\": r[\"title\"],",
                "tone": "string"
              },
              {
                "text": "                \"price\": r.get(\"price\", \"\"),",
                "tone": "string"
              },
              {
                "text": "                \"similarity\": round(sim * 100, 1),",
                "tone": "string"
              },
              {
                "text": "            })",
                "tone": "default"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "    found = len(matches) > 0",
                "tone": "default"
              },
              {
                "text": "    # ...",
                "tone": "comment"
              },
              {
                "text": "    return {",
                "tone": "accent"
              },
              {
                "text": "        \"found_in_india\": found,",
                "tone": "string"
              },
              {
                "text": "        \"matches\": matches,",
                "tone": "string"
              },
              {
                "text": "        \"details\": details,",
                "tone": "string"
              },
              {
                "text": "    }",
                "tone": "default"
              }
            ]
          },
          {
            "id": "wtp-pricing",
            "name": "pricing.py",
            "kind": "file",
            "caption": "trimmed from backend/pricing.py:133-171",
            "whyItMatters": "Margin guard from landed cost.",
            "preview": [
              {
                "text": "# ─── Landed cost + margin math ────────────────────────────────────────────────",
                "tone": "comment"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "def landed_cost_inr(unit_cost: float, currency: str, cfg: dict) -> Optional[float]:",
                "tone": "keyword"
              },
              {
                "text": "    \"\"\"source price -> INR -> + duty -> + fees -> + freight + repack.\"\"\"",
                "tone": "comment"
              },
              {
                "text": "    rate = _fx_inr(cfg[\"fx\"], currency)",
                "tone": "string"
              },
              {
                "text": "    if rate is None or unit_cost is None:",
                "tone": "keyword"
              },
              {
                "text": "        return None",
                "tone": "accent"
              },
              {
                "text": "    source_inr = float(unit_cost) * rate",
                "tone": "default"
              },
              {
                "text": "    with_duty = source_inr * (1 + cfg[\"duty_pct\"] / 100.0)",
                "tone": "string"
              },
              {
                "text": "    with_fees = with_duty * (1 + cfg[\"fee_pct\"] / 100.0)",
                "tone": "string"
              },
              {
                "text": "    return round(with_fees + cfg[\"freight_inr\"] + cfg[\"repack_inr\"], 2)",
                "tone": "accent"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "def min_sell_inr(landed: float, cfg: dict) -> Optional[float]:",
                "tone": "keyword"
              },
              {
                "text": "    \"\"\"Lowest price that still clears the margin floor.\"\"\"",
                "tone": "comment"
              },
              {
                "text": "    if landed is None:",
                "tone": "keyword"
              },
              {
                "text": "        return None",
                "tone": "accent"
              },
              {
                "text": "    floor = cfg[\"margin_floor_pct\"] / 100.0",
                "tone": "string"
              },
              {
                "text": "    if floor >= 1:",
                "tone": "keyword"
              },
              {
                "text": "        return None",
                "tone": "accent"
              },
              {
                "text": "    return round(landed / (1 - floor), 2)",
                "tone": "accent"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "def recommended_sell_inr(landed: float, cfg: dict) -> Optional[int]:",
                "tone": "keyword"
              },
              {
                "text": "    \"\"\"Clean price at the target margin (used for repricing / verification).\"\"\"",
                "tone": "comment"
              },
              {
                "text": "    if landed is None:",
                "tone": "keyword"
              },
              {
                "text": "        return None",
                "tone": "accent"
              },
              {
                "text": "    target = cfg[\"target_margin_pct\"] / 100.0",
                "tone": "string"
              },
              {
                "text": "    if target >= 1:",
                "tone": "keyword"
              },
              {
                "text": "        return None",
                "tone": "accent"
              },
              {
                "text": "    return _round_clean(landed / (1 - target))",
                "tone": "accent"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "",
                "tone": "default"
              },
              {
                "text": "def compute_sell_price(unit_cost: float, currency: str, cfg: Optional[dict] = None) -> dict:",
                "tone": "keyword"
              },
              {
                "text": "    \"\"\"Canonical wetwopets price for an item — cost-derived, profit-safe.\"\"\"",
                "tone": "comment"
              },
              {
                "text": "    cfg = cfg or get_pricing_config()",
                "tone": "default"
              },
              {
                "text": "    landed = landed_cost_inr(unit_cost, currency, cfg)",
                "tone": "default"
              },
              {
                "text": "    if landed is None:",
                "tone": "keyword"
              },
              {
                "text": "        return {\"sell_inr\": None, \"landed_cost_inr\": None, \"margin_pct\": None, \"ok\": False}",
                "tone": "accent"
              },
              {
                "text": "    # ...",
                "tone": "comment"
              }
            ]
          }
        ]
      },
      {
        "id": "wtp-frontend",
        "name": "frontend",
        "kind": "folder",
        "children": [
          {
            "id": "wtp-frontend-app",
            "name": "app",
            "kind": "folder",
            "children": [
              {
                "id": "wtp-frontend-api",
                "name": "api",
                "kind": "folder",
                "children": [
                  {
                    "id": "wtp-frontend-vote",
                    "name": "vote",
                    "kind": "folder",
                    "children": [
                      {
                        "id": "wtp-vote",
                        "name": "route.ts",
                        "kind": "file",
                        "caption": "trimmed from frontend/app/api/vote/route.ts:43-56",
                        "whyItMatters": "The AI vote is excluded and 2 human approvals are required.",
                        "preview": [
                          {
                            "text": "function buildTally(votes: { vote: string }[]): VoteTally {",
                            "tone": "keyword"
                          },
                          {
                            "text": "  const human    = votes.filter((v) => v.vote !== 'AI')",
                            "tone": "keyword"
                          },
                          {
                            "text": "  const approve  = human.filter((v) => v.vote === 'APPROVE').length",
                            "tone": "keyword"
                          },
                          {
                            "text": "  const reject   = human.filter((v) => v.vote === 'REJECT').length",
                            "tone": "keyword"
                          },
                          {
                            "text": "  const waitlist = human.filter((v) => v.vote === 'WAITLIST').length",
                            "tone": "keyword"
                          },
                          {
                            "text": "  return {",
                            "tone": "accent"
                          },
                          {
                            "text": "    approve,",
                            "tone": "default"
                          },
                          {
                            "text": "    reject,",
                            "tone": "default"
                          },
                          {
                            "text": "    waitlist,",
                            "tone": "default"
                          },
                          {
                            "text": "    total: human.length,",
                            "tone": "default"
                          },
                          {
                            "text": "    ready_for_approval:  approve  >= 2,",
                            "tone": "default"
                          },
                          {
                            "text": "    ready_for_rejection: reject   >= 2,",
                            "tone": "default"
                          },
                          {
                            "text": "  }",
                            "tone": "default"
                          },
                          {
                            "text": "}",
                            "tone": "default"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "wtp-storefront",
        "name": "storefront",
        "kind": "folder",
        "children": [
          {
            "id": "wtp-storefront-app",
            "name": "app",
            "kind": "folder",
            "children": [
              {
                "id": "wtp-storefront-api",
                "name": "api",
                "kind": "folder",
                "children": [
                  {
                    "id": "wtp-storefront-cron",
                    "name": "cron",
                    "kind": "folder",
                    "children": [
                      {
                        "id": "wtp-storefront-recs",
                        "name": "recommendations",
                        "kind": "folder",
                        "children": [
                          {
                            "id": "wtp-recs",
                            "name": "route.ts",
                            "kind": "file",
                            "caption": "trimmed from storefront/app/api/cron/recommendations/route.ts:62-126",
                            "whyItMatters": "Product recommendation scoring with real preference weights and vetoes.",
                            "preview": [
                              {
                                "text": "function scoreProduct(",
                                "tone": "keyword"
                              },
                              {
                                "text": "  product: ProductRow,",
                                "tone": "default"
                              },
                              {
                                "text": "  prefs: PrefRow | null,",
                                "tone": "default"
                              },
                              {
                                "text": "  viewedIds: Set<string>,",
                                "tone": "default"
                              },
                              {
                                "text": "  cartedIds: Set<string>,",
                                "tone": "default"
                              },
                              {
                                "text": "  purchasedIds: Set<string>,",
                                "tone": "default"
                              },
                              {
                                "text": "): { score: number; reason: string } {",
                                "tone": "default"
                              },
                              {
                                "text": "  let score = 0",
                                "tone": "keyword"
                              },
                              {
                                "text": "  const reasons: string[] = []",
                                "tone": "keyword"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "  if (purchasedIds.has(product.id)) return { score: -1, reason: 'already purchased' }",
                                "tone": "accent"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "  // Interest match (category to interests mapping)",
                                "tone": "comment"
                              },
                              {
                                "text": "  if (prefs?.interests?.length) {",
                                "tone": "keyword"
                              },
                              {
                                "text": "    const cat = product.category.toLowerCase()",
                                "tone": "keyword"
                              },
                              {
                                "text": "    for (const interest of prefs.interests) {",
                                "tone": "default"
                              },
                              {
                                "text": "      if (cat.includes(interest.toLowerCase().split(' ')[0])) {",
                                "tone": "keyword"
                              },
                              {
                                "text": "        score += 0.3",
                                "tone": "default"
                              },
                              {
                                "text": "        reasons.push(`Matches your interest in ${interest}`)",
                                "tone": "string"
                              },
                              {
                                "text": "        break",
                                "tone": "default"
                              },
                              {
                                "text": "      }",
                                "tone": "default"
                              },
                              {
                                "text": "    }",
                                "tone": "default"
                              },
                              {
                                "text": "  }",
                                "tone": "default"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "  // Pet family match",
                                "tone": "comment"
                              },
                              {
                                "text": "  if (prefs?.pet_type?.length && product.pet_family) {",
                                "tone": "keyword"
                              },
                              {
                                "text": "    const pf = product.pet_family.toLowerCase()",
                                "tone": "keyword"
                              },
                              {
                                "text": "    if (prefs.pet_type.some((t) => pf.includes(t.toLowerCase()))) {",
                                "tone": "keyword"
                              },
                              {
                                "text": "      score += 0.2",
                                "tone": "default"
                              },
                              {
                                "text": "      reasons.push(`For your ${prefs.pet_type.join(' & ')}`)",
                                "tone": "string"
                              },
                              {
                                "text": "    }",
                                "tone": "default"
                              },
                              {
                                "text": "  }",
                                "tone": "default"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "  // Budget fit",
                                "tone": "comment"
                              },
                              {
                                "text": "  const price = getDisplayPrice(product as Parameters<typeof getDisplayPrice>[0]).inr",
                                "tone": "keyword"
                              },
                              {
                                "text": "  const max = budgetMax(prefs?.budget_range ?? null)",
                                "tone": "keyword"
                              },
                              {
                                "text": "  if (price <= max) {",
                                "tone": "keyword"
                              },
                              {
                                "text": "    score += 0.1",
                                "tone": "default"
                              },
                              {
                                "text": "  } else {",
                                "tone": "default"
                              },
                              {
                                "text": "    score -= 0.2",
                                "tone": "default"
                              },
                              {
                                "text": "  }",
                                "tone": "default"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "  // Viewed but not bought = showed interest",
                                "tone": "comment"
                              },
                              {
                                "text": "  if (viewedIds.has(product.id) && !cartedIds.has(product.id)) {",
                                "tone": "keyword"
                              },
                              {
                                "text": "    score += 0.15",
                                "tone": "default"
                              },
                              {
                                "text": "    reasons.push('You viewed this recently')",
                                "tone": "string"
                              },
                              {
                                "text": "  }",
                                "tone": "default"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "  // Carted but not purchased = high intent",
                                "tone": "comment"
                              },
                              {
                                "text": "  if (cartedIds.has(product.id)) {",
                                "tone": "keyword"
                              },
                              {
                                "text": "    score += 0.25",
                                "tone": "default"
                              },
                              {
                                "text": "    reasons.push('Still in your wishlist')",
                                "tone": "string"
                              },
                              {
                                "text": "  }",
                                "tone": "default"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "  // Exclusive import bonus (members love exclusives)",
                                "tone": "comment"
                              },
                              {
                                "text": "  if (product.is_international) {",
                                "tone": "keyword"
                              },
                              {
                                "text": "    score += 0.1",
                                "tone": "default"
                              },
                              {
                                "text": "    reasons.push('Exclusive import')",
                                "tone": "string"
                              },
                              {
                                "text": "  }",
                                "tone": "default"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "  // AI quality score",
                                "tone": "comment"
                              },
                              {
                                "text": "  if (product.ai_score != null) {",
                                "tone": "keyword"
                              },
                              {
                                "text": "    score += (product.ai_score / 100) * 0.1",
                                "tone": "default"
                              },
                              {
                                "text": "  }",
                                "tone": "default"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "  return {",
                                "tone": "accent"
                              },
                              {
                                "text": "    score: Math.min(1, Math.max(0, score)),",
                                "tone": "default"
                              },
                              {
                                "text": "    reason: reasons[0] || 'Recommended for you',",
                                "tone": "string"
                              },
                              {
                                "text": "  }",
                                "tone": "default"
                              },
                              {
                                "text": "}",
                                "tone": "default"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "wtp-storefront-payment",
                    "name": "payment",
                    "kind": "folder",
                    "children": [
                      {
                        "id": "wtp-storefront-create-order",
                        "name": "create-order",
                        "kind": "folder",
                        "children": [
                          {
                            "id": "wtp-create-order",
                            "name": "route.ts",
                            "kind": "file",
                            "caption": "trimmed from storefront/app/api/payment/create-order/route.ts:22-31",
                            "whyItMatters": "The client never sets the price.",
                            "preview": [
                              {
                                "text": "    // Authoritative total — recomputed from the DB, never trusted from the client.",
                                "tone": "comment"
                              },
                              {
                                "text": "    const lineInputs: CartLineInput[] = Array.isArray(items)",
                                "tone": "keyword"
                              },
                              {
                                "text": "      ? items.map((i: { id: string; qty: number }) => ({ id: i.id, qty: i.qty }))",
                                "tone": "default"
                              },
                              {
                                "text": "      : []",
                                "tone": "default"
                              },
                              {
                                "text": "    const authedUserForPricing = await getStorefrontUser()",
                                "tone": "keyword"
                              },
                              {
                                "text": "    const priced = await priceOrderFromDb(lineInputs, tier, 'online', authedUserForPricing?.id ?? null)",
                                "tone": "keyword"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "    if (!priced.ok || priced.total < 1) {",
                                "tone": "accent"
                              },
                              {
                                "text": "      return NextResponse.json({ error: priced.error || 'Invalid order' }, { status: 400 })",
                                "tone": "accent"
                              },
                              {
                                "text": "    }",
                                "tone": "default"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
