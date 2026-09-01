import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Code2, 
  Cpu, 
  Sparkles, 
  Target, 
  CheckCircle, 
  FolderCheck, 
  Award, 
  Layers, 
  Clock, 
  Mail, 
  ArrowRight,
  GraduationCap,
  Rocket,
  HeartHandshake,
  Check,
  Terminal,
  Laptop,
  Compass,
  Zap,
  Shield,
  FileCode
} from 'lucide-react';
import { PERSONAL_INFO, ABOUT_INFO_CARDS, STATS_DATA, JOURNEY_MILESTONES, CORE_VALUES, DEV_TOOLING } from '../data/portfolioData';
import { PageType } from '../types';
import portraitImg from '../assets/images/irfan_green_portrait_1787860891859.jpg';
import { useLanguage } from '../context/LanguageContext';
import { ProfileHeaderBanner } from '../components/ProfileHeaderBanner';

interface AboutPageProps {
  darkMode: boolean;
  onNavigate: (page: PageType) => void;
}

// Animated Counter component
const AnimatedCounter: React.FC<{ value: number; duration?: number }> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}</span>;
};

export const AboutPage: React.FC<AboutPageProps> = ({ darkMode, onNavigate }) => {
  const { t, isUrdu } = useLanguage();

  return (
    <div id="about-page" className="relative z-10 pt-28 sm:pt-32 pb-24 overflow-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ProfileHeaderBanner darkMode={darkMode} />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-mono"
          >
            <User className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            {t.about.title}{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              {t.about.titleHighlight}
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
            {t.about.subtitle}
          </motion.p>
        </div>
      </section>

      {/* 2. PROFILE SHOWCASE & PERSONAL STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Modern Profile Card layout */}
          <motion.div
            initial={{ opacity: 0, x: isUrdu ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative group mx-auto max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-40 blur-xl group-hover:opacity-70 transition duration-500" />
              
              <div className={`relative rounded-3xl p-6 sm:p-8 border overflow-hidden backdrop-blur-xl ${
                darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/95 border-slate-200 shadow-xl'
              }`}>
                <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-6 border border-indigo-500/20">
                  <img
                    src={portraitImg}
                    alt="Irfan Ullah"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                  <div className={`absolute bottom-4 left-4 right-4 text-white ${isUrdu ? 'text-right' : 'text-left'}`}>
                    <div className="text-xl font-bold">{t.home.name}</div>
                    <div className="text-xs text-cyan-300 font-mono">{t.home.role}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs py-2 border-b border-slate-200 dark:border-slate-800/40">
                    <span className="text-slate-600 dark:text-slate-400">{t.about.currentFocus}</span>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">{t.about.currentFocusValue}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2 border-b border-slate-200 dark:border-slate-800/40">
                    <span className="text-slate-600 dark:text-slate-400">{t.about.experience}</span>
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">{PERSONAL_INFO.experienceYears}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2 border-b border-slate-200 dark:border-slate-800/40">
                    <span className="text-slate-600 dark:text-slate-400">{t.about.availability}</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {t.about.availabilityValue}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2">
                    <span className="text-slate-600 dark:text-slate-400">{t.about.email}</span>
                    <span className="font-mono text-slate-700 dark:text-slate-300 truncate max-w-[190px]">{PERSONAL_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Bio & Info Grid */}
          <motion.div
            initial={{ opacity: 0, x: isUrdu ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-7 space-y-6 ${isUrdu ? 'text-right' : 'text-left'}`}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                {t.about.heading}
              </h2>
              <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {t.about.bioParagraph}
              </p>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ABOUT_INFO_CARDS.map((card, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all duration-200 ${
                    darkMode 
                      ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40' 
                      : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${card.color} text-white shadow-md`}>
                      {card.icon === 'User' && <User className="w-4 h-4" />}
                      {card.icon === 'Code2' && <Code2 className="w-4 h-4" />}
                      {card.icon === 'Cpu' && <Cpu className="w-4 h-4" />}
                      {card.icon === 'Sparkles' && <Sparkles className="w-4 h-4" />}
                      {card.icon === 'Target' && <Target className="w-4 h-4" />}
                      {card.icon === 'CheckCircle' && <CheckCircle className="w-4 h-4" />}
                    </div>
                    <div className={isUrdu ? 'text-right' : 'text-left'}>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400">
                        {card.label}
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {card.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className={`pt-4 flex flex-wrap items-center gap-4 ${isUrdu ? 'justify-end' : 'justify-start'}`}>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 shadow-lg shadow-indigo-600/30 hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>{t.about.contactBtn}</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('skills');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-6 py-3 rounded-xl text-xs font-bold border transition-colors flex items-center gap-2 cursor-pointer ${
                  darkMode ? 'border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800' : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>{t.about.skillsBtn}</span>
                <ArrowRight className={`w-4 h-4 text-indigo-400 ${isUrdu ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={() => {
                  onNavigate('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-6 py-3 rounded-xl text-xs font-bold border transition-colors flex items-center gap-2 cursor-pointer ${
                  darkMode ? 'border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800' : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>{t.about.portfolioBtn}</span>
                <FolderCheck className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 3. CORE VALUES & PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-mono mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.about.coreValuesBadge}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">{t.about.coreValuesTitle}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            {t.about.coreValuesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-3xl border transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                {val.icon === 'CheckCircle' && <CheckCircle className="w-5 h-5" />}
                {val.icon === 'Zap' && <Zap className="w-5 h-5" />}
                {val.icon === 'Code2' && <Code2 className="w-5 h-5" />}
                {val.icon === 'Rocket' && <Rocket className="w-5 h-5" />}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{val.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. DEVELOPER TOOLING & ENVIRONMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className={`p-8 sm:p-10 rounded-3xl border ${
          darkMode 
            ? 'bg-slate-900/80 border-slate-800 shadow-2xl' 
            : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800/60">
            <div className={isUrdu ? 'text-right' : 'text-left'}>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-1">{t.about.toolingBadge}</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.about.toolingTitle}</h2>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-slate-300">
              <Terminal className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              <span>Modern Toolchain</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEV_TOOLING.map((tool) => (
              <div
                key={tool.name}
                className={`p-5 rounded-2xl border transition-all ${
                  darkMode ? 'bg-slate-950/60 border-slate-800/80 hover:border-cyan-500/40' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{tool.name}</span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                    {tool.level}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 mb-1.5">{tool.category}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ANIMATED STATISTICS COUNTER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className={`p-8 sm:p-10 rounded-3xl border ${
          darkMode 
            ? 'bg-gradient-to-b from-slate-900/90 to-slate-950 border-indigo-900/40 shadow-2xl' 
            : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">{t.about.statsBadge}</h3>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.about.statsTitle}</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {STATS_DATA.map((stat) => (
              <div 
                key={stat.id}
                className={`p-6 rounded-2xl border text-center relative overflow-hidden group ${
                  darkMode ? 'bg-slate-900/50 border-slate-800/80 hover:border-indigo-500/40' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-3xl sm:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 mb-2">
                  <AnimatedCounter value={stat.value} />{stat.suffix}
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEARNING JOURNEY & MILESTONES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-mono mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.about.journeyBadge}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            {t.about.journeyTitle}
          </h2>
        </div>

        <div className="space-y-6">
          {JOURNEY_MILESTONES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-start gap-4 ${
                darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="px-3 py-1.5 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 font-mono text-xs font-bold shrink-0 border border-indigo-500/30">
                {item.year}
              </div>
              <div className={`space-y-1 ${isUrdu ? 'text-right' : 'text-left'}`}>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
