export type VidyasChallenge = {
  id: string;
  title: string;
  /** One-line stake — shown prominently in the case study */
  stake: string;
  happened: string;
  whyHard: string;
  triedFirst: string;
  worked: string;
  outcome: string;
  surface: "WhatsApp" | "PWA" | "Dashboard" | "Driver";
  /** How to say it in an interview */
  interviewLine?: string;
};

export type VidyasShowcaseScreen = {
  id: string;
  rank: number;
  surface: string;
  name: string;
  caption: string;
  /** Replace with real path when screenshots are ready */
  imageSrc?: string;
  tags: string[];
};

export const vidyasTimeline = {
  discussion: "Feb 2026",
  build: "Mar – Sep 2026",
  label: "Feb 2026 scoping · Mar–Sep 2026 build · Live in production",
};

export const vidyasSnapshot = {
  role: "Solo product designer & developer",
  team: "One builder — kitchen is client and operator",
  market: "Sivakasi, Tamil Nadu",
  liveUrl: "https://www.vidyaskitchenhome.com",
  elevator:
    "Cook-to-order delivery for a home kitchen — customers order in a PWA or WhatsApp in plain language. The AI drafts; the server prices; the customer confirms. One order record moves through kitchen board and driver app inside a 15 km radius, with at least 24 hours to cook.",
};

export const vidyasStack = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS 4",
  "Supabase",
  "Razorpay",
  "Firebase Phone Auth",
  "Twilio OTP",
  "Mapbox",
  "Meta WhatsApp Cloud API",
  "OpenAI",
  "Gemini",
  "Whisper",
  "Vercel",
  "Figma",
  "Tableau",
];

export const vidyasChallenges: VidyasChallenge[] = [
  {
    id: "01",
    title: "Design for chat, not for the App Store",
    stake: "No local benchmark existed — I had to match how Sivakasi already orders.",
    happened:
      "People message a kitchen, name a gravy, and wait. There was no product in town whose checkout, slots, or driver handoff I could copy.",
    whyHard:
      "Trust lives in WhatsApp, not in install prompts. Solo builder — every wrong bet cost weeks.",
    triedFirst:
      "Structured bot menus: categories, numbered lists, “pick 1–5”. Clean in Figma. Dead on first real sentence.",
    worked:
      "Two doors, one system. PWA for browse, map pin, and receipt. WhatsApp for “mutton gravy 500gm tomorrow dinner, cash” — the bot parses the sentence and only asks what is missing.",
    outcome: "The product meets the town where it already is. The app is the upgrade path, not the gate.",
    surface: "WhatsApp",
    interviewLine: "I did not ask Sivakasi to change how it orders. I digitised the sentence they already send.",
  },
  {
    id: "02",
    title: "One inbox, four intentions",
    stake: "“Call the kitchen” must never open an empty cart.",
    happened:
      "Support, complaints, tracking, and orders all arrive as text. “Call the kitchen” returned an empty cart. “Black pepper chicken gravy, 8th oct lunch, 500gm, cash” collapsed into every chicken dish and lost date, meal, and payment.",
    whyHard: "The bot had one chance to classify before replying. No human backup at midnight.",
    triedFirst:
      "Route long or “food-looking” messages to AI. Sounded smart. Mis-routed the simple jobs.",
    worked:
      "Strict doors: support → commands → complaint → food sentence. During checkout, answer the side question, then re-ask the pending step. A full new order can replace the draft.",
    outcome:
      "Call shows recent orders by dish and date. Named gravies keep size, slot, and cash vs online.",
    surface: "WhatsApp",
    interviewLine: "I fixed the bot by reproducing bad sentences in tests — not by prompting until it sounded friendly.",
  },
  {
    id: "03",
    title: "The model must never touch money",
    stake: "A wrong total on Razorpay is a charge, not a UX bug.",
    happened:
      "Customers want the bot to “just take the order”. Letting the model assemble the basket created ghost orders and invented totals.",
    whyHard: "Speed and safety pull opposite ways. Confirm cannot feel like a tax form.",
    triedFirst: "More authority in the language model. Faster to demo. Unsafe in production.",
    worked:
      "Draft → server → confirm. The model fills intent; the server matches the dish, reads menu price, adds ₹20 packing, ₹35 delivery, 5% GST on food, validates the slot. One pricing function powers WhatsApp and PWA.",
    outcome: "Same bill everywhere. The assistant can mishear a dish — it still cannot invent a rupee.",
    surface: "WhatsApp",
    interviewLine: "AI drafts. The kitchen prices. The customer confirms. That line is the architecture.",
  },
  {
    id: "04",
    title: "Fresh food needs a 24-hour promise",
    stake: "Swiggy trained “now”. This kitchen cooks to order.",
    happened:
      "Ingredients are bought per slot. “Deliver in 30 minutes” would have broken prep on day one.",
    whyHard: "The rule had to hold in bot, app, and dashboard — customers will find the weakest door.",
    triedFirst: "Early slot experiments without a hard 24h floor.",
    worked:
      "Breakfast, lunch, dinner — book at least 24 hours ahead. Self-serve cancel until 12 hours before the slot. Online refunds return food, packing, delivery, and GST. Cash at the door never hits Razorpay.",
    outcome: "The kitchen cooks to a calendar, not a surprise ping. The slot is the product promise.",
    surface: "PWA",
    interviewLine: "I sold slowness as honesty — the slot is why the food is fresh.",
  },
  {
    id: "05",
    title: "Four surfaces, one ticket",
    stake: "“Where is my order?” cannot require an order number.",
    happened:
      "Customer, kitchen, driver, and bot each risked telling a different story for the same phone. Cash orders can be on the bike before payment lands.",
    whyHard: "Food state ≠ payment state. One status field would lie to someone.",
    triedFirst: "Ask customers to remember #00017. Failed in every real chat.",
    worked:
      "One reference everywhere. Food: waiting → paid → confirmed → preparing → ready → out → delivered. Payment tracked separately. Undelivered is explicit — not a silent drop.",
    outcome: "Phone, WhatsApp, and dashboard point at the same box.",
    surface: "Dashboard",
    interviewLine: "I designed ops like air-traffic control — one ticket, four screens, zero arguments.",
  },
  {
    id: "06",
    title: "A week before the festival, the menu should already know",
    stake: "Discount the wrong gravy and you buy complaints, not orders.",
    happened:
      "Festival weeks in Sivakasi fill fast — decide offers too late and the calendar is already booked. On ordinary weeks the same tension is quieter: some gravies barely move, some sell out, and a quiet dish looks identical to a bad one on a chart.",
    whyHard:
      "Solo builder. The kitchen will not read spreadsheets at 9 p.m. I refused a model that picks a percent and flips it on alone.",
    triedFirst:
      "Low sales as the only signal — that would have discounted a poorly rated dish and hidden quality problems behind a promo.",
    worked:
      "One nightly pricing agent at 2:00 IST — not a team of bots, one job with rules. ~7 days before a festival: card with name, dates, suggested percent (20% when there is no history). Every night: split the menu three ways — liked but quiet (<3 orders / 7 days, rating ≥3.5) gets 15–20% suggestion; selling but >30% under its usual week gets a push; already hot (~2× category) gets told to drop the discount. Rating <3.0 → quality flag, approve hidden. Nothing goes live until the kitchen taps approve.",
    outcome:
      "The week before a festival is a decision, not a scramble. Quiet dishes and strong dishes are named separately. Bad ratings stay off the promo list.",
    surface: "Dashboard",
    interviewLine: "Say ‘a nightly pricing agent with rules’ — the model suggests, the kitchen approves, nothing auto-publishes.",
  },
];

