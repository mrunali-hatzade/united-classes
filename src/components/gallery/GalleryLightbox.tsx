"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export default function GalleryLightbox({
  item,
  onClose,
  onPrev,
  onNext,
  hasNext = true,
  hasPrev = true,
}: GalleryLightboxProps) {
  // Handle Keyboard navigation (Escape, ArrowLeft, ArrowRight)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && onPrev && hasPrev) {
        onPrev();
      } else if (e.key === "ArrowRight" && onNext && hasNext) {
        onNext();
      }
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Lightbox Container (stop click propagation) */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 z-10 flex flex-col md:flex-row max-h-[92vh] text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Photo Container */}
        <div className="relative md:w-3/5 bg-slate-950 flex items-center justify-center min-h-[300px] sm:min-h-[420px]">
          <div className="relative w-full h-full aspect-[4/3] md:aspect-auto">
            <Image
              src={item.imagePlaceholder}
              alt={item.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>

          {/* Previous / Next Arrow Controls on Photo */}
          {hasPrev && onPrev && (
            <button
              onClick={onPrev}
              aria-label="Previous photograph"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center shadow-md transition-all cursor-pointer backdrop-blur-xs border border-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {hasNext && onNext && (
            <button
              onClick={onNext}
              aria-label="Next photograph"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center shadow-md transition-all cursor-pointer backdrop-blur-xs border border-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Badge over photo */}
          <div className="absolute top-4 left-4 z-20">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-600/90 text-white shadow-md backdrop-blur-xs">
              {item.badge}
            </span>
          </div>
        </div>

        {/* Right Side: Information Panel */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-white">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" />
              <span>{item.category}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 leading-tight">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {item.description}
            </p>

            {item.date && (
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{item.date}</span>
              </div>
            )}
          </div>

          <div className="pt-6 border-t border-slate-100 mt-6 space-y-2">
            <p className="text-[11px] text-slate-400 italic">
              * Structured sample asset representing classroom infrastructure. Official high-resolution photos will be published upon launch.
            </p>
            <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
              <span>Use ‹ › keys to navigate</span>
              <button
                onClick={onClose}
                className="font-bold text-blue-600 hover:underline cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
