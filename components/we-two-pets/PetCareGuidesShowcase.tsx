"use client";

import Image from "next/image";

const GUIDES = [
  {
    category: "BEHAVIOUR",
    title: "Panting at 11am. The Walk Hasn’t Even Started.",
    readTime: "6 MIN READ",
    image: "/case-studies/we-two-pets/editorial/blog/blog-dog-anxiety.webp",
    alt: "Golden retriever sitting calmly inside a bright apartment doorway",
  },
  {
    category: "CAT CARE",
    title: "Your Cat Isn’t Lazy. They’re Under-Stimulated.",
    readTime: "5 MIN READ",
    image: "/case-studies/we-two-pets/editorial/blog/blog-cat-enrichment.webp",
    alt: "Tabby cat perching on a modern green cat tree in a stylish living room",
  },
  {
    category: "SEASONAL",
    title: "Monsoon Season Is a Full-Time Job for Pet Parents",
    readTime: "7 MIN READ",
    image: "/case-studies/we-two-pets/editorial/blog/blog-monsoon-care.webp",
    alt: "Small fluffy dog wearing a yellow raincoat on a rainy balcony with owner",
  },
  {
    category: "TRAVEL",
    title: "The Back Seat Isn’t Safe. Here’s What Is.",
    readTime: "5 MIN READ",
    image: "/case-studies/we-two-pets/editorial/blog/blog-travel-safety.webp",
    alt: "Dog wearing travel safety harness secured on car back seat cover",
  },
];

export default function PetCareGuidesShowcase() {
  return (
    <div className="border-2 border-black bg-[#FAF9F5] p-5 sm:p-7 shadow-[4px_4px_0_0_#000]">
      {/* Editorial Header */}
      <div className="mb-6 max-w-2xl">
        <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#FF462D] block mb-1">
          PET CARE GUIDES
        </span>
        <h3 className="font-serif italic text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
          Know before you buy.
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-600 font-medium">
          Practical advice for the problems you notice before you reach for your wallet — anxiety, boredom, monsoon mess, travel stress.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GUIDES.map((guide) => (
          <article
            key={guide.title}
            className="flex flex-col border-2 border-black bg-white shadow-[3px_3px_0_0_#000] hover:-translate-y-1 transition-all overflow-hidden group"
          >
            {/* Guide Image with Zoom on hover */}
            <div className="relative aspect-[4/3] w-full bg-zinc-100 overflow-hidden border-b-2 border-black">
              <Image
                src={guide.image}
                alt={guide.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Guide Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] font-black uppercase tracking-wider text-zinc-400 block mb-1.5">
                  {guide.category}
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-[15px] leading-snug text-zinc-900 group-hover:text-[#0D2E28] transition-colors">
                  {guide.title}
                </h4>
              </div>

              <div className="mt-4 pt-2.5 border-t border-black/10 flex items-center justify-between font-mono text-[9px] font-bold text-zinc-400 uppercase">
                <span>{guide.readTime}</span>
                <span className="text-[#0D2E28] font-black group-hover:translate-x-0.5 transition-transform">Read ↗</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
