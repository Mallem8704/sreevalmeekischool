'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

// Critical Layout & Global Shell Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

// Signature Image-First Sections matching Final Reference Mockup
import VisualHero from '@/components/home/VisualHero';
import VisualTrustStrip from '@/components/home/VisualTrustStrip';
import VisualAcademicExcellence from '@/components/home/VisualAcademicExcellence';
import VisualAcademicWings from '@/components/home/VisualAcademicWings';
import VisualCampusExperience from '@/components/home/VisualCampusExperience';
import VisualStudentLife from '@/components/home/VisualStudentLife';
import VisualLeadership from '@/components/home/VisualLeadership';
import VisualAdmissionsBanner from '@/components/home/VisualAdmissionsBanner';

// Dynamically loaded on-demand dialogs & intro
const CinematicIntro = dynamic(() => import('@/components/ui/CinematicIntro'), { ssr: false });
const AdmissionModal = dynamic(() => import('@/components/home/AdmissionModal'), { ssr: false });

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false);
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);

  useEffect(() => {
    // Check if visitor has already experienced the intro in this session
    try {
      if (sessionStorage.getItem('svhs_intro_seen') === 'true') {
        setIntroComplete(true);
      }
    } catch {
      // ignore storage errors
    }

    const handleReplay = () => {
      setIntroComplete(false);
    };
    const handleOpenAdmissions = () => {
      setIsAdmissionsModalOpen(true);
    };

    window.addEventListener('svhs_replay_intro', handleReplay);
    window.addEventListener('svhs_open_admissions', handleOpenAdmissions);
    return () => {
      window.removeEventListener('svhs_replay_intro', handleReplay);
      window.removeEventListener('svhs_open_admissions', handleOpenAdmissions);
    };
  }, []);

  return (
    <>
      {/* 1. Cinematic Quick Intro Sequence (Session-Cached, Non-Intrusive) */}
      <AnimatePresence mode="wait">
        {!introComplete && (
          <CinematicIntro onComplete={() => setIntroComplete(true)} />
        )}
      </AnimatePresence>

      {/* Main Continuous Visual Journey: "A DIGITAL HALL OF EXCELLENCE" */}
      <motion.div
        initial={{ opacity: 0.95 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen bg-[#F8F5EE] dark:bg-[#03101E] text-[#0A1C31] dark:text-white selection:bg-[#D8A53C] selection:text-[#03101E] transition-colors duration-200"
      >
        <ScrollProgress />
        <Header />

        <main id="home" className="w-full">
          {/* =========================================================================
              1. HERO: The Valmeeki Experience Cinematic Video Hero (Section 1)
          ========================================================================= */}
          <VisualHero onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

          {/* =========================================================================
              2. TRUST STRIP: 5 Core Academic Credentials (Section 2)
          ========================================================================= */}
          <VisualTrustStrip />

          {/* =========================================================================
              3. ACADEMIC EXCELLENCE: 4 Stat Metrics & Topper Photo Cards (Section 3)
          ========================================================================= */}
          <VisualAcademicExcellence onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

          {/* =========================================================================
              4. ACADEMIC WINGS: 4 Large Image Program Cards + Mini Pillars (Section 4)
          ========================================================================= */}
          <VisualAcademicWings />

          {/* =========================================================================
              5. CAMPUS EXPERIENCE: A Campus That Inspires (6 Image Tiles) (Section 5)
          ========================================================================= */}
          <VisualCampusExperience />

          {/* =========================================================================
              6. STUDENT LIFE: Moments That Matter (Photo Collage Mosaic) (Section 6)
          ========================================================================= */}
          <VisualStudentLife />

          {/* =========================================================================
              7. LEADERSHIP: A Vision for Brighter Tomorrows & Trinity Legacy (Section 7)
          ========================================================================= */}
          <VisualLeadership onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

          {/* =========================================================================
              8. ADMISSIONS CTA: Be a Part of The Next Success Story (Section 8)
          ========================================================================= */}
          <VisualAdmissionsBanner onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />
        </main>

        <Footer />
        <FloatingButtons />

        {/* Global Instant Admission Enquiry Modal */}
        <AdmissionModal
          isOpen={isAdmissionsModalOpen}
          onClose={() => setIsAdmissionsModalOpen(false)}
        />
      </motion.div>
    </>
  );
}
