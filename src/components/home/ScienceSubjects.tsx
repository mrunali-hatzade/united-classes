"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Atom, FlaskConical, Calculator, Dna, ArrowRight, BookOpen, CheckCircle2, Sparkles } from "lucide-react";
import { scienceSubjects } from "@/data/subjects";
import { useDemoModal } from "@/context/DemoModalContext";
import { siteConfig } from "@/config/site";

export default function ScienceSubjects() {
  const { openDemoModal } = useDemoModal();

  const getIcon = (name: string) => {
    switch (name) {
      case "Atom":
        return Atom;
      case "FlaskConical":
        return FlaskConical;
      case "Calculator":
        return Calculator;
      case "Dna":
        return Dna;
      default:
        return BookOpen;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          iconBg: "bg-blue-50 text-blue-600 border-blue-200",
          badge: "bg-blue-50 text-blue-700 border-blue-200",
          borderHover: "hover:border-blue-400",
          accentText: "text-blue-600",
          btn: "bg-blue-600 hover:bg-blue-700",
        };
      case "emerald":
        return {
          iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
          borderHover: "hover:border-emerald-400",
          accentText: "text-emerald-600",
          btn: "bg-emerald-600 hover:bg-emerald-700",
        };
      case "indigo":
        return {
          iconBg: "bg-indigo-50 text-indigo-600 border-indigo-200",
          badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
          borderHover: "hover:border-indigo-400",
          accentText: "text-indigo-600",
          btn: "bg-indigo-600 hover:bg-indigo-700",
        };
      case "cyan":
        return {
          iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200",
          badge: "bg-cyan-50 text-cyan-700 border-cyan-200",
          borderHover: "hover:border-cyan-400",
          accentText: "text-cyan-600",
          btn: "bg-cyan-600 hover:bg-cyan-700",
        };
      default:
        return {
          iconBg: "bg-blue-50 text-blue-600 border-blue-200",
          badge: "bg-blue-50 text-blue-700 border-blue-200",
          borderHover: "hover:border-blue-400",
          accentText: "text-blue-600",
          btn: "bg-blue-600 hover:bg-blue-700",
        };
    }
  };

  return (
    <section id="subjects" className="py-24 bg-white text-[#0F172A] relative border-b border-slate-200/80">
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
            <span>Dedicated Subject Specialists</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Core Science <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Subjects</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every subject at {siteConfig.brandName} is headed by an experienced post-graduate specialist. Students receive equal depth and personalized mentorship in Physics, Chemistry, Mathematics, and Biology.
          </p>
        </motion.div>

        {/* 4 Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scienceSubjects.map((sub, idx) => {
            const Icon = getIcon(sub.iconName);
            const styling = getColorClasses(sub.accentColor);

            return (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-md shadow-slate-900/5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${styling.borderHover}`}
              >
                <div>
                  {/* Top Bar: Icon, Subject Title & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${styling.iconBg} border shadow-xs group-hover:scale-105 transition-transform duration-300`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors">
                          {sub.name}
                        </h3>
                        <span className="text-xs font-medium text-slate-500 block">
                          {sub.tagline}
                        </span>
                      </div>
                    </div>

                    <span className={`hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${styling.badge}`}>
                      {sub.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {sub.shortDescription}
                  </p>

                  {/* Syllabus Modules */}
                  <div className="mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2.5">
                      Key Curriculum Modules:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sub.keyTopics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${styling.accentText}`} />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Assigned Subject Faculty Spotlight */}
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 mb-6">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-blue-200 shadow-sm bg-white">
                      <Image
                        src={sub.assignedMentor.imageUrl}
                        alt={sub.assignedMentor.name}
                        fill
                        className="object-cover object-top"
                        sizes="48px"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                        Assigned Subject Faculty:
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {sub.assignedMentor.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 truncate">
                        {sub.assignedMentor.qualification}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={sub.courseHref}
                    className="text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Full Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => openDemoModal(sub.name)}
                    className={`px-4 py-2.5 rounded-xl text-white font-bold text-xs tracking-wide shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer ${styling.btn}`}
                  >
                    <span>Book {sub.name} Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
