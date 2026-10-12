'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp, Bot, GraduationCap, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquireClick = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined') {
      // If we are on a page with modal support, open it immediately
      if (pathname === '/' || pathname === '/about' || pathname === '/campus' || pathname === '/leadership') {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('svhs_open_admissions'));
      }
    }
  };

  return (
    <>
      {/* =======================================================================
          1. PERSISTENT MOBILE BOTTOM ACTION BAR (Strict Mobile-First Conversion UX)
          Visible only on screens below 640px (sm) with Safe Area Support
      ======================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-xl border-t border-slate-200 dark:border-white/10 px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
          {/* 1. Call Admissions Direct */}
          <a
            href="tel:+919440468838"
            className="flex flex-col items-center justify-center gap-0.5 h-12 min-h-[48px] rounded-xl bg-amber-50 dark:bg-white/5 border border-amber-300/80 dark:border-[#D4A853]/40 text-[#0A1628] dark:text-white font-bold text-[10px] uppercase tracking-wider active:scale-95 transition-transform"
            aria-label="Call Admissions Direct"
          >
            <Phone className="w-4 h-4 text-[#D4A853]" />
            <span>Call</span>
          </a>

          {/* 2. WhatsApp Official Chat */}
          <a
            href="https://wa.me/919440468838?text=Hello%20Sree%20Valmeeki%20School,%20I%20would%20like%20to%20enquire%20about%20Admissions%20for%202026-27"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 h-12 min-h-[48px] rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] uppercase tracking-wider active:scale-95 transition-transform"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          {/* 3. Campus Directions / Map */}
          <a
            href="https://maps.google.com/?q=Sree+Valmeeki+High+School+Kadiri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 h-12 min-h-[48px] rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-300/70 dark:border-blue-500/40 text-blue-900 dark:text-blue-300 font-bold text-[10px] uppercase tracking-wider active:scale-95 transition-transform"
            aria-label="Directions to Campus"
          >
            <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Map</span>
          </a>

          {/* 4. Enquire / Admissions Modal */}
          <Link
            href="/admissions"
            onClick={handleEnquireClick}
            className="flex flex-col items-center justify-center gap-0.5 h-12 min-h-[48px] rounded-xl bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-[#0A1628] font-black text-[10px] uppercase tracking-wider shadow-md shadow-[#D4A853]/30 active:scale-95 transition-transform cursor-pointer"
            aria-label="Enquire for Admissions 2026-27"
          >
            <GraduationCap className="w-4 h-4 text-[#0A1628]" />
            <span>Apply</span>
          </Link>
        </div>
      </div>

      {/* =======================================================================
          2. FLOATING CONTROLS (Back to Top + Desktop Floating Circles)
      ======================================================================= */}
      <div className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none">
        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="pointer-events-auto"
            >
              <div className="relative group flex items-center justify-end">
                <div className="absolute right-full mr-3 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-800 dark:text-white bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap hidden sm:flex items-center gap-1.5">
                  <span>Back to Top</span>
                </div>

                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white dark:bg-[#0A1628]/90 dark:hover:bg-[#0A1628] text-slate-800 dark:text-white backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                  aria-label="Back to Top"
                >
                  <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-200" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop WhatsApp Assistant Button (Hidden on Mobile since Mobile has persistent bar) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
          className="pointer-events-auto hidden sm:block"
        >
          <div className="relative group flex items-center justify-end">
            <div className="absolute right-full mr-3 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1628]/95 backdrop-blur-md border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap hidden sm:flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Chat on WhatsApp</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
            >
              <Link
                href="https://wa.me/919440468838?text=Hello%20Sree%20Valmeeki%20School,%20I%20would%20like%20to%20enquire%20about%20Admissions%20for%202026-27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-[#1E3A8A] hover:bg-[#172554] text-white rounded-full shadow-xl hover:shadow-[0_8px_25px_rgba(30,58,138,0.5)] border-2 border-white/30 transition-all duration-300"
                aria-label="Chat with School Assistant"
              >
                <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-[#FBBF24]" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Desktop Call Direct Button (Hidden on Mobile since Mobile has persistent bar) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
          className="pointer-events-auto hidden sm:block"
        >
          <div className="relative group flex items-center justify-end">
            <div className="absolute right-full mr-3 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A1628]/95 backdrop-blur-md border border-[#FBBF24]/30 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap hidden sm:flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse" />
              <span>Call Admissions Direct</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
            >
              <Link
                href="tel:+919440468838"
                className="flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A1628] rounded-full shadow-xl hover:shadow-[0_8px_25px_rgba(251,191,36,0.6)] border-2 border-white transition-all duration-300"
                aria-label="Call Admissions Direct"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
