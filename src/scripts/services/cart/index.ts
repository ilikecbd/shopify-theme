import Vue from 'vue'

export interface CartServiceState {
  visible: boolean
}

export class CartService {
  private readonly state = Vue.observable<CartServiceState>({
    visible: false
  })

  get visible () {
    return this.state.visible
  }

  public open = () => {
    this.state.visible = true
  }

  public close = () => {
    this.state.visible = false
  }
  
}

export default new CartService()