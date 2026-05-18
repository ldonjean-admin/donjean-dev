"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import { useEffect } from "react";

const DonjeanScene3D = dynamic(
    () => import("./donjean-scene-3d").then((m) => m.DonjeanScene3D),
    { ssr: false, loading: () => null }
);

interface DonjeanBrand3DProps {
    onSceneReady?: () => void;
    sceneReady?: boolean;
}

/**
 * DonjeanBrand3D — Hero v3 épuré (cream + discreet watermark).
 *
 * .dev suffix has moved inside the 3D scene as a drei <Html> anchored
 * to the mesh world position. This file just routes onSceneReady and
 * sceneReady through to the scene, and handles the opacity fade and
 * the reduced-motion fallback.
 */
export function DonjeanBrand3D({
    onSceneReady,
    sceneReady = false,
}: DonjeanBrand3DProps) {
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (reduceMotion && onSceneReady) {
            onSceneReady();
        }
    }, [reduceMotion, onSceneReady]);

    if (reduceMotion) {
        return (
            <div
                className="pointer-events-none flex h-full select-none items-start justify-center pt-[6vh]"
                aria-hidden
            >
                <span
                    className="text-stroke-ink font-display font-black uppercase leading-none"
                    style={{
                        fontSize: "clamp(3rem, 10vw, 8rem)",
                        letterSpacing: "-0.04em",
                    }}
                >
                    DONJEAN
                    <span
                        className="ml-1 align-super font-mono text-burnt-orange"
                        style={{ fontSize: "0.18em" }}
                    >
                        .dev
                    </span>
                </span>
            </div>
        );
    }

    return (
        <div className="pointer-events-none relative h-full w-full" aria-hidden>
            {/* 3D canvas — fades to 0.25 opacity (truly discreet watermark) */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                animate={{ opacity: sceneReady ? 0.25 : 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <DonjeanScene3D onSceneReady={onSceneReady} sceneReady={sceneReady} />
            </motion.div>
        </div>
    );
}