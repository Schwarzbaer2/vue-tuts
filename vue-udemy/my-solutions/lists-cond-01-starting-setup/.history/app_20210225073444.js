const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue)
    },
    removeGoal(idx) {
      this.goal.splice(idx, 1)
    },
  },
})

app.mount('#user-goals')
