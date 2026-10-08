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

export type VidyasOpsScreen = {
  id: string;
  tag: string;
  caption: string;
  src: string;
  alt: string;
};

export type VidyasOpsStoryPanel = {
  label: string;
  body: string;
  highlights: { id: string; label: string }[];
  screens: VidyasOpsScreen[];
};

export type VidyasTerminalLine = {
  text: string;
  tone?: "comment" | "keyword" | "string" | "muted" | "accent" | "default" | "heading";
};

export type VidyasOrderSyncLine = VidyasTerminalLine & {
  indent?: number;
  /** Key lines — pulse after the type-in animation */
  highlight?: boolean;
};

export type VidyasOrderSyncRules = {
  filename: string;
  title: string;
  /** Portfolio-only path — not a file in the client repo */
  illustrationNote: string;
  lines: VidyasOrderSyncLine[];
};

export type VidyasStackItem = {
  name: string;
  /** simple-icons slug → cdn.jsdelivr.net/npm/simple-icons@v11/icons/{slug}.svg */
  icon: string;
};

export type VidyasArchNode = {
  id: string;
  name: string;
  kind: "folder" | "file";
  children?: VidyasArchNode[];
  preview?: VidyasTerminalLine[];
};

export type IASurfaceColumn = {
  id: string;
  label: string;
  tag: "PWA" | "WhatsApp" | "Dashboard" | "Driver";
  steps: string[];
};

export type FlowStepNode = {
  id: string;
  label: string;
  type: "start" | "process" | "decision" | "end";
};

export type FlowDiagramData = {
  id: string;
  title: string;
  steps: FlowStepNode[];
};

export type VidyasWhatsAppHighlight = {
  id: string;
  label: string;
};

export type VidyasWhatsAppScreen = {
  id: string;
  tag: string;
  caption: string;
  src: string;
  alt: string;
  featured?: boolean;
};

export type VidyasWhatsAppFlowPanel = {
  id: string;
  tabLabel: string;
  body: string;
  highlights: VidyasWhatsAppHighlight[];
  screens: VidyasWhatsAppScreen[];
};

export type VidyasProductFlowHighlight = VidyasWhatsAppHighlight;
export type VidyasProductFlowScreen = VidyasWhatsAppScreen;
export type VidyasProductFlowPanel = VidyasWhatsAppFlowPanel;

const PWA = "/case-studies/vidyas-kitchen/pwa/flow";

export const vidyasPwaStory = {
  eyebrow: "Customer PWA · installable · live",
  headline: "Same menu · same bill · map pin on your phone",
  flows: [
    {
      id: "open",
      tabLabel: "Open the app",
      body:
        "Installable PWA — **OTP login**, drop a **Mapbox pin** inside the 15 km radius, save **Home and Work**. Returning users land on a **personalised home feed** with kitchen picks and a one-tap link back to WhatsApp.",
      highlights: [
        { id: "otp", label: "OTP · no password" },
        { id: "map", label: "Map pin · saved places" },
        { id: "radius", label: "Sivakasi radius enforced" },
        { id: "personal", label: "Hey, {name} · kitchen picks" },
      ],
      screens: [
        {
          id: "login",
          tag: "Step 01",
          caption: "Hey, Santhosh → Send OTP",
          src: `${PWA}/1.webp`,
          alt: "PWA login with pre-filled name and mobile number",
        },
        {
          id: "otp",
          tag: "Step 02",
          caption: "Enter the OTP · sent to saved number",
          src: `${PWA}/2.webp`,
          alt: "OTP entry with digits filled in",
        },
        {
          id: "location",
          tag: "Step 03",
          caption: "Map pin · Home / Work · Confirm location",
          src: `${PWA}/3.webp`,
          alt: "Map pin picker with saved addresses and Sivakasi delivery note",
        },
        {
          id: "home",
          tag: "Step 04",
          caption: "Midday feast? · Hey, Santhosh · kitchen picks",
          src: `${PWA}/06-home.webp`,
          alt: "Personalised PWA home with location, kitchen picks, and Vidya Bot",
        },
      ],
    },
    {
      id: "checkout",
      tabLabel: "Browse → track",
      body:
        "Browse by category → dish detail → **500gm / 1kg** → cart with **promo + GST breakdown**. Schedule a slot **24 hours ahead**, pay online or at the door. **Ordering for someone in Sivakasi while you’re away?** A gift path collects their name, phone, and pin — then the same slot and payment rules apply.",
      highlights: [
        { id: "sizes", label: "500gm · 1kg · combo 1.5kg" },
        { id: "bill", label: "Full bill before checkout" },
        { id: "slot", label: "24h slot rule · breakfast / lunch / dinner" },
        { id: "gift", label: "Gift order · outside Sivakasi" },
      ],
      screens: [
        {
          id: "browse",
          tag: "Step 01",
          caption: "Browse menu · Chicken · Mutton · Egg",
          src: `${PWA}/image-12.webp`,
          alt: "PWA browse menu with category tabs and dish grid",
        },
        {
          id: "dish",
          tag: "Step 02",
          caption: "Dish detail · pairing note · Add item",
          src: `${PWA}/image-5.webp`,
          alt: "PWA dish details with promo badge and add button",
        },
        {
          id: "size",
          tag: "Step 03",
          caption: "Pick 500gm or 1kg · qty in cart",
          src: `${PWA}/image-6.webp`,
          alt: "PWA size picker with quantity controls",
        },
        {
          id: "cart",
          tag: "Step 04",
          caption: "Cart · Navaratri promo · itemized total",
          src: `${PWA}/image-7.webp`,
          alt: "PWA cart with promo discount and checkout button",
        },
        {
          id: "gift",
          tag: "Gift order",
          caption: "Outside Sivakasi → who · phone · their pin",
          src: `${PWA}/image-8.webp`,
          alt: "PWA gift order form for sending food to someone in Sivakasi",
          featured: true,
        },
        {
          id: "schedule",
          tag: "Step 06",
          caption: "Delivery day · meal slot · pay online or door",
          src: `${PWA}/image-9.webp`,
          alt: "PWA schedule screen with slot picker and payment choice",
        },
        {
          id: "confirmed",
          tag: "Step 07",
          caption: "Order confirmed → Track my order",
          src: `${PWA}/image-10.webp`,
          alt: "PWA order confirmed modal with track button",
        },
        {
          id: "tracking",
          tag: "Step 08",
          caption: "Live timeline · cancel window · WhatsApp help",
          src: `${PWA}/image-11.webp`,
          alt: "PWA live order tracking with delivery status pipeline",
        },
      ],
    },
  ] satisfies VidyasProductFlowPanel[],
};

