'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CinematicIntro from '@/components/ui/CinematicIntro';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

// Visual-First Digital Hall of Excellence Homepage Components
import DualHeroSection from '@/components/home/DualHeroSection';
import LegacyTimeline from '@/components/home/LegacyTimeline';
import FounderAndSchoolStory from '@/components/home/FounderAndSchoolStory';
import AcademicSystemStory from '@/components/home/AcademicSystemStory';
import VisualLearningSequence from '@/components/home/VisualLearningSequence';
import StarAchieversSection from '@/components/home/StarAchieversSection';
import TopperShowcase from '@/components/home/TopperShowcase';
import ResultsTimeline from '@/components/home/ResultsTimeline';
import ExploreValmeekiSection from '@/components/home/campus/ExploreValmeekiSection';
import OneDayAtValmeeki from '@/components/home/OneDayAtValmeeki';
import MomentsGalleryPreview from '@/components/home/MomentsGalleryPreview';
import ParentTrustAndLeadership from '@/components/home/ParentTrustAndLeadership';
import AdmissionsClosingHero from '@/components/home/AdmissionsClosingHero';
import AdmissionModal from '@/components/home/AdmissionModal';

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
    window.addEventListener('svhs_replay_intro', handleReplay);
    return () => window.removeEventListener('svhs_replay_intro', handleReplay);
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
          <section id="academics" className="scroll-mt-24">
            {/* The System Behind The Results: 6 Visual Panels */}
            <AcademicSystemStory />

            {/* Visual Learning Sequence: Understand -> Practice -> Explore -> Improve -> Achieve */}
            <VisualLearningSequence />
          </section>

          {/* =========================================================================
              4. RESULTS: Star Achievers, Toppers & Historical Results Archive
          ========================================================================= */}
          <section id="results" className="scroll-mt-24">
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
          <section id="campus" className="scroll-mt-24">
            {/* Signature Campus Experience: Explore Sree Valmeeki */}
            <ExploreValmeekiSection onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

            {/* Beyond The Result Sheet: One Day. A Thousand Moments (08:30 AM to 03:30 PM) */}
            <OneDayAtValmeeki />
          </section>

          {/* =========================================================================
              6. GALLERY: Visual Archive of Valmeeki Moments
          ========================================================================= */}
          <section id="gallery" className="scroll-mt-24">
            <MomentsGalleryPreview />
          </section>

          {/* =========================================================================
              7. CONTACT: Parent Trust & Admissions Closing Hero
          ========================================================================= */}
          <section id="contact" className="scroll-mt-24">
            {/* Parent Trust & Leadership: Punchy Quotes & Mr. P. Pavan Kumar Reddy */}
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
