'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp, Bot } from 'lucide-react';
import Link from 'next/link';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none">
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
              <div className="absolute right-full mr-3 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-800 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap hidden sm:flex items-center gap-1.5">
                <span>Back to Top</span>
              </div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 backdrop-blur-md border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp / Chat Assistant Button (Circular Blue/Green Bot style from reference) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
        className="pointer-events-auto"
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

      {/* Yellow Call Button (Matching reference yellow phone circle bottom-right) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
        className="pointer-events-auto"
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
  );
}
