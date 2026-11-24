"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, User, ArrowRight, Sparkles } from "lucide-react";
import { resultsData, statisticsPlaceholders } from "@/data/results";
import { useDemoModal } from "@/context/DemoModalContext";
import { siteConfig } from "@/config/site";

export default function ResultsSection() {
  const { openDemoModal } = useDemoModal();

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/90 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Academic Performance Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Every Achievement Starts With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600">Understanding</span>
          </h2>

          <div className="pt-1">
            <span className="font-atrangi text-amber-700 font-bold text-base sm:text-lg inline-block rotate-1">
              🎯 Bhandara&apos;s High Scoring Physics Scholars!
            </span>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            When students master the core laws of physics rather than resorting to formula memorization, high percentiles follow naturally at {siteConfig.brandName}.
          </p>
        </motion.div>

        {/* 4 Feature Metric Counter Strips with Animated Reveal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statisticsPlaceholders.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm text-center space-y-1 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <span className="font-funky font-bold text-2xl sm:text-3xl text-blue-600 block tracking-wider">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-slate-800 block">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-500 block leading-tight">
                {stat.subtext}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Sample Result Cards Grid with Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {resultsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-400 transition-all duration-300 group"
            >
              <div>
                {/* Avatar */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.studentName}
                    </h3>
                    <span className="text-[11px] text-slate-500 block">
                      {item.academicYear}
                    </span>
                  </div>
                </div>

                {/* Exam Badge */}
                <div className="mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                    {item.exam}
                  </span>
                </div>

                {/* Achievement Box */}
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-0.5">
                    Exam Achievement:
                  </span>
                  <p className="text-xs font-semibold text-slate-900 font-mono">
                    {item.achievement}
                  </p>
                </div>

                {/* Feedback */}
                <p className="text-xs text-slate-500 italic line-clamp-3 leading-relaxed">
                  &ldquo;{item.quotePlaceholder}&rdquo;
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="text-[10px] text-slate-400 block font-mono">
                  {item.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Strip with Shimmer Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-blue-700/25 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 text-white border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              Begin Your Preparation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Your Success Story Starts Here
            </h3>
            <p className="text-blue-100 text-sm max-w-xl">
              Join students across Bhandara building crystal-clear physics concepts with {siteConfig.brandName}. Reserve your free demo lecture today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => openDemoModal()}
              className="btn-shimmer px-7 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-slate-100 font-bold text-sm tracking-wide shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/results"
              className="px-6 py-3.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-semibold text-sm border border-blue-400/40 text-center transition-all"
            >
              View Results Hub
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
