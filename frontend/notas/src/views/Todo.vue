<template>
	<div class="todo">
		<h1>Hola</h1>
		<h2>Add todo</h2>

		<!-- Add todo form -->
		<form>
			<label for="text">Content of the new task</label>
			<br />
			<textarea name="text" id="text" cols="40" rows="5" v-model="text" required></textarea>
			<br />
			<button @click="addTask()">Add task</button>
		</form>

		<br />
		<h2>Tasks:</h2>

		<!-- Update form -->
		<form>
			<label for="newText">Enter your new text</label>
			<br />
			<input type="text" name="newText" id="newText" v-model="newText" />
			<button @click="editTask()">Update</button>
		</form>

		<!-- Taks Table -->
		<tasks :tasks="tasks" v-on:edit="showEditText" />
	</div>
</template>

<script>
import axios from 'axios';
import tasks from '@/components/TasksTable.vue';

export default {
	name: 'Todo',
	data() {
		return {
			text: '',
			tasks: [],
			newText: '',
			id: null
		};
	},
	components: {
		tasks
	},
	methods: {
		// Add new task
		async addTask() {
			try {
				if (this.text) {
					let self = this;
					await axios.post('http://127.0.0.1:3050/todo/new', {
						text: self.text
					});
				}
			} catch (error) {
				console.log(error);
			}
		},
		// Get task
		async getTasks() {
			try {
				let self = this;
				const response = await axios.get('http://127.0.0.1:3050/todo');
				self.tasks = response.data;
			} catch (error) {
				console.log(error);
			}
		},
		showEditText(data) {
			this.newText = data.text;
			this.id = data.id;
		}
	},
	created() {
		this.getTasks();
	}
};
</script>
