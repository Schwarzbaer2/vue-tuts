const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Mastering Vue',
      courseGoalB: 'Mastering 42',
      courseGoalC: 'Mastering the Universe',
      vueLink: 'https://vuejs.org/',
    }
  },
  methods: {
    outputGoal() {
      const randomNumer = Math.random()
      if (randomNumer < 0.5) {
        return this.courseGoalB
      } else {
        return this.courseGoalC
      }
    },
  },
})

app.mount('#user-goal')
// Select and control section with Vue
