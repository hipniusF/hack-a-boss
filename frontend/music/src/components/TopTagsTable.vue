<template>
	<div class="tagsTable">
		<ul>
			<li v-for="tag in tags" :key="tag.id">
				<a :href="tag.url" target="_blank">
					<p>{{tag.name}}</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'TopTagsTable',
	props: {
		tags: Array
	}
};
</script>

<style scoped>
.tagsTable a {
	color: white;
	text-decoration: none;
}

.tagsTable ul {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	list-style: none;
}

.tagsTable ul li {
	margin: 3rem;
}
</style>