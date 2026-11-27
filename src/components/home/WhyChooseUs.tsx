"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Users, ClipboardCheck, Award, HelpCircle, RefreshCw, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Physical Models & Visual Science",
      description:
        "Every chapter in Physics, Chemistry, Mathematics, and Biology incorporates physical apparatus, visual ray diagrams, and molecular geometry models to make abstract theory tangible.",
      icon: Compass,
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      title: "Focused Batch Sizes",
      description:
        "Limited batch sizes ensure faculty mentors understand each student's learning pace, academic goals, and individual subject strengths.",
      icon: Users,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    },
    {
      title: "Daily Graded Practice (DPPs)",
      description:
        "Daily Practice Problem sheets and homework evaluations ensure classroom theory is immediately converted into numerical and analytical problem-solving capability.",
      icon: ClipboardCheck,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      title: "Diagnostic Mistake Analysis",
      description:
        "Post-test error evaluations and personal student mistake logbooks diagnose recurring misconceptions and turn test errors into permanent conceptual strengths.",
      icon: Award,
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      title: "Direct Specialist Faculty Access",
      description:
        "Students interact directly with their postgraduate subject specialists during and after class, ensuring immediate, senior-level guidance on complex questions.",
      icon: HelpCircle,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      title: "Structured Cumulative Revision",
      description:
        "Formula summary sheets, reaction flowcharts, anatomy diagrams, and cumulative mock tests ensure chapters mastered in July stay sharp for exams in March.",
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
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">{siteConfig.brandName}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our teaching framework combines deep conceptual clarity with rigorous numerical problem solving, giving students in Bhandara an unshakeable academic foundation.
          </p>
        </motion.div>

        {/* 6 Feature Cards Grid */}
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

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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
