import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles, 
  Code2, 
  User, 
  Laptop, 
  FolderGit2, 
  Wrench, 
  Mail, 
  LogIn, 
  UserPlus, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { PageType, UserAccount } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { Tooltip } from './Tooltip';
import portraitImg from '../assets/images/irfan_green_portrait_1787860891859.jpg';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
  onToggleTheme: () => void;
  currentUser: UserAccount | null;
  onSignOut: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  darkMode,
  onToggleTheme,
  currentUser,
  onSignOut
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, isUrdu } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t.nav.home, icon: <Sparkles className="w-4 h-4" /> },
    { id: 'about', label: t.nav.about, icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: t.nav.skills, icon: <Laptop className="w-4 h-4" /> },
    { id: 'portfolio', label: t.nav.portfolio, icon: <FolderGit2 className="w-4 h-4" /> },
    { id: 'services', label: t.nav.services, icon: <Wrench className="w-4 h-4" /> },
    { id: 'contact', label: t.nav.contact, icon: <Mail className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-indigo-900/40 shadow-lg shadow-indigo-950/40 py-3'
            : 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-indigo-100/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Irfan's Profile Picture */}
          <Tooltip content="Return to Home page - Irfan Ullah Portfolio" position="bottom">
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              aria-label="Irfan Ullah Portfolio Home"
              className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/50 group-hover:scale-105 transition-all duration-300">
                <img
                  src={portraitImg}
                  alt="Irfan Ullah"
                  className="w-full h-full object-cover object-top rounded-full"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-xs flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-white animate-ping opacity-75" />
                </span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-slate-100 via-indigo-200 to-cyan-300 dark:from-white dark:via-indigo-200 dark:to-cyan-300 bg-clip-text text-transparent group-hover:to-purple-300 transition-colors duration-300">
                  {isUrdu ? 'عرفان اللہ' : 'Irfan Ullah'}
                </span>
                <span className="text-[10px] font-mono font-medium text-indigo-400/90 tracking-wider uppercase -mt-0.5">
                  {t.nav.subtitle}
                </span>
              </div>
            </button>
          </Tooltip>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-slate-900/40 dark:bg-slate-900/60 border border-slate-700/40 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-white'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 shadow-md shadow-indigo-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            
            {/* Language Switcher Component (EN / UR) */}
            <LanguageToggle darkMode={darkMode} />

            {/* Dark / Light Mode Toggle */}
            <Tooltip
              content={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              position="bottom"
              badge={darkMode ? 'Dark' : 'Light'}
            >
              <button
                id="theme-toggle-btn"
                onClick={onToggleTheme}
                aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className={`p-2.5 rounded-xl border transition-all duration-300 focus:outline-none cursor-pointer ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-700/60 text-amber-400 hover:bg-slate-800 hover:border-amber-400/40 shadow-inner'
                    : 'bg-white/90 border-slate-200 text-indigo-600 hover:bg-slate-100 hover:border-indigo-300 shadow-sm'
                }`}
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon className="w-4 h-4 hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>
            </Tooltip>

            {currentUser ? (
              /* User logged in profile pill */
              <div className="flex items-center gap-2">
                <Tooltip content={`Signed in as ${currentUser.email}`} position="bottom">
                  <div className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-2 cursor-default ${
                    darkMode ? 'bg-slate-900/80 border-indigo-500/40 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="max-w-[110px] truncate">{currentUser.name}</span>
                  </div>
                </Tooltip>
                <Tooltip content="Sign out of account" position="bottom" badge="Auth">
                  <button
                    id="signout-btn"
                    onClick={onSignOut}
                    aria-label={t.nav.signout}
                    className="p-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors focus:outline-none cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </Tooltip>
              </div>
            ) : (
              /* Sign In and Sign Up buttons */
              <div className="flex items-center gap-2">
                {/* Modern Outlined Sign In Button */}
                <Tooltip content="Sign in to your account" position="bottom">
                  <button
                    id="nav-signin-btn"
                    onClick={() => handleNavClick('signin')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-300 focus:outline-none cursor-pointer flex items-center gap-1.5 ${
                      currentPage === 'signin'
                        ? 'border-indigo-400 bg-indigo-500/15 text-indigo-300'
                        : darkMode
                        ? 'border-indigo-500/40 text-slate-200 hover:border-indigo-400 hover:bg-indigo-950/40 hover:text-white'
                        : 'border-indigo-300 text-slate-700 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-900'
                    }`}
                  >
                    <LogIn className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{t.nav.signin}</span>
                  </button>
                </Tooltip>

                {/* Glowing Gradient Sign Up Button */}
                <Tooltip content="Create a free member profile" position="bottom" badge="Join">
                  <button
                    id="nav-signup-btn"
                    onClick={() => handleNavClick('signup')}
                    className="relative group px-3.5 py-2 rounded-xl text-xs font-bold text-white overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-r from-cyan-400 to-purple-400 blur-sm transition-opacity" />
                    <span className="relative z-10 flex items-center gap-1.5">
                      <UserPlus className="w-3.5 h-3.5" />
                      <span>{t.nav.signup}</span>
                    </span>
                  </button>
                </Tooltip>
              </div>
            )}
          </div>

          {/* Mobile Right Menu & Controls */}
          <div className="flex md:hidden items-center gap-1.5">
            <LanguageToggle darkMode={darkMode} compact />

            <Tooltip
              content={darkMode ? 'Light mode' : 'Dark mode'}
              position="bottom"
            >
              <button
                id="mobile-theme-toggle"
                onClick={onToggleTheme}
                aria-label="Toggle Theme"
                className={`p-2 rounded-lg border focus:outline-none ${
                  darkMode ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-white border-slate-200 text-indigo-600'
                }`}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </Tooltip>

            <Tooltip
              content={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              position="bottom"
            >
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open Navigation Menu"
                className={`p-2 rounded-lg border focus:outline-none ${
                  darkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-700'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </Tooltip>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden border-b overflow-hidden ${
              darkMode 
                ? 'bg-slate-950/95 backdrop-blur-2xl border-indigo-900/40' 
                : 'bg-white/95 backdrop-blur-2xl border-slate-200'
            }`}
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-w-lg mx-auto">
              {/* Mobile Profile Card */}
              <div className="flex items-center gap-3 p-3 mb-2 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-slate-900/60 border border-indigo-500/30">
                <img
                  src={portraitImg}
                  alt="Irfan Ullah"
                  className="w-11 h-11 rounded-full object-cover object-top border-2 border-indigo-400/60 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{isUrdu ? 'عرفان اللہ' : 'Irfan Ullah'}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-xs text-indigo-300 font-mono">
                    {t.nav.subtitle}
                  </div>
                </div>
              </div>

              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                        : darkMode
                        ? 'text-slate-300 hover:bg-slate-900 hover:text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-indigo-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {link.icon}
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </button>
                );
              })}

              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-slate-700/30 grid grid-cols-2 gap-3">
                {currentUser ? (
                  <div className="col-span-2 flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-indigo-500/30">
                    <span className="text-xs font-semibold text-indigo-300">
                      {t.nav.signedInAs} {currentUser.name}
                    </span>
                    <button
                      onClick={onSignOut}
                      className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-300 text-xs font-semibold"
                    >
                      {t.nav.signout}
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      id="mobile-signin-btn"
                      onClick={() => handleNavClick('signin')}
                      className={`w-full py-2.5 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 ${
                        darkMode ? 'border-slate-700 text-slate-200' : 'border-slate-300 text-slate-800'
                      }`}
                    >
                      <LogIn className="w-3.5 h-3.5" />
                      <span>{t.nav.signin}</span>
                    </button>
                    <button
                      id="mobile-signup-btn"
                      onClick={() => handleNavClick('signup')}
                      className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 shadow-md flex items-center justify-center gap-2"
                    >
                      <UserPlus className="w-3.5 h-3.5" />
                      <span>{t.nav.signup}</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
