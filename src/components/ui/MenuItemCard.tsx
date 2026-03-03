import React from 'react';
import { Star, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { GoldButton } from './GoldButton';

interface MenuItemCardProps {
  item: any;
  onAdd: (item: any) => void;
}

export const MenuItemCard = ({ item, onAdd }: MenuItemCardProps) => {
  return (
    <GlassCard className="flex flex-col h-full group overflow-hidden">
      <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {item.rating > 4.8 && (
          <div className="absolute top-4 right-4 bg-gold text-dark px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
            <Star size={12} fill="currentColor" /> {item.rating}
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-serif text-gold">{item.name}</h3>
        <span className="text-gold font-bold">${item.price}</span>
      </div>
      
      <p className="text-sm text-cream/70 mb-4 flex-grow">{item.description}</p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          {Array.from({ length: item.spiceLevel }).map((_, i) => (
            <Flame key={i} size={14} className="text-orange-500" />
          ))}
          <span className="text-[10px] uppercase tracking-widest text-cream/40 ml-1">
            {item.type}
          </span>
        </div>
        <GoldButton 
          onClick={() => onAdd(item)}
          className="px-4 py-2 text-xs"
        >
          Add to Order
        </GoldButton>
      </div>
    </GlassCard>
  );
};
