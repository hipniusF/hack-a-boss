<template>
	<div>
		<vue-headful title="Home | Market" description="Home page of hackamarket" />

		<menucustom />
		<productstable :products="products" />
	</div>
</template>

<script>
// Modules
import axios from 'axios';

// Components
import productstable from '@/components/ProductsTable.vue';
import menucustom from '@/components/MenuCustom.vue';

export default {
	name: 'Products',
	components: {
		productstable,
		menucustom
	},
	data() {
		return {
			products: []
		};
	},
	methods: {},
	async created() {
		this.products = (await axios.get('http://127.0.0.1:3050/products')).data;
		console.log(this.products);
	}
};
</script>

<style scoped>
</style>