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
				<p>Prize: {{product.precio}}€</p>
				<p>Stock: {{product.stock}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'ProductsTable',
	props: {
		products: Array
	}
};
</script>

<style scoped>
ul {
	list-style: none;
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}

li {
	margin: 1rem;
	padding: 1rem;
	border: 2px solid red;
	border-radius: 2rem;
}

li.available {
	border: 2px solid green;
}
</style>