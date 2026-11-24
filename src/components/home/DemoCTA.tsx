"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Users, CheckCircle2 } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";
import { siteConfig } from "@/config/site";

export default function DemoCTA() {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden shadow-inner">
      {/* Subtle decorative grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold tracking-wider uppercase shadow-md backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Zero Obligation • 100% Free Demo Session</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Experience Our Teaching Before You Enrol
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Book a free demo lecture and discover how concepts in Physics, Chemistry, Mathematics &amp; Biology become crystal clear at <strong className="text-white font-semibold">{siteConfig.brandName}</strong> in {siteConfig.location.city}. See how complex problems become intuitive when taught from first principles.
        </p>

        {/* Action Button */}
        <div className="pt-2 space-y-4">
          <div>
            <span className="font-atrangi text-amber-300 font-bold text-base sm:text-lg tracking-wide rotate-[-1.5deg] inline-block select-none">
              ✨ Free 2-Day Trial — Zero Advance Required!
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openDemoModal()}
              className="btn-shimmer w-full sm:w-auto px-9 py-4 rounded-xl bg-white text-blue-700 hover:bg-slate-100 font-extrabold text-sm tracking-widest uppercase shadow-xl shadow-black/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2.5 group"
            >
              <span>BOOK YOUR FREE DEMO</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 3 Confidence Badges */}
        <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-blue-100 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-300" />
            <span>Attend Live Classroom Lecture</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-300" />
            <span>Interactive Doubt Session Included</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-300" />
            <span>Parents Welcome to Observe</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
