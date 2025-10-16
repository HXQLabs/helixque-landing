"use client";

import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { Leaf3D } from './leaf-3d';

interface FallingLeaves3DProps {
  count?: number;
}

export function FallingLeaves3D({ count = 50 }: FallingLeaves3DProps) {
  // All hooks must be called at the top level, before any returns.
  const prefersReducedMotion = usePrefersReducedMotion();

  const leaves = useMemo(() => {
    // ✨ FIX: Check if `window` exists to prevent errors during server-side rendering.
    const effectiveWidth = typeof window !== "undefined" ? window.innerWidth : 1024;
    const numLeaves = effectiveWidth < 768 ? Math.floor(count / 2) : count;
    
    return Array.from({ length: numLeaves }).map((_, i) => ({
      id: i,
      initialPosition: [
        Math.random() * 20 - 10,
        Math.random() * 20 + 5,
        Math.random() * 10 - 5
      ] as [number, number, number],
      speed: 0.5 + Math.random() * 0.5,
      rotationSpeed: 0.5 + Math.random() * 0.5,
      windForce: 0.1 + Math.random() * 0.2,
    }));
  }, [count]);

  // ✨ FIX: The `if` check is now moved *after* all hooks have been called.
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        style={{ background: 'transparent' }}
        // ✨ FIX: Added `dpr` prop for performance optimization on high-res screens.
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Environment preset="forest" />

        <Suspense fallback={null}>
          {leaves.map((leaf) => (
            <Leaf3D
              key={leaf.id}
              initialPosition={leaf.initialPosition}
              speed={leaf.speed}
              rotationSpeed={leaf.rotationSpeed}
              windForce={leaf.windForce}
              ground={-10}
              boundary={{ x: [-15, 15], z: [-10, 10] }}
            />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}