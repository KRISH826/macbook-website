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
        })
    }, []);

    useEffect(() => {
        const group = groupRef.current;
        if (!group) return;

        gsap.set('.box', {
            opacity: 0,
            y: 40,
        })

        gsap.set('.box1', {
            opacity: 1,
            y: 0,
        })

        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: `#${sectionId}`,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
                pin: true,
                invalidateOnRefresh: true,
            }
        })
        // sync the timeline with the feature sequence
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: `#${sectionId}`,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
                invalidateOnRefresh: true,
            }
        });

        modelTimeline.to(group.rotation, { y: Math.PI * 2, ease: 'power1.inOut' })

        timeline
            .addLabel('feature1')
            .call(() => setTexture('/videos/feature-1.mp4'))
            .to('.box1', { opacity: 1, y: 0, delay: 1 })
             
            .addLabel('feature2', '+=1')
            .call(() => setTexture('/videos/feature-2.mp4'))
            .to('.box2', { opacity: 1, y: 0 })

            .call(() => setTexture('/videos/feature-3.mp4'))
            .to('.box3', { opacity: 1, y: 0 })

            .call(() => setTexture('/videos/feature-4.mp4'))
            .to('.box4', { opacity: 1, y: 0 })

            .call(() => setTexture('/videos/feature-5.mp4'))
            .to('.box5', { opacity: 1, y: 0 })

        return () => {
            modelTimeline.scrollTrigger?.kill();
            modelTimeline.kill();
            timeline.scrollTrigger?.kill();
            timeline.kill();
        };
    }, [sectionId, isMobile]);

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-2xl uppercase">Loading...</h1></Html>}>
                <MacbookModel scale={isMobile ? 0.02 : 0.04} position={[0, -0.32, 0]} />
            </Suspense>
        </group>
    )
}

export default ModelScroll
