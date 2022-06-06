import { makeAutoObservable, observable } from 'mobx'
import { RootStore } from './rootStore'

export class UIStore {
  /**
   * @type {RootStore}
   */
  root = null

  /**
   * @type {('translate'|'rotate'|'scale')}
   */
  gizmo = 'translate'
  selectedId = null
  selected = null
  /**
   * @type {Map.<string,{type: string, name:string, id:string}>}
   */
  colliders = new observable.map()
  wireframe = false
  opacity = 1

  get colliderArr() {
    return Array.from(this.colliders.values())
  }

  addCollider = (type) => {
    const id = `${type}-${this.colliderArr.length}`
    this.colliders.set(id, { name: id, type, id })
    this.selectedId = id
  }

  constructor(root) {
    makeAutoObservable(this)
    this.root = root
  }
}
