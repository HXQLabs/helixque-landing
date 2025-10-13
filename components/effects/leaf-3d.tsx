import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, MeshStandardMaterial, DoubleSide, Euler } from 'three';

interface Leaf3DProps {
  initialPosition: [number, number, number];
  speed: number;
  rotationSpeed: number;
  windForce: number;
  ground: number; // Y-coordinate where leaves "land" or reset
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
  const meshRef = useRef<THREE.Mesh>(null);
  const color = useMemo(() => leafColors[Math.floor(Math.random() * leafColors.length)], []);
  const material = useMemo(() => new MeshStandardMaterial({ color, side: DoubleSide }), [color]);

  // Leaf geometry (a simple flat shape)
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const width = 0.5 + Math.random() * 0.3; // Randomize width
    const height = 0.7 + Math.random() * 0.4; // Randomize height

    shape.moveTo(0, height / 2);
    shape.bezierCurveTo(width / 2, height / 2 * 0.8, width / 2, -height / 2 * 0.8, 0, -height / 2);
    shape.bezierCurveTo(-width / 2, -height / 2 * 0.8, -width / 2, height / 2 * 0.8, 0, height / 2);

    return new THREE.ShapeGeometry(shape);
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
        initialPosition[1] + Math.random() * 5, // Reset higher up
        Math.random() * (boundary.z[1] - boundary.z[0]) + boundary.z[0]
      );
      meshRef.current.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
      meshRef.current.scale.setScalar(0.8 + Math.random() * 0.4); // Randomize scale on reset
      meshRef.current.material = new MeshStandardMaterial({
        color: leafColors[Math.floor(Math.random() * leafColors.length)],
        side: DoubleSide
      });
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={initialPosition}
      rotation={new Euler(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2)}
      scale={[0.8 + Math.random() * 0.4, 0.8 + Math.random() * 0.4, 1]} // Randomize initial scale
      material={material}
      geometry={geometry}
    />
  );
}