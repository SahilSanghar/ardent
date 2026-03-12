import { Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useCallback, useMemo, useRef } from "react";
import * as THREE from "three";
import { Model } from "./chess";

function RotatingMesh({ targetAngle }: { targetAngle: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const currentAngle = useRef(0);

  useFrame(() => {
    if (meshRef.current) {
      currentAngle.current =
        currentAngle.current + (targetAngle - currentAngle.current) * 0.1;
      meshRef.current.rotation.y = currentAngle.current;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, -2.5, 0]}
      scale={[0.5, 0.5, 0.5]}
      castShadow
      receiveShadow
    >
      <Model />
    </mesh>
  );
}

export default function Queen({ angle }: { angle: number }) {

  

  const setAngle = useCallback(
    (degrees: number) => (degrees * Math.PI) / 180,
    []
  );
  const targetAngle = useMemo(() => setAngle(angle), [setAngle, angle]);

  return (
    <div className="w-full h-full">
      <Canvas>
        <Environment preset="sunset" />
        <RotatingMesh targetAngle={targetAngle} />
      </Canvas>
    </div>
  );
}
