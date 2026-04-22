export type CaseStudy = {
  slug: string;
  project: string;
  subtitle: string;
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
    uxScoreChart?: Array<{
      metric: string;
      before: number;
      after: number;
    }>;
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
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "parla-show-and-sell",
    project: "Parla Retail",
    subtitle: "Show & Sell + Customer Scheduler",
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
      uxScoreChart: [
        { metric: "CTA Clarity", before: 4, after: 9 },
        { metric: "Booking Usability", before: 3, after: 8 },
        { metric: "Call Readiness", before: 4, after: 8 },
        { metric: "Checkout Continuity", before: 5, after: 8 },
      ],
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
