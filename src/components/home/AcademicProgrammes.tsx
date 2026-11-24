"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, CheckCircle2, Clock, Calendar, Sparkles } from "lucide-react";
import { academicProgrammes } from "@/data/programmes";
import { useDemoModal } from "@/context/DemoModalContext";
import { siteConfig } from "@/config/site";

export default function AcademicProgrammes() {
  const { openDemoModal } = useDemoModal();

  return (
    <section id="programmes" className="py-24 bg-[#F8FAFC] text-[#0F172A] relative">
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
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>Structured Academic Pathways</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Programmes</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Targeted coaching tracks for State Board, CBSE, JEE, NEET, and MHT-CET aspirants at {siteConfig.brandName}. Designed to give every student the ideal blend of conceptual theory and rigorous numerical practice.
          </p>
        </motion.div>

        {/* 5 Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {academicProgrammes.map((prog, idx) => {
            const isFeatured = idx === 0 || idx === 1; // 11th & 12th foundational
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-white rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl ${
                  isFeatured
                    ? "border-blue-300/80 hover:border-blue-500 shadow-blue-500/5 ring-1 ring-blue-50"
                    : "border-slate-200 hover:border-blue-400"
                }`}
              >
                <div>
                  {/* Top Badge & Academic Level */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {prog.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {prog.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                    {prog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {prog.description}
                  </p>

                  {/* Subjects Pills */}
                  <div className="mb-5">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Subjects Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.subjects.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Programme Highlights:
                    </span>
                    {prog.programmeHighlights.slice(0, 3).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">Eligibility:</span>
                    <span className="text-xs font-medium text-slate-700 line-clamp-1">{prog.eligibility}</span>
                  </div>

                  <button
                    onClick={() => openDemoModal(prog.shortTitle)}
                    className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wide shadow-sm hover:shadow transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <span>{prog.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: Customized Stream Counseling CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.4, ease: "easeOut" }}
            className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 rounded-2xl p-7 text-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/20 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>Personalized Guidance</span>
              </div>

              <h3 className="text-xl font-bold font-heading text-white mb-3">
                Need Help Choosing the Right Stream?
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Whether you should opt for PCM, PCB, or full PCMB with competitive coaching depends on your career aspirations. Visit our Bhandara center for a free 1-on-1 academic counseling session with senior mentors.
              </p>
            </div>

            <button
              onClick={() => openDemoModal("Stream Guidance")}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Academic Counseling</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
