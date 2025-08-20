import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const StarField = ({ count = 5000, shootingStarCount = 3 }) => {
  const ref = useRef();
  const shootingStarRef = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  // Generate random star positions
  const starPositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }
    return positions;
  }, [count]);

  // Generate shooting star positions
  const shootingStarPositions = useMemo(() => {
    const positions = new Float32Array(shootingStarCount * 3);
    for (let i = 0; i < shootingStarCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;
    }
    return positions;
  }, [shootingStarCount]);

  // Animation variables
  const timeRef = useRef(0);
  const shootingStarTimeRef = useRef(0);

  useFrame((state, delta) => {
    timeRef.current += delta;
    shootingStarTimeRef.current += delta;

    // Twinkling effect for stars
    if (ref.current) {
      ref.current.rotation.x = Math.sin(timeRef.current * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(timeRef.current * 0.15) * 0.1;
    }

    // Shooting star movement
    if (shootingStarRef.current) {
      shootingStarRef.current.rotation.z += delta * 0.5;
      shootingStarRef.current.position.x = Math.sin(shootingStarTimeRef.current * 0.5) * 500;
      shootingStarRef.current.position.y = Math.cos(shootingStarTimeRef.current * 0.3) * 500;
    }
  });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (ref.current) {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = (event.clientY / window.innerHeight) * 2 - 1;
        
        ref.current.rotation.x = mouseY * 0.1;
        ref.current.rotation.y = mouseX * 0.1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main starfield */}
      <Points
        ref={ref}
        positions={starPositions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={aspect * 2}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Shooting stars */}
      <Points
        ref={shootingStarRef}
        positions={shootingStarPositions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#60a5fa"
          size={aspect * 4}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </>
  );
};

export default StarField;
