import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageSquare, Sparkles, Navigation, ShieldCheck, HelpCircle } from "lucide-react";
import DemoEnquiryForm from "@/components/forms/DemoEnquiryForm";
import { siteConfig } from "@/config/site";
import { faqData } from "@/data/faq";
import DemoBadge from "@/components/common/DemoBadge";

export const metadata: Metadata = {
  title: "Contact & Book Free Demo | United Classes Bhandara",
  description:
    "Contact United Classes Coaching Centre in Bhandara, Maharashtra. Book a free demo lecture, inquire about Class 11th, 12th, JEE, NEET, or MHT-CET batches.",
};

export default function ContactPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen">
      {/* Top Hero Banner - Bright Light Theme */}
      <section className="bg-gradient-to-b from-blue-50/60 via-slate-50 to-white text-[#0F172A] pt-36 pb-16 relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions & Counseling Desk</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Get in Touch & Book Your Free Demo
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions about batch timings, syllabus coverage, or scholarships? Visit our center in Bhandara or reserve your free demo lecture below.
          </p>
        </div>
      </section>

      {/* Main Grid: Form (7 cols) + Contact Details (5 cols) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Demo Booking Form Card (7 cols) */}
          <div id="demo-form" className="lg:col-span-7 bg-[#101D38] text-white rounded-3xl p-7 sm:p-10 border border-blue-900/60 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                Zero Obligation • Free Trial Class
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Book Free Demo Lecture
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Fill out the quick form below. Our academic counselor will confirm your preferred date and time slot.
              </p>
            </div>

            <DemoEnquiryForm isCompact={false} />
          </div>

          {/* Right Column: Address, Map, Timings (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md space-y-5">
              <h3 className="font-heading font-bold text-xl text-slate-900 border-b pb-3">
                Center Contact Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-sm">Classroom Facility:</strong>
                    <span>{siteConfig.location.addressLine1}</span>
                    <span className="block">{siteConfig.location.addressLine2}</span>
                    <span className="block text-xs text-blue-600 mt-0.5">Landmark: {siteConfig.location.landmarkPlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-sm">Counseling Hotline:</strong>
                    <span className="font-mono text-slate-700">{siteConfig.contact.phonePlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-sm">Email Address:</strong>
                    <span>{siteConfig.contact.emailPlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-sm">Office Timings:</strong>
                    <span>{siteConfig.contact.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Preview Card */}
            <div className="bg-white rounded-3xl p-3 border border-slate-200/90 shadow-md">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  title="United Classes Location"
                  src={siteConfig.location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-xs text-slate-500">
                  Located in Bhandara, Maharashtra • Easily accessible via bus and local transit
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-[#172033]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Clear answers for students and parents considering Science (Physics, Chemistry, Maths &amp; Biology) coaching in Bhandara.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-2xl p-5 bg-[#F8FAFC] open:bg-white open:border-blue-400 open:shadow-md transition-all duration-200"
              >
                <summary className="font-heading font-bold text-base text-slate-900 cursor-pointer flex items-center justify-between list-none">
                  <span>{item.question}</span>
                  <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-blue-600 group-open:text-white flex items-center justify-center text-xs font-bold transition-colors">
                    +
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-100">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
