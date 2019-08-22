import Vue from 'vue'

export interface UIServiceState {
  isSearchBarFocused: boolean
  isHeaderTransparent: boolean
}

export class UIService {
  private readonly state = Vue.observable<UIServiceState>({
    isHeaderTransparent: false,
    isSearchBarFocused: false,
  })

  get isSearchBarFocused () {
    return this.state.isSearchBarFocused
  }

  get isHeaderTransparent () {
    return this.state.isHeaderTransparent
  }

  public toggleHeaderTransparent = (value: boolean) => {
    this.state.isHeaderTransparent = value
  }

  public toggleSearchBarFocused = (value: boolean) => {
    this.state.isSearchBarFocused = value
  }
  
}

export default new UIService()