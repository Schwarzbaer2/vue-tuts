const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragraphIsVisible: true;
    }
  },
  methods: {
      visibility() {
    this.paragraphIsVisible = !this.paragraphIsVisible
      }
  },
})

app.mount('#assignment')
