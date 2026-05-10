import { MacModel14 } from '@/models/Macbook-14'
import { Macbook16 } from '@/models/Macbook-16'
import { PresentationControls } from '@react-three/drei'

type ModelSwitcherProps = {
  scale?: number
  isMobile?: boolean
}

const ModelSwitcher = ({
  scale = 0.08,
  isMobile = false,
}: ModelSwitcherProps) => {
  const showLargeModel = scale >= 0.08

  const controlConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    config: {mass: 1, tension: 0, friction: 26},
    azimuth: [-Infinity, Infinity] as [number, number],
  }

  return (
    <PresentationControls {...controlConfig}>
      {showLargeModel ? (
        <group>
          <Macbook16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      ) : (
        <group>
          <MacModel14 scale={isMobile ? 0.035 : 0.06} />
        </group>
      )}
    </PresentationControls>
  )
}

export default ModelSwitcher
