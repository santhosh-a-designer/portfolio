export type VidyasKpi = {
  label: string;
  value: string;
  sub: string;
};

export type VidyasResearchSnapshot = {
  tiles: { label: string; stat: string; desc: string }[];
};

export type VidyasPersona = {
  name: string;
  initials: string;
  role: string;
  basis: string;
  goal: string;
  frustration: string;
  quote: string;
};

export type VidyasInsightRow = {
  heard: string;
  built: string;
  result: string;
};

export type VidyasJourneyCard = {
  stage: string;
  pain: string;
  fix: string;
};

export type VidyasStarChallenge = {
  id: string;
  title: string;
  surface: string;
  situation: string;
  goal: string;
  failedFirst: string;
  action: string;
  result: string;
  evidence: string;
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
  launch: "Oct 2026",
  label: "Feb 2026 discovery · Mar–Sep 2026 build · Live in production",
};

export const vidyasSnapshot = {
  role: "Lead Product Designer & Design Engineer",
  team: "Solo designer & full-stack builder (mentored 3 research interns)",
  ownership: "Owned end-to-end product design, customer PWA, kitchen console, driver app, and WhatsApp bot.",
  market: "Sivakasi, Tamil Nadu",
  liveUrl: "https://www.vidyaskitchenhome.com",
  githubUrl: "https://github.com/commerceagents/vidyas-kitchen",
  firstInMarket: "First dedicated home-food ordering & multi-surface operations ecosystem in Sivakasi",
  outcomeHeadline: "0→1 Multi-Surface Operating System for Hyperlocal Cloud Kitchens",
  problem:
    "In Sivakasi, home food moved through unlogged WhatsApp chats and memory, losing orders during rush periods. Commercial food apps fail for a kitchen that prepares meals 24 hours in advance.",
  problemQuote: "{{QUOTE_FROM_VIDYA_OR_CUSTOMER}}",
  solution:
    "I shipped Sivakasi's first multi-surface operations system: conversational WhatsApp ordering, a daylight driver PWA, and a kitchen console tied to one database.",
  elevator:
    "Skip the restaurant. Order authentic home-cooked meals through WhatsApp or PWA, dispatched seamlessly across kitchen and daylight driver consoles.",
};

export const vidyasKpis: VidyasKpi[] = [
  { label: "Orders Processed", value: "{{ORDERS}}", sub: "Since October launch" },
  { label: "Repeat Order Rate", value: "{{REPEAT_ORDER_%}}", sub: "Driven by 1-tap reorder" },
  { label: "Avg Time to Order", value: "{{AVG_TIME_TO_ORDER}}", sub: "Down from 12-min phone calls" },
  { label: "Kitchen Hours Saved", value: "{{KITCHEN_HOURS_SAVED}}", sub: "Daily dispatch automation" },
];

export const vidyasResearchSnapshot: VidyasResearchSnapshot = {
  tiles: [
    { label: "User Interviews", stat: "{{N}} Interviews", desc: "Founder, customers, delivery driver" },
    { label: "Chat Transcripts", stat: "{{N}} Chats", desc: "Real conversational orders analyzed" },
    { label: "Field Shadowing", stat: "1 Shift", desc: "Lunch delivery ride-along in Sivakasi" },
    { label: "Research Period", stat: "{{DATES}}", desc: "Discovery & validation window" },
  ],
};

export const vidyasPersonas: VidyasPersona[] = [
  {
    name: "Priya M.",
    initials: "PM",
    role: "Working Professional & Parent, Sivakasi",
    basis: "Based on {{N}} customer interviews & chat reviews",
    goal: "Order healthy home-cooked dinners for her family without typing 20-minute chat threads.",
    frustration: "Never knowing if today's special is in stock or if her order was confirmed.",
    quote: "{{CUSTOMER_QUOTE}}",
  },
  {
    name: "Vidya R.",
    initials: "VR",
    role: "Cloud Kitchen Founder & Head Chef",
    basis: "Based on 12 operational shadowing sessions",
    goal: "Plan bulk grocery purchases and cooking prep 24 hours ahead without manual bookkeeping.",
    frustration: "Missing customer orders while standing at hot stoves and coping with COD cancellations.",
    quote: "{{VIDYA_QUOTE}}",
  },
  {
    name: "Murugan K.",
    initials: "MK",
    role: "Hyperlocal Delivery Partner",
    basis: "Based on 1 delivery shift ride-along",
    goal: "Navigate quickly to customer drop-offs and collect cash without fumbling with complex apps.",
    frustration: "Unreadable small text under blazing Sivakasi sun and slow SMS OTP timeouts.",
    quote: "{{DRIVER_QUOTE}}",
  },
];

