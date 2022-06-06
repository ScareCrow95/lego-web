import { useGLTF } from '@react-three/drei'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import { useStores } from '../store/rootStore'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { useLoader } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
export const Model = observer(() => {
  const { uiStore } = useStores()
  const res = useLoader(STLLoader, '/car-dat.stl')
  const ref = useRef()
  useFrame(({ scene }) => {
    if (uiStore.selectedId) {
      if (!uiStore.selected || uiStore.selected.name !== uiStore.selectedId) {
        const obj = scene.getObjectByName(uiStore.selectedId)
        if (obj) {
          uiStore.selected = obj
          uiStore.selectedId = null
        }
      }
    }
  })
  return (
    <>
      <mesh ref={ref} position={[0, 1, 0]} scale={[1, -1, 1]}>
        <primitive
          object={res}
          attach='geometry'
          onUpdate={(self) => {
            self.computeVertexNormals()
          }}
        />
        <meshPhongMaterial
          color={uiStore.wireframe ? 'black' : '#aaa'}
          opacity={uiStore.wireframe ? 0.2 : uiStore.opacity}
          transparent
          wireframe={uiStore.wireframe}
        />
      </mesh>
    </>
  )
})
