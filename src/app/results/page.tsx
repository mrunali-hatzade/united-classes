import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Trophy, Award, User, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, HelpCircle } from "lucide-react";
import { resultsData, statisticsPlaceholders } from "@/data/results";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Results & Achievements | United Classes Bhandara",
  description:
    "Student performance framework and achievement showcase for Class 11th, 12th Board examinations, JEE Main, NEET-UG, and MHT-CET in Bhandara by United Classes.",
};

export default function ResultsPage() {
  const examCategories = [
    {
      title: "JEE Main & Advanced",
      tag: "Engineering Entrances",
      desc: "Top percentiles driven by deep problem-solving skills, multi-concept mechanics, and time management.",
      badge: "Engineering Track",
    },
    {
      title: "NEET-UG (PCB Medical)",
      tag: "Medical Entrances",
      desc: "Comprehensive preparation across Physics, Chemistry & Biology (Botany & Zoology) with NCERT line-by-line mastery.",
      badge: "Medical Track",
    },
    {
      title: "MHT-CET (PCM / PCB)",
      tag: "Maharashtra State Entrance",
      desc: "High percentile scores targeting COEP, VJTI, and top Maharashtra engineering and pharmacy colleges.",
      badge: "State Entrance Track",
    },
    {
      title: "12th HSC & CBSE Boards",
      tag: "Board Theory Excellence",
      desc: "Mastery of step-by-step theoretical derivations, ray diagrams, and examiner presentation formats.",
      badge: "Board Exam Excellence",
    },
  ];

  return (
    <div className="bg-white text-[#0F172A] min-h-screen">
      {/* Top Hero Banner - Bright Light Theme */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50 to-white text-[#0F172A] pt-36 pb-16 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/90 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Academic Performance Hub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Every Achievement Starts With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-600">Understanding</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Consistent preparation, personal doubt clearing, and concept-first pedagogy reflect in our students&apos; confidence and performance across competitive examinations.
          </p>

          <div className="bg-amber-50/90 border border-amber-300/80 rounded-2xl p-3.5 text-xs text-amber-900 inline-flex items-center gap-2 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Sample Performance Showcase:</strong> Student achievement cards below represent structured sample layouts. Official verified merit records and scorecards will be published upon client verification.
            </span>
          </div>
        </div>
      </section>

      {/* Statistics Counter Strip */}
      <section className="py-12 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {statisticsPlaceholders.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-funky font-bold text-3xl sm:text-4xl text-blue-600 block tracking-wider">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-500 block">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Results Showcase Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Student Achievements
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#172033]">
            Student Performance Showcase
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Celebrating student dedication, conceptual mastery, and academic growth across Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resultsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div>
                {/* Avatar Placeholder */}
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

                <div className="mb-4">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                    {item.exam}
                  </span>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-0.5">
                    Exam Achievement:
                  </span>
                  <p className="text-xs font-semibold text-slate-900 font-mono">
                    {item.achievement}
                  </p>
                </div>

                <p className="text-xs text-slate-500 italic leading-relaxed">
                  {item.quotePlaceholder}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>{item.isPlaceholderNotice}</span>
                <span>{item.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Exam Categories Breakdown */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm mb-16">
          <h3 className="text-xl font-bold font-heading text-[#172033] mb-6 text-center">
            Examinations We Prepare You For
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examCategories.map((exam, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                  {exam.tag}
                </span>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  {exam.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {exam.desc}
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200 inline-block">
                    {exam.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story CTA */}
        <div className="bg-[#101D38] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-600/30 text-cyan-300 border border-blue-500/40">
            <Sparkles className="w-3.5 h-3.5" />
            Admissions Open {siteConfig.academicSession}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Your Success Story Starts Here
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Take the first step toward mastering Science (Physics, Chemistry, Mathematics &amp; Biology). Attend a free interactive trial class and see our teaching methodology firsthand.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact#demo-form"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/courses"
              className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all text-center"
            >
              Explore Course Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
