<template>
	<div>
		<button class="mode" @click="displayList()">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</button>
		<table>
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Surname</th>
				<th>City</th>
				<th>Company</th>
				<th>Edit</th>
				<th>Delete</th>
			</tr>
			<tr v-for="client in clients" :key="client.id">
				<td>{{client.id}}</td>
				<td>{{client.nombre}}</td>
				<td>{{client.apellido}}</td>
				<td>{{client.ciudad}}</td>
				<td>{{client.empresa}}</td>
				<td>
					<button @click="editClient(client)" class="edit">
						<img src="@/assets/edit.png" alt="Edit" />
					</button>
				</td>

				<td>
					<button @click="deleteClient(client.id)" class="delete">X</button>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: 'ClientsTable',
	props: {
		clients: Array
	},
	methods: {
		deleteClient(id) {
			this.$emit('delete', id);
		},
		editClient(client) {
			this.$emit('edit', client);
		},
		displayList() {
			this.$emit('list');
		}
	}
};
</script>

<style scoped>
div {
	display: grid;
	width: 80%;
	margin: 0 auto;
}

table {
	list-style: none;
	width: 50rem;
	margin: 0 auto;
	border-collapse: collapse;
}

th {
	border-bottom: 1px solid black;
}

tr:not(:first-child) {
	height: 4rem;
	border-top: 1px solid black;
}

button {
	cursor: pointer;
	border: 0;
	background: white;
}

button img {
	width: 1.7rem;
}

/* <Button for display mode styles> */
button.mode {
	margin-left: auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 5px;
	padding: 5px 10px;
}

button.mode:hover {
	border-radius: 2rem;
	padding: 5px 10px;
	background: rgba(212, 203, 203, 0.2);
}

button.mode div {
	width: 5px;
	height: 5px;
	background-color: #2c3e50;
}
/* </Button for display mode styles> */

@media (max-width: 600px) {
	div {
		position: unset;
	}
}
</style>