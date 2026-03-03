import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

interface CartItemProps {
  item: any;
  onUpdate: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export const CartItem = ({ item, onUpdate, onRemove }: CartItemProps) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex items-center gap-4 p-4 glass rounded-xl mb-3"
    >
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-16 h-16 rounded-lg object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="flex-grow">
        <h4 className="text-sm font-semibold text-gold">{item.name}</h4>
        <p className="text-xs text-cream/60">${item.price}</p>
      </div>
      <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
        <button 
          onClick={() => onUpdate(item.id, -1)}
          className="p-1 hover:text-gold transition-colors"
        >
          <Minus size={14} />
        </button>
        <span className="text-xs w-4 text-center">{item.quantity}</span>
        <button 
          onClick={() => onUpdate(item.id, 1)}
          className="p-1 hover:text-gold transition-colors"
        >
          <Plus size={14} />
        </button>
      </div>
      <button 
        onClick={() => onRemove(item.id)}
        className="text-cream/40 hover:text-red-500 transition-colors"
      >
        <Trash2 size={16} />
      </button>
    </motion.div>
  );
};
