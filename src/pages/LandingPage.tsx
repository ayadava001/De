import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { FloatingDish } from '../components/three/FloatingDish';
import { GoldenParticles } from '../components/three/GoldenParticles';
import { WineGlass } from '../components/three/WineGlass';
import { GoldButton } from '../components/ui/GoldButton';
import { GlassCard } from '../components/ui/GlassCard';
import { menuData } from '../data/menuData';

export const LandingPage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
              <FloatingDish />
              <GoldenParticles />
              <Environment preset="city" />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-serif leading-tight mb-6"
            >
              Where Every <span className="text-gold italic">Bite</span> Tells a Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-cream/70 mb-10 leading-relaxed"
            >
              Experience culinary art in every dish. A symphony of flavours crafted with passion and served with elegance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-6"
            >
              <Link to="/menu">
                <GoldButton>Explore Menu</GoldButton>
              </Link>
              <Link to="/order">
                <GoldButton variant="outline">Order Now</GoldButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Our <span className="text-gold italic">Legacy</span></h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              Founded in 1998, FLAVOUR VERSE began as a small family kitchen with a big dream: to redefine the fine-dining experience. Our journey has been one of constant innovation, sourcing the finest ingredients from around the globe to create dishes that are as visually stunning as they are delicious.
            </p>
            <p className="text-cream/70 text-lg leading-relaxed mb-10">
              Today, we stand as a beacon of culinary excellence, where every guest is treated to a personalized gastronomic adventure.
            </p>
            <GoldButton variant="outline">Read More</GoldButton>
          </motion.div>

          <div className="h-[500px] glass rounded-3xl overflow-hidden relative">
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <WineGlass />
                <Environment preset="night" />
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-32 bg-dark/50">
        <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Signature <span className="text-gold italic">Dishes</span></h2>
            <p className="text-cream/60 uppercase tracking-widest text-xs">The masterpieces of our kitchen</p>
          </div>
          <Link to="/menu" className="text-gold hover:underline uppercase tracking-widest text-xs">View All</Link>
        </div>

        <div className="flex overflow-x-auto pb-12 px-6 gap-8 no-scrollbar">
          {menuData.slice(0, 4).map((dish) => (
            <motion.div
              key={dish.id}
              whileHover={{ y: -10 }}
              className="min-w-[350px] glass rounded-2xl overflow-hidden group border-gold/10 hover:border-gold/30 transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-serif text-gold">{dish.name}</h3>
                  <span className="text-gold font-bold">${dish.price}</span>
                </div>
                <p className="text-cream/60 text-sm mb-6 line-clamp-2">{dish.description}</p>
                <Link to="/order">
                  <GoldButton className="w-full py-2 text-xs">Add to Order</GoldButton>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://picsum.photos/seed/restaurant/1920/1080" 
            alt="Parallax background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass p-12 md:p-20 rounded-[3rem] border-gold/20"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Book Your <span className="text-gold italic">Table</span></h2>
            <p className="text-cream/70 text-lg mb-12">
              Join us for an unforgettable evening. Secure your spot at the Verse today.
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <input 
                type="date" 
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-all"
              />
              <input 
                type="time" 
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-all"
              />
              <input 
                type="number" 
                placeholder="Guests"
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-all"
              />
              <GoldButton className="h-full">Reserve Now</GoldButton>
            </form>
            <p className="text-xs uppercase tracking-widest text-cream/40">Or call us at +1 (555) 123-4567</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
