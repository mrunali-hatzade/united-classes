"use client";

import React from "react";
import Link from "next/link";
import { Atom, MapPin, Phone, Mail, Clock, Send, ArrowRight, ShieldCheck, Video, Camera } from "lucide-react";
import { siteConfig, navLinks } from "@/config/site";
import { coursesData } from "@/data/courses";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Footer() {
  const { openDemoModal } = useDemoModal();

  return (
    <footer className="bg-[#0c162b] text-slate-300 border-t border-blue-900/40 relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-cyan-400 p-[1.5px] shadow-md shadow-blue-600/30 block">
                <span className="w-full h-full bg-[#101D38] rounded-[10px] flex items-center justify-center">
                  <Atom className="w-6 h-6 text-cyan-400" />
                </span>
              </span>
              <span className="flex flex-col">
                <span className="font-funky font-bold text-xl text-white tracking-wider">
                  UNITED <span className="text-cyan-400">CLASSES</span>
                </span>
                <span className="text-[10px] font-medium text-slate-400 tracking-wider">
                  Science Academy (PCMB) • {siteConfig.location.city}, Maharashtra
                </span>
              </span>
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Premier science coaching dedicated to Class 11th &amp; 12th Science (Physics, Chemistry, Maths &amp; Biology), State Board, CBSE, JEE Main, NEET-UG, and MHT-CET aspirants. Building conceptual depth and academic confidence.
            </p>

            {/* Social Links Placeholders */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                Social Media (Demo Channels):
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Demo Channel"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 text-pink-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Demo Channel"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 text-red-500 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram Demo Channel"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 text-sky-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 flex items-center justify-center transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading border-l-2 border-cyan-400 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-cyan-300 transition-colors duration-150 inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-500" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Course Programs */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading border-l-2 border-cyan-400 pl-2.5">
              Course Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              {coursesData
                .filter((c) => !c.id.includes("alias"))
                .map((course) => (
                  <li key={course.id}>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="hover:text-cyan-300 transition-colors duration-150 inline-flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{course.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Col 5: Contact & Location Placeholders */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-heading border-l-2 border-cyan-400 pl-2.5">
              Institute Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">{siteConfig.location.city} Center</span>
                  <span className="text-xs text-slate-400 block">{siteConfig.location.addressLine1}</span>
                  <span className="text-xs text-slate-400 block">{siteConfig.location.addressLine2}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono text-xs">{siteConfig.contact.phonePlaceholder}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300">{siteConfig.contact.emailPlaceholder}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">{siteConfig.contact.officeHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openDemoModal()}
                className="w-full py-2.5 px-3 rounded-xl bg-blue-600/30 hover:bg-blue-600 text-cyan-300 hover:text-white border border-blue-500/40 text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Demo Lecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 {siteConfig.brandName} • {siteConfig.location.city}, Maharashtra. All rights reserved.
          </p>
          <p className="text-slate-400 text-center sm:text-right">
            United Classes | Demo Website by{" "}
            <span className="text-white font-medium">{siteConfig.developedBy.name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
