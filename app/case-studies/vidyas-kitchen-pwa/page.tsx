import React from 'react';
import Link from 'next/link';
import HeaderV2 from '@/app/v2/components/HeaderV2';
import FloatingActionTriggers from '@/app/v2/components/FloatingActionTriggers';
import LenisProvider from '@/components/LenisProvider';

export const metadata = {
  title: "Vidya's Kitchen — UX/UI Case Study | Simon Santhosh",
  description: "Designing a Full-Stack Food Ordering Ecosystem for a Home Chef — Customer PWA, Admin Dashboard, Driver App & WhatsApp Bot.",
};

export default function VidyasKitchenCaseStudyPage() {
  return (
    <LenisProvider>
      <div className="min-h-screen bg-[#F4F4F0] text-black font-sans selection:bg-[#FAED00] selection:text-black antialiased relative">
        <HeaderV2 />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-24">
          {/* Back Navigation Bar */}
          <div className="mb-8">
            <Link
              href="/v2#work"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#FAED00] transition-all"
            >
              <span className="font-bold">←</span>
              <span>Back to Portfolio</span>
            </Link>
          </div>

          {/* Hero Header Card */}
          <header className="bg-white border-4 border-black p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#FAED00] border-b-2 border-l-2 border-black px-4 py-1.5 font-mono text-xs font-black uppercase tracking-widest">
              UX/UI Case Study
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4 pt-2">
              <span className="px-2.5 py-1 bg-[#0FE0E3] border-2 border-black text-black font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                PWA Ecosystem
              </span>
              <span className="px-2.5 py-1 bg-[#00C16A] border-2 border-black text-white font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Full-Stack Build
              </span>
              <span className="px-2.5 py-1 bg-[#FF462D] border-2 border-black text-white font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Food Tech
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none mb-4 uppercase">
              Vidya&apos;s Kitchen — UX/UI Case Study
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-snug">
              Designing a Full-Stack Food Ordering Ecosystem for a Home Chef
            </p>

            <div className="mt-8 pt-8 border-t-2 border-dashed border-black/30 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="bg-[#F4F4F0] p-3 border-2 border-black">
                <span className="text-gray-500 uppercase block font-bold mb-1">Timeline</span>
                <span className="font-black text-black text-sm">~6 months (design + dev)</span>
              </div>
              <div className="bg-[#F4F4F0] p-3 border-2 border-black">
                <span className="text-gray-500 uppercase block font-bold mb-1">Platform</span>
                <span className="font-black text-black text-sm">Mobile PWA + Web Dashboard</span>
              </div>
              <div className="bg-[#F4F4F0] p-3 border-2 border-black">
                <span className="text-gray-500 uppercase block font-bold mb-1">My Role</span>
                <span className="font-black text-black text-sm">Product Designer &amp; Developer</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <article className="space-y-12">
            
            {/* Project Overview */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 flex items-center gap-3 border-b-2 border-black pb-3">
                <span className="w-4 h-4 bg-[#FAED00] border-2 border-black inline-block"></span>
                Project Overview
              </h2>
              <div className="text-base sm:text-lg leading-relaxed text-gray-800 space-y-4 font-normal">
                <p>
                  <strong>Vidya&apos;s Kitchen</strong> is an end-to-end digital ordering platform built for a home chef business operating in India. The product spans four interconnected experiences: a <strong>customer-facing Progressive Web App (PWA)</strong>, an <strong>admin dashboard</strong> for the kitchen, a <strong>driver delivery app</strong>, and a <strong>WhatsApp bot</strong> for order communication. The project was designed and built from scratch, with the challenge being that the business had zero digital infrastructure — not even a website.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                  <div className="border border-black p-2.5 bg-[#FAF9F5]">
                    <strong>Timeline:</strong> ~6 months (design + development)
                  </div>
                  <div className="border border-black p-2.5 bg-[#FAF9F5]">
                    <strong>Platform:</strong> Web (Mobile-first PWA + Desktop Dashboard)
                  </div>
                  <div className="border border-black p-2.5 bg-[#FAF9F5]">
                    <strong>My Role:</strong> Product Designer &amp; Developer (solo build)
                  </div>
                </div>
              </div>
            </section>

            {/* Problem Statement */}
            <section className="bg-[#FF462D]/10 border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 flex items-center gap-3 border-b-2 border-black pb-3 text-black">
                <span className="w-4 h-4 bg-[#FF462D] border-2 border-black inline-block"></span>
                Problem Statement
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-900 mb-4 font-normal">
                A well-loved home chef with a loyal customer base was entirely dependent on phone calls and WhatsApp messages to take orders. This meant:
              </p>
              <ul className="space-y-2 mb-6 list-none font-medium">
                {[
                  "Orders were lost because of miscommunication over chat",
                  "No way to track which orders are pending, in preparation, or delivered",
                  "Delivery coordination happened through WhatsApp voice notes",
                  "No payment tracking — everything was handled informally",
                  "Customers had no way to view the menu or schedule meals in advance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white border-2 border-black p-3 text-sm sm:text-base font-semibold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[#FF462D] font-mono font-black text-base">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#FAED00] border-2 border-black p-4 font-bold text-black text-base sm:text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <strong>The goal was to design a digital-first system that felt as personal and warm as ordering from a friend, while being operationally robust enough to handle real business complexity.</strong>
              </div>
            </section>

            {/* Product Surface 1: Customer PWA */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="inline-block px-3 py-1 bg-[#0FE0E3] border-2 border-black text-black font-mono text-xs font-black uppercase mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Surface 01
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-6 border-b-2 border-black pb-3">
                Product Surface 1: Customer PWA
              </h2>

              <div className="mb-8 bg-[#F4F4F0] border-2 border-black p-5">
                <h3 className="font-mono text-xs uppercase font-black tracking-wider text-gray-600 mb-3">Design Goals</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-bold">
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Feel like a native iOS app, not a website
                  </li>
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Load instantly, work offline, installable on the home screen
                  </li>
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Require zero signup friction — OTP-only, no passwords
                  </li>
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Make the menu feel appetizing and browsable, not like a data table
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-black">Key UX Decisions</h3>
              
              <div className="space-y-6">
                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">1. Phone-First, OTP Authentication</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base">
                    Most food apps require email + password. For a home chef&apos;s audience (often older, non-tech-savvy users), we chose a single-step phone OTP flow powered by Firebase Auth. The login screen uses full-screen imagery and a single input with auto-advance — getting the user into the menu in under 10 seconds.
                  </p>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">2. Meal-Time Slot Scheduling</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base mb-3">
                    The biggest UX challenge: home-cooked food has fixed prep times. Customers must order at least 24 hours before their chosen delivery window. We designed a <strong>date + meal slot picker</strong> (Breakfast 7–9AM / Lunch 12–2PM / Dinner 7–9PM) that visually locks out past slots and greyed-out unavailable dates — making constraints feel like features, not limitations.
                  </p>
                  <div className="bg-white border-2 border-black p-3 space-y-1 text-sm">
                    <p><strong>Challenge:</strong> Communicating the 24-hour cutoff without making it feel like a restriction.</p>
                    <p><strong>Solution:</strong> Displayed a friendly helper text <em>&quot;Book at least 24 hours before the window starts (IST)&quot;</em> next to the picker, with slots automatically greyed out rather than showing error messages after the user selects them.</p>
                  </div>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">3. Cart &amp; Checkout Flow</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base mb-3">
                    The cart uses a <strong>bottom-sheet pattern</strong> with smooth spring animations (Framer Motion). Line items animate in/out with layout transitions. The checkout screen handles:
                  </p>
                  <ul className="list-disc pl-5 mb-3 text-sm sm:text-base space-y-1 text-gray-800">
                    <li>Delivery address with GPS-based autofill</li>
                    <li>&quot;Ordering for someone else&quot; toggle (recipient name + phone)</li>
                    <li>Promo code entry with animated expand/collapse — no page navigation required</li>
                    <li>Payment method selection: Razorpay online, UPI, or Cash on Delivery</li>
                  </ul>
                  <div className="bg-white border-2 border-black p-3 space-y-1 text-sm">
                    <p><strong>Challenge:</strong> Promo code UX — users expected instant feedback. There was an empty white box appearing during validation that confused users.</p>
                    <p><strong>Solution:</strong> Replaced the layout shift with a fixed-size input that transforms into a spinning loading indicator (<code className="font-mono bg-gray-100 px-1 border border-black/30">CircleNotch</code>) during validation, then smoothly cross-fades into a green &quot;Applied!&quot; confirmation state using <code className="font-mono bg-gray-100 px-1 border border-black/30">AnimatePresence mode=&quot;wait&quot;</code>.</p>
                  </div>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">4. Live Order Tracking</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base">
                    After placing an order, users see a real-time order status screen: Confirmed → Preparing → Out for Delivery → Delivered. When the driver is assigned, a <strong>live map</strong> appears showing the driver&apos;s GPS location updating in real-time via Supabase Realtime subscriptions. The map uses smooth marker animation so the pin glides rather than jumps.
                  </p>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">5. Progressive Web App (PWA)</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base mb-3">
                    The customer app is installable on Android and iOS. Installing it adds a home screen icon, removes the browser chrome, and enables push notifications for order updates. A custom <code className="font-mono bg-gray-100 px-1 border border-black/30">PwaInstallGuide</code> component detects the OS and device and shows the correct installation instructions with animated step-by-step UI — since iOS requires the &quot;Add to Home Screen&quot; flow via the Share menu.
                  </p>
                  <div className="bg-white border-2 border-black p-3 space-y-1 text-sm">
                    <p><strong>Challenge:</strong> Chrome blocks the native install prompt if another PWA from the same domain is already installed (the Driver App uses the same domain under <code className="font-mono bg-gray-100 px-1 border border-black/30">/driver</code>).</p>
                    <p><strong>Solution:</strong> Built separate manifest files (<code className="font-mono bg-gray-100 px-1 border border-black/30">/manifest.webmanifest</code> for customer, <code className="font-mono bg-gray-100 px-1 border border-black/30">/driver/manifest.webmanifest</code> for driver) served dynamically from different routes. Each PWA has a distinct start URL, scope, name, and icon — making Chrome treat them as separate apps.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Product Surface 2: Admin Dashboard */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="inline-block px-3 py-1 bg-[#FAED00] border-2 border-black text-black font-mono text-xs font-black uppercase mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Surface 02
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-6 border-b-2 border-black pb-3">
                Product Surface 2: Admin Dashboard
              </h2>

              <div className="mb-8 bg-[#F4F4F0] border-2 border-black p-5">
                <h3 className="font-mono text-xs uppercase font-black tracking-wider text-gray-600 mb-3">Design Goals</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-bold">
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Desktop-optimised but functional on mobile
                  </li>
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Real-time: the kitchen should never need to refresh the page
                  </li>
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Dark-themed — easy on the eyes during long kitchen shifts
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-black">Key UX Decisions</h3>

              <div className="space-y-6">
                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">1. Live Orders View</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base">
                    The primary screen shows all active orders in a card layout, updating in real-time via Supabase Realtime. Cards have colour-coded status strips (yellow = pending, blue = preparing, green = out for delivery). The kitchen can accept, reject, or advance an order with a single tap.
                  </p>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">2. Driver Management</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base mb-3">
                    The kitchen assigns a driver to each order from a list. Drivers are created with a name and phone number, and the kitchen sets a 4–6 digit PIN that the driver uses to log in to the Driver App.
                  </p>
                  <div className="bg-white border-2 border-black p-3 space-y-1 text-sm">
                    <p><strong>Challenge:</strong> After deleting a driver, the &quot;Save Drivers&quot; button was incorrectly appearing, suggesting there were unsaved changes.</p>
                    <p><strong>Solution:</strong> Synced the local <code className="font-mono bg-gray-100 px-1 border border-black/30">savedDrivers</code> state with the server-confirmed state immediately after deletion — preventing the diffing logic from flagging a mismatch.</p>
                  </div>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">3. Custom Modal System</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base">
                    All confirmation dialogs (delete driver, reject order, etc.) use a custom Framer Motion animated modal rather than native <code className="font-mono bg-gray-100 px-1 border border-black/30">window.confirm()</code>. This was important for two reasons: native browser alerts look out of place in a premium dark-themed UI, and they block the JavaScript thread, causing noticeable jank on mobile.
                  </p>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">4. Offers &amp; Promo Codes</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base mb-2">
                    A dedicated <code className="font-mono bg-gray-100 px-1 border border-black/30">/dashboard/offers</code> page lets the kitchen create both:
                  </p>
                  <ul className="list-disc pl-5 text-sm sm:text-base space-y-1 text-gray-800">
                    <li><strong>Auto-applied offers</strong>: festival/seasonal (e.g., &quot;Diwali Special — 10% off&quot;) that apply automatically within a date window</li>
                    <li><strong>Promo codes</strong>: customer-typed codes with optional per-customer limits and order minimums</li>
                  </ul>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">5. AI Pricing Agent</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base">
                    An integrated AI pricing assistant that analyses current menu pricing and can suggest price adjustments based on market context. Uses the Gemini API to generate structured pricing recommendations that the kitchen owner can review and apply.
                  </p>
                </div>
              </div>
            </section>

            {/* Product Surface 3: Driver App */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="inline-block px-3 py-1 bg-[#00C16A] border-2 border-black text-white font-mono text-xs font-black uppercase mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Surface 03
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-6 border-b-2 border-black pb-3">
                Product Surface 3: Driver App
              </h2>

              <div className="mb-8 bg-[#F4F4F0] border-2 border-black p-5">
                <h3 className="font-mono text-xs uppercase font-black tracking-wider text-gray-600 mb-3">Design Goals</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-bold">
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Extremely simple — drivers use it in one hand while driving
                  </li>
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> PIN-based login (no passwords for field workers)
                  </li>
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Should work as a PWA on a cheap Android phone
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-black">Key UX Decisions</h3>

              <div className="space-y-6">
                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">1. Phone + PIN Login with Auto-Lookup</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base mb-3">
                    The login screen first asks for a phone number. When the driver finishes entering 10 digits, the app <strong>automatically looks up the driver&apos;s name</strong> and displays it with a smooth fade-in animation. This gives instant reassurance (&quot;Yes, this is me&quot;) before asking for the PIN. The PIN field slides in beneath the name with a spring animation.
                  </p>
                  <div className="bg-white border-2 border-black p-3 space-y-1 text-sm">
                    <p><strong>Challenge:</strong> Making the login feel smooth and trustworthy, not clunky.</p>
                    <p><strong>Solution:</strong> Designed a single-page login flow where the name reveal and PIN entry happen in the same view with layered motion transitions — no page navigation, no jarring reloads.</p>
                  </div>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">2. PWA Installation</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base mb-3">
                    When the kitchen adds a new driver, they receive an automatic WhatsApp message:
                  </p>
                  <div className="bg-[#FAF9F5] border-l-4 border-black p-3 italic text-sm text-gray-800 font-mono mb-3">
                    &quot;Hello! You have been added as a delivery partner for Vidya&apos;s Kitchen. Please install our Driver App to receive your login PIN.&quot;<br />
                    <span className="text-black font-bold not-italic">[Install App button linking to <code className="text-xs bg-white px-1 border border-black/40">/driver</code>]</span>
                  </div>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base mb-3">
                    When the driver successfully logs in for the first time, the dashboard automatically shows a green <strong>&quot;App Installed&quot;</strong> badge next to their name.
                  </p>
                  <div className="bg-white border-2 border-black p-3 space-y-1 text-sm">
                    <p><strong>Challenge:</strong> Getting the PWA install prompt to appear on the driver&apos;s phone when the Customer PWA is already installed on the same domain.</p>
                    <p><strong>Solution:</strong> Since Chrome only allows one install prompt per scope, we configured the Driver PWA with a separate <code className="font-mono bg-gray-100 px-1 border border-black/30">/driver</code> scope and start URL. Manual install instructions (via the Chrome 3-dot menu → &quot;Add to Home Screen&quot;) are shown in a beautifully designed guide if the automatic prompt doesn&apos;t fire.</p>
                  </div>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">3. Delivery Flow</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base">
                    Drivers see their assigned orders, can tap to navigate to the address, update their GPS location in real-time (powering the customer&apos;s live tracking map), and mark COD as collected upon delivery.
                  </p>
                </div>
              </div>
            </section>

            {/* Product Surface 4: WhatsApp Bot */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="inline-block px-3 py-1 bg-[#25D366] border-2 border-black text-white font-mono text-xs font-black uppercase mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Surface 04
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-6 border-b-2 border-black pb-3">
                Product Surface 4: WhatsApp Bot
              </h2>

              <div className="mb-8 bg-[#F4F4F0] border-2 border-black p-5">
                <h3 className="font-mono text-xs uppercase font-black tracking-wider text-gray-600 mb-3">Design Goals</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-bold">
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Feel like a person, not a chatbot
                  </li>
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Customers who prefer WhatsApp to apps should be able to order entirely within the chat
                  </li>
                  <li className="flex items-center gap-2 bg-white border border-black p-2.5">
                    <span className="text-[#00C16A] font-black">✔</span> Order status updates should be proactive, not reactive
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-black">Key UX Decisions</h3>

              <div className="space-y-6">
                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">1. Dual-Channel Notifications</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base">
                    Every order event sends a WhatsApp message to the customer: placed, confirmed, out for delivery, delivered. Messages use WhatsApp&apos;s rich interactive templates — CTA buttons, reply buttons, and location pins — falling back to plain text if the Meta API rejects the rich format. The system uses Meta Cloud API as primary and Twilio as fallback.
                  </p>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">2. Driver Assignment Notification</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base">
                    When a driver is assigned to an order, the customer receives the driver&apos;s name, estimated time, and a <strong>WhatsApp message with a real-time tracking link</strong> — a URL that opens the live GPS tracking map in the app.
                  </p>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">3. Automated Rating Request</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base">
                    After delivery, the bot sends a 5-star rating prompt as a button reply message. The rating is stored in the database and surfaced in the dashboard summary.
                  </p>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">4. Re-engagement / Marketing</h4>
                  <p className="text-gray-800 leading-relaxed font-normal text-sm sm:text-base">
                    The marketing module can send broadcast messages to opted-in users about new dishes or seasonal menus — using WhatsApp&apos;s approved template message format to avoid being flagged as spam.
                  </p>
                </div>
              </div>
            </section>

            {/* Tech Specs Table */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-6 border-b-2 border-black pb-3 flex items-center gap-3">
                <span className="w-4 h-4 bg-[#0FE0E3] border-2 border-black inline-block"></span>
                Tech Specs
              </h2>

              <div className="overflow-x-auto border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <table className="w-full text-left border-collapse text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#FAED00] border-b-2 border-black font-mono text-xs uppercase tracking-wider">
                      <th className="p-3 sm:p-4 border-r-2 border-black w-1/3">Layer</th>
                      <th className="p-3 sm:p-4">Technology</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-black font-mono text-xs sm:text-sm">
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Framework</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Next.js 14 (App Router, Server Components + Server Actions)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Language</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">TypeScript (strict mode throughout)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Styling</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Vanilla CSS + CSS custom properties (no Tailwind)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Animations</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Framer Motion (layout animations, AnimatePresence, spring physics)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Database</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Supabase (PostgreSQL with Row Level Security)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Realtime</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Supabase Realtime (order status, driver GPS, dashboard live feed)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Authentication</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Firebase Auth (OTP for customers) + custom JWT (drivers + dashboard)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Payments</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Razorpay Payment Links + webhook verification</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">WhatsApp</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Meta Cloud API (primary) + Twilio (fallback)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Push Notifications</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Web Push API (VAPID) + Firebase Cloud Messaging</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Maps</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Browser Geolocation API + custom map rendering</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">AI</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Gemini API (pricing agent + AI-assisted copy)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">PWA</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Service Worker (custom <code className="text-xs bg-gray-200 px-1">sw.js</code>) + Web App Manifest per surface</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Deployment</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Vercel (edge functions + serverless API routes)</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Icons</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Lucide React + Phosphor Icons</td>
                    </tr>
                    <tr className="hover:bg-[#FAF9F5]">
                      <td className="p-3 sm:p-4 font-bold border-r-2 border-black bg-gray-50">Font</td>
                      <td className="p-3 sm:p-4 font-sans font-medium">Outfit (Google Fonts)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Key Challenges & How I Solved Them */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-6 border-b-2 border-black pb-3 flex items-center gap-3">
                <span className="w-4 h-4 bg-[#FF462D] border-2 border-black inline-block"></span>
                Key Challenges &amp; How I Solved Them
              </h2>

              <div className="space-y-6">
                {[
                  {
                    num: "1",
                    title: "One Domain, Two PWAs",
                    problem: "Chrome only allows one PWA install prompt per origin. Having the Customer App and Driver App on the same domain meant one always blocked the other.",
                    solution: "Separate manifests with separate scopes (/ for customer, /driver/ for driver), separate service worker registrations with scope-aware fetch handlers, and dynamic manifest serving from Next.js API routes."
                  },
                  {
                    num: "2",
                    title: "Real-Time Without WebSockets Code",
                    problem: "Live order tracking requires real-time updates across multiple clients simultaneously.",
                    solution: "Leveraged Supabase Realtime's PostgreSQL change listeners (supabase.channel().on('postgres_changes', ...)). When a driver updates their GPS coordinates in the orders table, all subscribed clients (customer's tracking screen, dashboard) receive the update within ~300ms — zero custom WebSocket infrastructure needed."
                  },
                  {
                    num: "3",
                    title: "WhatsApp Rich Messages With Graceful Fallback",
                    problem: "Meta's Cloud API rejects rich interactive messages for reasons that are hard to predict (image fetch failures, template not yet approved, etc.).",
                    solution: "Built a layered send strategy: try product catalog → try button message → try CTA URL → fall back to plain text. Every failure is logged and automatically demoted to the next tier. The customer always gets the message — just in the richest format that the API accepts at that moment."
                  },
                  {
                    num: "4",
                    title: "Offline-First Cart",
                    problem: "A food ordering app on mobile will inevitably face connectivity drops. Items added to cart should never be lost.",
                    solution: "Cart state is persisted to localStorage with a versioned schema (vk-cart-storage.ts). The cart hydrates from local storage on mount, so even after closing and reopening the app, the user's selections are intact."
                  },
                  {
                    num: "5",
                    title: "Smooth UI Under Slow Network",
                    problem: "OTP flows, promo code validation, and PIN lookups all involve server round-trips. Poor feedback causes users to tap repeatedly.",
                    solution: "Every interactive element shows a loading state immediately on tap (spinner replaces button content, input is disabled). Form states use optimistic UI where safe: the promo code field transitions to \"validating...\" instantly, with success/error animated in on resolution. Auth throttling prevents abuse while giving friendly \"please wait\" feedback."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-lg font-black uppercase tracking-tight mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-none bg-black text-white font-mono text-xs flex items-center justify-center font-bold">
                        {item.num}
                      </span>
                      Challenge {item.num}: {item.title}
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base font-normal">
                      <div className="bg-[#FF462D]/10 border border-black p-3">
                        <strong className="text-black font-bold font-mono text-xs uppercase block mb-1">Problem:</strong>
                        <p className="text-gray-900">{item.problem}</p>
                      </div>
                      <div className="bg-[#00C16A]/15 border border-black p-3">
                        <strong className="text-black font-bold font-mono text-xs uppercase block mb-1">Solution:</strong>
                        <p className="text-gray-900">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Metrics & Impact */}
            <section className="bg-[#00C16A]/10 border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-6 border-b-2 border-black pb-3 flex items-center gap-3 text-black">
                <span className="w-4 h-4 bg-[#00C16A] border-2 border-black inline-block"></span>
                Metrics &amp; Impact
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: "Ordering experience", desc: "Reduced order placement from ~10-minute WhatsApp exchanges to under 2 minutes" },
                  { title: "Driver onboarding", desc: "Automated — kitchen adds a driver, they receive WhatsApp + install the app in minutes" },
                  { title: "Zero signup friction", desc: "Phone OTP replaces email+password, reducing drop-off at registration" },
                  { title: "Real-time visibility", desc: "Kitchen knows order status without any phone calls" },
                  { title: "Installable", desc: "PWA means customers have an icon on their home screen, improving retention vs. browser bookmark" },
                ].map((metric, i) => (
                  <div key={i} className="bg-white border-2 border-black p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-mono text-xs font-black uppercase bg-[#FAED00] border border-black px-2 py-1 inline-block self-start sm:self-auto">
                      {metric.title}
                    </span>
                    <span className="font-medium text-sm sm:text-base text-gray-800">
                      {metric.desc}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* What I'd Do Differently */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-6 border-b-2 border-black pb-3 flex items-center gap-3">
                <span className="w-4 h-4 bg-[#FAED00] border-2 border-black inline-block"></span>
                What I&apos;d Do Differently
              </h2>

              <ol className="space-y-4 font-normal text-sm sm:text-base">
                <li className="border-2 border-black p-4 bg-[#FAF9F5]">
                  <strong className="font-bold text-black block mb-1">1. Design system first</strong>
                  <p className="text-gray-800">I built components as I needed them. A proper token-based design system upfront would have made theming and consistency faster.</p>
                </li>
                <li className="border-2 border-black p-4 bg-[#FAF9F5]">
                  <strong className="font-bold text-black block mb-1">2. Earlier usability testing with real users</strong>
                  <p className="text-gray-800">Some UX decisions (like the slot picker layout) were iterated based on feedback from the client rather than structured testing.</p>
                </li>
                <li className="border-2 border-black p-4 bg-[#FAF9F5]">
                  <strong className="font-bold text-black block mb-1">3. Progressive enhancement for WhatsApp</strong>
                  <p className="text-gray-800">The bot is powerful but complex. I&apos;d have started with the simplest notification-only flow and layered on ordering capability later.</p>
                </li>
              </ol>
            </section>

            {/* Footer Attribution Card */}
            <footer className="bg-black text-white p-6 sm:p-8 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#FAED00] font-bold mb-1">
                  Case Study Author
                </p>
                <p className="text-base font-bold">
                  Simon Santhosh — Product Designer &amp; Developer
                </p>
                <p className="text-xs text-gray-400 font-mono mt-0.5">
                  Project: Vidya&apos;s Kitchen | vidyaskitchenhome.com
                </p>
              </div>
              <Link
                href="/v2#work"
                className="px-5 py-2.5 bg-[#FAED00] text-black font-mono text-xs font-black uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                Back to Top ↑
              </Link>
            </footer>

          </article>
        </main>

        <FloatingActionTriggers />
      </div>
    </LenisProvider>
  );
}
