<template>
  <div class="search-bar" :class="classes">
     <i @click="focus" class="icon-search"></i>
     <input ref="input" class="search-bar__input" v-model="term" @focus="onInputFocus" @blur="onInputBlur"/>

    <!-- <div class="field">
  <p class="control has-icons-left">
    <input class="input is-small" type="text" placeholder="I'm looking for...">
    <span class="icon is-left">
      <i class="icon-search"></i>
    </span>
  </p>
</div> -->
<!-- 
    <div class="g-field">
      <div class="search-bar__icon">
        <i class="icon-search"></i>
      </div>
      <input class="search-bar__input g-input" placeholder="Search..." v-model="term" :class="classes" @focus="onInputFocus" @blur="onInputBlur"/>
    </div> -->

    <!-- <div class="search-bar__input-container">
    
      <input class="search-bar__input" v-model="term" @focus="onInputFocus" @blur="onInputBlur"/>
      
    </div> -->

    <div class="search-bar__results" v-if="focused && results">
      <a :href="result.url" class="search-bar__result" v-for="result in results" :key="result.id">
        {{ result.title }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import SearchResults from './SearchResults.vue'
import search from '../services/search'
import ui from '../services/ui';

@Component({
  components: {
    SearchResults,
  }
})
export default class SiteHeaderUser extends Vue {
  public term: string = ''
  public focused: boolean = false
  public $refs!: {
    input: HTMLInputElement
  }

  @Watch('term')
  onTermChanged(term: string) {
    search.query(this.term)
  }

  public onInputFocus () {
    this.focused = true
  }

  public onInputBlur () {
   setTimeout(() => this.focused = false, 100)
  }

  public focus () {
    this.$refs.input.focus()
  }

  get results () {
    return search.results
  }

  get classes () {
    return {
      'is-focused': this.focused
    }
  }

}
</script>