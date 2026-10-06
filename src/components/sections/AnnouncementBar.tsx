'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-[#D4A853] text-[#1A1A2E] w-full relative z-50"
      >
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-between text-xs md:text-sm font-medium">
          <div className="flex-1 flex justify-center items-center gap-2">
            <span>Admissions Open 2026–27 | Nursery to Class 10</span>
            <span className="hidden sm:inline">|</span>
            <Link href="/admissions" className="hidden sm:flex items-center gap-1 hover:underline font-bold">
              Enquire Now <ArrowRight size={14} />
            </Link>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-[#B8860B] rounded-full transition-colors absolute right-4"
            aria-label="Close announcement"
          >
            <X size={16} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
