import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Code2, Laptop, Sparkles, CheckCircle2, Terminal, Flame } from 'lucide-react';
import portraitImg from '../assets/images/irfan_green_portrait_1787860891859.jpg';
import { Tooltip } from './Tooltip';

interface ProfileCardProps {
  darkMode: boolean;
  variant?: 'hero' | 'about' | 'compact';
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ darkMode, variant = 'hero' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt calculations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 20, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div 
      className="relative flex items-center justify-center p-4 md:p-8 perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Animated Tech Glowing Aura */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -inset-4 md:-inset-8 rounded-full bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-cyan-400/30 blur-2xl -z-10"
      />

      {/* Rotating Cyber Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[410px] md:h-[410px] rounded-full border border-dashed border-indigo-400/30 dark:border-indigo-400/25 pointer-events-none -z-5"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[310px] h-[310px] sm:w-[370px] sm:h-[370px] md:w-[445px] md:h-[445px] rounded-full border border-cyan-400/20 pointer-events-none -z-5"
      />

      {/* Main 3D Card Frame */}
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="relative group cursor-pointer"
      >
        {/* Glowing Gradient Border Container */}
        <div className="relative p-[3px] rounded-3xl bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 shadow-2xl shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-500">
          
          {/* Glass Inner Card */}
          <div className={`relative overflow-hidden rounded-[22px] backdrop-blur-xl ${
            darkMode 
              ? 'bg-slate-900/90 border border-slate-700/50' 
              : 'bg-white/90 border border-slate-200/80 shadow-inner'
          }`}>
            
            {/* Image Container with Zoom and Overlay */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-84 md:h-84 overflow-hidden rounded-[20px]">
              <img
                src={portraitImg}
                alt="Irfan Ullah - Web Developer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />

              {/* Floating Bottom Label inside image */}
              <div className="absolute bottom-3 inset-x-3">
                <Tooltip content="Available for freelance contracts & full-time developer positions" position="top" badge="Status">
                  <div className="w-full p-2.5 rounded-xl backdrop-blur-md bg-slate-900/75 border border-white/10 text-white text-center shadow-lg transform transition-transform duration-300 group-hover:translate-y-[-2px] cursor-default">
                    <div className="text-xs font-semibold tracking-wide text-indigo-300 flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                      <span>Available for Projects</span>
                    </div>
                    <div className="text-[13px] font-bold text-slate-100">Irfan Ullah</div>
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Interactive Badges around Profile */}
        {/* Badge 1: Top Right - Web Developer */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            x: [0, 4, 0],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="absolute -top-3 -right-4 sm:-top-5 sm:-right-8 z-20"
          style={{ transform: 'translateZ(30px)' }}
        >
          <Tooltip content="Specialized in responsive modern web applications" position="top" badge="Web Dev">
            <div className={`px-3.5 py-2 rounded-2xl backdrop-blur-md shadow-xl border flex items-center gap-2 text-xs font-semibold cursor-pointer ${
              darkMode 
                ? 'bg-slate-900/90 border-indigo-500/40 text-indigo-300 shadow-indigo-500/10' 
                : 'bg-white/95 border-indigo-200 text-indigo-700 shadow-indigo-100'
            }`}>
              <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Role</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Web Developer</div>
              </div>
            </div>
          </Tooltip>
        </motion.div>

        {/* Badge 2: Bottom Left - Computer Skills */}
        <motion.div
          animate={{
            y: [0, 8, 0],
            x: [0, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-8 z-20"
          style={{ transform: 'translateZ(25px)' }}
        >
          <Tooltip content="Proficient in MS Office, IT administration, and operating systems" position="bottom" badge="Expertise">
            <div className={`px-3.5 py-2 rounded-2xl backdrop-blur-md shadow-xl border flex items-center gap-2 text-xs font-semibold cursor-pointer ${
              darkMode 
                ? 'bg-slate-900/90 border-cyan-500/40 text-cyan-300 shadow-cyan-500/10' 
                : 'bg-white/95 border-cyan-200 text-cyan-700 shadow-cyan-100'
            }`}>
              <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Laptop className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">Expertise</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Computer Pro</div>
              </div>
            </div>
          </Tooltip>
        </motion.div>

        {/* Badge 3: Top Left - Clean Code */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="hidden sm:flex absolute -top-4 -left-4 z-20"
          style={{ transform: 'translateZ(20px)' }}
        >
          <Tooltip content="Committed to readable, maintainable, W3C-valid code" position="top">
            <div className={`px-2.5 py-1.5 rounded-xl backdrop-blur-md shadow-lg border flex items-center gap-1.5 text-[11px] font-mono font-medium cursor-pointer ${
              darkMode 
                ? 'bg-purple-950/80 border-purple-500/40 text-purple-300' 
                : 'bg-purple-50 border-purple-200 text-purple-700'
            }`}>
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>&lt;CleanCode /&gt;</span>
            </div>
          </Tooltip>
        </motion.div>

        {/* Badge 4: Bottom Right - Fast & Creative */}
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
          className="hidden sm:flex absolute -bottom-3 -right-3 z-20"
          style={{ transform: 'translateZ(20px)' }}
        >
          <Tooltip content="Rapidly acquiring new tools, modern AI workflows & tech stacks" position="bottom">
            <div className={`px-2.5 py-1.5 rounded-xl backdrop-blur-md shadow-lg border flex items-center gap-1.5 text-[11px] font-medium cursor-pointer ${
              darkMode 
                ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            }`}>
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Creative Learner</span>
            </div>
          </Tooltip>
        </motion.div>
      </motion.div>
    </div>
  );
};
