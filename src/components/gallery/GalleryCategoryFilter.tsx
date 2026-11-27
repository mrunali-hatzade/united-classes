"use client";

import React from "react";
import { galleryCategories, GalleryCategory } from "@/data/gallery";

interface GalleryCategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (category: GalleryCategory) => void;
  countsByCategory: Record<string, number>;
}

export default function GalleryCategoryFilter({
  activeCategory,
  onSelectCategory,
  countsByCategory,
}: GalleryCategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
      {galleryCategories.map((cat) => {
        const isActive = activeCategory === cat;
        const count = countsByCategory[cat] ?? 0;

        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-xs ${
              isActive
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 ring-2 ring-blue-600/20"
                : "bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-600 border border-slate-200"
            }`}
          >
            <span>{cat}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
