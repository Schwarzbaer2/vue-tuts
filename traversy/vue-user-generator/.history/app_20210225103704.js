const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
  methods: {
    getUser() {
        this.firstName: 'John',
        this.lastName: 'Doe',
        this.email: 'john@gmail.com',
        this.gender: 'male',
        this.picture: 'https://randomuser.me/api/portraits/men/10.jpg'
    },
  },
})

app.mount('#app')
