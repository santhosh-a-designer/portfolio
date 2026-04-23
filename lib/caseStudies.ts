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
  cinematicIntro?: { src: string; poster?: string };
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
    timeline: "Mar 2026 — Present",
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
    company: "FITA Academy — mentors & students",
    subtitle: "Attendance, earnings, and trust on one system",
    summary:
      "Ezra is the product I designed and built to fix a very human problem: at FITA Academy, mentoring students meant fragile attendance sheets, easy to lose or “reinterpret,” and no single place for mentors and learners to share the same truth. I channelled that into a dashboard for mentors—fed by a bot I named Ezra—plus a student view for hours and daily attendance, automations for batch-end reminders, Gmail-backed payment handoffs, and a path to subscription. What started as a tool for my own batches is now in discussion for an org-wide buy, with paid pilots from other mentors along the way.",
    timeline: "Mar 2026 — Present",
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
    slug: "ceass-pet-ecommerce",
    project: "CEaSS",
    caseStudyComingSoon: true,
    subtitle: "Pet Ecommerce with AI-assisted selling",
    summary:
      "A pet commerce platform in progress, designed from UX analysis to development with AI-agent support moments.",
    timeline: "Mar 2026 — Present",
    toolsAndLanguages: "Next.js · TypeScript · React · AI-assisted UX (in build)",
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
