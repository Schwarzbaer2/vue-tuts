const app = Vue.createApp({
  data() {
    return {
      myName: 'Andreas Schwarz',
      myAge: 40,
    }
  },
  methods: {
    agePlusFive() {
      myAge + 5
    },
  },
})

app.mount('#assignment')
