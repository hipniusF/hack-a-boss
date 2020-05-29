<template>
  <div>
    <button @click="eventDecrease">Restar</button>
    <span>{{counter}}</span>
    <button @click="eventIncrease">Sumar</button>
  </div>
</template>

<script>
export default {
  name: "Contador",
  props: {
    counter: Number
  },
  methods: {
    eventIncrease() {
      this.$emit("increase");
    },
    eventDecrease() {
      this.$emit("decrease");
    }
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>