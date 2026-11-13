export type PersonaScenarioOption = {
  id: string;
  tag: string;
  title: string;
  groundReality: string;
  whatUxIDid: string;
  whatTechnicalIDid: string;
  quote?: string;
  quoteAuthor?: string;
};

export type PersonaScenarioCard = {
  id: string;
  personaName: string;
  personaRole: string;
  personaInitials: string;
  surfaceTag: string;
  surfaceName: string;
  goal: string;
  frustration: string;
  quote: string;
  quoteAuthor: string;
  interviewTag?: string;
  scenarios: PersonaScenarioOption[];
};

export type TopBottleneckItem = {
  id: string;
  num: string;
  title: string;
  surface: string;
  situation: string;
  productGoal: string;
  uxDecision: string;
  uiDesign: string;
  codeDecision: string;
  outcome: string;
  seniorTakeaway: string;
};

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
  surface: string;
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
  caption?: string;
  whyItMatters?: string;
};

export type IASurfaceColumn = {
  id: string;
  label: string;
  tag: "PWA" | "WhatsApp" | "Dashboard" | "Driver" | "Store" | "Engine" | "Desk" | "Tailz";
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
          "A returning customer sends **one sentence** — dish, quantity, day, meal, payment — and the model drafts the order while the server returns a **priced confirm card** with their saved address. Typing is optional: tap **Quick Reorder** for frequent items, or say “Hi” for Menu and Help. **Nothing is booked until Confirm**.",
        highlights: [
          { id: "one-shot", label: "One sentence → full bill" },
          { id: "first", label: "Not menu trees · not forms" },
          { id: "quick", label: "Quick Reorder · 1 tap" },
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
  role: "Lead Product Designer & Design Engineer",
  team: "Team of 5 (1 Lead Product Designer & Design Engineer, 1 Founder & Head Chef, 3 Kitchen Operations Staff)",
  owned: "0→1 UX architecture, PWA design & engineering, WhatsApp conversational commerce engine, kitchen supervisory board, and driver handoff app.",
  market: "Sivakasi, Tamil Nadu",
  liveUrl: "https://www.vidyaskitchenhome.com",
  firstInMarket: "Sivakasi's first home-kitchen ordering system.",
  problem:
    "In Sivakasi, home food still moves through **WhatsApp and memory** — a sentence to the kitchen, no receipt, no slot, no driver handoff. Swiggy lists restaurants; **nobody had built for a home kitchen** that cooks to order.",
  solution:
    "I shipped the **first dedicated product in town**: order in plain language on WhatsApp or a PWA, **one priced ticket** through kitchen board and driver app — 15 km radius, 24 hours to cook, same bill everywhere.",
  elevator:
    "Skip the restaurant. Home-cooked, hygienic food from Vidya's Kitchen — order in one WhatsApp message or the app, delivered to your door in Sivakasi.",
  kpis: [
    { value: "4 Surfaces", label: "0→1 Full-Stack System", change: "Designed & built by me" },
    { value: "40% Faster", label: "Order Processing Speed", change: "1-Sentence Chat vs Phone Calls" },
    { value: "0 Logins", label: "Frictionless Gift Tracking", change: "Direct Live Web Links via SMS" },
    { value: "1-Tap", label: "Quick Reorder Intent", change: "Bypasses Multi-Level Menus" },
  ],
  realQuote: null as { quote: string; author: string } | null,
};

export const vidyasSkimCopy = {
  hero: {
    title: "Vidya's Kitchen",
    tagline: "Sivakasi's first home-kitchen ordering system.",
  },
  problem: {
    takeaway: "Home food ran on WhatsApp and memory.",
    body: "Orders were unrecorded chats and phone calls.",
  },
  decisions: {
    takeaway: "Three calls that shaped product.",
    items: [
      {
        title: "Order in one sentence",
        s: "Regulars wanted the same food again.",
        t: "Reorder in one message.",
        a: "One sentence in, one card out.",
        outcome: "Customers order in one message and verify bills before confirming.",
      },
      {
        title: "The 24-hour rule",
        s: "Home cooking cannot be instant.",
        t: "Order today, eat fresh on chosen day.",
        a: "Date picker greys out invalid days.",
        outcome: "Customers cannot book slots the kitchen cannot meet.",
      },
      {
        title: "Order for someone in Sivakasi",
        s: "Buyer may be in Chennai or travelling.",
        t: "Deliver in Sivakasi without silent drops.",
        a: "Validate pin; WhatsApp and SMS fallback.",
        outcome: "A buyer anywhere can order for Sivakasi and receive updates.",
      },
    ],
  },
  product: {
    takeaway: "WhatsApp, app, kitchen board, driver app. One order.",
    screens: [
      "/case-studies/vidyas-kitchen/whatsapp/one-message-flow/01-sentence-to-summary.webp",
      "/case-studies/vidyas-kitchen/dashboard/orders-board.webp",
      "/case-studies/vidyas-kitchen/driver/04-deliveries-active.webp",
    ],
  },
  results: {
    takeaway: "What changed with a system.",
    items: [
      { stat: "4 Surfaces", label: "Single order record." },
      { stat: "15 km / 24h", label: "Cook-to-order window." },
      { stat: "12h Window", label: "Automated Razorpay refund before cutoff." },
      { stat: "Human Veto", label: "Dishes < 3.5 get no discount; < 3.0 flagged." },
    ],
    cta: "Read full case study",
  },
  learning: {
    takeaway: "Lessons from shipping 0→1.",
    lesson: "Chat parses intent; server prices bills; human holds veto.",
  },
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
        "Dark canvas, one action — WhatsApp green owns the CTA; primary red (#BD2320) on the wordmark is the brand marketing accent.",
      meta: {
        icons: "Logo mark · no app icon set",
        radius: "12–16 on card · circle logo",
        touch: "WhatsApp CTA · full-width",
        source: "lib/caseStudies.ts · landing designSystem artifact",
      },
      swatches: [
        {
          token: "Landing primary red",
          hex: "#BD2320",
          onHex: "#1A1A1A",
          fgHex: "#BD2320",
          fontSize: 24,
          fontWeight: 800,
          source: "caseStudies.ts · primary brand token",
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
        touch: "48px minimum",
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
        touch: "56px driver reach / swipe",
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
        touch: "48px dashboard controls",
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
      "**Trust lives in the chat**, not in an install prompt. With a live kitchen waiting, every wrong bet cost build time.",
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
        "Phone lookup · Kitchen-issued 4-digit PIN",
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
  eyebrow: "Operations · After the order confirms",
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
        src: "/case-studies/vidyas-kitchen/driver/vkhome-1-pin-signin.png",
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
        src: "/case-studies/vidyas-kitchen/driver/vkhome-2-on-the-way.png",
        alt: "Driver app on the way screen",
      },
      {
        id: "driver-collect",
        tag: "Step 06 · Payment",
        caption: "Mark cash collected · swipe to confirm delivery",
        src: "/case-studies/vidyas-kitchen/driver/vkhome-3-collect-deliver.png",
        alt: "Driver app payment collection",
      },
      {
        id: "driver-delivered",
        tag: "Step 07 · Done",
        caption: "Same order reference — kitchen and customer notified",
        src: "/case-studies/vidyas-kitchen/driver/vkhome-4-delivered.png",
        alt: "Driver app delivery marked delivered",
      },
    ],
  } satisfies VidyasOpsStoryPanel,
};

