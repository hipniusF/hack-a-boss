<template>
	<div class="home">
		<vue-headful title="Home | Hackamuseum" description="Home page of hackamuseum" />

		<!-- MENU -->
		<menucustom />

		<!-- TITLE -->
		<h2 v-html="title"></h2>

		<!-- VIDEO -->
		<iframe
			width="600"
			height="337.5"
			src="https://www.youtube.com/embed/6vuFh6NNa70"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>

		<!-- DESCRIPTION -->
		<p v-html="desc"></p>

		<!-- COLLECTION NAV -->
		<nav>
			<router-link :to="{name: 'GreekGallery'}">GREEK COLLECTION</router-link>|
			<router-link :to="{name: 'RomanGallery'}">ROMAN COLLECTION</router-link>|
			<router-link :to="{name: 'OrientalGallery'}">ORIENTAL COLLECTION</router-link>
		</nav>

		<!-- FOOTER -->
		<footercustom />
	</div>
</template>

<script>
import menucustom from '@/components/MenuCustom.vue';
import footercustom from '@/components/FooterCustom.vue';

export default {
	name: 'Home',
	components: {
		menucustom,
		footercustom
	},
	data() {
		return {
			title: 'Te damos la bienvenida <br> a HACK A MUSEUM',
			desc: 'Tenemos varias colleciones que te pueden interesar. <br> Buscamos colaboradores/as activamente.'
		};
	}
};
</script>

<style scoped>
h2 {
	margin-bottom: 2rem;
}

p {
	margin-top: 4rem;
}

nav {
	padding: 30px;
	margin: 3rem 0;
}

nav a {
	font-weight: bold;
	color: white;
	padding: 0 3rem;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
