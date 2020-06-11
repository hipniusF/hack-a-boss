<template>
	<div>
		<ul>
			<li v-for="client in clients" :key="client.id">
				<h2>{{client.id}}</h2>

				<button @click="editClient(client)" class="edit">
					<img src="@/assets/edit.png" alt="Edit" />
				</button>

				<button @click="deleteClient(client.id)" class="delete">X</button>

				<p>Name: {{client.nombre}}</p>
				<p>Surname: {{client.apellido}}</p>
				<p>City: {{client.ciudad}}</p>
				<p>Company: {{client.empresa}}</p>
			</li>
		</ul>
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
		}
	}
};
</script>

<style scoped>
ul {
	list-style: none;
	width: 80%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}

li {
	margin: 1rem;
	padding: 1rem 1.5rem;
	border: 2px solid black;
	border-radius: 2rem;
	position: relative;
}

h2 {
	border-bottom: 1px solid black;
}

p {
	margin: 0.5rem 1rem;
}

button {
	cursor: pointer;
	border: 0;
	background: white;
}
button.delete {
	position: absolute;
	top: 15px;
	right: 15px;
}

button.edit {
	position: absolute;
	top: 10px;
	left: 15px;
}

button img {
	width: 1.7rem;
}
</style>