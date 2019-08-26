<template>
  <div class="product-preview">
    <a :href="product.url">
      <figure class="product-preview__thumbnail-container image is-5by4">
        
      </figure>
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
}
</script>