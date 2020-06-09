<template>
	<div class="todo">
		<vue-headful title="Home | ToDo" description="Home page of hackamuseum" />

		<h1>Hola</h1>
		<h2>Add todo</h2>

		<!-- Add todo form -->
		<form v-on:submit.prevent>
			<label for="text">Content of the new task</label>
			<br />
			<textarea name="text" id="text" cols="40" rows="5" v-model="text" required></textarea>
			<br />
			<button @click="addTask()">Add task</button>
		</form>

		<br />
		<h2>Tasks:</h2>

		<!-- Update form -->
		<form v-on:submit.prevent>
			<label for="newText">Enter your new text</label>
			<br />
			<input type="text" name="newText" id="newText" v-model="newText" />
			<button @click="editTask()">Update</button>
		</form>

		<!-- Taks Table -->
		<tasks :tasks="tasks" v-on:edit="showEditText" v-on:remove="removeTask" />

		<!-- Search task -->
		<form v-on:submit.prevent>
			<label for="search">Content of the new task</label>
			<br />
			<input type="text" name="search" id="search" v-model="search" required />
			<br />
			<button @click="searchTask()">Search</button>
		</form>
	</div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';
import tasks from '@/components/TasksTable.vue';

export default {
	name: 'Todo',
	data() {
		return {
			text: '',
			tasks: [],
			newText: '',
			id: null,
			search: ''
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
					await axios.post('http://127.0.0.1:3050/todo/new', {
						text: this.text
					});

					Swal.fire({
						title: 'Successful',
						text: 'Task added successfuly'
					}).then(() => location.reload());
				}
			} catch (error) {
				console.log(error);
			}
		},
		// Get task
		async getTasks() {
			try {
				const response = await axios.get('http://127.0.0.1:3050/todo');
				this.tasks = response.data;
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		},
		showEditText(data) {
			this.newText = data.text;
			this.id = data.id;
		},
		async editTask(event) {
			try {
				const response = await axios.put(`http://127.0.0.1:3050/todo/update/${this.id}`, {
					text: this.newText
				});

				console.log(response);
				Swal.fire({
					title: 'Successful',
					text: 'Task edited successfuly'
				}).then(() => location.reload());
			} catch (error) {
				console.log(error);
			}
		},
		async removeTask(id) {
			try {
				Swal.fire({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, delete it!'
				}).then(async (result) => {
					if (result.value) {
						const response = await axios.delete(`http://127.0.0.1:3050/todo/del/${id}`);

						console.log(response);
						location.reload();
					}
				});
			} catch (error) {
				console.log(error);
			}
		},
		async searchTask() {
			try {
				const response = await axios.get('http://127.0.0.1:3050/todo/' + Number(this.search));
				console.log(response, Number(this.search));
				Swal.fire({
					title: `This is the task with id ${this.search}`,
					text: response.data[0].text
				}).then(() => location.reload());
			} catch (error) {
				console.log(error);
			}
		}
	},
	created() {
		this.getTasks();
	}
};
</script>