export const vidyasHomeFoodStory = {
  headline: "Not another meal outside",
  subhead:
    "Delicious, clean, hygienic home food — cooked the way a family kitchen would, delivered to your door in Sivakasi.",
  body:
    "For **bachelors, working professionals, and families** who are tired of restaurant grease. The headline feature: pack a full order into **one WhatsApp sentence** — dish, qty, day, meal, payment — and get a server-priced confirm card. No app store required.",
  foodPhotos: [
    { src: "/case-studies/vidyas-kitchen/food/web/food-01.webp", alt: "Vidya's Kitchen home-cooked dish", focus: "42% 38%" },
    { src: "/case-studies/vidyas-kitchen/food/web/food-02.webp", alt: "Vidya's Kitchen meal spread", focus: "50% 72%" },
    { src: "/case-studies/vidyas-kitchen/food/web/food-03.webp", alt: "Fresh hygienic home food", focus: "50% 44%" },
    { src: "/case-studies/vidyas-kitchen/food/web/food-04.webp", alt: "South Indian home-style cooking", focus: "50% 54%" },
    { src: "/case-studies/vidyas-kitchen/food/web/food-05.webp", alt: "Vidya's Kitchen plated meal", focus: "58% 60%" },
    { src: "/case-studies/vidyas-kitchen/food/web/food-06.webp", alt: "Home kitchen food photography", focus: "48% 50%" },
  ],
  whatsAppStory: {
    eyebrow: "WhatsApp bot · live product · main differentiator",
    headline: "One message. Full order.",
    flows: [
      {
        id: "returning",
        tabLabel: "Returning user",
        body:
          "I have not seen another food-ordering bot do this: a returning customer sends **one sentence** — dish, quantity, day, meal, payment — and the server returns a **priced confirm card** with their saved address. Typing is optional: tap **Quick Reorder** for frequent items, or say “Hi” for Menu and Help. **Nothing is booked until Confirm**.",
        highlights: [
          { id: "one-shot", label: "One sentence → full bill" },
          { id: "first", label: "Not menu trees · not forms" },
          { id: "quick", label: "Quick Reorder · zero typing" },
          { id: "confirm", label: "Server-priced · Confirm to book" },
        ],
        screens: [
          {
            id: "one-message",
            tag: "Highlight",
            caption: "One sentence → itemized bill · saved address · Confirm",
            src: "/case-studies/vidyas-kitchen/whatsapp/one-message-flow/01-sentence-to-summary.webp",
            alt: "WhatsApp one-message order parsed into itemized confirm card",
            featured: true,
          },
          {
            id: "greeting",
            tag: "Returning path",
            caption: "“Hi” → Quick Reorder · Menu · Help",
            src: "/case-studies/vidyas-kitchen/whatsapp/one-message-flow/02-returning-greeting.webp",
            alt: "WhatsApp greeting for returning customer with quick action buttons",
          },
          {
            id: "quick-reorder",
            tag: "No typing",
            caption: "Tap Quick Reorder → your usual frequent items",
            src: "/case-studies/vidyas-kitchen/whatsapp/one-message-flow/03-quick-reorder-sheet.webp",
            alt: "WhatsApp quick reorder sheet with frequently ordered dishes",
          },
        ],
      },
      {
        id: "normal",
        tabLabel: "Standard order",
        body:
          "First-time or vague intent — name a dish in plain language. The bot shows **photo cards** when several gravies match, asks only for what is missing, then the same **confirm card with the full bill**. Same prices and slots as the app.",
        highlights: [
          { id: "plain", label: "Plain language in" },
          { id: "carousel", label: "Dish carousel" },
          { id: "bill", label: "Full bill before confirm" },
          { id: "thread", label: "Receipt in the same thread" },
        ],
        screens: [
          {
            id: "carousel",
            tag: "Step 01",
            caption: "“Chicken for tomorrow’s dinner” → swipe cards · tap Add",
            src: "/case-studies/vidyas-kitchen/whatsapp/order-flow/01-chicken-carousel.webp",
            alt: "WhatsApp dish carousel after a plain-language order",
          },
          {
            id: "pick-size",
            tag: "Step 02",
            caption: "Tap Add → pick 500gm or 1kg",
            src: "/case-studies/vidyas-kitchen/whatsapp/order-flow/02-pick-size.webp",
            alt: "WhatsApp size selection for chicken gravy",
          },
          {
            id: "summary",
            tag: "Step 03",
            caption: "Bill · slot · address · Confirm order",
            src: "/case-studies/vidyas-kitchen/whatsapp/order-flow/03-order-summary.webp",
            alt: "WhatsApp order summary with itemized bill before confirm",
          },
          {
            id: "confirmed",
            tag: "Step 04",
            caption: "Order lands · receipt in the same thread",
            src: "/case-studies/vidyas-kitchen/whatsapp/order-flow/04-order-confirmed.webp",
            alt: "WhatsApp order confirmed with receipt",
          },
        ],
      },
    ] satisfies VidyasWhatsAppFlowPanel[],
  },
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
    "Skip the restaurant. Home-cooked, hygienic food from Vidya's Kitchen — order in one WhatsApp message or the app, delivered to your door in Sivakasi.",
};

