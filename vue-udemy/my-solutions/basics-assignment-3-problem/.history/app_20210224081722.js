Vue.createApp({
  data() {
    return {
      value: '',
    }
  },
  computed: {},
  methods: {
    add(number) {
      this.value = this.value + number
    },
  },
}).mount('#assignment')
