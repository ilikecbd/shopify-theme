<template>
  <div class="product-controls">
    <div class="product-options" v-if="isChoicesVisible">
      <div v-for="(productOption, $index) in product.options" :key="$index">
        <select v-model="options[$index]">
          <option :value="optionChoice" v-for="optionChoice in optionChoices[$index]" :key="optionChoice">
            {{ optionChoice }}
          </option>
        </select>
      </div>
    </div>
    <button class="button" @click="add">Add to cart</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Product } from '../services/shopify/types'
import controls from '../services/product-controls'
import cart from '../services/cart'

//TODO: read initial ?variant=xxxx

@Component
export default class ProductControls extends Vue {
  @Prop(Object) product!: Product

  get options () {
    return controls.options
  }

  get optionChoices () {
    return controls.optionChoices
  }

  get isChoicesVisible () {
    return this.optionChoices.some((choice) => choice.length > 1)
  }

  protected mounted () {
    controls.initialize(this.product)
  }

  public add () {
    if (controls.currentVariant) {
      cart.add(controls.currentVariant.id)
    }
  }

}
</script>