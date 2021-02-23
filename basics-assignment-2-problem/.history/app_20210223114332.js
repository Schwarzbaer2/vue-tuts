const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      otherInput: '',
    }
  },
  methods: {
    redAlert() {
      alert('Red Alert!')
    },
    inputMethod(event) {
      this.userInput = event.target.value
    },
    inputMethod2(event) {
      this.otherInput = event.target.value
    },
    otherName() {
      this.otherInput = event.target.value
    },
  },
}).mount('#assignment')
