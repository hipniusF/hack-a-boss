<template>
	<div>
		<h1>{{artist.name}}</h1>

		<p>Active tour: {{Number(artist.ontour) ? 'Yes':'No'}}</p>
		<p>Listeners: {{artist.stats.listeners}}</p>
		<p>Playcount: {{artist.stats.playcount}}</p>

		<h2>Tags of the artist</h2>
		<ul>
			<li v-for="item in artist.tags.tag" :key="item.id">
				<p>{{item.name}}</p>
			</li>
		</ul>

		<h2>Members / other bands:</h2>
		<ul>
			<li v-for="item in artist.similar.artist" :key="item.id">
				<p>{{item.name}}</p>
			</li>
		</ul>

		<a @click="contentEvent()">Show content</a>

		<a :href="artist.url">Listen to the artist</a>
	</div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
	name: 'ArtistCard',
	props: {
		artist: Object
	},
	methods: {
		contentEvent() {
			Swal.fire({
				title: `${this.artist.name} content:`,
				html: this.artist.bio.content,
				confirmButtonText: 'Exit'
			});
		}
	}
};
</script>

<style scoped>
h1,
h2 {
	margin: 3rem 0 0.5rem 0;
}

a {
	display: block;
	margin-top: 2rem;
	color: black;
	cursor: pointer;
}

ul {
	list-style: none;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0 auto;
}

li:not(:last-child) {
	margin-right: 0.5rem;
	padding-right: 0.5rem;
	border-right: 1px solid grey;
}
</style>