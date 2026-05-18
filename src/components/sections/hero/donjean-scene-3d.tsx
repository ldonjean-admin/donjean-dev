"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
    Center,
    Environment,
    MeshTransmissionMaterial,
    Text3D,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group } from "three";

/* ============================================================
   Easing helpers
   ============================================================ */

const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const easeOutBack = (t: number) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ============================================================
   Animation waypoints & timing
   ============================================================ */

const CAM_START = { x: 3, y: 1.8, z: 7 };
const CAM_FACE = { x: 0, y: 0, z: 7.5 };
const CAM_BACKGROUND = { x: 0, y: 0, z: 14 };
const LOOK_BACKGROUND_Y = -3;

const DURATION_ORBIT = 2.5;
const DURATION_RECEDE = 1.5;
const TOTAL_DURATION = DURATION_ORBIT + DURATION_RECEDE;

const DEV_APPEAR_START = 3.5;
const DEV_APPEAR_DURATION = 0.5;

/* ============================================================
   Glass material props shared by DONJEAN and .dev
   ============================================================ */

const GLASS_MATERIAL_PROPS = {
    samples: 6,
    resolution: 256,
    transmission: 1,
    roughness: 0.05,
    ior: 1.45,
    chromaticAberration: 0.05,
    backside: true,
    color: "#d97757",
    attenuationColor: "#b85b3f",
} as const;

/* ============================================================
   Scene
   ============================================================ */

interface DonjeanScene3DProps {
    onSceneReady?: () => void;
    sceneReady?: boolean;
}

export function DonjeanScene3D({ onSceneReady }: DonjeanScene3DProps) {
    const devGroupRef = useRef<Group>(null);

    return (
        <Canvas
            camera={{ position: [CAM_START.x, CAM_START.y, CAM_START.z], fov: 38 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: "transparent" }}
        >
            <Suspense fallback={null}>
                <SceneLights />
                <Environment preset="apartment" background={false} />

                <Animator onSceneReady={onSceneReady} devGroupRef={devGroupRef} />

                <Center>
                    <DonjeanText />
                </Center>

                <group ref={devGroupRef} scale={0}>
                    <DevText />
                </group>
            </Suspense>
        </Canvas>
    );
}

function Animator({
    onSceneReady,
    devGroupRef,
}: {
    onSceneReady?: () => void;
    devGroupRef: React.RefObject<Group | null>;
}) {
    const notifiedRef = useRef(false);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const cam = state.camera;

        if (t < DURATION_ORBIT) {
            const localT = t / DURATION_ORBIT;
            const eased = easeInOutCubic(localT);
            cam.position.x = lerp(CAM_START.x, CAM_FACE.x, eased);
            cam.position.y = lerp(CAM_START.y, CAM_FACE.y, eased);
            cam.position.z = lerp(CAM_START.z, CAM_FACE.z, eased);
            cam.lookAt(0, 0, 0);
        } else if (t < TOTAL_DURATION) {
            const localT = (t - DURATION_ORBIT) / DURATION_RECEDE;
            const eased = easeOutCubic(localT);
            cam.position.x = lerp(CAM_FACE.x, CAM_BACKGROUND.x, eased);
            cam.position.y = lerp(CAM_FACE.y, CAM_BACKGROUND.y, eased);
            cam.position.z = lerp(CAM_FACE.z, CAM_BACKGROUND.z, eased);
            const lookY = lerp(0, LOOK_BACKGROUND_Y, eased);
            cam.lookAt(0, lookY, 0);
        } else {
            cam.position.set(CAM_BACKGROUND.x, CAM_BACKGROUND.y, CAM_BACKGROUND.z);
            cam.lookAt(0, LOOK_BACKGROUND_Y, 0);
            if (!notifiedRef.current) {
                notifiedRef.current = true;
                onSceneReady?.();
            }
        }

        if (devGroupRef.current) {
            if (t < DEV_APPEAR_START) {
                devGroupRef.current.scale.setScalar(0);
            } else {
                const localT = Math.min(
                    (t - DEV_APPEAR_START) / DEV_APPEAR_DURATION,
                    1
                );
                const eased = easeOutBack(localT);
                devGroupRef.current.scale.setScalar(Math.max(0, eased));
            }
        }
    });

    return null;
}

function SceneLights() {
    return (
        <>
            <ambientLight intensity={0.6} color="#faf6ee" />
            <directionalLight position={[5, 8, 5]} intensity={1.8} color="#faf6ee" />
            <directionalLight
                position={[-5, -2, 3]}
                intensity={0.9}
                color="#faf6ee"
            />
            <pointLight
                position={[0, 0, -3]}
                intensity={5}
                color="#d97757"
                distance={11}
            />
            <pointLight
                position={[3, 3, 4]}
                intensity={2.5}
                color="#d97757"
                distance={9}
            />
        </>
    );
}

const FONT_URL =
    "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json";

function DonjeanText() {
    return (
        <Text3D
            font={FONT_URL}
            size={1.2}
            height={0.38}
            bevelEnabled
            bevelThickness={0.04}
            bevelSize={0.025}
            bevelSegments={6}
            curveSegments={12}
            letterSpacing={-0.05}
        >
            DONJEAN
            <MeshTransmissionMaterial
                {...GLASS_MATERIAL_PROPS}
                thickness={0.55}
                attenuationDistance={0.9}
            />
        </Text3D>
    );
}

function DevText() {
    return (
        <Text3D
            font={FONT_URL}
            size={0.6}
            height={0.19}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.012}
            bevelSegments={5}
            curveSegments={10}
            letterSpacing={-0.05}
            position={[3.85, -0.6, 0]}
        >
            .dev
            <MeshTransmissionMaterial
                {...GLASS_MATERIAL_PROPS}
                thickness={0.3}
                attenuationDistance={0.55}
            />
        </Text3D>
    );
}