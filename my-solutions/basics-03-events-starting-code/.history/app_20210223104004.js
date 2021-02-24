const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value
    }
    add(num) {
      this.counter = this.counter + num
    },
    decrease(num) {
      this.counter = this.counter - num
    },
  },
})

app.mount('#events')