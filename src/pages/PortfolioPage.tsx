import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Eye, 
  ArrowRight,
  Code2,
  Laptop,
  CheckCircle,
  Search,
  SlidersHorizontal,
  TrendingUp,
  Cpu,
  MonitorCheck
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { PageType, Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Tooltip } from '../components/Tooltip';
import { ProfileHeaderBanner } from '../components/ProfileHeaderBanner';

interface PortfolioPageProps {
  darkMode: boolean;
  onNavigate: (page: PageType) => void;
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'All Projects' | 'Web Development' | 'Website Design' | 'Computer Projects' | 'Practice Projects';

// Staggered motion variants for smooth sequential sliding & fading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 35, 
    scale: 0.96 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.45, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 15,
    transition: { 
      duration: 0.2 
    } 
  }
};

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ darkMode, onNavigate, onSelectProject }) => {
  const { t, isUrdu } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All Projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories: { id: FilterCategory; label: string }[] = [
    { id: 'All Projects', label: t.portfolio.catAll },
    { id: 'Web Development', label: t.portfolio.catWeb },
    { id: 'Website Design', label: t.portfolio.catDesign },
    { id: 'Computer Projects', label: t.portfolio.catComputer },
    { id: 'Practice Projects', label: t.portfolio.catPractice }
  ];

  // Extract all unique technology tags across projects
  const allTags = useMemo(() => {
    const set = new Set<string>();
    PROJECTS_DATA.forEach(p => p.tags.forEach(t => set.add(t)));
    return Array.from(set).slice(0, 10);
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter(p => {
      const matchCategory = activeCategory === 'All Projects' || p.category === activeCategory;
      const matchSearch = searchQuery === '' || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchTag = !selectedTag || p.tags.includes(selectedTag);
      return matchCategory && matchSearch && matchTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  return (
    <div id="portfolio-page" className="relative z-10 pt-28 sm:pt-32 pb-24 overflow-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ProfileHeaderBanner darkMode={darkMode} />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-mono"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t.portfolio.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            {t.portfolio.title}{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              {t.portfolio.titleHighlight}
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
            {t.portfolio.subtitle}
          </motion.p>
        </div>

        {/* Project Statistics Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-8 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {[
            { label: t.portfolio.statTotal, value: '25+', sub: 'Web, UI & Tools', icon: <FolderGit2 className="w-4 h-4 text-cyan-500 dark:text-cyan-400" /> },
            { label: t.portfolio.statResponsive, value: '100%', sub: 'Mobile & Tablet Ready', icon: <MonitorCheck className="w-4 h-4 text-indigo-500 dark:text-indigo-400" /> },
            { label: t.portfolio.statCode, value: 'W3C / ES6', sub: 'Semantic & Modular', icon: <Code2 className="w-4 h-4 text-purple-500 dark:text-purple-400" /> },
            { label: t.portfolio.statOffice, value: 'Word/Excel', sub: 'Templates & Pivot Data', icon: <Cpu className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> }
          ].map((metric, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-2xl border text-center transition-all ${
                darkMode ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                {metric.icon}
                <span className="text-base sm:text-lg font-extrabold font-mono text-slate-900 dark:text-white">
                  {metric.value}
                </span>
              </div>
              <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{metric.label}</div>
              <div className="text-[10px] text-slate-600 dark:text-slate-400">{metric.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Search & Tag Filter Toolbar */}
        <div className="mt-8 max-w-4xl mx-auto space-y-4">
          
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className={`w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ${isUrdu ? 'right-4' : 'left-4'}`} />
            <input
              type="text"
              placeholder={t.portfolio.searchPlaceholder}
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
                className={`absolute top-1/2 -translate-y-1/2 text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 hover:text-white cursor-pointer ${
                  isUrdu ? 'left-3' : 'right-3'
                }`}
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'All Projects' 
                ? PROJECTS_DATA.length 
                : PROJECTS_DATA.filter(p => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedTag(null);
                  }}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : darkMode
                      ? 'text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                      : 'text-slate-600 hover:text-black bg-white border border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 shadow-lg shadow-indigo-600/30"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span>{cat.label}</span>
                    <span className={`text-[11px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/25 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Tag Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
            <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1 mr-1">
              <SlidersHorizontal className="w-3 h-3" /> {t.portfolio.techFilter}
            </span>
            {allTags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(isSelected ? null : tag)}
                  className={`text-[10px] font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-sm'
                      : darkMode
                      ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="text-[10px] font-mono px-2 py-0.5 rounded text-rose-500 dark:text-rose-400 hover:underline cursor-pointer"
              >
                {t.portfolio.resetTag}
              </button>
            )}
          </div>

        </div>
      </section>

      {/* 2. PROJECT GALLERY GRID WITH STAGGERED ENTRANCE ANIMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The motion container orchestrates staggered sequential loading */}
        <motion.div 
          key={`${activeCategory}-${selectedTag}-${searchQuery}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group rounded-3xl overflow-hidden border transition-all duration-500 relative flex flex-col justify-between ${
                darkMode 
                  ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/20' 
                  : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-2xl'
              }`}
            >
              {/* Glowing top accent line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <div>
                {/* Image Container with Zoom & Floating Pill */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                  
                  {/* Category pill */}
                  <div className={`absolute top-3 ${isUrdu ? 'left-3' : 'right-3'} px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-950/85 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-md`}>
                    {project.category}
                  </div>

                  {/* Year badge */}
                  <div className={`absolute top-3 ${isUrdu ? 'right-3' : 'left-3'} px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-950/80 text-indigo-300 border border-indigo-500/30`}>
                    {project.date || '2025'}
                  </div>

                  {/* Quick view hover button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-xs">
                    <Tooltip content="Open full project preview & case study" position="top">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-4 py-2.5 rounded-xl bg-indigo-600/90 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        <span>{t.portfolio.viewCaseStudy}</span>
                      </button>
                    </Tooltip>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Key Features Bullet List */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-4 space-y-1 text-xs">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                        <CheckCircle className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                        <span>{t.portfolio.highlights}</span>
                      </div>
                      <p className="line-clamp-2 pl-4 text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                        {project.features[0]}
                      </p>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTag(tag);
                        }}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent hover:bg-indigo-100 dark:hover:bg-indigo-900/60 hover:text-indigo-700 dark:hover:text-indigo-200 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-200 dark:border-slate-800/40 mt-auto">
                <Tooltip content="Explore architecture, tech stack & highlights" position="top">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{t.portfolio.projectBreakdown}</span>
                    <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isUrdu ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </button>
                </Tooltip>

                {project.githubUrl && (
                  <Tooltip content="View source code on GitHub" position="top" badge="GitHub">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-600 text-slate-700 dark:text-slate-300 hover:text-white border border-slate-200 dark:border-transparent transition-all duration-200 cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Tooltip>
                )}
              </div>

            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 space-y-3">
            <FolderGit2 className="w-12 h-12 text-slate-500 mx-auto" />
            <h4 className="text-lg font-bold">{t.portfolio.noProjectsFound}</h4>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              {t.portfolio.noProjectsDesc}
            </p>
            <button
              onClick={() => {
                setActiveCategory('All Projects');
                setSearchQuery('');
                setSelectedTag(null);
              }}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer"
            >
              {t.portfolio.resetFilters}
            </button>
          </div>
        )}
      </section>

      {/* 3. BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className={`p-8 sm:p-12 rounded-3xl border text-center relative overflow-hidden backdrop-blur-xl ${
          darkMode 
            ? 'bg-gradient-to-r from-indigo-950/60 via-purple-950/60 to-slate-900 border-indigo-900/40 shadow-2xl' 
            : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block">{t.portfolio.ctaBadge}</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.portfolio.ctaTitle}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              {t.portfolio.ctaDesc}
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:scale-105 transition-transform shadow-lg shadow-indigo-600/30 cursor-pointer"
              >
                {t.portfolio.ctaStart}
              </button>
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-2xl text-xs font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
              >
                {t.portfolio.ctaExplore}
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
