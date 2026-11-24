"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Atom, FlaskConical, Calculator, Dna, ArrowRight } from "lucide-react";

export default function ExamStrip() {
  const cards = [
    {
      title: "Physics",
      badge: "Class 11, 12, JEE & NEET",
      icon: Atom,
      bgColor: "bg-blue-50 text-blue-600 border-blue-200",
      description:
        "Master mechanics, electrodynamics, optics & modern physics with first-principles derivation and speed numerical drills.",
      href: "/courses/physics",
    },
    {
      title: "Chemistry",
      badge: "Physical, Organic & Inorganic",
      icon: FlaskConical,
      bgColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
      description:
        "Mechanism-driven Organic chemistry, Physical calculation shortcuts, and line-by-line NCERT inorganic mastery.",
      href: "/courses/chemistry",
    },
    {
      title: "Mathematics",
      badge: "Calculus, Vectors & Algebra",
      icon: Calculator,
      bgColor: "bg-indigo-50 text-indigo-600 border-indigo-200",
      description:
        "High-speed MHT-CET 2-mark shortcut algorithms, graph visualization, calculus proofs, and 100/100 Board target.",
      href: "/courses/mathematics",
    },
    {
      title: "Biology",
      badge: "NEET 360 & HSC Boards",
      icon: Dna,
      bgColor: "bg-cyan-50 text-cyan-600 border-cyan-200",
      description:
        "100% NCERT line-by-line Botany & Zoology decoding, labeled diagram drafting, and weekly timed OMR drills.",
      href: "/courses/biology",
    },
  ];

  return (
    <section className="relative -mt-10 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {cards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-blue-600/15 hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bgColor} border shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#172033] font-heading group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 tracking-wide group-hover:gap-2.5 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
