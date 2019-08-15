import {
  Product as ShopifyProduct,
  ProductVariant as ShopifyProductVariant,
  Cart as ShopifyCart,
} from 'shopify-buy'

export interface Product extends ShopifyProduct {
  variants: ProductVariant[]
}

export interface ProductVariant extends ShopifyProductVariant {
  options: string[]
}

export interface Cart extends ShopifyCart {
  
}