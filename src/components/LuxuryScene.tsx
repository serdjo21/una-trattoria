"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Orb({ position, size = 1, color = "#D2AA5F" }: any) {
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.7}>
      <mesh position={position}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.35}
          metalness={0.15}
        />
      </mesh>
    </Float>
  );
}

export default function LuxuryScene() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color("black"), 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
        }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[3, 2, 4]} intensity={1.1} />
        <pointLight position={[-2, -1, 3]} intensity={0.9} color={"#D2AA5F"} />

        <Orb position={[-1.8, 0.8, 0]} size={0.9} color="#D2AA5F" />
        <Orb position={[1.6, -0.6, -0.5]} size={1.15} color="#8C6A3A" />
        <Orb position={[0.0, 1.2, -1]} size={0.65} color="#B08A4E" />
      </Canvas>

      {/* soft vignette + blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/85" />
      <div className="absolute inset-0 blur-2xl opacity-60" />
      <div className="absolute inset-0 grain" />
    </div>
  );
}