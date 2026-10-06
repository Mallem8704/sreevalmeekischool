'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Bus,
  Sparkles,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';
import { useAdminStore } from '@/lib/store';

const formSchema = z.object({
  studentName: z.string().min(2, 'Student full name is required'),
  class: z.string().min(1, 'Please select a grade/class'),
  parentName: z.string().min(2, 'Parent / Guardian name is required'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'),
  whatsappNumber: z.string().optional().refine(
    (val) => !val || /^[6-9]\d{9}$/.test(val),
    { message: 'Please enter a valid 10-digit WhatsApp number' }
  ),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  studentAge: z.string().optional(),
  currentSchool: z.string().optional(),
  location: z.string().optional(),
  transport: z.enum(['yes', 'no']),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AdmissionForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [sameAsPhone, setSameAsPhone] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transport: 'yes',
      studentName: '',
      parentName: '',
      class: '',
      phone: '',
      whatsappNumber: '',
      email: '',
      studentAge: '',
      location: '',
      message: '',
    },
  });

  const selectedTransport = watch('transport');
  const enteredPhone = watch('phone');

  const handleSameAsPhoneToggle = (checked: boolean) => {
    setSameAsPhone(checked);
    if (checked && enteredPhone) {
      setValue('whatsappNumber', enteredPhone);
    }
  };

  const onSubmit = async (data: FormData) => {
    // Simulate brief network submission for polished UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    const finalWhatsapp = sameAsPhone && data.phone ? data.phone : (data.whatsappNumber || data.phone);

    try {
      useAdminStore.getState().addEnquiry({
        id: Date.now().toString(),
        parentName: data.parentName,
        studentName: data.studentName,
        studentAge: data.studentAge || '',
        classSeeking: data.class,
        currentSchool: data.currentSchool || '',
        phone: data.phone,
        email: data.email || '',
        location: data.location || '',
        transportRequired: data.transport === 'yes',
        message: [
          finalWhatsapp ? `WhatsApp: ${finalWhatsapp}` : '',
          data.message || '',
        ].filter(Boolean).join(' | '),
        status: 'New',
        notes: `Submitted via Homepage Admission Form. Student: ${data.studentName}, Class: ${data.class}, WhatsApp: ${finalWhatsapp}`,
        date: new Date().toISOString().split('T')[0],
      });
    } catch {
      // ignore
    }

    setSubmittedData({
      ...data,
      whatsappNumber: finalWhatsapp,
    });
    setIsSuccess(true);
    reset();
    setSameAsPhone(false);
  };

  return (
    <section id="admissions" className="scroll-mt-20">
      <div id="enquiry" className="scroll-mt-20 py-20 lg:py-28 bg-[#FAFAF7] border-t border-gray-200 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A1628]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/30 mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="text-xs font-bold tracking-widest text-[#B8860B] uppercase font-[family-name:var(--font-body)]">
                Admissions Open 2026–2027
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] leading-tight mb-4">
              Begin Your Child&apos;s Journey of Excellence
            </h2>

            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-[family-name:var(--font-body)]">
              Seats are open for Nursery through Class 10. Complete this brief enquiry form, and our admissions office will reach out within 24 hours to schedule a personalized campus tour.
            </p>
          </div>

          {/* 2-Column Organized Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Why Sree Valmeeki & Direct Helpline */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#0A1628] text-white p-8 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A853]/10 rounded-full blur-xl" />

                <span className="text-xs font-bold tracking-widest text-[#D4A853] uppercase block mb-2 font-[family-name:var(--font-body)]">
                  Why Choose Sree Valmeeki
                </span>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-white mb-6">
                  Education Rooted in Values, Built for Success
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Proven 27+ Years Academic Legacy',
                      desc: 'Consistent 100% SSC pass records with top grade point averages in Kadiri.',
                    },
                    {
                      title: 'Early IIT-JEE & NEET Foundation',
                      desc: 'Conceptual science and mathematics training from Class 6 onwards.',
                    },
                    {
                      title: '100% Spoken English Campus',
                      desc: 'Daily communication practice, public speaking, and linguistic confidence.',
                    },
                    {
                      title: 'Digital Smart Classrooms',
                      desc: 'Visual multi-media learning modules that make complex concepts effortless.',
                    },
                    {
                      title: 'Safe Bus Transportation',
                      desc: 'GPS-enabled buses serving all key neighborhoods and nearby mandals.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#D4A853] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-white/70 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact & Visit Help Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-gray-200 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-[#0A1628] font-[family-name:var(--font-heading)]">
                    Direct Admissions Desk
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    Reach our admissions counsellors directly via phone or WhatsApp.
                  </p>
                </div>

                <div className="space-y-3.5 text-sm">
                  {/* Call Admissions Button */}
                  <a
                    href="tel:+919440468838"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#0A1628] hover:bg-[#152D5E] text-white transition-all group shadow-md"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 text-[#D4A853] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[11px] text-[#D4A853] font-bold tracking-wider uppercase block">
                        Call Admissions Office
                      </span>
                      <span className="font-bold text-white text-base tracking-wide">
                        +91 94404 68838
                      </span>
                    </div>
                  </a>

                  {/* Chat on WhatsApp Button */}
                  <a
                    href="https://wa.me/919440468838?text=Hello%20Sree%20Valmeeki%20School%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all group shadow-md"
                  >
                    <div className="w-11 h-11 rounded-xl bg-black/10 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[11px] text-white/90 font-bold tracking-wider uppercase block">
                        Chat on WhatsApp
                      </span>
                      <span className="font-bold text-white text-base">
                        +91 94404 68838
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3 text-xs text-[#64748B] bg-[#FAFAF7] rounded-xl border border-gray-100">
                    <MapPin className="w-4 h-4 text-[#D4A853] flex-shrink-0 mt-0.5" />
                    <span>
                      Madanapalli Road / NH-205, Near Chowdeswari Temple, Kadiri, Andhra Pradesh - 515591
                    </span>
                  </div>

                  <div className="flex items-center gap-3 px-3 text-xs text-[#64748B]">
                    <Clock className="w-4 h-4 text-[#D4A853] flex-shrink-0" />
                    <span>Monday – Saturday: 8:30 AM – 5:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Admission Enquiry Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl shadow-[#0A1628]/5 border border-gray-200">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-10 px-4"
                    >
                      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 border border-emerald-200 shadow-sm">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] mb-3">
                        Enquiry Received Successfully!
                      </h3>

                      <p className="text-[#64748B] max-w-md mx-auto mb-6 leading-relaxed text-sm sm:text-base">
                        Thank you{submittedData ? `, ${submittedData.parentName}` : ''}. We have received your admission enquiry for{' '}
                        <span className="font-bold text-[#0A1628]">{submittedData?.studentName} ({submittedData?.class})</span>. Our admissions coordinator will contact you shortly at{' '}
                        <span className="font-bold text-[#0A1628]">{submittedData?.phone}</span>.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3.5 justify-center max-w-md mx-auto">
                        <a
                          href="tel:+919440468838"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A1628] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#152D5E] transition-colors shadow-md"
                        >
                          <PhoneCall className="w-4 h-4 text-[#D4A853]" />
                          Call Admissions Office
                        </a>

                        <a
                          href="https://wa.me/919440468838?text=Hello%20Sree%20Valmeeki%20School%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20BD5A] transition-colors shadow-md"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Chat on WhatsApp
                        </a>
                      </div>

                      <div className="mt-6">
                        <button
                          onClick={() => setIsSuccess(false)}
                          className="inline-flex items-center justify-center text-xs text-[#64748B] hover:text-[#0A1628] underline underline-offset-4 font-semibold transition-colors cursor-pointer"
                        >
                          Submit Another Enquiry
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0A1628] font-[family-name:var(--font-heading)] mb-1">
                          Student Admission Details
                        </h3>
                        <p className="text-xs text-[#64748B]">
                          Fields marked with <span className="text-red-500">*</span> are mandatory
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Student Full Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                            Student Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            {...register('studentName')}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] bg-white transition-all focus:border-[#B8860B] focus:ring-2 focus:ring-[#D4A853]/20"
                            placeholder="e.g. S. Ananya"
                          />
                          {errors.studentName && (
                            <p className="text-red-500 text-xs mt-1.5 font-medium">
                              {errors.studentName.message}
                            </p>
                          )}
                        </div>

                        {/* Class Seeking Admission */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                            Grade / Class Applying For <span className="text-red-500">*</span>
                          </label>
                          <select
                            {...register('class')}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] bg-white transition-all focus:border-[#B8860B] focus:ring-2 focus:ring-[#D4A853]/20 cursor-pointer"
                          >
                            <option value="">Select Grade / Class</option>
                            <option value="Nursery">Nursery</option>
                            <option value="LKG">LKG (Lower Kindergarten)</option>
                            <option value="UKG">UKG (Upper Kindergarten)</option>
                            <option value="Class 1">Class 1</option>
                            <option value="Class 2">Class 2</option>
                            <option value="Class 3">Class 3</option>
                            <option value="Class 4">Class 4</option>
                            <option value="Class 5">Class 5</option>
                            <option value="Class 6">Class 6 (IIT Foundation)</option>
                            <option value="Class 7">Class 7 (IIT Foundation)</option>
                            <option value="Class 8">Class 8 (IIT Foundation)</option>
                            <option value="Class 9">Class 9 (IIT Foundation)</option>
                            <option value="Class 10">Class 10 (Board Exam Batch)</option>
                          </select>
                          {errors.class && (
                            <p className="text-red-500 text-xs mt-1.5 font-medium">
                              {errors.class.message}
                            </p>
                          )}
                        </div>

                        {/* Parent Full Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                            Parent / Guardian Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            {...register('parentName')}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] bg-white transition-all focus:border-[#B8860B] focus:ring-2 focus:ring-[#D4A853]/20"
                            placeholder="e.g. Ramesh Kumar"
                          />
                          {errors.parentName && (
                            <p className="text-red-500 text-xs mt-1.5 font-medium">
                              {errors.parentName.message}
                            </p>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#64748B]">
                              +91
                            </span>
                            <input
                              {...register('phone')}
                              maxLength={10}
                              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] bg-white transition-all focus:border-[#B8860B] focus:ring-2 focus:ring-[#D4A853]/20"
                              placeholder="94404 68838"
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1.5 font-medium">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        {/* WhatsApp Number */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E]">
                              WhatsApp Number
                            </label>
                            <label className="inline-flex items-center gap-1.5 text-[11px] text-[#64748B] cursor-pointer">
                              <input
                                type="checkbox"
                                checked={sameAsPhone}
                                onChange={(e) => handleSameAsPhoneToggle(e.target.checked)}
                                className="rounded text-[#D4A853] focus:ring-[#D4A853]"
                              />
                              <span>Same as phone</span>
                            </label>
                          </div>
                          <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#64748B]">
                              +91
                            </span>
                            <input
                              {...register('whatsappNumber')}
                              maxLength={10}
                              disabled={sameAsPhone}
                              className={`w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] bg-white transition-all focus:border-[#B8860B] focus:ring-2 focus:ring-[#D4A853]/20 ${
                                sameAsPhone ? 'bg-gray-50 text-gray-500 cursor-not-allowed' : ''
                              }`}
                              placeholder={sameAsPhone ? (enteredPhone || 'Same as mobile number') : '94404 68838'}
                            />
                          </div>
                          {errors.whatsappNumber && (
                            <p className="text-red-500 text-xs mt-1.5 font-medium">
                              {errors.whatsappNumber.message}
                            </p>
                          )}
                        </div>

                        {/* Email Address */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                            Email Address (Optional)
                          </label>
                          <input
                            {...register('email')}
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] bg-white transition-all focus:border-[#B8860B] focus:ring-2 focus:ring-[#D4A853]/20"
                            placeholder="parent@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1.5 font-medium">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        {/* Student Age */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                            Student Age (Optional)
                          </label>
                          <input
                            {...register('studentAge')}
                            type="number"
                            min="3"
                            max="18"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] bg-white transition-all focus:border-[#B8860B] focus:ring-2 focus:ring-[#D4A853]/20"
                            placeholder="e.g. 5"
                          />
                        </div>

                        {/* Residential Location */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                            Residential Area / Landmark (Optional)
                          </label>
                          <input
                            {...register('location')}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] bg-white transition-all focus:border-[#B8860B] focus:ring-2 focus:ring-[#D4A853]/20"
                            placeholder="e.g. Near Clock Tower, Kadiri"
                          />
                        </div>
                      </div>

                      {/* School Bus Transport Requirement */}
                      <div className="pt-1">
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2.5">
                          School Bus Transport Facility Required? <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-4 max-w-sm">
                          <button
                            type="button"
                            onClick={() => setValue('transport', 'yes')}
                            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                              selectedTransport === 'yes'
                                ? 'border-[#0A1628] bg-[#0A1628] text-white shadow-sm'
                                : 'border-gray-200 bg-white text-[#64748B] hover:border-gray-300'
                            }`}
                          >
                            <Bus className="w-4 h-4 text-[#D4A853]" />
                            Yes, Bus Needed
                          </button>

                          <button
                            type="button"
                            onClick={() => setValue('transport', 'no')}
                            className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                              selectedTransport === 'no'
                                ? 'border-[#0A1628] bg-[#0A1628] text-white shadow-sm'
                                : 'border-gray-200 bg-white text-[#64748B] hover:border-gray-300'
                            }`}
                          >
                            No, Own Transport
                          </button>
                        </div>
                      </div>

                      {/* Additional Message / Queries */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#1A1A2E] mb-2">
                          Message / Questions (Optional)
                        </label>
                        <textarea
                          {...register('message')}
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A2E] bg-white transition-all focus:border-[#B8860B] focus:ring-2 focus:ring-[#D4A853]/20 resize-none"
                          placeholder="Any queries regarding fee structure, syllabus, timings, or scholarships..."
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold text-sm tracking-wider uppercase shadow-lg hover:shadow-xl hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-[#0A1628] border-t-transparent rounded-full animate-spin" />
                              <span>Processing Enquiry...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Submit Admission Enquiry</span>
                            </>
                          )}
                        </button>

                        <p className="text-center text-xs text-[#64748B] mt-3">
                          🔒 Your information is confidential and will only be used by Sree Valmeeki Admissions.
                        </p>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
