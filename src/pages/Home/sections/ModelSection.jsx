import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { RoomModel } from "../../../components";
import { useEffect, useState } from "react";

export default function ModelSection({}) {
    const [isTablet, setIsTablet] = useState(false);
    const [scale, setScale] = useState(0);

    useEffect(() => {
        setScale(window.innerWidth <= 768 ? 0.3 : 0.5);
        if (window.innerWidth >= 1024 && window.innerWidth <= 768)
            setIsTablet(true);
    }, [window.innerWidth]);

    return (
        <Canvas camera={{ position: [0, 8, 15], fov: 45 }}>
            <OrbitControls
                enablePan={false}
                enableZoom={isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <group
                scale={scale}
                position={[0, -3, 1]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <RoomModel />
            </group>
        </Canvas>
    );
}
