import { Environment, Lightformer, SpotLight } from '@react-three/drei'
import React from 'react'

const StudioLight = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <Lightformer
          form="rect"
          intensity={2}
          position={[-8, 6, 6]}
          scale={[12, 8, 1]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <Lightformer
          form="rect"
          intensity={1.8}
          position={[8, 4, 6]}
          scale={[10, 6, 1]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <Lightformer
          form="rect"
          intensity={1.2}
          position={[0, 10, 4]}
          scale={[8, 6, 1]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <Lightformer
          form="rect"
          intensity={1.6}
          position={[0, 5, -8]}
          scale={[10, 7, 1]}
          rotation={[0, Math.PI, 0]}
        />
      </Environment>
      <ambientLight intensity={0.35} />
      <SpotLight
        position={[-4, 8, 8]}
        angle={0.45}
        decay={0}
        distance={30}
        intensity={Math.PI * 0.35}
      />
      <SpotLight
        position={[4, 4, 10]}
        angle={0.5}
        decay={0}
        distance={30}
        intensity={Math.PI * 0.55}
      />
      <SpotLight
        position={[0, 12, 6]}
        angle={0.5}
        decay={0.1}
        intensity={Math.PI * 0.7}
      />
      <SpotLight
        position={[0, 6, -10]}
        angle={0.55}
        decay={0}
        intensity={Math.PI * 0.7}
      />
    </group>
  )
}

export default StudioLight
