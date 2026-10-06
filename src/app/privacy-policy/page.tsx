import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sree Valmeeki High School',
  description: 'Privacy Policy of Sree Valmeeki High School.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-[family-name:var(--font-body)]">
      <ScrollProgress />
      <Header />
      
      <section className="py-24 px-4 max-w-4xl mx-auto w-full mt-10">
        <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] mb-8 text-[#0A1628]">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none text-slate-700">
          <p className="mb-4">Last updated: October 2026</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1E3A8A]">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Sree Valmeeki High School ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1E3A8A]">2. Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact details</li>
            <li>Student details for admission inquiries</li>
            <li>Feedback and messages sent through our contact forms</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1E3A8A]">3. How We Use Your Information</h2>
          <p className="mb-4">
            We use personal information collected via our website for a variety of business purposes described below:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>To facilitate the admissions process.</li>
            <li>To respond to your inquiries and offer support.</li>
            <li>To send administrative information to you.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1E3A8A]">4. Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this policy, you may contact us using the details provided on our Contact page.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
