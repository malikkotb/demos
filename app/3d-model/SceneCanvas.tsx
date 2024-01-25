"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
} from "@react-three/drei";
import Model from "./Model";

export default function SceneCanvas({ source }: { source: string}) {
  return (
    <div className="flex justify-center items-center h-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 100]}}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={-Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Stage environment={"night"}>
          <Model source={source} scale={0.01} />
        </Stage>
      </Canvas>
    </div>
  );
}
