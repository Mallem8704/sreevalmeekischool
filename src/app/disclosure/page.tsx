import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  ShieldCheck,
  FileCheck,
  Building,
  Award,
  Phone,
  Mail,
  AlertTriangle,
  Flame,
  Droplet,
  Users,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'Mandatory Public Disclosure | Sree Valmeeki High School',
  description:
    'Mandatory regulatory disclosures, AP State Board recognition, infrastructure certificates, and safety compliances for Sree Valmeeki High School, Kadiri.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DisclosurePage() {
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
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-[#B8860B] dark:hover:text-[#FBBF24] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/about" className="hover:text-[#B8860B] dark:hover:text-[#FBBF24] transition-colors">
                About
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#B8860B] dark:text-[#FBBF24]">Mandatory Disclosure</span>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/40 dark:border-[#D4A853]/50 text-[#B8860B] dark:text-[#FBBF24] text-xs font-bold mb-4 tracking-wide uppercase">
                <FileCheck className="w-3.5 h-3.5" />
                <span>GOVERNMENT &amp; REGULATORY COMPLIANCE</span>
              </div>

              <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] dark:text-white leading-tight mb-4">
                Mandatory Institutional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#8C6D23] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
                  Public Disclosure
                </span>
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                In strict adherence to the Department of School Education, Government of Andhra Pradesh regulatory standards, this portal provides transparent institutional details, statutory safety certifications, and infrastructure benchmarks.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            DISCLOSURE SECTIONS
        ========================================================================= */}
        <section className="py-14 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-10">

            {/* A: GENERAL INFORMATION */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100 dark:border-white/10">
                <Building className="w-6 h-6 text-[#B8860B] dark:text-[#FBBF24]" />
                <h2 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                  A. General Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">School Name</span>
                  <span className="block font-black text-[#0A1628] dark:text-white mt-1">Sree Valmeeki English Medium High School</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Affiliation / Board</span>
                  <span className="block font-black text-[#0A1628] dark:text-white mt-1">Board of Secondary Education, Andhra Pradesh (SSC)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Year of Establishment</span>
                  <span className="block font-black text-[#0A1628] dark:text-white mt-1">1999 (28 Years of Academic Service)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">School U-DISE Code</span>
                  <span className="block font-mono font-bold text-[#B8860B] dark:text-[#FBBF24] mt-1">
                    [OWNER TO PROVIDE: Official U-DISE Code]
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 md:col-span-2">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Campus Postal Address</span>
                  <span className="block font-semibold text-[#0A1628] dark:text-white mt-1">
                    Behind Valmeeki Circle, Beside By-pass Road, Kadiri, Sri Sathya Sai District, Andhra Pradesh - 515591, India.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Correspondent</span>
                  <span className="block font-black text-[#0A1628] dark:text-white mt-1">Sri P. Anil Kumar Reddy</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Academic Principal</span>
                  <span className="block font-mono font-bold text-[#B8860B] dark:text-[#FBBF24] mt-1">
                    [OWNER TO PROVIDE: Principal Name &amp; Contact]
                  </span>
                </div>
              </div>
            </div>

            {/* B: STATUTORY CERTIFICATIONS & COMPLIANCES */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100 dark:border-white/10">
                <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                  B. Statutory Certifications &amp; Safety Compliance
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-[#0A1628] dark:text-white block">
                        DEO Recognition &amp; Affiliation Order
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Recognition granted by District Educational Officer, Department of School Education, AP.
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#B8860B] dark:text-[#FBBF24] shrink-0">
                    [OWNER TO PROVIDE: DEO Order Ref # &amp; Validity]
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-[#0A1628] dark:text-white block">
                        Building Structural Safety Certificate
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Certified structural stability by registered Executive Engineer / Competent Authority.
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#B8860B] dark:text-[#FBBF24] shrink-0">
                    [OWNER TO PROVIDE: Stability Certificate Ref #]
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Flame className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-[#0A1628] dark:text-white block">
                        Fire Safety Compliance (NOC)
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Verified firefighting equipment, evacuation exits, and annual fire drill protocol.
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#B8860B] dark:text-[#FBBF24] shrink-0">
                    [OWNER TO PROVIDE: Fire NOC Ref # &amp; Validity]
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Droplet className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-[#0A1628] dark:text-white block">
                        Drinking Water &amp; Sanitary Hygiene Certificate
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Potable reverse-osmosis water testing and sanitary inspection by Health Authorities.
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#B8860B] dark:text-[#FBBF24] shrink-0">
                    [OWNER TO PROVIDE: Water &amp; Hygiene Cert Ref #]
                  </span>
                </div>
              </div>
            </div>

            {/* C: CAMPUS & INFRASTRUCTURE DETAILS */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100 dark:border-white/10">
                <Award className="w-6 h-6 text-[#B8860B] dark:text-[#FBBF24]" />
                <h2 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                  C. Infrastructure &amp; Academic Facilities
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Total Campus Area</span>
                  <span className="block font-mono font-bold text-[#B8860B] dark:text-[#FBBF24] mt-1">
                    [OWNER TO PROVIDE: Campus Area in Acres / Sq. Mtr]
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Classrooms Count</span>
                  <span className="block font-black text-[#0A1628] dark:text-white mt-1">
                    25+ Well-Ventilated, Smart Interactive Classrooms
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Science &amp; Computer Laboratories</span>
                  <span className="block font-black text-[#0A1628] dark:text-white mt-1">
                    Dedicated Physics/Chemistry/Biology Composite Lab + Computer Lab
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                  <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Sports &amp; Playgrounds</span>
                  <span className="block font-black text-[#0A1628] dark:text-white mt-1">
                    Dedicated Cricket Practice Net, Volleyball Court, Mass Yoga Ground
                  </span>
                </div>
              </div>
            </div>

            {/* D: COMMITTEES & GRIEVANCE REDRESSAL */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100 dark:border-white/10">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl sm:text-2xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
                  D. Committees &amp; Student Safety Safeguards
                </h2>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Sree Valmeeki High School strictly enforces institutional child protection policies under POCSO norms, Anti-Ragging guidelines, and active Parent-Teacher Committees.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <span className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1">
                  Grievance Redressal / POCSO Committee Nodal Officer
                </span>
                <span className="block font-mono text-xs sm:text-sm font-bold text-[#B8860B] dark:text-[#FBBF24]">
                  [OWNER TO PROVIDE: Designated Nodal Officer Name, Designation &amp; Direct Phone/Email]
                </span>
              </div>
            </div>

            {/* Verification Contact */}
            <div className="text-center pt-4">
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                For regulatory inspection or official certified document copies, contact the administrative office:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
                <a href="tel:+919440468838" className="text-[#0A1628] dark:text-white hover:text-[#B8860B] transition-colors">
                  📞 +91 94404 68838
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a href="mailto:valmeekischool@gmail.com" className="text-[#0A1628] dark:text-white hover:text-[#B8860B] transition-colors">
                  ✉️ valmeekischool@gmail.com
                </a>
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