export const vidyasInsightMap: VidyasInsightRow[] = [
  {
    heard: "Customers already order using one mixed Tamil-English text sentence.",
    built: "WhatsApp intent parser that drafts items and lets server price.",
    result: "{{RESULT_PARSER}}",
  },
  {
    heard: "Drivers cannot read small text in blazing Sivakasi midday sun.",
    built: "High-contrast matte UI with 60px tap targets and PIN login.",
    result: "{{RESULT_DRIVER_UI}}",
  },
  {
    heard: "Kitchen owner misses orders while cooking over hot stoves.",
    built: "Full-screen Kanban board with loud audio chime alerts.",
    result: "{{RESULT_KITCHEN_BOARD}}",
  },
  {
    heard: "Cash-on-delivery fake orders caused severe food waste and losses.",
    built: "Mandatory phone verification and automated COD blacklisting.",
    result: "{{RESULT_COD_FRAUD}}",
  },
];

export const vidyasJourneyCards: VidyasJourneyCard[] = [
  {
    stage: "Discover",
    pain: "Menu buried in chat history; customers do not know available gravies.",
    fix: "Installable PWA with photo menu plus WhatsApp quick dish carousel.",
  },
  {
    stage: "Order",
    pain: "Free-form text messages miss portion sizes, delivery dates, or meal slots.",
    fix: "Two-tier parser drafts order intent; asks only for missing details.",
  },
  {
    stage: "Pay",
    pain: "Hidden delivery or packing fees surprise customers at final checkout.",
    fix: "Upfront itemized breakdown showing packing, delivery, and GST before confirmation.",
  },
  {
    stage: "Fulfill",
    pain: "Customers call repeatedly asking whether food is cooked or dispatched.",
    fix: "Unified status updates across WhatsApp, PWA, and driver navigation in real-time.",
  },
  {
    stage: "Return",
    pain: "Complaints filed hours later confuse the kitchen and spoil customer trust.",
    fix: "12-hour automated cancellation window with instant Razorpay refund processing.",
  },
];

export const vidyas60SecStory = [
  {
    pillar: "Conversational Commerce",
    decision: "Met customers where they already lived: on WhatsApp with a 2-tier Tanglish intent parser.",
  },
  {
    pillar: "Operational Decoupling",
    decision: "Decoupled physical meal cooking readiness from financial settlement across a single source of truth.",
  },
  {
    pillar: "Field-First Ergonomics",
    decision: "Engineered a daylight-contrast driver PWA with 60px bike controls and kitchen-issued PIN auth.",
  },
];

export const vidyasProductTour = [
  {
    id: "tour-wa",
    surface: "WhatsApp Bot",
    src: "/case-studies/vidyas-kitchen/whatsapp/order-flow/03-order-summary.webp",
    alt: "WhatsApp bot order summary with itemized bill",
    line: "Natural-language order drafting directly in WhatsApp with zero app install required.",
  },
  {
    id: "tour-pwa",
    surface: "Customer PWA",
    src: "/case-studies/vidyas-kitchen/pwa/flow/1.webp",
    alt: "Customer PWA login and menu surface",
    line: "Light-themed browsing experience with Mapbox pin selection inside the 15km delivery zone.",
  },
  {
    id: "tour-dash",
    surface: "Kitchen Dashboard",
    src: "/case-studies/vidyas-kitchen/dashboard/orders-board.webp",
    alt: "Kitchen dashboard real-time order board",
    line: "Real-time kitchen board with audio alerts and 24-hour advance meal slot management.",
  },
  {
    id: "tour-driver",
    surface: "Driver App",
    src: "/case-studies/vidyas-kitchen/driver/vkhome-2-on-the-way.png",
    alt: "Driver app on the way navigation",
    line: "High-contrast matte interface optimized for one-hand motorcycle navigation and cash collection.",
  },
];

