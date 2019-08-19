import { ShopifyService } from '..'
import { SearchResults } from '../types'

export class SearchResource {

  constructor (private shopify: ShopifyService) { }

  public query = (term: string) => {
    return this.shopify.request<SearchResults>({
      method: 'GET',
      url: '/search/suggest.json?s=' + term + '&resources[types][]=product'
    })
  }

}