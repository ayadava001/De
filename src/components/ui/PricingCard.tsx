import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { GoldButton } from './GoldButton';

interface PricingCardProps {
  tier: any;
}

export const PricingCard = ({ tier }: PricingCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[450px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        className="w-full h-full relative preserve-3d"
      >
        {/* Front */}
        <GlassCard className="absolute inset-0 backface-hidden flex flex-col items-center justify-center text-center border-gold/20">
          {tier.popular && (
            <div className="absolute top-4 right-4 bg-gold text-dark text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
              Most Popular
            </div>
          )}
          <h3 className="text-2xl font-serif text-gold mb-2">{tier.name}</h3>
          <div className="text-4xl font-bold mb-4">
            <span className="text-lg text-gold">$</span>
            {tier.price}
          </div>
          <p className="text-cream/60 mb-6">Up to {tier.guests} Guests</p>
          <div className="w-12 h-1 bg-gold/30 rounded-full mb-6" />
          <p className="text-sm italic">Hover to see details</p>
        </GlassCard>

        {/* Back */}
        <GlassCard className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] flex flex-col border-gold/40">
          <h4 className="text-lg font-serif text-gold mb-4 text-center">{tier.courses} Course Meal</h4>
          <ul className="space-y-3 mb-8 flex-grow">
            {tier.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-sm text-cream/80">
                <Check size={14} className="text-gold" />
                {feature}
              </li>
            ))}
          </ul>
          <GoldButton className="w-full">Enquire Now</GoldButton>
        </GlassCard>
      </motion.div>
    </div>
  );
};
