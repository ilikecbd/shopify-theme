import { ShopifyService } from '..'

export class RecommendationsResource {

  constructor (private shopify: ShopifyService) { }

  public fetch = (productId: number | string) => {
    return this.shopify.request<string>({
      method: 'GET',
      url: '/recommendations/products',
      params: {
        section_id: 'product-recommendations',
        product_id: productId,
        limit: '6',
      }
    })
  }

}