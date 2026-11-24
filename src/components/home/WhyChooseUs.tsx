"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Users, ClipboardCheck, Award, HelpCircle, RefreshCw, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Strong Conceptual Foundation",
      description:
        "Every chapter begins with intuitive physical visualisations and mathematical tools, ensuring students understand why equations work before applying them.",
      icon: Compass,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      title: "Personal Attention",
      description:
        "Batches strictly capped at 25–30 students ensure the faculty knows every student's learning pace, strengths, and specific difficulty areas.",
      icon: Users,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    },
    {
      title: "Regular Practice Sessions",
      description:
        "Daily Problem Practice sheets (DPPs) and graded numerical worksheets ensure that concept exposure is immediately followed by hands-on solving.",
      icon: ClipboardCheck,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      title: "Exam-Oriented Preparation",
      description:
        "Comprehensive coverage of HSC State Board, CBSE derivations, JEE multi-concept problems, and NEET speed strategies with past 15 years' PYQ analysis.",
      icon: Award,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      title: "Doubt-Solving Support",
      description:
        "Daily dedicated 45-minute doubt desk where students can sit with faculty one-on-one without hesitation or embarrassment.",
      icon: HelpCircle,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      title: "Structured Revision",
      description:
        "Formula summary sheets, micro-revision cycles, and cumulative syllabus mock tests ensure that topics learned in July stay sharp till final exams in March.",
      icon: RefreshCw,
      color: "text-rose-600 bg-rose-50 border-rose-200",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] text-[#172033] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span>Academic Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Why Students Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">{siteConfig.brandName}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our teaching framework is designed to eliminate the fear of physics and build confident, systematic problem solvers.
          </p>
        </motion.div>

        {/* 6 Feature Cards Grid with Stagger & Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-blue-600/10 hover:border-blue-400 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color} border mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#172033] font-heading mb-2.5 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