export type VidyasDesignSwatch = {
  token: string;
  hex: string;
  /** Background for contrast pair */
  onHex: string;
  /** Foreground on `onHex` */
  fgHex: string;
  fontSize: number;
  fontWeight: number;
  source: string;
};

export type VidyasDesignChip = {
  id: string;
  label: string;
};

export type VidyasDesignSurface = {
  id: "landing" | "customer" | "driver" | "dashboard";
  tabLabel: string;
  caption: string;
  meta: {
    icons: string;
    radius: string;
    touch: string;
    source: string;
  };
  swatches: VidyasDesignSwatch[];
  chips: VidyasDesignChip[];
};

/** Token index + measured specs from design-system.pdf v2.1 (portfolio copy). */
export const vidyasDesignSystem = {
  intro:
    "Three product surfaces plus the marketing landing — same Outfit type, different jobs. Values below trace to the **design-system PDF** token index and measured harness specs.",
  pdfHref: "/case-studies/vidyas-kitchen/design-system.pdf",
  menuPhotoSrc: "/case-studies/vidyas-kitchen/food/web/food-01.webp",
  surfaces: [
    {
      id: "landing",
      tabLabel: "Landing",
      caption:
        "Dark canvas, one action — WhatsApp green owns the CTA; brand red on the wordmark is the marketing accent (#CC1C1C in case study artifacts).",
      meta: {
        icons: "Logo mark · no app icon set",
        radius: "12–16 on card · circle logo",
        touch: "WhatsApp CTA · full-width",
        source: "lib/caseStudies.ts · landing designSystem artifact",
      },
      swatches: [
        {
          token: "Landing brand red",
          hex: "#CC1C1C",
          onHex: "#1A1A1A",
          fgHex: "#CC1C1C",
          fontSize: 24,
          fontWeight: 800,
          source: "caseStudies.ts · landing artifact",
        },
        {
          token: "Dark canvas",
          hex: "#1A1A1A",
          onHex: "#FFFFFF",
          fgHex: "#1A1A1A",
          fontSize: 15,
          fontWeight: 500,
          source: "caseStudies.ts",
        },
        {
          token: "WhatsApp green",
          hex: "#25D366",
          onHex: "#1A1A1A",
          fgHex: "#25D366",
          fontSize: 16,
          fontWeight: 700,
          source: "caseStudies.ts",
        },
        {
          token: "Pure white",
          hex: "#FFFFFF",
          onHex: "#1A1A1A",
          fgHex: "#FFFFFF",
          fontSize: 15,
          fontWeight: 500,
          source: "caseStudies.ts",
        },
      ],
      chips: [
        { id: "wa-cta", label: "WhatsApp CTA" },
        { id: "landing-card", label: "Centre card" },
        { id: "order-row", label: "Order row" },
      ],
    },
    {
      id: "customer",
      tabLabel: "Customer",
      caption:
        "Light glass at home — soft neutrals and #BD2320 primary so food photography leads; button 56px / radius 20 from PDF harness.",
      meta: {
        icons: "Phosphor",
        radius: "16–28 cards · 20 primary",
        touch: "56px primary",
        source: "design-system.pdf · C.* tokens",
      },
      swatches: [
        {
          token: "C.bg",
          hex: "#F5F5F7",
          onHex: "#1A1A1A",
          fgHex: "#1A1A1A",
          fontSize: 15,
          fontWeight: 500,
          source: "PDF token index",
        },
        {
          token: "C.red",
          hex: "#BD2320",
          onHex: "#FFFFFF",
          fgHex: "#FFFFFF",
          fontSize: 15,
          fontWeight: 800,
          source: "PDF token index · mobile-design-tokens",
        },
        {
          token: "C.text",
          hex: "#1A1A1A",
          onHex: "#F5F5F7",
          fgHex: "#1A1A1A",
          fontSize: 16,
          fontWeight: 700,
          source: "PDF token index",
        },
        {
          token: "SUCCESS",
          hex: "#22C55E",
          onHex: "#F5F5F7",
          fgHex: "#22C55E",
          fontSize: 13,
          fontWeight: 600,
          source: "PDF token index",
        },
      ],
      chips: [
        { id: "primary-btn", label: "Primary button" },
        { id: "menu-card", label: "Menu card" },
        { id: "size-drawer", label: "Size drawer" },
      ],
    },
    {
      id: "driver",
      tabLabel: "Driver",
      caption:
        "Near-black field UI — brighter #E84040 / #E8492D so reach and swipe read on a bike in daylight (PDF notes sub-AA white-on-red).",
      meta: {
        icons: "Lucide",
        radius: "14 control · 16 card",
        touch: "60px reach / swipe",
        source: "design-system.pdf · D.* tokens",
      },
      swatches: [
        {
          token: "D.bg",
          hex: "#0A0A0A",
          onHex: "#FFFFFF",
          fgHex: "#FFFFFF",
          fontSize: 16,
          fontWeight: 800,
          source: "PDF token index",
        },
        {
          token: "D.red",
          hex: "#E84040",
          onHex: "#E84040",
          fgHex: "#FFFFFF",
          fontSize: 16,
          fontWeight: 800,
          source: "PDF token index · reach btn",
        },
        {
          token: "Navigate / swipe",
          hex: "#E8492D",
          onHex: "#E8492D",
          fgHex: "#FFFFFF",
          fontSize: 15,
          fontWeight: 800,
          source: "PDF token index",
        },
        {
          token: "D.green",
          hex: "#34D469",
          onHex: "#0A0A0A",
          fgHex: "#34D469",
          fontSize: 15,
          fontWeight: 800,
          source: "PDF token index",
        },
        {
          token: "D.amber",
          hex: "#F5A623",
          onHex: "#0A0A0A",
          fgHex: "#F5A623",
          fontSize: 11,
          fontWeight: 800,
          source: "PDF token index",
        },
      ],
      chips: [
        { id: "swipe", label: "Swipe to deliver" },
        { id: "job-card", label: "Job card" },
        { id: "collect", label: "Collect cash" },
      ],
    },
    {
      id: "dashboard",
      tabLabel: "Dashboard",
      caption:
        "Desk ops on #0D0D0D — yellow (#F5E32D / #F5C518) reserved for the control you must tap (nav, approve).",
      meta: {
        icons: "Lucide",
        radius: "12 nav · 16 tiles",
        touch: "44px rows",
        source: "design-system.pdf · dashboard literals",
      },
      swatches: [
        {
          token: "Dashboard bg",
          hex: "#0D0D0D",
          onHex: "#FFFFFF",
          fgHex: "#FFFFFF",
          fontSize: 14,
          fontWeight: 600,
          source: "PDF token index",
        },
        {
          token: "Sidebar active",
          hex: "#F5E32D",
          onHex: "#F5E32D",
          fgHex: "#000000",
          fontSize: 14,
          fontWeight: 600,
          source: "PDF token index",
        },
        {
          token: "Complaints accent",
          hex: "#F5C518",
          onHex: "#0D0D0D",
          fgHex: "#F5C518",
          fontSize: 10,
          fontWeight: 800,
          source: "PDF token index",
        },
      ],
      chips: [
        { id: "approve", label: "Approve" },
        { id: "stat", label: "Stat tile" },
        { id: "sidebar", label: "Sidebar row" },
      ],
    },
  ] satisfies VidyasDesignSurface[],
};

