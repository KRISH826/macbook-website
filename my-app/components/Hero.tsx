"use client"

import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Hero = ({ loading }: { loading: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || loading) return;

    video.playbackRate = 2;
    video.currentTime = 0;
    void video.play().catch(() => {
      // Ignore autoplay rejections so the UI stays responsive.
    });
  }, [loading]);

  useEffect(() => {
    const image = imageRef.current;
    if (!image || loading) return;

    const animation = gsap.fromTo(
      image,
      {
        opacity: 0,
        y: 50,
        filter: "blur(7px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 2,
        ease: "power4.out",
      }
    );

    return () => {
      animation.kill();
    };
  }, [loading]);

  return (
    <section id='hero'>
      <h1>MacBook Pro</h1>
      <Image
        ref={imageRef}
        src="/title.webp"
        alt="MacBook Pro"
        width={500}
        height={100}
        style={{ width: '100%', maxWidth: '42rem', height: 'auto' }}
      />
      {/* Video */}
      <video src="/videos/hero.mp4" muted playsInline ref={videoRef}></video>
      <button>Buy</button>
      <p>From $1,299. Available starting 2026.</p>
    </section>
  )
}

export default Hero
