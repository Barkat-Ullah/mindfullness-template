"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const trainers = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Strength Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%201.png",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Wellness Coach",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%202.png",
  },
  {
    id: 3,
    name: "Michael Ross",
    role: "Fitness Enthusiast",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%203.png",
  },
  {
    id: 4,
    name: "Stefan Person",
    role: "Entrepreneur",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%204.png",
  },
  {
    id: 5,
    name: "David Chen",
    role: "Yoga Instructor",
    image: "https://cdn.jiro.build/Solra/All%20Images/wellnes%20man%205.png",
  },
  {
    id: 6,
    name: "Damon Salvatore",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
  },
  {
    id: 7,
    name: "Marcus Bennett",
    role: "Mindfulness Expert",
    image:
      "https://images.unsplash.com/photo-1510531704581-5b2870972060?w=800&q=80",
  },
  {
    id: 8,
    name: "Chris Evans",
    role: "Performance Coach",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 9,
    name: "Liam Neeson",
    role: "Endurance Specialist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    id: 10,
    name: "Tom Hardy",
    role: "Boxing Trainer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  },
  {
    id: 11,
    name: "Henry Cavill",
    role: "Bodybuilding Pro",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  },
  {
    id: 12,
    name: "Jason Momoa",
    role: "Functional Fitness",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    id: 13,
    name: "Idris Elba",
    role: "Holistic Health",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    id: 14,
    name: "Ryan Reynolds",
    role: "Mobility Expert",
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?w=800&q=80",
  },
];

export default function Team01Solra({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  const trainersPerWindow = 7;
  const visibleTrainers = trainers.slice(
    startIndex,
    startIndex + trainersPerWindow,
  );

  const handleNext = () => {
    if (startIndex < trainers.length - trainersPerWindow) {
      setStartIndex((prev) => prev + 1);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    } else {
      setStartIndex(trainers.length - trainersPerWindow);
    }
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className={
          "w-full bg-[#EDFBEA] py-[80px] md:py-[120px] px-6 lg:px-[135px] flex flex-col items-center " +
          (className || "")
        }
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-4 self-stretch text-center max-w-[1170px] mx-auto mb-12 md:mb-[80px]">
          <h2 className="text-[#093600] font-serif text-[32px] md:text-[52px] font-semibold leading-[1.1] md:leading-[56px] tracking-[-0.8px] max-w-[800px]">
            Guided by Experience <br /> Driven by Results
          </h2>
          <p className="text-[#093600]/80 font-sans text-[16px] md:text-[18px] font-normal leading-[1.4] md:leading-[26px] tracking-[-0.18px] max-w-[600px]">
            Professional instructors committed to building stronger <br />{" "}
            bodies and focused minds.
          </p>
        </div>

        {/* Trainers Interactive Row */}
        <div className="w-full max-w-[1170px] mx-auto relative group/section mb-12">
          {/* Navigation Arrows - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[-24px] z-20">
            <button
              type="button"
              onClick={() => handlePrev()}
              className="w-12 h-12 rounded-full border-[1.6px] border-[#F5F5F5] bg-white flex items-center justify-center text-[#093600] shadow-[0_4px_14px_0_rgba(0,0,0,0.10)] transition-all hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.15)] cursor-pointer"
              aria-label="Previous trainer"
            >
              <ArrowLeft size={20} />
            </button>
          </div>
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[-24px] z-20">
            <button
              type="button"
              onClick={() => handleNext()}
              className="w-12 h-12 rounded-full bg-[#093600] flex items-center justify-center text-white shadow-lg transition-all hover:shadow-xl cursor-pointer"
              aria-label="Next trainer"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex items-center gap-5 h-[340px] w-full overflow-hidden">
            {visibleTrainers.map((trainer, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={trainer.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.4, 0, 0.2, 1] as const,
                  }}
                  className="h-full"
                  style={{
                    flex: isActive ? "3.35 1 0%" : "1 1 0%",
                    minWidth: "80px",
                  }}
                >
                  <Link
                    href="/trainer-details"
                    className="relative block w-full h-full overflow-hidden rounded-[20px] cursor-pointer group"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        fill
                        className={
                          "object-cover transition-all duration-700 " +
                          (isActive
                            ? "grayscale-0 scale-105"
                            : "grayscale opacity-80 scale-100 group-hover:grayscale-0")
                        }
                        referrerPolicy="no-referrer"
                      />

                      {/* Gradient Overlay */}
                      <div
                        className={
                          "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700 " +
                          (isActive ? "opacity-100" : "opacity-0")
                        }
                      />

                      {/* Content */}
                      <div
                        className={
                          "absolute bottom-0 left-0 w-full p-6 flex flex-col items-center text-center transition-all duration-700 " +
                          (isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8")
                        }
                      >
                        <h3 className="text-white font-sans text-[20px] font-semibold leading-[28px] whitespace-nowrap">
                          {trainer.name}
                        </h3>
                        <p className="text-white/70 font-sans text-[16px] font-normal leading-[24px] tracking-[-0.4px] whitespace-nowrap">
                          {trainer.role}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile/Tablet View */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {trainers.map((trainer) => (
              <Link
                key={trainer.id}
                href="/trainer-details"
                className="flex-shrink-0 w-[280px] h-[360px] relative rounded-[20px] overflow-hidden snap-center"
              >
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center text-center">
                  <h3 className="text-white font-sans text-[20px] font-semibold leading-[28px]">
                    {trainer.name}
                  </h3>
                  <p className="text-white/70 font-sans text-[16px] font-normal leading-[24px] tracking-[-0.4px]">
                    {trainer.role}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="w-full max-w-[1170px] bg-white rounded-[20px] p-8 md:p-[32px_48px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[130px] shadow-[0px_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h4 className="text-[#093600] font-serif text-[24px] md:text-[30px] font-semibold leading-[1.2] tracking-[-0.2px]">
              Want to become a coach with us?
            </h4>
            <p className="text-[#093600]/80 font-sans text-[14px] md:text-[16px] font-normal leading-[1.5] tracking-[-0.4px]">
              Share your profile training background and expertise to get
              started.
            </p>
          </div>
          <Link href="/contact">
            <button
              type="button"
              className="flex items-center justify-center gap-3 bg-[#093600] text-white px-7 py-4 rounded-full font-sans font-semibold text-[16px] transition-all duration-500 group whitespace-nowrap hover:bg-[#85FA6D] hover:text-[#0A0D12] text-center shadow-[0px_4px_12px_rgba(10,13,18,0.08)] hover:shadow-[0px_12px_32px_rgba(10,13,18,0.15)]"
            >
              Apply Now
              <div className="relative w-5 h-5 flex items-center justify-center">
                <ArrowRight
                  size={20}
                  className="absolute transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-2 group-hover:scale-75"
                />
                <ArrowUpRight
                  size={20}
                  className="absolute opacity-0 -translate-x-2 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:text-[#0A0D12]"
                />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
