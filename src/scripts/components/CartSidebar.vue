<template>
  <div class="cart-sidebar">
    <transition name="fade" appear>
      <div class="cart-sidebar__overlay" v-if="cart.state.visible" @click="cart.close"></div>
    </transition>
    <transition name="sidebar" appear>
    <div class="cart-sidebar__content" v-if="cart.state.visible">
      <div class="cart-sidebar__header">
        <i class="icon-arrow-right"></i>
      </div>
    </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import cart from '../services/cart'

export default Vue.extend({
  data () {
    return {
      cart,
    }
  }
})
</script>