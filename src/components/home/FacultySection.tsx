"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, GraduationCap, Award, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useDemoModal } from "@/context/DemoModalContext";

export default function FacultySection() {
  const { openDemoModal } = useDemoModal();

  const getBadgeColor = (subject: string) => {
    switch (subject.toLowerCase()) {
      case "physics":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "chemistry":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "mathematics":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "biology":
        return "bg-cyan-50 text-cyan-700 border-cyan-200";
      default:
        return "bg-blue-50 text-blue-700 border-blue-200";
    }
  };

  return (
    <section id="faculty" className="py-24 bg-[#F8FAFC] text-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/90 shadow-xs">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Experienced Science Educators</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Learn From <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Expert Mentors</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our department heads bring over a decade of dedicated competitive examination and Board coaching experience to Bhandara, mentoring students with patience and technical rigor.
          </p>
        </motion.div>

        {/* 4 Faculty Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.facultyTeam.map((member, idx) => {
            const badgeClass = getBadgeColor(member.subject);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Portrait Image Container */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Subject Pill Top Left */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm backdrop-blur-sm ${badgeClass}`}>
                        {member.subject}
                      </span>
                    </div>

                    {/* Quick Experience Badge Bottom Left */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-medium flex items-center gap-1 drop-shadow-sm text-slate-200">
                        <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        {member.qualificationPlaceholder.split("(")[1]?.replace(")", "") || "10+ Yrs Exp."}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>

                    <span className="text-xs font-semibold text-blue-600 block mb-1">
                      {member.designation}
                    </span>

                    <p className="text-xs text-slate-500 mb-3 flex items-start gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{member.qualificationPlaceholder.split("(")[0].trim()}</span>
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {member.specialization}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 pb-5 pt-2">
                  <button
                    onClick={() => openDemoModal(`${member.name} (${member.subject})`)}
                    className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-bold text-xs tracking-wide border border-slate-200 hover:border-blue-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Attend Free Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
