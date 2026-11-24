"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, User, Calendar, Award, Sparkles, Filter, CheckCircle2, ChevronRight, Building2 } from "lucide-react";
import { resultsData, availableResultYears, ResultYear, ResultPlaceholder } from "@/data/results";

interface ResultsShowcaseProps {
  initialYear?: ResultYear;
  limit?: number;
  showCategoryTabs?: boolean;
}

export default function ResultsShowcase({
  initialYear = "All",
  limit,
  showCategoryTabs = true,
}: ResultsShowcaseProps) {
  const [selectedYear, setSelectedYear] = useState<ResultYear>(initialYear);
  const [selectedStream, setSelectedStream] = useState<"All" | "Engineering" | "Medical" | "Boards">("All");

  // Compute count of results per year
  const countsByYear = useMemo(() => {
    const counts: Record<string, number> = { All: resultsData.length };
    resultsData.forEach((item) => {
      counts[item.year] = (counts[item.year] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered results
  const filteredResults = useMemo(() => {
    let list = resultsData;

    // Filter by year
    if (selectedYear !== "All") {
      list = list.filter((item) => item.year === selectedYear);
    }

    // Filter by stream if selected
    if (selectedStream !== "All") {
      list = list.filter((item) => item.stream === selectedStream);
    }

    if (limit && limit > 0) {
      return list.slice(0, limit);
    }

    return list;
  }, [selectedYear, selectedStream, limit]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Vertical Year Navigator Sidebar (3 cols) */}
      <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-4">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-5 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
              <h3 className="font-heading font-bold text-sm text-slate-900 tracking-wide uppercase">
                Select Year
              </h3>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              Archives
            </span>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            Click any academic year below to view verified student results and selections.
          </p>

          {/* Vertical Year List (NOT horizontal) */}
          <div className="flex flex-col space-y-1.5 max-h-[480px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
            {availableResultYears.map((yr) => {
              const count = countsByYear[yr] || 0;
              const isSelected = selectedYear === yr;

              return (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`w-full px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-between cursor-pointer group text-left ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 ring-2 ring-blue-600/30 translate-x-1"
                      : "bg-slate-50/70 hover:bg-slate-100 text-slate-700 border border-slate-200/70 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected ? "bg-cyan-300 animate-pulse" : "bg-slate-300 group-hover:bg-blue-400"
                      }`}
                    />
                    <span className="font-heading tracking-wide">
                      {yr === "All" ? "All Batches" : `Batch ${yr}`}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold ${
                        isSelected ? "bg-white/20 text-white" : "bg-white text-slate-500 border border-slate-200"
                      }`}
                    >
                      {count}
                    </span>
                    <ChevronRight
                      className={`w-3 h-3 transition-transform ${
                        isSelected ? "text-cyan-300 translate-x-0.5" : "text-slate-400 opacity-50 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stream Secondary Filter in Sidebar */}
          {showCategoryTabs && (
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1.5">
                <Filter className="w-3 h-3" />
                Stream Filter:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {(["All", "Engineering", "Medical", "Boards"] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStream(st)}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer text-center ${
                      selectedStream === st
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {st === "All" ? "All Streams" : st}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Right Column: Results Cards (9 cols) */}
      <main className="lg:col-span-9 space-y-6">
        {/* Active Selection Banner */}
        <div className="bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/60 rounded-2xl p-4 sm:p-5 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-600/20">
              <Trophy className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-base sm:text-lg text-slate-900">
                {selectedYear === "All" ? "All Academic Batches (2015–2025)" : `Results for Batch ${selectedYear}`}
              </h4>
              <p className="text-xs text-slate-600">
                {selectedStream === "All" ? "Engineering, Medical & Board Examination Selections" : `${selectedStream} Stream Selections`}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700 shrink-0 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{filteredResults.length} {filteredResults.length === 1 ? "Record" : "Records"} Found</span>
          </div>
        </div>

        {/* Results Grid with Smooth Animation */}
        <AnimatePresence mode="wait">
          {filteredResults.length > 0 ? (
            <motion.div
              key={`${selectedYear}-${selectedStream}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
            >
              {filteredResults.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:border-blue-400 transition-all duration-300 group"
                >
                  <div>
                    {/* Header: Avatar, Name & Year */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors shrink-0">
                        <User className="w-6 h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                          {item.studentName}
                        </h3>
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                          <span className="font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded font-mono">
                            {item.year}
                          </span>
                          <span>•</span>
                          <span className="truncate">{item.academicYear}</span>
                        </div>
                      </div>
                    </div>

                    {/* Exam Badge */}
                    <div className="mb-3.5 flex flex-wrap items-center gap-1.5">
                      <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                        {item.exam}
                      </span>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold text-slate-500 bg-slate-100">
                        {item.badge}
                      </span>
                    </div>

                    {/* Achievement Highlight */}
                    <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 mb-3.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-0.5">
                        Achievement / Selection:
                      </span>
                      <p className="text-xs font-semibold text-slate-900 font-mono leading-snug">
                        {item.achievement}
                      </p>
                      {item.college && (
                        <span className="text-[11px] text-slate-600 mt-1 flex items-center gap-1 font-medium">
                          <Building2 className="w-3 h-3 text-amber-700 shrink-0" />
                          <span className="truncate">{item.college}</span>
                        </span>
                      )}
                    </div>

                    {/* Quote / Impression */}
                    <p className="text-xs text-slate-500 italic leading-relaxed line-clamp-3">
                      &ldquo;{item.quotePlaceholder}&rdquo;
                    </p>
                  </div>

                  {/* Footer Notice */}
                  <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>{item.isPlaceholderNotice}</span>
                    <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-slate-50 rounded-3xl border border-slate-200 p-12 text-center space-y-4 max-w-lg mx-auto"
            >
              <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900">
                No Results Recorded for {selectedYear} ({selectedStream} Stream)
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Records for this batch year are being compiled from physical institute registers and will be published upon verification.
              </p>
              <button
                onClick={() => {
                  setSelectedYear("All");
                  setSelectedStream("All");
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Reset to All Batches
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
