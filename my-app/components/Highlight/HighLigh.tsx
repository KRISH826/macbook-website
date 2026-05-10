"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive"

const HighLight = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    useGSAP(() => {
        // Initial State
        gsap.set([".left-column", ".right-column"], {
            opacity: 0,
            y: 80, // Thoda kam travel distance better lagta hai
        })

        // Smooth Reveal Animation
        gsap.to([".left-column", ".right-column"], {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            stagger: 0.3, // Columns ke beech thoda zada gap
            duration: 1.2,

            scrollTrigger: {
                trigger: "#highlights",
                start: isMobile ? "top top" : "top 15%",
                toggleActions: "play none none reverse", 
                invalidateOnRefresh: true,
            },
        })
    }, { dependencies: [isMobile] }) // Dependency lazmi hai taaki mobile resize pe refresh ho
    return (
        <section id="highlights">
            <h2>There’s never been a better time to upgrade.</h2>
            <h3>Here’s what you get with the new MacBook Pro.</h3>
            <div className="masonry">
                <div className="left-column">
                    <div>
                        <img src="/laptop.png" alt="Laptop" />
                        <p>Fly through demanding tasks up to 9.8x faster.</p>
                    </div>
                    <div>
                        <img src="/sun.png" alt="Sun" />
                        <p>A stunning <br />
                            Liquid Retina XDR <br />
                            display.</p>
                    </div>
                </div>
                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" alt="AI" />
                        <p>Built for <br />
                            <span>Apple Intelligence.</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="Battery" />
                        <p>Up to <span className="green-gradient">14 more hours</span> battery life. <span className="text-dark-100">(Up to 24 hours total.)</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HighLight