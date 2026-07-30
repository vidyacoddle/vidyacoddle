// @ts-nocheck
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float, Text, Grid } from "@react-three/drei";
import * as THREE from "three";

function GlassShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[2.5, 0, 2]}>
        <torusKnotGeometry args={[0.9, 0.25, 256, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={2}
          roughness={0}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.1}
          distortion={0.3}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#ffffff"
          attenuationDistance={2}
          attenuationColor="#a78bfa"
        />
      </mesh>
    </Float>
  );
}

function SceneBackground() {
  return (
    <>
      <Grid 
        position={[2.5, -2, -5]} 
        args={[20, 20]} 
        cellSize={1} 
        cellThickness={1} 
        cellColor="#7c3aed" 
        sectionSize={5} 
        sectionThickness={1.5} 
        sectionColor="#4c1d95" 
        fadeDistance={20} 
        fadeStrength={1} 
      />
      
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0.5, 2, -4]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={2} toneMapped={false} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[4.5, -1, -2]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={2} toneMapped={false} />
        </mesh>
      </Float>
    </>
  );
}

export function LiquidGlass3D() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 h-full w-full overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        
        <SceneBackground />
        <GlassShape />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
