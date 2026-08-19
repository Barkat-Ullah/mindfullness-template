"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Droplets, List, BookOpen, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import Hero from "./Hero";

function DropdownItem({
  href,
  icon,
  title,
  desc,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
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
    </Link>
  );
}

export default function Header({ className }: { className?: string }) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Reset the mobile drawer whenever the route changes (nav links, logo click,
  // or browser back/forward). This is done during render (the React-blessed
  // "adjust state when a prop changes" pattern) instead of inside an effect,
  // which would warn about cascading renders from synchronous setState.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMobileNavOpen(false);
    setIsMobileSubmenuOpen(false);
  }

  // Toggle a stronger background + shadow once the page is scrolled so the
  // fixed navbar stays legible over page content. Pure subscription — the
  // scrolled state is only updated from the scroll event callback.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href;
  const isHome = pathname === "/";

  return (
    <>
      {/* --- Navigation (fixed) --- */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-[100] border-b border-white/10 backdrop-blur-xl transition-[background-color,box-shadow] duration-300",
          scrolled || !isHome
            ? "bg-[rgba(20,28,18,0.88)] shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            : "bg-[rgba(20,28,18,0.55)]"
        )}
        role="banner"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[135px]">
          <nav className="flex py-5 items-center justify-between gap-6 self-stretch" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="flex items-center w-[175px] h-10 no-underline group" aria-label="FitZen home">
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
            </Link>

            {/* Desktop Nav Links */}
            <div
              className="hidden md:flex px-4 py-2 items-center gap-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-[5.5px]"
              role="list"
            >
              <Link
                href="/"
                role="listitem"
                aria-current={isActive("/") ? "page" : undefined}
                className={cn(
                  "font-sans text-base no-underline transition-colors duration-200",
                  isActive("/")
                    ? "text-[#85FA6D] font-semibold"
                    : "text-white font-normal hover:text-[#85FA6D]"
                )}
              >
                Home
              </Link>
              <Link
                href="/#about"
                role="listitem"
                aria-current={isActive("/#about") ? "page" : undefined}
                className={cn(
                  "font-sans text-base no-underline transition-colors duration-200",
                  isActive("/#about")
                    ? "text-[#85FA6D] font-semibold"
                    : "text-white font-normal hover:text-[#85FA6D]"
                )}
              >
                About
              </Link>
              <Link
                href="/contact"
                role="listitem"
                aria-current={isActive("/contact") ? "page" : undefined}
                className={cn(
                  "font-sans text-base no-underline transition-colors duration-200",
                  isActive("/contact")
                    ? "text-[#85FA6D] font-semibold"
                    : "text-white font-normal hover:text-[#85FA6D]"
                )}
              >
                Contact
              </Link>

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
                        <DropdownItem href="/#services" onClick={() => setIsMoreOpen(false)} icon={<MapPin />} title="Personal Training" desc="1-on-1 coaching sessions" />
                        <DropdownItem href="/#services" onClick={() => setIsMoreOpen(false)} icon={<Droplets />} title="Yoga & Mindfulness" desc="Classes for all levels" />
                        <DropdownItem href="/#services" onClick={() => setIsMoreOpen(false)} icon={<List />} title="Nutrition Plans" desc="Personalized meal guides" />
                      </div>
                      <div className="py-1 border-t border-white/[0.08] mt-1 pt-2">
                        <p className="text-[10px] font-bold tracking-[0.8px] uppercase text-white/35 px-3 pb-[6px] pt-1">Resources</p>
                        <DropdownItem href="/#faq" onClick={() => setIsMoreOpen(false)} icon={<BookOpen />} title="Blog & Articles" desc="Tips, guides & wellness news" />
                        <DropdownItem href="/#faq" onClick={() => setIsMoreOpen(false)} icon={<Clock />} title="Free Webinars" desc="Live & recorded sessions" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden md:flex px-6 py-3 justify-center items-center rounded-full bg-white text-[#0f1a0e] text-sm font-semibold no-underline transition-all hover:bg-[#85FA6D] hover:-translate-y-[1px] whitespace-nowrap"
            >
              Book a Call
            </Link>

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
                <Link
                  href="/"
                  onClick={() => setIsMobileNavOpen(false)}
                  aria-current={isActive("/") ? "page" : undefined}
                  className={cn(
                    "flex items-center py-[13px] text-base no-underline border-b border-white/[0.07]",
                    isActive("/")
                      ? "text-[#85FA6D] font-semibold"
                      : "text-white/85 font-normal hover:text-[#85FA6D]"
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/#about"
                  onClick={() => setIsMobileNavOpen(false)}
                  aria-current={isActive("/#about") ? "page" : undefined}
                  className={cn(
                    "flex items-center py-[13px] text-base no-underline border-b border-white/[0.07]",
                    isActive("/#about")
                      ? "text-[#85FA6D] font-semibold"
                      : "text-white/85 font-normal hover:text-[#85FA6D]"
                  )}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileNavOpen(false)}
                  aria-current={isActive("/contact") ? "page" : undefined}
                  className={cn(
                    "flex items-center py-[13px] text-base no-underline border-b border-white/[0.07]",
                    isActive("/contact")
                      ? "text-[#85FA6D] font-semibold"
                      : "text-white/85 font-normal hover:text-[#85FA6D]"
                  )}
                >
                  Contact
                </Link>

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
                    <Link href="/#services" onClick={() => setIsMobileNavOpen(false)} className="text-sm text-white/60 py-[10px] border-b border-white/5 no-underline hover:text-[#85FA6D] transition-colors">Personal Training</Link>
                    <Link href="/#services" onClick={() => setIsMobileNavOpen(false)} className="text-sm text-white/60 py-[10px] border-b border-white/5 no-underline hover:text-[#85FA6D] transition-colors">Yoga & Mindfulness</Link>
                    <Link href="/#services" onClick={() => setIsMobileNavOpen(false)} className="text-sm text-white/60 py-[10px] border-b border-white/5 no-underline hover:text-[#85FA6D] transition-colors">Nutrition Plans</Link>
                    <Link href="/#faq" onClick={() => setIsMobileNavOpen(false)} className="text-sm text-white/60 py-[10px] border-b border-white/5 no-underline hover:text-[#85FA6D] transition-colors">Blog & Articles</Link>
                    <Link href="/#faq" onClick={() => setIsMobileNavOpen(false)} className="text-sm text-white/60 py-[10px] border-b border-white/5 no-underline hover:text-[#85FA6D] transition-colors">Free Webinars</Link>
                  </div>
                )}

                <Link
                  href="/contact"
                  onClick={() => setIsMobileNavOpen(false)}
                  className="flex mt-5 px-7 py-[14px] justify-center rounded-full bg-[#85FA6D] text-[#0f1a0e] font-bold text-[15px] no-underline"
                >
                  Book a Call
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {isHome && <Hero className={className} />}
    </>
  );
}
