Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  computed: {},
  methods: {
    add(number) {
      if (counter < 37) {
        this.counter = 'Not shown yet'
      }

      this.counter = this.counter + number
    },
  },
}).mount('#assignment')
