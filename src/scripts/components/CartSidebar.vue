<template>
  <div class="cart-sidebar">
    <transition name="fade" appear>
      <div class="cart-sidebar__overlay" v-if="visible" @click="close"></div>
    </transition>
    <transition name="sidebar" appear>
      <div class="cart-sidebar__content" v-if="visible">
        <div class="cart-sidebar__header">
          <i class="icon-arrow-right" @click="close"></i>
        </div>
        <div class="cart-sidebar__items">
          <div class="cart-sidebar__items-container" v-if="items.length === 0">
            Empty.
          </div>
          <div class="cart-sidebar__items-container" v-else>
            <cart-sidebar-item v-for="item in items" :item="item" :key="item.id"/>
            
            <div class="cart-sidebar__total">
              <span>Total</span>
              <span>{{ total | currency }}</span>
            </div>
            <a class="button is-primary is-fullwidth" href="/checkout">Checkout</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import CartSidebarItem from './CartSidebarItem.vue'
import cart from '../services/cart'
import ui from '../services/ui'

@Component({
  components: {
    CartSidebarItem,
  }
})
export default class CartSidebar extends Vue {

  @Watch('visible')
  protected onVisibleChanged (value: boolean) {
    if (value) {
      cart.fetch()
    }
  }

  get visible () {
    return ui.isCartSidebarVisible
  }

  get items () {
    return cart.items
  }

  get total () {
    return cart.total
  }

  public close () {
    ui.setCartSidebarVisible(false)
  }

}
</script>