<template>
  <div class="site-header-cart">
    <div class="site-header-cart__icon" @click="open">
      <slot></slot>
    </div>
    <div class="site-header-cart__count">{{ count }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import cart from '../services/cart'

@Component
export default class SiteHeaderCart extends Vue {
  
  public open () {
    cart.open()
  }

  get count () {
    return 4
  }

}
</script>