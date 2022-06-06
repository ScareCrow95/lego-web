import React, { useState, useEffect } from 'react'
import { Kbd } from '@chakra-ui/react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  IconButton,
  Spacer,
  Tooltip,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../store/rootStore'
import { MdDelete } from 'react-icons/md'

const Finder = observer(() => {
  const { uiStore } = useStores()

  return (
    <Flex direction='column' p={8} position='absolute' left={0}>
      <Text mb={5} color='grey.300' fontSize='lg'>
        Hotkeys
      </Text>
      <Flex align='center' my={2}>
        <Kbd mr={1}>x</Kbd>
        <Text ml={2} color='grey.200' fontSize='sm'>
          Delete item
        </Text>
      </Flex>
      <Flex align='center' my={2}>
        <Kbd mr={1}>b</Kbd>
        <Text ml={2} color='grey.200' fontSize='sm'>
          Add a box
        </Text>
      </Flex>
      <Flex align='center' my={2}>
        <Kbd mr={1}>c</Kbd>
        <Text ml={2} color='grey.200' fontSize='sm'>
          Add a cylinder
        </Text>
      </Flex>
      <Flex align='center' my={2}>
        <Kbd mr={1}>w</Kbd>
        <Text ml={2} color='grey.200' fontSize='sm'>
          Move gizmo
        </Text>
      </Flex>
      <Flex align='center' my={2}>
        <Kbd mr={1}>e</Kbd>
        <Text ml={2} color='grey.200' fontSize='sm'>
          Scale gizmo
        </Text>
      </Flex>
      <Flex align='center' my={2}>
        <Kbd mr={1}>r</Kbd>
        <Text ml={2} color='grey.200' fontSize='sm'>
          Scale gizmo
        </Text>
      </Flex>
      <Flex align='center' my={2}>
        <Kbd mr={1}>z</Kbd>
        <Text ml={2} color='grey.200' fontSize='sm'>
          Wireframe
        </Text>
      </Flex>
      <Flex align='center' my={2}>
        <Kbd mr={1}>num</Kbd> <Kbd mr={1}>0</Kbd> - <Kbd mr={1}>9</Kbd>
        <Text ml={2} color='grey.200' fontSize='sm'>
          Set opacity
        </Text>
      </Flex>
    </Flex>
  )
})

export default Finder
