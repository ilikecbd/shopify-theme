<template>
  <div class="product-controls">
    <div v-for="(productOption, $index) in product.options" :key="$index">
      <select v-model="options[$index]">
        <option :value="optionChoice" v-for="optionChoice in optionChoices[$index]" :key="optionChoice">
          {{ optionChoice }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Product } from '../services/shopify/types'
import controls from '../services/product-controls'

@Component
export default class ProductControls extends Vue {
  @Prop(Object) product!: Product

  get options () {
    return controls.options
  }

  get optionChoices () {
    return controls.optionChoices
  }

  protected mounted () {
    controls.initialize(this.product)
  }

}
</script>

<style>
.product-controls {
  padding-top: 80px;
}
</style>
