import React from 'react'
import { MacModel14 } from '@/models/Macbook-14'
import { Macbook16 } from '@/models/Macbook-16'

type ModelSwitcherProps = {
  scale?: number
}

const ModelSwitcher = ({ scale }: ModelSwitcherProps = {}) => {
  const modelScale = scale ?? 0.08
  const isFourteenInch = modelScale <= 0.06

  if (isFourteenInch) {
    return <MacModel14 scale={modelScale} position={[0, 0, 0]} />
  }

  return <Macbook16 scale={modelScale} position={[0, 0, 0]} />
}

export default ModelSwitcher
