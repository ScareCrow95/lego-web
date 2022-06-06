import { makeAutoObservable, observable } from 'mobx'
import { createStandaloneToast } from '@chakra-ui/react'
import { createContext, useContext } from 'react'
import { apiUrl, url } from '../constants/url'
import axios from 'axios'
import { lightTheme } from '../theme/lightTheme'
import { UIStore } from './uiStore'

export class RootStore {
  token = ''
  /**
   * @type {UIStore}
   */
  uiStore = null
  constructor() {
    makeAutoObservable(this)
    this.uiStore = new UIStore(this)
  }

  showToast = (
    title,
    description = '',
    status = 'info',
    duration = 5000,
    isClosable = true
  ) => {
    let toast = createStandaloneToast({
      theme: lightTheme,
    })
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
    })
  }
}

export const RootStoreInstance = new RootStore()

const RootStoreContext = createContext(RootStoreInstance)

export const useStores = () => useContext(RootStoreContext)
