import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wrench, 
  Code2, 
  Palette, 
  Layout, 
  Laptop, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Clock,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  Quote,
  Check
} from 'lucide-react';
import { SERVICES_DATA, FAQ_ITEMS, TESTIMONIALS } from '../data/portfolioData';
import { PageType, ServiceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ProfileHeaderBanner } from '../components/ProfileHeaderBanner';

interface ServicesPageProps {
  darkMode: boolean;
  onNavigate: (page: PageType, initialSubject?: string) => void;
}

const renderServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2': return <Code2 className="w-6 h-6" />;
    case 'Palette': return <Palette className="w-6 h-6" />;
    case 'Layout': return <Layout className="w-6 h-6" />;
    case 'Laptop': return <Laptop className="w-6 h-6" />;
    default: return <Wrench className="w-6 h-6" />;
  }
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ darkMode, onNavigate }) => {
  const { t, isUrdu } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleRequestService = (serviceTitle: string) => {
    onNavigate('contact', `Inquiry regarding ${serviceTitle} Service`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="services-page" className="relative z-10 pt-28 sm:pt-32 pb-24 overflow-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ProfileHeaderBanner darkMode={darkMode} />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-mono"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            {t.services.title}{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              {t.services.titleHighlight}
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
            {t.services.subtitle}
          </motion.p>
        </div>
      </section>

      {/* 2. SERVICES CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group rounded-3xl p-[2px] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Gradient Border Glow */}
              <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-40 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10`} />

              {/* Inner Box */}
              <div className={`h-full rounded-[22px] p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between ${
                darkMode 
                  ? 'bg-slate-900/90 border border-slate-800' 
                  : 'bg-white/95 border border-slate-200/90 shadow-xl'
              }`}>
                
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className={`flex items-start justify-between gap-4 mb-6 ${isUrdu ? 'flex-row-reverse' : ''}`}>
                    <div className={`p-4 rounded-2xl bg-gradient-to-tr ${service.gradient} text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      {renderServiceIcon(service.iconName)}
                    </div>
                    {service.popular && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                        <span>{t.services.popularBadge}</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className={`text-2xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors ${isUrdu ? 'text-right' : 'text-left'}`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-3 font-mono ${isUrdu ? 'text-right' : 'text-left'}`}>
                    {service.shortDesc}
                  </p>

                  <p className={`text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 ${isUrdu ? 'text-right' : 'text-left'}`}>
                    {service.fullDesc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    <div className={`text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 ${isUrdu ? 'text-right' : 'text-left'}`}>
                      {t.services.whatsIncluded}
                    </div>
                    {service.features.map((feature, i) => (
                      <div key={i} className={`flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 ${isUrdu ? 'flex-row-reverse text-right' : ''}`}>
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables tags */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/50 mb-6">
                    <div className={`text-xs font-mono text-slate-600 dark:text-slate-400 mb-2 ${isUrdu ? 'text-right' : 'text-left'}`}>{t.services.deliverables}</div>
                    <div className={`flex flex-wrap gap-1.5 ${isUrdu ? 'justify-end' : 'justify-start'}`}>
                      {service.deliverables.map((del) => (
                        <span
                          key={del}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Request Button */}
                <button
                  onClick={() => handleRequestService(service.title)}
                  className="w-full py-3.5 px-6 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>{t.services.requestBtn} - {service.title}</span>
                  <ArrowRight className={`w-4 h-4 group-hover/btn:translate-x-1 transition-transform ${isUrdu ? 'rotate-180' : ''}`} />
                </button>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WORKING PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">{t.services.workflowBadge}</h3>
          <h2 className="text-3xl font-extrabold tracking-tight">{t.services.workflowTitle}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Scope & Discovery', desc: 'Understanding your exact requirements, target users, and digital preferences.' },
            { step: '02', title: 'Architecture & UI', desc: 'Designing responsive layouts, wireframes, color schemes, and component structures.' },
            { step: '03', title: 'Clean Development', desc: 'Writing modular semantic HTML5, CSS3, JavaScript, or Office automation spreadsheets.' },
            { step: '04', title: 'Testing & Launch', desc: 'Cross-browser QA on mobile/desktop, final revisions, and deployment assistance.' }
          ].map((proc, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border text-center relative ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <span className="text-3xl font-extrabold font-mono text-indigo-500/40 block mb-2">{proc.step}</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">{proc.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1">{t.services.testimonialsBadge}</span>
          <h2 className="text-3xl font-extrabold tracking-tight">{t.services.testimonialsTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl border flex flex-col justify-between ${
                darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-indigo-500/40" />
                <p className={`text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic ${isUrdu ? 'text-right' : 'text-left'}`}>
                  "{test.quote}"
                </p>
              </div>
              <div className={`pt-4 border-t border-slate-200 dark:border-slate-800/60 mt-4 ${isUrdu ? 'text-right' : 'text-left'}`}>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{test.author}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">{test.role} • <span className="text-cyan-600 dark:text-cyan-400">{test.project}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-mono mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.services.faqBadge}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">{t.services.faqTitle}</h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className={`w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base cursor-pointer focus:outline-none ${isUrdu ? 'flex-row-reverse text-right' : ''}`}
                >
                  <span className="text-slate-900 dark:text-white">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800/40 pt-3 ${isUrdu ? 'text-right' : 'text-left'}`}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
