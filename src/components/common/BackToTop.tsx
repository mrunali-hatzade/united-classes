"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-30 w-11 h-11 rounded-full bg-[#162746]/90 hover:bg-[#2563EB] text-slate-300 hover:text-white border border-slate-700/80 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
