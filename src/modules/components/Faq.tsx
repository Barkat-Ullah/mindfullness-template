/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowRight } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Is this program beginner friendly?",
    answer:
      "Yes, our programs are designed to accommodate all fitness levels, from absolute beginners to advanced athletes. We provide modifications for every exercise to ensure you can progress safely and effectively at your own pace.",
  },
  {
    id: 2,
    question: "Do I need gym equipment?",
    answer:
      "No. Many of our workouts use bodyweight training and simple mobility exercises. Optional equipment can enhance results but is not mandatory. We focus on functional movements that you can perform anywhere.",
  },
  {
    id: 3,
    question: "Is mindfulness included in all plans?",
    answer:
      "Absolutely. We believe in a holistic approach to wellness, so mindfulness, meditation, and mental well-being practices are core components of every plan we offer, helping you achieve balance in both mind and body.",
  },
  {
    id: 4,
    question: "How long before I see results?",
    answer:
      "While individual results vary, most members report feeling increased energy, improved mood, and better mental clarity within the first two weeks. Physical transformations typically become noticeable after 4-6 weeks of consistent practice.",
  },
  {
    id: 5,
    question: "Can I switch between plans later?",
    answer:
      "Yes, you can easily upgrade or switch your plan at any time through your account settings. Our goal is to support your evolving wellness journey, so we make it simple to adjust your subscription as your needs change.",
  },
  {
    id: 6,
    question: "How much time do I need daily?",
    answer:
      "We recommend dedicating at least 20-30 minutes daily to see consistent progress. However, we also offer 'Express' 10-minute sessions for those particularly busy days, ensuring you can always find time for your well-being.",
  },
];

export default function Faqs() {
  const [activeId, setActiveId] = useState<number | null>(2);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <Link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
        
      />
      <section id="faq" className="flex flex-col items-center w-full bg-white py-[80px] md:py-[120px] px-6 md:px-[135px] gap-[60px] md:gap-[80px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center w-full md:max-w-[772px] gap-4">
          <h2 className="font-serif text-[36px] md:text-[52px] md:max-w-[590px] font-semibold leading-[1.1] md:leading-[56px] tracking-[-0.8px] text-[#093600]">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] md:max-w-[475px] font-normal leading-[1.4] md:leading-[26px] tracking-[-0.18px] text-[#093600] opacity-80">
            Everything you need to know before starting your mind and body
            transformation journey.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col w-full max-w-[350px] md:max-w-[772px] gap-2 md:gap-4 items-start">
          {faqs.map((faq: FAQItem) => {
            const isActive = activeId === faq.id;
            return (
              <div
                key={faq.id}
                className={
                  "group flex flex-col w-full rounded-[8px] md:rounded-[12px] border transition-all duration-300 overflow-hidden self-stretch " +
                  (isActive
                    ? "bg-[#093600] border-[#093600] shadow-lg"
                    : "bg-[#EDFBEA] border-[#E9EAEB] hover:border-[#093600]/20")
                }
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className={
                    "flex items-center justify-between w-full p-[10px_8px_10px_10px] md:p-[18px_18px_18px_24px] text-left gap-5 md:gap-4 " +
                    (isActive ? "items-start" : "items-center")
                  }
                >
                  <span
                    className={
                      "font-serif text-[18px] md:text-[24px] font-semibold leading-[26px] md:leading-[32px] tracking-[-0.036px] md:tracking-[-0.2px] transition-colors duration-300 " +
                      (isActive ? "text-white" : "text-[#093600]")
                    }
                  >
                    {faq.question}
                  </span>
                  <div
                    className={
                      "flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border border-[#F5F5F5] transition-all duration-300 flex-shrink-0 " +
                      (isActive
                        ? "bg-[#85FA6D] text-[#093600] rotate-0"
                        : "bg-white text-[#093600]")
                    }
                  >
                    {isActive ? (
                      <X size={14} className="md:w-[18px] md:h-[18px]" />
                    ) : (
                      <Plus size={14} className="md:w-[18px] md:h-[18px]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" as const }}
                    >
                      <div className="p-[10px_8px_10px_12px] md:pl-6 md:pr-[18px] md:pb-6 md:pt-1 flex flex-col gap-2 self-stretch">
                        <p className="font-sans text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] tracking-normal md:tracking-[-0.4px] text-white opacity-80 md:max-w-[634px] w-full self-stretch">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="flex flex-col items-center w-full max-w-[350px] md:max-w-[1170px] bg-white md:bg-[#EDFBEA] rounded-[16px] md:rounded-[32px] p-8 md:p-[64px] gap-5 md:gap-8 text-center">
          {/* Avatars */}
          <div className="flex items-center justify-center">
            <div className="flex -space-x-4">
              <div className="relative w-[48px] h-[48px] rounded-full border-[1.2px] border-white md:border-[#EDFBEA] overflow-hidden bg-gray-200 z-10">
                <Image
                  src="https://picsum.photos/seed/man1/100/100"
                  alt="Support Team"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative w-[56px] h-[56px] rounded-full border-[1.4px] border-white md:border-[#EDFBEA] overflow-hidden bg-gray-200 z-20 -mt-1">
                <Image
                  src="https://picsum.photos/seed/man2/100/100"
                  alt="Support Team"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative w-[48px] h-[48px] rounded-full border-[1.2px] border-white md:border-[#EDFBEA] overflow-hidden bg-gray-200 z-10">
                <Image
                  src="https://picsum.photos/seed/man3/100/100"
                  alt="Support Team"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-2 md:gap-3 self-stretch md:max-w-full">
            <h4 className="font-serif text-[24px] md:text-[30px] font-semibold leading-[32px] md:leading-[36px] tracking-[-0.2px] text-[#093600] text-center">
              Still Have Questions?
            </h4>
            <p className="font-sans text-[14px] md:text-[18px] font-normal leading-[22px] md:leading-[26px] tracking-normal md:tracking-[-0.18px] text-[#093600] opacity-80 text-center">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
          </div>

          {/* Button */}
          <Link href="/contact" className="w-full md:w-auto">
            <button className="flex items-center justify-center gap-[12px] w-full md:w-auto px-[22px] py-[12px] bg-[#093600] rounded-full transition-all duration-300 hover:bg-[#85FA6D] shadow-md group">
              <span className="text-[#85FA6D] font-sans text-[16px] font-semibold leading-[24px] transition-colors duration-300 group-hover:text-[#093600]">
                Get in Touch
              </span>
              <ArrowRight
                size={22}
                className="text-[#85FA6D] transition-all duration-300 group-hover:text-[#093600] group-hover:-rotate-45"
              />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
