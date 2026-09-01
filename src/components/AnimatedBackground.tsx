import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface AnimatedBackgroundProps {
  darkMode: boolean;
  page?: string;
}

const TECH_SYMBOLS = ['</>', '{ }', 'const', '0101', 'fn()', 'div', 'CSS', 'TS', 'React', 'HTML5', '⚡', '★', '=>', 'git', '&&'];

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };

      // Normalized mouse for parallax orbs
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false };
      setMousePos({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Canvas particle network with gravitational pull
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(Math.floor(window.innerWidth / 24), 65);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseVx: number;
      baseVy: number;
      size: number;
      baseAlpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const bVx = (Math.random() - 0.5) * 0.45;
      const bVy = (Math.random() - 0.5) * 0.45;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: bVx,
        vy: bVy,
        baseVx: bVx,
        baseVy: bVy,
        size: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.45 + 0.25,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = darkMode;
      const pointColor = isDark ? 'rgba(129, 140, 248, ' : 'rgba(79, 70, 229, ';
      const lineColor = isDark ? 'rgba(99, 102, 241, ' : 'rgba(99, 102, 241, ';
      const mouse = mouseRef.current;
      const gravityRadius = 220; // Influence radius around mouse

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gravitational pull calculation
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < gravityRadius && dist > 8) {
            // Smooth gravitational attraction towards mouse cursor
            const force = (1 - dist / gravityRadius) * 0.65;
            const angle = Math.atan2(dy, dx);
            
            p.vx += Math.cos(angle) * force * 0.25;
            p.vy += Math.sin(angle) * force * 0.25;

            // Connect cursor to close particles with glowing magnetic ray
            if (dist < 140) {
              const mouseLinkAlpha = (1 - dist / 140) * (isDark ? 0.35 : 0.25);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = isDark 
                ? `rgba(56, 189, 248, ${mouseLinkAlpha})` 
                : `rgba(99, 102, 241, ${mouseLinkAlpha})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // Apply gentle damping and return force to base velocity
        p.vx = p.vx * 0.96 + p.baseVx * 0.04;
        p.vy = p.vy * 0.96 + p.baseVy * 0.04;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries seamlessly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Check if near mouse to boost alpha & size slightly
        let alpha = p.baseAlpha;
        let particleSize = p.size;
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < gravityRadius) {
            const intensity = 1 - dist / gravityRadius;
            alpha = Math.min(1, p.baseAlpha + intensity * 0.4);
            particleSize = p.size + intensity * 1.2;
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `${pointColor}${alpha})`;
        ctx.shadowBlur = isDark ? 10 : 5;
        ctx.shadowColor = isDark ? '#818cf8' : '#6366f1';
        ctx.fill();

        // Connect nearby particles with subtle lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const linkAlpha = (1 - dist / 115) * (isDark ? 0.22 : 0.14);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${lineColor}${linkAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-colors duration-500">
      {/* Grid Pattern */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${
          darkMode ? 'tech-grid-pattern opacity-40' : 'tech-grid-pattern-light opacity-60'
        }`} 
      />

      {/* Floating Gradient Glowing Orbs with Parallax */}
      <motion.div
        animate={{
          x: mousePos.x * -25,
          y: mousePos.y * -25,
          scale: [1, 1.06, 0.98, 1],
        }}
        transition={{
          scale: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 0.8, ease: 'easeOut' },
          y: { duration: 0.8, ease: 'easeOut' },
        }}
        className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl filter transition-opacity duration-700 ${
          darkMode 
            ? 'bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-transparent' 
            : 'bg-gradient-to-br from-indigo-300/35 via-blue-200/25 to-transparent'
        }`}
      />

      <motion.div
        animate={{
          x: mousePos.x * 30,
          y: mousePos.y * 30,
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          scale: { duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 },
          x: { duration: 0.8, ease: 'easeOut' },
          y: { duration: 0.8, ease: 'easeOut' },
        }}
        className={`absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl filter transition-opacity duration-700 ${
          darkMode 
            ? 'bg-gradient-to-bl from-cyan-500/20 via-blue-600/15 to-transparent' 
            : 'bg-gradient-to-bl from-cyan-200/40 via-sky-200/30 to-transparent'
        }`}
      />

      <motion.div
        animate={{
          x: mousePos.x * -20,
          y: mousePos.y * -20,
          scale: [1, 1.12, 1],
        }}
        transition={{
          scale: { duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 },
          x: { duration: 0.8, ease: 'easeOut' },
          y: { duration: 0.8, ease: 'easeOut' },
        }}
        className={`absolute -bottom-32 left-1/3 w-[32rem] h-[32rem] rounded-full blur-3xl filter transition-opacity duration-700 ${
          darkMode 
            ? 'bg-gradient-to-t from-purple-700/20 via-indigo-900/15 to-transparent' 
            : 'bg-gradient-to-t from-purple-200/35 via-pink-100/25 to-transparent'
        }`}
      />

      {/* Floating Ambient Tech Symbols */}
      {TECH_SYMBOLS.slice(0, 10).map((symbol, idx) => {
        const initialPositions = [
          { top: '12%', left: '8%' },
          { top: '22%', right: '12%' },
          { top: '48%', left: '5%' },
          { top: '65%', right: '8%' },
          { top: '82%', left: '15%' },
          { top: '18%', left: '42%' },
          { top: '75%', right: '35%' },
          { top: '35%', right: '28%' },
          { top: '55%', left: '22%' },
          { top: '88%', right: '18%' },
        ];
        const pos = initialPositions[idx] || { top: '50%', left: '50%' };

        return (
          <motion.div
            key={idx}
            style={pos}
            animate={{
              y: [0, -18, 0],
              x: [0, (idx % 2 === 0 ? 8 : -8), 0],
              rotate: [0, idx % 2 === 0 ? 6 : -6, 0],
              opacity: darkMode ? [0.2, 0.45, 0.2] : [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 7 + (idx % 5) * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: idx * 0.6,
            }}
            className={`absolute select-none font-mono text-xs md:text-sm font-semibold tracking-wider ${
              darkMode ? 'text-indigo-400/40' : 'text-indigo-600/35'
            }`}
          >
            {symbol}
          </motion.div>
        );
      })}

      {/* Canvas for dynamic particles & connected mesh */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
