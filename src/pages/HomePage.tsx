import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Code2, 
  Laptop, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Rocket, 
  Download,
  FolderGit2,
  Terminal,
  Layers,
  Award,
  Globe,
  Cpu,
  MonitorCheck
} from 'lucide-react';
import { ProfileCard } from '../components/ProfileCard';
import { TechResourcesSection } from '../components/TechResourcesSection';
import { PERSONAL_INFO, STATS_DATA, PROJECTS_DATA, WEB_DEV_SKILLS, COMPUTER_SKILLS } from '../data/portfolioData';
import { PageType, Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Tooltip } from '../components/Tooltip';

interface HomePageProps {
  darkMode: boolean;
  onNavigate: (page: PageType) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ darkMode, onNavigate, onSelectProject }) => {
  const { t, isUrdu } = useLanguage();

  return (
    <div id="home-page" className="relative z-10 pt-28 sm:pt-32 pb-24 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(80vh-80px)]">
          
          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, x: isUrdu ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`lg:col-span-7 space-y-6 text-center ${isUrdu ? 'lg:text-right' : 'lg:text-left'}`}
          >
            {/* Top Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-indigo-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-indigo-300 font-mono">
                {t.home.greeting}
              </span>
            </motion.div>

            {/* Main Name Heading with Futuristic Glow */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="block text-slate-100 dark:text-white">
                  {t.home.name}
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  {t.home.role}
                </span>
              </h1>
              
              <div className={`text-sm sm:text-base md:text-lg font-semibold text-slate-400 dark:text-slate-300 flex flex-wrap items-center justify-center ${isUrdu ? 'lg:justify-end' : 'lg:justify-start'} gap-2 pt-1 font-mono`}>
                <span className="text-indigo-400">{t.home.rolesList[0]}</span>
                <span className="text-slate-600">|</span>
                <span className="text-cyan-400">{t.home.rolesList[1]}</span>
                <span className="text-slate-600">|</span>
                <span className="text-purple-400">{t.home.rolesList[2]}</span>
              </div>
            </div>

            {/* Introduction Paragraph */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${isUrdu ? 'lg:mr-0' : 'lg:ml-0'} ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              "{t.home.intro}"
            </p>

            {/* Call to Action Buttons */}
            <div className={`pt-4 flex flex-col sm:flex-row items-center justify-center ${isUrdu ? 'lg:justify-end' : 'lg:justify-start'} gap-4`}>
              
              {/* Button 1: View My Portfolio */}
              <Tooltip content="Explore 25+ featured projects, live demos & code" position="bottom" badge="Projects">
                <button
                  id="hero-view-portfolio-btn"
                  onClick={() => {
                    onNavigate('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto relative group px-8 py-4 rounded-2xl text-sm font-bold text-white overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/60 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute -inset-1 opacity-0 group-hover:opacity-60 bg-gradient-to-r from-cyan-400 to-purple-500 blur-lg transition-opacity duration-300 -z-10" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>{t.home.viewPortfolio}</span>
                    <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isUrdu ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </span>
                </button>
              </Tooltip>

              {/* Button 2: Contact Me */}
              <Tooltip content="Get in touch for freelance work or collaboration" position="bottom" badge="Contact">
                <button
                  id="hero-contact-btn"
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold border transition-all duration-300 focus:outline-none cursor-pointer flex items-center justify-center gap-2 ${
                    darkMode
                      ? 'border-indigo-500/40 bg-slate-900/80 text-indigo-300 hover:bg-indigo-950/60 hover:border-indigo-400 hover:text-white shadow-lg shadow-indigo-950/30'
                      : 'border-indigo-300 bg-white/90 text-indigo-800 hover:bg-indigo-50 hover:border-indigo-500 shadow-md'
                  } hover:scale-[1.02] active:scale-[0.98]`}
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{t.home.contactMe}</span>
                </button>
              </Tooltip>

              {/* Button 3: Explore Skills */}
              <Tooltip content="View full technical skills matrix & certifications" position="bottom">
                <button
                  onClick={() => {
                    onNavigate('skills');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {t.home.technicalSkills}
                </button>
              </Tooltip>
            </div>

            {/* Quick trust metrics / badges */}
            <div className={`pt-6 grid grid-cols-3 gap-3 max-w-lg mx-auto ${isUrdu ? 'lg:mr-0' : 'lg:ml-0'} border-t border-slate-300 dark:border-slate-700/40`}>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">{t.home.statResponsive}</span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400">{t.home.statResponsiveDesc}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">{t.home.statProjects}</span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400">{t.home.statProjectsDesc}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-purple-600 dark:text-purple-400 font-mono">{t.home.statSkills}</span>
                <span className="text-[11px] text-slate-600 dark:text-slate-400">{t.home.statSkillsDesc}</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Profile Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: isUrdu ? -40 : 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <ProfileCard darkMode={darkMode} variant="hero" />
          </motion.div>

        </div>
      </section>

      {/* 2. STATS COUNTER STRIP */}
      <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl ${
          darkMode 
            ? 'bg-slate-900/70 border-indigo-900/40 shadow-2xl shadow-indigo-950/40' 
            : 'bg-white/80 border-slate-200/90 shadow-xl'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STATS_DATA.map((stat, i) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group cursor-pointer"
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-[180px] mx-auto hidden sm:block">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED HIGHLIGHTS GRID */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.home.whyWorkTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.home.whyWorkSubtitle}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            {t.home.whyWorkDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Web Development */}
          <motion.div
            whileHover={{ y: -6 }}
            onClick={() => {
              onNavigate('skills');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
              darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10' : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-lg'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px] mb-5">
              <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2 flex items-center justify-between">
              <span>{t.home.card1Title}</span>
              <ArrowRight className={`w-4 h-4 text-slate-500 ${isUrdu ? 'rotate-180' : ''}`} />
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {t.home.card1Desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['HTML5', 'CSS3', 'JavaScript', 'Responsive'].map(item => (
                <span key={item} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">{item}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Computer Mastery */}
          <motion.div
            whileHover={{ y: -6 }}
            onClick={() => {
              onNavigate('skills');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
              darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10' : 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-lg'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-500 p-[2px] mb-5">
              <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                <Laptop className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2 flex items-center justify-between">
              <span>{t.home.card2Title}</span>
              <ArrowRight className={`w-4 h-4 text-slate-500 ${isUrdu ? 'rotate-180' : ''}`} />
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {t.home.card2Desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Word', 'PowerPoint', 'Excel', 'File Mgmt'].map(item => (
                <span key={item} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">{item}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Futuristic UI */}
          <motion.div
            whileHover={{ y: -6 }}
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
              darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10' : 'bg-white border-slate-200 hover:border-cyan-300 hover:shadow-lg'
            }`}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 p-[2px] mb-5">
              <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2 flex items-center justify-between">
              <span>{t.home.card3Title}</span>
              <ArrowRight className={`w-4 h-4 text-slate-500 ${isUrdu ? 'rotate-180' : ''}`} />
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {t.home.card3Desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['UI Design', 'Glassmorphism', 'Dark Mode', 'Animations'].map(item => (
                <span key={item} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">{item}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 4. FEATURED PROJECTS PREVIEW TEASER */}
      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">{t.home.featuredTitle}</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.home.featuredSubtitle}
            </h2>
          </div>
          <button
            onClick={() => {
              onNavigate('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors group cursor-pointer"
          >
            <span>{t.home.exploreAllProjects}</span>
            <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isUrdu ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS_DATA.slice(0, 4).map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              onClick={() => onSelectProject(project)}
              className={`group rounded-3xl overflow-hidden border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10' : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xl'
              }`}
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold mb-1.5 group-hover:text-indigo-400 transition-colors line-clamp-1 text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">
                    {project.shortDesc}
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5">
                <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-slate-800/40">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent">{tag}</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-indigo-600 dark:text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{t.home.projectDetails}</span>
                    <ArrowRight className={`w-3 h-3 ${isUrdu ? 'rotate-180' : ''}`} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. LIVE GROUNDED TECH ARTICLES & RESOURCES SECTION */}
      <TechResourcesSection darkMode={darkMode} />

      {/* 6. CALL TO ACTION BANNER */}
      <section className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-indigo-500/40 bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-slate-950/90 backdrop-blur-xl shadow-2xl text-center">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {t.home.ctaTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {t.home.ctaDesc}
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:scale-105 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
              >
                {t.home.ctaTalk}
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-2xl text-sm font-bold text-slate-200 border border-white/20 hover:bg-white/10 transition-all cursor-pointer"
              >
                {t.home.ctaLearnMore}
              </button>
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-2xl text-sm font-bold text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/10 transition-all cursor-pointer"
              >
                {t.home.ctaExploreServices}
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
