import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  CreditCard,
  Bus,
  Award,
  HelpCircle,
  Phone,
  Calendar,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'Fee Structure & Transparency | Sree Valmeeki High School',
  description:
    'Institutional fee guidelines, grade-wise tuition details, transport slabs, and scholarship framework for Sree Valmeeki High School, Kadiri.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#D4A853] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      <main id="main-content" className="pt-24 sm:pt-28">
        {/* =========================================================================
            HERO BANNER
        ========================================================================= */}
        <section className="relative overflow-hidden py-14 sm:py-20 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-[#0A1628] transition-colors duration-200">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#D4A853]/10 dark:bg-[#D4A853]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#1E3A8A]/5 dark:bg-[#1E3A8A]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-[#B8860B] dark:hover:text-[#FBBF24] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/admissions" className="hover:text-[#B8860B] dark:hover:text-[#FBBF24] transition-colors">
                Admissions
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#B8860B] dark:text-[#FBBF24]">Fee Structure</span>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/40 dark:border-[#D4A853]/50 text-[#B8860B] dark:text-[#FBBF24] text-xs font-bold mb-4 tracking-wide uppercase">
                <CreditCard className="w-3.5 h-3.5" />
                <span>INSTITUTIONAL FEE POLICY &amp; TRANSPARENCY</span>
              </div>

              <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] dark:text-white leading-tight mb-4">
                Affordable Excellence. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#8C6D23] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
                  No Hidden Surprises.
                </span>
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                Founded with a sacred commitment to deliver premier English-medium and competitive IIT Foundation education at a basic, transparent fee structure. We ensure that financial background never becomes a barrier for any deserving student in Kadiri.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FOUNDER'S SACRED MOTTO STRIP
        ========================================================================= */}
        <section className="bg-gradient-to-r from-[#0A1628] via-[#0F2044] to-[#0A1628] text-white py-6 border-b border-[#D4A853]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-[#D4A853]/20 border border-[#D4A853] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#D4A853]" />
              </div>
              <div className="flex-1">
                <p className="text-sm sm:text-base font-medium italic text-slate-100">
                  “The school’s sacred motto is to provide quality education with a basic fee structure, ensuring that financial background never becomes an obstacle for any child aspiring to learn, lead, and excel.”
                </p>
                <p className="text-xs text-[#D4A853] font-bold mt-1 uppercase tracking-wider">
                  — Sri P. Jayarami Reddy, Retired MEO &amp; Founder Chairman
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            MAIN CONTENT: GRADE-WISE STRUCTURE WITH PLACEHOLDERS
        ========================================================================= */}
        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {/* Notice to Parents */}
            <div className="mb-10 p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/30 dark:border-amber-500/20 flex items-start gap-3.5">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="text-[#0A1628] dark:text-white block mb-0.5">Note for Prospective Parents:</strong>
                Official annual fee schedules are finalized each academic cycle under AP State Educational Regulatory norms. Below are the formal breakdown categories. For the exact verified fee schedule applicable to your child’s grade for the 2026–27 academic year, please consult the admissions office directly.
              </div>
            </div>

            {/* Grid of Wings */}
            <div className="space-y-8">
              {/* Pre-Primary Wing */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/10">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#B8860B] dark:text-[#FBBF24]">WING 01</span>
                    <h2 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                      Pre-Primary Wing (Nursery, LKG, UKG)
                    </h2>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-bold text-slate-700 dark:text-slate-300">
                    Play-Way &amp; Foundation Pedagogy
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="text-slate-600 dark:text-slate-300">Annual Tuition Fee:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#B8860B] dark:text-[#FBBF24]">
                      [OWNER TO PROVIDE: Pre-Primary Annual Tuition Slab]
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="text-slate-600 dark:text-slate-300">Activity &amp; Learning Material Kit:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#B8860B] dark:text-[#FBBF24]">
                      [OWNER TO PROVIDE: Activity Kit Fee]
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2">
                    <span className="text-slate-600 dark:text-slate-300">Payment Schedule:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                      Term 1 (Admissions), Term 2 (Oct), Term 3 (Jan)
                    </span>
                  </div>
                </div>
              </div>

              {/* Primary Wing */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/10">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#B8860B] dark:text-[#FBBF24]">WING 02</span>
                    <h2 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                      Primary Wing (Classes 1 to 5)
                    </h2>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-bold text-slate-700 dark:text-slate-300">
                    Core Literacy &amp; Numeracy
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="text-slate-600 dark:text-slate-300">Annual Tuition Fee:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#B8860B] dark:text-[#FBBF24]">
                      [OWNER TO PROVIDE: Primary Wing Annual Tuition Slab]
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="text-slate-600 dark:text-slate-300">Smart Classroom &amp; Computer Lab Access:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#B8860B] dark:text-[#FBBF24]">
                      [OWNER TO PROVIDE: Tech Lab Charges, if applicable]
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2">
                    <span className="text-slate-600 dark:text-slate-300">Payment Schedule:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                      Term 1 (Admissions), Term 2 (Oct), Term 3 (Jan)
                    </span>
                  </div>
                </div>
              </div>

              {/* Upper Primary / Middle School */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/10">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#B8860B] dark:text-[#FBBF24]">WING 03</span>
                    <h2 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                      Middle School &amp; Olympiad Wing (Classes 6 to 8)
                    </h2>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-bold text-slate-700 dark:text-slate-300">
                    Olympiad &amp; Early IIT Foundation
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="text-slate-600 dark:text-slate-300">Annual Tuition Fee:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#B8860B] dark:text-[#FBBF24]">
                      [OWNER TO PROVIDE: Middle School Tuition Slab]
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="text-slate-600 dark:text-slate-300">Science Lab &amp; Olympiad Material Kit:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#B8860B] dark:text-[#FBBF24]">
                      [OWNER TO PROVIDE: Olympiad Material Fee, if separate]
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2">
                    <span className="text-slate-600 dark:text-slate-300">Payment Schedule:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                      Term 1 (Admissions), Term 2 (Oct), Term 3 (Jan)
                    </span>
                  </div>
                </div>
              </div>

              {/* High School / SSC Board Wing */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/10">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#B8860B] dark:text-[#FBBF24]">WING 04</span>
                    <h2 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                      High School &amp; SSC Board Wing (Classes 9 &amp; 10)
                    </h2>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-bold text-slate-700 dark:text-slate-300">
                    State Board Coaching &amp; IIT Track
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="text-slate-600 dark:text-slate-300">Annual Tuition Fee:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#B8860B] dark:text-[#FBBF24]">
                      [OWNER TO PROVIDE: Class 9 &amp; 10 Annual Tuition Slab]
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2 border-b border-slate-100 dark:border-white/5">
                    <span className="text-slate-600 dark:text-slate-300">Intensive SSC Board Prep &amp; Study Material:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#B8860B] dark:text-[#FBBF24]">
                      [OWNER TO PROVIDE: Board Material &amp; Coaching Kit]
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-2">
                    <span className="text-slate-600 dark:text-slate-300">Payment Schedule:</span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                      Term 1 (Admissions), Term 2 (Oct), Term 3 (Jan)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                TRANSPORT SLABS SECTION
            ========================================================================= */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                    School Bus Transportation Slabs
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Safe, GPS-monitored fleet servicing Kadiri town and surrounding villages.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Slab A: Town Limits</span>
                  <p className="font-black text-[#0A1628] dark:text-white mt-1">0 to 3 km</p>
                  <p className="font-mono text-xs text-[#B8860B] dark:text-[#FBBF24] mt-2 font-bold">
                    [OWNER TO PROVIDE: Slab A Fee]
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Slab B: Suburbs</span>
                  <p className="font-black text-[#0A1628] dark:text-white mt-1">3 to 7 km</p>
                  <p className="font-mono text-xs text-[#B8860B] dark:text-[#FBBF24] mt-2 font-bold">
                    [OWNER TO PROVIDE: Slab B Fee]
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Slab C: Rural Mandal</span>
                  <p className="font-black text-[#0A1628] dark:text-white mt-1">7 to 15 km</p>
                  <p className="font-mono text-xs text-[#B8860B] dark:text-[#FBBF24] mt-2 font-bold">
                    [OWNER TO PROVIDE: Slab C Fee]
                  </p>
                </div>
              </div>
            </div>

            {/* =========================================================================
                SCHOLARSHIPS & HUMANITARIAN AID
            ========================================================================= */}
            <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#D4A853]/10 via-transparent to-[#1E3A8A]/10 border border-[#D4A853]/30">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-[#B8860B] dark:text-[#FBBF24]" />
                <h3 className="text-lg sm:text-xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                  Abhigna Foundation Scholarships &amp; Concessions
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Through our associated Abhigna Foundation, Sree Valmeeki School extends fee concessions, merit waivers, and educational sponsorship to deserving students from economically vulnerable backgrounds, single-parent families, and rural farming communities.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919440468838"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A1628] dark:bg-[#D4A853] text-white dark:text-[#0A1628] text-xs font-black uppercase tracking-wider transition-transform hover:scale-105"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Admissions Office (+91 94404 68838)</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-white/10 text-[#0A1628] dark:text-white text-xs font-bold border border-slate-200 dark:border-white/20 hover:bg-slate-50 transition-colors"
                >
                  <span>Visit School Office</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
