<template>
	<div>
		<h1>{{artist.name}}</h1>
		<img :src="artist.image[2]['#text']" :alt="artist.name" />
	</div>
</template>

<script>
export default {
	name: 'TopArtistsTable',
	props: {
		artist: Object
	}
};
</script>

<style scoped>
div {
	width: 15rem;
	height: 20rem;

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
</style>