import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vidya Coddletech | Infrastructure Architecture",
  description: "B2B Infrastructure & Tech Agency",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // allows zooming for accessibility
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", spaceGrotesk.variable, ibmPlexSans.variable, ibmPlexMono.variable, "font-sans")}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col relative text-foreground bg-background">
        <Navbar />
        <main className="flex-1 animate-fade-in-up">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
