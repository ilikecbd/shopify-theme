<template>
  <div class="site-header-user">
    <div class="site-header-user__icon">
      <slot></slot>
    </div>
    <!-- <div class="site-header-user__icon">
      
    </div> -->
    <!-- <div class="site-header-user__menu">
      <a class="site-header-user__link">Sign up</a>
      <a class="site-header-user__link">Login</a>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class SiteHeaderUser extends Vue {
  

}
</script>