"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, User, Calendar, Award, Sparkles, Filter, CheckCircle2, GraduationCap, Building2 } from "lucide-react";
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
    <div className="space-y-10">
      {/* Year Filter Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
              Filter by Batch Year:
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              Showing: <strong className="text-slate-900">{selectedYear === "All" ? "All Historical Batches" : `${selectedYear} Batch`}</strong> ({filteredResults.length} {filteredResults.length === 1 ? "Result" : "Results"})
            </span>
          </div>
        </div>

        {/* Scrollable Year Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-slate-300">
          {availableResultYears.map((yr) => {
            const count = countsByYear[yr] || 0;
            const isSelected = selectedYear === yr;

            return (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1.5 shadow-2xs ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 ring-2 ring-blue-600/30 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-blue-300"
                }`}
              >
                <span>{yr === "All" ? "All Years" : yr}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Stream Secondary Filter (Optional) */}
        {showCategoryTabs && (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-slate-400 font-medium mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Stream:
            </span>
            {(["All", "Engineering", "Medical", "Boards"] as const).map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStream(st)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedStream === st
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {st === "All" ? "All Streams" : st}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Grid with Animation */}
      <AnimatePresence mode="wait">
        {filteredResults.length > 0 ? (
          <motion.div
            key={`${selectedYear}-${selectedStream}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredResults.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
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
              Reset to All Years
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
