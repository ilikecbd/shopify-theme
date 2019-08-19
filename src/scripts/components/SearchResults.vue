<template>
  <div class="search-results" v-if="results">
    <template v-if="results.length === 0">
      empty
    </template>
    <template v-else>
      <!-- <label class="search-results__label">Products</label> -->
      <div class="search-results__item" v-for="result in results" :key="result.id">
        <search-result-product :product="result" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Product } from '../services/shopify/types'
import search from '../services/search'
import SearchResultProduct from './SearchResultProduct.vue'

@Component({
  components: {
    SearchResultProduct,
  }
})
export default class SearchResults extends Vue {
  
  get results () {
    return search.results
  }
  
}
</script>