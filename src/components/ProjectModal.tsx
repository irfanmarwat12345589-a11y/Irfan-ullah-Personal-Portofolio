import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle, Calendar, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { Tooltip } from './Tooltip';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.1 }}
          className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl border z-10 ${
            darkMode 
              ? 'bg-slate-900/95 border-indigo-500/30 text-slate-100 shadow-indigo-950/50' 
              : 'bg-white/95 border-slate-200 text-slate-900 shadow-xl'
          }`}
        >
          {/* Close Button */}
          <div className="absolute top-5 right-5 z-20">
            <Tooltip content="Close preview (Esc)" position="left" badge="Esc">
              <button
                onClick={onClose}
                aria-label="Close Project Modal"
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-black'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </Tooltip>
          </div>

          {/* Header Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400 border border-indigo-500/30">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {project.date}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
            {project.title}
          </h3>

          {/* Project Preview Banner / Simulated Browser Window */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/40 mb-6 bg-slate-950 shadow-inner group">
            {/* Fake browser bar */}
            <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              </div>
              <div className="mx-auto px-3 py-0.5 rounded-md bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span>project-preview.irfanullah.dev</span>
              </div>
            </div>
            
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-64 sm:h-80 object-cover object-center"
            />
          </div>

          {/* Description */}
          <div className="space-y-4 mb-6">
            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {project.fullDesc}
            </p>

            {/* Impact Quote */}
            <div className={`p-4 rounded-2xl border ${
              darkMode ? 'bg-indigo-950/30 border-indigo-500/30 text-indigo-200' : 'bg-indigo-50 border-indigo-100 text-indigo-900'
            }`}>
              <div className="text-xs font-bold uppercase tracking-wider font-mono mb-1 text-indigo-400">Key Outcome & Value</div>
              <p className="text-sm font-medium">{project.impact}</p>
            </div>
          </div>

          {/* Features Checklist */}
          <div className="mb-6">
            <h4 className="text-sm font-bold uppercase tracking-wider font-mono mb-3 text-slate-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Features & Functionality</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, i) => (
                <div key={i} className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm ${
                  darkMode ? 'bg-slate-800/40 border-slate-700/60 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider font-mono mb-3 text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                    darkMode ? 'bg-slate-800 border-indigo-500/30 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-700/40">
            {project.githubUrl && (
              <Tooltip content="Inspect project source code on GitHub" position="top" badge="GitHub">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Source Code on GitHub"
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold border transition-colors flex items-center gap-2 cursor-pointer ${
                    darkMode ? 'border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </Tooltip>
            )}
            <Tooltip content="Dismiss modal and return to project gallery" position="top">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:opacity-90 transition-opacity shadow-lg shadow-indigo-600/30 flex items-center gap-2 cursor-pointer"
              >
                <span>Close Preview</span>
              </button>
            </Tooltip>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
