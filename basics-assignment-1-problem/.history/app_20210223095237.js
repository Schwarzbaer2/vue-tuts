const app = Vue.createApp({
  data() {
    return {
      myName: 'Andreas Schwarz',
      myAge: 40,
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
