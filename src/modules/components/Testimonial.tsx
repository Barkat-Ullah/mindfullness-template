"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  percentage: number;
  startPercentage: number;
  image: string;
  videoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Stefan Person",
    role: "Entrepreneur",
    quote:
      "\u201cThe structured coaching and mindful sessions helped me stay consistent even with my busy work schedule. I have more energy less stress and better focus every day and mindfulness completely. The structured coaching and mindful sessions helped me stay consistent even with my busy work schedule. I have more energy less stress and better focus every day and mindfulness completely.\u201d",
    percentage: 99,
    startPercentage: 10,
    image:
      "https://cdn.jiro.build/Solra/All%20Images/Testimonial%20img%201%20solra.png",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Entrepreneur",
    quote:
      "\u201cI finally found a program I can stick to. The community support and expert guidance made all the difference. My productivity has soared and I feel more balanced than ever before. The mindfulness sessions are a game changer. I finally found a program I can stick to. The community support and expert guidance made all the difference.\u201d",
    percentage: 96,
    startPercentage: 8,
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=900&q=80",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    name: "James Nolan",
    role: "Project Manager",
    quote:
      "\u201cThe mindfulness sessions are a game changer. As someone who spends all day in front of a screen, the physical and mental relief I've found here is priceless. The plans are smart and easy. I feel stronger and more focused. The mindfulness sessions are a game changer. As someone who spends all day in front of a screen.\u201d",
    percentage: 97,
    startPercentage: 9,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Graphic Designer",
    quote:
      "\u201cA complete shift in my daily energy levels. The plans are smart, easy to follow, and incredibly effective for long-term health. I feel stronger and more focused than I ever have. The community support is amazing. A complete shift in my daily energy levels. The plans are smart, easy to follow.\u201d",
    percentage: 99,
    startPercentage: 10,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
];

function Counter({
  from,
  to,
  duration,
}: {
  from: number;
  to: number;
  duration: number;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest: number) => Math.round(latest));
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      ease: "easeInOut" as const,
    });
    return controls.stop;
  }, [from, to, duration, count]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

