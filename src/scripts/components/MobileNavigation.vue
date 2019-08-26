<template>
  <div class="cart-sidebar-item">
    <div class="cart-sidebar-item__image"></div>
    <div class="cart-sidebar-item__description is-size-7">
      <h5>{{ item.quantity }} x {{ item.title }}</h5>
      <h6>{{ item.final_line_price | currency }}</h6>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import cart from '../services/cart'

@Component
export default class CartSidebarItem extends Vue {
  @Prop(Object) item: any
  

}
</script>