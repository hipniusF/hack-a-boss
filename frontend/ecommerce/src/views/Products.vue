<template>
	<div>
		<vue-headful title="Home | Market" description="Home page of hackamarket" />

		<menucustom :logged="logged" v-on:logout="logout" />

		<loadingspinner v-show="loading" class="spinner" />
		<h1 v-show="!loading">Products:</h1>
		<productstable :products="products" v-show="!loading" v-on:addToCart="addToCart" />
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
			loading: true
		};
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
div {
	background: #e8bd83;
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
</style>