import { DirectiveOptions } from 'vue'
import ui from '../services/ui'

const SITE_HEADER_HEIGHT = 50

const directive: DirectiveOptions = {
  inserted (el) {
    const updateNavigation = () => {
      console.log(window.scrollY, el.offsetTop, el.clientHeight)
      ui.updateHeaderTransparency(window.scrollY + SITE_HEADER_HEIGHT <= el.offsetTop + el.clientHeight)
    }

    window.addEventListener('scroll', updateNavigation)
    updateNavigation()
  },
  unbind () {

  }
}

export default directive