import React from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = true }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -10, scale: 1.02 } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
      className={cn(
        'glass rounded-2xl p-6 transition-all duration-300',
        hoverEffect && 'hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
