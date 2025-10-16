import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
// ✨ FIX: Import all necessary classes directly from 'three'
import { Color, MeshStandardMaterial, DoubleSide, Euler, Mesh, Shape, ShapeGeometry } from 'three';

interface Leaf3DProps {
  initialPosition: [number, number, number];
  speed: number;
  rotationSpeed: number;
  windForce: number;
  ground: number;
  boundary: {
    x: [number, number];
    z: [number, number];
  };
}

const leafColors = [
  new Color('#FF7518'), // Bright orange
  new Color('#FF8C42'), // Slightly lighter orange
  new Color('#FFA366'), // Even lighter orange
  new Color('#CD853F'), // Peru (brownish orange)
  new Color('#D2691E'), // Chocolate (darker brown)
];

export function Leaf3D({ initialPosition, speed, rotationSpeed, windForce, ground, boundary }: Leaf3DProps) {
  // ✨ FIX: Use the imported 'Mesh' type for the ref
  const meshRef = useRef<Mesh>(null);
  const color = useMemo(() => leafColors[Math.floor(Math.random() * leafColors.length)], []);
  const material = useMemo(() => new MeshStandardMaterial({ color, side: DoubleSide }), [color]);

  const geometry = useMemo(() => {
    // ✨ FIX: Use the imported 'Shape' and 'ShapeGeometry' classes directly
    const shape = new Shape();
    const width = 0.5 + Math.random() * 0.3;
    const height = 0.7 + Math.random() * 0.4;

    shape.moveTo(0, height / 2);
    shape.bezierCurveTo(width / 2, height / 2 * 0.8, width / 2, -height / 2 * 0.8, 0, -height / 2);
    shape.bezierCurveTo(-width / 2, -height / 2 * 0.8, -width / 2, height / 2 * 0.8, 0, height / 2);

    return new ShapeGeometry(shape);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Apply gravity
    meshRef.current.position.y -= speed * delta;
    
    // Apply wind force
    meshRef.current.position.x += windForce * Math.sin(state.clock.elapsedTime * 0.5 + meshRef.current.uuid.charCodeAt(0)) * delta;
    meshRef.current.position.z += windForce * Math.cos(state.clock.elapsedTime * 0.7 + meshRef.current.uuid.charCodeAt(1)) * delta;

    // Apply rotation
    meshRef.current.rotation.x += rotationSpeed * Math.sin(state.clock.elapsedTime * 0.5) * delta;
    meshRef.current.rotation.y += rotationSpeed * delta;
    meshRef.current.rotation.z += rotationSpeed * Math.cos(state.clock.elapsedTime * 0.6) * delta;

    // Reset if leaf falls below ground
    if (meshRef.current.position.y < ground) {
      meshRef.current.position.set(
        Math.random() * (boundary.x[1] - boundary.x[0]) + boundary.x[0],
        initialPosition[1] + Math.random() * 5,
        Math.random() * (boundary.z[1] - boundary.z[0]) + boundary.z[0]
      );
      meshRef.current.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
      meshRef.current.scale.setScalar(0.8 + Math.random() * 0.4);
      
      // ✨ FIX: Instead of creating a new material, reuse the existing one and just change its color.
      // This prevents a major memory leak and improves performance.
      const existingMaterial = meshRef.current.material as MeshStandardMaterial;
      existingMaterial.color.set(leafColors[Math.floor(Math.random() * leafColors.length)]);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={initialPosition}
      rotation={new Euler(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2)}
      scale={[0.8 + Math.random() * 0.4, 0.8 + Math.random() * 0.4, 1]}
      material={material}
      geometry={geometry}
    />
  );
}