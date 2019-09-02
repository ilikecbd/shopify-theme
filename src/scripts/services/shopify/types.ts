import {
  Product as ShopifyProduct,
  ProductVariant as ShopifyProductVariant,
  Cart as ShopifyCart,
} from 'shopify-buy'

export interface Product extends ShopifyProduct {
  variants: ProductVariant[]
  url: string
  handle: string
}

export interface ProductVariant extends ShopifyProductVariant {
  options: string[]
}

export interface Cart {
  attributes: Record<string, string>
  cart_level_discount_applications: any[]
  currency: string
  item_count: number
  items: CartItem[]
  note?: string
  original_total_prices: number
  requires_shipping: boolean
  token: string
  total_discount: number
  total_price: number
  total_weight: number
}

export interface CartItem {
  discounted_price: number
  discounts: any[]
  featured_image: {
    alt: string
    aspect_ratio: number
    url: string
  }
  final_line_price: number
  final_price: number
  gift_cart: boolean
  grams: number
  handle: string
  id: number
  image: string
  key: string
  line_level_discount_allocations: any[]
  line_price: number
  options_with_values: {name: string, value: string}[]
  original_line_price: number
  original_price: number
  price: number
  product_description: string
  product_has_only_default_variant: boolean
  product_id: number
  product_title: string
  product_type: string
  properties?: string[]
  quantity: number
  requires_shipping: boolean
  sku: string
  taxable: boolean
  title: string
  total_discount: number
  url: string
  variant_id: number
  variant_options: string[]
  variant_title?: string
  vendor: string
}

export interface SearchResults {
  resources: {
    results: {
      products: Product[]
    }
  }
}