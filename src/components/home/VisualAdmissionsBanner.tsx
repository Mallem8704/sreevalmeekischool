'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Download, GraduationCap } from 'lucide-react';
import Image from 'next/image';

interface VisualAdmissionsBannerProps {
  onOpenAdmissions?: () => void;
}

export default function VisualAdmissionsBanner({ onOpenAdmissions }: VisualAdmissionsBannerProps) {
  return (
    <section className="relative w-full bg-[#06172A] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-t border-[#D8A53C]/20">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D8A53C]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#0A2342]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D8A53C]/15 border border-[#D8A53C]/30 text-[#F0C66A] text-[10px] sm:text-xs font-black uppercase tracking-widest">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ADMISSIONS OPEN 2026–27</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-[family-name:var(--font-heading)] tracking-tight leading-[1.08] text-white drop-shadow-md">
              Be a Part of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F0C66A] to-[#D8A53C]">
                The Next Success Story
              </span>
            </h2>

            {/* Single Concise Metadata Row (Matching Screenshot) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/80 font-medium tracking-wide">
              <span>Strong Academics</span>
              <span className="text-[#D8A53C]">•</span>
              <span>Modern Facilities</span>
              <span className="text-[#D8A53C]">•</span>
              <span>Caring Faculty</span>
              <span className="text-[#D8A53C]">•</span>
              <span>A Brighter Tomorrow</span>
            </div>

            {/* CTAs matching screenshot */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onOpenAdmissions}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D8A53C] hover:bg-[#F0C66A] text-[#03101E] font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#D8A53C]/25 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+919440468838"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/25 backdrop-blur-md active:scale-95 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#F0C66A]" />
                <span>Call Admissions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Panoramic Photo of Smiling Students with Cursive Script Accent */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl">
              <Image
                src="/images/school/school-event-4.jpg"
                alt="Sree Valmeeki School Happy Students"
                fill
                sizes="(max-width: 640px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06172A]/80 via-transparent to-transparent pointer-events-none" />

              {/* Cursive Signature Script (Matching Screenshot) */}
              <div className="absolute bottom-4 right-4 text-right">
                <span className="font-serif italic text-base sm:text-lg text-[#F0C66A] drop-shadow-md">
                  “Same Values. Brighter Futures.”
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
