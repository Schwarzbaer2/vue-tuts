const app = Vue.createApp({
  data() {
    return {
      userInput: '',
    }
  },
  methods: {
    redAlert() {
      alert('Red Alert!')
    },
    inputMethod(event) {
      this.userInput = event.target.value
    },
  },
}).mount('#assignment')
