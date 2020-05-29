<template>
  <div class="gallery">
    <menuCustom></menuCustom>
    <h1>Buenas tardes</h1>
    <figure>
      <img src="https://source.unsplash.com/random/800x600" alt="random" />
    </figure>
  </div>
</template>

<script>
import menuCustom from "@/components/menuCustom.vue";

export default {
  name: "Gallery",
  components: {
    menuCustom
  }
};
</script>