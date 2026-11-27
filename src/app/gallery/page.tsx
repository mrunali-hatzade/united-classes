"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Maximize2, Building2, ArrowRight, Sparkles, FilterX } from "lucide-react";
import { galleryItems, GalleryCategory, GalleryItem } from "@/data/gallery";
import GalleryCategoryFilter from "@/components/gallery/GalleryCategoryFilter";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import { siteConfig } from "@/config/site";
import { useDemoModal } from "@/context/DemoModalContext";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { openDemoModal } = useDemoModal();

  // Compute item counts per category
  const countsByCategory = useMemo(() => {
    const counts: Record<string, number> = { All: galleryItems.length };
    galleryItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeLightboxItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] || null : null;

  const handlePrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#F8FAFC] min-h-screen text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/90 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-blue-600" />
            <span>Campus Infrastructure &amp; Academic Life</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
            Institute <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Gallery</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our distraction-free classrooms, dedicated 1-on-1 faculty doubt desk, self-study reference library, and weekly timed examination sessions at {siteConfig.brandName} in Bhandara.
          </p>

          {/* Sample Data Notice Banner */}
          <div className="bg-amber-50/90 border border-amber-300/80 rounded-2xl p-3.5 text-xs text-amber-900 inline-flex items-center gap-2 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Sample Asset Preview:</strong> Photographs illustrate classroom infrastructure and mentorship setup. Official high-resolution photos will be published upon academic session launch.
            </span>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <GalleryCategoryFilter
          activeCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setLightboxIndex(null);
          }}
          countsByCategory={countsByCategory}
        />

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Photo Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={item.imagePlaceholder}
                        alt={item.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading={idx < 6 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-slate-800 border border-slate-200 shadow-xs backdrop-blur-sm">
                          {item.badge}
                        </span>

                        <span className="w-8 h-8 rounded-full bg-slate-900/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                          <Maximize2 className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Information */}
                    <div className="p-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>{item.date || `${siteConfig.location.city} Center`}</span>
                    <span className="text-blue-600 font-bold group-hover:underline inline-flex items-center gap-1">
                      Enlarge <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 max-w-md mx-auto p-8 space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <FilterX className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 font-heading">
                No Photographs in this Category Yet
              </h3>
              <p className="text-xs text-slate-500">
                Official photographs for {selectedCategory} will be added soon.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-sm hover:bg-blue-700 cursor-pointer"
              >
                View All Categories
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox Component */}
        <GalleryLightbox
          item={activeLightboxItem}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={lightboxIndex !== null && lightboxIndex > 0}
          hasNext={lightboxIndex !== null && lightboxIndex < filteredItems.length - 1}
        />

        {/* Bottom Campus Visit CTA Section */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block">
              Experience United Classes In Person
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">
              Visit Our Bhandara Campus Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Walk into our center at Main Road, Near Gandhi Chowk, Bhandara to inspect our classroom infrastructure, review study material, and meet our senior science faculty in person.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => openDemoModal("Campus Visit")}
              className="px-6 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
            >
              Book Campus Visit
            </button>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs tracking-wider uppercase border border-white/20 transition-all flex items-center justify-center gap-1.5"
            >
              <Building2 className="w-4 h-4 text-cyan-300" />
              <span>Get Directions</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
