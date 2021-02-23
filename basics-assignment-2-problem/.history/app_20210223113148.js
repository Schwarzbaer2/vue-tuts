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
  },
}).mount('#assignment')
