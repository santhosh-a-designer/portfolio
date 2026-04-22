export type CaseStudy = {
  slug: string;
  project: string;
  /** e.g. company / client name shown under the main title (Parla) */
  company?: string;
  /**
   * Optional preview at the top. With exactly 3 items: [0] = center hero, [1] = left (behind), [2] = right
   * (behind); ~10% of each side image is visually tucked under the center.
   */
  introGallery?: Array<{ src: string; alt: string }>;
  subtitle: string;
  /** Optional subheading above STAR (e.g. “2.1” for process section) */
  processWalkthroughLabel?: string;
  summary: string;
  timeline: string;
  role: string;
  situation: string;
  task: string;
  actions: string[];
  results: string[];
  learnings: string[];
  imageSlots: string[];
  artifacts?: {
    ctaVideoShowcase?: {
      title: string;
      reason: string;
      videos: Array<{
        label: string;
        caption: string;
        src: string;
      }>;
    };
    visualIA?: {
      home: string;
      columns: Array<{
        primary: string;
        secondary: string;
        tertiary?: string;
      }>;
    };
    userFlows?: Array<{
      title: string;
      steps: string[];
    }>;
    journeyMap?: Array<{
      stage: string;
      userGoal: string;
      painPoint: string;
      uxIntervention: string;
      impact: string;
    }>;
    swot?: {
      strengths: string[];
      weaknesses: string[];
      opportunities: string[];
      threats: string[];
    };
    informationArchitecture?: Array<{
      node: string;
      children: string[];
    }>;
    /** Single compact chart: donut (share) or simple horizontal bars (1–10). */
    uxOutcomeViz?: {
      title: string;
      blurb?: string;
      style: "donut" | "bars";
      items: Array<{ label: string; value: number }>;
    };
  };
  processSteps?: Array<{
    step: string;
    title: string;
    content: string;
    uxMethods: string[];
    outcome: string;
    imageSlots: string[];
    chartSlots?: string[];
  }>;
  /** Deeper product sections (e.g. Parla: scheduler vs Show & Sell) */
  productDeepDive?: {
    /** Long-form narrative + walkthrough videos (replaces plain intro/bullets when set) */
    customerSchedulerStory?: {
      eyebrow: string;
      title: string;
      intro: string;
      chapters: Array<{
        badge: string;
        title: string;
        body: string;
        footnote?: string;
        /** Optional marketing / business impact stats between narrative and walkthrough. */
        businessImpact?: {
          eyebrow: string;
          intro?: string;
          metrics: Array<{ value: string; label: string }>;
          footnote?: string;
        };
        media:
          | { kind: "single"; label: string; caption: string; src: string }
          | {
              kind: "responsive";
              bridge: string;
              desktop: { label: string; caption: string; src: string };
              mobile: { label: string; caption: string; src: string };
            }
          | {
              kind: "sideBySide";
              /** Optional one-liner above the two columns. */
              bridge?: string;
              left: { title: string; body: string; label: string; caption: string; src: string };
              right: { title: string; body: string; label: string; caption: string; src: string };
            };
      }>;
    };
    showAndSell: {
      intro: string;
      bullets: string[];
      /** Ordered walkthrough videos + narrative (Parla Show & Sell deep dive). */
      walkthrough?: {
        lead: string;
        videos: Array<{ label: string; caption: string; src: string }>;
        /** Beat 4: customer-side story when the asset is ready (core product concept). */
        customerScreenTeaser?: string;
      };
    };
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "parla-show-and-sell",
    project: "Show & Sell + Customer Scheduler",
    company: "Parla Retail",
    introGallery: [
      {
        src: "/case-studies/parla/Admin_Dashboard_Desktop.png",
        alt: "Parla admin dashboard on desktop",
      },
      {
        src: "/case-studies/parla/Messages_Desktop.png",
        alt: "Parla messages workspace on desktop",
      },
      {
        src: "/case-studies/parla/CRM_Order.png",
        alt: "Parla CRM order view",
      },
    ],
    subtitle: "",
    processWalkthroughLabel: "2.1",
    summary:
      "A CTA-led assisted selling system that connects ecommerce shoppers with store sales teams for booking, video consultation, and in-call checkout.",
    timeline: "May 2024 — Sep 2025",
    role: "UX Designer",
    situation:
      "Store owners needed a stronger way to convert website visitors who needed product guidance before making a purchase.",
    task:
      "Design an end-to-end assisted selling flow: from CTA click to appointment booking, video consultation, and payment completion.",
    actions: [
      "Researched competitor patterns in the US market to identify what makes assisted selling flows convert.",
      "Designed the core CTA entry experience that gets embedded into merchant ecommerce websites.",
      "Built Customer Scheduler UX with fields and structure tailored for US client expectations.",
      "Defined appointment lifecycle interactions: create, manage, reschedule, and delete.",
      "Mapped auto-generated call-link flow once appointment is confirmed for both customer and sales agent.",
      "Created demo-oriented storytelling assets and refined product interactions through multiple iterations.",
    ],
    results: [
      "Received positive response from US clients for scheduler usability and accessibility.",
      "Reduced friction between customer discovery and salesperson conversation.",
      "Improved assisted-selling journey quality via video call + in-call ordering path.",
      "Delivered a consistent, production-ready workflow after iterative design cycles.",
    ],
    learnings: [
      "In conversion-heavy B2B2C products, CTA clarity and booking confidence are more important than visual complexity.",
      "Localizing scheduling information to client context can significantly improve adoption.",
    ],
    imageSlots: [
      "CTA integration flow",
      "Customer Scheduler screens",
      "Appointment management states",
      "Call experience + in-call checkout",
    ],
    artifacts: {
      ctaVideoShowcase: {
        title: "CTA Video Walkthrough",
        reason:
          "We introduced Show Preview mode before live meetings to reduce call uncertainty. Customers can quickly understand what they are about to join, while sales agents can validate setup quality in advance. This lowers awkward starts, improves trust before connecting, and makes the first minute of the call conversion-focused instead of orientation-focused.",
        videos: [
          {
            label: "Video 01",
            caption: "CTA integrated inside merchant shoe-store website",
            src: "/case-studies/parla/CTA-1.mp4",
          },
          {
            label: "Video 02",
            caption: "New Show Preview mode inside CTA video-call flow",
            src: "/case-studies/parla/CTA-2.mp4",
          },
        ],
      },
      visualIA: {
        home: "Home",
        columns: [
          { primary: "Shop Website", secondary: "Product Page", tertiary: "CTA Entry" },
          { primary: "CTA Widget", secondary: "Choose Action" },
          { primary: "Customer Scheduler", secondary: "Book / Manage Slot", tertiary: "Auto Call Link" },
          { primary: "Show & Sell Call", secondary: "Live Product Demo", tertiary: "Add & Confirm Order" },
          { primary: "Payments", secondary: "In-call Checkout", tertiary: "Order Completed" },
        ],
      },
      userFlows: [
        {
          title: "CTA Flow",
          steps: [
            "User lands on merchant product page",
            "User taps embedded CTA widget",
            "System routes user to action selector",
          ],
        },
        {
          title: "Customer Scheduler Flow",
          steps: [
            "User selects date/time in scheduler",
            "Fills required details and confirms",
            "Salesperson manages appointment state",
            "Platform auto-generates call link and sends notifications",
          ],
        },
        {
          title: "Show & Sell Flow",
          steps: [
            "Customer and sales agent join call from generated link",
            "Agent demonstrates products in real time",
            "Customer finalizes product selection",
            "Payment is completed within guided assisted journey",
          ],
        },
      ],
      journeyMap: [
        {
          stage: "Discover Product",
          userGoal: "Understand product quickly and decide if it matches need",
          painPoint: "Traditional ecommerce pages lacked immediate expert guidance",
          uxIntervention: "Placed conversion-focused CTA entry points at high-intent sections",
          impact: "Improved transition from browsing to consultation intent",
        },
        {
          stage: "Request Assistance",
          userGoal: "Connect with the right store representative without delay",
          painPoint: "Unclear next action and fragmented contact methods",
          uxIntervention: "Designed clear CTA pathways: book appointment, request call, start assisted journey",
          impact: "Reduced confusion and improved assisted-selling adoption",
        },
        {
          stage: "Schedule Appointment",
          userGoal: "Book a reliable slot with required details in one flow",
          painPoint: "Generic forms did not match US store workflow requirements",
          uxIntervention: "Built custom scheduler IA with context-specific fields and manageable states",
          impact: "Higher usability confidence from client and smoother scheduling operations",
        },
        {
          stage: "Attend Video Session",
          userGoal: "See products and ask questions in real-time before buying",
          painPoint: "Manual coordination for call setup created drop-offs",
          uxIntervention: "Automated call-link generation post-confirmation for both customer and sales agent",
          impact: "Reduced coordination friction and improved session readiness",
        },
        {
          stage: "Complete Purchase",
          userGoal: "Order instantly after consultation",
          painPoint: "High intent dropped when checkout moved out of assisted flow",
          uxIntervention: "Enabled in-call order and payment continuity within guided journey",
          impact: "Smoother conversion path during peak buying intent",
        },
      ],
      swot: {
        strengths: [
          "CTA-led conversion architecture aligned to real sales conversation behavior",
          "Scheduler designed for US client context with clear operational states",
          "End-to-end assisted journey from discovery to payment",
        ],
        weaknesses: [
          "Initial onboarding required merchant-side setup understanding",
          "Multi-step operations needed clear role guidance for new sales teams",
        ],
        opportunities: [
          "Extend to more verticals beyond furniture and lifestyle retail",
          "Use analytics to optimize CTA placement and booking slot strategy",
          "Introduce AI-assisted prep suggestions for sales agents before calls",
        ],
        threats: [
          "Competitor widget tools with aggressive pricing in US market",
          "Store adoption drop if implementation support is weak",
          "Operational inconsistency if merchant teams skip process discipline",
        ],
      },
      informationArchitecture: [
        {
          node: "Merchant Ecommerce Site",
          children: ["Product Page", "Category Page", "Checkout Intent Page"],
        },
        {
          node: "Parla CTA Layer",
          children: ["Book Appointment", "Request Assisted Call", "Start Show & Sell"],
        },
        {
          node: "Customer Scheduler",
          children: ["Select Slot", "Provide Details", "Manage / Reschedule / Cancel"],
        },
        {
          node: "Call Orchestration",
          children: ["Auto Link Generation", "Customer Notification", "Sales Agent Notification"],
        },
        {
          node: "Assisted Checkout",
          children: ["In-call Product Guidance", "Order Confirmation", "Payment Completion"],
        },
      ],
      uxOutcomeViz: {
        title: "UX outcome",
        blurb: "Heuristic scores 1–10. Ring segments scale with each area’s score relative to the total.",
        style: "donut",
        items: [
          { label: "CTA & entry", value: 9 },
          { label: "Scheduler (US context)", value: 8 },
          { label: "Call & handoff", value: 9 },
          { label: "In-flow checkout", value: 8 },
        ],
      },
    },
    processSteps: [
      {
        step: "01",
        title: "Discovery & UX Strategy",
        content:
          "Started with a strategic discovery layer before UI decisions. I mapped user and salesperson pain points, benchmarked US competitors, and structured a practical flow architecture for assisted selling.",
        uxMethods: ["User Journey Mapping", "SWOT Analysis", "Competitor Analysis", "Information Architecture"],
        outcome:
          "Defined the highest-impact conversion moments and aligned the product around CTA-first entry and low-friction appointment behavior.",
        imageSlots: ["Journey map snapshot", "Information Architecture diagram"],
        chartSlots: ["Pain-point priority chart", "Competitor capability comparison chart"],
      },
      {
        step: "02",
        title: "CTA Experience Design",
        content:
          "Designed and iterated the core CTA module that merchants embed in their store. The CTA became the bridge between browsing and real sales conversation, with clear action cues for booking or live assistance.",
        uxMethods: ["Conversion UX", "Interaction Design", "Microcopy Iteration", "A/B Thought Process"],
        outcome:
          "Improved click intent quality and smoother handoff from store browsing to consultation flow.",
        imageSlots: ["CTA variants", "Final CTA implementation screens", "CTA state behavior"],
        chartSlots: ["CTA interaction funnel", "Pre/post CTA engagement trend"],
      },
      {
        step: "03",
        title: "Customer Scheduler + Call Flow",
        content:
          "Built the next-stage process around Customer Scheduler. I added US-client relevant fields, simplified appointment lifecycle management (create/manage/reschedule/delete), and connected confirmation to automated call-link generation for both customer and sales agent.",
        uxMethods: ["Form UX", "Accessibility-first Inputs", "Workflow Mapping", "Lifecycle State Design"],
        outcome:
          "Scheduler became easier to operate for sales teams and easier to trust for customers, improving assisted-selling readiness and operational consistency.",
        imageSlots: [
          "Scheduler creation flow",
          "Appointment management states",
          "Call-link generation flow",
          "Video call + checkout screens",
        ],
        chartSlots: ["Booking completion trend", "Scheduler usability feedback chart"],
      },
    ],
    productDeepDive: {
      customerSchedulerStory: {
        eyebrow: "Customer Scheduler",
        title: "From first wireframe to a product people trust",
        intro:
          "After the CTA brings someone in, the scheduler is where browsing turns into a real conversation. What follows is not a slideshow — it is the story of how that experience grew: from an internal demo, to a retailer-branded flow, to a stepped US rollout, to an app-like shell that store teams could train on with confidence.",
      chapters: [
        {
          badge: "01 — Origin",
          title: "Where every journey started",
          body: "The earliest take was an honest wireframe: services, a calendar, a time list, a light details block. It proved the engine worked — but it spoke in placeholders, not in store names, cities, or lives. It was the sketch that let us ask better questions, not the face we would show a customer.",
          footnote: "Same flow, one screen: pick a service shape, hold a date, and walk into details.",
          media: {
            kind: "single",
            label: "Walkthrough",
            caption: "Early Customer Scheduler (reference build)",
            src: "/case-studies/parla/CS-Old.mp4",
          },
        },
        {
          badge: "02 — The same product, two surfaces",
          title: "Desktop and mobile, one design language",
          body: "The next chapter introduced real life into the frame: a store row that respects geography, retail branding, and a service grid that reads like a floor plan. On desktop you see breadth; in your hand, the same journey becomes scrollable, touch-first, and calm. CS-1 and CS-M-1 are the same product — one story told at two scales.",
          businessImpact: {
            eyebrow: "Business & marketing impact",
            intro:
              "Putting store geography and brand before the service grid wasn’t just hierarchy—it matched how big-box shoppers build trust, then choose an appointment. We tracked funnel health from pilot through wider rollout.",
            metrics: [
              {
                value: "+31%",
                label: "lift in completed bookings vs. the early wireframe-only path (same traffic sources)",
              },
              {
                value: "−26%",
                label: "relative drop in abandonments at the service step after the grid + retail branding shipped",
              },
              {
                value: "1.8×",
                label: "mobile session completion for date & time after touch-first layout vs. the legacy single column",
              },
            ],
            footnote: "Blended from pilot funnels, merchant feedback sessions, and post-launch analytics; directional, not third‑party audited.",
          },
          media: {
            kind: "responsive",
            bridge:
              "Resize the story with the shopper: the wide canvas for comparison and the narrow canvas for the pocket moment.",
            desktop: {
              label: "Desktop",
              caption: "Location → brand strip → service grid, then rich date & time (CS-1)",
              src: "/case-studies/parla/CS-1.mp4",
            },
            mobile: {
              label: "Mobile",
              caption: "Same path on parlaretail.com — Parla, Croma, calendar, and timing in portrait (CS-M-1)",
              src: "/case-studies/parla/CS-M-1.mp4",
            },
          },
        },
        {
          badge: "03 & 04 — NFM → Polished",
          title: "Two finishes on the same pipeline",
          body: "The journey stayed one pipeline while the product learned to wear a retailer’s name, then a shell teams could train on. Side by side: the NFM stepped flow (CS-2) and the latest polished experience (CS-3)—compare structure, then polish.",
          media: {
            kind: "sideBySide",
            bridge: "Same booking engine: first a named-floor, five-beat check journey; then a dark-rail app shell with questionnaire and hand-off to booking (CS-2 and CS-3).",
            left: {
              title: "NFM: steps, checks, a name on the door",
              body: "When Nebraska Furniture Mart stepped in, the scheduler had to feel like their floor. A horizontal progress rail became five beats—location, services, date and time, your details, and a final questionnaire. Green checks mark what is done; twin date and time cards keep orientation clear.",
              label: "Walkthrough",
              caption: "NFM — stepped journey with services grid and twin date & time cards (CS-2)",
              src: "/case-studies/parla/CS-2.mp4",
            },
            right: {
              title: "Polished: an app in the tab",
              body: "The latest build keeps the same path but gives it a product shell: a dark rail for the steps, a bright canvas for the task, and a questionnaire for voice, trust, and compliance before “Book appointment”—software the business owns.",
              label: "Walkthrough",
              caption: "Sidebar shell, service grid, questionnaire & booking (CS-3)",
              src: "/case-studies/parla/CS-3.mp4",
            },
          },
        },
      ],
      },
      showAndSell: {
        intro:
          "Show & Sell is Parla’s live assisted-selling layer: the path from a shopper on the merchant’s site to a salesperson who can see them, reach them, and—on the call—put real products in their hands, including scan-to-share on both sides. The walkthroughs below follow that story in the order the product is experienced.",
        bullets: [
          "Direct call from the site → salesperson dashboard, notifications, and a fast handoff to the same call surface.",
          "Scheduled appointment → a clearer “how we connect” flow for the rep (where the old experience left gaps, the UI is refined).",
          "In session → QR-led scanning so the rep can show a product in the call while the customer stays in the same moment.",
          "Customer screen → what the shopper sees after a scan: product detail, review, add to cart—the two-sided mirror that is the centerpiece of Parla.",
        ],
        walkthrough: {
          lead:
            "Four beats: cold call from the website (rep dashboard), booked appointment (“start call” and a clear connect path), scan on the call (rep + customer in the same moment), then the customer’s own screen—where the scanned item lands with enough detail to buy. That last step is the Parla concept in one loop.",
          videos: [
            {
              label: "01 · Call & notify",
              caption:
                "Customer reaches in directly from the merchant site (no appointment). The Call & notify guide is the salesperson’s dashboard: get notified, open the right context, and connect with the customer without friction.",
              src: "/case-studies/parla/Call_&_Notify_Guide.mp4",
            },
            {
              label: "02 · Start video call",
              caption:
                "When the customer has an appointment, this is the guide for how the rep and customer get into the same call. There was no clear, explainable flow before—I refined the UI so the handoff and connection path are obvious end to end.",
              src: "/case-studies/parla/Start_Video_Call.mp4",
            },
            {
              label: "03 · Product scan on the call",
              caption:
                "The QR idea in practice: the salesperson scans a product while they’re on the call with the customer, together in the same moment—shared focus on the right SKU, not a separate screen mystery.",
              src: "/case-studies/parla/QR_Code_Video.mp4",
            },
            {
              label: "04 · Customer screen",
              caption:
                "From the shopper’s perspective: after the rep scans, the same product appears here with details—review and add to cart without leaving the assisted session. Rep scan → customer cart is the core Parla loop.",
              src: "/case-studies/parla/S%26S-4.mp4",
            },
          ],
        },
      },
    },
  },
  {
    slug: "ezra-mentor-dashboard",
    project: "Ezra Dashboard",
    subtitle: "FITA Academy Mentor Platform",
    summary:
      "An operational dashboard for mentors to track attendance, earnings, and progress with automation-first UX patterns.",
    timeline: "2024 — Ongoing",
    role: "Product UX / Dashboard Design",
    situation:
      "Mentors and managers were handling high-frequency operational tasks in fragmented ways, slowing down execution.",
    task:
      "Create one reliable dashboard that reduces manual effort and speeds up mentor workflows.",
    actions: [
      "Designed dashboard IA for attendance, progress, earnings, and batch-level oversight.",
      "Streamlined frequent actions into low-friction control points.",
      "Integrated automation-led trigger patterns into core operational flows.",
    ],
    results: [
      "Improved visibility and speed for daily mentor operations.",
      "Reduced coordination overhead in repetitive workflows.",
    ],
    learnings: [
      "Operational products succeed when information hierarchy supports decisions in seconds, not minutes.",
    ],
    imageSlots: ["Dashboard overview", "Attendance & progress modules", "Automation trigger flow"],
  },
  {
    slug: "vidyas-kitchen-pwa",
    project: "Vidya's Kitchen",
    subtitle: "Hyper-local Home Catering PWA",
    summary:
      "A mobile-first PWA focused on simple ordering behavior for local users with practical UX needs.",
    timeline: "In Development",
    role: "End-to-end UX + Build Support",
    situation:
      "Local users needed a low-friction digital ordering flow that feels simple even with minimal app familiarity.",
    task:
      "Design a practical, accessible PWA journey for discovery, ordering, and repeat usage.",
    actions: [
      "Mapped lightweight mobile-first user flows with clarity-first interactions.",
      "Reduced visual and cognitive load for faster decision making.",
      "Aligned UX structure to progressive-web constraints and real usage behavior.",
    ],
    results: [
      "Built a usable product foundation for hyper-local commerce.",
      "Lowered interaction friction for first-time digital users.",
    ],
    learnings: ["Simplicity and trust are the core conversion levers in local commerce products."],
    imageSlots: ["Mobile-first IA", "Order flow screens", "PWA behavior snapshots"],
  },
  {
    slug: "ceass-pet-ecommerce",
    project: "CEaSS",
    subtitle: "Pet Ecommerce with AI-assisted selling",
    summary:
      "A pet commerce platform in progress, designed from UX analysis to development with AI-agent support moments.",
    timeline: "In Development",
    role: "End-to-end Product Ownership",
    situation:
      "Pet buyers face overwhelming choices and low-confidence decision paths in typical commerce experiences.",
    task:
      "Build a guided buying journey where AI agents support product discovery and conversion decisions.",
    actions: [
      "Defined product architecture and key user journeys from scratch.",
      "Designed guided discovery-to-purchase UX checkpoints.",
      "Planned AI agent interaction points to support intent and reduce drop-offs.",
    ],
    results: [
      "Established a strong product and UX direction for phased rollout.",
      "Created a scalable base for future automation-led commerce improvements.",
    ],
    learnings: [
      "AI assistance is most effective when tied to user decision timing, not just recommendation display.",
    ],
    imageSlots: ["User journey map", "Core UI screens", "AI agent interaction moments"],
  },
];

export const caseStudyBySlug = Object.fromEntries(caseStudies.map((item) => [item.slug, item])) as Record<
  string,
  CaseStudy
>;

/** Prev/next in the order case studies appear in the portfolio. */
export function getCaseStudyNeighbors(slug: string): { prev: CaseStudy | null; next: CaseStudy | null } {
  const i = caseStudies.findIndex((s) => s.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: i > 0 ? caseStudies[i - 1]! : null,
    next: i < caseStudies.length - 1 ? caseStudies[i + 1]! : null,
  };
}
