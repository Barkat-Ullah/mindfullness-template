/* eslint-disable @next/next/no-page-custom-font */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      staggerChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export default function Footer({ className }: { className?: string }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <section className={"relative w-full min-h-[900px] flex flex-col items-center overflow-hidden " + (className || "")}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.jiro.build/Solra/background%20image/Footer%2001%20bg.png"
            alt="Footer Background"
            fill
            className="object-cover object-center"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/55" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] w-full px-6 md:px-10 pt-[80px] lg:pt-[200px] pb-6 flex flex-col items-center gap-[96px]">

          {/* Top CTA Content */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center w-full"
          >
            <motion.h2
              variants={itemVariants}
              className="font-serif text-[40px] md:text-[52px] font-semibold leading-[56px] tracking-[-0.8px] text-white mb-4"
            >
              Train With Expert Coaches Today
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-sans text-[18px] font-normal leading-[26px] tracking-[-0.18px] text-white opacity-80 max-w-[620px] mb-8"
            >
              Schedule your coaching session and begin your mind and body transformation journey.
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: "0px 12px 30px rgba(0,0,0,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#85FA6D] text-[#093600] rounded-full font-sans font-semibold transition-all duration-250"
            >
              Get Started Today
              <div className="relative w-5 h-5 overflow-hidden">
                <ArrowRight className="absolute inset-0 transition-all duration-250 group-hover:opacity-0 group-hover:translate-x-2 group-hover:-translate-y-2" />
                <ArrowUpRight className="absolute inset-0 transition-all duration-250 opacity-0 translate-x-[-8px] translate-y-[8px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </motion.button>
          </motion.div>

          {/* Glass Footer Container */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-[1360px] w-full px-6 py-10 md:px-[95px] md:pt-[48px] md:pb-0 flex flex-col items-start gap-16 rounded-[20px] border border-white/20 bg-white/14 backdrop-blur-[10px] transform-gpu overflow-hidden"
          >
            {/* Footer Top Row */}
            <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-12 lg:gap-8">

              {/* Brand Block */}
              <div className="flex flex-col items-start gap-4 max-w-[280px] text-left">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src="https://cdn.jiro.build/Solra/Svg%20icon/Brand%20Only%20logo%20Solra.svg"
                      alt="Solra Logo"
                      fill
                      className="object-contain brightness-0 invert"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-serif text-[38px] font-semibold leading-[48px] tracking-[-0.076px] text-white transition-colors duration-300 group-hover:text-[#85FA6D]">Solra</h3>
                </Link>
                <p className="font-sans text-[16px] leading-[24px] tracking-[-0.4px] text-white opacity-90">
                  A complete mind and body transformation ecosystem designed to deliver measurable results lasting habits.
                </p>
              </div>

              {/* Navigation Columns */}
              <div className="flex flex-wrap justify-start gap-12 md:gap-[80px]">
                {/* Navigate */}
                <div className="flex flex-col items-start gap-6">
                  <h4 className="font-serif text-[20px] font-semibold leading-[28px] tracking-[-0.04px] text-white">Navigate</h4>
                  <ul className="flex flex-col items-start gap-4">
                    {["Services", "About", "Contact", "Reviews"].map((link: string) => (
                      <li key={link}>
                        <a href="#" className="font-sans text-[16px] leading-[24px] tracking-[-0.4px] text-white opacity-90 hover:text-[#85FA6D] hover:font-medium transition-all duration-200">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="flex flex-col items-start gap-6">
                  <h4 className="font-serif text-[20px] font-semibold leading-[28px] tracking-[-0.04px] text-white">Solution</h4>
                  <ul className="flex flex-col items-start gap-4">
                    {["Latest News", "Career", "Gain Profession", "Blogs"].map((link: string) => (
                      <li key={link}>
                        <a href="#" className="font-sans text-[16px] leading-[24px] tracking-[-0.4px] text-white opacity-90 hover:text-[#85FA6D] hover:font-medium transition-all duration-200">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column (Newsletter) */}
              <div className="flex flex-col items-start gap-6 max-w-[400px] w-full text-left">
                <div className="flex flex-col items-start gap-3">
                  <h4 className="font-serif text-[20px] font-semibold leading-[28px] tracking-[-0.04px] text-white">Stay Connected with Nature</h4>
                  <p className="font-sans text-[16px] leading-[24px] tracking-[-0.4px] text-white opacity-90">
                    Join our community of explorers and receive updates on new destinations eco-friendly stays and exclusive travel offers.
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-white/20 rounded-full p-1.5 w-full max-w-[360px] md:max-w-none">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-transparent border-none outline-none font-sans text-[14px] text-white placeholder:text-white/60 min-w-0"
                  />
                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2.5 bg-[#093600] text-white rounded-full font-sans text-[14px] font-medium transition-all duration-250 shrink-0"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/20" />

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6 pb-6">
              <p className="font-sans text-[12px] leading-[18px] tracking-[-0.192px] text-[#EDFBEA] opacity-80 text-left">
                {"\u00A9 Copyright "}
                <a href="https://yscale.studio/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 hover:text-[#85FA6D] transition-all duration-200">Yscale Studio</a>
                {" All rights reserved 2026"}
              </p>

              <div className="flex items-center gap-6">
                {["Privacy & Policy", "Terms & Condition"].map((link: string) => (
                  <a
                    key={link}
                    href="#"
                    className="font-sans text-[12px] leading-[18px] tracking-[-0.192px] text-[#EDFBEA] opacity-90 hover:text-[#85FA6D] transition-all duration-200 text-left md:text-right"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
