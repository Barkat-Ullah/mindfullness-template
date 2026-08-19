"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { HandHeart, Leaf, Brain, Users } from "lucide-react";

const MotionImage = motion.create(Image);

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  titleSecondary: string;
  image: string;
}

interface TabContent {
  id: string;
  label: string;
  features: Feature[];
}

const tabs: TabContent[] = [
  {
    id: "expert",
    label: "Expert Guidance",
    features: [
      {
        id: "expert-1",
        icon: <HandHeart className="w-6 h-6 text-white" />,
        title: "Our vision was to create a complete wellness system ",
        titleSecondary:
          "that blends fitness yoga and mindfulness into one powerful journey.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Feature%2004%20img%203.png",
      },
      {
        id: "expert-2",
        icon: <HandHeart className="w-6 h-6 text-white" />,
        title: "Personalized coaching tailored to your unique goals ",
        titleSecondary:
          "ensuring every movement brings you closer to your peak potential.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Feature%2004%20img%202.png",
      },
      {
        id: "expert-3",
        icon: <HandHeart className="w-6 h-6 text-white" />,
        title: "Expert instructors with years of clinical experience ",
        titleSecondary:
          "guiding you through safe and effective practices for all levels.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Services%202%20img.png",
      },
      {
        id: "expert-4",
        icon: <HandHeart className="w-6 h-6 text-white" />,
        title: "Holistic approach that considers your mental state ",
        titleSecondary:
          "as much as your physical strength for a truly balanced life.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Testimonial%20img%201%20solra.png",
      },
    ],
  },
  {
    id: "growth",
    label: "Sustainable Growth",
    features: [
      {
        id: "growth-1",
        icon: <Leaf className="w-6 h-6 text-white" />,
        title: "We focus on long-term results through habits ",
        titleSecondary:
          "that integrate seamlessly into your daily lifestyle for lasting change.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Services%202%20img.png",
      },
      {
        id: "growth-2",
        icon: <Leaf className="w-6 h-6 text-white" />,
        title: "Progressive training modules that evolve with you ",
        titleSecondary:
          "preventing plateaus and keeping your motivation at its peak.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Feature%2004%20img%203.png",
      },
      {
        id: "growth-3",
        icon: <Leaf className="w-6 h-6 text-white" />,
        title: "Nutritional guidance that supports your energy ",
        titleSecondary:
          "without restrictive diets, focusing on whole-body nourishment.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Feature%2004%20img%202.png",
      },
      {
        id: "growth-4",
        icon: <Leaf className="w-6 h-6 text-white" />,
        title: "Recovery protocols designed to heal and strengthen ",
        titleSecondary:
          "ensuring you can perform consistently week after week.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Testimonial%20img%201%20solra.png",
      },
    ],
  },
  {
    id: "structure",
    label: "Smart Structure",
    features: [
      {
        id: "structure-1",
        icon: <Brain className="w-6 h-6 text-white" />,
        title: "Every session is scientifically designed to optimize ",
        titleSecondary:
          "your physical performance while maintaining mental clarity and focus.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Feature%2004%20img%202.png",
      },
      {
        id: "structure-2",
        icon: <Brain className="w-6 h-6 text-white" />,
        title: "Data-driven insights to track your performance ",
        titleSecondary:
          "giving you a clear picture of your journey and areas for improvement.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Services%202%20img.png",
      },
      {
        id: "structure-3",
        icon: <Brain className="w-6 h-6 text-white" />,
        title: "Efficient 45-minute workouts for busy schedules ",
        titleSecondary:
          "maximizing every minute to deliver high-impact results in less time.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Feature%2004%20img%203.png",
      },
      {
        id: "structure-4",
        icon: <Brain className="w-6 h-6 text-white" />,
        title: "Adaptive programming that adjusts to your energy ",
        titleSecondary:
          "ensuring you train hard when ready and recover when needed.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Testimonial%20img%201%20solra.png",
      },
    ],
  },
  {
    id: "accountability",
    label: "Real Accountability",
    features: [
      {
        id: "accountability-1",
        icon: <Users className="w-6 h-6 text-white" />,
        title: "You are never alone in this journey with our ",
        titleSecondary:
          "dedicated community and expert coaches supporting every step you take.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Testimonial%20img%201%20solra.png",
      },
      {
        id: "accountability-2",
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Weekly check-ins to keep you on the right path ",
        titleSecondary:
          "addressing challenges early and celebrating every win together.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Feature%2004%20img%202.png",
      },
      {
        id: "accountability-3",
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Interactive group challenges to boost engagement ",
        titleSecondary:
          "fostering a sense of belonging and healthy competition.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Services%202%20img.png",
      },
      {
        id: "accountability-4",
        icon: <Users className="w-6 h-6 text-white" />,
        title: "24/7 support access through our member portal ",
        titleSecondary: "getting your questions answered whenever they arise.",
        image:
          "https://cdn.jiro.build/Solra/All%20Images/Feature%2004%20img%203.png",
      },
    ],
  },
];

