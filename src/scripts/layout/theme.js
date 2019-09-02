import '../../styles/theme.scss'
import CartSidebar from '../components/CartSidebar.vue'
import SiteHeader from '../components/SiteHeader.vue'
import ProductControls  from '../components/ProductControls.vue'
import RecentlyViewedProducts from '../components/RecentlyViewedProducts.vue'
import TagControls from '../components/TagControls.vue'
import SortOptions from '../components/SortOptions.vue'
import ProductImages from '../components/ProductImages.vue'
import TransparentNavArea from '../directives/transparent-nav-area'
import ProductRecommendations from '../directives/product-recommendations'
import Vue from 'vue'
import LazyLoad from 'vanilla-lazyload'
import Sticky from 'sticky-js'

const ll = new LazyLoad({
  elements_selector: '.lazy',
})

window.addEventListener('DOMContentLoaded', (event) => {
  ll.update()
})

new Sticky('.sticky')

Vue.filter('currency', function (value) {
  return '$' + (value / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
})

new Vue({
  el: '#content',
  components: {
    CartSidebar,
    SiteHeader,
    ProductControls,
    RecentlyViewedProducts,
    ProductImages,
    SortOptions,
    TagControls,
  },
  directives: {
    TransparentNavArea,
    ProductRecommendations,
  }
})
