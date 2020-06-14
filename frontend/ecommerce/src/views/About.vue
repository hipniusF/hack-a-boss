<template>
	<div class="about">
		<vue-headful title="About | Market" description="Home page of hackamarket" />

		<menucustom :logged="logged" v-on:logout="logout" />
		<h1>About page</h1>
		<div class="text">
			<img src="@/assets/logo.png" alt="basic logo" />
			<p>
				This web page was made by Marco Pérez González in June of 2020.
				It was programmed as an exercise of the bootcamp of Hack A Boss.
			</p>
		</div>
	</div>
</template>

<script>
// Auth functions
import { isLoggedIn, logout } from '../api/auth';

// Components
import menucustom from '@/components/MenuCustom.vue';

export default {
	name: 'About',
	components: {
		menucustom
	},
	data() {
		return {
			logged: false
		};
	},
	methods: {
		async logout() {
			await logout();
			location.reload();
		}
	},
	async created() {
		this.logged = await isLoggedIn();
	}
};
</script>

<style scoped>
.about {
	min-height: 100vh;
}

h1 {
	margin: 1rem 0;
}

p {
	font-size: 1.1rem;
	padding: 2rem;
	text-align: left;
	margin: auto;
}

.text {
	width: 60%;
	margin: 10rem auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}

img {
	margin-left: auto;
	width: 300px;
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
	p {
		font-size: 1.1rem;
		padding: 0 2rem;
		text-align: left;
		margin: 1rem auto;
	}

	.about {
		width: 100%;
	}

	.text {
		width: 90%;
		margin: 7rem auto;
		grid-template-columns: repeat(1, 1fr);
	}

	img {
		margin: 0 auto 2rem;
		width: 200px;
	}
}
</style>
