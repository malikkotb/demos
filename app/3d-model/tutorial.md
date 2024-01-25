### Initialize our project

Let's start the project by setting up a Next.js app with TypeScript and utilizing the app router. Just run `npx create-next-app@latest client` in your terminal.

## Adding the JSX and CSS

We can clear out all the contents in the page.tsx, and global.css files, and add our own HTML and CSS, to begin with a clean slate in the application.

- We will use Three.js for our model. We're using Next (React) so we can run `npm i @types/three @react-three/fiber` and `npm i @react-three/drei`.
- We will use TailwindCSS for styling.
- Head over to sketchfab.com and download a 3d .glb file. Then place that file in the public directory of your project.

### Page Component

We create a full-screen environment and place our `SceneCanvas` in the center. As a source prop we pass the name of our .glb-file.
```
import SceneCanvas from "@/components/SceneCanvas";

export default function Home() {
  return (
    <div className="w-screen h-screen items-center justify-center">
      <SceneCanvas source={"/yacht.glb"} />
    </div>
  );
}
```

### SceneCanvas component

```
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
        {/* <color attach="background" /> */}
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
```

### Model component

```
import { useGLTF } from "@react-three/drei";

type Model = {
    source: string,
    scale: number
}
export default function Model({ source, scale }: Model) {
    const { scene } = useGLTF(source);
    return <primitive object={scene} scale={scale} />
}
```
