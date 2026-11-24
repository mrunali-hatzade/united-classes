"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Atom, Menu, X, ArrowRight, Sparkles, MapPin, Phone, GraduationCap } from "lucide-react";
import { siteConfig, navLinks } from "@/config/site";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openDemoModal } = useDemoModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Notification Announcement Bar (Inspired by Shiksha Classes) */}
      <div className="bg-[#0F172A] text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{siteConfig.location.city}, Maharashtra</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Helpline: <strong className="text-white font-mono">{siteConfig.contact.phoneDisplay}</strong></span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-cyan-300 font-medium">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Admissions Open {siteConfig.academicSession} — Free Demo Lectures Available</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 border-b border-slate-200/80 py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
              aria-label="United Classes Home"
            >
              <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 p-[1.5px] shadow-md shadow-blue-600/20 group-hover:shadow-cyan-400/30 transition-shadow block">
                <span className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Atom className="w-6 h-6 text-blue-600 transition-transform duration-500 group-hover:rotate-180" />
                </span>
              </span>
              <span className="flex flex-col">
                <span className="font-funky font-bold text-lg sm:text-xl text-[#0F172A] tracking-wider flex items-center gap-1.5">
                  UNITED <span className="text-blue-600">CLASSES</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-blue-600" />
                  Science (PCMB) • {siteConfig.location.city}
                </span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-blue-600 bg-blue-50/80"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Right CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => openDemoModal()}
                className="btn-shimmer relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md shadow-blue-600/25 hover:shadow-blue-600/35 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
              >
                <span>BOOK FREE DEMO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={() => openDemoModal()}
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs tracking-wider uppercase shadow-sm"
              >
                DEMO
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center transition-colors hover:bg-slate-200"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "text-blue-600 bg-blue-50 font-bold"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDemoModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shadow-blue-600/25"
              >
                <Sparkles className="w-4 h-4" />
                <span>BOOK FREE DEMO LECTURE</span>
              </button>
              <p className="text-center text-[11px] text-slate-500">
                Bhandara Classroom Center • Focused Batch Sizes
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
