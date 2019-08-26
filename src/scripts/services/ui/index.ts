import Vue from 'vue'

export interface UIServiceState {
  isSearchBarFocused: boolean
  isHeaderTransparent: boolean
  isCartSidebarVisible: boolean
}

export class UIService {
  private readonly state = Vue.observable<UIServiceState>({
    isHeaderTransparent: false,
    isSearchBarFocused: false,
    isCartSidebarVisible: false,
  })

  get isSearchBarFocused () {
    return this.state.isSearchBarFocused
  }

  get isHeaderTransparent () {
    return this.state.isHeaderTransparent
  }

  get isCartSidebarVisible () {
    return this.state.isCartSidebarVisible
  }

  public toggleHeaderTransparent = (value: boolean) => {
    this.state.isHeaderTransparent = value
  }

  public toggleSearchBarFocused = (value: boolean) => {
    this.state.isSearchBarFocused = value
  }

  public setCartSidebarVisible = (value: boolean) => {
    this.state.isCartSidebarVisible = value
  }
  
}

export default new UIService()