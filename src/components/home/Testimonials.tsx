"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquareQuote, Star, User, ArrowRight } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

export default function Testimonials() {
  const displayedTestimonials = testimonialsData.slice(0, 3);

  return (
    <section className="py-24 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden border-b border-slate-200/80">
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
            <MessageSquareQuote className="w-3.5 h-3.5 text-blue-600" />
            <span>Student & Parent Impressions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            What Our Students & Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Say</span>
          </h2>

          <div className="pt-1">
            <span className="font-atrangi text-amber-600 font-bold text-base sm:text-lg inline-block -rotate-1">
              ⭐ Genuine student experiences across PCM, PCB, and Board preparation
            </span>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Parent and student perspectives on conceptual depth, structured numerical practice, and faculty mentorship at {siteConfig.brandName}.
          </p>
        </motion.div>

        {/* 3 Testimonial Cards Grid on Clean White */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {displayedTestimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-300 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {item.batch}
                  </span>
                </div>

                {/* Highlight */}
                <h3 className="font-atrangi font-bold text-lg sm:text-xl text-blue-950 mb-3 group-hover:text-blue-600 transition-colors tracking-wide leading-snug">
                  &ldquo;{item.highlight}&rdquo;
                </h3>

                {/* Feedback Body */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  {item.feedback}
                </p>
              </div>

              {/* Author & Exam Meta */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-slate-500 block">
                      {item.role}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  {item.exam}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Testimonials Link */}
        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <span>Read More Testimonials & Video Reviews</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
