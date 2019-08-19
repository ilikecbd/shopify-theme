<template>
  <div class="tag-controls">
    <h3>Brands</h3>
    <a :href="generateTagLink(tag)" :class="generateTagClass(tag)" v-for="tag in tags" :key="tag">
      {{ generateTagText(tag) }}
    </a>
    <h3>Tags</h3>
    <!-- <a :href="generateTagLink(tag)" :class="generateTagClass(tag)" v-for="tag in tags" :key="tag">
      {{ tag }}
    </a> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { handleize } from '../utils'

@Component
export default class TagControls extends Vue {
  
  @Prop(Array)
  readonly currentTags!: string[]

  @Prop(Array)
  readonly tags!: string[]

  @Prop(String)
  readonly currentPath!: string

  public generateTagText (tag: string) {
    const index = tag.indexOf(':')

    if (index === -1) {
      return tag
    }

    return tag.split(':')[1]
  }

  public generateTagLink (tag: string) {
    const tags = [
      tag,
      ...this.existingTags,
    ]

    return this.currentPath + '/' + tags.map(handleize).join('+') + window.location.search
  }

  public generateTagClass (tag: string) {
    return {
      'is-selected': this.existingTags.indexOf(tag) > -1
    }
  }

  get existingTags () {
    return !!this.currentTags ? this.currentTags : []
  }

  get brands () {
    return this.tags.filter((tag) => tag.indexOf('brand:') > -1)
  }

  mounted () {
    console.log(this.brands)
  }

}
</script>