import type { Metadata } from "next";
import { DM_Sans, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Simon Santhosh — UX Designer & Vibe Coder",
  description:
    "5+ years crafting intuitive digital experiences. UX Designer, Mentor, and Front-end Developer based in Chennai, India.",
  keywords: ["UX Designer", "UI Design", "Product Design", "Chennai", "Simon Santhosh"],
  openGraph: {
    title: "Simon Santhosh — UX Designer & Vibe Coder",
    description: "Designing experiences that move people. 5+ years in UX, Mentor, Freelancer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${poppins.variable} ${dmSans.variable} antialiased noise`}>
        {children}
      </body>
    </html>
  );
}
