import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const CartBowl = ({ itemCount }: { itemCount: number }) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.5;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Bowl */}
        <mesh>
          <sphereGeometry args={[1, 32, 32, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} side={THREE.DoubleSide} />
        </mesh>
        
        {/* Items inside (represented by spheres) */}
        {Array.from({ length: Math.min(itemCount, 10) }).map((_, i) => (
          <mesh 
            key={i} 
            position={[
              (Math.random() - 0.5) * 0.8,
              Math.random() * 0.5,
              (Math.random() - 0.5) * 0.8
            ]}
          >
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#FFF8E7" : "#8B4513"} />
          </mesh>
        ))}
      </Float>
    </group>
  );
};
