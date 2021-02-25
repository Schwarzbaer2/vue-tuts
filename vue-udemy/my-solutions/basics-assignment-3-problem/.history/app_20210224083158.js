Vue.createApp({
  data() {
    return {
      counter: 0,
      result: '',
    }
  },
  computed: {},
  methods: {
    add(number) {
      this.counter = this.counter + number

      if (this.counter < 37) {
        this.result = 'Not shown yet'
      }
    },
  },
}).mount('#assignment')
