"use client";

import React from "react";
import { Atom, FlaskConical, Calculator, Dna } from "lucide-react";

export default function PhysicsVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center select-none">
      {/* Background ambient lighting for light theme */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 via-cyan-50/50 to-indigo-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-72 h-72 bg-blue-200/40 rounded-full blur-2xl pointer-events-none animate-pulse-glow" />

      {/* Outer concentric grid ring */}
      <div className="absolute inset-4 rounded-full border border-blue-200/80 border-dashed animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-16 rounded-full border border-cyan-300/60" />
      <div className="absolute inset-28 rounded-full border border-indigo-200/70 border-dotted animate-[spin_40s_linear_infinite_reverse]" />

      {/* Main Atom Orbital SVG */}
      <svg
        className="w-full h-full max-w-[420px] max-h-[420px] z-10"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orbitGradLight1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="orbitGradLight2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="nucleusGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <filter id="glowLight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit Ellipse 1 - 0 deg */}
        <ellipse
          cx="200"
          cy="200"
          rx="170"
          ry="65"
          stroke="url(#orbitGradLight1)"
          strokeWidth="2"
          strokeDasharray="8 4"
        />

        {/* Orbit Ellipse 2 - 60 deg */}
        <g transform="rotate(60 200 200)">
          <ellipse
            cx="200"
            cy="200"
            rx="170"
            ry="65"
            stroke="url(#orbitGradLight2)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          {/* Electron 1 */}
          <circle cx="370" cy="200" r="6" fill="#0284C7" filter="url(#glowLight)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 200 200"
              to="360 200 200"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Orbit Ellipse 3 - 120 deg */}
        <g transform="rotate(120 200 200)">
          <ellipse
            cx="200"
            cy="200"
            rx="170"
            ry="65"
            stroke="url(#orbitGradLight1)"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          {/* Electron 2 */}
          <circle cx="30" cy="200" r="6" fill="#D97706" filter="url(#glowLight)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 200 200"
              to="-360 200 200"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Center Nucleus */}
        <g filter="url(#glowLight)">
          <circle cx="200" cy="200" r="32" fill="url(#nucleusGradLight)" />
          <circle cx="200" cy="200" r="38" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="200" cy="200" r="48" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.3" />
        </g>
      </svg>

      {/* Center Icon Overlay */}
      <div className="absolute z-20 flex flex-col items-center justify-center pointer-events-none">
        <Atom className="w-10 h-10 text-white animate-[spin_20s_linear_infinite]" />
        <span className="text-[10px] font-mono tracking-widest text-cyan-200 font-bold mt-0.5">
          PCMB • 2026–27
        </span>
        <span className="text-[8px] font-bold text-blue-900 uppercase tracking-wider mt-1 bg-white/95 px-2.5 py-0.5 rounded-full border border-blue-200 shadow-sm">
          United Classes Science
        </span>
      </div>

      {/* Floating Glassmorphism Cards for all 4 Subjects (PCMB) */}

      {/* Card 1: Top Left - Physics */}
      <div className="absolute -top-1 left-0 sm:left-4 z-20 bg-white/95 border border-slate-200/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg shadow-slate-900/5 transition-transform duration-300 hover:scale-105 animate-float">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
          <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
            E = mc²
          </span>
        </div>
        <span className="text-[9px] text-blue-700 block font-sans font-bold">Physics • Relativity</span>
      </div>

      {/* Card 2: Top Right - Chemistry */}
      <div className="absolute top-6 right-0 sm:right-2 z-20 bg-white/95 border border-slate-200/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg shadow-slate-900/5 transition-transform duration-300 hover:scale-105 animate-float [animation-delay:1.5s]">
        <div className="flex items-center gap-2">
          <FlaskConical className="w-3.5 h-3.5 text-emerald-600" />
          <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
            PV = nRT
          </span>
        </div>
        <span className="text-[9px] text-emerald-700 block font-sans font-bold">Chemistry • Thermodynamics</span>
      </div>

      {/* Card 3: Bottom Left - Mathematics */}
      <div className="absolute bottom-6 left-2 sm:left-6 z-20 bg-white/95 border border-slate-200/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg shadow-slate-900/5 transition-transform duration-300 hover:scale-105 animate-float [animation-delay:3s]">
        <div className="flex items-center gap-2">
          <Calculator className="w-3.5 h-3.5 text-indigo-600" />
          <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
            ∫ eˣ dx = eˣ
          </span>
        </div>
        <span className="text-[9px] text-indigo-700 block font-sans font-bold">Maths • Calculus</span>
      </div>

      {/* Card 4: Bottom Right - Biology */}
      <div className="absolute bottom-2 right-2 sm:right-6 z-20 bg-white/95 border border-slate-200/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg shadow-slate-900/5 transition-transform duration-300 hover:scale-105 animate-float [animation-delay:2s]">
        <div className="flex items-center gap-2">
          <Dna className="w-3.5 h-3.5 text-cyan-600" />
          <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
            DNA • ATP
          </span>
        </div>
        <span className="text-[9px] text-cyan-700 block font-sans font-bold">Biology • Life Systems</span>
      </div>
    </div>
  );
}
