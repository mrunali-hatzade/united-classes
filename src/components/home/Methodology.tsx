"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, BookOpen, PenTool, CheckSquare, BarChart3, RefreshCw, Sparkles, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Methodology() {
  const stages = [
    {
      step: "01",
      title: "Concept Introduction",
      subtitle: "Why It Matters",
      desc: "Introducing physical phenomena, chemical reactions, and biological systems through intuitive real-world observations.",
      icon: Lightbulb,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      step: "02",
      title: "Concept Understanding",
      subtitle: "First-Principles Rigor",
      desc: "Deconstructing equations, reaction mechanisms, and anatomical structures step-by-step with derivation notebooks.",
      icon: BookOpen,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      step: "03",
      title: "Guided Practice",
      subtitle: "Faculty-Led Problem Modeling",
      desc: "In-class demonstration of problem solving, identifying coordinate axes, sign conventions, and speed shortcuts.",
      icon: PenTool,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    },
    {
      step: "04",
      title: "Problem Solving",
      subtitle: "Independent DPP Drills",
      desc: "Daily graded worksheets (Level 1 to Level 3) where students solve 150+ problems per chapter across Board and entrance levels.",
      icon: CheckSquare,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      step: "05",
      title: "Assessment",
      subtitle: "Timed OMR & Test Analysis",
      desc: "Weekly timed assessments with negative marking tracking and individual error logs to eliminate recurring mistakes.",
      icon: BarChart3,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      step: "06",
      title: "Revision",
      subtitle: "Cumulative Retention",
      desc: "Formula roadmaps, reaction charts, and mock marathons ensuring concepts mastered early in the term remain exam-ready.",
      icon: RefreshCw,
      color: "text-rose-600 bg-rose-50 border-rose-200",
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
            <span>The 6-Stage Learning Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Our Teaching <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Methodology</span>
          </h2>

          <div className="pt-1">
            <span className="font-atrangi text-blue-600 font-bold text-base sm:text-lg inline-block -rotate-1">
              ✨ Step-by-step conceptual mastery — Zero rote learning!
            </span>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Academic excellence at <strong className="text-slate-900 font-semibold">{siteConfig.brandName}</strong> is built upon a proven 6-stage progression that transforms student hesitation into confidence and precision.
          </p>
        </motion.div>

        {/* 6-Stage Progressive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span className="font-funky font-bold text-3xl sm:text-4xl text-slate-300 group-hover:text-blue-600 transition-colors">
                        {item.step}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        Stage {idx + 1}
                      </span>
                    </div>

                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center ${item.color} shadow-xs group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <span className="text-xs font-semibold text-slate-500 block mb-3">
                    {item.subtitle}
                  </span>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Progress flow arrow indicator */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-400">
                  <span>{idx < 5 ? `Next: Stage ${idx + 2}` : "Continuous Exam Mastery"}</span>
                  {idx < 5 && <ArrowRight className="w-3.5 h-3.5 text-blue-500" />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
