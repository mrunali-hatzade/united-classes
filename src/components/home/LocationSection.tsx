"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, ShieldAlert, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function LocationSection() {
  return (
    <section className="py-24 bg-[#F8FAFC] text-[#172033] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/90 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Classroom Centre • Bhandara</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Coaching Centre</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Conveniently located in the heart of Bhandara, Maharashtra. Easily accessible for students across the city and surrounding areas.
          </p>
        </div>

        {/* Location Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Institute Address & Visiting Info (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-900/5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  Main Coaching Facility
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#172033]">
                  {siteConfig.brandName} Bhandara
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Dedicated Physics Classroom & Doubt Clearing Desk
                </p>
              </div>

              {/* Address Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-700 space-y-1">
                    <p className="font-semibold text-slate-900">
                      {siteConfig.location.addressLine1}
                    </p>
                    <p>{siteConfig.location.addressLine2}</p>
                    <p className="text-xs text-blue-700 font-medium">
                      Landmark: {siteConfig.location.landmarkPlaceholder}
                    </p>
                  </div>
                </div>


              </div>

              {/* Timings & Office Hours */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Office Counseling Hours:</span>
                    <span>{siteConfig.contact.officeHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Batch Lecture Slots:</span>
                    <span>{siteConfig.contact.batchTimings}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Inquiry Desk: </span>
                    <span className="font-mono text-slate-700">{siteConfig.contact.phonePlaceholder}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider uppercase text-center transition-all shadow-md shadow-blue-600/20"
              >
                Plan Your Campus Visit
              </Link>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Placeholder (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-3 border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden flex flex-col">
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              {/* Responsive Google Maps Iframe */}
              <iframe
                title="United Classes Bhandara Location Map"
                src={siteConfig.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 text-xs text-slate-800 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <div>
                  <span className="font-bold block text-[#172033]">Bhandara, Maharashtra</span>
                  <span className="text-[10px] text-slate-500">Center View Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
