"use client"

import { performanceImages, performanceImgPositions } from '@/app/constants'
import Image from 'next/image'
import { useGSAP } from "@gsap/react"
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'

const Perfomance = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const sectionRef = React.useRef<HTMLElement>(null);
    useGSAP(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;
        gsap.fromTo(
            ".content p",
            { opacity: 0, y: 30 },
            {
                opacity: 1.5,
                y: 0,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".content p",
                    start: "top bottom",
                    end: "top center",
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                },
            }
        );

        if (isMobile) return;

        const tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power2.inOut", overwrite: "auto" },
            scrollTrigger: {
                trigger: sectionEl,
                start: "top center",
                end: "=+50%",
                scrub: 1,
                invalidateOnRefresh: true,
            }
        })

        performanceImgPositions.forEach((item) => {
            if (item.id === "p5") return;

            const imageEl = sectionEl.querySelector(`.${item.id}`);
            const vars: Record<string, string> = {};

            if (!imageEl) return;

            if (typeof item.left === "number") vars.left = `${item.left}%`;
            if (typeof item.right === "number") vars.right = `${item.right}%`;
            if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

            if (item.transform) vars.transform = item.transform;

            tl.to(imageEl, vars, 0);
        })


    }, { scope: sectionRef, dependencies: [isMobile] })
    return (
        <section id='performance' ref={sectionRef}>
            <h2>Next-level graphics perfomance. Game on.</h2>
            <div className='wrapper'>
                {
                    performanceImages.map((image) => (
                        <Image
                            className={`${image.id} w-auto h-auto`}
                            width={500}
                            height={500}
                            key={image.id}
                            src={image.src}
                            alt={image.id}
                        />
                    ))
                }
            </div>
            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
                        gaming feels more immersive and realistic than ever.
                    </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    )
}

export default Perfomance
