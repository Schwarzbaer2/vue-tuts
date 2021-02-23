const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      yourName: '',
    }
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name
    },
    submitForm() {
      alert('Submitted')
    },
    setName(event, lastName) {
      this.yourName = event.target.value + ' ' + lastName
    },
    add(num) {
      this.counter = this.counter + num
    },
    decrease(num) {
      this.counter = this.counter - num
    },
  },
})

app.mount('#events')
