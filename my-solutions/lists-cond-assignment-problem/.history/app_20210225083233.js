const app = Vue.createApp({
  data() {
    return {
      enteredTasks: '',
      tasks: [],
      classHidden: false,
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTasks)
    },
  },
})

app.mount('#assignment')
