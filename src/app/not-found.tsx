import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-[family-name:var(--font-body)]">
      <Header />
      
      <section className="flex-grow flex flex-col items-center justify-center text-center px-4 py-32">
        <h1 className="text-8xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">404</h1>
        <h2 className="text-3xl font-bold mb-6 text-[#0A1628]">Page Not Found</h2>
        <p className="text-lg text-slate-600 max-w-md mx-auto mb-10">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="inline-block bg-[#1E3A8A] text-white font-bold py-3 px-8 rounded-full hover:bg-[#0A1628] transition-colors">
          Back to Home
        </Link>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
