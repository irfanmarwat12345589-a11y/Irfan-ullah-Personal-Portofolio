import React, { useState, useRef, useId, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  position?: TooltipPosition;
  delay?: number;
  disabled?: boolean;
  className?: string;
  badge?: string;
  sideOffset?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 150,
  disabled = false,
  className = '',
  badge,
  sideOffset = 8,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tooltipId = useId();

  const showTooltip = () => {
    if (disabled || !content) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  // Close on Escape key press for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        hideTooltip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isVisible]);

  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom':
        return 'top-full left-1/2 -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 -translate-y-1/2 ml-2';
      case 'top':
      default:
        return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    }
  };

  const getArrowClasses = () => {
    switch (position) {
      case 'bottom':
        return 'bottom-full left-1/2 -translate-x-1/2 border-b-slate-800 border-x-transparent border-t-transparent border-[5px]';
      case 'left':
        return 'left-full top-1/2 -translate-y-1/2 border-l-slate-800 border-y-transparent border-r-transparent border-[5px]';
      case 'right':
        return 'right-full top-1/2 -translate-y-1/2 border-r-slate-800 border-y-transparent border-l-transparent border-[5px]';
      case 'top':
      default:
        return 'top-full left-1/2 -translate-x-1/2 border-t-slate-800 border-x-transparent border-b-transparent border-[5px]';
    }
  };

  // Animation variants
  const motionVariants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
      y: position === 'top' ? 4 : position === 'bottom' ? -4 : 0,
      x: position === 'left' ? 4 : position === 'right' ? -4 : 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      transition: { duration: 0.12 },
    },
  };

  // Clone child with accessibility attributes and event handlers
  const trigger = React.cloneElement(children, {
    'aria-describedby': isVisible && !disabled ? tooltipId : undefined,
    onMouseEnter: (e: React.MouseEvent) => {
      children.props.onMouseEnter?.(e);
      showTooltip();
    },
    onMouseLeave: (e: React.MouseEvent) => {
      children.props.onMouseLeave?.(e);
      hideTooltip();
    },
    onFocus: (e: React.FocusEvent) => {
      children.props.onFocus?.(e);
      showTooltip();
    },
    onBlur: (e: React.FocusEvent) => {
      children.props.onBlur?.(e);
      hideTooltip();
    },
  });

  return (
    <div className="relative inline-flex items-center justify-center">
      {trigger}

      <AnimatePresence>
        {isVisible && !disabled && content && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            aria-hidden={!isVisible}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={motionVariants}
            className={`absolute z-50 pointer-events-none whitespace-nowrap px-3 py-1.5 rounded-xl text-[11px] font-medium tracking-wide text-slate-100 bg-slate-900/95 border border-slate-700/80 shadow-xl shadow-black/40 backdrop-blur-md flex items-center gap-1.5 ${getPositionClasses()} ${className}`}
          >
            <span>{content}</span>
            {badge && (
              <span className="px-1.5 py-0.2 rounded-md bg-indigo-500/25 border border-indigo-400/30 text-indigo-300 text-[9px] font-mono uppercase tracking-wider font-bold">
                {badge}
              </span>
            )}
            {/* Subtle Arrow */}
            <div className={`absolute w-0 h-0 pointer-events-none ${getArrowClasses()}`} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
