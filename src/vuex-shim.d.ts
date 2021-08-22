import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import type { IVueCookieNext } from './VueCookieNext'

declare module '@vue/runtime-core' {
  interface State {
    user: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>,
    $cookie: IVueCookieNext,
    $modals: any,
    $moment: any
  }
}
