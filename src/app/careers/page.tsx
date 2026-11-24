import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Briefcase,
  Sparkles,
  Users,
  Compass,
  Award,
  Building2,
  Clock,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  HelpCircle,
} from "lucide-react";
import { careerPositions, careerPerks, hiringProcessSteps } from "@/data/careers";
import CareerApplicationForm from "@/components/careers/CareerApplicationForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Career Opportunities | Join United Classes Bhandara - Faculty & Staff Openings",
  description:
    "Join the teaching faculty at United Classes Bhandara. Openings for Physics, Chemistry, Mathematics, Biology (PCMB) educators, academic counselors, and DTP staff in Bhandara, Maharashtra.",
  keywords: [
    "Teaching Jobs Bhandara",
    "Physics Faculty Jobs Bhandara",
    "Chemistry Faculty Jobs Bhandara",
    "Mathematics Faculty Jobs Bhandara",
    "Biology Faculty Jobs Bhandara",
    "NEET Coaching Faculty Jobs Maharashtra",
    "JEE Coaching Faculty Jobs",
    "United Classes Careers",
  ],
};

export default function CareersPage() {
  const getPerkIcon = (name: string) => {
    switch (name) {
      case "Compass":
        return Compass;
      case "Users":
        return Users;
      case "Award":
        return Award;
      case "Building2":
        return Building2;
      case "Clock":
        return Clock;
      default:
        return FileCheck;
    }
  };

  return (
    <div className="bg-white text-[#0F172A] min-h-screen">
      {/* Top Hero Banner */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50 to-white text-[#0F172A] pt-36 pb-16 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200/90 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>Join Our Academic Community</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight leading-tight">
            Inspire the Next Generation of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Science Scholars
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At <strong className="text-slate-900 font-semibold">{siteConfig.brandName}</strong>, we believe great teaching comes from teachers who love their subject and care deeply about their students. Join our dedicated postgraduate specialist team in Bhandara, Maharashtra.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-blue-600/20 flex items-center gap-2"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#apply-form"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs tracking-wider uppercase border border-slate-300 transition-all text-center"
            >
              Apply Directly
            </a>
          </div>
        </div>
      </section>

      {/* Why Teach With Us (Perks & Culture) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Teaching Environment &amp; Culture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A]">
            Why Educators Choose United Classes
          </h2>
          <p className="text-slate-600 text-sm">
            We reject the crowded factory coaching model in favor of teacher dignity, academic autonomy, and student-focused classroom mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {careerPerks.map((perk, idx) => {
            const Icon = getPerkIcon(perk.iconName);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900">
                  {perk.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="openings" className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Active Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A]">
              Current Open Positions
            </h2>
            <p className="text-slate-600 text-sm">
              Explore our current teaching and academic support openings for the {siteConfig.academicSession} academic session.
            </p>
          </div>

          <div className="space-y-6">
            {careerPositions.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all space-y-5"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                        {job.badge}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-slate-600 bg-slate-100 border border-slate-200">
                        {job.type}
                      </span>
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {job.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
                      {job.title}
                    </h3>
                    <span className="text-xs font-semibold text-blue-600 block mt-0.5">
                      {job.department} • Experience Required: {job.experience}
                    </span>
                  </div>

                  <a
                    href="#apply-form"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-sm text-center shrink-0 self-start lg:self-center"
                  >
                    Apply for this Role
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {job.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-slate-700">
                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <strong className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                      Core Responsibilities:
                    </strong>
                    <ul className="space-y-1.5">
                      {job.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    <strong className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                      Candidate Profile &amp; Qualifications:
                    </strong>
                    <ul className="space-y-1.5">
                      {job.requirements.map((req, qIdx) => (
                        <li key={qIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-1.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Stage Hiring Journey */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Recruitment Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A]">
            How We Onboard Faculty &amp; Staff
          </h2>
          <p className="text-slate-600 text-sm">
            Our 4-step recruitment path is straightforward, professional, and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringProcessSteps.map((step, sIdx) => (
            <div
              key={sIdx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-funky font-bold text-3xl text-blue-600">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    Step {sIdx + 1}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 mb-0.5">
                  {step.title}
                </h3>
                <span className="text-xs text-blue-600 font-semibold block mb-2">
                  {step.subtitle}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form & Contact Info Section */}
      <section id="apply-form" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#101D38] text-white rounded-3xl p-7 sm:p-10 border border-blue-900/60 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                Direct Faculty Application
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Submit Your Teaching Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Fill out the confidential application form below. Our academic recruitment coordinator will follow up to arrange your technical demo lecture.
              </p>
            </div>

            <CareerApplicationForm />
          </div>

          {/* Right Column: Recruitment Desk & Campus Office (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md space-y-5">
              <h3 className="font-heading font-bold text-xl text-slate-900 border-b pb-3">
                Faculty Recruitment Desk
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-sm">Classroom Campus:</strong>
                    <span>{siteConfig.location.addressLine1}</span>
                    <span className="block">{siteConfig.location.addressLine2}</span>
                    <span className="block text-xs text-blue-600 mt-0.5">
                      {siteConfig.location.city}, Maharashtra - {siteConfig.location.pincode}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-sm">Recruitment Hotline:</strong>
                    <span className="font-mono text-slate-700">{siteConfig.contact.phonePlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-sm">Careers Email:</strong>
                    <span>careers@{siteConfig.domainPlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-sm">Interview Hours:</strong>
                    <span>Monday – Saturday: 10:00 AM – 5:00 PM (Prior Appointment)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note for Outstation Applicants */}
            <div className="bg-blue-50/70 border border-blue-200/90 rounded-3xl p-6 text-xs text-slate-700 space-y-2">
              <strong className="text-blue-900 block font-heading font-bold text-sm">
                Relocating to Bhandara?
              </strong>
              <p className="leading-relaxed text-slate-600">
                Candidates from Nagpur, Gondia, Wardha, and other regions of Maharashtra are welcome to apply. Outstation candidates can conduct the initial round and preliminary demo lecture via online video conference.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
