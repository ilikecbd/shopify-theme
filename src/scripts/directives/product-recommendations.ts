import { DirectiveOptions } from 'vue'
import shopify from '../services/shopify'

const directive: DirectiveOptions = {
  async inserted (el) {
    el.innerHTML = await shopify.recommendations.fetch(1853269639203)
  }
}

export default directive