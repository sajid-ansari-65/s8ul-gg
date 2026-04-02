import type { Metadata, Viewport } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "S8UL — Global Digital HQ | BGIS 2026 Champions",
  description:
    "Official S8UL Global Digital HQ. BGIS 2026 Champions. EWC 2026 Club Partner. Road to Riyadh. Team Soul & 8Bit Esports.",
  keywords: [
    "S8UL",
    "Team Soul",
    "8Bit",
    "BGIS 2026",
    "EWC 2026",
    "Esports",
    "Gaming",
    "Riyadh",
  ],
  openGraph: {
    title: "S8UL — Global Digital HQ",
    description: "BGIS 2026 Champions · EWC Club Partner · Road to Riyadh",
    type: "website",
    locale: "en_US",
    siteName: "S8UL",
  },
  twitter: {
    card: "summary_large_image",
    title: "S8UL — Global Digital HQ",
    description: "BGIS 2026 Champions · EWC Club Partner · Road to Riyadh",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${orbitron.variable}`}>
      <body className="bg-s8ul-black text-white antialiased">
        {/* CRT Scan Line Overlay */}
        <div className="scan-lines" />
        {children}
      </body>
    </html>
  );
}
