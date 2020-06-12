<template>
	<div>
		<vue-headful title="Register | Market" description="Home page of hackamarket" />

		<h2>Registration</h2>
		<form v-on:submit.prevent>
			<label for="email">Email:</label>
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Enter your email"
				v-model="email"
				required
			/>

			<label for="password">Password:</label>
			<input
				type="password"
				name="password"
				id="password"
				placeholder="Enter your password"
				v-model="password"
				required
			/>
			<button @click="registrate()">Sumbit</button>
		</form>
		<router-link :to="{name:'Login'}">Already registered?</router-link>
	</div>
</template>

<script>
import { registrate, login } from '../api/auth';

export default {
	name: 'Login',
	data() {
		return {
			email: '',
			password: ''
		};
	},
	methods: {
		async registrate() {
			await registrate(this.email, this.password);
			await login(this.email, this.password);
			this.$router.push({ name: 'Products' });
		}
	}
};
</script>

<style scoped>
div {
	margin-top: 3rem;
}

form {
	width: 20rem;
	padding: 2rem;
	margin: 1rem auto;
	border: 1px solid black;
}

form input {
	width: 16rem;
	height: 2rem;
}

form label {
	margin-top: 1rem;
	display: block;
	text-align: start;
}
p {
	color: red;
	margin: 1rem 0;
}

button {
	width: 10rem;
	height: 2rem;
	margin-top: 2rem;
}
button.required {
	margin: 0;
}
</style>