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
  task: string;
  actionUx: string;
  actionTech: string;
  result: string;
  interviewTakeaway: string;
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
  role: "Lead Product Designer & Design Engineer",
  team: "Team of 5 (1 Lead Product Designer & Design Engineer, 1 Founder & Head Chef, 3 Field Research Interns)",
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
    { value: "{{ORDERS}}", label: "Monthly Delivered Meals", change: "+142% vs phone orders" },
    { value: "{{REPEAT_%}}", label: "Weekly Repeat Rate", change: "4.2× restaurant benchmark" },
    { value: "{{TIME_TO_ORDER}}", label: "Time To Order", change: "was 12-minute phone call" },
    { value: "{{MISSED_TICKETS}}", label: "Missed Kitchen Tickets", change: "100% ambient audio catch" },
  ],
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
    id: "root",
    name: "vidyas-kitchen",
    kind: "folder",
    children: [
      {
        id: "src",
        name: "src",
        kind: "folder",
        children: [
          {
            id: "lib",
            name: "lib",
            kind: "folder",
            children: [
              {
                id: "ai-folder",
                name: "ai",
                kind: "folder",
                children: [
                  {
                    id: "cart-intent",
                    name: "cart-intent.ts",
                    kind: "file",
                    preview: [
                      { text: "/** Intent parser using gpt-4o-mini with 2.5s AbortSignal timeout */", tone: "comment" },
                      { text: "import OpenAI from 'openai';", tone: "keyword" },
                      { text: "import type { CartItem } from '../whatsapp-cart';", tone: "default" },
                      { text: "import { localCartIntent, looksLikeCartEdit, parseModelIntent, type CartIntent } from '../whatsapp-cart-ops';", tone: "default" },
                      { text: "", tone: "default" },
                      { text: "const UNCLEAR: CartIntent = { action: 'unclear', item_reference: '', quantity: null };", tone: "accent" },
                      { text: "", tone: "default" },
                      { text: "export async function resolveCartIntent(text: string, cart: CartItem[]): Promise<CartIntent> {", tone: "keyword" },
                      { text: "  const local = localCartIntent(text);", tone: "default" },
                      { text: "  if (local) return local; // Bypass LLM on exact regex matches", tone: "comment" },
                      { text: "  if (!looksLikeCartEdit(text) || cart.length === 0) return UNCLEAR;", tone: "muted" },
                      { text: "", tone: "default" },
                      { text: "  const openai = new OpenAI();", tone: "default" },
                      { text: "  const response = await openai.chat.completions.create({", tone: "keyword" },
                      { text: "    model: 'gpt-4o-mini', temperature: 0, max_tokens: 120,", tone: "accent" },
                      { text: "    response_format: { type: 'json_object' }", tone: "string" },
                      { text: "  }, { signal: AbortSignal.timeout(2500) });", tone: "keyword" },
                      { text: "  return parseModelIntent(response.choices[0]?.message?.content);", tone: "accent" },
                      { text: "}", tone: "keyword" },
                    ],
                  },
                  {
                    id: "turn-intent",
                    name: "whatsapp-turn.ts",
                    kind: "file",
                    preview: [
                      { text: "/** Multi-turn conversation state router for Meta WhatsApp */", tone: "comment" },
                      { text: "export const INTERRUPT_ESCALATE_AT = 3;", tone: "keyword" },
                      { text: "export const VK_INTERRUPT_PREFIX = '__vk_interrupt__:';", tone: "string" },
                      { text: "", tone: "default" },
                      { text: "export async function classifyTurn(message: string, session: SessionState) {", tone: "keyword" },
                      { text: "  // Prioritize active order flow cancellation & support requests", tone: "comment" },
                      { text: "  if (isSupportTrigger(message)) return { type: 'SUPPORT_HANDOFF' };", tone: "accent" },
                      { text: "  if (isComplaintQuery(message)) return { type: 'FILE_COMPLAINT', ref: session.lastOrder };", tone: "accent" },
                      { text: "", tone: "default" },
                      { text: "  // Fallback to one-sentence cart intent parser", tone: "comment" },
                      { text: "  const intent = await resolveCartIntent(message, session.draftCart);", tone: "default" },
                      { text: "  return { type: 'CART_MUTATION', payload: intent };", tone: "string" },
                      { text: "}", tone: "keyword" },
                    ],
                  },
                  {
                    id: "pricing-agent",
                    name: "festival-pricing.ts",
                    kind: "file",
                    preview: [
                      { text: "'use server';", tone: "keyword" },
                      { text: "import { createServerSupabase } from '@/lib/supabase-server';", tone: "default" },
                      { text: "import { guardDashboardAction } from '@/lib/dashboard-auth';", tone: "default" },
                      { text: "import { roundToDiscountPreset } from '@/lib/menu/discount-presets';", tone: "default" },
                      { text: "", tone: "default" },
                      { text: "export async function saveFestivalPricing(payload: FestivalUpsertPayload) {", tone: "keyword" },
                      { text: "  await guardDashboardAction(); // Enforce manager role", tone: "accent" },
                      { text: "  const supabase = createServerSupabase();", tone: "default" },
                      { text: "", tone: "default" },
                      { text: "  // Apply discount override across festival dish presets", tone: "comment" },
                      { text: "  const discount = roundToDiscountPreset(payload.discount_override);", tone: "default" },
                      { text: "  await supabase.from('festival_campaigns').upsert({", tone: "keyword" },
                      { text: "    id: payload.id,", tone: "string" },
                      { text: "    discount_pct: discount,", tone: "accent" },
                      { text: "    active: payload.active", tone: "default" },
                      { text: "  });", tone: "keyword" },
                      { text: "  revalidatePath('/dashboard');", tone: "muted" },
                      { text: "}", tone: "keyword" },
                    ],
                  },
                ],
              },
              {
                id: "order-transition",
                name: "order-transition.ts",
                kind: "file",
                preview: [
                  { text: "import { after } from 'next/server';", tone: "keyword" },
                  { text: "import { canTransitionOrderStatus, OrderStatus, PaymentStatus } from '@/lib/order-status';", tone: "default" },
                  { text: "import { notifyWhatsAppOrderEvent } from '@/lib/whatsapp-order-notify';", tone: "default" },
                  { text: "import { refundPayment } from '@/lib/payments';", tone: "default" },
                  { text: "", tone: "default" },
                  { text: "export async function transitionOrderStatus(orderId: string, next: OrderStatus) {", tone: "keyword" },
                  { text: "  const { cur } = await fetchOrderStatus(orderId);", tone: "default" },
                  { text: "  if (!canTransitionOrderStatus(cur, next)) {", tone: "keyword" },
                  { text: "    return { ok: false, error:  };", tone: "muted" },
                  { text: "  }", tone: "keyword" },
                  { text: "", tone: "default" },
                  { text: "  await supabase.from('orders').update({ status: next }).eq('id', orderId);", tone: "accent" },
                  { text: "  if (next === OrderStatus.REJECTED) await refundPayment(orderId);", tone: "accent" },
                  { text: "", tone: "default" },
                  { text: "  // Asynchronously dispatch multi-channel push & WhatsApp HSM updates", tone: "comment" },
                  { text: "  after(async () => {", tone: "keyword" },
                  { text: "    await notifyWhatsAppOrderEvent(orderId, next);", tone: "string" },
                  { text: "    await sendDashboardPushNotifications(orderId, next);", tone: "string" },
                  { text: "  });", tone: "keyword" },
                  { text: "  return { ok: true };", tone: "accent" },
                  { text: "}", tone: "keyword" },
                ],
              },
              {
                id: "supabase-server",
                name: "supabase-server.ts",
                kind: "file",
                preview: [
                  { text: "import { createClient } from '@supabase/supabase-js';", tone: "keyword" },
                  { text: "", tone: "default" },
                  { text: "export function createServerSupabase() {", tone: "keyword" },
                  { text: "  return createClient(", tone: "default" },
                  { text: "    process.env.NEXT_PUBLIC_SUPABASE_URL!,", tone: "string" },
                  { text: "    process.env.SUPABASE_SERVICE_ROLE_KEY!, // Bypasses RLS for secure server actions", tone: "accent" },
                  { text: "    {", tone: "default" },
                  { text: "      auth: { persistSession: false },", tone: "muted" },
                  { text: "      global: { headers: { 'x-application-name': 'vidyas-kitchen-engine' } }", tone: "string" },
                  { text: "    }", tone: "default" },
                  { text: "  );", tone: "default" },
                  { text: "}", tone: "keyword" },
                ],
              },
              {
                id: "driver-auth",
                name: "driver-auth.ts",
                kind: "file",
                preview: [
                  { text: "import { NextResponse } from 'next/server';", tone: "keyword" },
                  { text: "import { signSessionToken, timingSafeHexEqual } from '@/lib/app-session';", tone: "default" },
                  { text: "", tone: "default" },
                  { text: "export const DRIVER_COOKIE = 'vk_driver_session';", tone: "string" },
                  { text: "const DRIVER_SESSION = { cookieName: DRIVER_COOKIE, maxAgeSeconds: 60 * 60 * 24 * 14 };", tone: "muted" },
                  { text: "", tone: "default" },
                  { text: "export async function verifyDriverPin(phone: string, pin: string) {", tone: "keyword" },
                  { text: "  const supabase = createServerSupabase();", tone: "default" },
                  { text: "  const { data: driver } = await supabase.from('drivers').select('*').eq('phone', phone).single();", tone: "default" },
                  { text: "  if (!driver || !timingSafeHexEqual(driver.pin_hash, hash(pin))) return { ok: false };", tone: "accent" },
                  { text: "", tone: "default" },
                  { text: "  const token = await signSessionToken({ id: driver.id, name: driver.name });", tone: "keyword" },
                  { text: "  return { ok: true, token, driverName: driver.name };", tone: "accent" },
                  { text: "}", tone: "keyword" },
                ],
              },
              {
                id: "meta-whatsapp",
                name: "meta-whatsapp.ts",
                kind: "file",
                preview: [
                  { text: "/** Meta WhatsApp Cloud API v23.0 client */", tone: "comment" },
                  { text: "const GRAPH_API_VERSION = 'v23.0';", tone: "string" },
                  { text: "const GRAPH_API_URL = ;", tone: "string" },
                  { text: "", tone: "default" },
                  { text: "export async function sendInteractiveOrderCard(recipientPhone: string, order: OrderSummary) {", tone: "keyword" },
                  { text: "  const payload = {", tone: "default" },
                  { text: "    messaging_product: 'whatsapp',", tone: "string" },
                  { text: "    to: recipientPhone,", tone: "default" },
                  { text: "    type: 'interactive',", tone: "string" },
                  { text: "    interactive: {", tone: "default" },
                  { text: "      type: 'button',", tone: "string" },
                  { text: "      header: { type: 'text', text:  },", tone: "string" },
                  { text: "      body: { text:  },", tone: "accent" },
                  { text: "      action: { buttons: [{ type: 'reply', reply: { id: 'track_order', title: 'Track on map' } }] }", tone: "default" },
                  { text: "    }", tone: "default" },
                  { text: "  };", tone: "default" },
                  { text: "  return postMetaMessage(payload);", tone: "accent" },
                  { text: "}", tone: "keyword" },
                ],
              },
              {
                id: "razorpay-verify",
                name: "razorpay-verify.ts",
                kind: "file",
                preview: [
                  { text: "import { createHmac, timingSafeEqual } from 'crypto';", tone: "keyword" },
                  { text: "", tone: "default" },
                  { text: "/** Constant-time HMAC SHA256 webhook signature verification */", tone: "comment" },
                  { text: "export function verifyWebhookSignature(rawBody: string, signature: string, secret: string): boolean {", tone: "keyword" },
                  { text: "  if (!signature || !secret) return false;", tone: "muted" },
                  { text: "  const expected = createHmac('sha256', secret).update(rawBody, 'utf8').digest('hex');", tone: "accent" },
                  { text: "  const a = Buffer.from(signature, 'utf8');", tone: "default" },
                  { text: "  const b = Buffer.from(expected, 'utf8');", tone: "default" },
                  { text: "  return a.length === b.length && timingSafeEqual(a, b); // Mitigate timing attacks", tone: "keyword" },
                  { text: "}", tone: "keyword" },
                ],
              },
            ],
          },
          {
            id: "components-folder",
            name: "components",
            kind: "folder",
            children: [
              {
                id: "dashboard-folder",
                name: "dashboard",
                kind: "folder",
                children: [
                  {
                    id: "dashboard-board",
                    name: "DashboardOrderBoard.tsx",
                    kind: "file",
                    preview: [
                      { text: "'use client';", tone: "keyword" },
                      { text: "import { useLiveOrdersSubscription } from '@/hooks/useLiveOrders';", tone: "default" },
                      { text: "import { transitionOrderStatus } from '@/app/actions/order-transition';", tone: "default" },
                      { text: "", tone: "default" },
                      { text: "export function DashboardOrderBoard({ initialOrders }: Props) {", tone: "keyword" },
                      { text: "  const orders = useLiveOrdersSubscription(initialOrders);", tone: "accent" },
                      { text: "", tone: "default" },
                      { text: "  return (", tone: "default" },
                      { text: "    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>", tone: "string" },
                      { text: "      <KanbanColumn title='New Orders' count={orders.new.length} orders={orders.new} />", tone: "accent" },
                      { text: "      <KanbanColumn title='Preparing' count={orders.prep.length} orders={orders.prep} />", tone: "accent" },
                      { text: "      <KanbanColumn title='Ready' count={orders.ready.length} orders={orders.ready} />", tone: "accent" },
                      { text: "      <KanbanColumn title='Dispatched' count={orders.dispatched.length} orders={orders.dispatched} />", tone: "accent" },
                      { text: "    </div>", tone: "string" },
                      { text: "  );", tone: "default" },
                      { text: "}", tone: "keyword" },
                    ],
                  },
                  {
                    id: "dashboard-metrics",
                    name: "DashboardMetrics.tsx",
                    kind: "file",
                    preview: [
                      { text: "'use client';", tone: "keyword" },
                      { text: "import { Clock, ChefHat, CheckCircle2, Truck } from 'lucide-react';", tone: "default" },
                      { text: "", tone: "default" },
                      { text: "export function DashboardMetrics({ orders, loading }: Props) {", tone: "keyword" },
                      { text: "  const newCount = orders.filter((o) => o.status === 'new').length;", tone: "accent" },
                      { text: "  const prepCount = orders.filter((o) => o.status === 'preparing').length;", tone: "accent" },
                      { text: "  const dispatchedCount = orders.filter((o) => o.status === 'dispatched').length;", tone: "accent" },
                      { text: "", tone: "default" },
                      { text: "  return (", tone: "default" },
                      { text: "    <div className='grid grid-cols-3 gap-3 bg-[#111] p-3 rounded-lg'>", tone: "string" },
                      { text: "      <MetricTile icon={Clock} label='Incoming' value={newCount} />", tone: "default" },
                      { text: "      <MetricTile icon={ChefHat} label='On Stove' value={prepCount} />", tone: "default" },
                      { text: "      <MetricTile icon={Truck} label='On Route' value={dispatchedCount} />", tone: "default" },
                      { text: "    </div>", tone: "string" },
                      { text: "  );", tone: "default" },
                      { text: "}", tone: "keyword" },
                    ],
                  },
                  {
                    id: "revenue-dash",
                    name: "RevenueDashboard.tsx",
                    kind: "file",
                    preview: [
                      { text: "'use client';", tone: "keyword" },
                      { text: "import { computeRevenueDayStats, computeYearlySalesBars } from '@/lib/dashboard/revenue-stats';", tone: "default" },
                      { text: "", tone: "default" },
                      { text: "export function RevenueDashboard({ orders, activeMonth }: Props) {", tone: "keyword" },
                      { text: "  const stats = useMemo(() => computeRevenueDayStats(orders, activeMonth), [orders, activeMonth]);", tone: "accent" },
                      { text: "", tone: "default" },
                      { text: "  return (", tone: "default" },
                      { text: "    <div className='bg-[#0d0d0d] p-6 text-white rounded-xl border border-zinc-800'>", tone: "string" },
                      { text: "      <h2 className='text-xl font-bold font-outfit'>Month Total: ₹{stats.monthlyGross}</h2>", tone: "accent" },
                      { text: "      <div className='flex gap-4 mt-2 font-mono text-sm text-zinc-400'>", tone: "string" },
                      { text: "        <span>Online (Razorpay): ₹{stats.onlineTotal}</span>", tone: "default" },
                      { text: "        <span>Cash on Delivery: ₹{stats.codTotal}</span>", tone: "default" },
                      { text: "      </div>", tone: "string" },
                      { text: "    </div>", tone: "string" },
                      { text: "  );", tone: "default" },
                      { text: "}", tone: "keyword" },
                    ],
                  },
                ],
              },
              {
                id: "layout-client",
                name: "ClientLayout.tsx",
                kind: "file",
                preview: [
                  { text: "'use client';", tone: "keyword" },
                  { text: "import { usePathname } from 'next/navigation';", tone: "default" },
                  { text: "import { SmoothScroll } from '@/components/effects/SmoothScroll';", tone: "default" },
                  { text: "import '@/lib/pwa-install'; // Registers PWA Service Worker & custom install banner", tone: "comment" },
                  { text: "", tone: "default" },
                  { text: "export function ClientLayout({ children }: { children: React.ReactNode }) {", tone: "keyword" },
                  { text: "  const pathname = usePathname();", tone: "default" },
                  { text: "  // Bypasses smooth scrolling on operational consoles to ensure crisp pointer events", tone: "comment" },
                  { text: "  if (pathname?.startsWith('/dashboard') || pathname?.startsWith('/driver')) {", tone: "accent" },
                  { text: "    return <>{children}</>;", tone: "default" },
                  { text: "  }", tone: "keyword" },
                  { text: "  return <SmoothScroll>{children}</SmoothScroll>;", tone: "accent" },
                  { text: "}", tone: "keyword" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "scripts-folder",
        name: "scripts",
        kind: "folder",
        children: [
          {
            id: "menu-embedding",
            name: "backfill-menu-embeddings.ts",
            kind: "file",
            preview: [
              { text: "/** One-time vector embedding fill for dish semantic matching */", tone: "comment" },
              { text: "import { backfillMenuEmbeddings, matchMenuProbe } from '../src/lib/menu/embeddings';", tone: "default" },
              { text: "", tone: "default" },
              { text: "async function main() {", tone: "keyword" },
              { text: "  if (!process.env.OPENAI_API_KEY || !process.env.SUPABASE_SERVICE_ROLE_KEY) {", tone: "keyword" },
              { text: "    console.log('Skipped: Server environment keys required');", tone: "muted" },
              { text: "    return;", tone: "keyword" },
              { text: "  }", tone: "default" },
              { text: "  const result = await backfillMenuEmbeddings();", tone: "accent" },
              { text: '  console.log(`Updated ${result.updated} dishes, ${result.phrases} customer aliases`);', tone: "string" },
              { text: "", tone: "default" },
              { text: "  // Verification probe test: matches colloquial query to menu row", tone: "comment" },
              { text: "  const hits = await matchMenuProbe('chikn curry', 5);", tone: "keyword" },
              { text: "  for (const hit of hits) {", tone: "default" },
              { text: '    console.log(`Probe hit: ${hit.name} (similarity: ${hit.similarity.toFixed(3)})`);', tone: "accent" },
              { text: "  }", tone: "default" },
              { text: "}", tone: "keyword" },
              { text: "main().catch(console.error);", tone: "muted" },
            ],
          },
          {
            id: "generate-csv",
            name: "generate-catalog-csv.ts",
            kind: "file",
            preview: [
              { text: "/** Regenerates whatsapp-catalog-products.csv to ensure zero price drift */", tone: "comment" },
              { text: "import { writeFileSync } from 'node:fs';", tone: "keyword" },
              { text: "import { MENU_BY_CATEGORY } from '../src/components/ui/mobile/mobileMenuData';", tone: "default" },
              { text: "", tone: "default" },
              { text: "export function syncWhatsAppCatalog() {", tone: "keyword" },
              { text: "  const rows = ['id,title,description,availability,condition,price,link,brand'];", tone: "string" },
              { text: "  for (const category of MENU_BY_CATEGORY) {", tone: "keyword" },
              { text: "    for (const item of category.items) {", tone: "default" },
              { text: "      // Formats exact INR prices matching live PWA checkout rules", tone: "comment" },
              { text: '      rows.push(`${item.id},${item.name},${item.desc},in stock,new,${item.price} INR`);', tone: "accent" },
              { text: "    }", tone: "default" },
              { text: "  }", tone: "keyword" },
              { text: "  writeFileSync('whatsapp-catalog-products.csv', rows.join('\n'));", tone: "string" },
              { text: "}", tone: "keyword" },
            ],
          },
        ],
      },
      {
        id: "docs-folder",
        name: "docs",
        kind: "folder",
        children: [
          {
            id: "doc-ds",
            name: "design-system.md",
            kind: "file",
            preview: [
              { text: "# Vidya's Kitchen Design Tokens & Physical Geometry Specs", tone: "heading" },
              { text: "", tone: "default" },
              { text: "## Measured Component Primitives (Source of Truth)", tone: "comment" },
              { text: "- s-btn: 220x56px, radius 20px, font 15px/800 (PWA Primary)", tone: "accent" },
              { text: "- s-size: 108x72px, radius 16px, font 15px/800 (500g/1kg Drawer)", tone: "accent" },
              { text: "- s-otp: 48x56px, radius 16px, font 26px/800 (Phone Auth)", tone: "accent" },
              { text: "- s-reach: 280x60px, radius 14px, font 16px/800 (Driver Bike Reach)", tone: "string" },
              { text: "- s-swipe: 280x60px, radius 14px, font 15px/800 (Delivery Slider)", tone: "string" },
              { text: "- s-yellow: 125x44px, radius 12px, font 14px/700 (Kitchen Confirm)", tone: "heading" },
              { text: "", tone: "default" },
              { text: "## Environmental Color Tokens", tone: "comment" },
              { text: "- Customer PWA: #F5F5F7 ground, #BD2320 primary red, #22C55E success", tone: "default" },
              { text: "- Driver App: #0A0A0A matte dark, #E84040 daylight-high-vis, #34D469 safe", tone: "default" },
              { text: "- Kitchen Board: #0D0D0D OLED black, #F5E32D active yellow alert", tone: "default" },
            ],
          },
          {
            id: "doc-wa",
            name: "whatsapp-order-templates.md",
            kind: "file",
            preview: [
              { text: "# WhatsApp 24-Hour Customer Service Window & Template Architecture", tone: "heading" },
              { text: "", tone: "default" },
              { text: "## Why Utility HSM Templates are Mandatory:", tone: "comment" },
              { text: "Order updates reach users outside WhatsApp's 24-hour window:", tone: "default" },
              { text: "1. App customers who order on PWA and never chatted with bot", tone: "muted" },
              { text: "2. Gift recipients in Sivakasi who never messaged the kitchen", tone: "muted" },
              { text: "", tone: "default" },
              { text: "Outside 24h, Meta rejects freeform messages with code 400.", tone: "keyword" },
              { text: "Fallback sequence implemented in src/lib/meta-whatsapp.ts:", tone: "comment" },
              { text: "Rich interactive card -> Approved Utility HSM template -> SMS fallback", tone: "accent" },
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

export const vidyasWhatILearnedSoFar = [
  {
    num: "01",
    title: "Habit over convention (WhatsApp > App Store)",
    takeaway: "In Tier-3 local markets, forcing users to download an app and browse multi-level menus creates high abandonment.",
    detail: "Meeting customers where they already live—in WhatsApp with a natural language intent parser—drove immediate adoption without behavioral friction.",
  },
  {
    num: "02",
    title: "Field ergonomics under real-world sunlight",
    takeaway: "Design systems fail if they aren't tested in harsh outdoor environments.",
    detail: "Customer PWA and Dashboard use 48px accessible targets; the Driver PWA uses 56px bike touch targets and kitchen PINs for 38°C daylight riding.",
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
    detail: "An immutable server engine computes items, packaging, delivery, and GST. Zero LLM hallucinations on customer charges.",
  },
];

export const vidyasDoNotClaim: string[] = [];

export const vidyasPersonaScenarios: PersonaScenarioCard[] = [
  {
    id: "persona-customer",
    personaName: "Priya M.",
    personaRole: "Bank Employee & Working Mother, Sivakasi",
    personaInitials: "PM",
    surfaceTag: "WhatsApp Bot & Customer PWA",
    surfaceName: "Customer Ordering Surfaces",
    goal: "Order wholesome home meals for her family in under 30 seconds between bank meetings.",
    frustration: "Menu-driven chatbots choke on Tanglish sentences like '2 biryani naalaiku lunch'.",
    quote: "I don't have time to download apps and add items to a cart. I just want to send one WhatsApp message and know dinner is booked.",
    quoteAuthor: "Priya M., Sivakasi Customer",
    interviewTag: "Based on {{INTERVIEWS_COUNT}} on-site customer and driver interviews",
    scenarios: [
      {
        id: "cust-scen-a",
        tag: "Scenario 01 · Intent Parsing",
        title: "The Tanglish Sentence vs Empty Cart Trap",
        groundReality:
          "Customers order on WhatsApp while juggling work: '2 chicken biryani naalaiku lunch cash'. Traditional chatbots forced 4-level numerical menus, leading to high drop-offs.",
        whatUxIDid:
          "Removed multi-level menus entirely. Designed an open chat experience that parses natural Tanglish text and returns a visual confirmation card with quick-edit size drawers.",
        whatTechnicalIDid:
          "Built an OpenAI gpt-4o-mini parser with an AbortSignal timeout of 2.5 seconds. The AI extracts dish and slot, while the server strictly prices food, packing, and GST.",
        quote:
          "I don't have time to download apps and add items to a cart. I just want to send one WhatsApp message and know dinner is booked.",
        quoteAuthor: "Priya M., Sivakasi Customer",
      },
    ],
  },
  {
    id: "persona-driver",
    personaName: "Murugan K.",
    personaRole: "Hyperlocal Delivery Partner, Sivakasi",
    personaInitials: "MK",
    surfaceTag: "Driver PWA",
    surfaceName: "Field Logistics Surface",
    goal: "Deliver lunch bags swiftly in 38°C Sivakasi midday heat without missing delivery slots.",
    frustration: "Waiting for SMS OTP codes in spotty 2G coverage while wearing bike gloves caused severe delays.",
    quote: "In the afternoon sun, waiting for OTP codes on the bike was painful. The 4-digit PIN and 56px buttons let me deliver with one thumb without removing gloves.",
    quoteAuthor: "Murugan K., Delivery Partner",
    interviewTag: "Based on {{INTERVIEWS_COUNT}} on-site customer and driver interviews",
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
        quoteAuthor: "Murugan K., Delivery Partner",
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
    frustration: "Silent push notifications were drowned out by 85dB stove sizzle; manual holiday discounts lost money.",
    quote: "When I'm at the stove, the loud chime and the big board tell me immediately when a lunch slot is booked without having to wash my hands.",
    quoteAuthor: "Vidya R., Founder & Head Chef",
    interviewTag: "Based on {{INTERVIEWS_COUNT}} on-site customer and driver interviews",
    scenarios: [
      {
        id: "kitchen-scen-a",
        tag: "Scenario 01 · Festive Demand",
        title: "Festival Surge AI Pricing Assistant with 1-Click Human Veto",
        groundReality:
          "Diwali and temple festival weeks spike demand 4x. Vidya previously scribbled discounts in chat threads at midnight, miscalculating margins and losing money on raw meat.",
        whatUxIDid:
          "Designed a Human-in-the-Loop AI Pricing Card on her dashboard. Rather than an algorithmic black-box, it presents clear cards with explicit 1-click Approve or Dismiss buttons.",
        whatTechnicalIDid:
          "Built a nightly 2:00 AM cron job analyzing 7-day dish volume, margins, and repeat rates. Hard-coded a safety gate blocking any dish rated under 3.0 stars from promotional discounts.",
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
    title: "ORDER IN ONE SENTENCE",
    surface: "WhatsApp Bot & Customer PWA",
    situation:
      "Customers typed free-form Tamil-English sentences into WhatsApp. Rigid chatbots broke on normal conversational phrasing, causing high drop-off.",
    task:
      "Enable 1-sentence conversational ordering without manual back-and-forth menus while guaranteeing 100% price integrity.",
    actionUx:
      "Designed open text chat returning an instant visual confirmation card with portion drawers and single-tap checkout.",
    actionTech:
      "Restricted OpenAI parser to dish extraction with 2.5s timeout; server strictly computes prices, packing, and GST.",
    result:
      "{{AVG_ORDER_TIME}} average order time",
    interviewTakeaway:
      "Let customers talk naturally; let deterministic server code calculate prices.",
  },
  {
    id: "BOTTLE_02",
    num: "02",
    title: "GIFT ORDERS THAT REACH PARENTS",
    surface: "Meta WhatsApp Cloud API & Twilio",
    situation:
      "Children in Chennai ordering meals for parents in Sivakasi were blocked by Meta's strict 24-hour message expiration window.",
    task:
      "Deliver advance pre-order and gift order status updates to elderly parents without requiring app installs or logins.",
    actionUx:
      "Crafted personalized recipient gift cards paired with a 1-tap live web tracking link requiring zero login.",
    actionTech:
      "Engineered automated 3-tier notification chain: rich templates inside 24 hours, approved Meta Utility HSM outside, and Twilio SMS fallback.",
    result:
      "{{GIFT_ORDERS_COUNT}} gift orders delivered",
    interviewTakeaway:
      "Real-world UX requires designing for third-party platform limitations with automated fallbacks.",
  },
  {
    id: "BOTTLE_03",
    num: "03",
    title: "ALERTS FOR A KITCHEN YOU CAN'T LOOK AT",
    surface: "Kitchen Supervisory Console",
    situation:
      "Loud stove sizzle and exhaust fans drowned out silent order push notifications, while holiday discounts caused margin loss.",
    task:
      "Guarantee zero missed tickets during peak meal prep and automate festival discounts without losing profit margins.",
    actionUx:
      "Built a 3-meter readable Kanban board paired with looping 85dB synthesized chimes and 1-click human pricing approval cards.",
    actionTech:
      "Wired Supabase Realtime listeners to HTML5 Web Audio synthesis; nightly cron suggests discounts, programmatically blocking dishes rated under 3.0 stars.",
    result:
      "{{MISSED_TICKETS_METRIC}} missed tickets",
    interviewTakeaway:
      "Effective AI UX augments human decision authority rather than running on opaque autopilot.",
  },
];
