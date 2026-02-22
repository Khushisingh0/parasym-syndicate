import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

function NetworkParticles() {
  const groupRef = useRef();
  const { camera } = useThree();

  const nodeCount = 160;
  const maxDistance = 2;

  const { nodes, velocities } = useMemo(() => {
    const nodes = [];
    const velocities = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        )
      );

      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        )
      );
    }

    return { nodes, velocities };
  }, []);

  // Scroll depth effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      camera.position.z = 14 - scrollY * 0.003;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [camera]);

  useFrame(() => {
    if (!groupRef.current) return;

    const nodePositions = [];
    const linePositions = [];

    // Move nodes
    nodes.forEach((node, i) => {
      node.add(velocities[i]);

      ["x", "y", "z"].forEach((axis) => {
        if (node[axis] > 10 || node[axis] < -10) {
          velocities[i][axis] *= -1;
        }
      });

      nodePositions.push(node.x, node.y, node.z);
    });

    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDistance) {
          linePositions.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
        }
      }
    }

    // Update node geometry
    groupRef.current.children[0].geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(nodePositions), 3)
    );

    // Update line geometry
    groupRef.current.children[1].geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(linePositions), 3)
    );
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      <points>
        <bufferGeometry />
        <pointsMaterial
          size={0.08}
          color="#ff7a00"
          sizeAttenuation
        />
      </points>

      {/* Lines */}
      <lineSegments>
        <bufferGeometry />
        <lineBasicMaterial
          color="#ff7a00"
          transparent
          opacity={0.2}
        />
      </lineSegments>
    </group>
  );
}

export default function NetworkBackground() {
  return (
   <div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    zIndex: 0,
    pointerEvents: "none"
  }}
>
      <Canvas
  style={{ width: "100%", height: "100%" }}
  camera={{ position: [0, 0, 14] }}
  gl={{ alpha: true }}
>
        <ambientLight intensity={0.6} />
        <NetworkParticles />
      </Canvas>
    </div>
  );
}