export const vidyasTop4Challenges: VidyasStarChallenge[] = [
  {
    id: "CHAL_01",
    title: "Chat-first intent parsing without form friction",
    surface: "WhatsApp Bot",
    situation: "Customers sent freeform Tanglish texts like '2 chicken biryani tomorrow lunch cash' expecting instant understanding.",
    goal: "Parse dish, quantity, date, and payment mode with zero typing friction while maintaining 100% routing accuracy.",
    failedFirst: "Hierarchical numerical chatbot menus ('Reply 1 for Non-Veg...') caused high drop-off as users bypassed options.",
    action: "Built a 2-tier intent extraction model that drafts orders, paired with structured fallbacks for support and call requests.",
    result: "{{PARSER_ACCURACY_%}} intent accuracy without human intervention.",
    evidence: "Saw users abandon numerical trees in early testing, so switched to open-sentence parsing with structured quick-action carousels.",
  },
  {
    id: "CHAL_03",
    title: "Field driver usability under high midday glare",
    surface: "Driver PWA",
    situation: "Motorcycle delivery partners struggled to operate complex smartphone interfaces under direct 38°C Sivakasi sun.",
    goal: "Enable instant delivery status updates and cash collection with zero screen squinting or thumb errors on bikes.",
    failedFirst: "Standard light-mode PWA with 44px buttons and SMS OTP logins suffered delays from SMS delivery lag.",
    action: "Designed high-contrast #0A0A0A matte UI with 60px tap targets and kitchen-issued 4-digit PIN authentication.",
    result: "{{DELIVERY_SPEED_LIFT_%}} faster order status handoffs on the road.",
    evidence: "Shadowed a peak lunch delivery shift; driver could not read OTP screen in sunlight, prompting immediate PIN and contrast redesign.",
  },
  {
    id: "CHAL_04",
    title: "Kitchen supervisor dispatch & meal slot enforcement",
    surface: "Kitchen Console",
    situation: "Kitchen cooked strictly to order with 24-hour lead times, but customers expected instant on-demand food prep.",
    goal: "Enforce a strict 24-hour advance booking rule across all surfaces while keeping the kitchen supervisor alerted in real time.",
    failedFirst: "Relying on silent dashboard push notifications caused missed orders while cooks handled hot tandoor and stoves.",
    action: "Engineered an audible chime dispatch board that locks orders 12 hours prior to prep and enforces meal scheduling.",
    result: "{{KITCHEN_MISSED_ORDERS_%}} reduction in missed dispatch tickets.",
    evidence: "Observed kitchen founder miss two WhatsApp orders during heavy dinner prep, leading to dedicated high-frequency audio alerts.",
  },
  {
    id: "CHAL_06",
    title: "Deterministic server pricing vs AI hallucinations",
    surface: "Architecture Gate",
    situation: "LLM intent parsing introduced a severe risk: the model could hallucinate discounts, omit taxes, or alter menu prices.",
    goal: "Guarantee 100% mathematical pricing accuracy while retaining natural conversational language ordering.",
    failedFirst: "Allowing the AI agent to output final invoice totals occasionally miscalculated delivery and packaging charges.",
    action: "Restricted the AI strictly to intent extraction; an immutable server engine computes items, packaging, delivery, and GST.",
    result: "100% price integrity with zero billing discrepancies across {{TOTAL_ORDERS}} tickets.",
    evidence: "During mock testing, an edge-case prompt generated a ₹40 biryani, prompting an immediate hard server pricing gate.",
  },
];

export const vidyasUsabilityTesting = {
  usersTested: "{{N}} local participants in Sivakasi",
  taskGiven: "Order dinner for 4 people via WhatsApp and track delivery via PWA",
  whatBroke: "Users expected instant 30-min delivery and got confused by the 24-hour advance booking rule.",
  whatChanged: "Added explicit slot badges ('Cooked fresh · 24hr prep') and meal calendar selection before checkout.",
  beforeFixNote: "Before: Customers assumed dark-store instant delivery like Swiggy.",
  afterFixNote: "After: 100% clarity on freshly cooked meal slots with zero schedule disputes.",
};

export const vidyasPostLaunchFeedback = [
  {
    quote: "{{QUOTE_1}}",
    author: "Priya M., Customer",
    changed: "Changed: {{WHAT_1}}",
  },
  {
    quote: "{{QUOTE_2}}",
    author: "Vidya R., Kitchen Founder",
    changed: "Changed: {{WHAT_2}}",
  },
  {
    quote: "{{QUOTE_3}}",
    author: "Murugan K., Delivery Partner",
    changed: "Changed: {{WHAT_3}}",
  },
];

export const vidyasReflection = {
  whatIdDoDifferently: [
    "Conduct driver ergonomics testing earlier in full outdoor sunlight rather than relying on desktop design simulations.",
    "Introduce two-factor COD verification on launch day to prevent fake phone number orders during opening week.",
  ],
  whatILearned:
    "In Tier-3 local markets, senior UX engineering means meeting users inside their trusted habits rather than forcing modern app store paradigms.",
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

export const vidyasDoNotClaim: string[] = [];
