'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

// Above-the-fold critical components (statically imported for instant shell render)
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import DualHeroSection from '@/components/home/DualHeroSection';
import TrustStrip from '@/components/sections/TrustStrip';

// Dynamically imported on-demand dialogs & intro
const CinematicIntro = dynamic(() => import('@/components/ui/CinematicIntro'), { ssr: false });
const AdmissionModal = dynamic(() => import('@/components/home/AdmissionModal'), { ssr: false });

// Progressively loaded below-the-fold sections
const SSCFelicitationShowcase = dynamic(() => import('@/components/home/SSCFelicitationShowcase'));
const LegacyTimeline = dynamic(() => import('@/components/home/LegacyTimeline'));
const FounderAndSchoolStory = dynamic(() => import('@/components/home/FounderAndSchoolStory'));
const AcademicSystemStory = dynamic(() => import('@/components/home/AcademicSystemStory'));
const VisualLearningSequence = dynamic(() => import('@/components/home/VisualLearningSequence'));
const StarAchieversSection = dynamic(() => import('@/components/home/StarAchieversSection'));
const TopperShowcase = dynamic(() => import('@/components/home/TopperShowcase'));
const ResultsTimeline = dynamic(() => import('@/components/home/ResultsTimeline'));
const ExploreValmeekiSection = dynamic(() => import('@/components/home/campus/ExploreValmeekiSection'));
const OneDayAtValmeeki = dynamic(() => import('@/components/home/OneDayAtValmeeki'));
const MomentsGalleryPreview = dynamic(() => import('@/components/home/MomentsGalleryPreview'));
const ParentTrustAndLeadership = dynamic(() => import('@/components/home/ParentTrustAndLeadership'));
const AdmissionsClosingHero = dynamic(() => import('@/components/home/AdmissionsClosingHero'));

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
        className="min-h-screen bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#D4A853] selection:text-[#0A1628] transition-colors duration-200"
      >
        <ScrollProgress />
        <Header />

        <main>
          {/* =========================================================================
              1. HOME: Slidable Dual Hero Experience (Film & Proven Results)
          ========================================================================= */}
          <section id="home" className="scroll-mt-24">
            <DualHeroSection onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />
            <TrustStrip />
            {/* 2026 SSC Academic Achievements & Felicitation Proof */}
            <SSCFelicitationShowcase />
          </section>

          {/* =========================================================================
              2. ABOUT: 28-Year Heritage & Executive Leadership Frame
          ========================================================================= */}
          <section id="about" className="scroll-mt-24">
            {/* School Legacy & Then vs Now Comparison: 1999 to 2026 */}
            <LegacyTimeline />

            {/* The Visionary Founder, Director & Correspondent: Executive Leadership Frame */}
            <FounderAndSchoolStory onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />
          </section>

          {/* =========================================================================
              3. ACADEMICS: Pedagogical Pillars & 5-Step Visual Learning Flow
          ========================================================================= */}
          <section id="academics" className="scroll-mt-24 section-content-visibility">
            {/* The System Behind The Results: 6 Visual Panels */}
            <AcademicSystemStory />

            {/* Visual Learning Sequence: Understand -> Practice -> Explore -> Improve -> Achieve */}
            <VisualLearningSequence />
          </section>

          {/* =========================================================================
              4. RESULTS: Star Achievers, Toppers & Historical Results Archive
          ========================================================================= */}
          <section id="results" className="scroll-mt-24 section-content-visibility">
            {/* Official Star Achievers & Hall of Fame (Town 1st, Town 2nd, 200+ Interactive Student Cards) */}
            <StarAchieversSection onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

            {/* Signature Section: 3 Years of Consistent Results */}
            <TopperShowcase />

            {/* Result Timeline: 2026 - 2022 Interactive Historical Year Tabs */}
            <ResultsTimeline />
          </section>

          {/* =========================================================================
              5. CAMPUS LIFE: Signature Campus Tour & Daily Schedule
          ========================================================================= */}
          <section id="campus" className="scroll-mt-24 section-content-visibility">
            {/* Signature Campus Experience: Explore Sree Valmeeki */}
            <ExploreValmeekiSection onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

            {/* Beyond The Result Sheet: One Day. A Thousand Moments (08:30 AM to 03:30 PM) */}
            <OneDayAtValmeeki />
          </section>

          {/* =========================================================================
              6. GALLERY: Visual Archive of Valmeeki Moments
          ========================================================================= */}
          <section id="gallery" className="scroll-mt-24 section-content-visibility">
            <MomentsGalleryPreview />
          </section>

          {/* =========================================================================
              7. CONTACT: Parent Trust & Admissions Closing Hero
          ========================================================================= */}
          <section id="contact" className="scroll-mt-24 section-content-visibility">
            {/* Parent Trust & Leadership: Punchy Quotes & Dr. P.V Pavan Kumar Reddy */}
            <ParentTrustAndLeadership />

            {/* Admissions Hero Closing: "THE NEXT SUCCESS STORY COULD BEGIN HERE." */}
            <AdmissionsClosingHero onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />
          </section>
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
