"use client";
import Footer from "@/modules/shared/Footer";
import Header from "@/modules/shared/Header";
import React from "react";

const CommonLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
