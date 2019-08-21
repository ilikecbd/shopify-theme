<template>
  <div class="tag-controls">
    <div v-for="(category, $categoryIndex) in categories" :key="$categoryIndex">
      <h5>{{ category }}s</h5>
      <a :href="generateTagHref(category, null)">All</a>
      <a :href="generateTagHref(category, option.tag)" v-for="option in categoryOptions[$categoryIndex]" :key="option.tag">{{ option.text }}</a>
    </div>
    <h5>Tags</h5>
    
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

export interface TagContents {
  [key: string]: TagConfig | undefined
}

export interface TagOptions {
  [key: string]: TagConfig[]
}

@Component
export default class TagControls extends Vue {
  
  @Prop({
    type: Array,
    default: [],
  })
  readonly currentTags!: string[]

  @Prop(Array)
  readonly allTags!: string[]

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

  public generateTagHref (category: string, tag?: string) {
    const modifiedCurrentTags = this.currentTagsConfig.map((config) => {
      return config.category === category ? tag : config.tag
    })

    const newCurrentTags = modifiedCurrentTags.filter((tag) => !!tag) as string[]

    return this.currentPath + '/' + newCurrentTags.map(handleize).join('+') + window.location.search
  }

  get currentTagsConfig () {
    return this.currentTags.map((tag) => this.generateTagConfig(tag))
  }

  get allTagsConfig (): TagConfig[] {
    return this.allTags.map((tag) => this.generateTagConfig(tag))
  }

  get categories () {
    const categories: string[] = []

    return this.allTagsConfig.reduce((a, b) => {
      if (!b.category || a.indexOf(b.category) !== -1) {
        return a
      }

      return a.concat([b.category])
    }, categories)
  }

  get categoryOptions () {
    return this.categories.map((category) => this.allTagsConfig.filter((config) => config.category === category))
  }

  // get remainingOptions () {
  //   return 
  // }

  // get categoryContents () {
  //   return this.categories.map((category) => this.list.filter((item) => item.category === category))
  // }

  // get tagContents () {
  //   return this.list.filter((item) => !item.category)
  // }

  

  

  // public getTagCategory (tag: string) {
  //   // const ar = tag.
  //   // const index = tag.indexOf(':')

  //   // if (index === -1) {
  //   //   return null
  //   // }

  //   // return tag.
  // }

  // public generateTagText (tag: string) {
  //   const index = tag.indexOf(':')

  //   if (index === -1) {
  //     return tag
  //   }

  //   return tag.split(':')[1]
  // }

  // public generateTagLink (tag: string) {
  //   const tags = [
  //     tag,
  //     ...this.existingTags,
  //   ]

  //   return this.currentPath + '/' + tags.map(handleize).join('+') + window.location.search
  // }

  // public generateTagClass (tag: string) {
  //   return {
  //     'is-selected': this.existingTags.indexOf(tag) > -1
  //   }
  // }

  get existingTags () {
    return !!this.currentTags ? this.currentTags : []
  }

  // get brands () {
  //   return this.tags.filter((tag) => tag.indexOf('brand:') > -1)
  // }

  // mounted () {
  //   console.log(this.brands)
  // }

}
</script>