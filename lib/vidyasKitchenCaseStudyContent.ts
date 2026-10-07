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
  imageSrc?: string;
  tags: string[];
  /** Landscape dashboard / desktop frames */
  wide?: boolean;
};

export type VidyasTerminalLine = {
  text: string;
  tone?: "comment" | "keyword" | "string" | "muted" | "accent" | "default";
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
  firstInMarket: "First home-food delivery app in Sivakasi, Tamil Nadu",
  problem:
    "In Sivakasi, home food still moves through **WhatsApp and memory** — a sentence to the kitchen, no receipt, no slot, no driver handoff. Swiggy lists restaurants; **nobody had built for a home kitchen** that cooks to order.",
  solution:
    "I shipped the **first dedicated product in town**: order in plain language on WhatsApp or a PWA, **one priced ticket** through kitchen board and driver app — 15 km radius, 24 hours to cook, same bill everywhere.",
  elevator:
    "Sivakasi orders on WhatsApp. I built the first home-food delivery app in Tamil Nadu for this town — sentence in, server prices, one ticket out.",
};

export const vidyasDesignSystem = {
  intro:
    "Dark landing, one action — **brand red**, WhatsApp green for the CTA, food photography doing the work. The UI disappears so the order button is all anyone sees.",
  pdfHref: "/case-studies/vidyas-kitchen/design-system.pdf",
  colors: [
    { name: "Brand red", hex: "#CC1C1C" },
    { name: "Dark canvas", hex: "#1A1A1A" },
    { name: "WhatsApp green", hex: "#25D366" },
    { name: "Pure white", hex: "#FFFFFF" },
  ],
  typeSample: {
    display: "VIDYA'S KITCHEN",
    body: "Welcome to authentic home food — order with the bot or install the app.",
  },
  components: ["WhatsApp CTA button", "Centre landing card", "Size drawer (500g / 1kg)"],
};

/** Set true when tableau-screenshot.png exists in public */
export const showTableauSection = false;

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
    title: "Design for chat, not the App Store",
    stake: "Sivakasi already orders on WhatsApp. I built for that first.",
    happened:
      "Customers message the kitchen, name a gravy, and wait for a person. **No local app existed to copy.**",
    whyHard:
      "**Trust lives in the chat**, not in an install prompt. One builder, so every wrong bet cost build time.",
    triedFirst:
      "A menu-driven bot with lists and “pick 1-5”. Tidy, and it broke on the first normal sentence.",
    worked:
      "**Two doors, one system.** The PWA handles browsing, the map pin and the receipt. WhatsApp handles “mutton gravy 500gm tomorrow dinner, cash”: the bot fills the order and asks only for what is missing.",
    outcome: "The product meets the town where it already orders. **The app is the upgrade, not the gate.**",
    surface: "WhatsApp",
  },
  {
    id: "02",
    title: "“Call the kitchen” opened an empty cart",
    stake: "One inbox, four intentions.",
    happened:
      "Orders, complaints, tracking and call requests all arrive as plain text. **“Call the kitchen” returned an empty cart.** “Black pepper chicken gravy, 8th oct lunch, 500gm, cash” collapsed into a generic chicken list and dropped the date, meal and payment.",
    whyHard:
      "The bot must **decide what a message is before it replies**, with nobody watching at midnight.",
    triedFirst:
      "Send anything long or food-like to the AI. It sounded flexible and misrouted the simplest jobs.",
    worked:
      "**A fixed order of doors:** support, commands, complaints, then food sentences. During checkout, a side question gets answered and the pending step is asked again.",
    outcome:
      "“Call the kitchen” shows recent orders by dish and date with a call button. Named dishes keep size, day, meal and payment. **I fixed it by reproducing bad sentences in tests.**",
    surface: "WhatsApp",
  },
  {
    id: "03",
    title: "The AI drafts. The kitchen prices.",
    stake: "A wrong total is a charge, not a UX bug.",
    happened:
      "The risk was a model path creating an order that was not a real basket, such as an empty order with an invented total. **With Razorpay behind it, that is real money.**",
    whyHard:
      "Customers want the bot to just take the order, but **confirming cannot feel like a form.**",
    triedFirst:
      "Giving the model more control over building the order. Quicker to demo, unsafe to ship.",
    worked:
      "**The model only fills a draft.** The server matches the dish, reads the menu price, adds Rs 20 packing, Rs 35 delivery and 5% GST on food, and checks the slot. Nothing is written until the customer confirms. The app and WhatsApp use the same function.",
    outcome: "**One bill everywhere.** The bot can mishear a dish, but it cannot invent a price.",
    surface: "WhatsApp",
  },
  {
    id: "04",
    title: "24 hours to cook, 12 to cancel",
    stake: "Delivery apps trained people to expect “now”. This kitchen cooks to order.",
    happened:
      "Ingredients are bought per order, so **“30 minutes” would have broken the kitchen on day one.**",
    whyHard:
      "The rule had to hold in the app, the bot and the dashboard, or **customers would find the weakest door.**",
    triedFirst: "",
    worked:
      "Breakfast, lunch and dinner slots, **booked at least 24 hours ahead.** Self-serve cancel until 12 hours before the slot. A paid online cancel is refunded in full: food, packing, delivery and GST. Cash was never charged.",
    outcome:
      "The kitchen preps against a real calendar, and **the customer sees the reason inside the order.**",
    surface: "PWA",
  },
  {
    id: "05",
    title: "Four surfaces, one ticket",
    stake: "“Where is my order?” should never need an order number.",
    happened:
      "Customer, kitchen, driver and bot could each describe a different order for the same phone number. **A cash order can be on the bike before payment.**",
    whyHard:
      "**Food status and payment status are different.** One status field would lie to someone.",
    triedFirst:
      "Asking customers to remember an order number. It failed in real chats.",
    worked:
      "**One reference on every surface.** Food moves one way: waiting for payment, paid, confirmed, preparing, ready, out for delivery, delivered. Payment is tracked separately. Undelivered is a real status.",
    outcome:
      "A phone call, a WhatsApp thread and the dashboard **all point at the same order.**",
    surface: "Dashboard",
  },
  {
    id: "06",
    title: "Festival week, planned a week early",
    stake: "Discount the wrong dish and you buy complaints.",
    happened:
      "Festival weeks fill fast, and a decision made the morning of is too late. **A quiet dish and a badly rated dish look identical on a sales chart.**",
    whyHard:
      "The kitchen will not read spreadsheets at night, and **I did not want a model setting a percent on its own.**",
    triedFirst:
      "Treating low sales as the only signal. That would have discounted a poorly rated dish.",
    worked:
      "One nightly job at 2:00 IST. About 7 days before a festival it raises a card with the dates and a suggested percent (20% with no history). A liked dish with under 3 orders in 7 days gets a suggestion. **A rating under 3.0 is flagged as a quality issue** and cannot be approved as an offer. Nothing goes live until the kitchen approves.",
    outcome:
      "The week before a festival becomes a decision, not a scramble. **Bad dishes stay off the promo list.**",
    surface: "Dashboard",
  },
];

