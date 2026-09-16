import React from 'react';
import Link from 'next/link';
import HeaderV2 from '@/app/v2/components/HeaderV2';
import FloatingActionTriggers from '@/app/v2/components/FloatingActionTriggers';
import LenisProvider from '@/components/LenisProvider';

export const metadata = {
  title: "Vidya's Kitchen — A full-stack ordering system for a home chef business | Simon Santhosh",
  description: "A full-stack ordering system for a home chef business — Customer App, Admin Dashboard, Driver App & WhatsApp Bot.",
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
              Case Study
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4 pt-2">
              <span className="px-2.5 py-1 bg-[#0FE0E3] border-2 border-black text-black font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                PWA Ecosystem
              </span>
              <span className="px-2.5 py-1 bg-[#00C16A] border-2 border-black text-white font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Full-Stack
              </span>
              <span className="px-2.5 py-1 bg-[#FF462D] border-2 border-black text-white font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Food Tech
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none mb-3 uppercase">
              Vidya&apos;s Kitchen
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-snug">
              A full-stack ordering system for a home chef business
            </p>

            {/* Hero Shot Placeholder / Mockup Area */}
            <div className="mt-8 border-2 border-black bg-[#FAF9F5] p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-mono text-xs uppercase font-black tracking-wider text-gray-500 mb-2">
                [Hero shot — customer app home screen or a nice mockup collage of all 4 surfaces (Customer app, Dashboard, Driver app, WhatsApp chat)]
              </div>
              <p className="text-xs text-gray-400 font-mono">
                Customer App • Kitchen Dashboard • Driver App • WhatsApp Bot
              </p>
            </div>

            <div className="mt-8 pt-8 border-t-2 border-dashed border-black/30 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="bg-[#F4F4F0] p-3 border-2 border-black">
                <span className="text-gray-500 uppercase block font-bold mb-1">Role</span>
                <span className="font-black text-black text-sm">Product Designer &amp; Developer (solo)</span>
              </div>
              <div className="bg-[#F4F4F0] p-3 border-2 border-black">
                <span className="text-gray-500 uppercase block font-bold mb-1">Timeline</span>
                <span className="font-black text-black text-sm">~6 months</span>
              </div>
              <div className="bg-[#F4F4F0] p-3 border-2 border-black">
                <span className="text-gray-500 uppercase block font-bold mb-1">Stack</span>
                <span className="font-black text-black text-sm">Next.js 14, TypeScript, Supabase, Framer Motion, Razorpay, WhatsApp Cloud API</span>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <article className="space-y-12">

            {/* The Problem */}
            <section className="bg-[#FF462D]/10 border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 flex items-center gap-3 border-b-2 border-black pb-3 text-black">
                <span className="w-4 h-4 bg-[#FF462D] border-2 border-black inline-block"></span>
                The Problem
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-900 font-normal">
                <p>
                  A home chef with loyal customers was running everything over phone calls and WhatsApp. Orders got lost, there was no way to track what was pending or delivered, and deliveries were coordinated through voice notes.
                </p>
                <div className="bg-[#FAED00] border-2 border-black p-4 font-bold text-black text-base sm:text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  Goal: build something that still feels personal — like ordering from a friend — but is operationally solid enough to run a real business.
                </div>
              </div>

              <div className="mt-6 border-2 border-black bg-white p-6 text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-mono text-xs uppercase font-black tracking-wider text-gray-500">
                  [IMAGE: Before/after — a WhatsApp chat screenshot next to the new order flow]
                </div>
              </div>
            </section>

            {/* 1. Customer App */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-6">
              <div className="inline-block px-3 py-1 bg-[#0FE0E3] border-2 border-black text-black font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Surface 01
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight border-b-2 border-black pb-3">
                1. Customer App
              </h2>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800">
                <p>
                  Phone number + OTP, no passwords. Straight into a menu that feels like a food app, not a spreadsheet.
                </p>
                <div className="border-2 border-black bg-[#FAF9F5] p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-500">[IMAGE: Login screen]</span>
                </div>

                <p>
                  Since home-cooked food needs prep time, customers pick a date + meal slot (breakfast/lunch/dinner) at least 24 hours ahead. Past slots grey out automatically — the constraint reads as guidance, not an error.
                </p>
                <div className="border-2 border-black bg-[#FAF9F5] p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-500">[IMAGE: Date + slot picker]</span>
                </div>

                <p>
                  Cart opens as a bottom sheet. Promo codes validate inline with a spinner → success animation, no page reload.
                </p>
                <div className="border-2 border-black bg-[#FAF9F5] p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-500">[IMAGE: Cart / checkout screen]</span>
                </div>

                <p>
                  Once an order is placed, customers get a live status screen — Confirmed → Preparing → Out for Delivery — with the driver&apos;s live location on a map.
                </p>
                <div className="border-2 border-black bg-[#FAF9F5] p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-500">[IMAGE: Order tracking + live map]</span>
                </div>

                <p>
                  Installable as a PWA — home screen icon, no browser bar, push notifications.
                </p>
                <div className="border-2 border-black bg-[#FAF9F5] p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-500">[IMAGE: PWA install prompt / home screen icon]</span>
                </div>
              </div>
            </section>

            {/* 2. Admin Dashboard */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-6">
              <div className="inline-block px-3 py-1 bg-[#FAED00] border-2 border-black text-black font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Surface 02
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight border-b-2 border-black pb-3">
                2. Admin Dashboard
              </h2>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800">
                <p>
                  Dark-themed, built for long kitchen shifts. Orders update live — no refreshing.
                </p>
                <div className="border-2 border-black bg-[#111] text-white p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-400">[IMAGE: Dashboard — live orders view]</span>
                </div>

                <p>
                  Color-coded order cards, one-tap accept/reject/advance. Drivers are added with a name, phone, and PIN.
                </p>
                <div className="border-2 border-black bg-[#111] text-white p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-400">[IMAGE: Driver management screen]</span>
                </div>

                <p>
                  Also built in: promo code management, seasonal auto-offers, and an AI pricing assistant that suggests price changes based on market context.
                </p>
                <div className="border-2 border-black bg-[#111] text-white p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-400">[IMAGE: Offers page or AI pricing panel]</span>
                </div>
              </div>
            </section>

            {/* 3. Driver App */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-6">
              <div className="inline-block px-3 py-1 bg-[#00C16A] border-2 border-black text-white font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Surface 03
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight border-b-2 border-black pb-3">
                3. Driver App
              </h2>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800">
                <p>
                  One-handed, PIN-based login — no passwords for field staff. Enter phone number, the app looks up the name automatically for a quick &quot;yes, that&apos;s me&quot; moment, then PIN.
                </p>
                <div className="border-2 border-black bg-[#FAF9F5] p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-500">[IMAGE: Driver login screen]</span>
                </div>

                <p>
                  Drivers get their assigned orders, navigate to the address, and share live GPS — which powers the customer&apos;s tracking map.
                </p>
                <div className="border-2 border-black bg-[#FAF9F5] p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-500">[IMAGE: Driver delivery screen]</span>
                </div>
              </div>
            </section>

            {/* 4. WhatsApp Bot */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-6">
              <div className="inline-block px-3 py-1 bg-[#25D366] border-2 border-black text-white font-mono text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Surface 04
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight border-b-2 border-black pb-3">
                4. WhatsApp Bot
              </h2>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-800">
                <p>
                  For customers who&apos;d rather not use an app. Every order milestone — placed, confirmed, out for delivery, delivered — triggers a WhatsApp message with buttons and a live tracking link.
                </p>
                <div className="border-2 border-black bg-[#FAF9F5] p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-500">[IMAGE: WhatsApp message flow]</span>
                </div>

                <p>
                  After delivery, an automated rating request comes through as a button reply.
                </p>
              </div>
            </section>

            {/* A Few Interesting Problems */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight border-b-2 border-black pb-3 flex items-center gap-3">
                <span className="w-4 h-4 bg-[#FF462D] border-2 border-black inline-block"></span>
                A Few Interesting Problems
              </h2>

              <div className="space-y-4">
                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight mb-2">
                    Two PWAs, one domain.
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    Chrome only allows one install prompt per site. Solved by giving the Customer app and Driver app separate manifests and scopes (<code className="font-mono bg-gray-100 px-1 border border-black/30">/</code> and <code className="font-mono bg-gray-100 px-1 border border-black/30">/driver</code>), so Chrome treats them as distinct apps.
                  </p>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight mb-2">
                    Real-time tracking, no custom WebSocket code.
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    Used Supabase Realtime&apos;s Postgres change listeners — driver GPS updates reach the customer&apos;s map in under 300ms.
                  </p>
                </div>

                <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight mb-2">
                    WhatsApp message reliability.
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    Meta&apos;s API can silently reject rich messages. Built a fallback chain — rich template → button → plain text — so the customer always gets the update.
                  </p>
                </div>

                <div className="border-2 border-black bg-white p-5 text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs uppercase font-black text-gray-500">
                    [IMAGE: Simple diagram of the PWA scope split, or the fallback chain, if you want one visual &quot;how it works&quot; moment]
                  </span>
                </div>
              </div>
            </section>

            {/* Impact */}
            <section className="bg-[#00C16A]/10 border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight border-b-2 border-black pb-3 flex items-center gap-3 text-black">
                <span className="w-4 h-4 bg-[#00C16A] border-2 border-black inline-block"></span>
                Impact
              </h2>

              <ul className="space-y-3 font-medium">
                <li className="flex items-start gap-3 bg-white border-2 border-black p-3.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm sm:text-base">
                  <span className="text-[#00C16A] font-black text-lg leading-none">✔</span>
                  <span><strong>Order placement:</strong> ~10 min WhatsApp back-and-forth → under 2 minutes</span>
                </li>
                <li className="flex items-start gap-3 bg-white border-2 border-black p-3.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm sm:text-base">
                  <span className="text-[#00C16A] font-black text-lg leading-none">✔</span>
                  <span><strong>Driver onboarding:</strong> fully automated via WhatsApp + PWA install</span>
                </li>
                <li className="flex items-start gap-3 bg-white border-2 border-black p-3.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm sm:text-base">
                  <span className="text-[#00C16A] font-black text-lg leading-none">✔</span>
                  <span>Kitchen tracks every order in real time, no phone calls needed</span>
                </li>
              </ul>
            </section>

            {/* What I'd Do Differently */}
            <section className="bg-white border-3 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight border-b-2 border-black pb-3 flex items-center gap-3">
                <span className="w-4 h-4 bg-[#FAED00] border-2 border-black inline-block"></span>
                What I&apos;d Do Differently
              </h2>

              <div className="border-2 border-black p-5 bg-[#FAF9F5] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  Build a proper design system before components instead of after, and run structured usability tests earlier instead of relying on client feedback alone.
                </p>
              </div>
            </section>

            {/* Footer Navigation Card */}
            <footer className="bg-black text-white p-6 sm:p-8 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#FAED00] font-bold mb-1">
                  Simon Santhosh
                </p>
                <p className="text-sm text-gray-300">
                  Product Designer &amp; Developer • Vidya&apos;s Kitchen
                </p>
              </div>
              <Link
                href="/v2#work"
                className="px-5 py-2.5 bg-[#FAED00] text-black font-mono text-xs font-black uppercase tracking-wider border-2 border-white hover:bg-white hover:text-black transition-colors"
              >
                Back to Portfolio ↑
              </Link>
            </footer>

          </article>
        </main>

        <FloatingActionTriggers />
      </div>
    </LenisProvider>
  );
}
