<template>
	<div class="home">
		<img :src="speak.img" />
		<p>{{ speak.text }}</p>

		<button v-show="this.dialogs[this.dialog].game" @click="changeDialog()">{{speak.button}}</button>
		<router-link :to="{ name: 'Game' }">
			<button v-show="!this.dialogs[this.dialog].game">FIGHT</button>
		</router-link>
	</div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: 'Home',
	data() {
		return {
			dialog: 0,
			dialogs: [
				{
					text: 'You are in a tabern relaxing after your last adventure',
					img: '/img/tavern.gif',
					button: 'CONTINUE',
					game: true
				},
				{
					text: 'You are thinking on how tired you are of helping people as well as wishing a calm retirement',
					img: '/img/tavern.gif',
					button: 'CONTINUE',
					game: true
				},
				{
					text: 'When suddenly...',
					img: '/img/tavern.gif',
					button: 'CONTINUE',
					game: true
				},
				{
					text: 'A chicken??¿? starts taking to you??!??!?',
					img: '/img/chicken.png',
					button: 'CONTINUE',
					game: true
				},
				{
					text: '"Fellow adventurer, I need your help!!!"',
					img: '/img/chicken.png',
					button: 'CONTINUE',
					game: true
				},
				{
					text: '????????',
					img: '/img/chicken.png',
					button: 'CONTINUE',
					game: true
				},
				{
					text: '"Are you okey? Whatever, my family is in dangerous, YOU HAVE TO HELP ME"',
					img: '/img/chicken.png',
					button: 'CONTINUE',
					game: true
				},
				{
					text: '"Come with me, powerfull adventurer"',
					img: '/img/chicken.png',
					button: 'FOLLOW THE CHICKEN',
					game: true
				},
				{
					text: '"There, that\'s the place here the terrible creature I told you about has my family"',
					img: '/img/citadel.jpg',
					button: 'CONTINUE',
					game: true
				},
				{
					text: '"I\'ll wait here, please, help them"',
					img: '/img/citadel.jpg',
					button: 'CLIMB THE FLOATING CITY',
					game: true
				},
				{
					text: 'JOJOJO',
					img: '/img/interrogates.png',
					button: '????',
					game: true
				},
				{
					text: 'I see you come to die, Im gonna help you',
					img: '/img/lich.png',
					game: false
				}
			]
		};
	},

	computed: {
		speak() {
			return this.dialogs[this.dialog];
		}
	},

	methods: {
		changeDialog() {
			this.dialog++;
		}
	}
};
</script>

<style scoped>
.home {
	/* border: 3px solid #f8f32b; */
	border-radius: 2rem;
	background: #8d99ae;
	padding: 3rem;
	width: 40%;
	margin: 0 auto;
}

p {
	color: #000000;
	margin: 2rem auto 0;
	width: 30rem;
}

button {
	margin: 2rem auto 0;
	padding: 0.7rem;
	background: #f8f32b;
	border: 0;
	border-radius: 1.5rem;
}

img {
	/* border: 2px solid black; */
	border-radius: 1rem;
	height: 25rem;
}

@media (max-width: 1100px) {
	.home {
		width: 80%;
	}

	img {
		height: 20rem;
	}

	p {
		width: 25rem;
	}
}

@media (max-width: 600px) {
	.home {
		width: 95%;
		padding: 1rem 0;
	}

	img {
		height: 12rem;
	}

	p {
		width: 18rem;
	}
}
</style>

// https://coolors.co/2b2d42-8d99ae-f8f32b-ffffff-000000