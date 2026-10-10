import type { FlowDiagramData, IASurfaceColumn, VidyasChallenge, VidyasStackItem } from "@/lib/vidyasKitchenCaseStudyContent";

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
    title: "OWN THE ORDER",
    surface: "Checkout",
    stake: "If the customer pays Amazon, we are a blog with a logo.",
    happened: "The early sketch was an affiliate hop. The locked rule became the opposite. They pay us. We source, check, and ship.",
    whyHard: "Affiliate is faster to demo. Own checkout needs a phone code, a payment webhook, pay-on-delivery, and a hub story.",
    triedFirst: "Treating the store as a review site that deep-links out.",
    worked: "Cart and checkout live on one route. Online pay and pay-on-delivery sit side by side. The source buy link goes to ops by email. The customer never sees it.",
    outcome: "The brand owns the order. Conversion is not measured.",
  },
  {
    id: "02",
    title: "NAME THE HUB",
    surface: "Orders",
    stake: "The parent should see the check and the branded box, not a supplier map.",
    happened: "The working steps are sourcing, then the India hub. The order page says preparing and quality check. Support says the item is repacked in We Two packaging before the carrier scan goes live.",
    whyHard: "The real path is longer than processing and shipped. A short courier widget either skips the hub or starts naming shops.",
    triedFirst: "Default courier copy, with no hub language at all.",
    worked: "One locked stage list for the order page and for Tailz. The tracking number appears after it has shipped.",
    outcome: "The timeline matches the box they receive. Origin shops stay in the ops email.",
  },
  {
    id: "03",
    title: "ONLY THE GAPS",
    surface: "Catalog",
    stake: "An exclusive import that already sits on Amazon.in is just a slower marketplace.",
    happened: "Hunters write a staging row. A compare step matches title, brand, category, and an image hash. The India check looks at Amazon.in, Flipkart, HUFT, Supertails, Zigly, and more. A hit is skipped or rejected.",
    whyHard: "Titles lie. The same vest changes its name between shops.",
    triedFirst: "Matching product IDs only. Foreign IDs never match Indian ones.",
    worked: "Image hash, word overlap, and a human vote on whatever is left.",
    outcome: "Live is a filtered set. How many we rejected is not measured here.",
  },
  {
    id: "04",
    title: "HUMANS PUBLISH",
    surface: "Desk",
    stake: "A 0–100 score is a ranking hint, not a listing.",
    happened: "The model returns a score, pros, cons, a verdict, who it is for, and a season. A high score only flags it. The row is inserted as pending. Two people have to approve. Then someone launches it.",
    whyHard: "A nightly hunt can dump dozens of rows. A one-tap approve in chat can accidentally skip the second vote.",
    triedFirst: "Trusting the flag as auto-publish.",
    worked: "Split queues: pending, gaps, waiting, rejected, launch. A verification pass can pause a dead source. A margin check can do the same.",
    outcome: "The shop only reads status = live. That is the only publish switch.",
  },
  {
    id: "05",
    title: "PHONE, NOT A PASSWORD",
    surface: "Account",
    stake: "People paying by UPI or on delivery do not want another password.",
    happened: "Sign-in is a +91 text code, then an optional name. Email is a shipping field, not an identity system. No Google login on this storefront.",
    whyHard: "A guest still needs a phone for shipping and WhatsApp. A hard login adds a screen.",
    triedFirst: "The shipped design is the login step inside the cart. I am not inventing an earlier failure.",
    worked: "Four beats on one URL. Cart, code, pay, done.",
    outcome: "The session is the phone. How many people finish it is not measured.",
  },
  {
    id: "06",
    title: "TAILZ AS A CLERK",
    surface: "WhatsApp",
    stake: "A free-form model will invent a price.",
    happened: "Menu items cover track, browse, offers, shipping, support, and returns, so the model is not the first tool. It may recommend only from the live catalog it was handed. It signs off as Tailz.",
    whyHard: "The same family of agents also texts the team about hunts. One loose prompt and a customer hears a source shop.",
    triedFirst: "A second on-site chat was built and left unwired. Two mouths is one too many.",
    worked: "Templates for the order events. Inbound chat stays on the catalog in front of it.",
    outcome: "Tailz can track and recommend. Quality of replies is not measured.",
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
  { name: "India checker", job: "If India already sells it, the row never reaches the shop." },
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
  "Live, or it does not exist. A scraped row is not a product. The shop never sees pending.",
];
