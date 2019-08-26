<template>
  <div class="tag-controls">
    <!-- <h4 class="is-size-5">Filters</h4> -->
    <div class="tag-controls__category" v-for="(tags, category) in allTagsByCategory" :key="category">
      <div class="tag-controls__category-title has-text-weight-bold">
        <span>{{ category }}s</span>
        <i class="icon-chevron-down1"></i>
      </div>
      <div class="tag-controls__category-options">
         <a class="tag-controls__button" :class="generateTagClass(category, tag.tag)" :href="generateTagHref(category, tag.tag)" v-for="tag in tags" :key="tag.tag">{{ tag.text }}</a>
      </div>

    </div>

    <!-- <div v-for="(tags, category) in allTagsByCategory" :key="category">
      <h5>{{ category }}s</h5>
      <a class="tag-controls__button" :class="generateTagClass(category, null)" :href="generateTagHref(category, null)">All</a>
      <a class="tag-controls__button" :class="generateTagClass(category, tag.tag)" :href="generateTagHref(category, tag.tag)" v-for="tag in tags" :key="tag.tag">{{ tag.text }}</a>
    </div> -->

    <!-- <div v-for="(category, $categoryIndex) in categories" :key="$categoryIndex">
      <h5>{{ category }}s</h5>
      <a :href="generateTagHref(category, null)">All</a>
      <a :href="generateTagHref(category, option.tag)" v-for="option in categoryOptions[$categoryIndex]" :key="option.tag">{{ option.text }}</a>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { handleize } from '../utils'

export interface TagConfig {
  tag: string
  active: boolean
  category: string
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
  
  @Prop(Array)
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
      category: arr[arr.length - 2] || 'tag',
      text: arr[arr.length - 1],
    }
  }

  public generateTagClass (category: string, tag?: string) {
    const existingTagConfig = this.currentTagsByCategory[category]

    return {
      'is-active': !!existingTagConfig ? existingTagConfig.tag === tag : !tag
    }
  }

  public generateTagHref (category: string, tag?: string) {
    const tags = this.categories.reduce((tags, cat) => {
      const existingTagConfig = this.currentTagsByCategory[cat]

      return [
        ...tags,
        cat === category ? tag : existingTagConfig ? existingTagConfig.tag : undefined
      ]
      // return [
      //   ...tags,
      //   cat === category ? tag : !!this.currentTagsByCategory[cat] ? this.currentTagsByCategory[cat].tag : undefined
      // ]
    }, [] as (string | undefined)[])

    const tagsFiltered = tags.filter((tag) => !!tag) as string[]
    // const modified = {
    //   ...this.currentTagsByCategory,
    //   [category]: tag,
    // }

    // const modifiedCurrentTags = Object.keys(modified).map((category) => c)
    // const initialTags: string[] = []

    // const tags = Object.keys(this.currentTagsByCategory).reduce((tags, key) => {
    //   if (key === category) {
    //     return !!tag ? tags.concat([tag]) : tags
    //   }

    //   const existingTag = this.currentTagsByCategory[key]

    //   if (!!existingTag) {
    //     return tags.concat([existingTag.tag])
    //   }

    //   return tags
    // }, initialTags)
    // const tags = Object.keys(this.currentGroupedTags).map((groupCategory) => {
    //   if (groupCategory === category) {
    //     return tag
    //   }

    //   const existingTag = this.currentGroupedTags[groupCategory]

    //   if (!!existingTag) {
    //     return existingTag.tag
    //   }

    //   return undefined
    //   // return groupCategory === category ? tag : this.currentGroupedTags[]
    // })
    // const modified = {
    //   ...this.currentGroupedTags,
    //   [category]: tag,
    // }

    // const tags: string = []
    // const all = 
    // const t: string[] = []

    // const c = this.categories.reduce((a, b) => {
    //   if (b === category) {

    //   }

    //   const cur = this.currentGroups[b]

    //   if (!!cur) {
    //     return cur.tag
    //   }

    //   // if (!!this.currentGroups[b]) {
    //   //   return this.currentGroups[b].tag
    //   // }

    //   return a
    // }, t)
    // const modifiedCurrentTags = {
    //   ...this.currentTagsConfig,
    //   category: tag,
    // }

    // const currentTags = this.categories.map((cat) => {
    //   return cat === category ? tag : (!!this.currentGroups[cat] ? this.currentGroups[cat].tag : undefined)
    // })

    // const newCurrentTags = modifiedCurrentTags.filter((tag) => !!tag) as string[]

    // console.log('generating', category, tag, currentTagsConfig)
    return this.currentPath + '/' + tagsFiltered.map(handleize).join('+') + window.location.search

  }

  get allTagsConfig (): TagConfig[] {
    return this.allTags.map((tag) => this.generateTagConfig(tag))
  }

  get allTagsByCategory () {
    const groups: Record<string, TagConfig[]> = {}

    return this.categories.reduce((groups, category) => Object.assign(groups, {
      [category]: this.allTagsConfig.filter((config) => config.category === category)
    }), groups)
  }

  get currentTagsConfig () {
    return this.existingTags.map((tag) => this.generateTagConfig(tag))
  }

  get currentTagsByCategory () {
    const groups: Record<string, TagConfig | undefined> = {}

    return this.categories.reduce((groups, category) => Object.assign(groups, {
      [category]: this.currentTagsConfig.find((config) => config.category === category)
    }), groups)
  }

  get categories () {
    const categories: string[] = ['brand', 'flavor']

    return this.allTagsConfig.reduce((a, b) => {
      if (!b.category || a.indexOf(b.category) !== -1) {
        return a
      }

      return a.concat([b.category])
    }, categories)
  }

  // get categoryOptions () {
  //   return this.categories.map((category) => this.allTagsConfig.filter((config) => config.category === category))
  // }

  mounted () {
    console.log(this.currentTagsConfig)
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