"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function Hero({ className }: { className?: string }) {
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
      id="about"
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
            <Link
              href="/contact"
              className="group flex px-7 py-3 md:py-4 justify-center items-center gap-3 rounded-full bg-[#85FA6D] text-[#0f1a0e] text-[15px] font-bold no-underline transition-all hover:bg-[#5fdb48] hover:shadow-[0_8px_28px_rgba(133,250,109,0.30)] w-full sm:w-auto overflow-hidden"
            >
              Start Your Journey
              <span className="flex flex-col items-center h-4 overflow-hidden" aria-hidden="true">
                <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-full" />
                <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-full" />
              </span>
            </Link>
            <Link
              href="/#pricing-02-section"
              className="group flex px-7 py-3 md:py-4 justify-center items-center gap-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-[7px] text-white text-[15px] font-medium no-underline transition-all hover:bg-[#85FA6D]/10 hover:border-[#85FA6D]/50 hover:text-[#85FA6D] w-full sm:w-auto"
            >
              Join Member
              <span className="flex overflow-hidden w-4 h-4 items-center" aria-hidden="true">
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
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
                <Link href="/#about" className="self-stretch text-[#4BFC27] font-sans text-lg font-semibold leading-[26px] tracking-[-0.18px] no-underline hover:opacity-80 transition-opacity">Who we are</Link>
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