/** Ops dashboard export — file in public/case-studies/vidyas-kitchen/ */
export const tableauScreenshotSrc = "/case-studies/vidyas-kitchen/tableau-screenshot.webp";
export const tableauCopy =
  "The in-app board handles today’s tickets. **Tableau** is the weekly read — meal mix and dish-level rupees from the same order data the kitchen already trusts, so Vidya can spot patterns before the nightly pricing cards fire.";
export const tableauHighlights = [
  {
    id: "meals",
    label: "Meals · order rupees",
    body: "**Dinner** carries the most revenue in this slice, then **lunch**, then **breakfast** — useful when planning prep and driver windows, not just menu photos.",
  },
  {
    id: "dishes",
    label: "Dishes · item rupees",
    body: "Gravies and specials rank by rupees, not order count alone — **Mom’s Recipe chicken gravy** and **chilly chicken gravy** sit at the top; wings and smaller gravies trail, which is exactly what the pricing agent should not treat as “the same dish.”",
  },
  {
    id: "pair",
    label: "Why both",
    body: "Dashboard = act now. Tableau = compare weeks. **AI pricing suggestions still need a human approve** — this chart is context, not autopilot.",
  },
];

/** Languages, frameworks, and design craft */
export const vidyasSkills: VidyasStackItem[] = [
  { name: "TypeScript", icon: "typescript" },
  { name: "React 19", icon: "react" },
  { name: "Next.js 15", icon: "nextdotjs" },
  { name: "Tailwind CSS 4", icon: "tailwindcss" },
  { name: "Figma", icon: "figma" },
];

