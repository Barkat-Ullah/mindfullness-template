import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Onest, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: "italic",
});

export const metadata: Metadata = {
  title: "Mind Full Ness — Yoga Platform",
  description:
    "Take full control of your yoga practice with AI-powered insights. Automatically track your progress, predict upcoming challenges, and make smarter yoga decisions.",
  keywords: ["yoga", "AI", "fitness", "wellness", "practice tracker"],
  authors: [{ name: "Mind Full Ness" }],
  openGraph: {
    title: "Mind Full Ness — Yoga Platform",
    description:
      "Take full control of your yoga practice with AI-powered insights.",
    url: "",
    siteName: "Mind Full Ness",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${onest.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
