"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'

const Hero = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section id='hero'>
      <h1>MacBook Pro</h1>
      <Image src="/title.png" alt="MacBook Pro" width={500} height={100} />
      {/* Video */}
      <video src="/videos/hero.mp4" autoPlay muted playsInline ref={videoRef}></video>
      <button>Buy</button>
      <p>From $1,299. Available starting 2026.</p>
    </section>
  )
}

export default Hero