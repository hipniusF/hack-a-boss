<template>
	<div class="about">
		<vue-headful title="Not found | Market" description="Home page of hackamarket" />

		<h1>Page not found</h1>
		<h2>(404 error)</h2>
		<router-link :to="{name:'Products'}">Go to home</router-link>
	</div>
</template>

<script>
export default {
	name: 'Error'
};
</script>

<style scoped>
h1 {
	margin: 3rem 0 1rem 0;
}

h2 {
	margin-bottom: 5rem;
}

a {
	font-weight: bold;
	color: #2c3e50;
}
</style>
