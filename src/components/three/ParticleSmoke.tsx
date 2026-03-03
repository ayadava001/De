import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const ParticleSmoke = () => {
  const points = useRef<THREE.Points>(null!);
  const count = 100;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 1] = Math.random() * 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.5;

      vel[i * 3] = (Math.random() - 0.5) * 0.01;
      vel[i * 3 + 1] = Math.random() * 0.02 + 0.01;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    return [pos, vel];
  }, []);

  useFrame(() => {
    const posAttr = points.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      posAttr.array[i * 3] += velocities[i * 3];
      posAttr.array[i * 3 + 1] += velocities[i * 3 + 1];
      posAttr.array[i * 3 + 2] += velocities[i * 3 + 2];

      if (posAttr.array[i * 3 + 1] > 2) {
        posAttr.array[i * 3] = (Math.random() - 0.5) * 0.5;
        posAttr.array[i * 3 + 1] = 0;
        posAttr.array[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#D4AF37"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
