<template>
	<div>
		<ul>
			<li
				v-for="product in products"
				:key="product.id"
				:class="{available: product.estado === 'disponible'}"
			>
				<h1>{{product.nombre}}</h1>
				<img :src="product.img" :alt="product.nombre" />
				<p>Stock: {{product.stock}}</p>
				<h2>{{product.precio}}€</h2>

				<button @click="addToCart()">Add to cart</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ProductsTable',
	props: {
		products: Array
	},
	methods: {
		addToCart() {
			this.$emit('addToCart');
		}
	}
};
</script>

<style scoped>
ul {
	border-radius: 2rem;

	list-style: none;
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}

li {
	margin: 1rem;
	padding: 1rem;
	border: 2px solid white;
	border-radius: 1rem;

	background: white;
}

h1 {
	margin-bottom: 1rem;
}

img {
	min-width: 270px;
	max-width: 300px;
	max-height: 300px;
	border-radius: 1rem;
}

h2 {
	width: 60%;
	margin: 1rem auto 2rem;
	font-size: 2rem;
	border-bottom: 1px solid black;
}

p {
	margin-right: 1rem;
	text-align: right;
}

button {
	background: #e8bd83;
	border: 0;
	padding: 1rem 2rem;
	border-radius: 2rem;
	cursor: pointer;
}

button:focus {
	border: 2px solid black;
	outline: none;
}

li.available h2::after {
	font-size: 1rem;
	vertical-align: middle;
	content: ' (Not available)';
}
</style>