<template>
  <div class="home">
    <menuCustom></menuCustom>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <footerCustom></footerCustom>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import menuCustom from "@/components/menuCustom.vue";
import footerCustom from "@/components/footerCustom.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    menuCustom,
    footerCustom
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
div.home {
  padding: 0;
  min-height: 98vh;
}
</style>
