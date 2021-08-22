import { defineComponent } from "vue";
import ModalComponent from "@/components/modals/new-author/index.vue";

export default defineComponent({
  name: 'app-modal',
  data() {
    return {
      form: [
        { title: 'Имя', reference: 'lastName', value: '' },
        { title: 'Фамилия', reference: 'firstName', value: '' },
        { title: 'Отчество', reference: 'middleName', value: '' },
        { title: 'Похожие', reference: 'similar', value: '' },
        { title: 'Страна', reference: 'country', value: '' },
        { title: 'Год рождения', reference: 'dateOfBirth', value: '' },
        { title: 'Год смерти', reference: 'dateOfDeath', value: '' }
      ]
    }
  },
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    async createModal() {
      let modalResponse = await this.$modals.open(ModalComponent, {
        title: 'Новый автор'
      })

      console.log(modalResponse)
    },
  }
})
