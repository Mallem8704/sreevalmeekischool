import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Terms | Sree Valmeeki School Kadiri',
  description: 'Read the privacy policy, student data safety commitments, and parental consent practices under DPDP guidelines for Sree Valmeeki E.M School in Kadiri, AP.',
  alternates: {
    canonical: 'https://www.sreevalmeekischool.in/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy & Data Terms | Sree Valmeeki School Kadiri',
    description: 'Read the privacy policy, student data safety commitments, and parental consent practices under DPDP guidelines for Sree Valmeeki E.M School in Kadiri, AP.',
    url: 'https://www.sreevalmeekischool.in/privacy-policy',
    siteName: 'Sree Valmeeki E.M School',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy & Data Terms | Sree Valmeeki School Kadiri',
    description: 'Read the privacy policy, student data safety commitments, and parental consent practices under DPDP guidelines for Sree Valmeeki E.M School in Kadiri, AP.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#FBBF24] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full flex-grow">
        <div className="bg-white dark:bg-[#0A1628] p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-2xl transition-colors duration-200">
          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-2 text-[#0A1628] dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 mb-8">
            Last updated: October 2026 • Sree Valmeeki High School
          </p>

          <div className="space-y-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold mb-3 text-[#1E3A8A] dark:text-[#60A5FA]">
                1. Introduction
              </h2>
              <p>
                Welcome to Sree Valmeeki High School (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our admissions and administrative portals.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3 text-[#1E3A8A] dark:text-[#60A5FA]">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect personal information that you voluntarily provide to us when expressing interest in admissions, requesting campus visits, or submitting contact inquiries:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>Parent/Guardian name, contact phone numbers, and email address</li>
                <li>Student name, current grade level, and intended admission grade</li>
                <li>Locality and transportation inquiry preferences</li>
                <li>Messages and feedback submitted through our contact and admission forms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3 text-[#1E3A8A] dark:text-[#60A5FA]">
                3. How We Use Your Information
              </h2>
              <p className="mb-3">
                Information gathered is strictly utilized for educational administrative operations:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-slate-600 dark:text-slate-300">
                <li>Facilitating the student admission inquiry, verification, and registration process</li>
                <li>Direct telephone or WhatsApp response by academic counselors</li>
                <li>Sending academic schedules, parent notifications, and school circulars</li>
                <li>Maintaining campus security and verification logs</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3 text-[#1E3A8A] dark:text-[#60A5FA]">
                4. Data Protection & Confidentiality
              </h2>
              <p>
                Student and family contact records are kept strictly confidential. We do not sell, rent, or lease any parent contact databases to third-party telemarketers or advertisers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3 text-[#1E3A8A] dark:text-[#60A5FA]">
                5. Contact Us
              </h2>
              <p>
                If you have questions regarding this privacy policy, you may reach our administrative office at Kadiri, Andhra Pradesh, or email <a href="mailto:info@sreevalmeeki.edu.in" className="text-[#B8860B] dark:text-[#FBBF24] font-medium underline">info@sreevalmeeki.edu.in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
