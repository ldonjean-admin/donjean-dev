"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    Center,
    Environment,
    MeshTransmissionMaterial,
    Text3D,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
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
   Animation waypoints & timing (desktop baseline)
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
   Responsive zoom factor
   ============================================================
   The DONJEAN.dev wordmark spans roughly -3 to +5 world units
   in x (DONJEAN centered + .dev offset at x=3.85). On narrow
   viewports (mobile portrait, aspect ~0.46), the camera at z=14
   only sees ~4.4 units of width — the wordmark overshoots.

   We scale all camera positions and the lookAt y-offset uniformly
   by a factor derived from the canvas aspect ratio. Uniform scaling
   preserves the orbit angle and final framing on desktop while
   simply receding the camera proportionally on narrow viewports.
*/
function getZoomFactor(aspect: number): number {
    // Floor aspect at 0.5 to cap scaling on ultra-thin viewports
    // (avoids excessive zoom-out on landscape phones rotated to portrait).
    const a = Math.max(aspect, 0.5);
    // Aspects ≥ 1.4 (desktop landscape) get no adjustment.
    return Math.max(1, 1.4 / a);
}

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
            // Initial camera position is overwritten on first frame by Animator,
            // which applies the responsive zoom factor based on actual canvas size.
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
    const { size } = useThree();

    // Recompute waypoints whenever canvas size changes (resize, device rotate).
    // Uniform scaling by k preserves orbit angles; narrower viewports recede further.
    const waypoints = useMemo(() => {
        const aspect = size.width / size.height;
        const k = getZoomFactor(aspect);
        return {
            start: {
                x: CAM_START.x * k,
                y: CAM_START.y * k,
                z: CAM_START.z * k,
            },
            face: {
                x: CAM_FACE.x * k,
                y: CAM_FACE.y * k,
                z: CAM_FACE.z * k,
            },
            background: {
                x: CAM_BACKGROUND.x * k,
                y: CAM_BACKGROUND.y * k,
                z: CAM_BACKGROUND.z * k,
            },
            lookBackgroundY: LOOK_BACKGROUND_Y * k,
        };
    }, [size.width, size.height]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const cam = state.camera;
        const { start, face, background, lookBackgroundY } = waypoints;

        if (t < DURATION_ORBIT) {
            const localT = t / DURATION_ORBIT;
            const eased = easeInOutCubic(localT);
            cam.position.x = lerp(start.x, face.x, eased);
            cam.position.y = lerp(start.y, face.y, eased);
            cam.position.z = lerp(start.z, face.z, eased);
            cam.lookAt(0, 0, 0);
        } else if (t < TOTAL_DURATION) {
            const localT = (t - DURATION_ORBIT) / DURATION_RECEDE;
            const eased = easeOutCubic(localT);
            cam.position.x = lerp(face.x, background.x, eased);
            cam.position.y = lerp(face.y, background.y, eased);
            cam.position.z = lerp(face.z, background.z, eased);
            const lookY = lerp(0, lookBackgroundY, eased);
            cam.lookAt(0, lookY, 0);
        } else {
            cam.position.set(background.x, background.y, background.z);
            cam.lookAt(0, lookBackgroundY, 0);
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
