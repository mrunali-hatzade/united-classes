import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Atom, FlaskConical, Calculator, Dna, Zap, Target, Activity, Compass, ArrowRight, CheckCircle2, BookOpen } from "lucide-react";
import { coursesData } from "@/data/courses";

export const metadata: Metadata = {
  title: "Science Courses & Tuition | United Classes Bhandara - Physics, Chemistry, Maths & Biology",
  description:
    "Explore comprehensive Science tuition programs in Bhandara, Maharashtra. Dedicated subject specialists for Physics, Chemistry, Mathematics, and Biology for Class 11th, 12th State Board / CBSE, JEE Main, NEET-UG, and MHT-CET.",
};

export default function CoursesPage() {
  const iconMap: Record<string, React.ElementType> = {
    Atom,
    FlaskConical,
    Calculator,
    Dna,
    Zap,
    Target,
    Activity,
    Compass,
  };

  const mainCourses = coursesData.filter((c) => !c.id.includes("alias"));

  return (
    <div className="bg-white text-[#0F172A] min-h-screen">
      {/* Top Hero Banner - Bright Light Theme */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50 to-white text-[#0F172A] pt-36 pb-16 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200/90 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Curriculum &amp; Programs 2026–27</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Science Coaching &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Tuition Programs</span> in Bhandara
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Dedicated subject specialist mentorship across Physics, Chemistry, Mathematics &amp; Biology. Enrol in individual subject batches or our complete synchronized PCMB integrated package.
          </p>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {mainCourses.map((course, idx) => {
            const Icon = iconMap[course.iconName] || Atom;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={course.id}
                id={course.slug}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden hover:border-blue-400 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left (or Right) Content Side: 8 cols */}
                  <div className="lg:col-span-8 p-6 sm:p-10 space-y-6">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                        {course.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        Target: {course.targetAudience}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#172033] tracking-tight">
                        {course.title}
                      </h2>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {course.fullDescription}
                      </p>
                    </div>

                    {/* Key Curriculum Bullets */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Core Syllabus Covered:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                        {course.keyTopics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features Strip */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2 text-xs text-slate-600">
                      <strong className="text-slate-800 block text-xs">
                        Program Distinctives:
                      </strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.features.slice(0, 4).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View Details Link */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-blue-600/20 flex items-center gap-2 group"
                      >
                        <span>View Full Syllabus & Enrolment Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Sidebar Info Panel: 4 cols */}
                  <div className="lg:col-span-4 bg-[#101D38] p-6 sm:p-8 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-blue-900/60">
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-cyan-300 border border-cyan-400/30">
                          Faculty Led
                        </span>
                      </div>

                      {/* Assigned Faculty Spotlight with Photo in Sidebar */}
                      <div className="p-3.5 rounded-2xl bg-white/10 border border-cyan-400/30 flex items-center gap-3 backdrop-blur-xs">
                        {course.assignedFaculty.imageUrl && (
                          <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-cyan-400/60 shadow-md shrink-0 bg-slate-800">
                            <Image
                              src={course.assignedFaculty.imageUrl}
                              alt={course.assignedFaculty.name}
                              fill
                              sizes="56px"
                              className="object-cover object-top"
                            />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 block">
                            Assigned Faculty
                          </span>
                          <h4 className="text-white font-bold text-sm truncate font-heading">
                            {course.assignedFaculty.name}
                          </h4>
                          <span className="text-slate-300 text-xs truncate block">
                            {course.assignedFaculty.designation}
                          </span>
                          <span className="text-cyan-200 text-[10px] font-semibold block truncate mt-0.5">
                            🎓 {course.assignedFaculty.qualification}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 text-xs">
                        <div>
                          <span className="text-slate-400 block font-medium">Batch Duration:</span>
                          <span className="text-white font-semibold">{course.duration}</span>
                        </div>

                        <div>
                          <span className="text-slate-400 block font-medium">Class Capacity:</span>
                          <span className="text-white font-semibold">{course.batchSize}</span>
                        </div>

                        <div>
                          <span className="text-slate-400 block font-medium">Schedule:</span>
                          <span className="text-slate-300 font-mono text-[11px] block">{course.schedulePlaceholder}</span>
                        </div>

                        <div>
                          <span className="text-slate-400 block font-medium">Fee Guidance:</span>
                          <span className="text-amber-300 text-[11px] block leading-tight">{course.feeNotice}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-800">
                      <Link
                        href={`/courses/${course.slug}#demo-enquiry`}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs tracking-wider uppercase text-center block transition-all shadow-md"
                      >
                        Request Demo Lecture
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
