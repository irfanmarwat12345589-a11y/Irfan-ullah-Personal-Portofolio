import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Code2, CheckCircle2, MapPin, Laptop } from 'lucide-react';
import portraitImg from '../assets/images/irfan_green_portrait_1787860891859.jpg';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Tooltip } from './Tooltip';

interface ProfileHeaderBannerProps {
  darkMode: boolean;
  pageTitle?: string;
  badgeText?: string;
  compact?: boolean;
}

export const ProfileHeaderBanner: React.FC<ProfileHeaderBannerProps> = ({
  darkMode,
  compact = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-3.5 p-1.5 pr-4 rounded-full border shadow-lg backdrop-blur-md mb-6 ${
        darkMode
          ? 'bg-slate-900/80 border-indigo-500/30 shadow-indigo-950/40 text-slate-200'
          : 'bg-white/90 border-indigo-200 shadow-indigo-100/60 text-slate-800'
      }`}
    >
      {/* Profile Picture with Ring & Status Indicator */}
      <Tooltip content="Irfan Ullah - Full-Stack Web Developer" position="top">
        <div className="relative group cursor-pointer">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-md group-hover:scale-105 transition-transform duration-300">
            <img
              src={portraitImg}
              alt="Irfan Ullah Portrait"
              className="w-full h-full object-cover object-top rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Online green indicator */}
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-sm flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping opacity-75" />
          </span>
        </div>
      </Tooltip>

      {/* Info & Badges */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className={`text-xs sm:text-sm font-extrabold tracking-tight bg-clip-text text-transparent ${
            darkMode 
              ? 'bg-gradient-to-r from-white via-indigo-200 to-cyan-300' 
              : 'bg-gradient-to-r from-slate-900 via-indigo-700 to-indigo-900'
          }`}>
            {PERSONAL_INFO.name}
          </span>
          <Tooltip content="Verified Developer Profile" position="top">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 fill-cyan-400/20 shrink-0 inline" />
          </Tooltip>
        </div>
        
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono">
          <span className="truncate max-w-[160px] sm:max-w-[220px] font-semibold text-slate-700 dark:text-slate-300">
            Web Developer &amp; Computer Specialist
          </span>
          <span className="w-1 h-1 rounded-full bg-indigo-400/60 hidden sm:inline-block" />
          <span className="hidden sm:inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
            Available
          </span>
        </div>
      </div>
    </motion.div>
  );
};
