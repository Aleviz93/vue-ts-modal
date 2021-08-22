import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-button',
  props: {
    title: {
      required: false,
      type: String
    },
    syze: {
      type: String,
      default: 'normal'
    },
    loading: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
