<template>
  <div class="site-header">
    <div class="site-header__content">
      <div class="container">
        <div class="site-header__navigation">
          <div class="site-header__navigation-item site-header__navigation-item--logo">
            [logo]
          </div>
          <a class="site-header__navigation-item site-header__navigation-item--link" @mouseenter="isHoverVisible = true" @mouseleave="isHoverVisible = false">
            Our Products
          </a>
          <a class="site-header__navigation-item site-header__navigation-item--link">
            About CBD
          </a>
          <div class="site-header__navigation-item site-header__navigation-item--filler">
            <search-bar/>
          </div>
          <a href="/login" class="site-header__navigation-item site-header__navigation-item--link">
            Login
          </a>
          <a href="/signup" class="site-header__navigation-item site-header__navigation-item--link">
            Sign up
          </a>
          <div class="site-header__navigation-item site-header__navigation-item--icon" @click="openCart">
            <i class="icon-shopping-cart"></i>
            <div class="site-header__cart-count">{{ cartCount }}</div>
          </div> 
          <!-- <div class="site-header__navigation-item site-header__navigation-item--search">
            <search-bar/>
          </div>
          <div class="site-header__navigation-item site-header__navigation-item--icon" @click="openCart">
            <i class="icon-user"></i>
          </div>
          <div class="site-header__navigation-item site-header__navigation-item--icon" @click="openCart">
            <i class="icon-shopping-cart"></i>
          </div> -->
        </div>
        <!-- <div class="site-header__navigation-item site-header__navigation-item--logo">
          [logo]
        </div>
        <div class="site-header__navigation-item" @mouseenter="isHoverVisible = true" @mouseleave="isHoverVisible = false">
          Our Products
        </div>
        <div class="site-header__navigation-item">
          About CBD
        </div>
        <div class="site-header__navigation-item site-header__navigation-item--icon" @click="openCart">
          <i class="icon-user"></i>
        </div>
        <div class="site-header__navigation-item site-header__navigation-item--icon" @click="openCart">
          <i class="icon-shopping-cart"></i>
        </div> -->
      </div>
    </div>
    <div class="site-header__hover-content" v-if="isHoverVisible" @mouseenter="isHoverVisible = true" @mouseleave="isHoverVisible = false">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SiteHeaderUser from './SiteHeaderUser.vue'
import SiteHeaderCart from './SiteHeaderCart.vue'
import SearchBar from './SearchBar.vue'
import cart from '../services/cart'
import ui from '../services/ui'

@Component({
  components: {
    SiteHeaderUser,
    SiteHeaderCart,
    SearchBar,
  }
})
export default class SiteHeader extends Vue {
  public isHoverVisible: boolean = false

  public openCart () {
    ui.setCartSidebarVisible(true)
  }

  get cartCount () {
    return cart.count
  }

  // public update () {
  //   this.filled = window.scrollY > 50
  // }

  // protected mounted () {
  //   window.addEventListener('scroll', this.update)
  // }

  // protected destroyed () {
  //   window.removeEventListener('scroll', this.update)
  // }


}
</script>