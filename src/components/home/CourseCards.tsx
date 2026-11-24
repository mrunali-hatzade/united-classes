"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Atom, FlaskConical, Calculator, Dna, Check, ArrowRight, BookOpen, Sparkles, Layers, GraduationCap } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";
import { siteConfig } from "@/config/site";

export default function CourseCards() {
  const { openDemoModal } = useDemoModal();

  const courses = [
    {
      id: "physics",
      title: "PHYSICS",
      target: "Class 11 & 12 • State Board / CBSE • JEE • NEET • MHT-CET",
      faculty: "Prof. S. R. Sharma (M.Sc. Physics • Specialist)",
      facultyImage: "/faculty/physics-faculty.jpg",
      icon: Atom,
      badge: "Subject 01 • Physics",
      iconColor: "text-blue-600 bg-blue-50 border-blue-200",
      slug: "physics",
      topics: [
        "Kinematics, Mechanics & Rotational Dynamics",
        "Electrostatics, Current & Electromagnetic Induction",
        "Ray & Wave Optics, Modern Physics & Semiconductors",
        "Step-by-step Board Derivations & Numericals",
        "Daily Practice Sheets (DPPs) & Doubt Desk",
      ],
    },
    {
      id: "chemistry",
      title: "CHEMISTRY",
      target: "Physical, Organic & Inorganic • Boards, NEET & JEE",
      faculty: "Dr. A. V. Deshmukh (M.Sc. Org Chem • Specialist)",
      facultyImage: "/faculty/chemistry-faculty.jpg",
      icon: FlaskConical,
      badge: "Subject 02 • Chemistry",
      iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      slug: "chemistry",
      topics: [
        "Physical: Thermodynamics, Equilibrium & Kinetics",
        "Organic: Reaction Mechanisms & Named Reactions",
        "Inorganic: Periodic Trends, Bonding & Coordination",
        "NCERT Concept Coverage for NEET/JEE",
        "IUPAC Nomenclature & State Board Derivation Maps",
      ],
    },
    {
      id: "mathematics",
      title: "MATHEMATICS",
      target: "Class 11 & 12 • JEE Main & Adv • MHT-CET",
      faculty: "Prof. V. N. Patil (M.Sc. Applied Maths • Specialist)",
      facultyImage: "/faculty/mathematics-faculty.jpg",
      icon: Calculator,
      badge: "Subject 03 • Mathematics",
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      slug: "mathematics",
      topics: [
        "Complete Calculus: Limits, Derivatives & Integrals",
        "Algebra: Matrices, Determinants & Probability",
        "Vectors & 3D Geometry (High Weightage in CET/JEE)",
        "MHT-CET Problem Solving & Option Elimination",
        "HSC Board Step-by-Step Proofs & Textbook Solves",
      ],
    },
    {
      id: "biology",
      title: "BIOLOGY",
      target: "Class 11 & 12 • NEET-UG • MHT-CET (Pharmacy)",
      faculty: "Dr. Neha K. Wanjari (M.Sc. Life Sciences • Specialist)",
      facultyImage: "/faculty/biology-faculty.jpg",
      icon: Dna,
      badge: "Subject 04 • Biology",
      iconColor: "text-cyan-600 bg-cyan-50 border-cyan-200",
      slug: "biology",
      topics: [
        "Botany: Cell Biology, Plant Physiology & Genetics",
        "Zoology: Human Physiology, Reproduction & Health",
        "Rigorous NCERT Line-by-Line Clarification",
        "Clean Anatomical & Botanical Diagram Drafting",
        "Regular Timed NEET OMR Practice Drills",
      ],
    },
  ];

  return (
    <section id="courses" className="py-24 bg-[#F8FAFC] text-[#0F172A] relative border-b border-slate-200/80">
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
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>4 Core Science Subjects • Bhandara</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Our 4 Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Science Subjects</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At <strong className="text-slate-900 font-semibold">{siteConfig.brandName}</strong>, each subject is taught by a dedicated postgraduate specialist mentor. Enrol in individual subjects or opt for our complete synchronized package.
          </p>
        </motion.div>

        {/* 4 Visually Distinct Subject Cards on Clean White Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.09, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${course.iconColor} shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {course.badge}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold font-heading text-[#0F172A] tracking-tight group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 mb-4 leading-normal">
                    {course.target}
                  </p>

                  {/* Assigned Faculty Badge with Photo */}
                  <div className="mb-5 bg-gradient-to-r from-blue-50/90 to-slate-50 rounded-xl p-2.5 border border-blue-200/80 flex items-center gap-2.5">
                    {course.facultyImage ? (
                      <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-blue-400 shadow-2xs shrink-0 bg-slate-100">
                        <Image
                          src={course.facultyImage}
                          alt={course.faculty}
                          fill
                          sizes="32px"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold shadow-2xs">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-blue-700 block">
                        Assigned Subject Mentor
                      </span>
                      <span className="text-xs font-bold text-slate-900 truncate block">
                        {course.faculty}
                      </span>
                    </div>
                  </div>

                  {/* Topic Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Curriculum Highlights:
                    </span>
                    {course.topics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white font-bold text-xs tracking-wide border border-slate-200 hover:border-blue-600 flex items-center justify-center gap-1.5 transition-all group-hover:shadow-sm"
                  >
                    <span>View {course.title} Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openDemoModal(course.title)}
                    className="w-full py-2 px-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-[11px] font-bold tracking-wide transition-colors cursor-pointer"
                  >
                    Request Free Demo Slot
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Integrated PCMB Combo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-6 sm:p-8 text-white shadow-xl border border-blue-800/60 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Integrated All-in-One Package</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Complete PCMB Science Package (All 4 Subjects)
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Study Physics, Chemistry, Maths &amp; Biology under one roof in Bhandara with zero schedule clashes, synchronized homework, combined tests, and bundle fee savings up to 30%.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/courses/pcmb-integrated"
                className="px-6 py-3.5 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>View Full PCMB Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => openDemoModal("Complete PCMB Package")}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all border border-blue-400 cursor-pointer"
              >
                <span>Book Combo Demo</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Explorer Link */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 text-center"
        >
          <Link
            href="/courses"
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-600/25 hover:-translate-y-0.5"
          >
            <span>Explore All Syllabi &amp; Batches</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
