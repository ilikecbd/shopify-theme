<template>
  <div class="product-preview">
    <a class="block is-block" :href="url">
      <div class="product-preview__thumbnail-container">
        <img class="product-preview__thumbnail" :src="product.featured_image" />
      </div>
    </a>
    <div class="product-preview__text is-size-7">
      <div class="product-preview__text-item">{{ product.title }}</div>
      <div class="product-preview__text-item has-text-weight-bold">{{ product.price | currency }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Product } from '../services/shopify/types';

@Component
export default class ProductPreview extends Vue {
  @Prop(Object) product!: Product

  get styles () {
    return {
      backgroundImage: `url(${this.product.images[0]})`
    }
  }

  get url () {
    return '/products/' + this.product.handle
  }
}
</script>