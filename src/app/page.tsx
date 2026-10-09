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
import StarAchieversSection from '@/components/home/StarAchieversSection';
import TopperShowcase from '@/components/home/TopperShowcase';
import BigStatStory from '@/components/home/BigStatStory';
import ResultsTimeline from '@/components/home/ResultsTimeline';
import CultureOfExcellence from '@/components/home/CultureOfExcellence';
import AcademicSystemStory from '@/components/home/AcademicSystemStory';
import VisualLearningSequence from '@/components/home/VisualLearningSequence';
import LegacyTimeline from '@/components/home/LegacyTimeline';
import FounderAndSchoolStory from '@/components/home/FounderAndSchoolStory';
import OneDayAtValmeeki from '@/components/home/OneDayAtValmeeki';
import ParentTrustAndLeadership from '@/components/home/ParentTrustAndLeadership';
import ExploreValmeekiSection from '@/components/home/campus/ExploreValmeekiSection';
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
          {/* 1. Slidable Dual Hero Experience: Slide 1 (Campus Film) & Slide 2 (Proven Results) */}
          <DualHeroSection onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

          {/* 2. Official Star Achievers & Hall of Fame (Town 1st, Town 2nd, 200+ Interactive Student Cards) */}
          <StarAchieversSection onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

          {/* 3. Signature Section: 3 Years of Consistent Results (Horizontal Desktop / Mobile Stack) */}
          <TopperShowcase />

          {/* 3. Big Proof Typography: 27 Years • 1999 • 3 Years • Nursery to X */}
          <BigStatStory />

          {/* 4. Result Timeline: 2026 - 2022 Interactive Historical Year Tabs */}
          <ResultsTimeline />

          {/* 5. Cinematic Transition: "NOT ONE RESULT. NOT ONE YEAR. A CULTURE OF EXCELLENCE." */}
          <CultureOfExcellence />

          {/* 6. The System Behind The Results: 6 Visual Panels */}
          <AcademicSystemStory />

          {/* 7. Visual Learning Sequence: Understand -> Practice -> Explore -> Improve -> Achieve */}
          <VisualLearningSequence />

          {/* 8. School Legacy & Then vs Now Comparison: 1999 to 2026 */}
          <LegacyTimeline />

          {/* 9. SIGNATURE CAMPUS EXPERIENCE: EXPLORE SREE VALMEEKI (Zero Repeating Photos) */}
          <ExploreValmeekiSection onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

          {/* 10. The Visionary Founder & 28-Year Saga: Sri P. Jaya Rami Reddy & Abhigna Foundation */}
          <FounderAndSchoolStory onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />

          {/* 11. Beyond The Result Sheet: One Day. A Thousand Moments (08:30 AM to 03:30 PM) */}
          <OneDayAtValmeeki />

          {/* 12. Parent Trust & Director Leadership: Punchy Quotes & Mr. P. Pavan Kumar Reddy */}
          <ParentTrustAndLeadership />

          {/* 13. Admissions Hero Closing: "THE NEXT SUCCESS STORY COULD BEGIN HERE." */}
          <AdmissionsClosingHero onOpenAdmissions={() => setIsAdmissionsModalOpen(true)} />
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
