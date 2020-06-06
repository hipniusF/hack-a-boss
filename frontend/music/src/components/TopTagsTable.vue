<template>
	<div>
		<!-- <a :href="tag.url" target="_blank"> -->
		<h1>{{tag.name}}</h1>
		<!-- </a> -->
	</div>
</template>

<script>
export default {
	name: 'TopTagsTable',
	props: {
		tag: Object
	}
};
</script>

<style scoped>
div {
	/* width: 15rem;
	height: 20rem; */

	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 0.3rem;
}

img {
	border-radius: 100%;
	margin: auto;
}

h1 {
	color: white;
	margin: 1rem auto;
}

a {
	text-decoration: none;
}
</style>