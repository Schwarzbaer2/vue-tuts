<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Phone:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '0232 452214',
        email: 'manuel@localhost.com',
      },
    }
  },
  methods: {
    toggleDetails() {
      this.detailAreVisible = !this.detailAreVisible
    },
  },
}
</script>
