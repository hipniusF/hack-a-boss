<template>
	<div>
		<ul>
			<li v-for="task in tasks" :key="task.id">
				<div class="show" v-show="!editing">
					{{task.text}}
					<button @click="editTaskEvent(task)">Edit</button>
					<button @click="delTaskEvent(task.id)">✗</button>
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
		},
		delTaskEvent(id) {
			this.$emit('remove', id);
		}
	}
};
</script>

<style scoped>
</style>