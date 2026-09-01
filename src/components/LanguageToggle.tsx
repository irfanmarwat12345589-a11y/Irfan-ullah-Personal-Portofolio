import React from 'react';
import { motion } from 'motion/react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Tooltip } from './Tooltip';

interface LanguageToggleProps {
  darkMode: boolean;
  compact?: boolean;
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  darkMode,
  compact = false,
  className = ''
}) => {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  return (
    <div
      id="language-toggle-container"
      className={`relative inline-flex items-center p-1 rounded-2xl border transition-all duration-300 ${
        darkMode
          ? 'bg-slate-900/90 border-slate-700/80 shadow-inner'
          : 'bg-white/90 border-slate-200/90 shadow-sm'
      } ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <div className="flex items-center gap-1">
        {/* English Button */}
        <Tooltip content="Switch language to English" position="bottom" badge="EN">
          <button
            type="button"
            id="lang-btn-en"
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            aria-label="Switch to English"
            className={`relative px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl text-xs font-bold font-mono tracking-wider transition-all duration-200 focus:outline-none cursor-pointer flex items-center gap-1 ${
              language === 'en'
                ? 'text-white'
                : darkMode
                ? 'text-slate-400 hover:text-slate-200'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {language === 'en' && (
              <motion.div
                layoutId="activeLanguagePill"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-md shadow-indigo-500/30"
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1">
              <span className="text-[11px]">EN</span>
            </span>
          </button>
        </Tooltip>

        {/* Divider / Toggle Icon */}
        <Tooltip content={language === 'en' ? 'اردو میں تبدیل کریں' : 'Switch to English'} position="bottom">
          <button
            type="button"
            onClick={toggleLanguage}
            className={`p-1 rounded-lg transition-colors cursor-pointer ${
              darkMode ? 'text-indigo-400 hover:text-cyan-300' : 'text-indigo-600 hover:text-indigo-800'
            }`}
            aria-label="Toggle language"
          >
            <Languages className="w-3.5 h-3.5" />
          </button>
        </Tooltip>

        {/* Urdu Button */}
        <Tooltip content="اردو زبان منتخب کریں" position="bottom" badge="UR">
          <button
            type="button"
            id="lang-btn-ur"
            onClick={() => setLanguage('ur')}
            aria-pressed={language === 'ur'}
            aria-label="اردو میں تبدیل کریں"
            className={`relative px-2.5 py-1 sm:px-3 sm:py-1 rounded-xl text-xs font-bold transition-all duration-200 focus:outline-none cursor-pointer flex items-center gap-1 ${
              language === 'ur'
                ? 'text-white'
                : darkMode
                ? 'text-slate-400 hover:text-slate-200'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {language === 'ur' && (
              <motion.div
                layoutId="activeLanguagePill"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-md shadow-purple-500/30"
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
              />
            )}
            <span className="relative z-10 font-bold font-sans text-xs">
              اردو
            </span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
};