export const vidyasJourney = [
  {
    stage: "Discover",
    goal: "Find what the kitchen cooks today",
    pain: "Chat history is the menu. New customers do not know gravy names or sizes.",
    fix: "Installable PWA with photos and sizes. WhatsApp welcome includes a one-line order example.",
    sivakasiAngle:
      "Generic apps assume a searchable restaurant list. Here the menu lives in **yesterday's chat** and word of mouth — discovery had to work inside WhatsApp first.",
  },
  {
    stage: "Order",
    goal: "Say dish, size, day, and meal without a form",
    pain: "Free text is messy. “Chicken” is five gravies in this kitchen.",
    fix: "Bot keeps the specific dish name; photo cards when several match. App uses a size drawer: 500gm, 1kg, or both.",
    sivakasiAngle:
      "Not “pick category → subcategory”. Customers already send **one Tamil-English sentence** — the product had to parse that, not replace it with menus.",
  },
  {
    stage: "Pay",
    goal: "Know the full amount before paying",
    pain: "Fees feel like a surprise on the bank screen — trust breaks on the last tap.",
    fix: "Full bill before confirm: items, offer, Rs 20 packing, Rs 35 delivery, 5% GST on food. Razorpay online or cash at door.",
    sivakasiAngle:
      "Cash at the door is normal here. **Payment status and food status are separate** — a box can be on the bike before Razorpay clears.",
  },
  {
    stage: "Fulfill",
    goal: "Know the box is moving",
    pain: "“Where is my order?” should not need an order number nobody wrote down.",
    fix: "Same reference on app, bot, kitchen board, and driver job. Live status inside the 15 km Sivakasi radius.",
    sivakasiAngle:
      "No call centre. The customer, kitchen owner and driver all **share one phone-led thread** — ops had to mirror that, not invent ticket numbers.",
  },
  {
    stage: "Return",
    goal: "Fix a bad box or cancel in time",
    pain: "A complaint that names a dish gets mistaken for a new order.",
    fix: "Cancel until 12 hours before slot. “Something wrong” picks order by dish and date, then files a note for the kitchen.",
    sivakasiAngle:
      "Cook-to-order means **24 hours to prep**. Cancel rules are the product promise — not a hidden policy page.",
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
    id: "wa-flow",
    rank: 1,
    surface: "WhatsApp",
    name: "Full order flow",
    caption: "Sentence → draft → confirm → pay",
    tags: ["Bot", "Order"],
    imageSrc: "/case-studies/vidyas-kitchen/whatsapp-bot.png",
  },
  {
    id: "wa-routing",
    rank: 2,
    surface: "WhatsApp",
    name: "Support vs order routing",
    caption: "Call kitchen shows orders — not an empty cart",
    tags: ["Routing", "Support"],
    imageSrc: "/case-studies/vidyas-kitchen/VK-M-1.png",
  },
  {
    id: "pwa-menu",
    rank: 3,
    surface: "PWA",
    name: "Browse menu",
    caption: "Photos and sizes before the cart",
    tags: ["Home", "Menu"],
    imageSrc: "/case-studies/vidyas-kitchen/vk-mobile-browse.png",
  },
  {
    id: "pwa-slot",
    rank: 4,
    surface: "PWA",
    name: "Cart & slot picker",
    caption: "Breakfast, lunch, dinner — 24h ahead",
    tags: ["Schedule", "Slots"],
    imageSrc: "/case-studies/vidyas-kitchen/cart-bottom-sheet.png",
  },
  {
    id: "pwa-bill",
    rank: 5,
    surface: "PWA",
    name: "Checkout bill",
    caption: "Every rupee visible before Razorpay",
    tags: ["Checkout", "GST"],
    imageSrc: "/case-studies/vidyas-kitchen/checkout-razorpay.png",
  },
  {
    id: "dash-orders",
    rank: 6,
    surface: "Dashboard",
    name: "Live orders board",
    caption: "Every ticket the kitchen is cooking",
    tags: ["Ops", "Pipeline"],
    imageSrc: "/case-studies/vidyas-kitchen/vidyas-kitchen-admin-dashboard.png",
    wide: true,
  },
  {
    id: "dash-pricing",
    rank: 7,
    surface: "Dashboard",
    name: "AI pricing & festivals",
    caption: "Nightly agent — kitchen approves every percent",
    tags: ["AI pricing", "Festival"],
    imageSrc: "/case-studies/vidyas-kitchen/admin-dashboard.png",
    wide: true,
  },
  {
    id: "driver-jobs",
    rank: 8,
    surface: "Driver",
    name: "Assigned deliveries",
    caption: "Jobs tied to the same order reference",
    tags: ["Jobs", "Status"],
    imageSrc: "/case-studies/vidyas-kitchen/driver-deliveries.png",
  },
  {
    id: "driver-nav",
    rank: 9,
    surface: "Driver",
    name: "Map & navigation",
    caption: "Drop pin inside the delivery radius",
    tags: ["Map", "Navigate"],
    imageSrc: "/case-studies/vidyas-kitchen/driver/02-driver-active-deliveries.png",
  },
  {
    id: "driver-cash",
    rank: 10,
    surface: "Driver",
    name: "Cash collection",
    caption: "Payment tracked separately from food status",
    tags: ["Cash", "Collect"],
    imageSrc: "/case-studies/vidyas-kitchen/driver/04-driver-cash-collection.png",
  },
];

