"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Wrench, PenTool, BarChart3, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Methodology() {
  const steps = [
    {
      step: "01",
      title: "Understand the Concept",
      subtitle: "Intuition & First Principles",
      desc: "Deconstruct the physical law using real-world analogies, thought experiments, and mathematical derivations rather than dry rote memorization.",
      icon: Lightbulb,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      step: "02",
      title: "Learn the Application",
      subtitle: "Standard Models & Boundary Cases",
      desc: "Identify how the law applies in standard textbook scenarios, recognizing sign conventions, coordinate axes, and limiting conditions.",
      icon: Wrench,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    },
    {
      step: "03",
      title: "Practice Problems",
      subtitle: "Graded Numerical Mastery",
      desc: "Solve structured sets from Level 1 (formula drills) to Level 3 (multi-concept JEE/NEET questions) with targeted shortcut techniques.",
      icon: PenTool,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      step: "04",
      title: "Evaluate Your Progress",
      subtitle: "Diagnosis & Mistake Rectification",
      desc: "Weekly timed assessments with question-by-question analysis, maintaining a personal error log to eliminate repetitive mistakes permanently.",
      icon: BarChart3,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
  ];

  return (
    <section className="py-24 bg-white text-[#0F172A] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/90 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Structured 4-Step Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Learning Methodology</span>
          </h2>

          <div className="pt-1">
            <span className="font-atrangi text-blue-600 font-bold text-base sm:text-lg inline-block -rotate-1">
              ✨ Step-by-step conceptual mastery — Zero rote learning!
            </span>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Physics mastery at <strong className="text-slate-900 font-semibold">{siteConfig.brandName}</strong> is not an accident—it is the result of a repeatable, scientific sequence that turns confusion into confidence.
          </p>
        </motion.div>

        {/* 4-Step Horizontal Process with Connecting Line */}
        <div className="relative">
          {/* Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-6 left-12 right-12 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-indigo-200 z-0 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-funky font-bold text-3xl sm:text-4xl text-slate-300 group-hover:text-blue-600 transition-colors">
                        {item.step}
                      </span>

                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.color} shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold font-heading text-[#0F172A] tracking-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    <span className="text-[11px] font-bold text-blue-600 block mt-1 mb-3">
                      {item.subtitle}
                    </span>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Indicator Pip */}
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-[11px] font-semibold text-slate-500">Phase {idx + 1} of 4</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:animate-ping" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
