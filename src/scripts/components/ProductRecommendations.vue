<template>
  <div class="products-row">
    <div class="products-row__header">
      <div class="products-row__details">
        <h5 class="is-size-5 has-text-weight-bold has-text-info">Recently Viewed</h5>
      </div>
    </div>
    <div class="products-row__products columns is-mobile is-multiline">
      <!-- <div class="column is-half-mobile is-one-quarter-tablet is-one-fifth-desktop" v-for="product in products" :key="product.id">
        <product-preview :product="product" />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import ProductPreview from '../components/ProductPreview.vue'
import shopify from '../services/shopify'
import { Product } from '../services/shopify/types';

@Component({
  components: {
    ProductPreview,
  }
})
export default class ProductRecommendations extends Vue {
  public loading: boolean = false
  // public content: string = []

  @Prop(String)
  readonly productId!: string | number

  mounted () {
    this.loading = true

  }


  // get products () {
  //   return recent.products
  // }

}
</script>