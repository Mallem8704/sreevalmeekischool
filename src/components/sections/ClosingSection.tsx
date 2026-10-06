'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Phone } from 'lucide-react';

export default function ClosingSection() {
  return (
    <section className="bg-[#0A1628] py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#152D5E]/30 to-transparent pointer-events-none" />

      {/* Subtle gold glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4A853]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        <span className="inline-block px-3 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/30 text-[#D4A853] text-xs font-bold tracking-widest uppercase mb-6">
          Admissions Open 2026–2027
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold text-white leading-[1.15] mb-6">
          A Brighter Future Starts With{' '}
          <span className="bg-gradient-to-r from-[#F5E6C0] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent italic font-normal">
            A Strong Foundation.
          </span>
        </h2>

        <p className="text-white/70 text-base sm:text-lg mb-10 max-w-2xl mx-auto font-[family-name:var(--font-body)]">
          Give your child the Valmeeki advantage — academic excellence, disciplined leadership, and lifelong values in Kadiri.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold tracking-wider hover:brightness-105 transition-all rounded-lg uppercase text-sm shadow-xl"
          >
            Enquire For Admission
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-white/5 border border-white/30 text-white font-semibold tracking-wide hover:bg-white/15 hover:border-white transition-all rounded-lg text-sm backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4 text-[#D4A853]" />
            Visit Our Campus
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
          <a
            href="tel:+919440468838"
            className="hover:text-[#D4A853] transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#D4A853]" />
            Admissions Helpline: +91 94404 68838
          </a>
          <span className="hidden sm:inline text-white/30">•</span>
          <span>Nursery to Class 10 • Kadiri, AP</span>
        </div>
      </div>
    </section>
  );
}
