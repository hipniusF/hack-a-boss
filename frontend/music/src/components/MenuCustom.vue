<template>
	<div>
		<div id="nav">
			<router-link :to="{name: 'Home'}">Home</router-link>
			<router-link :to="{name: 'TopArtists'}">Artists</router-link>
			<router-link :to="{name: 'TopTracks'}">Tracks</router-link>
			<router-link :to="{name: 'About'}" class="about">About</router-link>
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
	padding: 30px 0;
	display: grid;

	grid-template-columns: repeat(4, 7rem);
	justify-content: center;
}

#nav a {
	font-weight: bold;
	color: white;

	font-size: 1.3rem;
	text-decoration: none;
	text-transform: uppercase;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

#nav a.about {
	text-decoration: none;
}

@media (max-width: 600px) {
	#nav {
		grid-template-columns: repeat(4, 5rem);
	}

	#nav a {
		font-size: 1rem;
		text-decoration: none;
		text-transform: uppercase;
	}
}
</style>
