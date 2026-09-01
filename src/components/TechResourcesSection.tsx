import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Sparkles,
  Search,
  RefreshCw,
  ExternalLink,
  BookOpen,
  Clock,
  Tag,
  CheckCircle2,
  Share2,
  ChevronRight,
  Layers,
  Code2,
  Cpu,
  Palette,
  Server,
  Link2,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TechArticle, TechResourcesResponse } from '../types';
import { Tooltip } from './Tooltip';

interface TechResourcesSectionProps {
  darkMode?: boolean;
}

export const TechResourcesSection: React.FC<TechResourcesSectionProps> = ({ darkMode = true }) => {
  const { t, isUrdu } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeQuery, setActiveQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resourcesData, setResourcesData] = useState<TechResourcesResponse | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showSourcesModal, setShowSourcesModal] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const topicTabs = [
    { id: 'all', label: t.resources.tabAll, icon: Layers },
    { id: 'web-dev', label: t.resources.tabWebDev, icon: Code2 },
    { id: 'ai-tools', label: t.resources.tabAi, icon: Cpu },
    { id: 'typescript', label: t.resources.tabTypescript, icon: Code2 },
    { id: 'ui-ux', label: t.resources.tabUiUx, icon: Palette },
    { id: 'devops', label: t.resources.tabDevOps, icon: Server },
  ];

  const [clientCache, setClientCache] = useState<Record<string, TechResourcesResponse>>({});

  const fetchTechResources = async (topic: string, query?: string, forceRefresh = false) => {
    const key = `${topic}:${(query || '').trim().toLowerCase()}`;
    if (!forceRefresh && clientCache[key]) {
      setResourcesData(clientCache[key]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setFetchError(null);
    try {
      const response = await fetch('/api/tech-resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, query: query || '' }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data: TechResourcesResponse = await response.json();
      setResourcesData(data);
      setClientCache((prev) => ({ ...prev, [key]: data }));
    } catch (err: any) {
      console.warn('Failed to load grounded resources:', err);
      setFetchError(err?.message || 'Error fetching resources');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTechResources(selectedTopic, activeQuery);
  }, [selectedTopic, activeQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveQuery(searchQuery.trim());
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setActiveQuery('');
    setSelectedTopic('all');
  };

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="resources"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 1. SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
          <span>{t.resources.badge}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-100"
        >
          {t.resources.title}{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t.resources.titleHighlight}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed"
        >
          {t.resources.subtitle}
        </motion.p>
      </div>

      {/* 2. SEARCH & GROUNDING STATUS CONTROL BAR */}
      <div
        className={`p-4 sm:p-5 rounded-3xl border mb-8 transition-all ${
          darkMode
            ? 'bg-slate-900/80 border-slate-800 shadow-2xl backdrop-blur-xl'
            : 'bg-white border-slate-200 shadow-lg'
        }`}
      >
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Search Bar Form */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex-1 flex items-center"
          >
            <div className={`absolute ${isUrdu ? 'right-3.5' : 'left-3.5'} text-slate-400 pointer-events-none`}>
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.resources.searchPlaceholder}
              className={`w-full ${
                isUrdu ? 'pr-10 pl-24 text-right' : 'pl-10 pr-24 text-left'
              } py-3 rounded-2xl text-xs sm:text-sm font-medium border transition-all focus:outline-none ${
                darkMode
                  ? 'bg-slate-950/70 border-slate-700/80 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500'
                  : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600'
              }`}
            />
            <Tooltip content="Perform real-time Google search for tech trends" position="top">
              <button
                type="submit"
                className={`absolute ${
                  isUrdu ? 'left-1.5' : 'right-1.5'
                } px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1.5`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{t.resources.searchBtn}</span>
              </button>
            </Tooltip>
          </form>

          {/* Status Indicators and Controls */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-3">
            {/* Grounding Active Badge */}
            <Tooltip content="Powered by live Google Search grounding" position="top" badge="Grounding">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="truncate max-w-[200px] sm:max-w-none">
                  {t.resources.groundingActive}
                </span>
              </div>
            </Tooltip>

            {/* Model Tag */}
            <Tooltip content="Gemini 3.7 Flash AI Model Engine" position="top">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono cursor-default">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                <span>Gemini 3.7 Flash</span>
              </div>
            </Tooltip>

            {/* Refresh Button */}
            <Tooltip content="Fetch fresh updates and trends" position="top" badge="Refresh">
              <button
                onClick={() => fetchTechResources(selectedTopic, activeQuery, true)}
                disabled={isLoading}
                aria-label={t.resources.refreshBtn}
                className={`p-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  darkMode
                    ? 'bg-slate-800/80 border-slate-700 hover:bg-slate-700 text-slate-200'
                    : 'bg-slate-100 border-slate-300 hover:bg-slate-200 text-slate-800'
                }`}
              >
                <RefreshCw
                  className={`w-4 h-4 text-cyan-400 ${isLoading ? 'animate-spin' : ''}`}
                />
                <span className="hidden md:inline">{t.resources.refreshBtn}</span>
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Active Query Banner (if user searched) */}
        {activeQuery && (
          <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <Tag className="w-3.5 h-3.5" />
              <span>{t.resources.customQueryTag}:</span>
              <span className="px-2.5 py-0.5 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-200 font-semibold">
                "{activeQuery}"
              </span>
            </div>
            <button
              onClick={handleClearSearch}
              className="text-xs text-rose-400 hover:text-rose-300 font-medium underline underline-offset-2 cursor-pointer"
            >
              {isUrdu ? 'فلٹر ختم کریں' : 'Clear search'}
            </button>
          </div>
        )}
      </div>

      {/* 3. TOPIC CATEGORY TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
        {topicTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = selectedTopic === tab.id && !activeQuery;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveQuery('');
                setSearchQuery('');
                setSelectedTopic(tab.id);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-cyan-600/20 scale-102'
                  : darkMode
                  ? 'bg-slate-900/80 border border-slate-800/80 text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-200' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 4. AI GROUNDING SYNTHESIS OVERVIEW CARD */}
      {resourcesData?.topicSummary && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-5 sm:p-6 rounded-3xl border mb-10 transition-all ${
            darkMode
              ? 'bg-gradient-to-br from-indigo-950/40 via-slate-900/90 to-cyan-950/30 border-indigo-500/30 shadow-xl'
              : 'bg-gradient-to-br from-indigo-50 via-white to-cyan-50 border-indigo-200 shadow-md'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-100 dark:text-white">
                  {t.resources.aiSynthesisTitle}
                </h3>
                <span className="text-[11px] font-mono text-cyan-400">
                  {t.resources.verifiedByGoogle}
                </span>
              </div>
            </div>

            {/* Citations Count pill */}
            {resourcesData.groundingChunks && resourcesData.groundingChunks.length > 0 && (
              <Tooltip content={showSourcesModal ? 'Hide citation sources' : 'View live Google search citations'} position="left" badge="Sources">
                <button
                  onClick={() => setShowSourcesModal(!showSourcesModal)}
                  className="px-3 py-1.5 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 text-indigo-300 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Link2 className="w-3.5 h-3.5" />
                  <span>
                    {resourcesData.groundingChunks.length} {t.resources.groundedSources}
                  </span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      showSourcesModal ? 'rotate-90' : ''
                    }`}
                  />
                </button>
              </Tooltip>
            )}
          </div>

          <p className={`text-xs sm:text-sm leading-relaxed ${isUrdu ? 'text-right' : 'text-left'} ${
            darkMode ? 'text-slate-300' : 'text-slate-700'
          }`}>
            {resourcesData.topicSummary}
          </p>

          {/* Expandable Grounded Sources Drawer */}
          <AnimatePresence>
            {showSourcesModal && resourcesData.groundingChunks && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-indigo-500/20 overflow-hidden"
              >
                <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                  {t.resources.liveSearchCitations}:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {resourcesData.groundingChunks.map((chunk, idx) => (
                    <a
                      key={idx}
                      href={chunk.web?.uri || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-xl border text-xs flex items-center justify-between gap-2 group transition-all ${
                        darkMode
                          ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800'
                          : 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-slate-50'
                      }`}
                    >
                      <span className="font-mono text-slate-300 group-hover:text-cyan-400 truncate text-[11px]">
                        {chunk.web?.title || chunk.web?.uri}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 shrink-0" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* 5. MAIN ARTICLES CONTENT GRID */}
      {isLoading ? (
        <div className="py-16 text-center">
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 animate-spin-slow flex items-center justify-center p-0.5 shadow-xl shadow-indigo-600/30">
              <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
                <Globe className="w-7 h-7 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>
          <h4 className="text-lg font-bold text-slate-100">{t.resources.loadingTitle}</h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md mx-auto">
            {t.resources.loadingDesc}
          </p>
        </div>
      ) : fetchError && (!resourcesData || resourcesData.articles.length === 0) ? (
        <div className="text-center py-12 p-8 rounded-3xl border border-rose-500/20 bg-rose-500/5">
          <AlertCircle className="w-10 h-10 text-rose-400 mx-auto mb-3" />
          <h4 className="text-base font-bold text-rose-300">{t.resources.noArticlesFound}</h4>
          <p className="text-xs text-slate-400 mt-1 mb-4">{t.resources.noArticlesDesc}</p>
          <button
            onClick={() => fetchTechResources('all')}
            className="px-5 py-2.5 rounded-xl bg-slate-800 text-xs font-bold text-slate-200 hover:bg-slate-700 cursor-pointer"
          >
            {t.resources.refreshBtn}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData?.articles.map((article: TechArticle, index: number) => (
            <motion.article
              key={article.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`group flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800/80 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10'
                  : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shrink-0">
                      {article.category || 'Tech'}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 truncate">
                      {article.sourceName}
                    </span>
                  </div>

                  <Tooltip content={copiedId === article.id ? 'Copied to clipboard!' : 'Copy article URL'} position="left" badge="Copy">
                    <button
                      onClick={() => handleCopyLink(article.url, article.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors shrink-0 cursor-pointer"
                      aria-label="Copy Article Link"
                    >
                      {copiedId === article.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </Tooltip>
                </div>

                {/* Article Title */}
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/title"
                >
                  <h3 className={`text-base sm:text-lg font-extrabold tracking-tight mb-3 text-slate-100 group-hover/title:text-cyan-400 transition-colors line-clamp-2 ${isUrdu ? 'text-right' : 'text-left'}`}>
                    {article.title}
                  </h3>
                </a>

                {/* Snippet */}
                <p className={`text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3 ${isUrdu ? 'text-right' : 'text-left'}`}>
                  {article.snippet}
                </p>

                {/* Key Takeaways */}
                {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                  <div className={`p-3.5 rounded-2xl mb-4 border ${
                    darkMode ? 'bg-slate-950/60 border-slate-800/60' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className={`text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5 ${isUrdu ? 'justify-end' : 'justify-start'}`}>
                      <Sparkles className="w-3 h-3 text-indigo-400" />
                      <span>{t.resources.keyTakeaways}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {article.keyTakeaways.slice(0, 2).map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className={`text-xs text-slate-300 flex items-start gap-2 ${isUrdu ? 'flex-row-reverse text-right' : 'text-left'}`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card Footer: Metadata & Action CTA */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {article.readTime || '5 min'}
                  </span>
                  <span>•</span>
                  <span>{article.publishedDate || 'Recent'}</span>
                </div>

                <Tooltip content={`Read full article on ${article.sourceName || 'external website'}`} position="top" badge="External">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/btn cursor-pointer"
                  >
                    <span>{t.resources.readArticle}</span>
                    <ExternalLink className={`w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform ${isUrdu ? 'rotate-180' : ''}`} />
                  </a>
                </Tooltip>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
};
