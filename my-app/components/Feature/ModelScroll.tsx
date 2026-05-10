"use client"

import { featureSequence } from '@/app/constants';
import MacbookModel from '@/models/Macbook';
import useMacBookStore from '@/store';
import { Html } from '@react-three/drei';
import gsap from 'gsap';
import { Suspense, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger);

const ModelScroll = ({ sectionId }: { sectionId: string }) => {
    const groupRef = useRef<THREE.Group>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const { setTexture } = useMacBookStore();

    // 1. Preload Videos (Essential for smooth transitions)
    useEffect(() => {
        featureSequence.forEach((feature) => {
            const v = document.createElement('video');
            Object.assign(v, {
                src: feature.videoPath,
                muted: true,
                playsInline: true,
                preload: 'auto',
                crossOrigin: 'anonymous',
            });
            v.load();
        });
    }, []);

    useEffect(() => {
        const group = groupRef.current;
        if (!group) return;

        gsap.set('.box', { opacity: 0, y: 100 });
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#features", // Poora section pin hoga
                start: "top top",
                end: "+=5000",        // Zyada scroll space taaki overlap na ho
                scrub: 1.5,
                pin: true,          
                pinSpacing: true,     // Niche wale section ko dhakka dega (Overlap fix)
                invalidateOnRefresh: true,
            }
        });

        // --- FEATURE 1: EMAIL AI ---
        timeline
            .to('.box1', { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                onStart: () => setTexture('/videos/feature-1.mp4') 
            })
            .to({}, { duration: 2 }) // User ko padhne ka waqt do
            .to('.box1', { opacity: 0, y: -100, duration: 1 })

            // --- FEATURE 2: IMAGE AI ---
            .addLabel("step2")
            .to('.box2', { 
                opacity: 1, 
                y: 0, 
                duration: 1,
                onStart: () => setTexture('/videos/feature-2.mp4')
            }, "step2")
            .to({}, { duration: 2 })
            .to('.box2', { opacity: 0, y: -100, duration: 1 })

            // --- FEATURE 3: SUMMARIZE AI ---
            .addLabel("step3")
            .to('.box3', { 
                opacity: 1, 
                y: 0, 
                duration: 1,
                onStart: () => setTexture('/videos/feature-3.mp4')
            }, "step3")
            .to({}, { duration: 2 })
            .to('.box3', { opacity: 0, y: -100, duration: 1 });

        return () => {
            if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
            timeline.kill();
        };
    }, [setTexture]); // Dependency fix

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html center><h1 className="text-white text-2xl">Loading...</h1></Html>}>
                <MacbookModel scale={isMobile ? 0.03 : 0.05} position={[0, 0, 0]} 
                    rotation={[0, 0, 0]} />
            </Suspense>
        </group>
    )
}

export default ModelScroll;