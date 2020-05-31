<template>
  <div class="home">
    <h1>Rick and Morty</h1>
    <h2>Characters with their data and links to their wikis</h2>

    <MenuCustom></MenuCustom>

    <form>
      <fieldset class="defaultSearch" v-show="!advanceSearch">
        <label for="search">Search:</label>
        <input
          type="text"
          v-model="search.name"
          name="search"
          id="search"
          placeholder="Type search terms"
        />
      </fieldset>

      <fieldset v-show="advanceSearch" class="advance">
        <fieldset>
          <label for="byId">Search by ID:</label>
          <input type="text" name="byId" id="byId" v-model="search.id" />
        </fieldset>

        <fieldset>
          <label for="byGender">Search by Gender:</label>
          <select name="byGender" id="byGender" v-model="search.gender">
            <option value>Both</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </fieldset>

        <fieldset>
          <label for="byState">Search By State:</label>
          <input type="text" name="byState" id="byState" v-model="search.state" />
        </fieldset>

        <fieldset>
          <label for="byName">Search By Name:</label>
          <input type="text" name="byName" id="byName" v-model="search.name" />
        </fieldset>
      </fieldset>
      <button @click="advanceSearch = !advanceSearch">Advanced search</button>
    </form>

    <ul>
      <li v-for="char in filteredChars" :key="char.id">
        <CharCard :char="char"></CharCard>
      </li>
    </ul>
  </div>
</template>

<script>
import CharCard from "@/components/CharCard.vue";
import MenuCustom from "@/components/MenuCustom.vue";
import api from "@/api/api.js";

export default {
  name: "Home",
  components: {
    CharCard,
    MenuCustom
  },
  data() {
    return {
      chars: [],
      search: {
        name: "",
        gender: "",
        state: "",
        id: ""
      },
      advanceSearch: false
    };
  },
  computed: {
    filteredChars() {
      let searchResult = this.chars;
      console.log(searchResult);
      console.log(this.search);
      if (this.search.name) {
        searchResult = searchResult.filter(char =>
          char.name.toLowerCase().includes(this.search.name.toLowerCase())
        );
      }

      if (this.search.gender) {
        searchResult = searchResult.filter(
          char => char.gender == this.search.gender
        );
      }

      if (this.search.state) {
        searchResult = searchResult.filter(char =>
          char.status.toLowerCase().includes(this.search.state.toLowerCase())
        );
      }

      if (this.search.id) {
        searchResult = searchResult.filter(char => char.id == this.search.id);
      }
      return searchResult;
    }
  },
  async created() {
    this.chars = (await api.getAll()).data.results;
  },
  mounted() {
    console.log(this.chars);
  }
};
</script>

<style scoped>
div.home {
  margin: 0 auto;
  width: 100%;
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
  grid-gap: 1rem;
  margin: 3rem;
}

form {
  display: grid;
}

form fieldset.defaultSearch {
  display: grid;
  grid-template-columns: 1fr;
  width: 15rem;
  margin: 2rem auto 1rem;
  border: 0;
}

form fieldset.advance {
  width: 44rem;
  margin: 2rem auto 1rem;
  display: flex;
  padding: 0.5rem 10rem;
}

form fieldset fieldset {
  border: 0;
  text-align: right;
}

form input,
form select {
  width: 15rem;
  height: 2rem;
}

button {
  border: 0;
  text-decoration: underline;
  background: white;
  cursor: pointer;
}

button:focus {
  outline: none;
}

@media (max-width: 1100px) {
  div.home {
    width: 100%;
  }

  h1,
  h2 {
    margin-left: 0;
    margin-top: 1rem;
  }

  ul {
    margin: 2rem 0;
    grid-gap: 0.5rem;
  }
}

@media (max-width: 600px) {
  ul {
    grid-template-columns: 1fr;
    margin: 1rem;
  }

  form fieldset.advance {
    width: 10rem;
    margin: 2rem auto 1rem;
    display: flex;
    padding: 0.5rem 1rem;
  }
}
</style>
