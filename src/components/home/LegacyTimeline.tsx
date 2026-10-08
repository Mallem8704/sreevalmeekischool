'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, ChevronRight, History } from 'lucide-react';
import Image from 'next/image';
import { growthMilestones } from '@/lib/data';

export default function LegacyTimeline() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(10, Math.min(90, pos)));
  };

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] text-[#0A1628] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#B8860B] text-[11px] font-black tracking-widest uppercase mb-3">
            <History className="w-3.5 h-3.5" />
            <span>27-YEAR CHRONICLE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] mb-3">
            FROM 1999 TO TODAY.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            How a humble English medium school in Kadiri grew into an institution of academic distinction.
          </p>
        </div>

        {/* Milestone Cards Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {growthMilestones.map((m, idx) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 hover:border-[#D4A853]/60 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full bg-slate-100">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-[#D4A853] text-[#0A1628] text-xs font-black tracking-wider uppercase shadow-md">
                    {m.year}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2 text-left bg-white">
                <span className="text-[10px] font-bold text-[#B8860B] uppercase tracking-wider block">
                  {m.badge || 'Milestone'}
                </span>
                <h3 className="text-lg font-black text-[#0A1628] font-[family-name:var(--font-heading)]">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {m.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Then vs Now Comparison: "FROM A VISION TO A LEGACY" */}
        <div className="mt-12 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-bold tracking-widest text-[#B8860B] uppercase block mb-1">
              CAMPUS TRANSFORMATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0A1628] font-[family-name:var(--font-heading)] uppercase">
              FROM A VISION TO A LEGACY.
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Drag the divider to compare foundational moments with current vibrant campus life.
            </p>
          </div>

          <div
            className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-200 shadow-xl"
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
          >
            {/* Right Image (Today / Current Campus) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/school/school-event-4.jpg"
                alt="Sree Valmeeki School Today"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded bg-[#0A1628]/85 text-[#D4A853] text-xs font-black uppercase tracking-wider backdrop-blur-md">
                Today • 27 Years
              </div>
            </div>

            {/* Left Image (Foundations) with Clip */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-full">
                <Image
                  src="/images/school/school-event-12.jpg"
                  alt="Sree Valmeeki School Beginnings"
                  fill
                  className="object-cover filter grayscale contrast-125"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-[#0A1628]/85 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md">
                  Foundations • 1999
                </div>
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#D4A853] shadow-[0_0_15px_rgba(212,168,83,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#D4A853] text-[#050D1A] flex items-center justify-center font-black text-xs shadow-lg">
                ↔
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
