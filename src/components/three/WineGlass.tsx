import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export const WineGlass = () => {
  const liquidRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (liquidRef.current) {
      liquidRef.current.position.y = -0.2 + Math.sin(t * 2) * 0.02;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group scale={1.5}>
        {/* Glass Base */}
        <mesh position={[0, -1, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
          <meshStandardMaterial color="white" transparent opacity={0.3} />
        </mesh>
        
        {/* Stem */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 1, 32]} />
          <meshStandardMaterial color="white" transparent opacity={0.3} />
        </mesh>

        {/* Bowl */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.5, 0.2, 0.8, 32, 1, true]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={0.1}
            chromaticAberration={0.02}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.1}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#ffffff"
            color="#ffffff"
          />
        </mesh>

        {/* Liquid */}
        <mesh ref={liquidRef} position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.45, 0.25, 0.4, 32]} />
          <meshStandardMaterial color="#722F37" transparent opacity={0.8} />
        </mesh>
      </group>
    </Float>
  );
};
