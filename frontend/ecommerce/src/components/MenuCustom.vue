<template>
	<div class="menu">
		<!-- Botton for toogle menu (only available on mobile) -->
		<button v-show="isMobile()" @click="menu = !menu" :class="{displayed: menu}">
			<div></div>
			<div></div>
			<div></div>
		</button>

		<div id="nav" v-show="menu">
			<!-- <Pages navigation> -->
			<router-link :to="{name: 'Products'}">Products</router-link>
			<router-link :to="{name: 'Clients'}">Clients</router-link>
			<router-link :to="{name: 'AddClient'}">Add Client</router-link>
			<router-link :to="{name: 'About'}">About</router-link>
			<!-- </Pages navigation> -->

			<!-- <Auth navigation> -->
			<div class="auth" v-show="!logged">
				<router-link :to="{name: 'Register'}">Register</router-link>
				<router-link :to="{name: 'Login'}">Login</router-link>
			</div>

			<div class="auth" v-show="logged">
				<a @click="logout()">Logout</a>
			</div>
			<!-- </Auth navigation> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'MenuCustom',
	data() {
		return {
			menu: !this.isMobile()
		};
	},
	props: {
		logged: Boolean
	},
	methods: {
		logout() {
			this.$emit('logout');
		},

		// Function checking if on mobile
		isMobile() {
			return screen.width < 700;
		}
	}
};
</script>

<style scoped>
.menu {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	left: 0;
	bottom: 0;
}

#nav {
	padding: 30px;
	margin-bottom: 2rem;
	background: #2c3e50;
}

#nav a {
	font-weight: bold;
	color: white;
	text-transform: uppercase;
	padding-left: 1rem;
	text-decoration: none;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

.auth {
	position: absolute;
	top: 2rem;
	right: 5rem;
}

#nav .auth a {
	text-decoration: none;
	padding: 1rem;
	cursor: pointer;
}

@media (max-width: 600px) {
	#nav {
		width: 70%;
		min-height: 100vh;
		margin: 0;

		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
	}

	.auth {
		position: unset;
		align-self: flex-end;
	}

	button {
		border: 0;
		padding: 2px;
		margin-right: 0rem;
		background: white;
		position: absolute;
		left: 0;
	}

	button:focus {
		outline: none;
	}

	button.displayed {
		background: #2c3e50;
	}

	button.displayed div {
		background: white;
	}

	button div {
		width: 35px;
		height: 5px;
		background-color: #2c3e50;
		margin: 6px 0;
	}
}
</style>