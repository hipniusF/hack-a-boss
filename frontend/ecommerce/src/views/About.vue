<template>
	<div class="about">
		<vue-headful title="About | Market" description="Home page of hackamarket" />

		<menucustom :logged="logged" v-on:logout="logout" />
		<h1>This is an about page</h1>
	</div>
</template>

<script>
import { isLoggedIn, logout } from '../api/auth';

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
</style>
