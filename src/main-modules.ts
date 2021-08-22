import { VueCookieNext } from 'vue-cookie-next'
import { App, DirectiveBinding } from 'vue'
import modalService from './services/modal/modalService'
import AppButton from '@/components/ui/button/index.vue'
import AppInput from '@/components/ui/input/index.vue'
import "@/assets/styles/common.scss"

const appIniter = {
  init(app: App) {
    usage(app)
    configs(app)
    directives(app)
    components(app)
  }
}

function usage(app: App) {
  app.use(VueCookieNext)
}

function configs(app: App) {
  app.config.globalProperties.$modals = modalService
}

function directives(app: App) {
  app.directive("click-outside", {
    beforeMount(el: any, binding: DirectiveBinding<any>) {
      el.clickOutsideEvent = (event: Event) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value()
        }
      }
      document.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el: any) {
      document.removeEventListener('click', el.clickOutsideEvent)
    }
  });
}

function components(app: App) {
  app.component('ui-button', AppButton)
  app.component('ui-input', AppInput)
}

export default appIniter