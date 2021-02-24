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
  },
})

app.mount('#assignment')
