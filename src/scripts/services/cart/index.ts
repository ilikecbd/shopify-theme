import Vue from 'vue'
import shopify from '../shopify'
import { Cart } from '../shopify/types'
import { LocalStorageItem } from '../../utils';

export interface CartServiceState {
  cart: Cart | null
  cartUpdateRequest: Promise<Cart> | null
  cartUpdateError: Error | null
  visible: boolean
}

export class CartService {
  private storedCount = new LocalStorageItem<number>('cart_count')
  private readonly state = Vue.observable<CartServiceState>({
    cart: null,
    cartUpdateRequest: null,
    cartUpdateError: null,
    visible: false
  })

  public fetch = async () => {
    try {
      const request = shopify.cart.fetch()

      this.onUpdateRequest(request)
      this.onUpdateSuccess(await request)
    } catch (e) {
      this.onUpdateError(e)
    }
  }

  public add = async (variantId: string | number, quantity: number = 1) => {
    try {
      const request = shopify.cart.add(variantId, quantity).then(() => shopify.cart.fetch())

      this.onUpdateRequest(request)
      this.onUpdateSuccess(await request)
    } catch (e) {
      this.onUpdateError(e)
    }
  }

  public remove = async (variantId: string) => {
    try {
      const request = shopify.cart.change(variantId, 0).then(() => shopify.cart.fetch())

      this.onUpdateRequest(request)
      this.onUpdateSuccess(await request)
    } catch (e) {
      this.onUpdateError(e)
    }
  }

  public update = async (variantId: string, quantity: number) => {
    try {
      const request = shopify.cart.change(variantId, quantity).then(() => shopify.cart.fetch())

      this.onUpdateRequest(request)
      this.onUpdateSuccess(await request)
    } catch (e) {
      this.onUpdateError(e)
    }
  }
  
  private onUpdateRequest = (request: Promise<Cart>) => {
    this.state.cartUpdateRequest = request
    this.state.cartUpdateError = null
  }

  private onUpdateSuccess = (cart: Cart) => {
    this.state.cartUpdateRequest = null
    this.state.cart = cart
    this.storedCount.write(cart.item_count)
  }

  private onUpdateError = (error: Error) => {
    this.state.cartUpdateRequest = null
    this.state.cartUpdateError = error
  }

  get visible () {
    return this.state.visible
  }

  public open = () => {
    this.state.visible = true
  }

  public close = () => {
    this.state.visible = false
  }

  get count () {
    return !!this.state.cart ? this.state.cart.item_count : this.storedCount.read() || 0
  }

  get items () {
    return !!this.state.cart ? this.state.cart.items : []
  }

  get total () {
    return !!this.state.cart ? this.state.cart.total_price : 0
  }

  get updating () {
    return !!this.state.cartUpdateRequest
  }
  
}

export default new CartService()