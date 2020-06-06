<template>
	<div>
		<h1>{{tag.name}}</h1>

		<p>Reach: {{tag.reach}}</p>
		<p>Total: {{tag.total}}</p>

		<h2>Top artists of the tag</h2>
		<ul>
			<li v-for="item in tag.topartists" :key="item.id">
				<p>{{item.name}}</p>
			</li>
		</ul>

		<h2>Top albums of the tag</h2>
		<ul>
			<li v-for="item in tag.topalbums" :key="item.id">
				<p>{{item.name}}</p>
			</li>
		</ul>

		<h2>Top tracks of the tag</h2>
		<ul>
			<li v-for="item in tag.toptracks" :key="item.id">
				<p>{{item.name}}</p>
			</li>
		</ul>

		<a @click="contentEvent()">Show content</a>
	</div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
	name: 'ArtistCard',
	props: {
		tag: Object
	},
	methods: {
		contentEvent() {
			Swal.fire({
				title: `${this.tag.name} content:`,
				html: this.tag.wiki.content,
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