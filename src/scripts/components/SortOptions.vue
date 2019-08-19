<template>
  <select class="sort-options" v-model="value">
    <option value="manual">Featured</option>
    <option value="price-ascending">Price: Low to High</option>
    <option value="price-descending">Price: High to Low</option>
    <option value="title-ascending">A-Z</option>
    <option value="title-descending">Z-A</option>
    <option value="created-ascending">Oldest to Newest</option>
    <option value="created-descending">Newest to Oldest</option>
    <option value="best-selling">Best Selling</option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch, Prop } from 'vue-property-decorator'

@Component
export default class SortOptions extends Vue {

  @Prop({
    type: String,
    default: 'manual',
  })
  readonly initialValue!: string

  get value () {
    return this.initialValue
  }

  set value (payload: string) {
    const params = new URLSearchParams(window.location.search)
    params.set('sort_by', payload)

    window.location.search = params.toString()
  }

}
</script>