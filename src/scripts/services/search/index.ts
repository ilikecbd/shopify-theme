import Vue from 'vue'
import shopify from '../shopify'
import { Product, SearchResults } from '../shopify/types'

export interface SearchServiceState {
  searchRequest: Promise<SearchResults> | null
  searchError: Error | null
  searchResults: Product[] | null
}

export class SearchService {
  private timeout?: number

  private readonly state = Vue.observable<SearchServiceState>({
    searchRequest: null,
    searchError: null,
    searchResults: null,
  })

  public query = (term: string) => {
    clearTimeout(this.timeout)

    if (term.length < 2) {
      return this.onSearchReset()
    }

    this.timeout = window.setTimeout(() => {
      this.search(term)
    }, this.timeoutDuration)
  }

  private search = async (term: string) => {
    try {
      const request = shopify.search.query(term)

      this.onSearchRequest(request)
      this.onSearchSuccess(await request)
    } catch (e) {
      this.onSearchFailure(e)
    }
  }

  private onSearchRequest = (request: Promise<SearchResults>) => {
    this.state.searchRequest = request
    this.state.searchError = null
  }

  private onSearchSuccess = (results: SearchResults) => {
    this.state.searchRequest = null
    this.state.searchResults = results.resources.results.products
  }

  private onSearchFailure = (error: Error) => {
    this.state.searchRequest = null
    this.state.searchError = error
  }

  private onSearchReset = () => {
    this.state.searchRequest = null
    this.state.searchError = null
    this.state.searchResults = null
  }

  get timeoutDuration () {
    return !!this.state.searchRequest ? 500 : 0
  }

  get searching () {
    return !!this.state.searchRequest
  }

  get results () {
    return this.state.searchResults
  }

  get error () {
    return this.state.searchError
  }

}

export default new SearchService()