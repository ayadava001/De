import React from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
}

export const GoldButton = ({ children, className, variant = 'solid', ...props }: GoldButtonProps) => {
  const { onDrag, onDragStart, onDragEnd, ...rest } = props as any;
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212,175,55,0.4)' }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'px-8 py-3 rounded-full font-semibold transition-all duration-300 uppercase tracking-wider text-sm',
        variant === 'solid' 
          ? 'bg-gold text-dark hover:bg-gold/90' 
          : 'border-2 border-gold text-gold hover:bg-gold hover:text-dark',
        className
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