export default function Testimonials05Solra({
  className,
}: {
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const autoPlayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const current = testimonials[currentIndex];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showVideo]);

  const handleUserClick = (index: number) => {
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    autoPlayTimeoutRef.current = setTimeout(
      () => setIsAutoPlaying(true),
      10000,
    );
  };

  useEffect(() => {
    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className={cn(
          "w-full bg-white py-20 md:py-[120px] px-6 lg:px-[135px] flex flex-col items-start gap-16 md:gap-[64px] max-w-[1440px] mx-auto",
          className,
        )}
        aria-label="Success Stories"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 w-full max-w-[1170px] mx-auto"
        >
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-[#093600] font-serif text-3xl md:text-[52px] font-semibold leading-tight tracking-tight">
              Success Stories That Inspire
            </h2>
            <p className="text-[#093600]/70 font-sans text-base md:text-lg leading-relaxed">
              Authentic experiences from people who committed to growth and
              achieved real results.
            </p>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-4">
            <div className="w-[60px] h-[60px] bg-[#EDFBEA] rounded-xl flex items-center justify-center flex-shrink-0">
              <div className="relative w-10 h-10">
                <Image
                  src="https://cdn.jiro.build/Solra/Svg%20icon/Only%20logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[#093600] font-sans text-xl font-bold">
                  4.9/5
                </span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_: unknown, i: number) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F27D26] text-[#F27D26]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-[#093600]/60 font-sans text-sm">
                Based on 37k+ reviews
              </p>
            </div>
          </div>
        </motion.div>

        <div className="w-full flex flex-col items-center gap-10 max-w-[1170px] mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
            className="w-full p-8 md:p-[48px] rounded-[30px] bg-[#EDFBEA] flex flex-col md:flex-row justify-between items-stretch gap-12 md:gap-16 relative overflow-hidden min-h-[300px]"
          >
            {/* Left Content (Quote) */}
            <div className="flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" as const }}
                  className="text-[#093600] font-serif text-[24px] md:text-[30px] font-semibold leading-[32px] md:leading-[36px] tracking-[-0.2px] line-clamp-6"
                >
                  {current.quote}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Right Content (Progress & Play) */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-12 flex-shrink-0">
              {/* Vertical Progress Line (Desktop) */}
              <div className="hidden md:block w-[1px] h-[160px] bg-[#093600]/15 relative">
                <motion.div
                  key={currentIndex}
                  initial={{ height: String(current.startPercentage) + "%" }}
                  animate={{ height: String(current.percentage) + "%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" as const }}
                  className="absolute top-0 left-0 w-full bg-[#093600]"
                />
              </div>

              {/* Mobile Progress Line (Horizontal) */}
              <div className="md:hidden w-full h-[1px] bg-[#093600]/15 relative">
                <motion.div
                  key={currentIndex}
                  initial={{ width: String(current.startPercentage) + "%" }}
                  animate={{ width: String(current.percentage) + "%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" as const }}
                  className="absolute top-0 left-0 h-full bg-[#093600]"
                />
              </div>

              {/* Play Button and Percentage Layout */}
              <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-6 md:gap-[96px] w-full md:w-[160px]">
                {/* Percentage + Label */}
                <div className="flex flex-col items-start gap-1 order-1 md:order-2">
                  <div className="text-[#CF6100] font-serif text-[48px] md:text-[68px] font-semibold leading-tight md:leading-[72px] tracking-[-1.6px] flex items-baseline">
                    <Counter
                      key={currentIndex}
                      from={current.startPercentage}
                      to={current.percentage}
                      duration={2.5}
                    />
                    <span>%</span>
                  </div>
                  <p className="text-[#093600]/70 font-sans text-sm md:text-base whitespace-nowrap">
                    Visible Results
                  </p>
                </div>

                {/* Play Button Icon */}
                <div className="flex md:w-full md:justify-end order-2 md:order-1">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="w-12 h-12 md:w-10 md:h-10 rounded-full bg-[#093600] flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform cursor-pointer"
                  >
                    <div className="w-0 h-0 border-t-[7px] md:border-t-[6px] border-t-transparent border-l-[11px] md:border-l-[10px] border-l-white border-b-[7px] md:border-b-[6px] border-b-transparent ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom User Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
            className="flex items-center justify-center gap-6 overflow-x-auto pb-4 md:pb-0 w-full"
          >
            {testimonials.map((user: Testimonial, index: number) => {
              const isActive = currentIndex === index;
              return (
                <button
                  key={user.id}
                  onClick={() => handleUserClick(index)}
                  aria-label={"View testimonial from " + user.name}
                  aria-pressed={isActive}
                  className={cn(
                    "flex items-center justify-between gap-8 p-3 md:p-[12px_16px] rounded-xl border transition-all duration-300 flex-shrink-0 cursor-pointer min-w-[240px]",
                    isActive
                      ? "border-[#85FA6D] bg-[#EDFBEA] shadow-sm"
                      : "border-[#E5E7EB] bg-white hover:border-[#85FA6D]/50",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#093600]/10">
                      <Image
                        src={user.image}
                        alt={user.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-[#093600] font-sans text-sm font-bold leading-tight">
                        {user.name}
                      </span>
                      <span className="text-[#093600]/50 font-sans text-xs">
                        {user.role}
                      </span>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="text-[#093600]/10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21C14.017 16.5817 17.5987 13 22.017 13V15C19.8079 15 18.017 16.7909 18.017 19V21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM3 21C3 16.5817 6.58172 13 11 13V15C8.79086 15 7 16.7909 7 19V21H3Z" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              key="video-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
              onClick={() => setShowVideo(false)}
            >
              <motion.div
                key="video-modal-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                  e.stopPropagation()
                }
              >
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label="Close video"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <video
                  src={current.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  aria-label={"Success story video from " + current.name}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
