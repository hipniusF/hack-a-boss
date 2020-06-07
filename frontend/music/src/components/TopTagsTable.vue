<template>
	<div>
		<h1>{{tag.name}}</h1>
	</div>
</template>

<script>
export default {
	name: 'TopTagsTable',
	props: {
		tag: Object
	}
};
</script>

<style scoped>
img {
	border-radius: 100%;
	margin: auto;
}

h1 {
	color: white;
	margin: 1rem auto;
	font-size: 1.5rem;
}
</style>