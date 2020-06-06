<template>
	<div class="error">
		<h1>404 Error</h1>
		<h1>PAGE NOT FOUND</h1>
		<router-link :to="{name: 'Home'}">
			<button>Rerturn to home</button>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'Error',
	components: {}
};
</script>

<style scoped>
h1 {
	padding: 4rem 0 1rem 0;
	color: white;
}

button {
	width: 10rem;
	height: 3em;
	border: 0;
	border-radius: 5rem;
	background: white;
	margin: 0 auto;
	cursor: pointer;
}
</style>