<template>
  <div class="site-header" :class="classes">
    <div class="site-header__logo">
      
    </div>
    <div class="site-header__controls">
      <search-bar />
      <site-header-user>
        <div class="site-header__control">
          <i class="site-header__icon icon-user"></i>
        </div>
      </site-header-user>
      <site-header-cart>
        <div class="site-header__control">
          <i class="site-header__icon icon-shopping-cart"></i>
        </div>
      </site-header-cart>
      <!-- <div class="site-header__control">
        
      </div>
      <div class="site-header__control">
        <site-header-user />
      </div>
      <div class="site-header__control">
        <site-header-cart />
      </div> -->
      <!-- <search-bar />

      <div class="site-header__icon">
        <span class="icon">
          <i class="icon-search"></i>
        </span>
      </div>
      <site-header-user>
        <div class="site-header__icon">
          <span class="icon">
            <i class="icon-user"></i>
          </span>
        </div>
      </site-header-user>
      <div class="site-header__icon site-header__icon--cart" data-count="4">
        <span class="icon">
          <i class="icon-shopping-cart" @click="open"></i>
        </span>
      </div> -->
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
  // public filled: boolean = false

  // public open () {
  //   cart.open()
  // }

  // public update () {
  //   this.filled = window.scrollY > 50
  // }

  // protected mounted () {
  //   window.addEventListener('scroll', this.update)
  // }

  // protected destroyed () {
  //   window.removeEventListener('scroll', this.update)
  // }

  get classes () {
    return {
      'is-transparent': ui.isHeaderTransparent
    }
  }

}
</script>