import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { SOCIAL_LINKS } from '../../data/portfolioData';
import { Mail, Phone, Linkedin, Download, Send, CheckCircle2, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  playClick: () => void;
  playHover: () => void;
  playSuccess: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  playClick,
  playHover,
  playSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [status, setStatus] = useState<'idle' | 'preparing' | 'opened' | 'error'>('idle');

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();

    if (!validate()) {
      return;
    }

    setStatus('preparing');

    // Safe and truthful mailto dispatch
    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );

    const mailtoUri = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUri;
      setStatus('opened');
      playSuccess();
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Dynamic Cosmic Atmosphere Glow behind Contact */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-violet-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Subtle Glowing Traveling Line */}
        <div className="w-full flex justify-center mb-2">
          <div className="w-32 sm:w-64 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" />
        </div>

        <SectionHeading
          idPrefix="COLLABORATE"
          title="LET'S BUILD SOMETHING MEANINGFUL."
          subtitle="Interested in software development, full-stack applications, mobile applications, AI-powered systems or innovative technology? Let's connect."
          accent="green"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Verified Contact Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#030712]/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                  DIRECT CONTACT CHANNELS
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  Get in Touch
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  Always open to software engineering discussions, full-stack opportunities, hackathon collaborations, and innovative technology inquiries.
                </p>
              </div>

              {/* Direct Info Items */}
              <div className="space-y-3 pt-2 font-sans text-xs">
                {/* Email Action */}
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-400 text-slate-200 hover:text-emerald-300 transition-all flex items-center gap-3.5 group cursor-pointer"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 block">EMAIL ADDRESS (CLICK TO SEND)</span>
                    <p className="text-sm font-bold text-white font-mono truncate">{SOCIAL_LINKS.email}</p>
                  </div>
                </a>

                {/* Phone Call Action */}
                <a
                  href={`tel:${SOCIAL_LINKS.phone}`}
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 transition-all flex items-center gap-3.5 group cursor-pointer"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-slate-400 block">PHONE / MOBILE (CLICK TO CALL)</span>
                    <p className="text-sm font-bold text-white font-mono">{SOCIAL_LINKS.phone}</p>
                  </div>
                </a>
              </div>

              {/* Verified Functional Action Buttons Strip (Email Me, Call Me, LinkedIn, Resume) */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 font-mono text-xs">
                {/* 1. Email Me */}
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="p-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center justify-center gap-1.5 transition-all text-center shadow-[0_0_15px_rgba(16,185,129,0.3)] active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  <span>EMAIL ME</span>
                </a>

                {/* 2. Call Me */}
                <a
                  href={`tel:${SOCIAL_LINKS.phone}`}
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-cyan-300 font-bold flex items-center justify-center gap-1.5 transition-all text-center active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL ME</span>
                </a>

                {/* 3. LinkedIn */}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-blue-400 text-slate-200 font-bold flex items-center justify-center gap-1.5 transition-all text-center active:scale-95"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LINKEDIN</span>
                </a>

                {/* 4. Download Resume */}
                <a
                  href={SOCIAL_LINKS.resumePdf}
                  download="Kasi_Naveen_K_Resume.pdf"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-emerald-400 text-slate-200 font-bold flex items-center justify-center gap-1.5 transition-all text-center active:scale-95"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>RESUME</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Functional Message Dispatcher Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 sm:p-10 rounded-3xl bg-[#030712]/90 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>SEND A MESSAGE</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  DIRECT TO: {SOCIAL_LINKS.email}
                </span>
              </div>

              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-medium flex items-center justify-between">
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#02050e] border text-slate-100 font-sans text-xs focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500/80 focus:border-red-400' : 'border-slate-800 focus:border-emerald-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] font-mono text-red-400 flex items-center gap-1 pt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-medium flex items-center justify-between">
                    <span>Your Email *</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#02050e] border text-slate-100 font-sans text-xs focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500/80 focus:border-red-400' : 'border-slate-800 focus:border-emerald-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] font-mono text-red-400 flex items-center gap-1 pt-0.5">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 font-medium">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Software Engineering Collaboration / Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#02050e] border border-slate-800 text-slate-100 font-sans text-xs focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 font-medium">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message or inquiry here..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-[#02050e] border text-slate-100 font-sans text-xs focus:outline-none transition-colors resize-none ${
                    errors.message ? 'border-red-500/80 focus:border-red-400' : 'border-slate-800 focus:border-emerald-500'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] font-mono text-red-400 flex items-center gap-1 pt-0.5">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onMouseEnter={playHover}
                className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-sans text-sm tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                {status === 'preparing' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>PREPARING MESSAGE...</span>
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>

              {/* Truthful Dispatch Status Feedback */}
              <AnimatePresence>
                {status === 'opened' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-sans text-xs space-y-1.5"
                  >
                    <div className="flex items-center gap-2 font-bold font-mono">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Opening your default email application...</span>
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      Your message details have been transferred to your mail client. If it didn't launch automatically,{' '}
                      <a
                        href={`mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                        className="text-emerald-400 underline font-bold"
                      >
                        click here to send directly to {SOCIAL_LINKS.email}
                      </a>.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