export const vidyasArchitectureLines: VidyasTerminalLine[] = [
  { text: "# Vidya's Kitchen — system map (no private code)", tone: "comment" },
  { text: "", tone: "default" },
  { text: "const surfaces = [", tone: "keyword" },
  { text: '  "Customer PWA",', tone: "string" },
  { text: '  "WhatsApp Bot",', tone: "string" },
  { text: '  "Kitchen Dashboard",', tone: "string" },
  { text: '  "Driver App",', tone: "string" },
  { text: "];", tone: "keyword" },
  { text: "", tone: "default" },
  { text: "const core = {", tone: "keyword" },
  { text: '  runtime: "Next.js 15 on Vercel",', tone: "string" },
  { text: '  database: "Supabase — orders, menu, users",', tone: "string" },
  { text: "};", tone: "keyword" },
  { text: "", tone: "default" },
  { text: "const integrations = [", tone: "keyword" },
  { text: '  "Razorpay",', tone: "string" },
  { text: '  "Firebase + Twilio OTP",', tone: "string" },
  { text: '  "Mapbox / Google Places",', tone: "string" },
  { text: '  "OpenAI + Gemini + Whisper",', tone: "string" },
  { text: "];", tone: "keyword" },
  { text: "", tone: "default" },
  { text: "// Order pipeline — models never touch payments", tone: "comment" },
  { text: "draft → server.matchDish() → server.price() → confirm → one order row", tone: "accent" },
  { text: "dashboard.advance(row) · driver.advance(row)", tone: "muted" },
];

export const vidyasHonestOutcomes = [
  "Live at vidyaskitchenhome.com — customer PWA, kitchen dashboard, driver app, and WhatsApp bot share one system.",
  "WhatsApp and the app use the same prices, slots, and order record.",
  "Bot misroutes were reproduced and covered with tests before treated as fixed.",
  "A home kitchen can take a slot order, cook to it, dispatch a driver, and answer “where is my order?” without a marketplace in the middle.",
];

export const vidyasDoNotClaim: string[] = [];
