import { defineComponent } from "vue";

export default defineComponent({
  name: 'app-input',
  props: {
    label: {
      type: String
    },
    modelValue: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    syze: {
      type: String,
      default: 'normal'
    },
    error: {
      type: Object
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showHiddenText: false
    }
  },
  methods: {
    toggleHiddenText() {
      this.showHiddenText = !this.showHiddenText
    }
  }
})