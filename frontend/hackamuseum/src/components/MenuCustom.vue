<template>
	<div>
		<div id="nav">
			<router-link :to="{name: 'Home'}">HOME</router-link>
			<router-link :to="{name: 'Contact'}">CONTACT</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MenuCustom'
};
</script>

<style scoped>
#nav {
	padding: 30px;
	text-align: right;
}

#nav a {
	font-weight: bold;
	color: white;
	padding: 0 2rem;
	text-decoration: none;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>