<template>
	<div id="app">
		<div id="nav">
			<router-link :to="{ name: 'Home' }">Start screen</router-link>|
			<router-link :to="{ name: 'About' }">About</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

html {
	background: #2b2d42;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	min-height: 100vh;
	background: #2b2d42;
}

#nav {
	padding: 30px;
	color: white;
}

#nav a {
	font-weight: bold;
	color: white;
	padding-right: 7px;
}

#nav a.router-link-exact-active::before {
	content: '➡ ';
}

#nav a.router-link-exact-active {
	color: #42b983;
}

#nav a.router-link-exact-active::after {
	content: ' ⬅';
}

button {
	cursor: pointer;
}

button:focus {
	outline: none;
}

button:hover {
	transform: translatey(5px);
}
</style>
