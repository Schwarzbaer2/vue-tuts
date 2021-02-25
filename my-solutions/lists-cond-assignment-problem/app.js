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
    toggleClass() {
      this.classHidden = !this.classHidden
    },
  },
})

app.mount('#assignment')
