"use client"

import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { features } from "@/app/constants";
import StudioLight from "../productview/StudioLight";
import ModelScroll from "./ModelScroll";
import { OrbitControls } from "@react-three/drei";

const Feature = () => {
    return (
        // Added relative and h-screen to lock the height
        <section id="features" className="relative h-[85vh] w-full overflow-hidden bg-black">
            <h2 className="absolute top-10 left-0 right-0 text-white z-10">
                See it all in a new light.
            </h2>

            <Canvas id="f-canvas" camera={{ position: [0, 1.2, 5], fov: 38 }}>
                <StudioLight />
                <ambientLight intensity={0.5} />
                <ModelScroll sectionId="features" />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>

            {/* Vertically centering the boxes container */}
            <div className="absolute inset-0 flex items-center pointer-events-none z-20">
                <div className="relative w-full h-full">
                    {features.map((feature, index) => (
                        <div 
                            key={feature.id} 
                            className={clsx(
                                "box absolute max-w-sm md:max-w-md", // Added absolute and max-width
                                `box${index + 1}`, 
                                feature.styles
                            )}
                        >
                            <img src={feature.icon} alt={feature.highlight} className="w-12 h-12 mb-4" />
                            <p className="text-gray-400 text-lg">
                                <span className="text-white font-bold block text-2xl mb-2">
                                    {feature.highlight}
                                </span>
                                {feature.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;