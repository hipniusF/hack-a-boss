<template>
  <div class="home">
    <h1>Rick and Morty</h1>
    <h2>Characters with their data and links to their wikis</h2>
    <ul>
      <li v-for="char in chars" :key="char.id">
        <CharCard :char="char"></CharCard>
      </li>
    </ul>
  </div>
</template>

<script>
import CharCard from "@/components/CharCard.vue";
import api from "@/api/api.js";

export default {
  name: "Home",
  components: {
    CharCard
  },
  data() {
    return {
      chars: []
    };
  },
  async created() {
    this.chars = (await api.getAll()).data.results;
  },
  async mounted() {
    console.log((await api.getAll()).data.results);
  }
};
</script>

<style scoped>
div.home {
  margin: 0 auto;
  width: 90%;
}
h1 {
  font-size: 5rem;
  text-align: left;
  margin-left: 10rem;
  margin-bottom: 0;
  color: rgb(61, 59, 59);
}

h2 {
  font-size: 2rem;
  text-align: left;
  margin-left: 12rem;
  margin-top: 0;
  color: rgb(61, 59, 59);
}
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 3rem;
}
</style>