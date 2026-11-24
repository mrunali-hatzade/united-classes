import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { MessageSquareQuote, Star, User, Sparkles, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials & Reviews | United Classes Bhandara",
  description:
    "Read impressions and feedback from students and parents about United Classes coaching institute in Bhandara, Maharashtra.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen">
      {/* Top Hero Banner - Bright Light Theme */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50 to-white text-[#0F172A] pt-36 pb-16 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200/90 shadow-xs">
            <MessageSquareQuote className="w-3.5 h-3.5 text-blue-600" />
            <span>Student & Parent Voices</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Real Experiences, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Lasting Confidence</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover how our personal mentoring and concept-first physics approach helps students overcome fear, master numericals, and excel in competitive exams.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md flex flex-col justify-between hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {item.batch}
                  </span>
                </div>

                <h3 className="font-atrangi font-bold text-lg text-blue-950 mb-3 tracking-wide leading-snug">
                  &ldquo;{item.highlight}&rdquo;
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  {item.feedback}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-slate-900">
                      {item.name}
                    </h4>
                    <span className="text-xs text-slate-500 block">
                      {item.role}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                  {item.exam}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Placeholder Strip */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Multimedia Showcase
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#172033]">
                Student Video Testimonials
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="rounded-2xl border border-slate-200 bg-slate-50 aspect-video flex flex-col items-center justify-center p-4 text-center text-slate-400 group hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-blue-600 transition-colors mb-2 shadow-sm">
                  ▶
                </div>
                <span className="text-xs font-bold text-slate-800">Student Interview Clip #{num}</span>
                <span className="text-[11px] text-slate-500 mt-0.5">Concept clarity & problem-solving review</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience CTA */}
        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Judge Our Teaching Quality Firsthand
          </h2>
          <p className="text-blue-100 text-sm max-w-lg mx-auto leading-relaxed">
            Don&apos;t just take testimonials for granted. Sit in on an actual live lecture in Bhandara and experience how concepts are unlocked.
          </p>
          <div className="pt-2">
            <Link
              href="/contact#demo-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-slate-100 font-bold text-sm tracking-wide shadow-lg transition-all"
            >
              <span>Book Your Free Demo Lecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
