import appIniter from '@/main-modules'
import { createApp, defineComponent, nextTick, VNode } from 'vue'

const modalTemplate =
  `
  <transition name="fade">
    <div v-if="showDialog" id="modal-backdrop">
      <ModalComponent :data="modalData"
                     @close="closeModal($event)"
      />
    </div>
  </transition>

  `

const modalService = {
  open(modalComponent: VNode, modalData: any) {
    return new Promise(resolve => {
      let modalConteiner: HTMLElement = document.getElementById('modal')!
      let length = modalConteiner.children.length
      let id = length + 1
      let extendedModalComponent = defineComponent({
        extends: modalComponent,
        props: {
          showDialog: Boolean,
          modalData: Object
        },
        methods: {
          closeModal() {
            this.$emit('close', null)
          },
          confirm(value: any) {
            this.$emit('close', value)
          }
        }
      })

      let tempComponent = createApp({
        name: 'modal-component-' + id,
        data() {
          return {
            showDialog: false,
            modalData: modalData
          }
        },
        components: {
          ModalComponent: extendedModalComponent
        },
        async created() {
          await nextTick()
          this.showDialog = true
        },
        methods: {
          closeModal(data: any) {
            this.showDialog = false
            resolve(data)
            setTimeout(() => {
              let element: HTMLElement = document.getElementById('modal-' + id)!
              tempComponent.unmount()
              modalConteiner.removeChild(element)
            }, 500)
          }
        },
        template: modalTemplate
      })

      appIniter.init(tempComponent)

      let element = document.createElement('div')
      element.id = 'modal-' + id
      modalConteiner.append(element)
      tempComponent.mount('#modal-' + id)
    })
  }
}

export default modalService
