<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'], //This prop is set when adding v-model to a component, see in TheForm.vue
  emits: ['update:modelValue'], // this event is set when adding a v-model to a component
  //   data() {
  //     return {
  //       activeOption: this.modelValue
  //     };
  //   },
  computed: {},
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    }
  }
};
</script>

<style scoped>
.active {
  border-color: rgba(228, 196, 17, 0.507);
}

.active buton {
  color: rgba(228, 196, 17, 0.507);
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
