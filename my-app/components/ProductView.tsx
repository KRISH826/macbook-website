"use client"

import useMacBookStore from '@/store'
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import StudioLight from './productview/StudioLight';
import {useMediaQuery} from "react-responsive"
import ModelSwitcher from './productview/ModelSwitcher';

const ProductView = () => {
    const {color, scale, setColor, setScale} = useMacBookStore();
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    return (
        <section id='product-viewer'>
            <h2>Take a closer look</h2>
            <div className='controls'>
                <p className='info'>MacbookPro 16" in silver/ space black</p>
                <div className='flex-center gap-5 mt-5'>
                    {/* <div className="color-control">
                        <div className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')} onClick={() => setColor("#adb5bd")} />
                        <div className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')} onClick={() => setColor("#2e2c2e")} />
                    </div> */}
                    <div className='size-control px-3!'>
                        <div className={clsx('bg-neutral-900', scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')} onClick={() => setScale(0.06)}>
                            <p>14"</p>
                        </div>
                        <div className={clsx('bg-neutral-900', scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')} onClick={() => setScale(0.08)}>
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>
            <Canvas
                id="canvas"
                camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
                gl={{ antialias: true, toneMappingExposure: 1.3 }}
            >
                <StudioLight />
                <ModelSwitcher scale={scale} isMobile={isMobile} />
                {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
            </Canvas>
        </section>
    )
}

export default ProductView
