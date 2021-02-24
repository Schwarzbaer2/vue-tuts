Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  watch: {},
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet!'
      } else if (this.number === 37) {
        return this.number
      } else {
        return 'Too much!'
      }
    },
  },

  methods: {
    add(number) {
      this.counter = this.counter + number
    },
  },
}).mount('#assignment')
