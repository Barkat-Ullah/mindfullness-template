"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  Sparkles,
  Compass,
  CreditCard,
  Mail,
  HelpCircle,
} from "lucide-react";

function ZenWaveform() {
  const bars = Array.from({ length: 14 });
  const heights = [8, 16, 24, 20, 28, 24, 18, 22, 14, 10, 6, 12, 8, 4];

  return (
    <div className="flex items-center gap-[3px] h-[28px] overflow-hidden" aria-hidden="true">
      {bars.map((_, i) => (
        <motion.span
          key={i}
          className="inline-block w-[3px] shrink-0 rounded-[2px] origin-center"
          style={{
            height: heights[i] + "px",
            backgroundColor:
              i % 2 === 0 ? "rgba(133, 250, 109, 0.75)" : "rgba(237, 251, 234, 0.4)",
          }}
          animate={{
            scaleY: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.12,
          }}
        />
      ))}
    </div>
  );
}

const quickLinks = [
  {
    label: "Home Flow",
    href: "/",
    desc: "Return to our main sanctuary",
    icon: Home,
  },
  {
    label: "Programs & Coaching",
    href: "/#about",
    desc: "Explore yoga therapy & mindful training",
    icon: Compass,
  },
  {
    label: "Membership Plans",
    href: "/#pricing-02-section",
    desc: "Find the ideal plan for your journey",
    icon: CreditCard,
  },
  {
    label: "Contact Team",
    href: "/contact",
    desc: "Reach out for guidance & assistance",
    icon: Mail,
  },
];

export default function NotFoundContent() {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <main className="flex-1 relative flex flex-col items-center justify-center pt-[120px] md:pt-[150px] pb-[80px] px-6 overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Ambient Background Gradient & Texture */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://cdn.jiro.build/Solra/background%20image/Hero%2001%20BG.png')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#85FA6D]/15 via-[#0f180e]/90 to-[#0a100a] pointer-events-none" />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#85FA6D]/12 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-[300px] h-[300px] bg-[#4BFC27]/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[860px] mx-auto flex flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.25)] mb-6"
        >
          <ZenWaveform />
          <span className="text-xs sm:text-sm font-sans font-medium tracking-wide uppercase text-[#85FA6D] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#85FA6D]" />
            Page Not Found
          </span>
        </motion.div>

        {/* 404 Large Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <h1 className="font-serif text-[100px] sm:text-[140px] md:text-[180px] font-bold leading-none tracking-tight select-none bg-gradient-to-b from-white via-[#EDFBEA] to-[#85FA6D]/60 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(133,250,109,0.2)]">
            404
          </h1>
          <div className="absolute -inset-2 bg-gradient-to-r from-[#85FA6D]/0 via-[#85FA6D]/10 to-[#85FA6D]/0 blur-xl -z-10 pointer-events-none" />
        </motion.div>

        {/* Subheading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[580px] space-y-3 mt-2"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#EDFBEA] tracking-[-0.5px]">
            Breathe In, Breathe Out. You&apos;ve Wandered Off The Mat.
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#DAFFD3]/80 leading-relaxed">
            The page you are looking for doesn&apos;t exist or has moved to a higher state of calm.
            Let&apos;s guide you back to your practice.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 w-full sm:w-auto"
        >
          {/* Primary Back Button */}
          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#85FA6D] text-[#093600] font-sans font-bold text-sm sm:text-base transition-all duration-300 hover:bg-[#6ef552] hover:shadow-[0_8px_28px_rgba(133,250,109,0.35)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Go Back</span>
          </button>

          {/* Return Home Link */}
          <Link
            href="/"
            className="w-full sm:w-auto group flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[#EDFBEA] font-sans font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/20 hover:border-white/35 hover:text-white hover:-translate-y-0.5 active:scale-95"
          >
            <Home className="w-4 h-4 text-[#85FA6D]" />
            <span>Back to Home</span>
            <ArrowUpRight className="w-4 h-4 text-[#85FA6D] opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Helpful Navigation Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 w-full pt-10 border-t border-white/10"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <HelpCircle className="w-4 h-4 text-[#85FA6D]" />
            <span className="font-sans text-xs sm:text-sm font-medium tracking-wider uppercase text-white/60">
              Popular Destinations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {quickLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    className="group flex flex-col items-start p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#85FA6D]/40 transition-all duration-300 text-left h-full"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-[#85FA6D]/20 flex items-center justify-center mb-3 transition-colors">
                      <Icon className="w-4 h-4 text-[#85FA6D]" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-sans text-sm font-semibold text-white group-hover:text-[#85FA6D] transition-colors">
                        {item.label}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#85FA6D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="font-sans text-xs text-white/50 mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
