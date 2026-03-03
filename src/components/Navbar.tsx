import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { GoldButton } from './ui/GoldButton';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Order', path: '/order' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-dark/80 backdrop-blur-lg py-4 shadow-xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter flex flex-col leading-none">
          <span className="text-gold">FLAVOUR</span>
          <span className="text-cream text-xs tracking-[0.3em] ml-1">VERSE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-cream'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/order">
            <GoldButton className="px-6 py-2 text-xs">Order Now</GoldButton>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-t border-white/10 p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-xl font-serif transition-colors hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-cream'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/order">
              <GoldButton className="w-full">Order Now</GoldButton>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
