"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import ChallengeWindowStack from "@/components/vidyas-kitchen/ChallengeWindowStack";
import IADiagram from "@/components/vidyas-kitchen/IADiagram";
import StackToolsSkills from "@/components/vidyas-kitchen/StackToolsSkills";
import UserFlowDiagram from "@/components/vidyas-kitchen/UserFlowDiagram";
import {
  weTwoAgents,
  weTwoChallenges,
  weTwoColors,
  weTwoFeedback,
  weTwoFlows,
  weTwoIA,
  weTwoJourney,
  weTwoPrinciples,
  weTwoResearch,
  weTwoScrape,
  weTwoSkills,
  weTwoTools,
} from "@/lib/weTwoPetsCaseStudyContent";

function SectionWindow({
  num,
  title,
  children,
  allowOverflow = false,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
  allowOverflow?: boolean;
}) {
  return (
    <section
      className={`border-2 border-black bg-white shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] ${
        allowOverflow ? "overflow-visible" : "overflow-hidden"
      }`}
    >
      <div className="flex h-10 items-center gap-2 border-b-2 border-black bg-[#E2E8F0] px-3 font-mono text-xs select-none sm:h-11 sm:px-4">
        <span className="bg-[#FF462D] px-2 py-0.5 text-[10px] font-bold text-white">{num}</span>
        <span className="truncate font-bold uppercase tracking-wider text-black">{title}</span>
      </div>
      <div className="p-4 sm:p-8 md:p-10">{children}</div>
    </section>
  );
}

function Shot({
  src,
  alt,
  label,
  caption,
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
}) {
  return (
    <figure className="flex min-w-0 flex-col border-2 border-black bg-[#FAF9F5]">
      <figcaption className="border-b-2 border-black bg-[#FAED00] px-3 py-2 font-mono text-[10px] font-black uppercase tracking-wider">
        {label}
      </figcaption>
      <div className="relative aspect-[1440/900] bg-[#F3EEE4]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 560px"
        />
      </div>
      <p className="px-3 py-3 text-xs font-semibold leading-relaxed text-zinc-700 sm:text-sm">{caption}</p>
    </figure>
  );
}

function Placeholder({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <figure className="flex min-w-0 flex-col border-2 border-black bg-[#0D2E28] text-[#F6F1E7]">
      <figcaption className="border-b-2 border-black bg-[#C9893A] px-3 py-2 font-mono text-[10px] font-black uppercase tracking-wider text-black">
        {label}
      </figcaption>
      <div className="flex min-h-[200px] flex-1 flex-col justify-end p-4 sm:p-5">
        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#E8A94A]">Screen coming</p>
        <p className="mt-2 text-lg font-black leading-tight sm:text-xl">{title}</p>
        <p className="mt-2 text-sm font-semibold leading-relaxed text-[#F6F1E7]/80">{body}</p>
      </div>
    </figure>
  );
}

const shots = [
  {
    src: "/case-studies/we-two-pets/home.jpg",
    alt: "We Two Pets homepage with a cat, pug, and golden retriever.",
    label: "Home",
    caption: "The store opens on a decision. Three promises sit under the hero: curated, guided, built around the relationship.",
  },
  {
    src: "/case-studies/we-two-pets/shop.jpg",
    alt: "We Two Pets shop grid with exclusive-import badges and rupee prices.",
    label: "Shop",
    caption: "A short grid. Exclusive imports are marked on the card. Anything still pending never reaches this page.",
  },
  {
    src: "/case-studies/we-two-pets/product.jpg",
    alt: "Space Capsule Pack product page with price, colour, and Add to Cart.",
    label: "Product",
    caption: "Colour, price, and Add to Cart stay on wetwopets.com. The recommendation under the button is the engine talking.",
  },
  {
    src: "/case-studies/we-two-pets/about.jpg",
    alt: "About page: Intentional pet care, delivered to India.",
    label: "About",
    caption: "The about page says the bet out loud. Products families in India were missing, plus practical advice.",
  },
] as const;