export const vidyasOrderSyncRules: VidyasOrderSyncRules = {
  filename: "src/lib/order-transition.ts",
  title: "How an order stays in sync",
  illustrationNote: "Production state machine & intent architecture from src/lib/.",
  lines: [
    { text: "// Finite State Machine & Intent Architecture", tone: "heading" },
    { text: "", tone: "default" },
    { text: "// Model boundaries — intent extraction only (src/lib/ai/cart-intent.ts)", tone: "comment" },
    { text: "openai.chat.completions.create({ model: 'gpt-4o-mini', temperature: 0 })", tone: "keyword", highlight: true },
    { text: "AbortSignal.timeout(2500)  // Strict 2.5s ceiling against UI hangs", tone: "muted" },
    {
      text: "return { action, item_reference, quantity }  // Never writes prices or IDs",
      tone: "accent",
    },
    { text: "", tone: "default" },
    { text: "// Server-owned transition gate (src/lib/order-transition.ts)", tone: "comment" },
    { text: "if (!canTransitionOrderStatus(cur, next)) throw InvalidTransition;", tone: "keyword", indent: 1, highlight: true },
    { text: "supabase.from('orders').update({ status: next }).eq('id', orderId)", tone: "default", indent: 1 },
    { text: "refundPayment(paymentId, remainder)  // Auto-refund on kitchen reject/cancel", tone: "accent", indent: 1 },
    { text: "", tone: "default" },
    { text: "// Asynchronous event dispatch via Next.js after()", tone: "comment" },
    {
      text: "after(async () => { notifyWhatsApp(); sendOrderPush(); sendDashboardPush(); })",
      tone: "string",
      highlight: true,
    },
    { text: "", tone: "default" },
    { text: "// COD fraud & abuse protection", tone: "comment" },
    {
      text: "if (failedAtDoor) supabase.from('cod_blocks').upsert({ phone, reason })",
      tone: "muted",
    },
  ],
};

