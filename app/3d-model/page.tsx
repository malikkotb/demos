import SceneCanvas from "./SceneCanvas";

export default function Home() {
  return (
    <div className="w-full h-screen items-center justify-center">
      <SceneCanvas source={"./yacht.glb"} />
    </div>
  );
}
