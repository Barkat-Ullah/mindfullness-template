"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, MapPin, Droplets, List, BookOpen, Clock, ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Sub-components ---

function Waveform() {
  const bars = Array.from({ length: 18 });
  const heights = [10, 20, 28, 24, 34, 36, 30, 32, 22, 16, 9, 5, 9, 13, 6, 4, 8, 5];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="flex items-center gap-[3px] w-[175px] h-[36px] overflow-hidden"
    >
      {bars.map((_: unknown, i: number) => (
        <motion.span
          key={i}
          className="inline-block w-[3px] shrink-0 rounded-[2px] origin-center"
          style={{
            height: heights[i] + "px",
            backgroundColor: i < 10 ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.28)"
          }}
          animate={{
            scaleY: [0.25, 1, 1, 0.25],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity as number,
            ease: "easeInOut" as const,
            delay: i * 0.13,
          }}
        />
      ))}
    </motion.div>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 17 16" className="w-[16px] h-[16px] fill-[#85FA6D] shrink-0">
      <path d="M8.421 0l2.063 6.344H17l-5.29 3.844 2.02 6.343-5.309-3.86-5.308 3.86 2.02-6.343L0 6.344h6.516z" />
    </svg>
  );
}

function DropdownItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-[10px] p-[9px_12px] rounded-[10px] no-underline text-white/75 text-sm font-medium transition-all hover:bg-[#85FA6D]/10 hover:text-[#85FA6D] group"
      role="menuitem"
    >
      <span className="w-[30px] h-[30px] rounded-lg bg-white/7 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#85FA6D]/18 group-hover:text-[#85FA6D]">
        {React.isValidElement(icon) &&
          React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
            className: "w-[15px] h-[15px] stroke-current fill-none",
          })}
      </span>
      <span className="flex-1 leading-[1.2]">
        {title}
        <span className="text-[11px] text-white/38 font-normal mt-[1px] block">{desc}</span>
      </span>
    </a>
  );
}

