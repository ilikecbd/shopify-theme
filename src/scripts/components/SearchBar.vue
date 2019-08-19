<template>
  <div class="search-bar" >
    <!-- <div class="field">
  <p class="control has-icons-left">
    <input class="input is-small" type="text" placeholder="I'm looking for...">
    <span class="icon is-left">
      <i class="icon-search"></i>
    </span>
  </p>
</div> -->

    <div class="g-field">
      <div class="search-bar__icon">
        <i class="icon-search"></i>
      </div>
      <input class="search-bar__input g-input" placeholder="Search..." v-model="term" :class="classes" @focus="onInputFocus" @blur="onInputBlur"/>
    </div>

    <!-- <div class="search-bar__input-container">
    
      <input class="search-bar__input" v-model="term" @focus="onInputFocus" @blur="onInputBlur"/>
      
    </div> -->

    <div class="search-bar__results">
      <search-results />
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

  @Watch('term')
  onTermChanged(term: string) {
    search.query(this.term)
  }

  public onInputFocus () {
    this.focused = true
  }

  public onInputBlur () {
    this.focused = false
    search.query('')
  }

  get classes () {
    return {
      'is-focused': this.focused,
      'is-transparent': ui.isHeaderTransparent,
    }
  }

}
</script>