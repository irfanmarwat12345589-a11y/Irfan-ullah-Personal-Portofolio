import React from 'react';
import { 
  Code2, 
  Heart, 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  ArrowUp, 
  Mail, 
  MapPin, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PageType } from '../types';
import { Tooltip } from './Tooltip';
import portraitImg from '../assets/images/irfan_green_portrait_1787860891859.jpg';

interface FooterProps {
  darkMode: boolean;
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className={`relative z-10 border-t transition-colors duration-300 ${
        darkMode 
          ? 'bg-slate-950/90 border-indigo-900/30 text-slate-400' 
          : 'bg-slate-900 text-slate-300 border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-[2px] shadow-md shadow-indigo-500/20">
                <img
                  src={portraitImg}
                  alt="Irfan Ullah"
                  className="w-full h-full rounded-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  Irfan Ullah
                </span>
                <span className="text-xs text-indigo-400 font-mono">
                  Full-Stack Web Developer & Computer Specialist
                </span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              Passionate Web Developer & Computer Skills Professional dedicated to building fast, futuristic, and accessible web experiences. Transforming creative digital ideas into functional realities.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Tooltip content="View GitHub repositories & code" position="top" badge="GitHub">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Tooltip>
              
              <Tooltip content="Connect on LinkedIn" position="top" badge="LinkedIn">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Tooltip>

              <Tooltip content="Follow on Facebook" position="top" badge="Facebook">
                <a
                  href={PERSONAL_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Profile"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-blue-500 text-slate-300 hover:text-white transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </Tooltip>

              <Tooltip content="Connect on Instagram" position="top" badge="Instagram">
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-pink-600 text-slate-300 hover:text-white transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </Tooltip>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white font-mono mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => { onNavigate('home'); scrollToTop(); }} className="hover:text-indigo-400 transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => { onNavigate('about'); scrollToTop(); }} className="hover:text-indigo-400 transition-colors">About Me</button>
              </li>
              <li>
                <button onClick={() => { onNavigate('skills'); scrollToTop(); }} className="hover:text-indigo-400 transition-colors">Skills & Tools</button>
              </li>
              <li>
                <button onClick={() => { onNavigate('portfolio'); scrollToTop(); }} className="hover:text-indigo-400 transition-colors">Portfolio Gallery</button>
              </li>
              <li>
                <button onClick={() => { onNavigate('services'); scrollToTop(); }} className="hover:text-indigo-400 transition-colors">Services Offered</button>
              </li>
              <li>
                <button onClick={() => { onNavigate('contact'); scrollToTop(); }} className="hover:text-indigo-400 transition-colors">Contact</button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-white font-mono mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-300 hover:text-white break-all transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-300">{PERSONAL_INFO.location}</span>
              </div>
              <div className="pt-3">
                <Tooltip content="Open direct contact form & send inquiry" position="top">
                  <button
                    onClick={() => { onNavigate('contact'); scrollToTop(); }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Start a Conversation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Irfan Ullah. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> &amp; React
            </span>
            <Tooltip content="Scroll back to top" position="top" badge="Top">
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="p-2 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </Tooltip>
          </div>
        </div>

      </div>
    </footer>
  );
};
