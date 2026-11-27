"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, ArrowRight, Sparkles, Building2 } from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { siteConfig } from "@/config/site";

export default function GalleryPreview() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems.slice(0, 4)
      : galleryItems.filter((i) => i.category === selectedCategory).slice(0, 4);

  return (
    <section id="gallery-preview" className="py-24 bg-white text-[#0F172A] relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/90 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-blue-600" />
            <span>Campus & Learning Environment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F172A] tracking-tight">
            Institute <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">Gallery</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Take a visual tour of our classrooms, faculty mentorship desks, timed exam sessions, and academic infrastructure in Bhandara.
          </p>
        </motion.div>

        {/* 4 Gallery Cards Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.imagePlaceholder}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-slate-800 border border-slate-200/80 shadow-xs backdrop-blur-sm">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 text-[11px] font-semibold text-blue-600 flex items-center gap-1 group-hover:underline">
                <span>Explore facility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery CTA & Sample Notice */}
        <div className="text-center space-y-4">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
          >
            <Building2 className="w-4 h-4" />
            <span>View Full Campus &amp; Classroom Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-[11px] text-slate-400 font-medium">
            (Sample facility images shown above • Official high-resolution institute campus photos will be published soon)
          </p>
        </div>
      </div>
    </section>
  );
}
