import { Flex } from '@chakra-ui/react'
import {
  Box,
  Cylinder,
  Edges,
  OrbitControls,
  PerspectiveCamera,
  Select,
  TransformControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { observer } from 'mobx-react-lite'
import { Suspense } from 'react'
import Finder from '../components/Finder'
import { Model } from '../components/Model'
import UIBottom from '../components/UIBottom'
import { useStores } from '../store/rootStore'

const Main = observer(() => {
  const { uiStore } = useStores()

  return (
    <Flex w='100vw' h='100vh' justify='center' bg='#222' position='relative'>
      <Finder />
      <Canvas>
        <ambientLight intensity={0.2} />
        <PerspectiveCamera makeDefault position={[0, 8, 10]} />
        <directionalLight
          castShadow
          position={[25, 10, -5]}
          intensity={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight intensity={0.25} position={[0, -20, 0]} color='white' />
        <pointLight intensity={0.1} position={[0, 0, 20]} color='white' />
        <Select
          box
          onChange={(e) => {
            if (e.length) uiStore.selected = e[0]
          }}
          filter={(items) => items}>
          {uiStore.colliderArr.map((e) => {
            return e.type === 'cylinder' ? (
              <Cylinder
                position={[0, 0, 0]}
                args={[1, 1, 0.5, 32]}
                key={e.id}
                name={e.id}>
                <meshStandardMaterial color='red' />
                {uiStore.selected?.name === e.id && (
                  <Edges scale={1.05} threshold={15} color='orange' />
                )}
              </Cylinder>
            ) : (
              <Box position={[0, 0, 0]} args={[1, 1, 1]} key={e.id} name={e.id}>
                <meshStandardMaterial color='limeGreen' />
                {uiStore.selected?.name === e.id && (
                  <Edges scale={1.05} threshold={15} color='orange' />
                )}
              </Box>
            )
          })}
        </Select>
        {uiStore.selected && (
          <TransformControls
            object={uiStore.selected}
            mode={uiStore.gizmo}
            rotationSnap={0.261799}
          />
        )}
        <Suspense>
          <Model />
        </Suspense>
        <OrbitControls maxDistance={20} makeDefault />
      </Canvas>
      <UIBottom />
    </Flex>
  )
})

export default Main
