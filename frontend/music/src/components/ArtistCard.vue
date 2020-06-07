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

		<a @click="contentEvent()">Show info</a>

		<a :href="artist.url">Listen to the artist</a>

		<!-- Top albums -->
		<a class="dropdown" :class="{dropped: topalbums}" @click="topalbums = !topalbums">Top albums</a>

		<div v-show="topalbums">
			<h3>Top albums:</h3>
			<ul>
				<li v-for="item in artist.topalbums" :key="item.id">
					<p>{{item.name}}</p>
				</li>
			</ul>
		</div>

		<!-- Top tracks -->
		<a class="dropdown" :class="{dropped: toptracks}" @click="toptracks = !toptracks">Top tracks</a>

		<div v-show="toptracks">
			<h3>Top tracks:</h3>
			<ul>
				<li v-for="item in artist.toptracks" :key="item.id">
					<p>{{item.name}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
	name: 'ArtistCard',
	data() {
		return {
			topalbums: false,
			toptracks: false
		};
	},
	props: {
		artist: Object
	},
	methods: {
		contentEvent() {
			Swal.fire({
				title: `${this.artist.name} info:`,
				html: this.artist.bio.content,
				width: 1000,
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
	margin: 2rem 0;
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

a.dropdown {
	margin: 0;
}

a.dropdown::after {
	content: ' ▲';
}

a.dropdown.dropped::after {
	content: ' ▼';
}
</style>