/** Services, APIs, and platforms wired into production */
export const vidyasTools: VidyasStackItem[] = [
  { name: "Supabase", icon: "supabase" },
  { name: "Razorpay", icon: "razorpay" },
  { name: "Firebase Auth", icon: "firebase" },
  { name: "Twilio OTP", icon: "twilio" },
  { name: "Mapbox", icon: "mapbox" },
  { name: "WhatsApp API", icon: "whatsapp" },
  { name: "OpenAI", icon: "openai" },
  { name: "Google Gemini", icon: "googlegemini" },
  { name: "Vercel", icon: "vercel" },
  { name: "Tableau", icon: "tableau" },
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

export const vidyasIADiagram = {
  root: "One order record · Supabase",
  subtitle: "Four surfaces · same prices, slots, and reference on every screen",
  columns: [
    {
      id: "pwa",
      label: "Customer PWA",
      tag: "PWA",
      steps: [
        "Home / menu · chicken, egg, mutton + photos",
        "Dish → cart → schedule (date + breakfast / lunch / dinner)",
        "Address · map pin in Sivakasi, saved places, order for someone else",
        "Pay · full bill, Razorpay or cash at door → orders & live tracking",
      ],
    },
    {
      id: "bot",
      label: "WhatsApp bot",
      tag: "WhatsApp",
      steps: [
        "Welcome + one-line order example in chat",
        "Route support / complaint / food · draft dish, size, day, meal",
        "Server prices draft · confirm card with packing, delivery, GST",
        "Payment link or cash · track · call kitchen · file complaint",
      ],
    },
    {
      id: "kitchen",
      label: "Kitchen dashboard",
      tag: "Dashboard",
      steps: [
        "Live orders board · revenue by meal",
        "Move ticket · paid → preparing → ready → dispatch",
        "AI pricing cards · festival offers · approve every percent",
        "Drivers · reviews · complaints · WhatsApp inbox",
      ],
    },
    {
      id: "driver",
      label: "Driver app",
      tag: "Driver",
      steps: [
        "Phone login · OTP",
        "Assigned jobs · same order reference as customer chat",
        "Mapbox navigation to drop pin inside radius",
        "Mark delivered or not delivered · cash collection if needed",
      ],
    },
  ] satisfies IASurfaceColumn[],
};

export const vidyasFlowDiagrams: FlowDiagramData[] = [
  {
    id: "returning",
    title: "Returning user",
    steps: [
      { id: "s1", label: "One sentence · dish · qty · day · meal · payment", type: "start" },
      { id: "d1", label: "Quick Reorder or type?", type: "decision" },
      { id: "p1", label: "Tap usual from frequent list · no typing required", type: "process" },
      { id: "p2", label: "Server parses sentence · matches menu · prices draft", type: "process" },
      { id: "p3", label: "Saved address · confirm card · nothing booked yet", type: "process" },
      { id: "d2", label: "Confirm order?", type: "decision" },
      { id: "e1", label: "Same ticket · kitchen board · receipt in thread", type: "end" },
    ],
  },
  {
    id: "whatsapp",
    title: "Standard order",
    steps: [
      { id: "s1", label: "Customer sends a sentence — or taps the one-line example", type: "start" },
      { id: "p1", label: "Bot routes support, complaint, or food · fills dish, size, day, meal, cash/online", type: "process" },
      { id: "p2", label: "Photo cards if several gravies match · ask only what is missing", type: "process" },
      { id: "p3", label: "Server matches dish, reads menu price, adds packing + delivery + GST", type: "process" },
      { id: "d1", label: "Customer confirms the full bill?", type: "decision" },
      { id: "p4", label: "Order row written · Razorpay link or cash-at-door flag", type: "process" },
      { id: "e1", label: "Kitchen board + driver job · same ticket reference", type: "end" },
    ],
  },
  {
    id: "pwa",
    title: "PWA checkout",
    steps: [
      { id: "s1", label: "Open installable PWA · browse menu with sizes", type: "start" },
      { id: "p1", label: "Add to cart · pick 500gm or 1kg", type: "process" },
      { id: "p2", label: "Choose slot at least 24 hours ahead · breakfast / lunch / dinner", type: "process" },
      { id: "p3", label: "Drop pin inside Sivakasi · or order for someone in town", type: "process" },
      { id: "d1", label: "Bill correct · online or cash at door?", type: "decision" },
      { id: "p4", label: "Razorpay checkout or cash flag · apply promo if any", type: "process" },
      { id: "e1", label: "Tracking view = the ticket the kitchen is cooking", type: "end" },
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen → driver",
    steps: [
      { id: "s1", label: "Paid or cash-confirmed order hits live board", type: "start" },
      { id: "p1", label: "Kitchen marks confirmed → preparing against the slot calendar", type: "process" },
      { id: "p2", label: "Ready for pickup · assign driver from dashboard", type: "process" },
      { id: "p3", label: "Driver sees drop pin · Mapbox navigation", type: "process" },
      { id: "d1", label: "Box handed off?", type: "decision" },
      { id: "p4", label: "Out for delivery · customer status updates on PWA / WhatsApp", type: "process" },
      { id: "e1", label: "Delivered or not delivered · payment tracked separately", type: "end" },
    ],
  },
];

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

/** Kitchen-side story — dashboard + driver only (customer surfaces live above) */
export const vidyasKitchenOpsStory = {
  eyebrow: "Act 03 · After the order confirms",
  headline: "Kitchen dashboard & driver handoff",
  intro:
    "WhatsApp and the PWA get the customer to **Confirm** — then the same **order row** hits the kitchen board, gets assigned, and goes out on the road. No duplicate entry, no phone calls to the driver.",
  dashboard: {
    label: "Kitchen dashboard",
    body:
      "Vidya sees **new → preparing → ready** on one board. Revenue and festival pricing sit on the same login — the nightly **AI pricing agent** proposes changes; she approves every percent before it goes live.",
    highlights: [
      { id: "pipeline", label: "Accept · reject pipeline" },
      { id: "revenue", label: "Revenue & meal mix" },
      { id: "ai", label: "AI pricing · festival mode" },
    ],
    screens: [
      {
        id: "dash-orders",
        tag: "Step 01 · Order board",
        caption: "New orders land here — Accept or Reject before prep starts",
        src: "/case-studies/vidyas-kitchen/dashboard/orders-board.webp",
        alt: "Kitchen dashboard order management board",
      },
      {
        id: "dash-revenue",
        tag: "Step 02 · Revenue",
        caption: "Monthly sales, meal breakdown, calendar — same session as ops",
        src: "/case-studies/vidyas-kitchen/dashboard/revenue.webp",
        alt: "Kitchen dashboard revenue and sales view",
      },
      {
        id: "dash-pricing",
        tag: "Step 03 · AI pricing",
        caption: "Nightly agent suggests festival pricing — kitchen approves every change",
        src: "/case-studies/vidyas-kitchen/dashboard/ai-pricing.webp",
        alt: "Kitchen dashboard AI pricing and festival settings",
      },
    ],
  } satisfies VidyasOpsStoryPanel,
  driver: {
    label: "Driver app",
    body:
      "Drivers log in with a **kitchen-issued PIN**. Jobs appear when food is ready — navigate, call the customer, mark **cash or UPI**, swipe to **delivered**. Kitchen gets the same status the customer sees in the PWA.",
    highlights: [
      { id: "pin", label: "PIN login" },
      { id: "live", label: "Live job queue" },
      { id: "collect", label: "Cash · UPI · delivered" },
    ],
    screens: [
      {
        id: "driver-login",
        tag: "Step 01 · Portal",
        caption: "Phone number entry — kitchen registers each driver",
        src: "/case-studies/vidyas-kitchen/driver/01-login.webp",
        alt: "Driver app login screen",
      },
      {
        id: "driver-pin",
        tag: "Step 02 · PIN",
        caption: "Verified number + secret PIN → sign in",
        src: "/case-studies/vidyas-kitchen/driver/02-pin-signin.webp",
        alt: "Driver app PIN sign in",
      },
      {
        id: "driver-empty",
        tag: "Step 03 · Waiting",
        caption: "All clear — new jobs push automatically when ready",
        src: "/case-studies/vidyas-kitchen/driver/03-deliveries-empty.webp",
        alt: "Driver app empty deliveries queue",
      },
      {
        id: "driver-jobs",
        tag: "Step 04 · Active job",
        caption: "Pick up from kitchen · on the road · ₹348 to collect",
        src: "/case-studies/vidyas-kitchen/driver/04-deliveries-active.webp",
        alt: "Driver app active delivery",
      },
      {
        id: "driver-on-way",
        tag: "Step 05 · Navigate",
        caption: "Maps, call customer, collect cash or UPI on arrival",
        src: "/case-studies/vidyas-kitchen/driver/05-on-the-way.webp",
        alt: "Driver app on the way screen",
      },
      {
        id: "driver-collect",
        tag: "Step 06 · Payment",
        caption: "Mark cash collected · swipe to confirm delivery",
        src: "/case-studies/vidyas-kitchen/driver/06-collect-payment.webp",
        alt: "Driver app payment collection",
      },
      {
        id: "driver-delivered",
        tag: "Step 07 · Done",
        caption: "Same order reference — kitchen and customer notified",
        src: "/case-studies/vidyas-kitchen/driver/07-delivered.webp",
        alt: "Driver app delivery complete",
      },
    ],
  } satisfies VidyasOpsStoryPanel,
};

export const vidyasOrderSyncRules: VidyasOrderSyncRules = {
  filename: "system/sync-contract.md",
  title: "How an order stays in sync",
  illustrationNote: "Portfolio illustration — this path is not in the client repo.",
  lines: [
    { text: "# SYSTEM — how an order stays in sync", tone: "heading" },
    { text: "", tone: "default" },
    { text: "// Model boundaries — never cross these", tone: "comment" },
    { text: "never createOrder()", tone: "keyword", highlight: true },
    { text: "never setPrice()", tone: "keyword", highlight: true },
    {
      text: "return draft { dish, size, day, meal, payment }  // omit unknown fields",
      tone: "accent",
    },
    { text: "", tone: "default" },
    { text: "// Server-owned pipeline", tone: "comment" },
    { text: "server.matchDish(liveMenu)", tone: "default", indent: 1 },
    { text: "server.price(food, packing, delivery, tax)", tone: "default", indent: 1 },
    { text: "server.writeOrder()  // only after customer confirms", tone: "accent", indent: 1, highlight: true },
    { text: "", tone: "default" },
    { text: "// One row — every surface reads the same copy", tone: "comment" },
    {
      text: "read(orderRow) → kitchenBoard | driverApp | tracking | nextReply",
      tone: "string",
      highlight: true,
    },
    { text: "", tone: "default" },
    { text: "// Food status ≠ payment status", tone: "comment" },
    {
      text: 'food.status === "out_for_delivery" && payment.status === "pending"  // valid',
      tone: "muted",
    },
    { text: "", tone: "default" },
    { text: '// "Where is my order?"', tone: "comment" },
    { text: "readOrders(customer)  // never invent status or refund", tone: "default" },
    { text: "refundStarted(paymentRecord)  // only then say money is on the way", tone: "default" },
    { text: "", tone: "default" },
    { text: "// Draft hygiene", tone: "comment" },
    { text: "if (draft.has(dish)) keep(dish)  // do not replace with category", tone: "default" },
  ],
};

export const vidyasArchitectureTree: VidyasArchNode[] = [
  {
    id: "root",
    name: "vidyas-kitchen",
    kind: "folder",
    children: [
      {
        id: "surfaces",
        name: "surfaces",
        kind: "folder",
        children: [
          {
            id: "pwa",
            name: "customer-pwa.tsx",
            kind: "file",
            preview: [
              { text: "// Customer PWA — browse, cart, slot, pay", tone: "comment" },
              { text: 'export const routes = ["menu", "cart", "checkout", "track"];', tone: "default" },
            ],
          },
          {
            id: "bot",
            name: "whatsapp-bot.ts",
            kind: "file",
            preview: [
              { text: "// WhatsApp — sentence in, draft out", tone: "comment" },
              { text: "route(support) → route(complaint) → parseFood(sentence)", tone: "accent" },
            ],
          },
          {
            id: "dash",
            name: "kitchen-dashboard.tsx",
            kind: "file",
            preview: [
              { text: "// Kitchen board — live orders + AI pricing cards", tone: "comment" },
              { text: "advance(order, status: Preparing | Ready | Dispatched)", tone: "default" },
            ],
          },
          {
            id: "driver",
            name: "driver-app.tsx",
            kind: "file",
            preview: [
              { text: "// Driver — assigned jobs, map pin, delivered", tone: "comment" },
              { text: "sync(orderRef) // same reference as bot + PWA", tone: "accent" },
            ],
          },
        ],
      },
      {
        id: "core",
        name: "core",
        kind: "folder",
        children: [
          {
            id: "next",
            name: "next.config.ts",
            kind: "file",
            preview: [
              { text: 'runtime: "Next.js 15 on Vercel"', tone: "string" },
              { text: "edge + server actions · one deploy", tone: "muted" },
            ],
          },
          {
            id: "supa",
            name: "supabase",
            kind: "folder",
            children: [
              {
                id: "schema",
                name: "schema.sql",
                kind: "file",
                preview: [
                  { text: "-- orders · menu · users · one row per ticket", tone: "comment" },
                  { text: "create table orders ( ref, status, payment_status, ... );", tone: "default" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "integrations",
        name: "integrations",
        kind: "folder",
        children: [
          {
            id: "pay",
            name: "razorpay.ts",
            kind: "file",
            preview: [{ text: "// Payments — only after server-priced confirm", tone: "comment" }],
          },
          {
            id: "auth",
            name: "auth.ts",
            kind: "file",
            preview: [{ text: "// Firebase phone auth + Twilio OTP", tone: "comment" }],
          },
          {
            id: "maps",
            name: "maps.ts",
            kind: "file",
            preview: [{ text: "// Mapbox pin inside 15 km Sivakasi radius", tone: "comment" }],
          },
          {
            id: "ai",
            name: "ai-models.ts",
            kind: "file",
            preview: [
              { text: "// OpenAI + Gemini draft · Whisper transcribe", tone: "comment" },
              { text: "// models never write prices or charge cards", tone: "muted" },
            ],
          },
        ],
      },
      {
        id: "pipeline",
        name: "pipeline",
        kind: "folder",
        children: [
          {
            id: "sync",
            name: "sync-contract.md",
            kind: "file",
            preview: vidyasOrderSyncRules.lines.slice(0, 12),
          },
          {
            id: "flow",
            name: "order-flow.ts",
            kind: "file",
            preview: [
              { text: "// Order pipeline — models never touch payments", tone: "comment" },
              { text: "draft → server.matchDish() → server.price() → confirm → one order row", tone: "accent" },
              { text: "dashboard.advance(row) · driver.advance(row)", tone: "muted" },
            ],
          },
        ],
      },
    ],
  },
];

export const vidyasHonestOutcomes = [
  "Live at vidyaskitchenhome.com — customer PWA, kitchen dashboard, driver app, and WhatsApp bot share one system.",
  "WhatsApp and the app use the same prices, slots, and order record.",
  "Bot misroutes were reproduced and covered with tests before treated as fixed.",
  "A home kitchen can take a slot order, cook to it, dispatch a driver, and answer “where is my order?” without a marketplace in the middle.",
];

export const vidyasDoNotClaim: string[] = [];
