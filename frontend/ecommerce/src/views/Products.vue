<template>
	<div class="products">
		<vue-headful title="Home | Market" description="Home page of hackamarket" />

		<menucustom :logged="logged" v-on:logout="logout" />

		<loadingspinner v-show="loading" class="spinner" />

		<h1 v-show="!loading">Products:</h1>

		<form v-on:submit.prevent>
			<label for="searchById">Search product:</label>
			<input
				v-model="search"
				type="text"
				name="searchById"
				id="searchById"
				placeholder="Type the name of the product"
			/>
		</form>

		<productstable :products="filteredProducts" v-show="!loading" v-on:addToCart="addToCart" />
	</div>
</template>

<script>
// Modules
import axios from 'axios';
import Swal from 'sweetalert2';

// Auth functions
import { isLoggedIn, logout } from '../api/auth';

// Components
import productstable from '@/components/ProductsTable.vue';
import menucustom from '@/components/MenuCustom.vue';
import loadingspinner from '@/components/LoadingSpinner.vue';

export default {
	name: 'Products',
	components: {
		productstable,
		menucustom,
		loadingspinner
	},
	data() {
		return {
			products: [],
			logged: false,
			loading: true,
			search: null
		};
	},
	computed: {
		// Function for filtering clients
		filteredProducts() {
			let searchResult = this.products;

			if (this.search) {
				searchResult = searchResult.filter((product) =>
					product.nombre.toLowerCase().includes(this.search.toLowerCase())
				);
			}
			return searchResult;
		}
	},
	methods: {
		async logout() {
			await logout();
			location.reload();
		},
		addToCart() {
			Swal.fire({
				icon: 'success',
				title: 'Product added to cart succesfully',
				showConfirmButton: false,
				timer: 2000
			});
		}
	},
	async created() {
		this.logged = await isLoggedIn();
		this.products = (await axios.get('http://127.0.0.1:3050/products')).data;
		console.log(this.products);
		this.loading = false;
	}
};
</script>

<style scoped>
.products {
	min-height: 100vh;
	background: #93dc80;
}

.spinner {
	position: absolute;
	top: 50%;
}

h1 {
	margin: 0 auto 2rem;
	padding-top: 2rem;
	width: 60%;
	text-align: left;
}

/* <search syles> */
form fieldset {
	display: grid;
	grid-template-columns: 1fr;
	width: 15rem;
	margin: 2rem auto 1rem;
	border: 0;
}

form fieldset fieldset {
	border: 0;
	text-align: right;
}

form input,
form select {
	margin: 0 auto;
	display: block;
	width: 15rem;
	height: 2rem;
}
/* </search syles> */
</style>