"use client";

import React from "react";
import Header from "@/modules/shared/Header";
import Footer from "@/modules/shared/Footer";
import NotFoundContent from "@/modules/NotFound";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f180e] text-[#EDFBEA] selection:bg-[#85FA6D] selection:text-[#093600]">
      <Header />
      <NotFoundContent />
      <Footer />
    </div>
  );
}
