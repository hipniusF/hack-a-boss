<template>
  <div>
    <h2>Carrito: {{cart}}</h2>
    <table>
      <tr>
        <th>Nombre del producto</th>
        <th>Imagen</th>
        <th>Estado</th>
        <th>Añadire al carro</th>
      </tr>

      <tr v-for="product in products" :key="product.id">
        <td>{{product.name}}</td>
        <td>
          <img :src="product.img" alt="tarro" height="50" />
        </td>

        <td
          :class="{green: product.state == 'Disponible', red: product.state == 'No disponible'}"
        >{{product.state}}</td>
        <td>
          <button @click="eventIncrease()">Añadir unidad</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TablaProductos",
  props: {
    products: Array,
    cart: Number
  },
  methods: {
    eventIncrease() {
      this.$emit("increaseCart");
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

body {
  width: 50%;
  min-height: 96vh;
  margin: 2rem auto 0;
  font-size: large;
}

h1 {
  margin: 2rem 0;
}

table {
  margin-top: 1rem;
  border: 2px solid black;
  padding: 0.5rem;
}

th {
  border: 1px solid black;
  padding: 0.5rem 1rem;
}

td {
  border: 1px solid black;
  padding: 1rem;
}

.green {
  color: green;
}

.red {
  color: red;
}

img {
  margin: 0 1rem;
}
</style>