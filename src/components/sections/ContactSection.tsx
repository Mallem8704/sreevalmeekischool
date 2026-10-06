'use client';

import { MapPin, Phone, MessageCircle, Navigation, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#0A1628] font-medium leading-tight mb-6">
                Come Visit<br />
                <span className="text-[#D4A853]">Sree Valmeeki.</span>
              </h2>
              <p className="text-[#64748B] text-lg max-w-md">
                We'd love to show you around our campus and answer any questions you might have about our programs.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#F5F3EE] rounded-full text-[#D4A853] shrink-0 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-[#1A1A2E] font-medium mb-2">Our Campus</h4>
                  <p className="text-[#64748B] leading-relaxed">
                    Sree Valmeeki High School<br />
                    Madanapalle Road, Kadiri<br />
                    Sri Sathya Sai District, AP 515591
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-[#F5F3EE] rounded-full text-[#D4A853] shrink-0 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-[#1A1A2E] font-medium mb-2">Contact Numbers</h4>
                  <p className="text-[#64748B] mb-1">+91 94404 68838</p>
                  <p className="text-[#64748B]">+91 80963 80894</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-4 px-6 bg-[#0A1628] text-white hover:bg-[#152D5E] transition-colors rounded">
                <Phone size={18} />
                <span>Call School</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-4 px-6 bg-[#25D366] text-white hover:bg-[#1EBE5C] transition-colors rounded">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-4 px-6 border border-[#0A1628] text-[#0A1628] hover:bg-[#FAFAF7] transition-colors rounded">
                <Navigation size={18} />
                <span>Get Directions</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-4 px-6 bg-[#D4A853] text-white hover:bg-[#B8860B] transition-colors rounded">
                <span>Admission Enquiry</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="h-[500px] lg:h-[600px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            {/* Google Maps placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3ba32d00139bcfab%3A0x6b490d1f7d716298!2sSREE%20VALMEEKI%20HIGH%20SCHOOL!5e0!3m2!1sen!2sin!4v1709214305886!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}
