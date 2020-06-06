<template>
	<div>
		<h1>{{track.name}}</h1>

		<img :src="track.album.image[2]['#text']" :alt="track.album.title" />

		<p>Album: {{track.album.title}}</p>
		<p>Artist: {{track.artist.name}}</p>
		<p>Listeners: {{track.listeners}}</p>
		<p>Playcount: {{track.playcount}}</p>

		<br />
		<a @click="contentEvent()">Show content</a>
		<a :href="track.url">Listen to the artist</a>
	</div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
	name: 'TrackCard',
	props: {
		track: Object
	},
	computed: {
		lastfmUrl() {
			return `https://www.last.fm/music/${this.artist.name.replace(' ', '+')}/`;
		}
	},
	methods: {
		contentEvent() {
			Swal.fire({
				title: `${this.track.name} content:`,
				html: this.track.wiki.content,
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

img {
	margin: 2rem 0;
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