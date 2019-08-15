<template>
  <div class="site-header" :class="classes">
    <div class="site-header__logo">
      
    </div>
    <div class="site-header__controls">
      <div class="site-header__user-controls">
        <a class="site-header__user-control">
          Sign Up
        </a>
        <a class="site-header__user-control" href="/account/login">
          Login
        </a>
      </div>
      <!-- <site-header-user>
        <div class="site-header__icon">
          <span class="icon">
            <i class="icon-user"></i>
          </span>
        </div>
      </site-header-user> -->
      <div class="site-header__icon site-header__icon--cart" data-count="4">
        <span class="icon">
          <i class="icon-shopping-cart" @click="open"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SiteHeaderUser from './SiteHeaderUser.vue'
import cart from '../services/cart'

@Component({
  components: {
    SiteHeaderUser
  }
})
export default class SiteHeader extends Vue {
  public filled: boolean = false

  public open () {
    cart.open()
  }

  public update () {
    this.filled = window.scrollY > 50
  }

  protected mounted () {
    window.addEventListener('scroll', this.update)
  }

  protected destroyed () {
    window.removeEventListener('scroll', this.update)
  }

  get classes () {
    return {
      'is-filled': this.filled
    }
  }

}
</script>