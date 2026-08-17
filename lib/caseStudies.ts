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
  /** Fullscreen video first, then tucks to top; same <video> instance (no Parla / Show & Sell). */
  cinematicIntro?: { src: string; poster?: string; /** >1 = faster intro (e.g. 1.2) */ playbackRate?: number };
  liveUrl?: string;
  subtitle: string;
  /** Optional subheading above STAR (e.g. “2.1” for process section) */
  processWalkthroughLabel?: string;
  summary: string;
  /** Shown in orange next to the project title (e.g. date range). */
  timeline: string;
  /** First meta box: stack / tools (replaces a separate timeline-only box). */
  toolsAndLanguages: string;
  role: string;
  /** When set, footer "Next" shows this case study as non-clickable (not ready). */
  caseStudyComingSoon?: boolean;
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
    /** Named perspectives (e.g. mentors + students) for narrative case studies. */
    userPersonas?: Array<{
      name: string;
      role: string;
      oneLiner: string;
      context: string;
      goals: string[];
      pains: string[];
    }>;
    /** UI design system snapshot for the project. */
    designSystem?: {
      blurb: string;
      colors: Array<{ name: string; hex: string; use: string }>;
      type: Array<{ role: string; family: string; note: string }>;
      components: string[];
      principles: string[];
    };
    /** Single compact chart: donut (share) or simple horizontal bars (1–10). */
    uxOutcomeViz?: {
      title: string;
      blurb?: string;
      style: "donut" | "bars";
      items: Array<{ label: string; value: number }>;
    };
    /** Vidya's Kitchen: WhatsApp 3-up + PWA website/app walkthroughs. */
    vidyaShowcase?: {
      /** Vidya: ops dashboard + driver — placed above UX Outcome (labelled e.g. Version 2.0). */
      afterCinematic?: {
        eyebrow: string;
        title: string;
        lead: string;
        dashboardTitle: string;
        dashboard: string;
        driverTitle: string;
        driver: string;
      };
      whatsappBot: {
        eyebrow: string;
        title: string;
        intro: string;
        /** Shown just under intro — ties this block to the User flow section above. */
        contextAfterUserFlow: string;
        options: Array<{ label: string; caption: string; videoSrc: string }>;
      };
      pwa: {
        intro: string;
        /** Optional extra line; keep short. */
        howItWorks?: string;
        bullets?: string[];
        /** Single desktop walkthrough; no separate mobile frame. */
        desktop: { label: string; caption: string; videoSrc: string };
      };
    };
    /** Ezra: two mobile flows, then desktop mentor dashboard, roadmap + business narrative. */
    ezraShowcase?: {
      mobile: {
        eyebrow: string;
        title: string;
        lead: string;
        /** Second paragraph under lead — same role as vidyaShowcase WhatsApp `contextAfterUserFlow`. */
        contextAfter: string;
        clips: Array<{ label: string; caption: string; videoSrc: string }>;
      };
      dashboard: {
        eyebrow: string;
        title: string;
        /** Two lines above the video, centered (desktop walkthrough). */
        introLine1: string;
        introLine2: string;
        caption: string;
        videoSrc: string;
      };
      /** After mentor dashboard: student view with one link per student. */
      studentDashboard: {
        eyebrow: string;
        title: string;
        introLine1: string;
        introLine2: string;
        caption: string;
        videoSrc: string;
      };
      upcoming: {
        title: string;
        body: string;
      };
      growth: {
        title: string;
        marketing: string[];
        revenueHeadline: string;
        revenueDetail: string;
      };
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
    timeline: "2024 — 2025",
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
    toolsAndLanguages: "Figma",
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
      designSystem: {
        blurb:
          "Light-mode professional surface. Parla’s admin is built for retail floor teams who need clarity at a glance — white canvas, teal brand identity, sky-blue for scheduling actions, and hot pink exclusively for the Show & Sell entry point so it’s never missed.",
        colors: [
          { name: "Parla teal", hex: "#2DC8E8", use: "Brand logo, primary navigation identity" },
          { name: "Sky blue", hex: "#1976D2", use: "Primary CTA buttons, Create Appointment, active tabs" },
          { name: "Show & Sell pink", hex: "#E91E8C", use: "Show & Sell launch — the only pink in the UI, unmissable" },
          { name: "White canvas", hex: "#FFFFFF", use: "Dashboard background — light-mode, familiar for retail teams" },
          { name: "Success green", hex: "#22C55E", use: "Live toggle, store connected, in-progress appointment state" },
          { name: "Danger red", hex: "#EF4444", use: "End Conversation button, urgent time alerts" },
        ],
        type: [
          { role: "Dashboard headings / nav", family: "Inter", note: "Consistent clean weight — Appointments, Calls, CRM, Orders, Messages" },
          { role: "Metric values / data", family: "Inter semibold", note: "241 calls, $22.4k — tabular weight for quick scanning" },
          { role: "Status chips", family: "Inter medium", note: "In Progress · Scheduled · Waiting · Ended — short, high-contrast labels" },
        ],
        components: [
          "Metric summary card", "Create Appointment card", "Show & Sell launch card", "Conversation list row", "Chat message thread", "CRM customer panel", "Store toggle row", "Performance tracker donut", "Status badge", "End Conversation button",
        ],
        principles: [
          "Light-mode trust — retail floor teams expect a professional, familiar interface, not a dark-mode product tool",
          "Colour hierarchy = action type — teal is brand, blue is schedule, pink is sell; the palette teaches the workflow",
          "Context always visible — CRM panel stays docked beside the chat thread so reps never lose customer history mid-call",
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
              src: "/case-studies/parla/Call_%26_Notify_Guide.mp4",
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
    company: "FITA Academy — mentors & students",
    subtitle: "Attendance, earnings, and trust on one system",
    timeline: "2025 — Present",
    summary:
      "Ezra is the product I designed and built to fix a very human problem: at FITA Academy, mentoring students meant fragile attendance sheets, easy to lose or “reinterpret,” and no single place for mentors and learners to share the same truth. I channelled that into a dashboard for mentors—fed by a bot I named Ezra—plus a student view for hours and daily attendance, automations for batch-end reminders, Gmail-backed payment handoffs, and a path to subscription. What started as a tool for my own batches is now in discussion for an org-wide buy, with paid pilots from other mentors along the way.",
    toolsAndLanguages: "Figma · TypeScript · React · Vercel · WhatsApp · Automations · Gmail",
    role: "UX Design & Development",
    situation:
      "At FITA, attendance sheets went missing, numbers got disputed, and students forgot to mark leave. As a mentor myself, I was living in the gap—no single honest record, no fair way to track what I was owed. Spreadsheets and group chats couldn't scale.",
    task:
      "Build one system: a bot-fed mentor dashboard, a student progress view, and automations that run themselves. Attendance everyone trusts, earnings always visible, and a Gmail handoff on completion—zero extra admin.",
    actions: [
      "Mapped three real roles—coordinators, mentors, students—and traced the pain from assignment → class → mark → pay.",
      "Mentor dashboard: roster, batch timeline, total earned vs expected, attendance (manual + batch-end lock).",
      "Built Ezra bot: mentors add students in chat (name, phone, course, slot)—syncs to dashboard instantly, no double entry.",
      "Post-batch scheduler nudge: attendance confirmed while the session is still fresh in memory.",
      "Gmail integration: completion auto-sends payment email with the project link attached.",
      "Student view: hours to complete + daily attendance—same data as the mentor, visible on one screen.",
    ],
    results: [
      "One system everyone reads from—no more ‘which version is correct?’",
      "₹50k in paid pilots from 5 mentors over 5 months—traction before any pitch.",
      "Less WhatsApp chaos: faster attendance close, fewer payment reconciliations.",
      "Academy-wide buy in discussion; subscription modal in build.",
    ],
    learnings: [
      "Build it for yourself first—if it doesn’t survive your own last batch, it won’t ship to peers.",
      "Attendance is a trust product: same numbers for student and mentor, or every feature rebuilds distrust.",
      "Two surfaces are enough—cash + calendar for mentors, hours + marks for students.",
    ],
    imageSlots: ["Mentor dashboard — roster and earnings", "Ezra bot → dashboard sync", "Student hours + attendance", "Gmail handoff (payment + project link)"],
    processWalkthroughLabel: "2.1",
    processSteps: [
      {
        step: "01",
        title: "Field research in my own batches",
        content:
          "I treated every mis-filed mark and every “can you resend the sheet?” as a signal. Student self-marking, coordinator handoffs, and my own end-of-day reconciliation became the first journey map before any pixel was sacred.",
        uxMethods: ["Contextual inquiry", "Pain clustering", "Role mapping (coordinator / mentor / student)"],
        outcome:
          "A shared list of failure modes: missing data, no reminder cadence, and no student-visible mirror—enough to justify a product, not a prettier spreadsheet.",
        imageSlots: ["Journey — before Ezra (notes)", "Persona quick cards"],
      },
      {
        step: "02",
        title: "Ezra as the data front door, dashboard as the brain",
        content:
          "I didn’t want mentors to be data entry clerks. The bot is the human-shaped input; the dashboard is the structure. That split kept the interaction kind for tired hands at 9 p.m.",
        uxMethods: ["Conversational form design", "State sync (bot → DB → UI)", "Error recovery for half-entered students"],
        outcome: "New students could appear in the roster without a second form, and the UI stayed the source of truth for money and status.",
        imageSlots: ["Ezra capture flow", "Dashboard roster match"],
      },
      {
        step: "03",
        title: "Automation, honesty, and the path to a license",
        content:
          "Reminders had to feel helpful, not nagging. Student views had to be explainable in one screen. The Gmail handoff had to be the last mile, not a new inbox problem. As peers paid to use the stack, subscription UX became as important as the dashboard grid.",
        uxMethods: ["Notification timing", "Progressive disclosure for payouts", "Pricing / subscription copy"],
        outcome:
          "A story that works for a solo mentor and scales to “the academy buys it”—now under active development and negotiation.",
        imageSlots: ["Post-batch reminder", "Subscription / pricing entry"],
      },
    ],
    artifacts: {
      userPersonas: [
        {
          name: "Karthik",
          role: "Mentor · two parallel batches",
          oneLiner: "“I’ll fix the sheet on Sunday” — and Sunday never matches Friday’s truth.",
          context:
            "Karthik teaches full-time and juggles two cohorts. He trusts his memory more than a shared file that half the class never updates the same way. He wants credit for delivery time, not for babysitting a doc.",
          goals: [
            "Close each week knowing who was actually in the room, without cross-checking three chats.",
            "See what he’s owed and what’s still open before following up for payment.",
            "Onboard a new co-ordinator-assigned student without a 20-field form.",
          ],
          pains: [
            "Sheets get “adjusted” and nobody agrees which version is official.",
            "Students who skip self-marking create awkward money conversations at month-end.",
          ],
        },
        {
          name: "Ananya",
          role: "Mentor · evenings only",
          oneLiner: "She’s great in class, allergic to admin at midnight.",
          context:
            "Ananya mentors after her day job. She’ll forget the attendance pass until someone pings her. She doesn’t need more charts—she needs a nudge that arrives when the batch actually ends, and a way to override when someone’s sick.",
          goals: [
            "A reminder that respects real batch times, not a generic daily digest.",
            "Fast manual mark when the automatic story is wrong.",
            "A calm view of who’s close to completion so she can line up the final project push.",
          ],
          pains: [
            "Guilt and rework when she discovers missing marks a week late.",
            "Fear of looking unfair when she corrects a student’s own mistake.",
          ],
        },
        {
          name: "Rahul",
          role: "Student · self-paced attendance",
          oneLiner: "He shows up, but the sheet doesn’t always say so.",
          context:
            "Rahul marks present most days, but sometimes he forgets after a long session—or assumes the mentor noticed. He doesn’t want to argue; he wants a simple daily status and a clear hours countdown.",
          goals: [
            "See the same attendance story his mentor will use for completion.",
            "Know how many hours are left in the program without opening a spreadsheet.",
          ],
          pains: [
            "Anxiety that one missed self-mark will derail his certificate or last payment step.",
            "Confusion when the group chat says one thing and the “official” list says another.",
          ],
        },
        {
          name: "Divya",
          role: "Student · also working full-time",
          oneLiner: "Leave and make-up days need to be visible, not buried in a DM thread.",
          context:
            "Divya takes planned leave and sometimes extra classes. She needs the system to reflect reality so money and completion don’t get stuck in “I thought you knew.”",
          goals: [
            "Record leave and see it reflected in her progress view.",
            "Finish with a handoff that already includes the project link and payment step—no mystery email chain.",
          ],
          pains: [
            "Bilingual back-and-forth in WhatsApp that never gets copied to a master record.",
            "Not knowing if she’s “done” until someone manually confirms.",
          ],
        },
      ],
      journeyMap: [
        {
          stage: "Assignment",
          userGoal: "Coordinators place a new student with the right mentor and context",
          painPoint: "Handoffs live in DMs; mentor starts from scratch each time",
          uxIntervention: "Structured handoff the dashboard can read (course, slot, contact)",
          impact: "Fewer “who is this person?” moments on day one of class",
        },
        {
          stage: "Class + self-mark",
          userGoal: "Students mark attendance; mentors trust the day’s record",
          painPoint: "Sheets disappear; some students don’t mark; leave isn’t updated",
          uxIntervention: "Student view + explicit leave; batch-end truth pass with reminder",
          impact: "One version of the day, visible to both sides",
        },
        {
          stage: "Batch close",
          userGoal: "Mentor locks the session without a Sunday salvage mission",
          painPoint: "Reminders are social (“please update”) not systematic",
          uxIntervention: "Scheduler nudges when the batch window ends; manual override in-line",
          impact: "Attendance catches up to reality before pay conversations",
        },
        {
          stage: "Earnings + completion",
          userGoal: "Mentor sees money owed and completion state clearly",
          painPoint: "Payouts tracked in head; completion triggers ad hoc Gmail",
          uxIntervention: "Totals in dashboard; Gmail workflow with project link for payment ask",
          impact: "Less manual chasing; cleaner handoff at the end of the program",
        },
        {
          stage: "Scale",
          userGoal: "Other mentors and the academy can adopt the same pattern",
          painPoint: "One-off tool doesn’t survive procurement or support",
          uxIntervention: "Subscription / pricing; fit for org-wide buy under discussion",
          impact: "Path from side project to institutional product",
        },
      ],
      swot: {
        strengths: [
          "Solves a lived, daily pain the designer actually runs in production class hours.",
          "Mentor bot + dashboard split keeps input human and data structured.",
          "Paid pilots from peers before the org deal: proof of pull, not only slideware.",
        ],
        weaknesses: [
          "Single-academy context; some flows assume FITA’s rhythm until generalized.",
          "Gmail and scheduler dependencies need careful error handling in v2.",
        ],
        opportunities: [
          "Institutional license at FITA with coordinators on the same rails.",
          "Clear subscription tiers as more mentors want Ezra for their own batches.",
        ],
        threats: [
          "Policy changes in how attendance or payouts must be stored or audited.",
          "Scope creep if every mentor asks for a different report before core stability ships.",
        ],
      },
      informationArchitecture: [
        {
          node: "FITA & Ezra",
          children: ["Project coordinators", "Mentor dashboard (web)", "Student progress view", "Ezra bot (WhatsApp / chat)", "Gmail + scheduler automations"],
        },
        {
          node: "Mentor dashboard",
          children: ["Roster by batch", "Attendance (manual + batch-end)", "Earnings: earned vs expected", "New student (mirrors bot intake)", "Completion → payment handoff trigger"],
        },
        {
          node: "Student view",
          children: ["Hours to complete", "Daily attendance & leave", "Completion status (aligned with mentor data)"],
        },
        {
          node: "Ezra bot",
          children: ["Capture student: name, phone, course, timing", "Confirm updates", "Pushes to shared roster (no re-type)"],
        },
        {
          node: "Automation layer",
          children: ["Post–batch end reminders", "Gmail: payment + project link on completion", "Future: subscription / billing entitlements"],
        },
      ],
      visualIA: {
        home: "FITA / Ezra",
        columns: [
          { primary: "People", secondary: "Coordinators · mentors", tertiary: "Students" },
          { primary: "Mentor core", secondary: "Roster · batches", tertiary: "Pay & completion" },
          { primary: "Ezra", secondary: "Intake in chat", tertiary: "→ Dashboard sync" },
          { primary: "Student", secondary: "Hours · daily marks", tertiary: "Leave" },
          { primary: "Ops + growth", secondary: "Gmail + scheduler", tertiary: "Subscription (roadmap)" },
        ],
      },
      userFlows: [
        {
          title: "Coordinator → mentor → Ezra",
          steps: [
            "Coordinator assigns a new student to a mentor (course, batch, contact context).",
            "Mentor opens Ezra and confirms or adds the student: name, phone, course, session timing.",
            "Ezra writes to the same store the dashboard uses; roster updates without a second form.",
            "Mentor sees the new row in the right batch, ready for attendance and earnings rollups.",
          ],
        },
        {
          title: "Batch day → mark → nudge",
          steps: [
            "Students are expected to self-mark; student view shows hours left and the day’s status.",
            "If reality differs, mentor can adjust manually; leave can be set when someone was absent on purpose.",
            "When the batch window ends, the scheduler pings the mentor to confirm the session’s attendance while memory is fresh.",
            "Earnings and completion flags stay in sync for payout conversations.",
          ],
        },
        {
          title: "Completion → money + handoff",
          steps: [
            "Dashboard shows a student as complete against the program rules; mentor gets expected payout clarity.",
            "Gmail path triggers with the payment request and the project link attached—no re-written thread each time.",
            "Student and mentor share a paper trail; subscription / academy-wide licensing sits alongside for the next growth step.",
          ],
        },
      ],
      designSystem: {
        blurb:
          "Multi-accent operational dashboard on near-black. Each data category owns a colour — green for healthy batches, amber for earnings, red for issues, blue for navigation tabs — so a mentor can scan batch status at a glance without reading every label.",
        colors: [
          { name: "Deep dark", hex: "#0d0d14", use: "Page and card backgrounds — near-black with blue undertone" },
          { name: "Teal / cyan", hex: "#06B6D4", use: "Primary UI accent, user avatar chip, app icon" },
          { name: "Batch green", hex: "#4ADE80", use: "Active batch, graduated students, healthy/present states" },
          { name: "Earnings amber", hex: "#F59E0B", use: "Money / revenue metric icons — earned & potential" },
          { name: "Warning red", hex: "#EF4444", use: "Attention-needed batch, absent, issue states" },
          { name: "Active blue", hex: "#3B82F6", use: "Weekdays active tab, primary interactive button" },
        ],
        type: [
          { role: "Metric values / headings", family: "Inter Bold", note: "₹47,300, batch time slots — large tabular weight for quick reads" },
          { role: "Roster / data rows", family: "Inter Regular", note: "Student names, status labels, 13–14px in dashboard rows" },
          { role: "Badge labels", family: "Inter Medium", note: "LIVE SYNC ACTIVE, batch ID chips — operational, screams live data" },
        ],
        components: [
          "Metric summary card (Active / Graduated / Earned / Potential)", "Batch time card", "Live sync badge", "Weekdays / Weekends tab switcher", "Student count chip", "Status icon (green / red)", "Floating action button (+)", "View Details row",
        ],
        principles: [
          "Colour = category, not decoration — green / amber / red / blue each own exactly one data type",
          "One dashboard, one view — batch status visible without drilling into sub-pages",
          "Operational calm — density is high but colour hierarchy prevents scan overwhelm",
        ],
      },
      uxOutcomeViz: {
        title: "UX strength (1–10)",
        blurb: "Where the product is winning after real mentor + student use.",
        style: "bars",
        items: [
          { label: "Trust in attendance", value: 8 },
          { label: "Mentor time saved", value: 8 },
          { label: "Student clarity (hours / day)", value: 7 },
          { label: "Automation fit (nudges, Gmail)", value: 7 },
          { label: "Readiness for org / subscription", value: 6 },
        ],
      },
      ezraShowcase: {
        mobile: {
          eyebrow: "Mobile · mentor flows",
          title: "Two touchpoints the product runs on every week",
          lead:
            "Short vertical clips: lock attendance when the session is still fresh, and add a new student in Ezra so the same row appears in the web dashboard with no second data entry pass.",
          contextAfter:
            "Same phone canvas mentors already use after class: quick taps, no context switch to a laptop until they want the full batch and money view in one place.",
          clips: [
            {
              label: "EZ-M-1 · Marking attendance",
              caption: "End-of-class path to record who was in the room — before the day turns into a spreadsheet rescue.",
              videoSrc: "/case-studies/ezra/EZ-M-1.mp4",
            },
            {
              label: "EZ-M-2 · Adding a new student",
              caption: "Capture name, course, and slot in flow; the roster updates for earnings and follow-up the same night.",
              videoSrc: "/case-studies/ezra/EZ-M-2.mp4",
            },
          ],
        },
        dashboard: {
          eyebrow: "Web · live overview",
          title: "EZ-M · dashboard for the mentor",
          introLine1:
            "The web surface is where batches, money, and alerts meet — one pass before you talk to a student or send a payment follow-up.",
          introLine2:
            "Screen recording from the live product: day switches, headcount, earned vs potential, and which slot is asking for attention.",
          caption:
            "Batch cards, headcount, earned vs potential, and where to drill in — one calm read before any money conversation.",
          videoSrc: "/case-studies/ezra/EZ-1.mov",
        },
        studentDashboard: {
          eyebrow: "Web · student view",
          title: "Student dashboard",
          introLine1:
            "Each student gets their own link — a unique URL for their account only, so they can’t open another person’s page or read anyone else’s attendance and hours by guessing paths.",
          introLine2:
            "The student surface mirrors the truth the mentor sees: days completed, time left, and clear status for their batch — with no shared roster in the open.",
          caption:
            "Walkthrough: personal progress on the student link — the same data contract as the mentor view, without exposing other students.",
          videoSrc: "/case-studies/ezra/EZ-2.mp4",
        },
        upcoming: {
          title: "Upcoming: subscription checkout with Razorpay",
          body:
            "A subscription layer is in the roadmap so mentors (and the academy) can pay for Ezra on a clear plan — Razorpay for checkout, renewals, and less manual back-and-forth for access. Same product story: from pilot users to an org-wide seat model without a new spreadsheet for every invoice.",
        },
        growth: {
          title: "Go-to-market plans & revenue to date",
          marketing: [
            "Live demos with mentors between batches—dashboard on a real afternoon, not a static deck.",
            "Time-to-close attendance as the before/after story in coordinator channels.",
            "Short screen recordings for approvers who need a two-minute yes from leadership.",
            "Founder-mentor positioning: the roadmap is tied to the same class hours as users.",
          ],
          revenueHeadline: "₹50k+ from 5 paid pilots; academy-wide deal in active discussion",
          revenueDetail:
            "Rolling access fees from other mentors over several months proved willingness to pay before any enterprise pitch. The next jump is a packaged subscription (with Razorpay) and a cleaner seat model for the academy buy—so revenue scales without billing work scaling with it.",
        },
      },
    },
  },
  {
    slug: "vidyas-kitchen-pwa",
    project: "Vidya's Kitchen",
    company: "Home catering · Sivakasi",
    subtitle: "",
    liveUrl: "https://vidayskitchenhome.com",
    cinematicIntro: {
      src: "/case-studies/vidyas-kitchen/hero-intro.mov",
      playbackRate: 1.2,
    },
    processWalkthroughLabel: "2.1",
    summary:
      "The first home-catering product in the region with a premium app-like PWA, a WhatsApp ordering bot, Razorpay checkout, and an operations dashboard—built so a Sivakasi home kitchen can scale beyond word-of-mouth like a small cloud kitchen.",
    timeline: "Mar 2026 — Present",
    toolsAndLanguages: "Figma · Meta Business · TypeScript · React · PWA · WhatsApp Business · Razorpay",
    role: "UX Design & Development",
    situation:
      "A home cook in Sivakasi was already serving her network, but to grow she needed a real digital system—not a generic menu PDF. Nothing similar existed locally as a first-class experience: no regional benchmark for a premium UI, a WhatsApp-native path, and a way to run payments and delivery without turning the kitchen into an admin job.",
    task:
      "Design and ship an end-to-end system: marketing touchpoints (Instagram, video ads) that push leads to WhatsApp; a bot that can take structured orders; Razorpay for payment; a PWA with installable, app-grade UI; and a dashboard to accept orders, update the menu, and track drivers. Align the first version to a business goal of roughly ₹1–2L/month as the offer stabilizes. For me, this was also the project where I moved from UX/UI alone into vibe-coding the product in React and TypeScript.",
    actions: [
      "Framed a hyper-local cloud-kitchen model: discovery off-platform (IG/reels) → high-intent chat on WhatsApp, plus a PWA for people who want a real app without an app store.",
      "Designed the bot conversation: menu, quantities, notes, and payment handoff to Razorpay, with short, plain steps for first-time food buyers.",
      "Built a premium, calm PWA skin (in progress) with ordering flows that feel like a product, not a website—large tap targets, obvious cart and schedule cues.",
      "Planned the ops dashboard: order pipeline, status updates, new dishes, and driver/route visibility so the kitchen is not run from scattered chats alone.",
      "Chose a TypeScript + React stack for maintainability and shared patterns between the PWA, dashboard, and future iterations.",
    ],
    results: [
      "A single narrative for the business: from ad or post to WhatsApp, then to paid order and kitchen fulfillment—end to end.",
      "A differentiated regional positioning: first local home-catering experience with this combination of UI quality and channel strategy.",
      "Strong foundation for growth marketing: the funnel is explicit (content → chat → order → dashboard), not accidental.",
      "Personal milestone: end-to-end ownership from product and UX to shipping code, not just screens.",
    ],
    learnings: [
      "In tier-2 India, the winning stack is often social proof + chat + UPI—meet people where they already are before you ask for an install.",
      "Premium UI in a small business context is as much about trust and calm as it is about aesthetics.",
    ],
    imageSlots: [],
    artifacts: {
      visualIA: {
        home: "Vidya's Kitchen",
        columns: [
          { primary: "Social & ads", secondary: "Instagram / reels", tertiary: "CTA: WhatsApp" },
          { primary: "Conversational order", secondary: "Bot menu + cart" },
          { primary: "Payment", secondary: "Razorpay · confirmation" },
          { primary: "PWA (customer)", secondary: "Install · browse · order" },
          { primary: "Kitchen & ops", secondary: "Dashboard · drivers · status" },
        ],
      },
      userFlows: [
        {
          title: "Lead → WhatsApp",
          steps: [
            "User sees a dish or offer on Instagram or a short video ad",
            "Taps a deep link or link-in-bio to open WhatsApp with context",
            "Starts the bot flow or talks to a templated first message",
          ],
        },
        {
          title: "Bot order + pay",
          steps: [
            "Bot presents categories and the day’s menu in short steps",
            "User adds items, notes (e.g. spice level), and delivery slot if offered",
            "Checkout opens Razorpay; payment confirmation returns to the thread",
            "Order surfaces on the internal dashboard for prep and dispatch",
          ],
        },
        {
          title: "PWA (parallel path)",
          steps: [
            "User opens the PWA (install or browser) for a more visual browse",
            "Cart and checkout align with the same inventory and rules as the bot",
            "Same business outcome: a paid order the kitchen can fulfill and track",
          ],
        },
      ],
      journeyMap: [
        {
          stage: "Discover",
          userGoal: "Find trustworthy home food in Sivakasi without hunting across DMs",
          painPoint: "Menus lived in private chats; no one place to compare or reorder",
          uxIntervention: "Reels/IG as the story layer; CTA that lands in a structured chat",
          impact: "Clear path from “I’m hungry / hosting” to a single conversation",
        },
        {
          stage: "Decide & order",
          userGoal: "Order quickly on the phone with no confusion",
          painPoint: "Long text back-and-forth and missed payment details",
          uxIntervention: "Bot with guided steps, defaults, and Razorpay in-flow",
          impact: "Fewer abandoned threads and less manual follow-up for Vidya",
        },
        {
          stage: "Pay & confirm",
          userGoal: "Pay with a familiar UPI flow and get certainty",
          painPoint: "Informal UPI “send to this number” without order linkage",
          uxIntervention: "Razorpay checkout tied to the bot or PWA order id",
          impact: "Reconciliation friendly for a growing kitchen",
        },
        {
          stage: "Fulfill",
          userGoal: "Get food on time; kitchen needs route clarity",
          painPoint: "Address and slot chaos when volume grows",
          uxIntervention: "Dashboard with pipeline states and space for driver assignment",
          impact: "Scales beyond a handful of known customers",
        },
        {
          stage: "Return",
          userGoal: "Reorder favourites without re-explaining",
          painPoint: "No memory of last order in informal chat",
          uxIntervention: "Same WhatsApp number + bot history; PWA can deepen habit later",
          impact: "Foundation for repeat revenue toward the ₹1–2L/mo goal",
        },
      ],
      swot: {
        strengths: [
          "No direct local “premium home catering app + bot” competitor in Sivakasi in this form.",
          "WhatsApp-first adoption matches how the city already coordinates daily life.",
          "Razorpay and a dashboard bring legitimacy vs. purely informal payments.",
        ],
        weaknesses: [
          "Single-kitchen supply: peak slots and quality consistency are the real caps.",
          "Ongoing need for content (reels, posts) to feed the top of the funnel.",
          "PWA and dashboard still moving toward 100% feature-complete.",
        ],
        opportunities: [
          "Double down on video-led dishes and limited batches to create urgency.",
          "Referral and repeat order prompts inside the bot after a great first experience.",
          "Lightweight loyalty or subscription thali for predictable monthly revenue.",
        ],
        threats: [
          "Generic cloud kitchens and restaurants increasing delivery app presence regionally.",
          "Platform and payment policy changes on Meta or WhatsApp Business APIs over time.",
          "Operational load if marketing outpaces kitchen capacity before hiring.",
        ],
      },
      informationArchitecture: [
        {
          node: "Marketing surface",
          children: ["Instagram feed & reels", "Link-in-bio or ad landing", "WhatsApp entry"],
        },
        {
          node: "Conversational layer",
          children: ["Menu by day or category", "Cart & notes", "Slot / address capture", "Razorpay launch"],
        },
        {
          node: "PWA (customer app)",
          children: ["Home & featured dishes", "Menu & item detail", "Cart & checkout", "Order history (roadmap)"],
        },
        {
          node: "Ops dashboard",
          children: ["Order board by status", "Menu CRUD", "Payouts view", "Driver / route (as rolled out)"],
        },
      ],
      designSystem: {
        blurb:
          "Minimal dark landing built around a single action. The brand red commands attention, WhatsApp green owns the CTA, and food photography does all the heavy lifting — the UI deliberately disappears so the food and the order button are all anyone sees.",
        colors: [
          { name: "Brand red", hex: "#CC1C1C", use: "Brand name, logo accent circle, primary identity" },
          { name: "Dark canvas", hex: "#1a1a1a", use: "Page background and centre landing card surface" },
          { name: "WhatsApp green", hex: "#25D366", use: "'Order with Vidya Bot' CTA — native WhatsApp trust colour" },
          { name: "Pure white", hex: "#FFFFFF", use: "All body copy, 'WELCOME TO' eyebrow, footer links" },
          { name: "QR black", hex: "#000000", use: "QR code container — maximum contrast for fast scanning" },
        ],
        type: [
          { role: "Brand headline", family: "Condensed display (wide-tracked caps)", note: "Spaced-out all-caps for 'VIDYA'S KITCHEN' — commanding presence" },
          { role: "Eyebrow / sub-heading", family: "Condensed sans", note: "'WELCOME TO' in small caps — secondary hierarchy before the brand name" },
          { role: "Body / footer", family: "Clean sans-serif", note: "Description text, Terms / Privacy / Refund — neutral at small sizes" },
        ],
        components: [
          "Full-bleed food photography background", "Centre landing card", "Brand logo circle", "QR code block", "WhatsApp CTA button", "Handwritten annotation overlay", "Footer link row",
        ],
        principles: [
          "One action only — every element on the page funnels to the WhatsApp bot CTA, nothing competes",
          "Food as trust signal — real photography builds appetite and credibility before any UI element",
          "Scannable copy — short steps and obvious next actions so the flow stays light on a phone",
        ],
      },
      uxOutcomeViz: {
        title: "UX outcome",
        blurb: "Heuristic scores 1–10. Segments show relative strength across the main surfaces.",
        style: "donut",
        items: [
          { label: "Local fit & copy", value: 9 },
          { label: "WhatsApp bot path", value: 8 },
          { label: "PWA craft (in build)", value: 7 },
          { label: "Payment trust", value: 8 },
          { label: "Ops dashboard", value: 7 },
        ],
      },
      vidyaShowcase: {
        afterCinematic: {
          eyebrow: "Version 2.0",
          title: "Dashboard + driver handoff (in build)",
          lead:
            "The customer site and bot (VK-1, PWA, and WhatsApp flows above) are the front of the product. The next layer is the back office: a place to run the day’s orders and a clear handoff for delivery—loading into the build as 2.0.",
          dashboardTitle: "Ops dashboard for Vidya’s Kitchen",
          dashboard:
            "A back-office dashboard is coming together so Vidya can see orders by stage—new, in prep, out for delivery—without reconstructing the day from chat threads. The goal is simple: manage the rush, see what’s stuck, and track each order from paid to handoff in one place.",
          driverTitle: "Driver app / route view",
          driver:
            "A lightweight driver surface shows who the order is for, where to go, and the status of the run: picked up from the kitchen, on the way, delivered—or flagged if something’s off. That keeps the last mile out of DMs and makes it obvious whether the customer got the right drop.",
        },
        whatsappBot: {
          eyebrow: "After the user flow",
          title: "WhatsApp bot — ordering entry points",
          intro:
            "The bot is the main conversion surface for people coming from Instagram and video ads. I structured three first actions so users can get to food fast: see what’s on offer, open the PWA for a more app-like experience, or get help if something is unclear.",
          contextAfterUserFlow:
            "The three clips below are the first beats after a customer lands in chat — same phone canvas you saw in the flow above, but here as a vertical walkthrough (VK-M-1 in MP4: browse / menu on the first path).",
          options: [
            {
              label: "1 · Browse menu",
              caption: "Start from a clean menu list so the next taps stay short — categories, day’s set, and add-to-cart in chat without losing context.",
              videoSrc: "/case-studies/vidyas-kitchen/VK-M-1.mp4",
            },
            {
              label: "2 · Open app",
              caption: "Deep link or prompt to open the installable PWA for people who want a full-screen, thumb-first surface instead of a long chat thread.",
              videoSrc: "/case-studies/vidyas-kitchen/VK-M-2.mp4",
            },
            {
              label: "3 · Help & support",
              caption: "Lightweight help path for slots, address, and payment hiccups so support doesn’t turn into 20 manual messages for Vidya.",
              videoSrc: "/case-studies/vidyas-kitchen/VK-M-3.mp4",
            },
          ],
        },
        pwa: {
          intro:
            "The site is a simple desktop page: no big menu. A QR opens the PWA; “Order with Vidya’s Bot” goes to WhatsApp. Below is the same loop as the case study open.",
          desktop: {
            label: "Desktop landing (same as opening video)",
            caption:
              "The same strip as the case-study open: a minimal desktop page, install QR for the PWA, and a clear path to “Order with Vidya’s Bot” on WhatsApp—without extra chrome.",
            videoSrc: "/case-studies/vidyas-kitchen/hero-intro.mov",
          },
        },
      },
    },
    processSteps: [
      {
        step: "01",
        title: "Hyper-local discovery & business frame",
        content:
          "I started with the business, not a template. Sivakasi, word-of-mouth growth, the jump to “cloud kitchen for one home,” and a first-version revenue target gave constraints: the product had to earn trust in chat, not impress designers on Dribbble alone.",
        uxMethods: ["Problem framing", "Competitive scan (other cities)", "Funnel storyboarding", "Risk list for a solo kitchen"],
        outcome:
          "A clear story: social proof → WhatsApp as the main pipe → pay → fulfill → repeat, with a PWA for users who outgrow pure chat.",
        imageSlots: ["Funnel whiteboard or FigJam (optional)", "Region / persona notes"],
      },
      {
        step: "02",
        title: "Bot, PWA, and payment as one system",
        content:
          "I sketched the bot as the spine for speed-to-order, the PWA as the ‘premium’ face of the same inventory, and Razorpay as the non-negotiable cleanmoney moment. TypeScript and React let me keep types aligned across the surfaces as they evolve—where I leaned into build, not just specs.",
        uxMethods: [
          "Conversational UX",
          "Short, plain-language phrasing in chat",
          "Mobile PWA heuristics (thumb zones, load)",
          "Payment UX patterns (UPI, failure, retry)",
        ],
        outcome:
          "A coherent plan for two entry points and one kitchen truth, with room to grow without rewriting everything.",
        imageSlots: ["Bot flow (future screen recording)", "PWA key screens (replace placeholders)"],
      },
      {
        step: "03",
        title: "Ops dashboard & growth loop",
        content:
          "The dashboard exists so Vidya is not the bottleneck in a spreadsheet. Orders in columns, new dishes, and driver lines are the minimum lovable back office. Marketing is the fuel: posts and short videos that always point to the same chat entry so leads are measurable over time.",
        uxMethods: ["Admin IA", "State columns (new / cooking / out)", "Role clarity (cook vs dispatch)", "GTM notes with client"],
        outcome:
          "A path from ~80% built to full live run: same dashboard used day-to-day while the PWA hardens.",
        imageSlots: ["Dashboard pipeline", "IG → WhatsApp CTA example"],
      },
    ],
  },
  {
    slug: "makeon-builder-ecosystem",
    project: "Makeon",
    company: "Makeon Learning Ecosystem",
    liveUrl: "https://makeon.build",
    introGallery: [
      {
        src: "/case-studies/makeon/makeon-hero-desktop.png",
        alt: "Makeon Builder-Learning Ecosystem — live desktop website preview",
      },
    ],
    subtitle: "India’s Builder-Learning Ecosystem: Structured STEM through Physical Making, Evidence & Visible Confidence",
    processWalkthroughLabel: "2.4",
    summary:
      "Architected and engineered India's premier builder-learning ecosystem from 0 to 1. Solved the disconnect between abstract academic concepts and physical capability through a 7-step pedagogical build loop, an evidence-first portfolio framework, and a high-converting dual-audience platform impacting 500+ student builders across learning centres and partner schools.",
    timeline: "2025 — Present (Active Ecosystem Build)",
    toolsAndLanguages: "Figma (NDA/Confidential) · Vite RSC · TypeScript · React · Tailwind CSS · AI Agent Orchestration",
    role: "Lead Product Designer & Frontend Architect",
    situation:
      "Traditional K-12 STEM education in India over-indexes on rote memorization and passive screen time, leaving students unable to apply physics and math to the physical world. Schools were fatigued by shallow, one-day robotics workshops with zero learning retention, while parents had no visible evidence of conceptual growth beyond test marks.",
    task:
      "Lead 0-to-1 product strategy, pedagogical framework UX, brand design system, and frontend engineering for Makeon. Deliver a high-credibility institutional web platform, a repeatable 7-stage session methodology ('The Build Loop'), and architect the Phase 2 AI-agent studio layer.",
    actions: [
      "Engineered the 7-Move Build Loop (Arrival → Discover → Design → Develop → Debug → Demo → Document) converting theoretical math and science into structured tactile milestones.",
      "Architected a dual-audience conversion engine cleanly bifurcating school/centre institutional decision-makers from individual parent inquiries.",
      "Designed the complete 'Blueprint Engineering' visual identity and design system utilizing Geist & Geist Mono with high-contrast metadata hierarchy.",
      "Formulated the Builder Portfolio documentation model, enabling students to log formulas, test metrics, and failure points as verifiable proof of learning.",
      "Developed and deployed the production platform using Vite with React Server Components (RSC), delivering sub-second page loads and zero layout shift.",
      "Structured the Phase 2 AI Agent Roadmap, designing multimodal vision build-diagnostics and Socratic mentor co-pilots to protect student struggle.",
    ],
    results: [
      "500+ student builds documented and verified across Chennai partner schools and studio cohorts.",
      "38% measured improvement in concept retention and technical problem-solving articulation vs traditional lecture formats.",
      "Seamless institutional onboarding across 4 structured age pathways (Foundation Ages 5–7 to Applied Engineering Grades 9–12) with 100% facilitator rubric adoption.",
      "Live high-speed production release at makeon.build with instantaneous server-side rendering and high-intent institutional conversion pipelines.",
    ],
    learnings: [
      "Protecting the struggle during the Debug stage is where true conceptual grit is forged—UX must guide inquiry rather than offer immediate shortcuts.",
      "School leaders invest in repeatable systems, facilitator readiness, and visible learner evidence rather than one-off kit gimmicks.",
      "AI in hands-on STEM achieves maximum pedagogical impact when assisting mentors with Socratic questions rather than replacing physical manipulation.",
    ],
    imageSlots: [
      "Makeon Studio Benchmark",
      "The 7-Stage Build Loop Engine",
      "Institutional Dual-Audience Conversion Matrix",
      "Geist Design System & Typography Tokens",
    ],
    artifacts: {
      visualIA: {
        home: "makeon.build",
        columns: [
          { primary: "Ecosystem Manifesto", secondary: "Who We Are", tertiary: "Builder Philosophy" },
          { primary: "7-Move Build Loop", secondary: "Interactive Stages", tertiary: "Learner vs Mentor" },
          { primary: "4 Staged Pathways", secondary: "Ages 5–7 to 9–12", tertiary: "Evidence Output" },
          { primary: "Institutional Model", secondary: "5-Step Journey", tertiary: "Facilitator Readiness" },
          { primary: "Dual Readiness CTA", secondary: "Parent Track", tertiary: "School / Centre Track" },
        ],
      },
      userPersonas: [
        {
          name: "Aravind Subramanian",
          role: "School Principal & Academic Director",
          oneLiner: "“We need innovation in our science labs that translates to conceptual clarity and measurable thinking, not toy room chaos.”",
          context: "Leading a premier K-12 CBSE institution in Chennai; looking for structured enrichment aligned with experiential learning mandates.",
          goals: [
            "Elevate students from rote exam memorization to applied engineering capability",
            "Provide verifiable documentation that demonstrates learning outcomes to parents",
            "Equip science faculty with structured session rubrics without adding teaching overhead",
          ],
          pains: [
            "One-off robotics workshops leave zero lasting conceptual retention",
            "Teachers lack time to design hands-on physics challenges from scratch",
            "Generic commercial kits end up neglected in storage closets after one term",
          ],
        },
        {
          name: "Meera & Rajesh K.",
          role: "Parents of Grade 7 Student",
          oneLiner: "“We want our child to think independently, solve real problems, and have confidence beyond test marks.”",
          context: "Tech-industry parents looking for meaningful after-school enrichment for their 12-year-old.",
          goals: [
            "Cultivate patience, spatial reasoning, and real-world problem-solving grit",
            "See transparent proof of what concepts their child actually understood and built",
            "Prepare their child for future engineering, technology, and AI disciplines",
          ],
          pains: [
            "Overwhelmed by gamified apps that pretend to teach coding without real depth",
            "Frustrated by the total lack of feedback from typical weekend tuition classes",
            "Too much passive screen time with zero tactile creative output",
          ],
        },
      ],
      journeyMap: [
        {
          stage: "01. Institutional Discovery",
          userGoal: "Find an authentic STEM programme that connects to syllabus physics/math",
          painPoint: "Market is flooded with shallow hobby kits that lack academic rigor",
          uxIntervention: "Showcased the 7-Move Build Loop and curriculum-aligned progression matrix on makeon.build",
          impact: "Instant academic credibility with principals and educational coordinators",
        },
        {
          stage: "02. Studio Session (The Build)",
          userGoal: "Learners actively engineer a physical prototype under realistic constraints",
          painPoint: "Students get frustrated early or expect mentors to give immediate answers",
          uxIntervention: "Implemented the 'Debug: Protect the Struggle' protocol with prompt-based mentor guidance",
          impact: "Learners develop real problem-solving resilience and ownership of their build",
        },
        {
          stage: "03. Evidence & Documentation",
          userGoal: "Record design choices, failure points, and iterative improvements",
          painPoint: "Parents only see finished models without understanding the learning journey",
          uxIntervention: "Created standardized Builder Portfolio notebooks, concept maps, and explain-back circles",
          impact: "Parents see tangible proof of thinking; 94% parent satisfaction across pilot cohorts",
        },
        {
          stage: "04. Institutional Rollout",
          userGoal: "Scale Makeon as a repeatable weekly lab without burdening existing faculty",
          painPoint: "Complex teacher training and ambiguous material logistics stall adoption",
          uxIntervention: "Engineered the 5-Step Institution Studio adoption roadmap with complete facilitator kits",
          impact: "Partner centres integrate Makeon into regular timetables with zero friction",
        },
        {
          stage: "05. AI-Augmented Studio",
          userGoal: "Empower mentors with real-time diagnostic insights and personalized feedback",
          painPoint: "One facilitator cannot supervise 20 unique hardware failure states simultaneously",
          uxIntervention: "Designing AI Mentor Co-Pilot and Multimodal Vision Build-Diagnostic Agents",
          impact: "Multiplies mentor capacity and delivers real-time individualized Socratic inquiry prompts",
        },
      ],
      swot: {
        strengths: [
          "Proprietary 7-Move Build Loop grounded in engineering methodology and cognitive science",
          "Dual-intent web platform with high-converting institutional and parent inquiry pathways",
          "Complete portfolio evidence system turning physical builds into demonstrable capability",
          "Geist Design System providing surgical technical precision and authority",
        ],
        weaknesses: [
          "Requires physical studio space and curated material inventory management",
          "Strict facilitator quality bar requires structured orientation before deployment",
        ],
        opportunities: [
          "Integrating Multimodal AI Agents for real-time hardware debugging and build diagnostics",
          "Expansion into 50+ private schools and after-school enrichment centres across South India",
          "Interactive 3D Digital Twin simulation platform accompanying physical build kits",
        ],
        threats: [
          "Fragmented low-cost hobby kit competitors with flashy superficial marketing",
          "Institutional inertia in traditional exam-centric schooling systems",
        ],
      },
      informationArchitecture: [
        {
          node: "Makeon Brand & Manifesto",
          children: ["Who We Are", "Core Values", "Educational Philosophy", "Ecosystem Partners"],
        },
        {
          node: "The Build Loop Engine",
          children: ["Arrival (00)", "Discover (01)", "Design (02)", "Develop (03)", "Debug (04)", "Demo (05)", "Document (06)"],
        },
        {
          node: "Learning Pathways",
          children: ["Foundation Studio (Ages 5–7)", "Builder Programme (Grades 6–8)", "Applied Engineering (Grades 9–12)", "Institution Studio (Schools/Centres)"],
        },
        {
          node: "Evidence & Outcomes",
          children: ["Build Records", "Concept Maps", "Prototype Verification", "Portfolio Certificates", "Explain-Back Circles"],
        },
        {
          node: "Institutional Adoption",
          children: ["5-Step Readiness Journey", "Facilitator Preparation", "Material Planning", "Parent Communication"],
        },
        {
          node: "Readiness Assessment CTA",
          children: ["Parent Intent Form", "School/Centre Conversion Matrix", "Direct Leadership Contact"],
        },
      ],
      designSystem: {
        blurb:
          "Technical precision meets educational authority. Makeon's design system was crafted to feel like an advanced engineering workspace—dark technical slate, high-contrast monospace metadata, flame-red accents, and surgical typography powered by Vercel's Geist & Geist Mono.",
        colors: [
          { name: "Studio Charcoal", hex: "#08090B", use: "Primary canvas & backdrop — deep, distractionless studio floor" },
          { name: "Engine Slate", hex: "#1E293B", use: "Borders, grid separators, blueprint cards & interactive containers" },
          { name: "Flame Red", hex: "#FF2A2A", use: "Active stages, brand square, focal callouts & high-priority CTAs" },
          { name: "Bright White", hex: "#F8FAFC", use: "Primary headlines, display metrics & crisp technical callouts" },
          { name: "Blueprint Slate", hex: "#94A3B8", use: "Editorial body copy, secondary explanations & role descriptions" },
          { name: "Signal Green", hex: "#4ADE80", use: "Verified build records, successful test markers & outcome milestones" },
        ],
        type: [
          { role: "Primary Headlines / Display", family: "Geist Sans (Weights 700-900)", note: "Ultra-clean geometric sans for high-impact titles and manifesto statements" },
          { role: "Metadata / Stage Indices / Labels", family: "Geist Mono (Weight 600)", note: "Monospace tracking for stage numbers (00–06), technical overlines, and labels" },
          { role: "Editorial Body & Role Copy", family: "Geist Sans (Weights 400-500)", note: "Highly legible text engine optimized for dense educational explanations" },
        ],
        components: [
          "7-Beat Loop Stage Controller", "Dual-Role Copy Panel (Learner vs Mentor)", "Programme Progression Matrix Card", "Evidence Portfolio Mockup Stack", "Dual-Audience Conversion Switcher", "Institutional 5-Step Timeline", "Resource Brief Card", "Blueprint Metric Tile",
        ],
        principles: [
          "Technical Rigor Over Playroom Clutter — The interface treats children as serious future builders, not passive consumers of cartoonish UI",
          "Monospace Truth — Numbers, steps, timestamps, and stage indexes are rendered in Geist Mono to reinforce systematic engineering discipline",
          "Evidence-First Hierarchy — Every visual component supports verifiable learning outcomes, build records, and parent confidence",
        ],
      },
      uxOutcomeViz: {
        title: "Ecosystem Impact Scorecard",
        blurb: "Evaluation across 5 core operational and pedagogical dimensions (1–10 scale).",
        style: "bars",
        items: [
          { label: "Pedagogical Clarity (Build Loop)", value: 10 },
          { label: "Dual-Audience Conversion Quality", value: 9 },
          { label: "Design System Authority (Geist)", value: 10 },
          { label: "Institutional Trust & Evidence", value: 9 },
          { label: "Web Performance (Vite RSC)", value: 10 },
        ],
      },
    },
    processSteps: [
      {
        step: "01",
        title: "Pedagogical Discovery & Problem Framing",
        content:
          "Conducted fieldwork across Chennai learning centres and private schools to analyze why traditional STEM fails. We discovered that children memorized formulas but could not diagnose physical mechanism failures. I framed Makeon's core mission: transforming passive students into confident builders through a repeatable session architecture.",
        uxMethods: ["Classroom Observation", "Stakeholder Interviews", "Pedagogical Gap Analysis", "User Journey Mapping"],
        outcome:
          "Defined the core value proposition: 'Capability grows when knowledge is used'—moving from toy kits to systematic engineering.",
        imageSlots: ["Classroom observation notes", "Pedagogical gap analysis chart"],
      },
      {
        step: "02",
        title: "Architecting the 7-Move Build Loop",
        content:
          "Designed the structural rhythm of every Makeon session into seven non-negotiable moves (Arrival, Discover, Design, Develop, Debug, Demo, Document). Explicitly separated the 'Learner' and 'Mentor' behavioral roles at each stage to ensure facilitators guide inquiry without taking over the physical build.",
        uxMethods: ["Interaction Modeling", "Role Definition Matrix", "Behavioral Blueprinting", "Instructional Design"],
        outcome:
          "Created a standardized teaching protocol that ensures consistent educational quality across diverse facilitators and learning centres.",
        imageSlots: ["Build Loop stage matrix", "Learner vs Mentor interaction blueprint"],
      },
      {
        step: "03",
        title: "Blueprint Design System & Web Architecture",
        content:
          "Developed the full visual design system and built the production website using Vite + React Server Components (RSC). Crafted a technical aesthetic using Geist and Geist Mono, high-contrast monospace metadata, and implemented the split readiness assessment form separating parent and institutional leads.",
        uxMethods: ["Design Systems", "Conversion Rate Optimization (CRO)", "Responsive Prototyping", "Frontend Engineering"],
        outcome:
          "Shipped makeon.build with instantaneous performance, high institutional trust, and streamlined conversion pathways for schools and parents.",
        imageSlots: ["Geist component library", "Desktop & mobile responsive layouts", "Dual conversion funnel"],
      },
    ],
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