export default function WeTwoPetsCaseStudyView() {
  return (
    <main className="mx-auto min-w-0 max-w-[1240px] space-y-8 px-3 pb-28 pt-4 sm:space-y-12 sm:px-6 sm:pb-32 sm:pt-6 md:pt-8 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-4 font-mono select-none">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black hover:text-[#FF462D] sm:text-sm"
        >
          <ArrowLeft weight="bold" className="h-4 w-4" />
          Back to selected work
        </Link>
        <a
          href="https://www.wetwopets.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-black sm:text-xs"
        >
          wetwopets.com
          <ArrowSquareOut weight="bold" className="h-3.5 w-3.5" />
        </a>
      </div>

      <section className="overflow-hidden border-2 border-black bg-white shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000]">
        <div className="space-y-5 p-4 text-center sm:space-y-6 sm:p-10 md:p-12">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex border-2 border-black bg-[#FF462D] px-3 py-1 font-mono text-xs font-black uppercase tracking-widest text-white">
              0→1 · Design and build
            </span>
            <span className="inline-flex border-2 border-black bg-[#FAED00] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest sm:text-xs">
              We Two Pets · India · Est. 2024
            </span>
          </div>
          <h1 className="text-[1.7rem] font-black uppercase leading-none tracking-tight min-[380px]:text-3xl sm:text-5xl">
            We Two Pets
          </h1>
          <p className="mx-auto max-w-3xl text-sm font-bold italic leading-snug text-zinc-600 sm:text-lg">
            An Indian store for dog and cat gear that does not exist until a person votes it live.
          </p>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-3 lg:grid-cols-2 sm:gap-4">
            <div className="flex min-h-[140px] flex-col justify-center border-2 border-black bg-zinc-50 p-4 text-left">
              <p className="mb-2 font-mono text-[10px] font-black uppercase text-[#FF462D]">The starting problem</p>
              <p className="text-sm leading-relaxed text-zinc-800 sm:text-base">
                A pet parent in India can already buy a carrier on Amazon or Flipkart. What they could not buy was a brand that chose the object, took the payment, checked it, and shipped it in its own box. The first sketch was an affiliate hop. That would have sent them to someone else’s checkout.
              </p>
            </div>
            <div className="flex min-h-[140px] flex-col justify-center border-2 border-black bg-[#FAF9F5] p-4 text-left">
              <p className="mb-2 font-mono text-[10px] font-black uppercase text-[#1976D2]">What I built</p>
              <p className="text-sm leading-relaxed text-zinc-800 sm:text-base">
                Three surfaces, not a theme. A Next.js store at wetwopets.com. A Pet Engine that hunts, scores, and prices. A desk where two people vote before anything is public. Tailz answers from that live catalog.
              </p>
            </div>
          </div>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-500">
            One thread: <strong className="text-zinc-800">discover</strong>
            {" → "}
            <strong className="text-zinc-800">choose</strong>
            {" → "}
            <strong className="text-zinc-800">pay on our site</strong>
            {" → "}
            <strong className="text-zinc-800">come back</strong>
            . Behind it: <strong className="text-zinc-800">hunt</strong>
            {" → "}
            <strong className="text-zinc-800">veto</strong>
            {" → "}
            <strong className="text-zinc-800">vote</strong>
            {" → "}
            <strong className="text-zinc-800">launch</strong>.
          </p>
          <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-2 font-mono text-xs md:grid-cols-4 sm:gap-3">
            <div className="flex min-h-[72px] flex-col items-center justify-center border-2 border-black bg-[#FAED00] p-3 text-center">
              <span className="mb-1 block text-[10px] uppercase text-black/60">Market</span>
              <span className="font-black leading-snug">Dog &amp; cat gear</span>
            </div>
            <div className="flex min-h-[72px] flex-col items-center justify-center border-2 border-black p-3 text-center">
              <span className="mb-1 block text-[10px] uppercase text-zinc-500">Not in scope</span>
              <span className="font-black leading-snug">Food or booking</span>
            </div>
            <div className="flex min-h-[72px] flex-col items-center justify-center border-2 border-black p-3 text-center">
              <span className="mb-1 block text-[10px] uppercase text-zinc-500">Role</span>
              <span className="font-black leading-snug">Design and build</span>
            </div>
            <a
              href="https://www.wetwopets.com/"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[72px] flex-col items-center justify-center border-2 border-black bg-black p-3 text-center text-white hover:bg-zinc-900"
            >
              <span className="font-black uppercase">Live site</span>
              <ArrowSquareOut weight="bold" className="mt-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <SectionWindow num="01" title="Why a marketplace was not the product">
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
          The job was never “make a cute pet shop.” It was to own the order. Each stage below is a place a generic template would have sent the customer somewhere else, or published a product nobody had checked.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-black font-mono text-[10px] uppercase tracking-wider">
                <th className="py-2 pr-3">Stage</th>
                <th className="py-2 pr-3">Goal</th>
                <th className="py-2 pr-3">Pain</th>
                <th className="py-2 pr-3">What shipped</th>
                <th className="py-2">Why a template fails</th>
              </tr>
            </thead>
            <tbody>
              {weTwoJourney.map((row) => (
                <tr key={row.stage} className="border-b border-zinc-200 align-top">
                  <td className="py-3 pr-3 font-black text-[#FF462D]">{row.stage}</td>
                  <td className="py-3 pr-3 text-zinc-800">{row.goal}</td>
                  <td className="py-3 pr-3 text-zinc-600">{row.pain}</td>
                  <td className="py-3 pr-3 text-zinc-800">{row.shipped}</td>
                  <td className="bg-[#FAF9F5] py-3 font-semibold text-zinc-800">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWindow>

      <SectionWindow num="02" title="The store a parent actually sees">
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
          I walked the live site. Home, shop, a product, and about are the public half of the story. Gear only. No food, so the path stays off the food-import track. The guides under the fold are the content: anxiety before a walk, a bored cat, monsoon, travel.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {shots.map((shot) => (
            <Shot key={shot.src} {...shot} />
          ))}
        </div>
      </SectionWindow>

      <SectionWindow num="03" title="Research, and the feedback that counts">
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
          I did not run a persona workshop for this page. The research is a shelf check. If India already sells the object, it is not ours to call exclusive. The feedback that changes the catalog is a vote, a pause, or a margin — not a quote I would invent.
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {weTwoResearch.map((item) => (
            <article key={item.title} className="border-2 border-black bg-[#FAF9F5] p-4">
              <p className="font-mono text-[10px] font-black uppercase tracking-widest text-[#FF462D]">{item.label}</p>
              <h3 className="mt-2 font-black uppercase leading-tight">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-zinc-700">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          {weTwoFeedback.map((item) => (
            <article key={item.n} className="border-2 border-black bg-white p-4">
              <p className="font-mono text-[10px] font-black uppercase tracking-widest text-[#1976D2]">{item.n}</p>
              <h3 className="mt-2 font-black uppercase leading-tight">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-zinc-700">{item.body}</p>
            </article>
          ))}
        </div>
      </SectionWindow>

      <SectionWindow num="04" title="Information architecture and user flows">
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-zinc-600">
          Four surfaces share one rule. The shop only reads what is live. The engine can suggest. The desk publishes. Tailz can only talk about what the desk already launched.
        </p>
        <h3 className="mb-3 text-center font-mono text-xs font-black uppercase tracking-wider">Information architecture</h3>
        <IADiagram root="One live catalog" subtitle="Pending is invisible to the shop" columns={weTwoIA} />
        <h3 className="mb-3 mt-8 text-center font-mono text-xs font-black uppercase tracking-wider">User flows</h3>
        <UserFlowDiagram flows={weTwoFlows} />
      </SectionWindow>

      <SectionWindow num="05" title="Six problems worth solving" allowOverflow>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-sm text-zinc-600">
            Each window is one decision. What was at stake, what we tried, what shipped, and what I will not pretend to have measured.
          </p>
          <p className="flex shrink-0 items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF462D]" />
            Stacking windows scroll ↓
          </p>
        </div>
        <ChallengeWindowStack challenges={weTwoChallenges} />
      </SectionWindow>

      <SectionWindow num="06" title="The scrape, and why it exists">
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
          Scraping is not the product. The product is a gap. A night of foreign listings is useless if Heads Up For Tails already sells the same object. The engine’s job is to throw those away before a person ever votes.
        </p>
        <ol className="m-0 grid list-none gap-3 p-0 lg:grid-cols-5">
          {weTwoScrape.map((step) => (
            <li key={step.n} className="border-2 border-black bg-white p-3">
              <p className="font-mono text-[10px] font-black uppercase tracking-widest text-[#FF462D]">{step.n}</p>
              <p className="mt-1 font-black uppercase">{step.title}</p>
              <p className="mt-2 text-xs font-semibold leading-relaxed text-zinc-700 sm:text-sm">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {weTwoAgents.map((agent) => (
            <article key={agent.name} className="border-2 border-black bg-[#FAF9F5] p-4">
              <h3 className="font-black uppercase">{agent.name}</h3>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-zinc-700">{agent.job}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 max-w-3xl text-sm font-semibold leading-relaxed text-zinc-600">
          I did not fine-tune a private model. Behavior comes from tools, a JSON contract, and gates. Two named agents in the repo are still stubs. They are not on this page. A second on-site chat was built and left unwired.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Placeholder
            label="Vote desk"
            title="Two approvals, then launch"
            body="The desk is a signed-in app. wetwopets.com/dashboard on the shop is a 404, so this frame stays empty until I can show a redacted queue."
          />
          <Placeholder
            label="Cart"
            title="Phone code, then pay"
            body="Cart, +91 code, Cashfree or pay on delivery, plus a ₹49 fee on delivery orders. I did not capture a cart that holds someone’s address."
          />
        </div>
      </SectionWindow>

      <SectionWindow num="07" title="The same timeline">
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
          After the payment, the parent should not need a second website. Support asks for the tracking number from the shipping email and shows the scans here.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <Shot
            src="/case-studies/we-two-pets/support.jpg"
            alt="We Two Pets support page with a tracking field and the steps Confirmed and Processing."
            label="Track an order"
            caption="Confirmed means sourcing has started. Processing means the India hub has checked it and repacked it in We Two packaging. Then the carrier scan goes live."
          />
          <ol className="m-0 flex list-none flex-col gap-3 p-0">
            {[
              ["Confirmed", "The order is in. Sourcing starts from the origin shop."],
              ["Processing", "Checked at the India hub and repacked in We Two packaging."],
              ["Shipped", "Domestic tracking goes live on this page. No second site."],
            ].map(([name, body], index) => (
              <li key={name} className="border-2 border-black bg-[#FAF9F5] p-4">
                <p className="font-mono text-[10px] font-black uppercase tracking-widest text-[#FF462D]">0{index + 1}</p>
                <p className="mt-1 font-black uppercase">{name}</p>
                <p className="mt-1 text-sm font-semibold leading-relaxed text-zinc-700">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </SectionWindow>

      <SectionWindow num="08" title="Tech, tools, and colour">
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-zinc-700">
          Storefront on Next.js. Phone sign-in and the catalog in Supabase. The Pet Engine is FastAPI and Gemini on its own service. Pay is Cashfree or cash on delivery. Shipping labels go through Shiprocket. Mail is Resend. Corners on the store are square. Headlines are a serif.
        </p>
        <StackToolsSkills skills={weTwoSkills} tools={weTwoTools} />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {weTwoColors.map((color) => (
            <div key={color.hex} className="border-2 border-black bg-white p-2">
              <span className="mb-2 block h-12 w-full border-2 border-black" style={{ background: color.hex }} aria-hidden />
              <span className="font-mono text-[10px] font-black uppercase">{color.name}</span>
              <span className="mt-0.5 block font-mono text-[10px] text-zinc-500">{color.hex}</span>
              <span className="mt-1 block text-[11px] font-semibold leading-snug text-zinc-600">{color.use}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {weTwoPrinciples.map((principle) => (
            <p key={principle} className="border-2 border-black bg-[#FAF9F5] p-4 text-sm font-semibold leading-relaxed text-zinc-800">
              {principle}
            </p>
          ))}
        </div>
      </SectionWindow>

      <SectionWindow num="09" title="What I can stand behind">
        <ul className="space-y-3">
          {[
            "Customers check out on wetwopets.com. They are not sent to a supplier product page.",
            "Agents write pending or staging. Two human approvals, then a launch, are required before live.",
            "Food, treats, and animal-origin chews are out of scope.",
            "The order page talks about preparation, a quality check, and branded packing. The public track page I photographed says the same thing in three steps.",
            "Tailz is bound to the live catalog. A second site chat exists in the repo and is not mounted.",
          ].map((line) => (
            <li key={line} className="border-l-4 border-[#FF462D] pl-3 text-sm font-semibold leading-relaxed text-zinc-800">
              {line}
            </li>
          ))}
        </ul>
        <div className="mt-6 border-2 border-dashed border-zinc-400 bg-zinc-50 p-4">
          <p className="mb-2 font-mono text-[10px] font-black uppercase text-zinc-500">Not on this page</p>
          <ul className="space-y-1 text-xs font-semibold text-zinc-600">
            <li>· Pageviews, members, or revenue. They are not measured.</li>
            <li>· A customer quote. I do not have one I can publish.</li>
            <li>· A catalog-size claim beyond the sixteen products on the live shop when I walked it.</li>
            <li>· The line under Add to Cart still talks like the buying desk. Next pass is a reason to buy, not a batch score.</li>
          </ul>
        </div>
      </SectionWindow>
    </main>
  );
}
