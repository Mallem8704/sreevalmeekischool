'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  isVisible?: boolean;
}

export default function BeforeAfterSlider({
  beforeImage = '/images/school/school-event-3.jpg',
  afterImage = '/images/school/school-event-4.jpg',
  beforeLabel = '1999 • THE BEGINNING',
  afterLabel = 'TODAY • MODERN CAMPUS',
  isVisible = true,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  if (!isVisible) return null;

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#0A1628] text-white overflow-hidden border-t border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THEN & NOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight text-white mb-2">
            FROM A VISION{' '}
            <span className="bg-gradient-to-r from-[#FFF5DC] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent italic font-normal">
              TO A LEGACY.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/70">
            Drag the slider horizontally to experience 27 years of campus evolution.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-white/20 select-none cursor-ew-resize bg-black/50"
        >
          {/* Base Layer: Modern Campus (Right / After) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={afterImage}
              alt="Today Modern Campus"
              fill
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover"
              priority
            />
            {/* Tag Badge */}
            <div className="absolute top-5 right-5 z-10 px-4 py-1.5 rounded-full bg-[#0A1628]/80 backdrop-blur-md border border-[#D4A853]/50 text-[#D4A853] text-xs font-bold tracking-widest uppercase">
              {afterLabel}
            </div>
          </div>

          {/* Clipped Layer: Early Campus (Left / Before) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              src={beforeImage}
              alt="1999 Early Campus"
              fill
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover sepia-[0.35] contrast-105"
              priority
            />
            {/* Tag Badge */}
            <div className="absolute top-5 left-5 z-10 px-4 py-1.5 rounded-full bg-[#0A1628]/80 backdrop-blur-md border border-white/40 text-white text-xs font-bold tracking-widest uppercase">
              {beforeLabel}
            </div>
          </div>

          {/* Slider Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4A853] via-white to-[#D4A853] z-20 pointer-events-none shadow-[0_0_15px_rgba(212,168,83,0.8)]"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Drag Handle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0A1628] border-2 border-[#D4A853] shadow-2xl flex items-center justify-center text-[#D4A853] pointer-events-auto">
              <MoveHorizontal className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
