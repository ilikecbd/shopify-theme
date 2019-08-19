import Vue from 'vue'

export interface UIServiceState {
  header: {
    transparent: boolean
  }
}

export class UIService {
  private readonly state = Vue.observable<UIServiceState>({
    header: {
      transparent: false
    }
  })

  public updateHeaderTransparency = (value: boolean = false) => {
    console.log(value)
    this.state.header.transparent = value
  }

  get isHeaderTransparent () {
    return this.state.header.transparent
  }
  
}

export default new UIService()