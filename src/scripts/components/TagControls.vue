<template>
  <div class="tag-controls">
    
    <!-- <a :href="generateTagLink(tag)" :class="generateTagClass(tag)" v-for="tag in brands" :key="tag">
      {{ generateTagText(tag) }}
    </a>
    <h3>Tags</h3>
    <a :href="generateTagLink(tag)" :class="generateTagClass(tag)" v-for="tag in brands" :key="tag">
      {{ generateTagText(tag) }}
    </a> -->
    <!-- <a :href="generateTagLink(tag)" :class="generateTagClass(tag)" v-for="tag in tags" :key="tag">
      {{ tag }}
    </a> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { handleize } from '../utils'

// export interface TagGroups {
//   [key: string]: string
// }

// export interface huh extends TagGroups {
//   tags: string[]
// }

export interface TagConfig {
  tag: string
  active: boolean
  category?: string
  text: string
}

@Component
export default class TagControls extends Vue {
  
  @Prop(Array)
  readonly currentTags!: string[]

  @Prop(Array)
  readonly tags!: string[]

  @Prop(String)
  readonly currentPath!: string

  public generateTagConfig (tag: string): TagConfig {
    const arr = tag.split(':')

    return {
      tag,
      active: this.existingTags.indexOf(tag) > -1,
      category: arr[arr.length - 2],
      text: arr[arr.length - 1],
    }
  }

  get list (): TagConfig[] {
    return this.tags.map((tag) => {
      const arr = tag.split(':')

      return {
        tag,
        active: this.existingTags.indexOf(tag) > -1,
        category: arr[arr.length - 2],
        text: arr[arr.length - 1],
      }
    })
  }

  get categories () {
    const categories: string[] = []

    return this.list.reduce((a, b) => {
      if (!b.category || a.indexOf(b.category) !== -1) {
        return a
      }

      return a.concat([b.category])
    }, categories)
  }

  get categoryContents () {
    return this.categories.map((category) => this.list.filter((item) => item.category === category))
  }

  get tagContents () {
    return this.list.filter((item) => !item.category)
  }

  

  

  public getTagCategory (tag: string) {
    // const ar = tag.
    // const index = tag.indexOf(':')

    // if (index === -1) {
    //   return null
    // }

    // return tag.
  }

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