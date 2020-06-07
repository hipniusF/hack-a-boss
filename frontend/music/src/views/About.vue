<template>
	<div class="about">
		<vue-headful title="About | MusicF" description="Home page of hackamuseum" />

		<menucustom />
		<h1>About page</h1>
		<div class="text">
			<img src="/logo.png" alt="basic logo" />
			<p>
				This web page was made by Marco Pérez González in June of 2020.
				It was programmed as an exercise of the bootcamp of Hack A Boss.
			</p>
		</div>
	</div>
</template>

<script>
import menucustom from '@/components/MenuCustom.vue';

export default {
	name: 'About',
	components: {
		menucustom
	}
};
</script>

<style scoped>
.about {
	width: 40%;
	margin: 0 auto;
	min-height: 100vh;
}

h1,
p {
	color: white;
}

p {
	font-size: 1.1rem;
	padding: 2rem;
	text-align: left;
	margin: auto;
}

div.text {
	margin: 10rem 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}

img {
	/* margin: auto 0 auto auto; */
	margin-left: auto;
	width: 350px;
}

@media (max-width: 1100px) {
	.about {
		width: 60%;
	}

	img {
		width: 200px;
	}
}

@media (max-width: 600px) {
	.about {
		width: 100%;
	}

	div.text {
		margin: 2rem 0;
		grid-template-columns: repeat(1, 1fr);
	}

	img {
		margin: 0 auto;
		width: 150px;
	}
}
</style>