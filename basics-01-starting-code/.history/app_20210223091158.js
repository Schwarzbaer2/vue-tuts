const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Mastering Vue',
      vueLink: 'https://vuejs.org/',
    }
  },
  methods: {
    outputGoal() {
      const randomNumer = Math.random()
      if (randomNumer < 0.5) {
        return 'Learn Vue'
      } else {
        return 'Master Vue'
      }
    },
  },
})

app.mount('#user-goal')
// Select and control section with Vue
