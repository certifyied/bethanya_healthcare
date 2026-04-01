import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Leaf({ position, speed, rotSpeed, scale }: { 
  position: [number, number, number]; 
  speed: number; 
  rotSpeed: number;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const initialY = position[1];

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.position.y = initialY + Math.sin(t * speed) * 0.8;
    ref.current.position.x += Math.sin(t * speed * 0.5) * 0.001;
    ref.current.rotation.x = Math.sin(t * rotSpeed) * 0.5;
    ref.current.rotation.z = Math.cos(t * rotSpeed * 0.7) * 0.4;
    ref.current.rotation.y += 0.003;
  });

  // Leaf shape
  const leafShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.15, 0.3, 0.3, 0.5, 0, 0.8);
    shape.bezierCurveTo(-0.3, 0.5, -0.15, 0.3, 0, 0);
    return shape;
  }, []);

  const geometry = useMemo(() => {
    return new THREE.ShapeGeometry(leafShape, 8);
  }, [leafShape]);

  return (
    <mesh ref={ref} position={position} scale={scale} geometry={geometry}>
      <meshStandardMaterial
        color="#4caf50"
        transparent
        opacity={0.7}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function MouseParallax() {
  const { camera } = useThree();
  
  useFrame((state) => {
    const pointer = state.pointer;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.5, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.3, 0.02);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

const leaves = Array.from({ length: 18 }, (_, i) => ({
  position: [
    (Math.random() - 0.5) * 8,
    (Math.random() - 0.5) * 5,
    (Math.random() - 0.5) * 4,
  ] as [number, number, number],
  speed: 0.3 + Math.random() * 0.5,
  rotSpeed: 0.2 + Math.random() * 0.4,
  scale: 0.3 + Math.random() * 0.5,
  key: i,
}));

const FloatingLeaves = () => (
  <div className="absolute inset-0 z-0">
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#a5d6a7" />
      <pointLight position={[-3, 2, 4]} intensity={0.4} color="#81c784" />
      {leaves.map((leaf) => (
        <Leaf key={leaf.key} {...leaf} />
      ))}
      <MouseParallax />
    </Canvas>
  </div>
);

export default FloatingLeaves;
