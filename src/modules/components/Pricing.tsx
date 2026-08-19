"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

interface Plan {
  id: number;
  title: string;
  saving: string;
  total: string;
  subtotal: string;
  features: boolean[];
}

const plans: Plan[] = [
  {
    id: 1,
    title: "Online Transformation",
    saving: "6% Saving",
    total: "$89.00",
    subtotal: "$49.00",
    features: [true, true, true, true, true, false, false],
  },
  {
    id: 2,
    title: "Community Plan",
    saving: "16% Saving",
    total: "$149.00",
    subtotal: "$99.00",
    features: [true, true, true, true, true, false, false],
  },
  {
    id: 3,
    title: "1:1 Personal Coaching",
    saving: "24% Saving",
    total: "$350.00",
    subtotal: "$249.00",
    features: [true, true, true, true, true, true, true],
  },
];

const featureLabels: string[] = [
  "Personalized Workout Plans",
  "Program Duration Options",
  "Live and Recorded Sessions",
  "Community Access",
  "Mindfulness and Breathwork",
  "Priority Support",
  "1 on 1 Coaching Access",
];

function FeatureBoxContent({
  billingCycle,
  setBillingCycle,
  currentPlan,
}: {
  billingCycle: "monthly" | "one-time";
  setBillingCycle: (v: "monthly" | "one-time") => void;
  currentPlan: Plan;
}) {
  return (
    <>
      <div className="inline-flex p-1 rounded-full bg-[#EDFBEA] self-start">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={
            "px-4 py-1.5 rounded-full text-[14px] font-medium transition-all duration-300 " +
            (billingCycle === "monthly"
              ? "bg-[#093600] text-white"
              : "text-[#093600] opacity-60")
          }
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("one-time")}
          className={
            "px-4 py-1.5 rounded-full text-[14px] font-medium transition-all duration-300 " +
            (billingCycle === "one-time"
              ? "bg-[#093600] text-white"
              : "text-[#093600] opacity-60")
          }
        >
          One Time
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-[#093600] text-[16px] font-semibold font-sans">
          Included:
        </h4>
        <ul className="flex flex-col gap-4">
          {featureLabels.map((label: string, idx: number) => (
            <li key={idx} className="flex items-center justify-between gap-3">
              <span
                className={
                  "text-[16px] font-normal font-sans " +
                  (currentPlan.features[idx]
                    ? "text-[#093600]"
                    : "text-[#093600] opacity-40")
                }
              >
                {label}
              </span>
              {currentPlan.features[idx] ? (
                <CheckCircle2 size={20} className="text-[#093600] shrink-0" />
              ) : (
                <XCircle
                  size={20}
                  className="text-[#093600] opacity-40 shrink-0"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default function Pricing({ className }: { className?: string }) {
  const [activePlanId, setActivePlanId] = useState<number>(2);
  const [hoveredPlanId, setHoveredPlanId] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "one-time">(
    "monthly",
  );

  const currentPlan =
    plans.find((p: Plan) => p.id === (hoveredPlanId ?? activePlanId)) ||
    plans[1];

  const containerVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
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
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
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
        href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        id="pricing-02-section"
        className={
          "w-full flex items-center justify-center bg-white py-[120px] px-4 md:px-[135px] overflow-hidden " +
          (className || "")
        }
      >
        <motion.div
          id="pricing-02-container"
          className="w-full max-w-[1440px] flex flex-col items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <div
            id="pricing-02-header"
            className="flex flex-col items-center gap-4 max-w-[800px] mb-[80px]"
          >
            <motion.h2
              id="pricing-02-heading"
              variants={itemVariants}
              className="text-[#093600] text-[48px] font-bold leading-[120%] text-center font-serif"
              style={{ fontFamily: '"Crimson Pro", serif' }}
            >
              Choose Your Personalized
              <br />
              Wellness Path
            </motion.h2>
            <motion.p
              id="pricing-02-subheading"
              variants={itemVariants}
              className="text-[#093600] text-[18px] leading-[28px] opacity-80 text-center font-normal font-sans"
            >
              Online community or personal coaching tailored to your journey.
            </motion.p>
          </div>

          {/* Main Layout */}
          <div
            id="pricing-02-main"
            className="flex flex-col lg:flex-row w-full max-w-[1170px] gap-6 items-stretch mb-[48px]"
          >
            {/* LEFT SIDE — Feature Box (Desktop Only) */}
            <motion.div
              id="pricing-02-feature-box-desktop"
              variants={itemVariants}
              className="hidden lg:flex w-[374px] p-6 rounded-[20px] border border-[#E5E7EB] flex-col gap-6 bg-white"
            >
              <FeatureBoxContent
                billingCycle={billingCycle}
                setBillingCycle={setBillingCycle}
                currentPlan={currentPlan}
              />
            </motion.div>

            {/* RIGHT SIDE — Pricing Plans */}
            <motion.div
              id="pricing-02-plans"
              variants={itemVariants}
              className="flex-1 flex flex-col gap-4"
            >
              {plans.map((plan: Plan) => {
                const isActive = (hoveredPlanId ?? activePlanId) === plan.id;

                return (
                  <React.Fragment key={plan.id}>
                    <div
                      id={"pricing-plan-" + plan.id}
                      onClick={() => setActivePlanId(plan.id)}
                      onMouseEnter={() => setHoveredPlanId(plan.id)}
                      onMouseLeave={() => setHoveredPlanId(null)}
                      className={
                        "group flex flex-1 items-center justify-between p-5 md:p-6 rounded-[16px] border transition-all duration-300 cursor-pointer " +
                        (isActive
                          ? "bg-[#093600] text-white border-transparent scale-[1.01] shadow-[0px_10px_24px_rgba(0,0,0,0.08)]"
                          : "bg-white text-[#093600] border-[#E5E7EB]")
                      }
                    >
                      <div className="flex items-center gap-4">
                        <div className="shrink-0">
                          {isActive ? (
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#093600]">
                              <CheckCircle2 size={16} strokeWidth={3} />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-[#093600]/20" />
                          )}
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                          <h3
                            className="text-[20px] font-semibold font-serif"
                            style={{ fontFamily: '"Crimson Pro", serif' }}
                          >
                            {plan.title}
                          </h3>
                          <span
                            className={
                              "inline-block px-2 py-0.5 rounded-full text-[12px] font-medium w-fit " +
                              (isActive
                                ? "bg-white/20 text-white"
                                : "bg-[#D1FADF] text-[#093600]")
                            }
                          >
                            {plan.saving}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 md:gap-12">
                        <div className="hidden md:flex flex-col items-center">
                          <span className="text-[14px] font-normal opacity-60 font-sans mb-1">
                            Total
                          </span>
                          <span
                            className="text-[24px] font-semibold line-through opacity-40 font-serif"
                            style={{ fontFamily: '"Crimson Pro", serif' }}
                          >
                            {plan.total}
                          </span>
                        </div>
                        <div className="flex flex-col items-center shrink-0">
                          <span className="text-[14px] font-normal opacity-60 font-sans mb-1">
                            Sub-Total
                          </span>
                          <span
                            className="text-[32px] font-bold font-serif"
                            style={{ fontFamily: '"Crimson Pro", serif' }}
                          >
                            {plan.subtotal}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Feature Box */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          key={"mobile-feature-" + plan.id}
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            marginTop: 16,
                          }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          className="lg:hidden overflow-hidden"
                        >
                          <div className="p-6 rounded-[20px] border border-[#E5E7EB] flex flex-col gap-6 bg-white mb-4">
                            <FeatureBoxContent
                              billingCycle={billingCycle}
                              setBillingCycle={setBillingCycle}
                              currentPlan={plan}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom Features Row */}
          <motion.div
            id="pricing-02-bottom-features"
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-[32px]"
          >
            <div className="flex items-center gap-2 text-[#093600]">
              <XCircle size={20} className="opacity-80" />
              <span className="text-[16px] font-medium font-sans">
                No Long Term Contracts
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#093600]">
              <MessageSquare size={20} className="opacity-80" />
              <span className="text-[16px] font-medium font-sans">
                Expert Support On Demand
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#093600]">
              <ShieldCheck size={20} className="opacity-80" />
              <span className="text-[16px] font-medium font-sans">
                Secure and Easy Signup
              </span>
            </div>
          </motion.div>

          {/* Social Proof Row */}
          <motion.div
            id="pricing-02-social-proof"
            variants={itemVariants}
            className="flex items-center gap-3 bg-[#EDFBEA] px-4 py-2 rounded-full"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i: number) => (
                <Image
                  key={i}
                  src={"https://picsum.photos/seed/user" + i + "/40/40"}
                  alt={"User " + i}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-[#093600] text-[14px] font-medium font-sans">
              Join thousands who rely on our coaching programs every day.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
