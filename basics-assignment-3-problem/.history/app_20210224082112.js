Vue.createApp({
  data() {
    return {
      value: 0,
    }
  },
  computed: {},
  methods: {
    add(number) {
      this.value = this.value + number
    },
  },
}).mount('#assignment')