export default function WhyUs({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setActiveFeature(0);
  };

  const currentTab = tabs[activeTab];
  const currentFeature = currentTab.features[activeFeature];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0.2, y: 20 },
    visible: { opacity: 1, y: 0 },
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
        href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>
        {
          "\n        .no-scrollbar::-webkit-scrollbar { display: none; }\n        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }\n      "
        }
      </style>

      <section
        className={
          "flex w-full min-h-screen bg-[#EDFBEA] justify-center overflow-hidden " +
          (className || "")
        }
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="flex w-full max-w-[1440px] px-6 sm:px-12 lg:px-[135px] py-16 lg:py-[120px] flex-col items-start gap-12 lg:gap-[80px]"
        >
          {/* Header Layout */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full lg:h-[124px] self-stretch">
            <motion.h2
              variants={itemVariants}
              className="text-[#093600] text-[36px] sm:text-[42px] lg:text-[48px] font-bold leading-[120%] tracking-[-0.3px] max-w-[400px]"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Why Choose to
              <br />
              Train With Us?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-[#093600] opacity-80 text-[18px] font-normal leading-[26px] tracking-[-0.18px] lg:w-[472px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We combine fitness yoga and mindset training to create sustainable
              results that go beyond temporary.
            </motion.p>
          </div>

          {/* Content Card Container */}
          <motion.div
            variants={itemVariants}
            className="flex w-full max-w-[1170px] p-6 sm:p-8 lg:p-[48px] flex-col items-center gap-0 rounded-[32px] lg:rounded-[40px] bg-white mx-auto shadow-sm"
          >
            {/* Top Pills Navigation */}
            <div className="flex w-full overflow-x-auto no-scrollbar pb-2 lg:pb-0 mb-8 lg:mb-[48px]">
              <div className="flex p-2 lg:p-[16px_10px] justify-start lg:justify-center items-center gap-4 lg:gap-[16px] self-stretch rounded-full bg-[#EDFBEA] min-w-max mx-auto lg:w-[1074px]">
                {tabs.map((tab: TabContent, idx: number) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(idx)}
                    onMouseEnter={() => handleTabChange(idx)}
                    className={
                      "flex px-4 py-3 lg:px-6 lg:py-4 justify-center items-center gap-[10px] rounded-full transition-all duration-300 " +
                      (activeTab === idx
                        ? "bg-white shadow-[0px_6px_16px_rgba(0,0,0,0.05)]"
                        : "hover:bg-white/50")
                    }
                  >
                    <div
                      className={
                        "w-2 h-2 rounded-full transition-colors duration-300 " +
                        (activeTab === idx ? "bg-[#093600]" : "bg-[#093600]/30")
                      }
                    />
                    <span
                      className="text-[#093600] text-[16px] lg:text-[20px] font-semibold leading-[28px] whitespace-nowrap"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Card with Swipe Support */}
            <motion.div
              className="flex flex-col lg:flex-row p-4 sm:p-6 lg:p-[24px_24px_24px_48px] items-center gap-8 lg:gap-[48px] self-stretch bg-[#EDFBEA] rounded-[30px] cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(
                _event: MouseEvent | TouchEvent | PointerEvent,
                info: { offset: { x: number; y: number } },
              ) => {
                const threshold = 50;
                if (info.offset.x < -threshold) {
                  setActiveFeature(
                    (prev: number) => (prev + 1) % currentTab.features.length,
                  );
                } else if (info.offset.x > threshold) {
                  setActiveFeature(
                    (prev: number) =>
                      (prev - 1 + currentTab.features.length) %
                      currentTab.features.length,
                  );
                }
              }}
            >
              {/* Left Content */}
              <div className="flex flex-col items-start gap-6 flex-1 pointer-events-none select-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature.id}
                    initial={{ opacity: 1, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut" as const,
                    }}
                    className="flex flex-col items-start gap-6"
                  >
                    {/* Icon */}
                    <div className="flex w-14 h-14 p-3 items-center justify-center rounded-full bg-[#093600]">
                      {currentFeature.icon}
                    </div>

                    {/* Vision Text */}
                    <h3
                      className="text-[#093600] text-[28px] sm:text-[32px] lg:text-[38px] font-semibold leading-[1.2] lg:leading-[48px] tracking-[-0.076px]"
                      style={{ fontFamily: "'Crimson Text', serif" }}
                    >
                      {(currentFeature.title + currentFeature.titleSecondary)
                        .split("")
                        .map((char: string, i: number) => (
                          <motion.span
                            key={currentFeature.id + "-char-" + i}
                            initial={{ opacity: 0.2 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.8,
                              delay: i * 0.012,
                              ease: "easeOut" as const,
                            }}
                            className="inline"
                          >
                            {char}
                          </motion.span>
                        ))}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-[452px] h-[300px] sm:h-[400px] lg:h-[444px] relative overflow-hidden rounded-[30px] pointer-events-none select-none">
                <AnimatePresence mode="wait">
                  <MotionImage
                    key={currentFeature.id + "-img"}
                    src={currentFeature.image}
                    alt={currentTab.label}
                    fill
                    sizes="(max-width: 1023px) 100vw, 452px"
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="object-cover"
                  />
                </AnimatePresence>
                {/* Breathing Motion Overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut" as const,
                    repeat: Infinity as number,
                  }}
                />
              </div>
            </motion.div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-[8px] mt-6 lg:mt-[24px]">
              {currentTab.features.map((_: Feature, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  onMouseEnter={() => setActiveFeature(idx)}
                  className={
                    "w-[10px] h-[10px] rounded-full transition-all duration-300 border border-[#093600] " +
                    (activeFeature === idx
                      ? "bg-[#093600]"
                      : "bg-transparent opacity-30")
                  }
                  aria-label={"Go to feature " + (idx + 1)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
