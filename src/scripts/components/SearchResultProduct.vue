<template>
  <div class="search-result-product" @click="go">
    <!-- <div class="search-result-product__image" :style="imageStyles"></div> -->
    <div class="search-result-product__description">
      <h6 class="is-size-7">{{ product.title }}</h6>
      <!-- <p class="is-size-7 has-text-grey-light">${{ product.price }}</p> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Product } from '../services/shopify/types'

@Component
export default class SearchResultProduct extends Vue {
  @Prop(Object) product!: Product

  get imageStyles () {
    return {
      backgroundImage: `url(${(this.product as any).image})`
    }
  }

  public go () {
    window.location.href = this.product.url
  }

}
</script>