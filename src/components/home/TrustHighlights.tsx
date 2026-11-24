"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, GraduationCap, Trophy, HelpCircle, CheckCircle2 } from "lucide-react";

export default function TrustHighlights() {
  const highlights = [
    {
      title: "Concept-Based Learning",
      subtitle: "First-Principles Understanding",
      desc: "Deep visual conceptual understanding across Physics, Chemistry, Maths & Biology—eliminating rote formula memorization.",
      icon: Lightbulb,
      color: "bg-blue-50 text-blue-600 border-blue-200",
      accent: "text-blue-700",
    },
    {
      title: "Board Exam Preparation",
      subtitle: "State Board & CBSE 90%+",
      desc: "Meticulous derivation drafting, theorem proofs, reaction mechanisms, and anatomical diagram accuracy for top Board marks.",
      icon: GraduationCap,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      accent: "text-indigo-700",
    },
    {
      title: "Competitive Entrance Mastery",
      subtitle: "JEE • NEET • MHT-CET",
      desc: "Synchronized objective drills, speed elimination techniques, and national CBT-standard mock tests for rank acceleration.",
      icon: Trophy,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accent: "text-emerald-700",
    },
    {
      title: "Dedicated Doubt Solving",
      subtitle: "Daily 1-on-1 Faculty Desk",
      desc: "Personal mentor counters before and after lectures so no student ever goes home with unresolved conceptual doubts.",
      icon: HelpCircle,
      color: "bg-cyan-50 text-cyan-600 border-cyan-200",
      accent: "text-cyan-700",
    },
  ];

  return (
    <section className="relative -mt-10 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} border shadow-xs group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Small batches (max 30 students)</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
