<template>
  <div class="product-images swiper-container has-text-centered">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Swiper, { SelectableElement } from 'swiper'

@Component
export default class ProductImages extends Vue {
  public swiper: any = null

  mounted () {
    this.swiper = new Swiper(this.$el as HTMLElement, {
      preloadImages: false,
      // Enable lazy loading
      lazy: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    })
  }

}
</script>