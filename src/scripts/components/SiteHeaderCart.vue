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
import ui from '../services/ui'
import cart from '../services/cart'

@Component
export default class SiteHeaderCart extends Vue {
  
  public open () {
    ui.setCartSidebarVisible(true)
  }

  get count () {
    return cart.count
  }

}
</script>