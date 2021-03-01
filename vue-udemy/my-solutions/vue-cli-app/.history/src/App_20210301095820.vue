<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 3455 56',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie April',
          phone: '900 3499 56',
          email: 'julie@localhost.com',
        },
      ],
    }
  },
}
</script>
