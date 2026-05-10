"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(ScrollTrigger);

const HighLight = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        gsap.set([".left-column", ".right-column"], {
            opacity: 0,
            y: 80,
        })

        gsap.to([".left-column", ".right-column"], {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            stagger: 0.3,
            duration: 1.2,

            scrollTrigger: {
                trigger: sectionEl,
                start: isMobile ? "top top" : "top 15%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
            },
        })

        gsap.to(".highlight-copy", {
            opacity: 1,
            y: 0,
            ease: "power1.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".masonry",
                start: "top bottom",
                end: "top center",
                scrub: 1.5,
                invalidateOnRefresh: true,
            },
        });
    }, { scope: sectionRef, dependencies: [isMobile] })

    return (
        <section id="highlights" ref={sectionRef}>
            <h2>There’s never been a better time to upgrade.</h2>
            <h3>Here’s what you get with the new MacBook Pro.</h3>
            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="Laptop" />
                        <p className="highlight-copy">Fly through demanding tasks up to 9.8x faster.</p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Sun" />
                        <p className="highlight-copy">A stunning <br />
                            Liquid Retina XDR <br />
                            display.</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" alt="AI" />
                        <p className="highlight-copy">Built for <br />
                            <span>Apple Intelligence.</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="Battery" />
                        <p className="highlight-copy">Up to <span className="green-gradient">14 more hours</span> battery life. <span className="text-dark-100">(Up to 24 hours total.)</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HighLight
