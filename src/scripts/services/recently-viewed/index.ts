import Vue from 'vue'
import { Product } from '../shopify/types'

export interface RecentlyViewedServiceState {
  products: Product[]
}

export class RecentlyViewedService {
  private readonly max: number = 5
  private readonly key: string = 'xxxx'
  private readonly state = Vue.observable<RecentlyViewedServiceState>({
    products: []
  })

  constructor () {
    this.state.products = this.load()
  }

  public add = (product: Product) => {
    this.save([
      product,
      ...this.state.products.filter(({ id }) => id !== product.id).slice(0, this.max)
    ])
    // const existingIndex = this.state.products.findIndex((item) => item.id === product.id)

    // this.save([
    //   product,
    //   ...this.state.products.slice(-1, existingIndex),
    //   ...this.state.products.slice(existingIndex + 1),
    // ])
    // this.save([
    //   product,
    //   ...this.state.products.slice(0, this.max),
    // ])
  }

  get products () {
    return this.state.products
  }

  private save = (products: Product[]) => {
    window.localStorage.setItem(this.key, JSON.stringify(products))
  }

  private load = (): Product[] => {
    const response = window.localStorage.getItem(this.key)

    if (!response) {
      return []
    }

    return JSON.parse(response)
  }

}

export default new RecentlyViewedService()