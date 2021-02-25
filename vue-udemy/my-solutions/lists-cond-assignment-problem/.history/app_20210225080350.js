const app = Vue.createApp({
  data() {
    return {
      enteredTasks: '',
      tasks: [],
    }
  },
  methods: {
    addTask() {
      this.goals.push(this.enteredGoalValue)
    },
  },
})

app.mount('#assignment')
