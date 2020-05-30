<template>
  <div class="card">
    <a :href="char.url" target="_blank">
      <h1>{{char.id}}: {{char.name}}</h1>
      <img :src="char.image" :alt="char.name" />
      <section class="data">
        <p>
          <span>Status:</span>
          {{char.status}}
        </p>
        <p>
          <span>Species:</span>
          {{char.species}}
        </p>
        <p>
          <span>Gender:</span>
          {{char.gender}}
        </p>
        <p>
          <span>Origin:</span>
          {{char.origin.name}}
        </p>
      </section>
    </a>
  </div>
</template>

<script>
export default {
  name: "CharCard",
  props: {
    char: Object
  }
};
</script>

<style scoped>
div.card a {
  height: 20rem;

  border-radius: 4%;
  background: rgb(61, 59, 59);
  color: white;
  text-decoration: none;

  display: grid;
  grid-template-areas:
    "a a a"
    "b c c";
}

div.card a:hover {
  height: 20.1rem;
  width: 101%;
  border: 2px solid black;
}

h1 {
  grid-area: a;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  border-radius: 100%;
  grid-area: b;
  width: 60%;
  margin-left: 1rem;
  padding-bottom: 0.2rem;
  width: 170px;
  object-fit: cover;
}

section.data {
  grid-area: c;
  width: 80%;
  padding: 1rem 1rem 0 1rem;
  text-align: left;
}

section.data p {
  margin-bottom: 0.5rem;
}

section.data p span {
  text-decoration: underline;
  font-weight: bold;
}

@media (max-width: 1025px) {
  div.card a {
    height: 33rem;

    grid-template-areas:
      "a"
      "b"
      "c";
  }

  figure img {
    width: 70%;
    margin: auto;
  }
  h1 {
    min-height: 150px;
  }
}

@media (max-width: 600px) {
  h1 {
    min-height: 0;
  }
  img {
    margin: auto;
    border-radius: 20%;
    width: 70%;
  }
}
</style>