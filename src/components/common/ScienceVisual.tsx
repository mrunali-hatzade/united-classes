"use client";

import React from "react";
import { Atom, FlaskConical, Calculator, Dna, Sparkles } from "lucide-react";

export default function ScienceVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center select-none p-4">
      {/* Background ambient lighting for light theme */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/70 via-indigo-50/50 to-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-72 h-72 bg-blue-200/40 rounded-full blur-2xl pointer-events-none animate-pulse-glow" />

      {/* Outer concentric decorative dashed rings */}
      <div className="absolute inset-6 rounded-full border border-blue-200/70 border-dashed animate-[spin_80s_linear_infinite]" />
      <div className="absolute inset-20 rounded-full border border-indigo-200/50 animate-[spin_50s_linear_infinite_reverse]" />

      {/* Central Integrated Core Card */}
      <div className="relative z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-blue-200/90 shadow-xl shadow-blue-600/10 flex flex-col items-center justify-center text-center p-3 sm:p-4 transition-transform duration-300 hover:scale-105">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md mb-1.5 sm:mb-2">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
        </div>
        <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full mb-1">
          United Classes
        </span>
        <h4 className="text-xs sm:text-sm font-extrabold font-heading text-[#0F172A] leading-tight">
          Science (PCMB)
        </h4>
        <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5">
          11th &amp; 12th Science
        </span>
        <div className="mt-1.5 sm:mt-2 flex items-center gap-1">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-[9px] sm:text-[10px] font-bold text-slate-700">Boards • JEE • NEET</span>
        </div>
      </div>

      {/* Top Left: Physics Node */}
      <div className="absolute top-1 left-2 sm:top-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 border border-blue-200 shadow-md shadow-blue-500/10 hover:shadow-lg hover:border-blue-400 transition-all duration-300 group hover:-translate-y-1">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
            <Atom className="w-4 h-4 sm:w-5 sm:h-5 animate-[spin_12s_linear_infinite]" />
          </div>
          <div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-[11px] sm:text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Physics</span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded">Mechanics</span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-slate-500 block font-mono">F=dp/dt • E=mc²</span>
          </div>
        </div>
      </div>

      {/* Top Right: Chemistry Node */}
      <div className="absolute top-1 right-2 sm:top-6 sm:right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 border border-emerald-200 shadow-md shadow-emerald-500/10 hover:shadow-lg hover:border-emerald-400 transition-all duration-300 group hover:-translate-y-1">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
            <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-[11px] sm:text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Chemistry</span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">Organic</span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-slate-500 block font-mono">ΔG = ΔH - TΔS</span>
          </div>
        </div>
      </div>

      {/* Bottom Left: Mathematics Node */}
      <div className="absolute bottom-1 left-2 sm:bottom-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 border border-indigo-200 shadow-md shadow-indigo-500/10 hover:shadow-lg hover:border-indigo-400 transition-all duration-300 group hover:translate-y-1">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
            <Calculator className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-[11px] sm:text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Mathematics</span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.2 rounded">Calculus</span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-slate-500 block font-mono">∫ f(x)dx • dy/dx</span>
          </div>
        </div>
      </div>

      {/* Bottom Right: Biology Node */}
      <div className="absolute bottom-1 right-2 sm:bottom-6 sm:right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 border border-cyan-200 shadow-md shadow-cyan-500/10 hover:shadow-lg hover:border-cyan-400 transition-all duration-300 group hover:translate-y-1">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-200 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors shrink-0">
            <Dna className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className="text-[11px] sm:text-xs font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">Biology</span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-cyan-600 bg-cyan-50 px-1.5 py-0.2 rounded">Botany/Zoo</span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-slate-500 block font-mono">NCERT 360 Drills</span>
          </div>
        </div>
      </div>

      {/* Floating Target Badges */}
      <div className="absolute top-1/2 -left-2 -translate-y-1/2 z-20 hidden sm:block bg-amber-50 border border-amber-300/80 px-2.5 py-1 rounded-full shadow-sm -rotate-6">
        <span className="text-[11px] font-bold text-amber-800 font-atrangi">
          🎯 Board 95%+ &amp; CET
        </span>
      </div>

      <div className="absolute top-1/2 -right-2 -translate-y-1/2 z-20 hidden sm:block bg-blue-50 border border-blue-300/80 px-2.5 py-1 rounded-full shadow-sm rotate-6">
        <span className="text-[11px] font-bold text-blue-800 font-atrangi">
          ⚡ JEE &amp; NEET Target
        </span>
      </div>
    </div>
  );
}
