'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const studentFaces = [
  '/images/school/school-event-1.jpg',
  '/images/school/school-event-2.jpg',
  '/images/school/school-event-3.jpg',
  '/images/school/school-event-4.jpg',
  '/images/school/school-event-5.jpg',
  '/images/school/school-event-6.jpg',
  '/images/school/school-event-7.jpg',
  '/images/school/school-event-8.jpg',
  '/images/school/school-event-9.jpg',
  '/images/school/school-event-10.jpg',
  '/images/school/school-event-11.jpg',
  '/images/school/school-event-12.jpg',
];

export default function CultureOfExcellence() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center bg-[#050D1A] text-white py-24 sm:py-32 overflow-hidden border-t border-white/10">
      {/* Background Mosaic of Real Student Photographs with Low Opacity */}
      <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 opacity-15 pointer-events-none scale-105 filter grayscale contrast-125">
        {studentFaces.map((img, idx) => (
          <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
            <Image src={img} alt="Valmeeki Students" fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Cinematic Gradient Overlays to keep focus razor-sharp on typography */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-[#050D1A]/85 to-[#050D1A]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050D1A]/80 to-[#050D1A]" />

      {/* Ambient Gold Glow Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A853]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Centerpiece Giant Typography Sequence */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-2 sm:space-y-4"
        >
          <span className="block text-xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-[0.3em] text-white/50 font-[family-name:var(--font-heading)]">
            NOT ONE RESULT.
          </span>

          <span className="block text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.25em] text-white/70 font-[family-name:var(--font-heading)]">
            NOT ONE YEAR.
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight font-[family-name:var(--font-heading)] text-transparent bg-clip-text bg-gradient-to-r from-[#D4A853] via-[#FBBF24] to-[#E8C97D] drop-shadow-[0_10px_35px_rgba(212,168,83,0.3)]">
            A CULTURE OF EXCELLENCE.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/70 text-xs sm:text-sm md:text-base font-medium max-w-xl mx-auto tracking-wide leading-relaxed pt-2"
        >
          27 consecutive batches. Built on daily discipline, concept clarity, and the quiet dedication of teachers who never settle for mediocrity.
        </motion.p>
      </div>
    </section>
  );
}
