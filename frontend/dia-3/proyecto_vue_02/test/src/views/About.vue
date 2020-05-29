<template>
  <div class="about">
    <menuCustom></menuCustom>
    <h1>This is an about page</h1>
    <footerCustom></footerCustom>
  </div>
</template>

<script>
// @ is an alias to /src
import menuCustom from "@/components/menuCustom.vue";
import footerCustom from "@/components/footerCustom.vue";

export default {
  name: "About",
  components: {
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
