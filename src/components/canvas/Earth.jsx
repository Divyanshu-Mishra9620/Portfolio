import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  useEffect(() => {
    // Validate and fix geometries in the scene
    earth.scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        const geometry = child.geometry;

        // Check and fix position attribute
        if (geometry.attributes.position) {
          const positions = geometry.attributes.position.array;
          let hasNaN = false;

          for (let i = 0; i < positions.length; i++) {
            if (!Number.isFinite(positions[i])) {
              positions[i] = 0;
              hasNaN = true;
            }
          }

          if (hasNaN) {
            geometry.attributes.position.needsUpdate = true;
          }
        }

        // Recompute bounding sphere to ensure it's valid
        geometry.computeBoundingSphere();
      }
    });
  }, [earth]);

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
