import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

export const BookMenu = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const [open, setOpen] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const targetRotation = open ? -Math.PI / 4 : 0;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation, 0.1);
  });

  return (
    <group ref={groupRef} onClick={() => setOpen(!open)} onPointerOver={() => (document.body.style.cursor = 'pointer')} onPointerOut={() => (document.body.style.cursor = 'auto')}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Cover */}
        <mesh position={[0.5, 0, 0]}>
          <boxGeometry args={[1, 1.4, 0.05]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.2} />
        </mesh>
        
        {/* Pages */}
        <mesh position={[0.48, 0, 0.03]}>
          <boxGeometry args={[0.95, 1.35, 0.04]} />
          <meshStandardMaterial color="#FFF8E7" />
        </mesh>

        {/* Spine */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.1, 1.4, 0.06]} />
          <meshStandardMaterial color="#D4AF37" />
        </mesh>

        <Text
          position={[0.5, 0.2, 0.06]}
          fontSize={0.1}
          color="#D4AF37"
          font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD7K8U3u-p82_32_32_32_32_32_32_32.woff"
        >
          FLAVOUR
        </Text>
        <Text
          position={[0.5, 0, 0.06]}
          fontSize={0.08}
          color="#D4AF37"
          font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD7K8U3u-p82_32_32_32_32_32_32_32.woff"
        >
          VERSE
        </Text>
      </Float>
    </group>
  );
};