export default function Header({ className }: { className?: string }) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col items-start bg-[#1a1f1a]",
        className
      )}
      aria-label="Hero"
    >
      {/* Background */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        className="absolute inset-0 z-0 overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://cdn.jiro.build/Solra/background%20image/Hero%2001%20BG.png')",
        }}
        role="img"
        aria-label="Person meditating in yoga pose"
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(20,28,18,0.92), rgba(20,28,18,0.75), rgba(20,28,18,0.10))" }} />
      </motion.div>

      {/* --- Navigation (sticky) --- */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="sticky top-0 z-[100] w-full border-b border-white/10 bg-[rgba(20,28,18,0.55)] backdrop-blur-xl"
        role="banner"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[135px]">
          <nav className="flex py-5 items-center justify-between gap-6 self-stretch" aria-label="Main navigation">
            {/* Logo */}
            <a href="#" className="flex items-center w-[175px] h-10 no-underline group" aria-label="FitZen home">
              <div className="relative h-full flex items-center justify-start" aria-hidden="true">
                <Image
                  src="https://cdn.jiro.build/Solra/Svg%20icon/Logo%201.svg"
                  alt="FitZen Logo"
                  width={175}
                  height={40}
                  className="w-auto h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div
              className="hidden md:flex px-4 py-2 items-center gap-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-[5.5px]"
              role="list"
            >
              <a href="#" className="text-white font-sans text-base font-semibold tracking-normal no-underline transition-opacity hover:opacity-75" role="listitem" aria-current="page">Home</a>
              <a href="#" className="text-white font-sans text-base font-normal tracking-[-0.4px] no-underline transition-opacity hover:opacity-75" role="listitem">About</a>
              <a href="#" className="text-white font-sans text-base font-normal tracking-[-0.4px] no-underline transition-opacity hover:opacity-75" role="listitem">Contact</a>

              <div className="relative">
                <button
                  className="flex items-center gap-1 text-white font-sans text-base font-normal tracking-[-0.4px] cursor-pointer bg-transparent border-none p-0 transition-opacity hover:opacity-75"
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  aria-haspopup="true"
                  aria-expanded={isMoreOpen}
                >
                  More
                  <ChevronDown className={cn("w-[14px] h-[14px] transition-transform duration-200", isMoreOpen && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      key="desktop-dropdown"
                      initial={{ opacity: 0, y: -8, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, x: "-50%" }}
                      exit={{ opacity: 0, y: -8, x: "-50%" }}
                      className="absolute top-[calc(100%+14px)] left-1/2 w-[220px] bg-[rgba(18,26,16,0.92)] border border-white/[0.14] rounded-2xl backdrop-blur-[20px] p-2 z-[100] shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
                      role="menu"
                    >
                      {/* Arrow */}
                      <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-[rgba(18,26,16,0.95)] border-t border-l border-white/[0.14] rotate-45" />

                      <div className="py-1">
                        <p className="text-[10px] font-bold tracking-[0.8px] uppercase text-white/35 px-3 pb-[6px] pt-1">Services</p>
                        <DropdownItem icon={<MapPin />} title="Personal Training" desc="1-on-1 coaching sessions" />
                        <DropdownItem icon={<Droplets />} title="Yoga & Mindfulness" desc="Classes for all levels" />
                        <DropdownItem icon={<List />} title="Nutrition Plans" desc="Personalized meal guides" />
                      </div>
                      <div className="py-1 border-t border-white/[0.08] mt-1 pt-2">
                        <p className="text-[10px] font-bold tracking-[0.8px] uppercase text-white/35 px-3 pb-[6px] pt-1">Resources</p>
                        <DropdownItem icon={<BookOpen />} title="Blog & Articles" desc="Tips, guides & wellness news" />
                        <DropdownItem icon={<Clock />} title="Free Webinars" desc="Live & recorded sessions" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop CTA */}
            <a
              href="#"
              className="hidden md:flex px-6 py-3 justify-center items-center rounded-full bg-white text-[#0f1a0e] text-sm font-semibold no-underline transition-all hover:bg-[#85FA6D] hover:-translate-y-[1px] whitespace-nowrap"
            >
              Book a Call
            </a>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2 bg-white/10 border border-white/20 rounded-[10px]"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              aria-label="Open menu"
              aria-expanded={isMobileNavOpen}
            >
              <span className={cn("block w-[22px] h-[2px] bg-white rounded-[2px] transition-all", isMobileNavOpen && "translate-y-[7px] rotate-45")} />
              <span className={cn("block w-[22px] h-[2px] bg-white rounded-[2px] transition-all", isMobileNavOpen && "opacity-0 scale-x-0")} />
              <span className={cn("block w-[22px] h-[2px] bg-white rounded-[2px] transition-all", isMobileNavOpen && "-translate-y-[7px] rotate-45")} />
            </button>
          </nav>

          {/* Mobile Nav Drawer */}
          <AnimatePresence>
            {isMobileNavOpen && (
              <motion.div
                key="mobile-nav"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="md:hidden absolute top-full left-0 right-0 bg-[rgba(10,18,9,0.97)] backdrop-blur-[20px] border-b border-white/10 px-8 pb-7 pt-2 flex flex-col z-[999]"
                role="dialog"
                aria-modal={true}
              >
                <a href="#" className="flex items-center py-[13px] text-[#85FA6D] text-base font-semibold no-underline border-b border-white/[0.07]">Home</a>
                <a href="#" className="flex items-center py-[13px] text-white/85 text-base font-normal no-underline border-b border-white/[0.07]">About</a>
                <a href="#" className="flex items-center py-[13px] text-white/85 text-base font-normal no-underline border-b border-white/[0.07]">Contact</a>

                <button
                  className="flex items-center justify-between py-[13px] text-white/85 text-base font-normal border-b border-white/[0.07] bg-transparent w-full text-left font-sans cursor-pointer"
                  style={{ borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }}
                  onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
                >
                  More
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-[250ms]", isMobileSubmenuOpen && "rotate-180")} />
                </button>

                {isMobileSubmenuOpen && (
                  <div className="flex flex-col pl-4 border-l-2 border-[#85FA6D]/30 ml-1 mb-1">
                    <a href="#" className="text-sm text-white/60 py-[10px] border-b border-white/5 no-underline">Personal Training</a>
                    <a href="#" className="text-sm text-white/60 py-[10px] border-b border-white/5 no-underline">Yoga & Mindfulness</a>
                    <a href="#" className="text-sm text-white/60 py-[10px] border-b border-white/5 no-underline">Nutrition Plans</a>
                    <a href="#" className="text-sm text-white/60 py-[10px] border-b border-white/5 no-underline">Blog & Articles</a>
                    <a href="#" className="text-sm text-white/60 py-[10px] border-b border-white/5 no-underline">Free Webinars</a>
                  </div>
                )}

                <a
                  href="#"
                  className="flex mt-5 px-7 py-[14px] justify-center rounded-full bg-[#85FA6D] text-[#0f1a0e] font-bold text-[15px] no-underline"
                >
                  Book a Call
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* --- Hero Content --- */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-[135px] pb-[60px] flex flex-col items-start self-stretch flex-1 min-h-[calc(100vh-80px)]">
        <main className="pt-[116px] md:pt-[140px] flex flex-col items-start gap-8 md:gap-12 self-stretch">
          <div className="flex flex-col items-start gap-8 md:gap-12 w-full max-w-[650px]">

            <Waveform />

            {/* Social Proof Badge & Heading */}
            <div className="flex flex-col items-start gap-6">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex pt-[6px] pr-[20px] pb-[6px] pl-[16px] items-center gap-3 bg-white/20 backdrop-blur-[7px] rounded-[999px] border border-white/15"
                role="note"
              >
                <div className="flex items-center gap-1" aria-hidden="true">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <span className="text-[#EDFBEA] font-sans text-base font-normal tracking-[-0.4px]">Trusted by 30K+ clients</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.65 }}
                className="w-full lg:w-[612px] text-[#EDFBEA] font-serif text-[34px] sm:text-[42px] md:text-[52px] lg:text-[68px] font-semibold leading-[1.15] md:leading-[1.1] tracking-[-0.5px] md:tracking-[-1.6px]"
              >
                Transform Your Body. Calm Your Mind. Elevate Your Life.
              </motion.h1>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
            role="group"
            aria-label="Call to action"
          >
            <a
              href="#"
              className="group flex px-7 py-3 md:py-4 justify-center items-center gap-3 rounded-full bg-[#85FA6D] text-[#0f1a0e] text-[15px] font-bold no-underline transition-all hover:bg-[#5fdb48] hover:shadow-[0_8px_28px_rgba(133,250,109,0.30)] w-full sm:w-auto overflow-hidden"
            >
              Start Your Journey
              <span className="flex flex-col items-center h-4 overflow-hidden" aria-hidden="true">
                <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-full" />
                <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-full" />
              </span>
            </a>
            <a
              href="#"
              className="group flex px-7 py-3 md:py-4 justify-center items-center gap-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-[7px] text-white text-[15px] font-medium no-underline transition-all hover:bg-[#85FA6D]/10 hover:border-[#85FA6D]/50 hover:text-[#85FA6D] w-full sm:w-auto"
            >
              Join Member
              <span className="flex overflow-hidden w-4 h-4 items-center" aria-hidden="true">
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </motion.div>
        </main>

        {/* --- Bottom-right Info Card --- */}
        <motion.aside
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-12 md:mt-[96px] lg:self-end flex flex-col items-start gap-4 z-[2] pb-12 md:pb-20 w-full lg:w-auto"
          aria-label="About FitZen"
        >
          <p className="w-full lg:w-[398px] text-[#DAFFD3] font-sans text-[18px] font-normal leading-[26px] tracking-[-0.18px]">
            Experience personalized fitness, yoga & mindfulness transformation.
          </p>

          <div className="flex flex-col sm:flex-row p-4 justify-between items-start sm:items-center self-stretch rounded-2xl border border-[#EDFBEA] bg-white/20 backdrop-blur-[7px] gap-4 w-full lg:w-[400px]">

            <div className="flex items-center gap-4 w-full sm:w-[204px]">
              <div className="w-[43px] h-[43px] rounded-[10px] flex items-center justify-center shrink-0 overflow-hidden" aria-hidden="true">
                <Image
                  src="https://cdn.jiro.build/Solra/Svg%20icon/Hand%20rise.svg"
                  alt="Hand Rise Icon"
                  width={43}
                  height={43}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col items-start w-[145px]">
                <p className="text-[#DAFFD3] font-sans text-[14px] font-medium leading-[22px] not-italic whitespace-nowrap">The care you deserve</p>
                <a href="#" className="self-stretch text-[#4BFC27] font-sans text-lg font-semibold leading-[26px] tracking-[-0.18px] no-underline hover:opacity-80 transition-opacity">Who we are</a>
              </div>
            </div>

            {/* Video Thumbnail */}
            <div className={cn("w-[100px] sm:w-[140px] h-[66px] sm:h-[86px] rounded-md overflow-hidden shrink-0 relative bg-[#111]", isPlaying && "playing")}>
              <video
                ref={videoRef}
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                poster="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=80"
                loop
                playsInline
                preload="none"
                className="w-full h-full object-cover block"
                aria-label="FitZen yoga video"
                suppressHydrationWarning
              />
              <button
                className={cn(
                  "absolute inset-0 flex items-center justify-center gap-3.5 bg-black/20 cursor-pointer transition-all hover:bg-black/40",
                  isPlaying && "opacity-0 pointer-events-none"
                )}
                onClick={toggleVideo}
                aria-label="Play video"
              >
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shrink-0 transition-transform hover:scale-110">
                  <Play className="w-3 h-3 fill-[#0f1a0e] ml-0.5" />
                </div>
              </button>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
