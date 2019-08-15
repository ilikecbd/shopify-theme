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

  public add = () => {
    return this.shopify.request<Cart>({
      method: 'POST',
      url: '/cart/add.js',
    })
  }

  public update = () => {
    return this.shopify.request<Cart>({
      method: 'POST',
      url: '/cart/update.js',
    })
  }

  public change = () => {
    return this.shopify.request<Cart>({
      method: 'POST',
      url: '/cart/change.js',
    })
  }

  public clear = () => {
    return this.shopify.request({
      method: 'POST',
      url: '/cart/clear.js',
    })
  }

}