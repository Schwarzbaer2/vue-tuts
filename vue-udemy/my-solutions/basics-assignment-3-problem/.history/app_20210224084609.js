Vue.createApp({
  data() {
    return {
      counter: 0,
      result: '',
    }
  },
  watch: {},
  computed: {
    checkValue() {
      if (this.counter < 37) {
        this.result = 'Not shown yet'
      } else if (this.counter === 37) {
        this.result = this.counter
      } else {
        this.result = 'To much'
      }
    },
  },

  methods: {
    add(number) {
      this.counter = this.counter + number
    },
  },
}).mount('#assignment')
