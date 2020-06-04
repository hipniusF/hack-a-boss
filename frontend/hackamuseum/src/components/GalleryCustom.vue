<template>
	<div class="gallery">
		<h2>{{title}}</h2>

		<div class="statues">
			<div class="statue" v-for="statue in statues" :key="statue.id">
				<p>{{statue.name}}</p>
				<img :src="statue.urlImg" :alt="statue.name" />
				<p>{{statue.photographer}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GalleryCustom',
	props: {
		statues: Array
	}
};
</script>

<style scoped>
.gallery {
	max-width: 90%;
	margin: 0 auto;
}

.statues {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.statue {
	margin: 3rem 0;
}

p:first-child {
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 1rem;
}

img {
	max-width: 50rem;
	max-height: 30rem;
	margin: 0 2rem;
}

p:nth-child(3) {
	text-align: left;
	margin-left: 3em;
}
</style>