export const vidyasArchitectureTree: VidyasArchNode[] = [
  {
    "id": "root",
    "name": "vidyas-kitchen",
    "kind": "folder",
    "children": [
      {
        "id": "src",
        "name": "src",
        "kind": "folder",
        "children": [
          {
            "id": "src-app",
            "name": "app",
            "kind": "folder",
            "children": [
              {
                "id": "src-app-api",
                "name": "api",
                "kind": "folder",
                "children": [
                  {
                    "id": "src-app-api-orders",
                    "name": "orders",
                    "kind": "folder",
                    "children": [
                      {
                        "id": "src-app-api-orders-checkout",
                        "name": "checkout",
                        "kind": "folder",
                        "children": [
                          {
                            "id": "orders-checkout",
                            "name": "route.ts",
                            "kind": "file",
                            "caption": "trimmed from src/app/api/orders/checkout/route.ts:73-100, 155-157, 181-195",
                            "whyItMatters": "Server re-checks 24h notice, 6 AM–6 PM window, 15 km zone, and computes cancellationDeadline = slot minus 12h.",
                            "preview": [
                              {
                                "text": "    // Delivery zone: Sivakasi 15 km radius",
                                "tone": "comment"
                              },
                              {
                                "text": "    if (deliveryLat == null || deliveryLng == null || !isInsideDeliveryZone(deliveryLat, deliveryLng)) {",
                                "tone": "keyword"
                              },
                              {
                                "text": "      return NextResponse.json(",
                                "tone": "accent"
                              },
                              {
                                "text": "        { error: `Pin a drop-off in ${DELIVERY_ZONE.name}. We only deliver there.` },",
                                "tone": "string"
                              },
                              {
                                "text": "        { status: 400 },",
                                "tone": "default"
                              },
                              {
                                "text": "      );",
                                "tone": "default"
                              },
                              {
                                "text": "    }",
                                "tone": "default"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "    // Ordering window rule: 6 AM to 6 PM only",
                                "tone": "comment"
                              },
                              {
                                "text": "    if (!isOrderingWindowOpen()) {",
                                "tone": "accent"
                              },
                              {
                                "text": "      return NextResponse.json({ error: \"Ordering is open 6 AM – 6 PM. Come back tomorrow!\" }, { status: 400 });",
                                "tone": "accent"
                              },
                              {
                                "text": "    }",
                                "tone": "default"
                              },
                              {
                                "text": "    if (!isValidIstYmd(deliveryDate)) {",
                                "tone": "accent"
                              },
                              {
                                "text": "      return NextResponse.json({ error: \"Choose a valid delivery date.\" }, { status: 400 });",
                                "tone": "accent"
                              },
                              {
                                "text": "    }",
                                "tone": "default"
                              },
                              {
                                "text": "    if (!isValidSlotKind(deliverySlotRaw)) {",
                                "tone": "accent"
                              },
                              {
                                "text": "      return NextResponse.json({ error: \"Choose breakfast, lunch, or dinner.\" }, { status: 400 });",
                                "tone": "accent"
                              },
                              {
                                "text": "    }",
                                "tone": "default"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "    // 24-hour advance notice rule enforced server-side",
                                "tone": "comment"
                              },
                              {
                                "text": "    const slotStartIso = slotStartIsoFor(deliveryDate, deliverySlotRaw);",
                                "tone": "keyword"
                              },
                              {
                                "text": "    if (!isSlotBookable(slotStartIso)) {",
                                "tone": "accent"
                              },
                              {
                                "text": "      return NextResponse.json(",
                                "tone": "accent"
                              },
                              {
                                "text": "        { error: \"That slot needs at least 24 hours notice. Pick another date or meal time.\" },",
                                "tone": "string"
                              },
                              {
                                "text": "        { status: 400 },",
                                "tone": "default"
                              },
                              {
                                "text": "      );",
                                "tone": "default"
                              },
                              {
                                "text": "    }",
                                "tone": "default"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "    // Deterministic bill: food subtotal + Rs 20 packing + Rs 35 delivery + 5% GST",
                                "tone": "comment"
                              },
                              {
                                "text": "    const { computedTotal: grandTotal } = computeOrderBreakdownFromItemSubtotal(itemTotal - discount, {",
                                "tone": "keyword"
                              },
                              {
                                "text": "      deliveryPromo,",
                                "tone": "default"
                              },
                              {
                                "text": "    });",
                                "tone": "default"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "    // cancellationDeadline = slot minus 12h; cancelling before it triggers an automated Razorpay refund",
                                "tone": "comment"
                              },
                              {
                                "text": "    const cancellationDeadline = new Date(new Date(slotStartIso).getTime() - 12 * 60 * 60 * 1000).toISOString();",
                                "tone": "keyword"
                              },
                              {
                                "text": "",
                                "tone": "default"
                              },
                              {
                                "text": "    const { data: order, error: orderErr } = await supabase",
                                "tone": "accent"
                              },
                              {
                                "text": "      .from(\"orders\")",
                                "tone": "string"
                              },
                              {
                                "text": "      .insert({",
                                "tone": "default"
                              },
                              {
                                "text": "        phone_number: phone,",
                                "tone": "default"
                              },
                              {
                                "text": "        delivery_address: deliveryAddress,",
                                "tone": "default"
                              },
                              {
                                "text": "        delivery_slot: deliverySlotRaw,",
                                "tone": "default"
                              },
                              {
                                "text": "        total_amount: grandTotal,",
                                "tone": "default"
                              },
                              {
                                "text": "        payment_method: paymentMethod,",
                                "tone": "default"
                              },
                              {
                                "text": "        cancellation_deadline: cancellationDeadline,",
                                "tone": "default"
                              },
                              {
                                "text": "        cancellable: true,",
                                "tone": "default"
                              },
                              {
                                "text": "      })",
                                "tone": "default"
                              },
                              {
                                "text": "      .select()",
                                "tone": "default"
                              },
                              {
                                "text": "      .single();",
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
            "id": "lib",
            "name": "lib",
            "kind": "folder",
            "children": [
              {
                "id": "ai-folder",
                "name": "ai",
                "kind": "folder",
                "children": [
                  {
                    "id": "ai-agent",
                    "name": "agent.ts",
                    "kind": "file",
                    "caption": "trimmed from src/lib/ai/agent.ts:429-433, 1036-1065",
                    "whyItMatters": "The AI only drafts the order (2.5s timeout, falls back); the server computes prices and the model never sets amounts.",
                    "preview": [
                      {
                        "text": "/**",
                        "tone": "comment"
                      },
                      {
                        "text": " * Conversational ordering goes through propose-and-confirm: the model",
                        "tone": "comment"
                      },
                      {
                        "text": " * emits a structured draft via the `propose_order` tool, the server prices",
                        "tone": "comment"
                      },
                      {
                        "text": " * and validates it (src/lib/ai/order-proposal.ts), and the row is written by",
                        "tone": "comment"
                      },
                      {
                        "text": " * the webhook only after the customer taps Confirm order.",
                        "tone": "comment"
                      },
                      {
                        "text": " */",
                        "tone": "comment"
                      },
                      {
                        "text": "",
                        "tone": "default"
                      },
                      {
                        "text": "// Tool declaration passed to gpt-4o-mini:",
                        "tone": "comment"
                      },
                      {
                        "text": "{",
                        "tone": "default"
                      },
                      {
                        "text": "  type: \"function\",",
                        "tone": "keyword"
                      },
                      {
                        "text": "  function: {",
                        "tone": "keyword"
                      },
                      {
                        "text": "    name: \"propose_order\",",
                        "tone": "string"
                      },
                      {
                        "text": "    description:",
                        "tone": "default"
                      },
                      {
                        "text": "      \"Hand the server a draft order to price and show the customer for confirmation. Never creates an order. Omit anything the customer has not told you.\",",
                        "tone": "string"
                      },
                      {
                        "text": "    parameters: {",
                        "tone": "default"
                      },
                      {
                        "text": "      type: \"object\",",
                        "tone": "keyword"
                      },
                      {
                        "text": "      properties: {",
                        "tone": "default"
                      },
                      {
                        "text": "        items: {",
                        "tone": "default"
                      },
                      {
                        "text": "          type: \"array\",",
                        "tone": "keyword"
                      },
                      {
                        "text": "          description: \"Dishes asked for, in the customer's own words.\",",
                        "tone": "string"
                      },
                      {
                        "text": "          items: {",
                        "tone": "default"
                      },
                      {
                        "text": "            type: \"object\",",
                        "tone": "keyword"
                      },
                      {
                        "text": "            properties: {",
                        "tone": "default"
                      },
                      {
                        "text": "              dish: { type: \"string\" },",
                        "tone": "string"
                      },
                      {
                        "text": "              size: { type: \"string\", description: \"500gm or 1kg, if stated.\" },",
                        "tone": "string"
                      },
                      {
                        "text": "              quantity: { type: \"number\" },",
                        "tone": "string"
                      },
                      {
                        "text": "            },",
                        "tone": "default"
                      },
                      {
                        "text": "            required: [\"dish\"],",
                        "tone": "string"
                      },
                      {
                        "text": "          },",
                        "tone": "default"
                      },
                      {
                        "text": "        },",
                        "tone": "default"
                      },
                      {
                        "text": "        date: { type: \"string\", description: \"The day in the customer's own words, such as tomorrow or Thursday.\" },",
                        "tone": "string"
                      },
                      {
                        "text": "        time: { type: \"string\", description: \"Time of day, as said: 8pm, evening.\" },",
                        "tone": "string"
                      },
                      {
                        "text": "        address: { type: \"string\" },",
                        "tone": "string"
                      },
                      {
                        "text": "        payment: { type: \"string\", description: \"online or cod, if stated.\" },",
                        "tone": "string"
                      },
                      {
                        "text": "      },",
                        "tone": "default"
                      },
                      {
                        "text": "      required: [\"items\"],",
                        "tone": "string"
                      },
                      {
                        "text": "    },",
                        "tone": "default"
                      },
                      {
                        "text": "  },",
                        "tone": "default"
                      },
                      {
                        "text": "}",
                        "tone": "default"
                      },
                      {
                        "text": "",
                        "tone": "default"
                      },
                      {
                        "text": "// Server-side deterministic pricing: food, 5% GST, Rs 20 packing, Rs 35 delivery.",
                        "tone": "comment"
                      },
                      {
                        "text": "// The model never sets amounts.",
                        "tone": "comment"
                      }
                    ]
                  }
                ]
              },
              {
                "id": "whatsapp-turn",
                "name": "whatsapp-turn.ts",
                "kind": "file",
                "caption": "trimmed from src/lib/whatsapp-turn.ts:17-19, 159-195, 201-237",
                "whyItMatters": "Local rules classify the message first (classifyTurn); after 3 interruptions it hands over to a person.",
                "preview": [
                  {
                    "text": "export const INTERRUPT_ESCALATE_AT = 3;",
                    "tone": "keyword"
                  },
                  {
                    "text": "export const VK_INTERRUPT_PREFIX = \"__vk_interrupt__:\";",
                    "tone": "keyword"
                  },
                  {
                    "text": "",
                    "tone": "default"
                  },
                  {
                    "text": "// ...",
                    "tone": "comment"
                  },
                  {
                    "text": "export function classifyTurn(text: string, state: SessionState): TurnClassification {",
                    "tone": "keyword"
                  },
                  {
                    "text": "  const raw = String(text || \"\").trim();",
                    "tone": "keyword"
                  },
                  {
                    "text": "  if (!raw) return blank(\"unclear\");",
                    "tone": "accent"
                  },
                  {
                    "text": "",
                    "tone": "default"
                  },
                  {
                    "text": "  if (COMPLAINT_RE.test(raw)) return blank(\"complaint\");",
                    "tone": "accent"
                  },
                  {
                    "text": "  if (CANCEL_RE.test(raw) && !REMOVE_WORD.test(raw)) return blank(\"cancel_order\");",
                    "tone": "accent"
                  },
                  {
                    "text": "",
                    "tone": "default"
                  },
                  {
                    "text": "  const scoped = planScopedCartEdit(raw);",
                    "tone": "keyword"
                  },
                  {
                    "text": "  if (scoped) {",
                    "tone": "keyword"
                  },
                  {
                    "text": "    return blank(\"remove_item\", {",
                    "tone": "accent"
                  },
                  {
                    "text": "      item_reference: scoped.itemReference || null,",
                    "tone": "default"
                  },
                  {
                    "text": "      quantity: scoped.keep?.quantity ?? null,",
                    "tone": "default"
                  },
                  {
                    "text": "    });",
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
                    "text": "  const local = localCartIntent(raw);",
                    "tone": "keyword"
                  },
                  {
                    "text": "  if (local?.action === \"remove_item\" || local?.action === \"update_qty\" || local?.action === \"clear_cart\") {",
                    "tone": "keyword"
                  },
                  {
                    "text": "    const intent: TurnIntent = local.action === \"clear_cart\" ? \"edit_cart\" : local.action === \"update_qty\" ? \"edit_cart\" : \"remove_item\";",
                    "tone": "keyword"
                  },
                  {
                    "text": "    return blank(intent, { item_reference: local.item_reference || null, quantity: local.quantity });",
                    "tone": "accent"
                  },
                  {
                    "text": "  }",
                    "tone": "default"
                  },
                  {
                    "text": "  if (local?.action === \"checkout\") return blank(\"checkout\");",
                    "tone": "accent"
                  },
                  {
                    "text": "",
                    "tone": "default"
                  },
                  {
                    "text": "  if (MENU_RE.test(raw)) return blank(\"ask_menu\");",
                    "tone": "accent"
                  },
                  {
                    "text": "  if (asksAboutExistingOrder(raw)) return blank(\"ask_status\");",
                    "tone": "accent"
                  },
                  {
                    "text": "  if (ADD_RE.test(raw) && !REMOVE_WORD.test(raw)) return blank(\"add_item\");",
                    "tone": "accent"
                  },
                  {
                    "text": "",
                    "tone": "default"
                  },
                  {
                    "text": "  const answered = isPendingState(state) ? directAnswer(state, raw) : null;",
                    "tone": "keyword"
                  },
                  {
                    "text": "  if (answered) {",
                    "tone": "keyword"
                  },
                  {
                    "text": "    return blank(\"answer_pending_question\", {",
                    "tone": "accent"
                  },
                  {
                    "text": "      matches_pending_state: true,",
                    "tone": "default"
                  },
                  {
                    "text": "      extracted_value: answered,",
                    "tone": "default"
                  },
                  {
                    "text": "    });",
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
                    "text": "  if (SMALL_TALK_RE.test(raw)) return blank(\"small_talk\");",
                    "tone": "accent"
                  },
                  {
                    "text": "  return blank(\"unclear\");",
                    "tone": "accent"
                  },
                  {
                    "text": "}",
                    "tone": "default"
                  },
                  {
                    "text": "",
                    "tone": "default"
                  },
                  {
                    "text": "export function routeTurn(",
                    "tone": "keyword"
                  },
                  {
                    "text": "  _state: SessionState,",
                    "tone": "default"
                  },
                  {
                    "text": "  classification: TurnClassification,",
                    "tone": "default"
                  },
                  {
                    "text": "  interruptedCount: number,",
                    "tone": "default"
                  },
                  {
                    "text": "): RouteDecision {",
                    "tone": "default"
                  },
                  {
                    "text": "  if (classification.intent === \"complaint\") return { action: \"complaint\", nextInterruptCount: 0 };",
                    "tone": "accent"
                  },
                  {
                    "text": "  if (classification.intent === \"cancel_order\") return { action: \"cancel\", nextInterruptCount: 0 };",
                    "tone": "accent"
                  },
                  {
                    "text": "  if (classification.matches_pending_state || classification.intent === \"answer_pending_question\") {",
                    "tone": "keyword"
                  },
                  {
                    "text": "    return { action: \"accept_answer\", nextInterruptCount: 0 };",
                    "tone": "accent"
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
                    "text": "  const next = interruptedCount + 1;",
                    "tone": "keyword"
                  },
                  {
                    "text": "  if (next >= INTERRUPT_ESCALATE_AT) {",
                    "tone": "keyword"
                  },
                  {
                    "text": "    return { action: \"escalate\", nextInterruptCount: next };",
                    "tone": "accent"
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
                    "text": "  switch (classification.intent) {",
                    "tone": "default"
                  },
                  {
                    "text": "    case \"edit_cart\":",
                    "tone": "string"
                  },
                  {
                    "text": "    case \"remove_item\":",
                    "tone": "string"
                  },
                  {
                    "text": "    case \"add_item\":",
                    "tone": "string"
                  },
                  {
                    "text": "      return { action: \"mutate_cart_then_reask\", nextInterruptCount: next };",
                    "tone": "accent"
                  },
                  {
                    "text": "    case \"ask_menu\":",
                    "tone": "string"
                  },
                  {
                    "text": "      return { action: \"answer_menu_then_reask\", nextInterruptCount: next };",
                    "tone": "accent"
                  },
                  {
                    "text": "    case \"ask_status\":",
                    "tone": "string"
                  },
                  {
                    "text": "      return { action: \"answer_status_then_reask\", nextInterruptCount: next };",
                    "tone": "accent"
                  },
                  {
                    "text": "    case \"checkout\":",
                    "tone": "string"
                  },
                  {
                    "text": "    case \"small_talk\":",
                    "tone": "string"
                  },
                  {
                    "text": "      return { action: \"reask\", nextInterruptCount: next };",
                    "tone": "accent"
                  },
                  {
                    "text": "    case \"unclear\":",
                    "tone": "string"
                  },
                  {
                    "text": "    default:",
                    "tone": "default"
                  },
                  {
                    "text": "      return { action: \"clarify\", nextInterruptCount: next };",
                    "tone": "accent"
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
              },
              {
                "id": "whatsapp-notify",
                "name": "whatsapp-order-notify.ts",
                "kind": "file",
                "caption": "trimmed from src/lib/whatsapp-order-notify.ts:83-103, 536-538, 641-653",
                "whyItMatters": "Meta 24h window -> approved template -> Twilio SMS fallback (hasOpenServiceWindow) so updates never drop.",
                "preview": [
                  {
                    "text": "/**",
                    "tone": "comment"
                  },
                  {
                    "text": " * Meta only delivers a free-form card inside 24 hours of the customer's last",
                    "tone": "comment"
                  },
                  {
                    "text": " * reply. An app order never opens that window, and Meta can still answer 200",
                    "tone": "comment"
                  },
                  {
                    "text": " * and then drop the card. The approved template is what actually arrives.",
                    "tone": "comment"
                  },
                  {
                    "text": " */",
                    "tone": "comment"
                  },
                  {
                    "text": "async function hasOpenServiceWindow(to: string): Promise<boolean> {",
                    "tone": "keyword"
                  },
                  {
                    "text": "  const digits = to.replace(/\\D/g, \"\");",
                    "tone": "keyword"
                  },
                  {
                    "text": "  const keys = [digits, digits.slice(-10)].filter((v, i, a) => v && a.indexOf(v) === i);",
                    "tone": "keyword"
                  },
                  {
                    "text": "  try {",
                    "tone": "keyword"
                  },
                  {
                    "text": "    const supabase = createServerSupabase();",
                    "tone": "keyword"
                  },
                  {
                    "text": "    const { data, error } = await supabase",
                    "tone": "accent"
                  },
                  {
                    "text": "      .from(\"whatsapp_messages\")",
                    "tone": "string"
                  },
                  {
                    "text": "      .select(\"created_at\")",
                    "tone": "string"
                  },
                  {
                    "text": "      .eq(\"direction\", \"in\")",
                    "tone": "string"
                  },
                  {
                    "text": "      .in(\"phone\", keys)",
                    "tone": "string"
                  },
                  {
                    "text": "      .order(\"created_at\", { ascending: false })",
                    "tone": "string"
                  },
                  {
                    "text": "      .limit(1)",
                    "tone": "default"
                  },
                  {
                    "text": "      .maybeSingle();",
                    "tone": "default"
                  },
                  {
                    "text": "    if (error || !data?.created_at) return false;",
                    "tone": "accent"
                  },
                  {
                    "text": "    const at = Date.parse(String(data.created_at));",
                    "tone": "keyword"
                  },
                  {
                    "text": "    if (!Number.isFinite(at)) return false;",
                    "tone": "accent"
                  },
                  {
                    "text": "    return Date.now() - at < 23 * 60 * 60 * 1000;",
                    "tone": "accent"
                  },
                  {
                    "text": "  } catch {",
                    "tone": "default"
                  },
                  {
                    "text": "    return false;",
                    "tone": "accent"
                  },
                  {
                    "text": "  }",
                    "tone": "default"
                  },
                  {
                    "text": "}",
                    "tone": "default"
                  },
                  {
                    "text": "",
                    "tone": "default"
                  },
                  {
                    "text": "// ...",
                    "tone": "comment"
                  },
                  {
                    "text": "// Branching in notifyWhatsAppOrderEvent:",
                    "tone": "comment"
                  },
                  {
                    "text": "if (!(await hasOpenServiceWindow(to))) {",
                    "tone": "accent"
                  },
                  {
                    "text": "  const sent = await sendOrderUpdateTemplate(to, {",
                    "tone": "keyword"
                  },
                  {
                    "text": "    name: await displayNameForPhone(order.phone_number, \"there\"),",
                    "tone": "string"
                  },
                  {
                    "text": "    ref: short,",
                    "tone": "default"
                  },
                  {
                    "text": "    line: lineFor(stage),",
                    "tone": "default"
                  },
                  {
                    "text": "    slot: bill.slotLine || \"See the app for your slot\",",
                    "tone": "string"
                  },
                  {
                    "text": "    url: trackUrl,",
                    "tone": "default"
                  },
                  {
                    "text": "  });",
                    "tone": "default"
                  },
                  {
                    "text": "  if (sent) return;",
                    "tone": "accent"
                  },
                  {
                    "text": "}",
                    "tone": "default"
                  },
                  {
                    "text": "",
                    "tone": "default"
                  },
                  {
                    "text": "// ...",
                    "tone": "comment"
                  },
                  {
                    "text": "// Fallback when WhatsApp delivery fails:",
                    "tone": "comment"
                  },
                  {
                    "text": "if (!delivered) {",
                    "tone": "accent"
                  },
                  {
                    "text": "  await sendSms(recPhone, smsBody);",
                    "tone": "keyword"
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
];

export const vidyasHonestOutcomes = [
  "Live at vidyaskitchenhome.com — customer PWA, kitchen dashboard, driver app, and WhatsApp bot share one system.",
  "WhatsApp and the app use the same prices, slots, and order record.",
  "Bot misroutes were reproduced and covered with tests before treated as fixed.",
  "A home kitchen can take a slot order, cook to it, dispatch a driver, and answer “where is my order?” without a marketplace in the middle.",
];

export const vidyasWhatILearnedSoFar = [
  {
    num: "01",
    title: "Habit over convention (WhatsApp > App Store)",
    takeaway: "In Tier-3 local markets, forcing users to download an app and browse multi-level menus introduces unnecessary friction.",
    detail: "Meeting customers where they already live—in WhatsApp with a natural language intent parser—fits existing customer habits without behavioral friction.",
  },
  {
    num: "02",
    title: "Field ergonomics under real-world sunlight",
    takeaway: "Design systems fail if they aren't tested in harsh outdoor environments.",
    detail: "Customer PWA and Dashboard use 48px minimum touch targets; the Driver PWA uses 56px bike touch targets and kitchen PINs for 38°C daylight riding.",
  },
  {
    num: "03",
    title: "Decouple physical operations from digital payments",
    takeaway: "Physical cooking cycles and financial settlement cycles are independent operational realities.",
    detail: "In a cook-to-order kitchen, treating Cash on Delivery and online payments as distinct states in the state machine prevented kitchen prep bottlenecks.",
  },
  {
    num: "04",
    title: "AI drafts intent; deterministic engines price the bill",
    takeaway: "LLMs excel at unstructured messy chat, but financial calculations must never be left to model inference.",
    detail: "An immutable server engine computes items, packaging, delivery, and GST. Pricing rules remain fully deterministic.",
  },
];

export const vidyasDoNotClaim: string[] = [];

export const vidyasPersonaScenarios: PersonaScenarioCard[] = [
  {
    id: "persona-customer",
    personaName: "Priya M.",
    personaRole: "Bank Employee & Working Mother, Sivakasi (Composite Persona)",
    personaInitials: "PM",
    surfaceTag: "WhatsApp Bot & Customer PWA",
    surfaceName: "Customer Ordering Surfaces",
    goal: "Order wholesome home meals for her family between bank meetings without tedious menu navigation.",
    frustration: "Menu-driven chatbots choke on Tanglish sentences like '2 biryani naalaiku lunch'.",
    quote: "I don't have time to download apps and add items to a cart. I just want to send one WhatsApp message and know dinner is booked.",
    quoteAuthor: "Priya M. (Composite user persona)",
    interviewTag: "Customer discovery archetype · Sivakasi on-site (Composite persona)",
    scenarios: [
      {
        id: "cust-scen-a",
        tag: "Scenario 01 · Intent Parsing",
        title: "The Tanglish Sentence vs Empty Cart Trap",
        groundReality:
          "Customers order on WhatsApp while juggling work: '2 chicken biryani naalaiku lunch cash'. Traditional chatbots forced 4-level numerical menus, making reordering slow.",
        whatUxIDid:
          "Removed multi-level menus entirely. Designed an open chat experience that parses natural Tanglish text and returns a visual confirmation card with quick-edit size drawers.",
        whatTechnicalIDid:
          "Built an OpenAI gpt-4o-mini parser with an AbortSignal timeout of 2.5 seconds. The AI extracts dish and slot, while the server strictly prices food, packing, and GST.",
        quote:
          "I don't have time to download apps and add items to a cart. I just want to send one WhatsApp message and know dinner is booked.",
        quoteAuthor: "Priya M. (Composite user persona)",
      },
    ],
  },
  {
    id: "persona-driver",
    personaName: "Murugan K.",
    personaRole: "Hyperlocal Delivery Partner, Sivakasi (Composite Persona)",
    personaInitials: "MK",
    surfaceTag: "Driver PWA",
    surfaceName: "Field Logistics Surface",
    goal: "Deliver lunch bags swiftly in 38°C Sivakasi midday heat without missing delivery slots.",
    frustration: "Waiting for SMS OTP codes in spotty 2G coverage while wearing bike gloves caused severe delays.",
    quote: "In the afternoon sun, waiting for OTP codes on the bike was painful. The 4-digit PIN and 56px buttons let me deliver with one thumb without removing gloves.",
    quoteAuthor: "Murugan K. (Composite driver persona)",
    interviewTag: "Driver logistics field discovery (Composite persona)",
    scenarios: [
      {
        id: "driver-scen-a",
        tag: "Scenario 01 · Bike Ergonomics",
        title: "Eliminating SMS OTP Latency & Midday 38°C Ergonomics",
        groundReality:
          "Delivering lunch in 38°C Sivakasi sun with bike gloves and oily hands. Waiting for SMS OTPs caused severe delays due to spotty 2G network coverage.",
        whatUxIDid:
          "Eliminated SMS OTP verification entirely. Replaced it with a kitchen-issued 4-digit PIN, 56px bike touch targets, and a single-swipe delivery slider.",
        whatTechnicalIDid:
          "Built a dedicated phone-lookup auth endpoint with kitchen admin provisioning. Implemented an offline-tolerant service worker that caches customer drop pins and cash totals.",
        quote:
          "In the afternoon sun, waiting for OTP codes on the bike was painful. The 4-digit PIN and 56px buttons let me deliver with one thumb without removing gloves.",
        quoteAuthor: "Murugan K. (Composite driver persona)",
      },
    ],
  },
  {
    id: "persona-kitchen",
    personaName: "Vidya R.",
    personaRole: "Cloud Kitchen Founder & Head Chef",
    personaInitials: "VR",
    surfaceTag: "Kitchen Supervisory Console",
    surfaceName: "Kitchen Operations Surface",
    goal: "Cook authentic homestyle food to order without missing peak-hour orders or losing profit margins.",
    frustration: "Silent push notifications were drowned out by stove sizzle and exhaust fans; manual holiday discounts risked losing money.",
    quote: "When I'm at the stove, the loud notification and the big board tell me immediately when a lunch slot is booked without having to wash my hands.",
    quoteAuthor: "Vidya R., Founder & Head Chef",
    interviewTag: "Kitchen operations field discovery · Sivakasi on-site",
    scenarios: [
      {
        id: "kitchen-scen-a",
        tag: "Scenario 01 · Festive Demand",
        title: "Festival Surge AI Pricing Assistant with 1-Click Human Veto",
        groundReality:
          "Diwali and temple festival weeks spike demand. Vidya previously scribbled discounts in chat threads at midnight, miscalculating margins and losing money on raw meat.",
        whatUxIDid:
          "Designed a Human-in-the-Loop AI Pricing Card on her dashboard. Rather than an algorithmic black-box, it presents clear cards with explicit 1-click Approve or Dismiss buttons.",
        whatTechnicalIDid:
          "Built a nightly 2:00 AM cron job analyzing 7-day dish volume, margins, and repeat rates. Hard-coded safety gates: a dish rated below 3.5 gets no demand discount; below 3.0 is flagged for a quality review instead.",
        quote:
          "The festival suggestion cards let me review pricing in 10 seconds before bed instead of calculating raw meat margins on paper.",
        quoteAuthor: "Vidya R., Founder & Head Chef",
      },
    ],
  },
];

export const vidyasTop3Bottlenecks: TopBottleneckItem[] = [
  {
    id: "BOTTLE_01",
    num: "01",
    title: "ORDER IN ONE SENTENCE (quick reordering)",
    surface: "WHATSAPP BOT & CUSTOMER PWA",
    situation:
      "Regulars wanted the same food again. Menus and step-by-step questions were slow, and normal Tamil-English phrasing broke rigid chatbots.",
    productGoal:
      "Let a customer reorder in one message, like \"same as last time, 2 sambar rice\", and see the full bill before confirming.",
    uxDecision:
      "People already know what they want, so skip the menu. One sentence in, one confirmation card out. Interrupting is allowed: asking for the menu mid-order gets an answer, then the bot asks the pending question again. After 3 interruptions it hands over to a person.",
    uiDesign:
      "A single confirmation card showing dishes, portion drawer, itemised bill and one tap to confirm. A \"same / change\" choice for repeat orders.",
    codeDecision:
      "Local rules classify the message first (classifyTurn). The AI only drafts the order (2.5s timeout, falls back to asking again). The server computes prices: food, 5% GST, Rs 20 packing, Rs 35 delivery. The model never sets amounts.",
    outcome:
      "A customer can reorder in one message and sees the full bill before confirming.",
    seniorTakeaway:
      "Let customers talk naturally; let server code calculate prices.",
  },
  {
    id: "BOTTLE_02",
    num: "02",
    title: "THE 24-HOUR RULE",
    surface: "CHECKOUT & ORDER RULES",
    situation:
      "Home cooking cannot be instant. Same-day orders would over-promise to customers and overload the kitchen.",
    productGoal:
      "Make the wait a promise: order today, eat fresh on the chosen day.",
    uxDecision:
      "Show only valid days and meals (breakfast, lunch, dinner). The rule is explained before the customer hits an error. The cancellation deadline is visible on the confirmation card.",
    uiDesign:
      "Date and slot picker where invalid days are greyed out with a short reason (\"needs 24h notice\"). Helper text: orders open 6 AM to 6 PM.",
    codeDecision:
      "The server re-checks the 24h notice and the ordering window at checkout, so the UI is never the only guard. cancellationDeadline = slot minus 12h; cancelling before it triggers an automated Razorpay refund.",
    outcome:
      "Customers can never book a slot the kitchen cannot meet, and early cancellations refund automatically.",
    seniorTakeaway:
      "The UI guides, the server enforces.",
  },
  {
    id: "BOTTLE_03",
    num: "03",
    title: "ORDER FOR SOMEONE IN SIVAKASI, FROM ANYWHERE",
    surface: "DELIVERY ZONE & NOTIFICATIONS",
    situation:
      "The kitchen serves only Sivakasi, but the buyer may be in Chennai or travelling, ordering for a friend or family.",
    productGoal:
      "Let the buyer and the delivery location be different, without failed payments or silent order updates.",
    uxDecision:
      "Design around the delivery address, not where the buyer is. An address outside the zone gets a friendly message before payment, not after.",
    uiDesign:
      "Pick the address by map pin, so no local street knowledge is needed. Out-of-zone pins show \"We deliver within Sivakasi only\". Pay online or COD (with a cap).",
    codeDecision:
      "Checkout validates the delivery pin inside the 15 km radius. Order updates go via WhatsApp inside Meta's 24h window, then an approved template, then Twilio SMS fallback (hasOpenServiceWindow).",
    outcome:
      "A buyer anywhere can order for Sivakasi, pay, and still receive updates after Meta's 24h window closes.",
    seniorTakeaway:
      "Real-world UX means designing around platform limits with automated fallbacks.",
  },
];
