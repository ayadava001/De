import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

const SmallGlobe = () => (
  <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#D4AF37" wireframe />
    </mesh>
    <mesh position={[0.8, 0.6, 0]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="white" emissive="#D4AF37" />
    </mesh>
  </Float>
);

export const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-serif text-gold mb-6">FLAVOUR VERSE</h2>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Experience the pinnacle of fine dining where culinary tradition meets modern innovation. Every dish is a masterpiece.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-6 uppercase tracking-widest text-xs">Quick Links</h3>
            <ul className="space-y-4 text-sm text-cream/60">
              <li><a href="/" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="/menu" className="hover:text-gold transition-colors">Menu</a></li>
              <li><a href="/order" className="hover:text-gold transition-colors">Order Online</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Reservations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-6 uppercase tracking-widest text-xs">Contact Us</h3>
            <ul className="space-y-4 text-sm text-cream/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>123 Culinary Avenue, Gastronomy District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span>hello@flavourverse.com</span>
              </li>
            </ul>
          </div>

          <div className="h-48 rounded-2xl overflow-hidden glass relative">
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <SmallGlobe />
              <OrbitControls enableZoom={false} />
            </Canvas>
            <div className="absolute bottom-4 left-4 bg-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest border border-gold/20">
              Visit Us Today
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-cream/30">
          <p>© 2026 FLAVOUR VERSE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
