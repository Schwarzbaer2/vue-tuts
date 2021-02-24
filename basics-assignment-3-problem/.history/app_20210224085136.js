Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  watch: {
    result() {
      console.log('Watcher executing...')
      const that = this
      setTimeout(function () {
        that.number = 0
      }, 5000)
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet!'
      } else if (this.counter === 37) {
        return this.counter
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
