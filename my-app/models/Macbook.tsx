'use client'

import React, { useEffect } from 'react'
import type { ThreeElements } from '@react-three/fiber'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import useMacBookStore from '@/store'
import { noChangeParts } from '@/app/constants'

type GLTFResult = GLTF & {
  nodes: {
    Object_10: THREE.Mesh
    Object_16: THREE.Mesh
    Object_20: THREE.Mesh
    Object_22: THREE.Mesh
    Object_30: THREE.Mesh
    Object_32: THREE.Mesh
    Object_34: THREE.Mesh
    Object_38: THREE.Mesh
    Object_42: THREE.Mesh
    Object_48: THREE.Mesh
    Object_54: THREE.Mesh
    Object_58: THREE.Mesh
    Object_66: THREE.Mesh
    Object_74: THREE.Mesh
    Object_82: THREE.Mesh
    Object_96: THREE.Mesh
    Object_107: THREE.Mesh
    Object_123: THREE.Mesh
    Object_127: THREE.Mesh
  }

  materials: {
    PaletteMaterial001: THREE.Material
    zhGRTuGrQoJflBD: THREE.Material
    PaletteMaterial002: THREE.Material
    lmWQsEjxpsebDlK: THREE.Material
    LtEafgAVRolQqRw: THREE.Material
    iyDJFXmHelnMTbD: THREE.Material
    eJObPwhgFzvfaoZ: THREE.Material
    nDsMUuDKliqGFdU: THREE.Material
    CRQixVLpahJzhJc: THREE.Material
    YYwBgwvcyZVOOAA: THREE.Material
    SLGkCohDDelqXBu: THREE.Material
    WnHKXHhScfUbJQi: THREE.Material
    fNHiBfcxHUJCahl: THREE.Material
    LpqXZqhaGCeSzdu: THREE.Material
    gMtYExgrEUqPfln: THREE.Material
    PaletteMaterial003: THREE.Material
    JvMFZolVCdpPqjj: THREE.Material
    sfCQkHOWyrsLmor: THREE.Material
    ZCDwChwkbBfITSW: THREE.Material
  }
}

export default function MacbookModel(props: ThreeElements['group']) {
  const { nodes, materials, scene } = useGLTF(
    '/models/macbook-transformed.glb'
  ) as unknown as GLTFResult;
  const { color, texture, } = useMacBookStore();
  const screen = useVideoTexture(texture, {
    muted: true,
    loop: true,
    autoplay: true,
    crossOrigin: 'anonymous',
    playsInline: true,
    start: true,
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (!noChangeParts.includes(child.name)) {
          child.material.color = new THREE.Color(color);
        }
      }
    });
  }, [color, scene]);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.PaletteMaterial001}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.zhGRTuGrQoJflBD}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.PaletteMaterial002}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.lmWQsEjxpsebDlK}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.LtEafgAVRolQqRw}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.iyDJFXmHelnMTbD}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials.eJObPwhgFzvfaoZ}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.nDsMUuDKliqGFdU}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.CRQixVLpahJzhJc}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials.YYwBgwvcyZVOOAA}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.SLGkCohDDelqXBu}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.WnHKXHhScfUbJQi}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials.fNHiBfcxHUJCahl}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_74.geometry}
        material={materials.LpqXZqhaGCeSzdu}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials.gMtYExgrEUqPfln}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_96.geometry}
        material={materials.PaletteMaterial003}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_107.geometry}
        material={materials.JvMFZolVCdpPqjj}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <mesh
        geometry={nodes.Object_123.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial map={screen} />
      </mesh>

      <mesh
        geometry={nodes.Object_127.geometry}
        material={materials.ZCDwChwkbBfITSW}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/macbook-transformed.glb');