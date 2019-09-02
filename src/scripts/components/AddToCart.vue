<template>
  <button class="button" :class="classes" @click="add">
    <span v-if="!added">Add to cart</span>
    <span v-else>Added!</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Product } from '../services/shopify/types'
import cart from '../services/cart'

@Component
export default class AddToCart extends Vue {
  public adding: boolean = false
  public added: boolean = false
  private timeout?: number

  @Prop(Number) quantity!: number
  @Prop(Number) variant!: number

  public async add () {
    clearTimeout(this.timeout)
    this.adding = true

    try {
      await cart.add(this.variant, this.quantity)
      this.added = true

      this.timeout = window.setTimeout(() => {
        this.added = false
      }, 2000)
    } catch (e) {

    }

    this.adding = false
  }

  get classes () {
    return {
      'is-loading': this.adding,
    }
  }

 

}
</script>