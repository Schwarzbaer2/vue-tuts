const app = Vue.createApp({
  data() {
    return {
      enteredTasks: '',
      tasks: [],
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTasks)
    },
  },
})

app.mount('#assignment')
