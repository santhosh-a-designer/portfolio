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

        <main className="max-w-3xl mx-auto px-5 sm:px-8 pt-32 pb-32">
          {/* Back Navigation Bar */}
          <div className="mb-12">
            <Link
              href="/v2#work"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-black hover:text-[#FF462D] transition-colors"
            >
              <span className="font-bold">←</span>
              <span>Back to Portfolio</span>
            </Link>
          </div>

          {/* Header */}
          <header className="mb-14">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-3 text-black">
              Vidya&apos;s Kitchen
            </h1>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-700 leading-snug mb-8">
              A full-stack ordering system for a home chef business
            </h3>

            {/* Hero image placeholder */}
            <div className="py-12 border-y border-black/15 text-center my-8">
              <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                [IMAGE: Hero shot — customer app home screen or a nice mockup collage of all 4 surfaces (Customer app, Dashboard, Driver app, WhatsApp chat)]
              </p>
            </div>

            {/* Metadata list */}
            <div className="space-y-1.5 text-sm sm:text-base font-normal text-gray-900 pt-2">
              <p><strong>Role:</strong> Product Designer &amp; Developer (solo)</p>
              <p><strong>Timeline:</strong> ~6 months</p>
              <p><strong>Stack:</strong> Next.js 14, TypeScript, Supabase, Framer Motion, Razorpay, WhatsApp Cloud API</p>
            </div>
          </header>

          <hr className="border-t border-black/20 my-12" />

          {/* Article Body */}
          <article className="space-y-14 text-base sm:text-lg leading-relaxed text-gray-900 font-normal">

            {/* The Problem */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
                The Problem
              </h2>
              
              <p>
                A home chef with loyal customers was running everything over phone calls and WhatsApp. Orders got lost, there was no way to track what was pending or delivered, and deliveries were coordinated through voice notes.
              </p>
              
              <p className="text-gray-800">
                Goal: build something that still feels personal — like ordering from a friend — but is operationally solid enough to run a real business.
              </p>

              <div className="py-10 border-y border-black/15 text-center my-6">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: Before/after — a WhatsApp chat screenshot next to the new order flow]
                </p>
              </div>
            </section>

            <hr className="border-t border-black/20" />

            {/* 1. Customer App */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
                1. Customer App
              </h2>

              <p>
                Phone number + OTP, no passwords. Straight into a menu that feels like a food app, not a spreadsheet.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: Login screen]
                </p>
              </div>

              <p>
                Since home-cooked food needs prep time, customers pick a date + meal slot (breakfast/lunch/dinner) at least 24 hours ahead. Past slots grey out automatically — the constraint reads as guidance, not an error.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: Date + slot picker]
                </p>
              </div>

              <p>
                Cart opens as a bottom sheet. Promo codes validate inline with a spinner → success animation, no page reload.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: Cart / checkout screen]
                </p>
              </div>

              <p>
                Once an order is placed, customers get a live status screen — Confirmed → Preparing → Out for Delivery — with the driver&apos;s live location on a map.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: Order tracking + live map]
                </p>
              </div>

              <p>
                Installable as a PWA — home screen icon, no browser bar, push notifications.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: PWA install prompt / home screen icon]
                </p>
              </div>
            </section>

            <hr className="border-t border-black/20" />

            {/* 2. Admin Dashboard */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
                2. Admin Dashboard
              </h2>

              <p>
                Dark-themed, built for long kitchen shifts. Orders update live — no refreshing.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: Dashboard — live orders view]
                </p>
              </div>

              <p>
                Color-coded order cards, one-tap accept/reject/advance. Drivers are added with a name, phone, and PIN.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: Driver management screen]
                </p>
              </div>

              <p>
                Also built in: promo code management, seasonal auto-offers, and an AI pricing assistant that suggests price changes based on market context.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: Offers page or AI pricing panel]
                </p>
              </div>
            </section>

            <hr className="border-t border-black/20" />

            {/* 3. Driver App */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
                3. Driver App
              </h2>

              <p>
                One-handed, PIN-based login — no passwords for field staff. Enter phone number, the app looks up the name automatically for a quick &quot;yes, that&apos;s me&quot; moment, then PIN.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: Driver login screen]
                </p>
              </div>

              <p>
                Drivers get their assigned orders, navigate to the address, and share live GPS — which powers the customer&apos;s tracking map.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: Driver delivery screen]
                </p>
              </div>
            </section>

            <hr className="border-t border-black/20" />

            {/* 4. WhatsApp Bot */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
                4. WhatsApp Bot
              </h2>

              <p>
                For customers who&apos;d rather not use an app. Every order milestone — placed, confirmed, out for delivery, delivered — triggers a WhatsApp message with buttons and a live tracking link.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-4">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: WhatsApp message flow]
                </p>
              </div>

              <p>
                After delivery, an automated rating request comes through as a button reply.
              </p>
            </section>

            <hr className="border-t border-black/20" />

            {/* A Few Interesting Problems */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
                A Few Interesting Problems
              </h2>

              <p>
                <strong>Two PWAs, one domain.</strong> Chrome only allows one install prompt per site. Solved by giving the Customer app and Driver app separate manifests and scopes (<code className="font-mono text-sm bg-black/5 px-1 py-0.5">/</code> and <code className="font-mono text-sm bg-black/5 px-1 py-0.5">/driver</code>), so Chrome treats them as distinct apps.
              </p>

              <p>
                <strong>Real-time tracking, no custom WebSocket code.</strong> Used Supabase Realtime&apos;s Postgres change listeners — driver GPS updates reach the customer&apos;s map in under 300ms.
              </p>

              <p>
                <strong>WhatsApp message reliability.</strong> Meta&apos;s API can silently reject rich messages. Built a fallback chain — rich template → button → plain text — so the customer always gets the update.
              </p>

              <div className="py-8 border-y border-black/15 text-center my-6">
                <p className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  [IMAGE: Simple diagram of the PWA scope split, or the fallback chain, if you want one visual &quot;how it works&quot; moment]
                </p>
              </div>
            </section>

            <hr className="border-t border-black/20" />

            {/* Impact */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
                Impact
              </h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-900">
                <li>Order placement: ~10 min WhatsApp back-and-forth → under 2 minutes</li>
                <li>Driver onboarding: fully automated via WhatsApp + PWA install</li>
                <li>Kitchen tracks every order in real time, no phone calls needed</li>
              </ul>
            </section>

            <hr className="border-t border-black/20" />

            {/* What I'd Do Differently */}
            <section className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black">
                What I&apos;d Do Differently
              </h2>

              <p>
                Build a proper design system before components instead of after, and run structured usability tests earlier instead of relying on client feedback alone.
              </p>
            </section>

          </article>
        </main>

        <FloatingActionTriggers />
      </div>
    </LenisProvider>
  );
}
