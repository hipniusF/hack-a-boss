<template>
	<div class="logs">
		<h1>TURNS</h1>
		<p v-for="log in logs" key="log.id">{{ log.text }}</p>
	</div>
</template>

<script>
export default {
	name: 'Logs',
	props: {
		logs: Array
	}
};
</script>

<style scoped>
.logs {
	margin: 2rem auto;
	border: 2px solid #f8f32b;
	border-radius: 1rem;
	width: 35%;
}

p,
h1 {
	color: #f8f32b;
	padding: 0.5rem;
}

p {
	border: 1px solid #8d99ae;
	border-radius: 1rem;
	margin: 2rem;
}

@media (max-width: 600px) {
	.logs {
		width: 100%;
	}
}
</style>
