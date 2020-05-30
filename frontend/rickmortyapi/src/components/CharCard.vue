<template>
  <div class="card">
    <a :href="char.url" target="_blank">
      <h1>{{char.id}}: {{char.name}}</h1>
      <img :src="char.image" :alt="char.name" width="170" />
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
  border-radius: 99%;
  grid-area: b;
  margin: auto 2rem auto;
  padding-bottom: 1rem;
}

section.data {
  grid-area: c;
  width: 80%;
  padding: 2rem 0 0 1rem;
  text-align: left;
}

section.data p {
  margin-bottom: 0.5rem;
}

section.data p span {
  text-decoration: underline;
  font-weight: bold;
}
</style>



/* Mostrar:
  -ID
  -Estado de personaje
  -Especie
  -Género
  -Imagen
  -Datos de origen
 */  