import { useGLTF } from "@react-three/drei";

type Model = {
    source: string,
    scale: number
}
export default function Model({ source, scale }: Model) {
    const { scene } = useGLTF(source);
    return <primitive object={scene} scale={scale} />
}
