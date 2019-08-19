import Vue from 'vue'
import { Product } from '../shopify/types'
import recent from '../recently-viewed'
import shopify from '../shopify'

export interface State {
  product: Product | null
  options: string[]
  quantity: number
}

export class ProductControlsService {
  private readonly state = Vue.observable<State>({
    product: null,
    options: [],
    quantity: 1,
  })

  public initialize = (product: Product) => {
    this.state.product = product
    this.state.options = product.variants[0].options.slice()
    this.state.quantity = 1

    recent.add(product)
    // shopify.recommendations.fetch(product.id)
  }

  get product () {
    return this.state.product
  }

  get options () {
    return this.state.options
  }

  get optionChoices (): string[][] {
    if (!this.state.product) {
      return []
    }

    const initialChoices = this.state.product.options.map(() => [] as string[])

    return this.state.product.variants.reduce((choices, variant) => {
      variant.options.forEach((variantOption, index) => {
        if (choices[index].indexOf(variantOption) === -1) {
          choices[index].push(variantOption)
        }
      })
     
      return choices
    }, initialChoices)
  }

  get currentVariant () {
    if (!this.state.product) {
      return undefined
    }

    return this.state.product.variants.find((variant) => {
      return this.state.options.every((option, index) => {
        return variant.options[index] === option
      })
    })
  }

}

export default new ProductControlsService()