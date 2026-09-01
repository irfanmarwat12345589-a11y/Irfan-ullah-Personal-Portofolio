import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Laptop, 
  Sparkles, 
  Search, 
  FileCode, 
  Palette, 
  Zap, 
  Smartphone, 
  Layout, 
  Globe, 
  Monitor, 
  Atom, 
  FileText, 
  Presentation, 
  Table, 
  Mail, 
  HardDrive, 
  FolderTree, 
  Sliders, 
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Filter,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { WEB_DEV_SKILLS, COMPUTER_SKILLS } from '../data/portfolioData';
import { PageType, SkillItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ProfileHeaderBanner } from '../components/ProfileHeaderBanner';

interface SkillsPageProps {
  darkMode: boolean;
  onNavigate: (page: PageType) => void;
}

// Icon helper
const renderSkillIcon = (iconName: string, className = "w-5 h-5") => {
  switch (iconName) {
    case 'FileCode': return <FileCode className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Smartphone': return <Smartphone className={className} />;
    case 'Layout': return <Layout className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Monitor': return <Monitor className={className} />;
    case 'Atom': return <Atom className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'Presentation': return <Presentation className={className} />;
    case 'Table': return <Table className={className} />;
    case 'Mail': return <Mail className={className} />;
    case 'HardDrive': return <HardDrive className={className} />;
    case 'FolderTree': return <FolderTree className={className} />;
    case 'Sliders': return <Sliders className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export const SkillsPage: React.FC<SkillsPageProps> = ({ darkMode, onNavigate }) => {
  const { t, isUrdu } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'computer'>('all');

  const filteredWebSkills = WEB_DEV_SKILLS.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.tags.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredComputerSkills = COMPUTER_SKILLS.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.tags.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div id="skills-page" className="relative z-10 pt-28 sm:pt-32 pb-24 overflow-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ProfileHeaderBanner darkMode={darkMode} />
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-mono"
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            {t.skills.title}{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              {t.skills.titleHighlight}
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
            {t.skills.subtitle}
          </motion.p>
        </div>

        {/* Search and Category Filter Toolbar */}
        <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          {/* Search Box */}
          <div className="relative w-full">
            <Search className={`w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ${isUrdu ? 'right-4' : 'left-4'}`} />
            <input
              type="text"
              placeholder={t.skills.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full py-3 rounded-2xl border text-sm focus:outline-none transition-all ${
                isUrdu ? 'pr-11 pl-10 text-right' : 'pl-11 pr-10'
              } ${
                darkMode 
                  ? 'bg-slate-900/80 border-slate-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20' 
                  : 'bg-white border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 shadow-sm'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute top-1/2 -translate-y-1/2 text-xs font-mono px-2 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer ${
                  isUrdu ? 'left-3' : 'right-3'
                }`}
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/60 shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.skills.tabAll} ({WEB_DEV_SKILLS.length + COMPUTER_SKILLS.length})
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'web' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.skills.tabWeb} ({WEB_DEV_SKILLS.length})
            </button>
            <button
              onClick={() => setActiveTab('computer')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'computer' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.skills.tabComputer} ({COMPUTER_SKILLS.length})
            </button>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY 1: WEB DEVELOPMENT SKILLS */}
      {(activeTab === 'all' || activeTab === 'web') && filteredWebSkills.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className={`flex items-center gap-3 mb-8 border-b border-slate-200 dark:border-slate-800/60 pb-4 ${isUrdu ? 'flex-row-reverse text-right' : ''}`}>
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-md shadow-cyan-500/20">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {t.skills.webTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {t.skills.webSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredWebSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  darkMode 
                    ? 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10' 
                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xl'
                }`}
              >
                {/* Glowing border accent on hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Skill Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      {renderSkillIcon(skill.iconName)}
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold font-mono text-cyan-600 dark:text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3 className={`text-lg font-bold text-slate-900 dark:text-white mb-1.5 ${isUrdu ? 'text-right' : 'text-left'}`}>
                    {skill.name}
                  </h3>
                  
                  <p className={`text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 min-h-[36px] ${isUrdu ? 'text-right' : 'text-left'}`}>
                    {skill.description}
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                      <span>{t.skills.proficiency}</span>
                      <span className="text-indigo-600 dark:text-indigo-400">{skill.highlight}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800/40 mt-auto">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950/60 group-hover:text-indigo-700 dark:group-hover:text-indigo-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 3. CATEGORY 2: COMPUTER SKILLS */}
      {(activeTab === 'all' || activeTab === 'computer') && filteredComputerSkills.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className={`flex items-center gap-3 mb-8 border-b border-slate-200 dark:border-slate-800/60 pb-4 ${isUrdu ? 'flex-row-reverse text-right' : ''}`}>
            <div className="p-2.5 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white shadow-md shadow-purple-500/20">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {t.skills.compTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {t.skills.compSubtitle}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredComputerSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  darkMode 
                    ? 'bg-slate-900/70 border-slate-800 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10' 
                    : 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-xl'
                }`}
              >
                {/* Glowing border accent on hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Skill Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                      {renderSkillIcon(skill.iconName)}
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold font-mono text-purple-600 dark:text-purple-400">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3 className={`text-lg font-bold text-slate-900 dark:text-white mb-1.5 ${isUrdu ? 'text-right' : 'text-left'}`}>
                    {skill.name}
                  </h3>
                  
                  <p className={`text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 min-h-[36px] ${isUrdu ? 'text-right' : 'text-left'}`}>
                    {skill.description}
                  </p>

                  {/* Animated Progress Bar */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                      <span>{t.skills.proficiency}</span>
                      <span className="text-purple-600 dark:text-purple-400">{skill.highlight}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-800/40 mt-auto">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent group-hover:bg-purple-100 dark:group-hover:bg-purple-950/60 group-hover:text-purple-700 dark:group-hover:text-purple-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 4. PRACTICAL COMPETENCIES CHECKLIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className={`p-8 sm:p-10 rounded-3xl border ${
          darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-lg'
        }`}>
          <div className={`max-w-3xl mb-8 ${isUrdu ? 'text-right' : 'text-left'}`}>
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1">{t.skills.checklistBadge}</span>
            <h3 className="text-2xl font-extrabold tracking-tight">{t.skills.checklistTitle}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {t.skills.checklistDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Semantic HTML5 Markup", desc: "Structured headings, native form controls, and accessibility (WCAG AA)." },
              { title: "Mobile-First CSS Architecture", desc: "Fluid breakpoints, Flexbox/Grid systems, and zero horizontal scrolling." },
              { title: "Clean ES6+ JavaScript", desc: "Modular functions, async/await data handling, and strict error checking." },
              { title: "Excel Dashboard Automation", desc: "Automated calculation models, Pivot Tables, and visual chart synchronization." },
              { title: "Master Slide Presentations", desc: "Custom themes, typography hierarchies, and cohesive infographic layouts." },
              { title: "Structured File Hygiene", desc: "Systematic directory trees, safe cloud backups, and version control commits." }
            ].map((check, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <div className={isUrdu ? 'text-right' : 'text-left'}>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-0.5">{check.title}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{check.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SKILLS SUMMARY & NEXT STEPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`p-8 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
          darkMode ? 'bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-slate-900 border-indigo-900/40' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className={`space-y-2 text-center ${isUrdu ? 'md:text-right' : 'md:text-left'}`}>
            <h3 className="text-xl font-bold">{t.skills.ctaTitle}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              {t.skills.ctaDesc}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                onNavigate('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition-transform shadow-lg shadow-indigo-600/25 shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>{t.skills.ctaExplore}</span>
              <ArrowRight className={`w-4 h-4 ${isUrdu ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded-2xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors shrink-0 cursor-pointer"
            >
              {t.skills.ctaDiscuss}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
