const app = Vue.createApp({
  data() {
    return {
      myName: 'Andreas Schwarz',
      myAge: 40,
      favUrl:
        'https://static.wikia.nocookie.net/avengers/images/7/78/3DA43C17-9D2A-46A9-8713-E0F4C0FA7C7B.jpeg/revision/latest?cb=20200410125737&path-prefix=de',
    }
  },
  methods: {
    agePlusFive() {
      const AGE = this.myAge
      let agePlus = AGE + 5
      return agePlus
    },
    favouriteNumber() {
      let randomNumber = Math.random()
      return randomNumber
    },
  },
})

app.mount('#assignment')
