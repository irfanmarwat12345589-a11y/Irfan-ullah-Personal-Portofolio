import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PageType, Project, UserAccount } from './types';
import { LanguageProvider } from './context/LanguageContext';

function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactInitialSubject, setContactInitialSubject] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);

  // Sync theme with HTML root class
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  const handleToggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const handleNavigate = (page: PageType, initialSubject?: string) => {
    if (initialSubject) {
      setContactInitialSubject(initialSubject);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (user: UserAccount) => {
    setCurrentUser(user);
  };

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  // Page Transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 16, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -16, filter: 'blur(4px)', transition: { duration: 0.25, ease: 'easeIn' } }
  };

  return (
    <div className={`min-h-screen relative flex flex-col font-sans transition-colors duration-500 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* 1. Futuristic Animated Background with Particles & Parallax */}
      <AnimatedBackground darkMode={darkMode} page={currentPage} />

      {/* 2. Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
        currentUser={currentUser}
        onSignOut={handleSignOut}
      />

      {/* 3. Dynamic Page View with Smooth Page Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomePage
                darkMode={darkMode}
                onNavigate={handleNavigate}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AboutPage
                darkMode={darkMode}
                onNavigate={handleNavigate}
              />
            </motion.div>
          )}

          {currentPage === 'skills' && (
            <motion.div
              key="skills"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SkillsPage
                darkMode={darkMode}
                onNavigate={handleNavigate}
              />
            </motion.div>
          )}

          {currentPage === 'portfolio' && (
            <motion.div
              key="portfolio"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PortfolioPage
                darkMode={darkMode}
                onNavigate={handleNavigate}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            </motion.div>
          )}

          {currentPage === 'services' && (
            <motion.div
              key="services"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ServicesPage
                darkMode={darkMode}
                onNavigate={handleNavigate}
              />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ContactPage
                darkMode={darkMode}
                onNavigate={handleNavigate}
                initialSubject={contactInitialSubject}
              />
            </motion.div>
          )}

          {currentPage === 'signin' && (
            <motion.div
              key="signin"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SignInPage
                darkMode={darkMode}
                onNavigate={handleNavigate}
                onLoginSuccess={handleLoginSuccess}
              />
            </motion.div>
          )}

          {currentPage === 'signup' && (
            <motion.div
              key="signup"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SignUpPage
                darkMode={darkMode}
                onNavigate={handleNavigate}
                onLoginSuccess={handleLoginSuccess}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 4. Project Modal Details Window */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
      />

      {/* 5. Footer */}
      <Footer
        darkMode={darkMode}
        onNavigate={handleNavigate}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
