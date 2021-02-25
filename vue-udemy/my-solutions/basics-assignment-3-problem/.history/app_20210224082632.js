Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  computed: {},
  methods: {
    add(number) {
      this.value = this.value + number
    },
  },
}).mount('#assignment')
