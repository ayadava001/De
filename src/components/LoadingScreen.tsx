import React from 'react';
import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

const SpinningFork = () => (
  <Float speed={5} rotationIntensity={2} floatIntensity={1}>
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Fork Handle */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[0.05, 1, 0.02]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Fork Head */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.2, 0.4, 0.02]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Tines */}
      {[ -0.07, -0.02, 0.02, 0.07 ].map((x, i) => (
        <mesh key={i} position={[x, 0.5, 0]}>
          <boxGeometry args={[0.02, 0.3, 0.02]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  </Float>
);

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center"
    >
      <div className="w-64 h-64">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SpinningFork />
        </Canvas>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-serif text-gold tracking-widest mt-8"
      >
        PREPARING YOUR EXPERIENCE
      </motion.h2>
      <div className="w-48 h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          className="w-full h-full bg-gold"
        />
      </div>
    </motion.div>
  );
};
