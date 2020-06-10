<template>
	<div>
		<h1>Login to your account:</h1>
		<input type="text" placeholder="Write your username" v-model="user" />

		<input type="password" placeholder="Write your password" v-model="password" />

		<button @click="login()">Login</button>
	</div>
</template>

<script>
import { login } from '../api/utils.js';

export default {
	name: 'Login',
	data() {
		return {
			user: '',
			password: ''
		};
	},
	methods: {
		async login() {
			try {
				await login(this.user, this.password);
				this.$router.push({ name: 'Home' });
			} catch (error) {
				console.log(error);
			}
		}
	}
};
</script>

<style scoped>
</style>