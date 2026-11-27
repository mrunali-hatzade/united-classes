"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, ArrowRight, Sparkles } from "lucide-react";
import { statisticsPlaceholders } from "@/data/results";
import ResultsShowcase from "@/components/results/ResultsShowcase";
import { useDemoModal } from "@/context/DemoModalContext";
import { siteConfig } from "@/config/site";

export default function ResultsSection() {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="py-24 bg-white text-[#172033] relative border-b border-slate-200/80">
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
            Every Achievement Starts With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600">Conceptual Depth</span>
          </h2>

          <div className="pt-1">
            <span className="font-atrangi text-amber-700 font-bold text-base sm:text-lg inline-block rotate-1">
              🎯 Bhandara&apos;s Science Achievers across Board, JEE, NEET &amp; MHT-CET!
            </span>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            When students master core science principles rather than memorizing formulas, high percentiles and top ranks follow naturally at {siteConfig.brandName}.
          </p>
        </motion.div>

        {/* 4 Feature Metric Counter Strips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statisticsPlaceholders.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/90 shadow-xs text-center space-y-1 hover:border-blue-400 hover:shadow-md transition-all"
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

        {/* Interactive Multi-Year Result Showcase */}
        <div className="mb-14">
          <ResultsShowcase initialYear="All" limit={4} showCategoryTabs={false} />
        </div>

        {/* Section CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/results"
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm tracking-wide border border-slate-300 hover:border-blue-400 transition-all shadow-sm flex items-center gap-2"
          >
            <span>View All Student Results &amp; Honors</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </Link>

          <button
            onClick={() => openDemoModal()}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Join the Next Achiever Batch</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
