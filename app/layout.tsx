import type { Metadata, Viewport } from "next";
import { DM_Sans, Poppins, Space_Grotesk, JetBrains_Mono, Silkscreen } from "next/font/google";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const siteUrl = getSiteUrl();

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-title",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-description",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mono",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090b",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Santhosh A — Design Engineer | UX + Next.js",
  description:
    "Design Engineer & UX Specialist based in Chennai, India. 6+ years shipping intuitive digital products, scalable Next.js systems, and validated Figma design systems.",
  keywords: ["Santhosh A", "Design Engineer", "UX Designer", "Next.js", "Product Design", "Chennai", "Frontend Engineer"],
  openGraph: {
    title: "Santhosh A — Design Engineer | UX + Next.js",
    description: "Designing experiences that move people. 6+ years in UX, Design Systems, Front-end Engineering.",
    type: "website",
    url: siteUrl,
  },
  alternates: {
    canonical: "/",
  },
};

import LenisProvider from "@/components/LenisProvider";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Santhosh A",
  jobTitle: "Design Engineer",
  url: siteUrl,
  sameAs: ["https://linkedin.com/in/santhosh-designer"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressCountry: "India",
  },
  description:
    "Design Engineer & UX Specialist based in Chennai, India. 6+ years shipping intuitive digital products, scalable Next.js systems, and validated Figma design systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${poppins.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${silkscreen.variable} antialiased noise`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
