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
  title: "Simon Santhosh — UX Designer & Design Engineer",
  description:
    "6+ years crafting intuitive digital experiences. UX Designer, Mentor, and Design Engineer based in Chennai, India.",
  keywords: ["UX Designer", "Design Engineer", "Product Design", "Chennai", "Simon Santhosh"],
  openGraph: {
    title: "Simon Santhosh — UX Designer & Design Engineer",
    description: "Designing experiences that move people. 6+ years in UX, Design Systems, Front-end Engineering.",
    type: "website",
    url: siteUrl,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${poppins.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${silkscreen.variable} antialiased noise`}>
        {children}
      </body>
    </html>
  );
}
