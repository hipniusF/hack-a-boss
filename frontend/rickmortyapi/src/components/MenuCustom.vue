<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuCustom",
  props: {}
};
</script>

<style scoped>
div#nav {
  padding: 0;
  margin-top: 2rem;
}
</style>
