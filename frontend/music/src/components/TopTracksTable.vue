<template>
	<div>
		<h1>{{track.name}}</h1>
		<img :src="track.image[2]['#text']" :alt="track.name" />
	</div>
</template>

<script>
export default {
	name: 'TopTracksTable',
	props: {
		track: Object
	}
};
</script>

<style scoped>
a {
	color: white;
	text-decoration: none;
}

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