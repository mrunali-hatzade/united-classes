"use client";

import React, { useEffect } from "react";
import { X, Sparkles, GraduationCap } from "lucide-react";
import DemoEnquiryForm from "./DemoEnquiryForm";
import { siteConfig } from "@/config/site";

interface DemoEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export default function DemoEnquiryModal({
  isOpen,
  onClose,
  defaultCourse = "",
}: DemoEnquiryModalProps) {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#070D19]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        className="relative w-full max-w-xl bg-[#101D38] border border-blue-500/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-blue-950/80 p-5 sm:p-7 z-10 my-auto text-left transition-all animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close demo booking modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-600/20 text-cyan-400 border border-blue-500/30 mb-2.5">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Admissions Open {siteConfig.academicSession}</span>
          </div>

          <h2 id="demo-modal-title" className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
            Book Your Free Demo Lecture
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Experience our concept-first Science pedagogy (Physics, Chemistry, Mathematics &amp; Biology) in {siteConfig.location.city}. Reserve your seat before the batch fills up.
          </p>
        </div>

        {/* Demo Enquiry Form */}
        <DemoEnquiryForm defaultCourse={defaultCourse} isCompact={false} />
      </div>
    </div>
  );
}
