import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { ParticleSmoke } from './ParticleSmoke';

export const FloatingDish = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.2;
    groupRef.current.position.y = Math.sin(t) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Plate */}
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <cylinderGeometry args={[1.5, 1.2, 0.1, 64]} />
        <meshStandardMaterial color="#FFF8E7" metalness={0.2} roughness={0.1} />
      </mesh>
      
      {/* Food Base (Burger-like) */}
      <group position={[0, 0.2, 0]}>
        {/* Bun Bottom */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>
        
        {/* Patty */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.65, 0.65, 0.2, 32]} />
          <meshStandardMaterial color="#3D1F1F" roughness={1} />
        </mesh>
        
        {/* Lettuce/Cheese */}
        <mesh position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.7, 0.6, 0.1, 32]} />
          <meshStandardMaterial color="#FFD700" roughness={0.5} />
        </mesh>

        {/* Bun Top */}
        <mesh position={[0, 0.45, 0]}>
          <sphereGeometry args={[0.6, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>

        <ParticleSmoke />
      </group>

      <spotLight
        position={[0, 5, 0]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        color="#D4AF37"
      />
    </group>
  );
};
