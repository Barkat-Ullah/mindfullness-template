"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const MotionImage = motion.create(Image);

interface ServiceItem {
  id: number;
  title: string;
  label: string;
  description: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: 0,
    title: "Functional Fitness",
    label: "Strength",
    description:
      "Expert guided programs that build strength reduce stress and create lasting balance.",
    image: "https://cdn.jiro.build/Solra/All%20Images/Services%202%20img.png",
  },
  {
    id: 1,
    title: "Yoga Therapy",
    label: "Flow",
    description:
      "Connect mind and body through specialized flow sequences designed for flexibility and inner peace.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Mindfulness Training",
    label: "Calm",
    description:
      "Master the art of presence with guided meditation and cognitive techniques for mental clarity.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Personal Coaching",
    label: "Elite",
    description:
      "One-on-one sessions tailored to your specific health goals with data-driven progress tracking.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Community Classes",
    label: "Connect",
    description:
      "Join a supportive group environment that fosters motivation and collective wellness growth.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000",
  },
];

function TestimonialCard() {
  return (
    <div className="flex flex-col sm:flex-row p-5 items-center justify-between gap-4 w-full rounded-[13px] bg-[#EDFBEA]">
      <div className="flex items-center gap-3">
        <Image
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
          alt="William Johnson"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col">
          <span className="text-[#093600] font-inter text-base font-semibold leading-6">
            William Johnson
          </span>
          <span className="text-[#0A0D12] opacity-80 font-inter text-sm font-normal leading-[22px]">
            64 years old
          </span>
        </div>
      </div>
      <p className="text-[#093600] font-inter text-base italic font-medium leading-6 max-w-[274px] text-center sm:text-left">
        &quot;They truly understand my goals and push me beyond limits.&quot;
      </p>
    </div>
  );
}

interface ServiceCardProps {
  service: ServiceItem;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function ServiceCard({
  service,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ServiceCardProps) {
  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={false}
      animate={{
        backgroundColor: isActive ? "#093600" : "#FFFFFF",
        color: isActive ? "#FFFFFF" : "#093600",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" as const }}
      className={
        "group cursor-pointer flex flex-col w-full p-[12px_16px] lg:p-5 rounded-[12px] lg:rounded-[20px] border transition-all duration-300 " +
        (isActive
          ? "border-transparent"
          : "border-[#EDFBEA] lg:border-[#e5e5e5] hover:border-[#85FA6D]/30")
      }
    >
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-[6px] flex-1 pr-4">
          <div className="flex items-center gap-2">
            <h4
              className={
                "font-crimson text-[24px] lg:text-[30px] font-semibold leading-[32px] lg:leading-[36px] tracking-[-0.2px] min-w-0 " +
                (isActive ? "text-white" : "text-[#093600]")
              }
            >
              {service.title}
            </h4>
            <span
              className={
                "font-inter text-[12px] font-medium leading-[18px] " +
                (isActive ? "text-[#85FA6D]" : "text-[#093600] opacity-60")
              }
            >
              ({service.label})
            </span>
          </div>
        </div>

        <motion.div
          animate={{
            backgroundColor: isActive ? "#85FA6D" : "#FFFFFF",
            borderColor: isActive ? "#85FA6D" : "#E2F9DE",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" as const }}
          className={
            "flex-shrink-0 w-[32px] h-[32px] lg:w-[58px] lg:h-[58px] rounded-full border-[0.552px] lg:border flex items-center justify-center transition-all duration-300 group-hover:shadow-md text-[#093600]"
          }
        >
          {isActive ? (
            <ArrowUpRight className="w-4 h-4 lg:w-6 lg:h-6" />
          ) : (
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ type: "spring" as const, stiffness: 400 }}
            >
              <ArrowRight className="w-4 h-4 lg:w-6 lg:h-6" />
            </motion.div>
          )}
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            key={"expanded-" + service.id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-inter text-[14px] lg:text-[18px] font-normal leading-[22px] lg:leading-[26px] tracking-[-0.18px] text-[#EDFBEA] opacity-80 mt-2 mb-4 lg:max-w-none">
              {service.description}
            </p>
            <div className="md:hidden relative w-full aspect-[16/11] rounded-[24px] overflow-hidden mb-1 shadow-sm">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 767px) 100vw, 0px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Features({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const currentIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section
        id="services"
        className={
          "w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#fcfcfc] " + (className || "")
        }
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-[#0A0D12] opacity-80 font-inter text-base font-medium leading-6 mb-2 uppercase tracking-wide">
              &bull; OUR SERVICES
            </span>
            <h2 className="text-[#093600] font-crimson text-[40px] sm:text-[52px] font-semibold leading-[48px] sm:leading-[56px] tracking-[-0.8px]">
              Complete Wellness Programs
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-12">
            <div className="w-full md:w-1/2 flex flex-col gap-6 order-2 md:order-1">
              <div className="hidden md:block relative w-full aspect-[560/500] lg:h-[600px] rounded-[30px] overflow-hidden shadow-sm">
                <AnimatePresence mode="wait">
                  <MotionImage
                    key={currentIndex}
                    src={services[currentIndex].image}
                    alt={services[currentIndex].title}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeInOut" as const }}
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>
              <TestimonialCard />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-3 order-1 md:order-2">
              {services.map((service: ServiceItem, index: number) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isActive={currentIndex === index}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
