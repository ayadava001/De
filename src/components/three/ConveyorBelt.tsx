import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ConveyorBelt = () => {
  const beltRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (beltRef.current.material instanceof THREE.MeshStandardMaterial) {
      beltRef.current.material.map?.offset.set(t * 0.5, 0);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Belt Structure */}
      <mesh receiveShadow>
        <boxGeometry args={[10, 0.2, 2]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Moving Surface */}
      <mesh ref={beltRef} position={[0, 0.11, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 1.8]} />
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Rollers */}
      {[-4, -2, 0, 2, 4].map((x) => (
        <mesh key={x} position={[x, -0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 2, 16]} />
          <meshStandardMaterial color="#D4AF37" />
        </mesh>
      ))}
    </group>
  );
};