export const vidyasJourney = [
  {
    stage: "Discover",
    goal: "Find what the kitchen cooks today",
    pain: "Chat history is the menu. New customers do not know names or sizes.",
    fix: "Installable PWA with photos and sizes. WhatsApp welcome includes a one-line order example.",
    impact: "Start from chat or from the app.",
  },
  {
    stage: "Order",
    goal: "Say dish, size, day, and meal without a form",
    pain: "Free text is messy. “Chicken” is five gravies.",
    fix: "Bot keeps the specific dish name; photo cards when several match. App uses a size drawer: 500gm, 1kg, or both.",
    impact: "One sentence can finish most of the order.",
  },
  {
    stage: "Pay",
    goal: "Know the full amount before paying",
    pain: "Fees feel like a surprise on the bank screen.",
    fix: "Full bill before confirm: items, offer, ₹20 packing, ₹35 delivery, 5% GST on food. Razorpay online or cash at door up to ₹2,000.",
    impact: "The payment link matches what they already agreed to.",
  },
  {
    stage: "Fulfill",
    goal: "Know the box is moving",
    pain: "“Where is my order?” should not need an order number.",
    fix: "Same reference on app, bot, kitchen board, and driver job. Live status and driver location inside the Sivakasi radius.",
    impact: "Kitchen and customer talk about one ticket.",
  },
  {
    stage: "Return",
    goal: "Fix a bad box or cancel in time",
    pain: "A complaint that names a dish can be mistaken for a new order.",
    fix: "Cancel until 12 hours before slot. “Something wrong” picks order by dish and date, then files a note for the kitchen.",
    impact: "Kitchen sees the order first, complaint second.",
  },
];

export const vidyasIA = {
  customer: [
    "Home / menu (chicken, egg, mutton)",
    "Dish → Cart → Schedule (date + meal slot)",
    "Address (pin, saved places, order for someone else)",
    "Pay (online or cash) → Orders & tracking",
  ],
  kitchen: [
    "Live orders · Revenue",
    "Offers · AI pricing · Festivals",
    "Drivers · Reviews · Complaints · WhatsApp inbox",
  ],
  driver: ["Login → Assigned jobs → Navigate → Delivered / not delivered"],
  bot: [
    "Welcome & quick-order example",
    "Order draft → Confirm → Payment link",
    "Track · Call kitchen · Complaint · Help",
  ],
};

