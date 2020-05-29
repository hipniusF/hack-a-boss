<template>
  <div class="home">
    <menuCustom></menuCustom>
    <Presentacion :saludo="title"></Presentacion>
    <Contador :counter="counter" v-on:increase="increase()" v-on:decrease="decrease()"></Contador>

    <TablaProductos :products="products" :cart="cart" v-on:increaseCart="cart++"></TablaProductos>

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
import Presentacion from "@/components/Presentacion.vue";
import Contador from "@/components/Contador.vue";
import TablaProductos from "@/components/TablaProductos.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    menuCustom,
    footerCustom,
    Presentacion,
    Contador,
    TablaProductos
  },
  data() {
    return {
      title: "Saludos",
      counter: 0,
      cart: 0,
      products: [
        {
          name: "Alubias",
          img:
            "https://i.pinimg.com/originals/bc/0c/22/bc0c2252f26b976dc08c7ecb66f98a7e.jpg",
          state: "Disponible"
        },
        {
          name: "Garbanzos",
          img:
            "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201811/20/00118007000906____2__600x600.jpg",
          state: "No disponible"
        },
        {
          name: "Judías verdes",
          img:
            "https://i.pinimg.com/originals/bc/0c/22/bc0c2252f26b976dc08c7ecb66f98a7e.jpg",
          state: "Disponible"
        },
        {
          name: "Remolacha",
          img:
            "data:image/jpeg;base64,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",
          state: "No disponible"
        }
      ]
    };
  },
  methods: {
    increase() {
      if (this.counter < 10) this.counter++;
    },
    decrease() {
      if (this.counter > 0) this.counter--;
    }
  },
  beforeCreate() {
    console.log("Hook Before Create");
  },
  created() {
    console.log("Hook Created");
  },
  beforeMount() {
    console.log("Hook Before Mount");
  },
  mounted() {
    console.log("Hook mounted");
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
div.home {
  display: flex;
  margin: 0 auto;
  align-items: center;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40%;
  padding: 0;
  min-height: 98vh;
}
</style>
