import { Box, Flex, IconButton, Text, Tooltip } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { BiCube, BiCylinder, BiMove, BiRotateLeft } from 'react-icons/bi'
import { IoIosResize } from 'react-icons/io'
import { useStores } from '../store/rootStore'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'
const UIBottom = observer(() => {
  const { uiStore } = useStores()
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      ;[...Array(10).keys()].forEach((x) => {
        if (e.key === x.toString()) {
          uiStore.opacity = (x + 1) / 10
        }
      })
      if (e.key === 'w') {
        uiStore.gizmo = 'translate'
      } else if (e.key === 'e') {
        uiStore.gizmo = 'rotate'
      } else if (e.key === 'r') {
        uiStore.gizmo = 'scale'
      } else if (e.key === 'Backspace' || e.key === 'Delete' || e.key === 'x') {
        if (uiStore.selected) {
          uiStore.colliders.delete(uiStore.selected.name)
          uiStore.selected = null
          uiStore.selectedId = null
        }
      } else if (e.key === 'z') {
        uiStore.wireframe = !uiStore.wireframe
      }
      if (e.key === 'b') {
        uiStore.addCollider('box')
      }
      if (e.key === 'c') {
        uiStore.addCollider('cylinder')
      }
    })
  }, [])
  return (
    <Flex position='absolute' bottom={6} direction='column'>
      <Text color='#ddd' fontSize='sm'>
        Opacity
      </Text>
      <Slider
        aria-label='slider-ex-2'
        value={uiStore.opacity * 100}
        min={10}
        colorScheme='blue'
        defaultValue={100}
        onChange={(v) => (uiStore.opacity = v / 100)}
        mb={4}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb opacity={0} />
      </Slider>
      <Flex bg='#1a1a1a' p={2}>
        <Tooltip label='Add Cylinder Collider'>
          <IconButton
            mr={2}
            colorScheme='blue'
            icon={<BiCylinder />}
            onClick={() => {
              uiStore.addCollider('cylinder')
            }}
          />
        </Tooltip>
        <Tooltip label='Add Cube Collider'>
          <IconButton
            colorScheme='blue'
            icon={<BiCube />}
            onClick={() => {
              uiStore.addCollider('box')
            }}
          />
        </Tooltip>
        <Box w='2px' bg='grey.300' mx={2} />
        <Tooltip label='Move'>
          <IconButton
            bg={uiStore.gizmo === 'translate' ? 'red.100' : '#555'}
            onClick={() => (uiStore.gizmo = 'translate')}
            mr={2}
            icon={<BiMove />}
          />
        </Tooltip>
        <Tooltip label='Rotate'>
          <IconButton
            bg={uiStore.gizmo === 'rotate' ? 'red.100' : '#555'}
            mr={2}
            onClick={() => (uiStore.gizmo = 'rotate')}
            icon={<BiRotateLeft />}
          />
        </Tooltip>
        <Tooltip label='Scale'>
          <IconButton
            bg={uiStore.gizmo === 'scale' ? 'red.100' : '#555'}
            onClick={() => (uiStore.gizmo = 'scale')}
            icon={<IoIosResize />}
          />
        </Tooltip>
      </Flex>
    </Flex>
  )
})

export default UIBottom
