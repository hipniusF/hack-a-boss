<template>
	<div>
		<ul>
			<li v-for="task in tasks" :key="task.id">
				<div class="show" v-show="!editing">
					{{task.text}}
					<button @click="editTaskEvent(task)">Edit</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'TasksTable',
	props: {
		tasks: Array,
		editing: Boolean
	},
	methods: {
		editTaskEvent(task) {
			this.$emit('edit', task);
		}
	}
};
</script>

<style scoped>
</style>