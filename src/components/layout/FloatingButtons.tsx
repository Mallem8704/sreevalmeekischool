'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
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
              {/* Tooltip Badge */}
              <div className="absolute right-full mr-3.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-white bg-[#0A1628]/90 backdrop-blur-md border border-[#D4A853]/30 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap hidden sm:flex items-center gap-1.5">
                <span>Back to Top</span>
              </div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0A1628]/90 hover:bg-[#0A1628] text-[#D4A853] backdrop-blur-md border border-[#D4A853]/40 shadow-lg hover:shadow-[0_0_20px_rgba(212,168,83,0.35)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4A853]/60 cursor-pointer"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call Admissions Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
        className="pointer-events-auto"
      >
        <div className="relative group flex items-center justify-end">
          {/* Tooltip Badge */}
          <div className="absolute right-full mr-3.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-white bg-[#0A1628]/90 backdrop-blur-md border border-[#D4A853]/30 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap hidden sm:flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" />
            <span>Call Admissions</span>
          </div>

          <motion.div
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
          >
            <Link
              href="tel:+919440468838"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#0A1628]/95 hover:bg-[#0A1628] text-white rounded-full backdrop-blur-md border border-[#D4A853]/30 shadow-xl hover:shadow-[0_8px_25px_rgba(10,22,40,0.5)] transition-all duration-300"
              aria-label="Call Admissions"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4A853] group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
        className="pointer-events-auto"
      >
        <div className="relative group flex items-center justify-end">
          {/* Tooltip Badge */}
          <div className="absolute right-full mr-3.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-white bg-[#0A1628]/90 backdrop-blur-md border border-[#25D366]/30 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap hidden sm:flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat on WhatsApp</span>
          </div>

          <motion.div
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
          >
            <Link
              href="https://wa.me/919440468838"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-xl hover:shadow-[0_8px_25px_rgba(37,211,102,0.45)] transition-all duration-300"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
