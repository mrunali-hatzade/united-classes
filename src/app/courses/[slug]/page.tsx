import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Atom, FlaskConical, Calculator, Dna, Zap, Target, Activity, Compass, ArrowRight, CheckCircle2, Sparkles, BookOpen, Clock, Users, ShieldAlert, Calendar, GraduationCap } from "lucide-react";
import { coursesData, CourseItem } from "@/data/courses";
import DemoEnquiryForm from "@/components/forms/DemoEnquiryForm";
import { siteConfig } from "@/config/site";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);
  if (!course) {
    return { title: "Course Not Found | United Classes" };
  }

  return {
    title: `${course.title} in Bhandara | United Classes Coaching`,
    description: `${course.shortDescription} Premier Science & Tuition coaching in Bhandara, Maharashtra by United Classes. Small batch size, conceptual clarity, and free demo lectures.`,
    keywords: [
      `${course.title} Bhandara`,
      "United Classes Bhandara",
      "Science Classes Bhandara",
      `${course.level} Coaching Bhandara`,
      "United Classes PCMB",
      "Tuition Classes Bhandara",
    ],
  };
}

async function CourseDetailContent({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

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
  const Icon = iconMap[course.iconName] || Atom;

  return (
    <div className="bg-white text-[#0F172A] min-h-screen">
      {/* Top Hero Section - Bright Light Theme */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50 to-white text-[#0F172A] pt-36 pb-16 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/courses"
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                ← All Courses
              </Link>
              <span className="text-slate-400">•</span>
              <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200">
                {course.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
              {course.title}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {course.shortDescription}
            </p>

            {/* Quick Specs Strip */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Users className="w-4 h-4 text-blue-600" />
                <span>{course.batchSize}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: 8 cols (Overview, Who Should Enrol, Topics Covered, Learning Approach) */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Dedicated Assigned Faculty & Subject Lead */}
            <div className="bg-gradient-to-br from-blue-50/90 via-slate-50 to-indigo-50/50 rounded-3xl p-7 sm:p-9 border border-blue-200/90 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-200/70 pb-5">
                <div className="flex items-center gap-4">
                  {course.assignedFaculty.imageUrl ? (
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-blue-400 shadow-md shadow-blue-600/20 shrink-0 bg-slate-100">
                      <Image
                        src={course.assignedFaculty.imageUrl}
                        alt={course.assignedFaculty.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-blue-600/20 shrink-0">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                  )}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/90 px-2.5 py-0.5 rounded-full inline-block mb-1 border border-blue-200">
                      Subject Specialist Mentor
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#0F172A]">
                      {course.assignedFaculty.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      {course.assignedFaculty.designation}
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs font-bold text-slate-800 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs inline-block">
                    🎓 {course.assignedFaculty.qualification}
                  </span>
                  <span className="text-[11px] text-blue-700 font-semibold block mt-1">
                    {course.assignedFaculty.experience}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Specialization Area:</strong>{" "}
                  {course.assignedFaculty.specialization}
                </div>

                {course.assignedFaculty.highlights && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    {course.assignedFaculty.highlights.map((item, idx) => (
                      <div key={idx} className="bg-white border border-blue-100 rounded-xl p-2.5 text-xs text-slate-700 flex items-start gap-2 shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {course.facultyTeamList && (
                <div className="pt-4 border-t border-blue-200/70 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    All 4 Dedicated Stream Leads (Physics, Chemistry, Maths &amp; Biology):
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.facultyTeamList.map((f, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-3 text-xs shadow-2xs">
                        {f.imageUrl && (
                          <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-blue-200 shadow-2xs shrink-0 bg-slate-100">
                            <Image
                              src={f.imageUrl}
                              alt={f.name}
                              fill
                              sizes="44px"
                              className="object-cover object-top"
                            />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <strong className="text-slate-900 block font-heading truncate">{f.name}</strong>
                          <span className="text-slate-500 text-[11px] block truncate">{f.subject} • {f.designation}</span>
                          <span className="text-[10px] text-blue-700 font-bold block truncate mt-0.5">
                            {f.qualification}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Course Overview */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold font-heading text-[#172033] flex items-center gap-2.5">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <span>Course Overview</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {course.fullDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {course.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Who Should Enrol */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold font-heading text-[#172033] flex items-center gap-2.5">
                <Target className="w-6 h-6 text-indigo-600" />
                <span>Who Should Enrol</span>
              </h2>
              <p className="text-sm text-slate-600">
                This batch is curated specifically for students with these academic objectives:
              </p>
              <div className="space-y-3">
                {course.whoShouldEnrol.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-xs">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Topics Covered & Curriculum Modules */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold font-heading text-[#172033] flex items-center gap-2.5">
                  <Icon className="w-6 h-6 text-cyan-600" />
                  <span>Curriculum & Topics Covered</span>
                </h2>
                <span className="text-[11px] font-mono text-slate-400">
                  {course.curriculumHighlights.length} Modules
                </span>
              </div>

              <div className="space-y-4">
                {course.curriculumHighlights.map((mod, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-2xl p-5 hover:border-blue-400 transition-colors">
                    <h3 className="font-heading font-bold text-base text-slate-900 mb-1">
                      {mod.module}
                    </h3>
                    <p className="text-xs text-slate-600 mb-3">
                      {mod.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mod.chapters.map((ch, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md text-xs bg-slate-100 text-slate-700 font-medium">
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Learning Approach */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold font-heading text-[#172033] flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-amber-500" />
                <span>Our Teaching & Learning Approach</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.learningApproach.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1.5">
                    <h4 className="font-heading font-bold text-sm text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 cols (Sticky Enquiry CTA & Batch Logistics) */}
          <div id="demo-enquiry" className="lg:col-span-4 sticky top-24 space-y-6">
            {/* Batch Logistics Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
              <h3 className="font-heading font-bold text-lg text-slate-900 border-b pb-3">
                Batch Information
              </h3>
              <div className="space-y-3.5 text-xs text-slate-700">
                <div>
                  <span className="font-semibold text-slate-900 block">Class Timing:</span>
                  <p className="font-mono text-slate-600 mt-0.5">{course.schedulePlaceholder}</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Location:</span>
                  <p className="text-slate-600 mt-0.5">{siteConfig.location.city} Classroom Centre, Maharashtra</p>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Fees:</span>
                  <p className="text-amber-800 font-medium mt-0.5">{course.feeNotice}</p>
                </div>
              </div>
            </div>

            {/* Demo Enquiry Form Card */}
            <div className="bg-[#101D38] text-white rounded-3xl p-6 border border-blue-900/60 shadow-xl space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block">
                  Experience This Course Free
                </span>
                <h3 className="font-heading font-bold text-xl text-white mt-1">
                  Book Free Demo Lecture
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Attend a trial class for {course.title} with no commitment.
                </p>
              </div>

              <DemoEnquiryForm defaultCourse={course.title} isCompact={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CourseSkeleton() {
  return (
    <div className="bg-white min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="h-6 w-32 bg-slate-100 rounded-full animate-pulse" />
        <div className="h-12 w-96 bg-slate-100 rounded-2xl animate-pulse" />
        <div className="h-20 max-w-2xl bg-slate-100 rounded-2xl animate-pulse" />
      </div>
    </div>
  );
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  return (
    <Suspense fallback={<CourseSkeleton />}>
      <CourseDetailContent params={params} />
    </Suspense>
  );
}
