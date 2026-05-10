"use client"

import { Canvas } from '@react-three/fiber'
import StudioLight from '../productview/StudioLight'
import { features } from '@/app/constants'
import clsx from 'clsx'

const Feature = () => {
  return (
    <section id='features'>
        <h2>See it all in a new Light</h2>
        <Canvas id='feature-canvas' shadows camera={{ position: [0, 0, 5], fov: 50 }}>
            <StudioLight/>
            <ambientLight intensity={0.5} />
        </Canvas>
        <div className='absolute inset-0'>
            {
                features.map((feature, index) => (
                    <div className={clsx('box', `box${index + 1}`, feature.styles)} key={feature.id}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>
                            <span className="text-white">{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))
            }

        </div>
    </section>
  )
}

export default Feature