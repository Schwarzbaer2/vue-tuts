Vue.createApp({
  data() {
    return {
      counter: 0,
      result: '',
    }
  },
  watch: {
    result: {},
  },
  methods: {
    add(number) {
      this.counter = this.counter + number

      if (this.counter < 37) {
        this.result = 'Not shown yet'
      } else if (this.counter === 37) {
        this.result = this.counter
      } else {
        this.result = 'To much'
      }
    },
  },
}).mount('#assignment')
