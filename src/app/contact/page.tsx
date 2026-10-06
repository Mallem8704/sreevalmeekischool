import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'Contact Us | Sree Valmeeki High School',
  description: 'Get in touch with Sree Valmeeki High School. Find our address, phone number, and location map.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-[family-name:var(--font-body)]">
      <ScrollProgress />
      <Header />
      
      <section className="relative h-[50vh] bg-[#0A1628] flex items-center justify-center text-center px-4 pt-20">
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">Contact Us</h1>
          <p className="text-lg md:text-xl text-slate-300">We would love to hear from you</p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-6 text-[#0A1628]">Get In Touch</h2>
            <p className="text-slate-600 mb-8 text-lg">Whether you have questions about admissions, our curriculum, or want to schedule a visit, our team is ready to answer your questions.</p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#F5F3EE] rounded-full flex items-center justify-center shrink-0 text-[#1E3A8A]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] text-lg">Phone</h3>
                  <p className="text-slate-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#F5F3EE] rounded-full flex items-center justify-center shrink-0 text-[#1E3A8A]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] text-lg">Email</h3>
                  <p className="text-slate-600">info@sreevalmeekischool.edu.in</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#F5F3EE] rounded-full flex items-center justify-center shrink-0 text-[#1E3A8A]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] text-lg">Address</h3>
                  <p className="text-slate-600">Sree Valmeeki High School, Kadiri, Anantapur District, Andhra Pradesh</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-2 bg-[#0A1628] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1E3A8A] transition-colors">
                Call Now
              </a>
              <a href="#" className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#128C7E] transition-colors">
                WhatsApp
              </a>
              <a href="#" className="flex items-center gap-2 border border-[#0A1628] text-[#0A1628] px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors">
                Get Directions
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-6 text-[#0A1628]">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"></textarea>
              </div>
              <button type="button" className="w-full bg-[#1E3A8A] text-white font-bold py-3 rounded-lg hover:bg-[#0A1628] transition-colors mt-2">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
        
        <div className="mt-16 bg-slate-200 rounded-2xl overflow-hidden h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15440.06173291583!2d78.15610816977539!3d14.111812899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3b216521a00a1%3A0xc6822c9b2dcb5252!2sKadiri%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1689123456789!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
