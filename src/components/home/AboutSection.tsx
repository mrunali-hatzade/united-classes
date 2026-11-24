"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, CheckCircle2, ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AboutSection() {
  const pillars = [
    {
      title: "Conceptual Clarity First",
      desc: "Moving beyond memorizing formulas to building intuitive physical reasoning from fundamental laws.",
    },
    {
      title: "Practical Problem-Solving",
      desc: "Breaking down complex competitive numericals into clear, predictable mathematical steps.",
    },
    {
      title: "Consistent Academic Improvement",
      desc: "Weekly progress evaluations, targeted feedback loops, and personalized student mistake analysis.",
    },
  ];

  return (
    <section className="py-24 sm:py-28 bg-[#F8FAFC] text-[#172033] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Teacher Photograph Card with Motion (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              {/* Background gradient decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur-xl animate-pulse-glow" />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-900/10 p-6 sm:p-8 space-y-6">
                {/* Faculty Photo Placeholder Box */}
                <div className="relative w-full aspect-[4/4.5] rounded-2xl bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 border-2 border-dashed border-blue-300 flex flex-col items-center justify-center p-6 text-center group overflow-hidden">
                  {/* Atrangi badge */}
                  <div className="absolute top-3 right-3 rotate-3 bg-amber-100 border border-amber-300 text-amber-900 px-2.5 py-1 rounded-md shadow-xs font-atrangi text-xs font-bold z-20">
                    🎯 Concept First!
                  </div>

                  <div className="w-24 h-24 rounded-full bg-blue-600/10 text-blue-600 border border-blue-300 flex items-center justify-center shadow-inner mb-4 transition-transform group-hover:scale-105 duration-300">
                    <User className="w-12 h-12 text-blue-600/70" />
                  </div>

                  <div className="space-y-1 z-10">
                    <span className="font-heading font-bold text-base text-slate-800 block">
                      {siteConfig.teacherProfile.name}
                    </span>
                    <span className="text-xs font-semibold text-blue-600 block">
                      {siteConfig.teacherProfile.designation}
                    </span>
                    <span className="text-[11px] text-slate-500 block max-w-[220px]">
                      {siteConfig.teacherProfile.qualificationPlaceholder}
                    </span>
                  </div>
                </div>

                {/* 4-Subject Expert Faculty Badge Strip */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span>Specialist Faculty for Every Subject</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px] font-semibold">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-200 text-center">⚛️ Physics Faculty</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200 text-center">🧪 Chemistry Faculty</span>
                    <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md border border-indigo-200 text-center">📐 Maths Faculty</span>
                    <span className="px-2 py-1 bg-cyan-50 text-cyan-700 rounded-md border border-cyan-200 text-center">🧬 Biology Faculty</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Pillars with Stagger (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/90 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Teaching Philosophy • Bhandara</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Strong Foundations</span> in Science
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Science subjects become enjoyable and scoring when concepts are understood from first principles. Our teaching approach across Physics, Chemistry, Mathematics &amp; Biology focuses on conceptual clarity, step-by-step problem-solving, and consistent academic progress.
            </p>

            {/* Atrangi Chalkboard Callout */}
            <div className="p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center gap-2.5 shadow-xs">
              <span className="text-xl">💡</span>
              <p className="font-atrangi text-base sm:text-lg text-blue-950 font-bold tracking-wide">
                &ldquo;If you can’t explain it simply, you don’t understand it well enough.&rdquo;
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              At <strong className="text-slate-900 font-semibold">{siteConfig.brandName}</strong>, we believe every student in Bhandara has the potential to excel in Science and competitive entrance examinations once rote memorization is replaced with clear conceptual visualization, structured problem-solving, and encouraging mentorship across Physics, Chemistry, Mathematics &amp; Biology.
            </p>

            {/* Three Pillars */}
            <div className="space-y-3.5 pt-2">
              {pillars.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 }}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Read More Button */}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="btn-shimmer px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide shadow-md shadow-blue-600/25 transition-all duration-200 flex items-center gap-2 group hover:-translate-y-0.5"
              >
                <span>Read More About Our Approach</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
