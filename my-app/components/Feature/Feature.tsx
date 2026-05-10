"use client"

import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { features } from "@/app/constants";
import StudioLight from "../productview/StudioLight";
import ModelScroll from "./ModelScroll";

const Feature = () => {
    return (
        <section id="features">
            <h2>See it all in a new light.</h2>

            <Canvas id="f-canvas" camera={{ position: [0, 0.15, 3.4], fov: 38 }}>
                <StudioLight />
                <ambientLight intensity={0.5} />
                <ModelScroll sectionId="f-canvas" />
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx("box", `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>
                            <span className="text-white">{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Feature;
