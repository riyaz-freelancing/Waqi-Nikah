import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Create a custom curved petal geometry
function createPetalGeometry() {
  const geom = new THREE.PlaneGeometry(0.35, 0.55, 6, 6);
  const pos = geom.attributes.position;
  // Curve the plane into a natural flower petal spoon shape
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    // Curl inwards on z
    const z = Math.sin((x / 0.35) * Math.PI) * 0.08 - (y * y * 0.15);
    pos.setZ(i, z);
  }
  geom.computeVertexNormals();
  return geom;
}

function PetalsField({ count = 45 }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const petalGeometry = useMemo(() => createPetalGeometry(), []);

  // Palette of petals: blush pink, ivory champagne, soft rose, dusty blue petal
  const petalColors = useMemo(() => [
    new THREE.Color('#F4C6D0'),
    new THREE.Color('#FCE5EA'),
    new THREE.Color('#FFF5E4'),
    new THREE.Color('#E8CF8A'),
    new THREE.Color('#B8CEE8'),
  ], []);

  // Initialize petals with random positions, rotations, speeds, and color assignments
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 22,
        z: (Math.random() - 0.5) * 12,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        speedY: 0.012 + Math.random() * 0.018,
        swaySpeed: 0.6 + Math.random() * 0.8,
        swayPhase: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        scale: 0.6 + Math.random() * 0.7,
        color: petalColors[i % petalColors.length],
      });
    }
    return temp;
  }, [count, petalColors]);

  useEffect(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < count; i++) {
      meshRef.current.setColorAt(i, particles[i].color);
    }
    meshRef.current.instanceColor.needsUpdate = true;
  }, [count, particles]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((p, i) => {
      // Fall down slowly
      p.y -= p.speedY * (1 + Math.sin(time + p.swayPhase) * 0.2);
      // Gentle horizontal sway
      p.x += Math.sin(time * p.swaySpeed + p.swayPhase) * 0.008;
      // Gentle tumble
      p.rotX += p.rotSpeedX;
      p.rotY += p.rotSpeedY;
      p.rotZ += 0.005;

      // Wrap around when falling past bottom
      if (p.y < -11) {
        p.y = 11;
        p.x = (Math.random() - 0.5) * 20;
      }

      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(p.rotX, p.rotY, p.rotZ);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[petalGeometry, null, count]}
      frustumCulled={false}
    >
      <meshStandardMaterial
        side={THREE.DoubleSide}
        roughness={0.4}
        metalness={0.05}
        transparent
        opacity={0.88}
      />
    </instancedMesh>
  );
}

export default function FloatingPetals3D() {
  const [canRender3D, setCanRender3D] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference or low memory/concurrency
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const isLowPower = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    if (prefersReducedMotion || isLowPower) {
      setCanRender3D(false);
    }
  }, []);

  if (!canRender3D) {
    return null; // Graceful degradation for low power devices
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#FFF5E4" />
        <directionalLight position={[-5, -5, 2]} intensity={0.5} color="#F4C6D0" />
        <PetalsField count={40} />
      </Canvas>
    </div>
  );
}
