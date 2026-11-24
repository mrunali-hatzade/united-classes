"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Lightbulb, Target, HelpCircle } from "lucide-react";
import ScienceVisual from "@/components/common/ScienceVisual";
import { siteConfig } from "@/config/site";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Hero() {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#EBF3FE] via-[#F0F7FF] to-[#E6EEF8] pt-32 sm:pt-36 pb-20 overflow-hidden text-[#0F172A] border-b border-blue-200/60">
      {/* Background Subtle Science Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />

      {/* Soft Light Energy Glows */}
      <div className="absolute -top-10 -right-10 w-[550px] h-[550px] bg-blue-200/40 rounded-full blur-[140px] pointer-events-none animate-beam" />
      <div className="absolute -bottom-10 -left-10 w-[500px] h-[500px] bg-cyan-200/35 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 7 cols on lg */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Small Admissions Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase shadow-sm backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span>ADMISSIONS OPEN – ACADEMIC SESSION {siteConfig.academicSession}</span>
              <span className="hidden sm:inline-block ml-1 font-atrangi text-amber-600 font-bold normal-case text-xs">
                (Seats filling fast! ⚡)
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-[1.12]"
            >
              Understand Science.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Master Your Future.
              </span>
            </motion.h1>

            {/* Supporting Text - Balanced across Physics, Chemistry, Maths & Biology */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal"
            >
              Premier Science education in Bhandara for Class 11th &amp; 12th. Master <strong>Physics</strong>, <strong>Chemistry</strong>, <strong>Mathematics</strong>, and <strong>Biology</strong> through conceptual clarity, derivation precision, and speed numerical drills for Board exams, JEE Main, NEET-UG, and MHT-CET.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            >
              <button
                onClick={() => openDemoModal()}
                className="btn-shimmer px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2.5 group"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                href="#programmes"
                className="px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm tracking-wide border border-slate-300 hover:border-blue-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Explore Programmes</span>
              </Link>

              {/* Atrangi handwritten badge */}
              <span className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-300/80 text-amber-900 shadow-xs rotate-[-2deg] select-none">
                <span className="font-atrangi text-sm font-bold text-amber-700 tracking-wide">
                  ✍️ 100% Concept Clarity!
                </span>
              </span>
            </motion.div>

            {/* Three Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="pt-4 border-t border-blue-200/60 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-blue-100 shadow-sm hover:border-blue-300 transition-all duration-300 hover:bg-white">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Concept-Based Learning</span>
                  <span className="text-slate-500">First principles across PCMB</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-blue-100 shadow-sm hover:border-indigo-300 transition-all duration-300 hover:bg-white">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Exam-Focused Depth</span>
                  <span className="text-slate-500">Board, JEE, NEET &amp; MHT-CET</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-blue-100 shadow-sm hover:border-cyan-300 transition-all duration-300 hover:bg-white">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Personal Doubt Desk</span>
                  <span className="text-slate-500">Daily 1-on-1 faculty support</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 5 cols on lg - Balanced Science Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <ScienceVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
