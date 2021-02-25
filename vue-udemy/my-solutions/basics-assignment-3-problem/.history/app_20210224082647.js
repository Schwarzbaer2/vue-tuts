Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  computed: {},
  methods: {
    add(number) {
      this.counter = this.counter + number
    },
  },
}).mount('#assignment')
