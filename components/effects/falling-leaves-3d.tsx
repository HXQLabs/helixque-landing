"use client";

import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei'; // OrbitControls is useful for debugging
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { Leaf3D } from './leaf-3d';

interface FallingLeaves3DProps {
  count?: number;
}

export function FallingLeaves3D({ count = 50 }: FallingLeaves3DProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Disable 3D animation if reduced motion is preferred
  if (prefersReducedMotion) {
    return null;
  }

  const leaves = useMemo(() => {
    const numLeaves = window.innerWidth < 768 ? Math.floor(count / 2) : count; // Fewer leaves on mobile
    return Array.from({ length: numLeaves }).map((_, i) => ({
      id: i,
      initialPosition: [
        Math.random() * 20 - 10, // X: -10 to 10
        Math.random() * 20 + 5,  // Y: 5 to 25 (start above view)
        Math.random() * 10 - 5   // Z: -5 to 5
      ] as [number, number, number],
      speed: 0.5 + Math.random() * 0.5,
      rotationSpeed: 0.5 + Math.random() * 0.5,
      windForce: 0.1 + Math.random() * 0.2,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
        <pointLight position={[-10, -10, -10]} />
        <Environment preset="forest" /> {/* Provides natural lighting */}

        {/* <OrbitControls /> Uncomment for debugging: lets you move the camera with mouse */}

        <Suspense fallback={null}>
          {leaves.map((leaf) => (
            <Leaf3D
              key={leaf.id}
              initialPosition={leaf.initialPosition}
              speed={leaf.speed}
              rotationSpeed={leaf.rotationSpeed}
              windForce={leaf.windForce}
              ground={-10} // Leaves disappear/reset below this Y value
              boundary={{ x: [-15, 15], z: [-10, 10] }} // Area where leaves can spawn
            />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}