import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { CartResource } from './resources/CartResource'
import { SearchResource } from './resources/SearchResource'
import { RecommendationsResource } from './resources/RecommendationsResource'

export class ShopifyService {
  private client: AxiosInstance

  public cart = new CartResource(this)
  public search = new SearchResource(this)
  public recommendations = new RecommendationsResource(this)

  constructor () {
    this.client = axios.create({
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      transformRequest: [
        (data) => {
          if (!data) {
            return data
          }
    
          const formData = new FormData()
    
          for (let key in data) {
            formData.append(key, data[key])
          }
    
          return formData
        }
      ]
    })
  }

  public request = async <T>(config: AxiosRequestConfig): Promise<T> => {
    const response = await this.client(config)

    return response.data
  }

}

export default new ShopifyService()

// import axios, { AxiosRequestConfig } from 'axios'

// export interface Product {
//   id: number
//   title: string
//   handle: string
//   published_at: string
//   created_at: string
//   vendor: string
//   type: string
//   tags: string[]
//   price: number
//   price_min: number
//   price_max: number
//   available: boolean
//   price_varies: boolean
//   compare_at_price?: number
//   compare_at_price_min: number
//   compare_at_price_max: number
//   compare_at_price_varies: boolean
//   variants: Variant[]
//   image: string[]
//   featured_image?: string
//   options: string[]
// }

// export interface ProductMetadata {
//   subscriptions?: ProductMetadataSubscriptions
// }

// export class ProductWithMetadata {
//   constructor (public data: Product, public metadata: ProductMetadata) {

//   }
// }

// export interface ProductMetadataSubscriptions {
//   discount_percentage: string
//   discount_product_id: number
//   has_subscription: 'True' | 'False'
//   is_subscription_only: 'true' | 'false'
//   shipping_interval_frequency: 1,
//   shipping_interval_unit_type: 'Weeks',
//   subscription_id: number
// }

// export interface Variant {
//   id: number
//   title: string
//   option1: string
//   option2?: string
//   option3?: string
//   sku: string
//   requires_shipping: boolean
//   taxable: boolean
//   featured_image: string
//   available: boolean
//   name: string
//   public_title: string
//   options: string[]
//   price: number
//   weight: number
//   compare_at_price?: number
//   inventory_quantity: number
//   inventory_policy: string
// }

// export interface VariantMetadata {
//   subscriptions?: VariantMetadataSubscriptions
// }

// export interface VariantMetadataSubscriptions {
//   discount_variant_id: number
//   discount_variant_price: string
// }

// export interface Cart {
//   currency: string
//   item_count: number
//   items: CartItem[]
//   note?: string
//   original_total_price: number
//   requires_shipping: boolean
//   token: string
//   total_discount: number
//   total_price: number
//   total_weight: number
// }

// export interface CartItem {
//   discounted_price: number
//   gift_cart: boolean
//   grams: number
//   handle: string
//   id: number
//   image: string
//   key: string
//   line_price: number
//   original_line_price: number
//   original_price: number
//   price: number
//   product_description: number
//   product_id: number
//   product_title: string
//   product_type: string
//   properties: any
//   quantity: number
//   requires_shipping: true
//   sku: string
//   taxable: boolean
//   title: string
//   total_discount: number
//   url: string
//   variant_id: number
//   variant_options: string[]
//   variant_title: string
//   vendor: string
// }

// const requestor = axios.create({
//   headers: {
//     'Content-Type': 'multipart/form-data'
//   },
//   transformRequest: [
//     (data) => {
//       if (!data) {
//         return data
//       }

//       const formData = new FormData()

//       for (let key in data) {
//         formData.append(key, data[key])
//       }

//       return formData
//     }
//   ]
// })

// export const cart = {
//   get: () => request<Cart>({
//     method: 'GET',
//     url: '/cart.js'
//   }),
//   add: (data: any) => request({
//     method: 'POST',
//     url: '/cart/add.js',
//     data: data
//   }),
//   update: (data: any) => request({
//     method: 'POST',
//     url: '/cart/update.js',
//     data: data
//   }),
//   change: (data: any) => request<Cart>({
//     method: 'POST',
//     url: '/cart/change.js',
//     data: data
//   }),
//   clear: () => request({
//     method: 'POST',
//     url: '/cart/clear.js'
//   })
// }


// const request = async <T>(params: AxiosRequestConfig): Promise<T> => {
//   const response = await requestor.request(params)

//   return response.data
// }

