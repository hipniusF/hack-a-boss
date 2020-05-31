<template>
  <div class="about">
    <h1>About</h1>
    <MenuCustom></MenuCustom>

    <figure>
      <img src="@/assets/rick-morty.jpg" alt />
    </figure>
    <p>
      Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
      Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of the family. The series originated from an animated short parody film of Back to the Future, created by Roiland for Channel 101, a short film festival co-founded by Harmon. The series has been acclaimed by critics for its originality, creativity and humor.
      The series has been picked up for an additional seventy episodes over an unspecified number of seasons, beginning with season 4. The fourth season premiered on November 10, 2019, and consists of ten episode
    </p>
  </div>
</template>

<script>
import MenuCustom from "@/components/MenuCustom.vue";

export default {
  name: "About",
  components: {
    MenuCustom
  }
};
</script>

<style scoped>
h1 {
  font-size: 5rem;
  /* text-align: left; */
  margin: 2rem;
  color: rgb(61, 59, 59);
}

figure img {
  width: 40%;
  margin: 2rem auto;
}

p {
  width: 50%;
  margin: 1rem auto;
  text-align: left;
}

@media (max-width: 600px) {
  figure img {
    width: 90%;
    margin: 2rem auto;
  }

  p {
    width: 90%;
  }
}
</style>