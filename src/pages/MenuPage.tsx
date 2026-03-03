import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Filter, ChefHat } from 'lucide-react';
import { menuData, pricingTiers } from '../data/menuData';
import { MenuItemCard } from '../components/ui/MenuItemCard';
import { PricingCard } from '../components/ui/PricingCard';
import { BookMenu } from '../components/three/BookMenu';
import { useCart } from '../hooks/useCart';

const categories = ["All", "Starters", "Main Course", "Desserts", "Beverages"];

export const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filterType, setFilterType] = useState("All");
  const { addToCart } = useCart();

  const filteredMenu = menuData.filter(item => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const typeMatch = filterType === "All" || item.type === filterType;
    return categoryMatch && typeMatch;
  });

  return (
    <div className="pt-32 pb-20">
      {/* 3D Header */}
      <section className="h-[400px] relative mb-20">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 3]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <BookMenu />
              <Environment preset="studio" />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-4"
          >
            The <span className="text-gold italic">Verse</span> Menu
          </motion.h1>
          <p className="text-cream/60 uppercase tracking-[0.4em] text-xs">Curated culinary excellence</p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-gold text-dark font-bold' 
                    : 'bg-white/5 text-cream/60 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 glass px-6 py-2 rounded-full">
            <Filter size={14} className="text-gold" />
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-transparent text-xs uppercase tracking-widest outline-none cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Veg">Vegetarian</option>
              <option value="Non-Veg">Non-Vegetarian</option>
              <option value="Vegan">Vegan</option>
            </select>
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <MenuItemCard item={item} onAdd={addToCart} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Chef's Special Section */}
        <section className="mb-32">
          <div className="glass p-12 rounded-[3rem] border-gold/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ChefHat size={200} className="text-gold" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-2 text-gold mb-4">
                <div className="w-12 h-[1px] bg-gold" />
                <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Chef's Special</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">The Midnight <span className="text-gold italic">Truffle</span> Feast</h2>
              <p className="text-cream/70 text-lg mb-8 leading-relaxed">
                A 7-course blind tasting menu designed by Executive Chef Marco Rossi. Experience ingredients at their peak, prepared with avant-garde techniques that will challenge and delight your senses.
              </p>
              <div className="flex items-center gap-8">
                <div className="text-3xl font-bold text-gold">$199 <span className="text-sm text-cream/40 font-normal">/ person</span></div>
                <button className="bg-gold text-dark px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                  Book Experience
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Event <span className="text-gold italic">Packages</span></h2>
            <p className="text-cream/60 uppercase tracking-widest text-xs">Catering for your special moments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
