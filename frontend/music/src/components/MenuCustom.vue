<template>
	<div>
		<div id="nav">
			<router-link :to="{name: 'Home'}">Home</router-link>|
			<router-link :to="{name: 'TopArtists'}">Artists</router-link>|
			<router-link :to="{name: 'TopTracks'}">Tracks</router-link>|
			<router-link :to="{name: 'About'}">About</router-link>
		</div>
	</div>
</template>


<script>
export default {
	name: 'MenuCustom'
};
</script>

<style>
#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: white;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
