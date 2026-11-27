"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Briefcase, User, Phone, Mail, GraduationCap, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { careerPositions } from "@/data/careers";

interface CareerApplicationFormProps {
  defaultPosition?: string;
}

export default function CareerApplicationForm({ defaultPosition }: CareerApplicationFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState(defaultPosition || careerPositions[0].title);
  const [qualification, setQualification] = useState("M.Sc. / Master's Degree");
  const [experience, setExperience] = useState("2–4 Years");
  const [currentCity, setCurrentCity] = useState("Bhandara / Nearby");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      setStatus("error");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      setStatus("error");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    const message = [
      `*JOB APPLICATION — UNITED CLASSES BHANDARA*`,
      `---------------------------------------`,
      `*Candidate Name:* ${fullName.trim()}`,
      `*Position Applied:* ${position}`,
      `*Contact Phone:* ${cleanPhone}`,
      `*Email Address:* ${email.trim()}`,
      `*Highest Qualification:* ${qualification}`,
      `*Total Experience:* ${experience}`,
      `*Current Location:* ${currentCity.trim()}`,
      notes.trim() ? `*Teaching Highlights / Message:* ${notes.trim()}` : "",
      `---------------------------------------`,
      `_I am interested in joining United Classes Bhandara and would like to schedule a technical demo lecture / interview._`,
    ]
      .filter(Boolean)
      .join("\n");

    const { url } = getWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-4 text-emerald-100 animate-fadeIn">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-heading font-bold text-lg text-white">Application Received!</h3>
        <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
          Thank you for applying to join the academic team at <strong className="text-white">{siteConfig.brandName}</strong>. Our faculty recruitment coordinator has received your details and will contact you regarding the technical demo lecture.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFullName("");
            setPhone("");
            setEmail("");
            setNotes("");
          }}
          className="text-xs text-cyan-400 font-semibold hover:underline inline-block mt-2"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === "error" && errorMessage && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Candidate Name */}
      <div>
        <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
          Full Name <span className="text-cyan-400">*</span>
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            required
            placeholder="e.g. Dr. Rajesh Sharma"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* Phone & Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
            Mobile Number <span className="text-cyan-400">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="tel"
              required
              placeholder="e.g. 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors font-mono"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
            Email Address <span className="text-cyan-400">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              required
              placeholder="e.g. rajesh@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Position Applied For */}
      <div>
        <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
          Position Applied For <span className="text-cyan-400">*</span>
        </label>
        <div className="relative">
          <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
          >
            {careerPositions.map((pos) => (
              <option key={pos.id} value={pos.title} className="bg-slate-900 text-white">
                {pos.title}
              </option>
            ))}
            <option value="General Faculty / Other Subject" className="bg-slate-900 text-white">
              General Faculty / Other Subject
            </option>
          </select>
        </div>
      </div>

      {/* Qualification & Experience Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
            Highest Qualification
          </label>
          <div className="relative">
            <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
            >
              <option value="Ph.D. / Doctorate" className="bg-slate-900 text-white">Ph.D. / Doctorate</option>
              <option value="M.Sc. / Master's Degree" className="bg-slate-900 text-white">M.Sc. / Master's Degree</option>
              <option value="B.Tech / M.Tech" className="bg-slate-900 text-white">B.Tech / M.Tech</option>
              <option value="MBBS / BDS / Medical Graduate" className="bg-slate-900 text-white">MBBS / BDS Graduate</option>
              <option value="B.Sc. / Bachelor's Degree" className="bg-slate-900 text-white">B.Sc. / Bachelor's Degree</option>
              <option value="Other Professional Qualification" className="bg-slate-900 text-white">Other Qualification</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
            Teaching Experience
          </label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
          >
            <option value="Fresher / Passionate New Educator" className="bg-slate-900 text-white">Fresher / Passionate Educator</option>
            <option value="1–2 Years Coaching Experience" className="bg-slate-900 text-white">1–2 Years Experience</option>
            <option value="2–4 Years Coaching Experience" className="bg-slate-900 text-white">2–4 Years Experience</option>
            <option value="5+ Years Senior Faculty" className="bg-slate-900 text-white">5+ Years Senior Faculty</option>
          </select>
        </div>
      </div>

      {/* Current Location */}
      <div>
        <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
          Current City / Base Location
        </label>
        <div className="relative">
          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="e.g. Bhandara / Nagpur / Gondia"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* Message / Bio / Notes */}
      <div>
        <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-1.5">
          Teaching Philosophy / Brief Background (Optional)
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
          <textarea
            rows={3}
            placeholder="Tell us briefly about your teaching strengths, preferred subjects, or links to demo video / CV..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-slate-900/80 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer group mt-2"
      >
        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        <span>SUBMIT APPLICATION VIA WHATSAPP</span>
      </button>

      <p className="text-center text-[11px] text-slate-400">
        Confidential review • Experienced and passionate educators welcome
      </p>
    </form>
  );
}