export const vidyasFlows = [
  {
    title: "WhatsApp order",
    steps: [
      "Customer sends a sentence or sees a one-line example.",
      "Bot fills dish, size, day, meal, cash or online.",
      "Photo cards if several dishes match; ask only for what is missing.",
      "Server prices the draft — confirm card shows the full bill.",
      "Confirm writes the order. Online → Razorpay. Cash → wait for door.",
    ],
  },
  {
    title: "PWA checkout",
    steps: [
      "Browse → pick 500gm or 1kg → choose slot 24h+ out.",
      "Drop pin inside Sivakasi or order for someone in town.",
      "See bill, apply code, pay online or cash at door.",
      "Tracking uses the same ticket the kitchen sees.",
    ],
  },
  {
    title: "Kitchen → driver",
    steps: [
      "Paid or cash-confirmed order on live board.",
      "Kitchen: confirmed → preparing → ready.",
      "Driver assigned — job shows drop pin and navigation.",
      "Out for delivery → delivered or not delivered.",
    ],
  },
];

export const vidyasShowcaseScreens: VidyasShowcaseScreen[] = [
  {
    id: "wa-confirm",
    rank: 1,
    surface: "WhatsApp",
    name: "Confirm card",
    caption: "Confirm only after the full bill is visible",
    tags: ["Confirm", "Pricing"],
    imageSrc: "/case-studies/vidyas-kitchen/placeholders/whatsapp-confirm.png",
  },
  {
    id: "wa-dishes",
    rank: 2,
    surface: "WhatsApp",
    name: "Dish photo cards",
    caption: "Several gravies — pick the right one",
    tags: ["Cards", "Menu"],
    imageSrc: "/case-studies/vidyas-kitchen/placeholders/whatsapp-dishes.png",
  },
  {
    id: "pwa-menu",
    rank: 3,
    surface: "PWA",
    name: "Menu & size drawer",
    caption: "Choose a size before it hits the cart",
    tags: ["Home", "Size picker"],
    imageSrc: "/case-studies/vidyas-kitchen/vk-mobile-browse.png",
  },
  {
    id: "pwa-slot",
    rank: 4,
    surface: "PWA",
    name: "Slot picker",
    caption: "Breakfast, lunch, or dinner — a day ahead",
    tags: ["Schedule", "Slots"],
    imageSrc: "/case-studies/vidyas-kitchen/placeholders/pwa-slot.png",
  },
  {
    id: "pwa-pin",
    rank: 5,
    surface: "PWA",
    name: "Address pin",
    caption: "Drop a pin inside Sivakasi",
    tags: ["Map", "Zone"],
    imageSrc: "/case-studies/vidyas-kitchen/placeholders/pwa-pin.png",
  },
  {
    id: "pwa-bill",
    rank: 6,
    surface: "PWA",
    name: "Checkout bill",
    caption: "Every rupee on the bill before pay",
    tags: ["Checkout", "GST"],
    imageSrc: "/case-studies/vidyas-kitchen/placeholders/pwa-bill.png",
  },
  {
    id: "dash-orders",
    rank: 7,
    surface: "Dashboard",
    name: "Live orders",
    caption: "The kitchen sees every live ticket",
    tags: ["Ops", "Pipeline"],
    imageSrc: "/case-studies/vidyas-kitchen/placeholders/dashboard-orders.png",
  },
  {
    id: "dash-pricing",
    rank: 8,
    surface: "Dashboard",
    name: "AI pricing card",
    caption: "A week out, the menu gets a suggestion",
    tags: ["AI pricing", "Festival"],
    imageSrc: "/case-studies/vidyas-kitchen/placeholders/dashboard-pricing.png",
  },
  {
    id: "driver-drop",
    rank: 9,
    surface: "Driver",
    name: "Active delivery",
    caption: "Navigate, then mark it delivered",
    tags: ["Navigation", "Status"],
    imageSrc: "/case-studies/vidyas-kitchen/placeholders/driver-drop.png",
  },
];

export const vidyasHonestOutcomes = [
  "Live at vidyaskitchenhome.com — customer PWA, kitchen dashboard, driver app, and WhatsApp bot share one system.",
  "WhatsApp and the app use the same prices, slots, and order record.",
  "Bot misroutes were reproduced and covered with tests before treated as fixed.",
  "A home kitchen can take a slot order, cook to it, dispatch a driver, and answer “where is my order?” without a marketplace in the middle.",
];

export const vidyasDoNotClaim = [
  "User counts, revenue, or “hours saved” without real numbers.",
  "“AI-trained on our menu” — rules + models, not fine-tuning.",
  "GST as legal advice — only how the bill is calculated.",
];
