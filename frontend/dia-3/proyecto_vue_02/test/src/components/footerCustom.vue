<template>
  <div>
    <footer>
      <p>(c) Marco Pérez González 2020</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "footerCustom",
  props: {}
};
</script>

<style scoped>
footer {
  color: white;
  background: rgb(51, 51, 51);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
