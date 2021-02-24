const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: ''
      goals: [] };
  },
  methods: {
    addGoal() {
      this.goals.push();
    }
  }
});

app.mount('#user-goals');
