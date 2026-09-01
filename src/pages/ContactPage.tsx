import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle, 
  Sparkles, 
  Copy, 
  Check, 
  Clock, 
  ShieldCheck,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Phone,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageType } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Tooltip } from '../components/Tooltip';
import { ProfileHeaderBanner } from '../components/ProfileHeaderBanner';
import portraitImg from '../assets/images/irfan_green_portrait_1787860891859.jpg';

interface ContactPageProps {
  darkMode: boolean;
  onNavigate: (page: PageType) => void;
  initialSubject?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ darkMode, onNavigate, initialSubject = '' }) => {
  const { t, isUrdu } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: initialSubject,
    message: ''
  });

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Trigger festive confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#06b6d4', '#3b82f6']
      });
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div id="contact-page" className="relative z-10 pt-28 sm:pt-32 pb-20 overflow-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ProfileHeaderBanner darkMode={darkMode} />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            {t.contact.title}{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t.contact.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {t.contact.subtitle}
          </motion.p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: isUrdu ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Info Box */}
            <div className={`p-8 rounded-3xl border backdrop-blur-xl ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              {/* Creator Card */}
              <div className={`flex items-center gap-4 p-3.5 mb-6 rounded-2xl border ${
                darkMode ? 'bg-slate-800/60 border-indigo-500/30' : 'bg-indigo-50/70 border-indigo-200'
              } ${isUrdu ? 'flex-row-reverse text-right' : ''}`}>
                <div className="relative shrink-0">
                  <img
                    src={portraitImg}
                    alt="Irfan Ullah"
                    className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-indigo-400 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100 dark:text-white flex items-center gap-1.5">
                    <span>{isUrdu ? 'عرفان اللہ' : PERSONAL_INFO.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 inline" />
                  </h4>
                  <div className="text-xs text-indigo-400 font-mono">Web Developer &amp; Computer Specialist</div>
                  <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">● Ready for New Projects</div>
                </div>
              </div>

              <h3 className={`text-xl font-bold tracking-tight mb-2 ${isUrdu ? 'text-right' : 'text-left'}`}>
                {t.contact.quickDetails}
              </h3>
              
              <p className={`text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 ${isUrdu ? 'text-right' : 'text-left'}`}>
                {t.contact.subtitle}
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className={`p-4 rounded-2xl border flex items-center justify-between ${
                  darkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`flex items-center gap-3 overflow-hidden ${isUrdu ? 'flex-row-reverse text-right' : ''}`}>
                    <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">{t.contact.emailDirect}</div>
                      <div className="text-xs sm:text-sm font-semibold truncate font-mono text-slate-200 dark:text-slate-100">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>
                  <Tooltip content={copiedEmail ? 'Email address copied!' : 'Copy email address'} position="left" badge="Copy">
                    <button
                      onClick={handleCopyEmail}
                      aria-label="Copy Email Address"
                      className="p-2 rounded-xl bg-slate-700/60 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </Tooltip>
                </div>

                {/* Location Item */}
                <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
                  darkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-slate-50 border-slate-200'
                } ${isUrdu ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">{t.contact.location}</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 dark:text-slate-100">
                      {isUrdu ? 'لکی مروت، کے پی کے، پاکستان' : PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

                {/* Availability Item */}
                <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
                  darkMode ? 'bg-slate-800/40 border-slate-700/60' : 'bg-slate-50 border-slate-200'
                } ${isUrdu ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400">{t.contact.workingHours}</div>
                    <div className="text-xs sm:text-sm font-semibold text-emerald-400">
                      {isUrdu ? 'فوری پروجیکٹس کے لیے دستیاب' : PERSONAL_INFO.availability}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links with Glowing Hover Animations */}
              <div className="mt-8 pt-6 border-t border-slate-800/50">
                <div className={`text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4 ${isUrdu ? 'text-right' : 'text-left'}`}>
                  {t.footer.connectTitle}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  
                  {/* LinkedIn */}
                  <Tooltip content="Connect on LinkedIn" position="top" badge="LinkedIn">
                    <a
                      href={PERSONAL_INFO.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Profile"
                      className="p-3 rounded-2xl bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 group cursor-pointer"
                    >
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-semibold">LinkedIn</span>
                    </a>
                  </Tooltip>

                  {/* GitHub */}
                  <Tooltip content="Explore GitHub Repositories" position="top" badge="GitHub">
                    <a
                      href={PERSONAL_INFO.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Profile"
                      className="p-3 rounded-2xl bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/30 group cursor-pointer"
                    >
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-semibold">GitHub</span>
                    </a>
                  </Tooltip>

                  {/* Facebook */}
                  <Tooltip content="Follow on Facebook" position="top" badge="Facebook">
                    <a
                      href={PERSONAL_INFO.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook Profile"
                      className="p-3 rounded-2xl bg-slate-800/80 hover:bg-blue-500 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 group cursor-pointer"
                    >
                      <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-semibold">Facebook</span>
                    </a>
                  </Tooltip>

                  {/* Instagram */}
                  <Tooltip content="Follow on Instagram" position="top" badge="Instagram">
                    <a
                      href={PERSONAL_INFO.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram Profile"
                      className="p-3 rounded-2xl bg-slate-800/80 hover:bg-pink-600 text-slate-300 hover:text-white flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-600/30 group cursor-pointer"
                    >
                      <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-semibold">Instagram</span>
                    </a>
                  </Tooltip>

                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isUrdu ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className={`p-8 sm:p-10 rounded-3xl border relative backdrop-blur-xl overflow-hidden ${
              darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              
              {/* Outer top subtle glow */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 dark:text-white">
                    {t.contact.successMessage}
                  </h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors cursor-pointer"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className={`text-xs font-semibold uppercase tracking-wider font-mono text-slate-400 block ${isUrdu ? 'text-right' : 'text-left'}`}>
                        {t.contact.nameLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.contact.namePlaceholder}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all ${
                          isUrdu ? 'text-right' : 'text-left'
                        } ${
                          darkMode 
                            ? 'bg-slate-800/60 border-slate-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20' 
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                        }`}
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className={`text-xs font-semibold uppercase tracking-wider font-mono text-slate-400 block ${isUrdu ? 'text-right' : 'text-left'}`}>
                        {t.contact.emailLabel} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all ${
                          isUrdu ? 'text-right' : 'text-left'
                        } ${
                          darkMode 
                            ? 'bg-slate-800/60 border-slate-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20' 
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                        }`}
                      />
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className={`text-xs font-semibold uppercase tracking-wider font-mono text-slate-400 block ${isUrdu ? 'text-right' : 'text-left'}`}>
                      {t.contact.serviceLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.budgetPlaceholder}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all ${
                        isUrdu ? 'text-right' : 'text-left'
                      } ${
                        darkMode 
                          ? 'bg-slate-800/60 border-slate-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className={`text-xs font-semibold uppercase tracking-wider font-mono text-slate-400 block ${isUrdu ? 'text-right' : 'text-left'}`}>
                      {t.contact.messageLabel} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={t.contact.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all resize-none ${
                        isUrdu ? 'text-right' : 'text-left'
                      } ${
                        darkMode 
                          ? 'bg-slate-800/60 border-slate-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                      }`}
                    />
                  </div>

                  {/* Animated Send Message Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group py-4 rounded-2xl text-sm font-bold text-white overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 group-hover:opacity-95 transition-opacity" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          <span>{t.contact.sending}</span>
                        </>
                      ) : (
                        <>
                          <Send className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isUrdu ? 'rotate-180' : ''}`} />
                          <span>{t.contact.sendMessage}</span>
                        </>
                      )}
                    </span>
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
