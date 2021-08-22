import { defineComponent } from "vue";
import ModalComponent from "@/components/modals/new-author/index.vue";

export default defineComponent({
  name: 'App',
  methods: {
    async createModal() {
      let modalResponse = await this.$modals.open(ModalComponent, {
        title: 'Новый автор'
      })

      console.log(modalResponse)
    },
  }
})
