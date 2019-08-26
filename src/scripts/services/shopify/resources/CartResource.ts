import { ShopifyService } from '..'
import { Cart } from '../types'

export class CartResource {

  constructor (private shopify: ShopifyService) { }

  public fetch = () => {
    return this.shopify.request<Cart>({
      method: 'GET',
      url: '/cart.js',
    })
  }

  public add = (id: string | number, quantity: number) => {
    return this.shopify.request<Cart>({
      method: 'POST',
      url: '/cart/add.js',
      data: { id, quantity }
    })
  }

  public update = () => {
    return this.shopify.request<Cart>({
      method: 'POST',
      url: '/cart/update.js',
    })
  }

  public change = (id: string | number, quantity: number) => {
    return this.shopify.request<Cart>({
      method: 'POST',
      url: '/cart/change.js',
      data: { id, quantity }
    })
  }

  public clear = () => {
    return this.shopify.request({
      method: 'POST',
      url: '/cart/clear.js',
    })
  }

}