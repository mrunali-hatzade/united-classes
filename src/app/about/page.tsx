import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { User, Award, BookOpen, CheckCircle2, GraduationCap, Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Compass, Layers, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us | United Classes Bhandara - Building Strong Foundations in Science (PCMB)",
  description:
    "Learn about United Classes, our teaching approach, faculty mentorship, and commitment to conceptual clarity for Class 11th, 12th, JEE, NEET, and MHT-CET students in Bhandara.",
};

export default function AboutPage() {
  const values = [
    {
      title: "First-Principles Conceptual Clarity",
      desc: "Every physical concept is derived from foundational conservation laws, not memorized as isolated formulas.",
      icon: Compass,
    },
    {
      title: "Demystifying Mathematical Tools",
      desc: "We bridge calculus, trigonometry, and vector algebra in plain language before throwing complex numericals at students.",
      icon: Layers,
    },
    {
      title: "Zero-Hesitation Doubt Culture",
      desc: "No question is too simple. We cultivate an encouraging environment where students feel respected asking foundational questions.",
      icon: HeartHandshake,
    },
    {
      title: "Diagnostic Mistake Analysis",
      desc: "Errors in tests are treated as diagnostic data. Students maintain a mistake logbook to turn weak areas into strengths.",
      icon: Award,
    },
  ];

  const classroomFeatures = [
    "Focused batch sizes for personal accountability & attention",
    "Air-conditioned, distraction-free audio-visual classroom",
    "Physical demonstration models for mechanics and optics",
    "Regular doubt resolution desk with faculty mentors",
    "Comprehensive printed formula handbooks & derivation booklets",
    "Convenient location accessible from all parts of Bhandara",
  ];

  return (
    <div className="bg-white text-[#0F172A] min-h-screen">
      {/* Top Hero Banner - Bright Light Theme */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50 to-white text-[#0F172A] pt-36 pb-16 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200/90 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>About United Classes Bhandara</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Conceptual Depth</span> & Problem-Solving Confidence
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Science is not a chore of rote memorization—it is the language of how reality functions. We help Class 11th and 12th science students master Physics, Chemistry, Mathematics &amp; Biology with clarity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Lead Educator Section */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Faculty Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 space-y-6">
              {/* Faculty Team Composite Card */}
              <div className="w-full rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100 border border-slate-200/90 p-5 text-center space-y-4 shadow-sm">
                <div className="grid grid-cols-2 gap-2.5">
                  {siteConfig.facultyTeam.map((fac, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-2xs flex flex-col items-center">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-blue-400/80 mb-1.5 shadow-2xs bg-slate-100">
                        <Image
                          src={fac.imageUrl}
                          alt={fac.name}
                          fill
                          sizes="48px"
                          className="object-cover object-top"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 truncate max-w-full block">
                        {fac.name}
                      </span>
                      <span className="text-[9px] text-blue-600 font-semibold block">
                        {fac.subject} Lead
                      </span>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {siteConfig.brandName} Faculty Team
                  </h3>
                  <span className="text-xs text-blue-600 font-semibold block">
                    Specialist Mentors (Physics, Chemistry, Maths &amp; Biology)
                  </span>
                </div>

                <span className="font-atrangi text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-300 inline-block">
                  🎯 Concept First Mentorship
                </span>
              </div>

              {/* Meta Stats */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <strong className="text-slate-800 block">Experience:</strong>
                    <span className="text-slate-600">{siteConfig.teacherProfile.experiencePlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <strong className="text-slate-800 block">Core Specialization:</strong>
                    <span className="text-slate-600">{siteConfig.teacherProfile.specialization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <strong className="text-slate-800 block">Admissions:</strong>
                    <span className="text-slate-600">Academic Session {siteConfig.academicSession}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
                Our Origin & Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F172A] tracking-tight">
                Why We Started <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">United Classes</span> in Bhandara
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              Every year, hundreds of ambitious students in Bhandara take up Science in Class 11 with dreams of entering prestigious engineering (IIT/NIT/COEP) and medical (AIIMS/GMC) colleges. Yet, all too often, abstract derivations and heavy numericals in Physics and Chemistry become the stumbling blocks that shatter their confidence.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Big commercial coaching factories pack 80 to 100 students in crowded halls where questions are discouraged and derivations are rushed. At United Classes Bhandara, we maintain focused batch sizes to ensure individual attention and have assembled dedicated postgraduate subject specialists for Physics, Chemistry, Mathematics, and Biology.
            </p>

            <div className="bg-blue-50/80 border-l-4 border-blue-600 p-5 rounded-r-2xl">
              <p className="text-sm font-medium text-slate-800 italic leading-relaxed">
                &ldquo;Science is inherently beautiful when taught correctly from first principles. Our commitment is simple: no student in our classroom will ever be left behind in confusion. We break down the toughest concept until it feels intuitive and solvable.&rdquo;
              </p>
              <span className="text-xs text-blue-700 font-bold block mt-2">
                — {siteConfig.teacherProfile.name}, United Classes Bhandara
              </span>
            </div>

            {/* Core Values Grid */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold font-heading text-[#172033]">
                Our Four Core Teaching Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:border-blue-300 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-slate-900">
                        {v.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Classroom Environment */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="text-xl font-bold font-heading text-[#172033]">
                Classroom & Study Infrastructure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                {classroomFeatures.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm tracking-wide shadow-md shadow-blue-600/20 text-center transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Courses & Syllabi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-300 text-center transition-all"
              >
                Schedule an Institute Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Specialists Section */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Subject Specialist Educators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A]">
              Dedicated Mentors for Every Science Stream
            </h2>
            <p className="text-slate-600 text-sm">
              No single teacher handles multiple subjects. Each discipline is led by an experienced postgraduate specialist.
            </p>
            <p className="text-[11px] text-slate-400 italic">
              (Sample faculty profiles illustrating department setup • Official credentials and photographs will be updated upon final institute roster confirmation)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.facultyTeam.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-4 text-center"
              >
                <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-blue-500 shadow-md shadow-blue-600/15 bg-slate-100">
                  {fac.imageUrl ? (
                    <Image
                      src={fac.imageUrl}
                      alt={fac.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-heading font-black text-2xl">
                      {fac.subject === "Physics" ? "⚛️" : fac.subject === "Chemistry" ? "🧪" : fac.subject === "Mathematics" ? "📐" : "🧬"}
                    </div>
                  )}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                    {fac.subject} Department
                  </span>
                  <h3 className="font-heading font-bold text-base text-slate-900 mt-1">
                    {fac.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{fac.qualificationPlaceholder}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600">
                  <strong className="block text-slate-800">Specialization:</strong>
                  <span>{fac.specialization}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
