import '../../styles/theme.scss'
import CartSidebar from '../components/CartSidebar.vue'
import SiteHeader from '../components/SiteHeader.vue'
import ProductControls  from '../components/ProductControls.vue'
import Vue from 'vue'
import LazyLoad from 'vanilla-lazyload'

// temporary force redirect

if (window.location.pathname.length > 1) {
  window.location.href = '/'
}

// const ll = new LazyLoad({
//   elements_selector: '.lazy',
// })

// window.addEventListener('DOMContentLoaded', (event) => {
//   ll.update()
// })


// new Vue({
//   el: '#content',
//   components: {
//     CartSidebar,
//     SiteHeader,
//     ProductControls,
//   }
// })
