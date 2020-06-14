<template>
	<div>
		<button class="mode" @click="displayTable()">
			<div></div>
			<div></div>
			<div></div>
		</button>
		<ul>
			<li v-for="client in clients" :key="client.id">
				<header>
					<button @click="editClient(client)" class="edit">
						<img src="@/assets/edit.png" alt="Edit" />
					</button>

					<h2>{{client.id}}</h2>

					<button @click="deleteClient(client.id)" class="delete">X</button>
				</header>

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
		},
		displayTable() {
			this.$emit('table');
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

ul {
	list-style: none;
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
}

header {
	display: flex;
	justify-content: space-between;
	justify-items: ;
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

button img {
	width: 1.7rem;
}

/* <Button for display mode styles> */
button.mode {
	margin-left: auto;
	top: 0;
	right: 0;
	padding: 5px 10px;
}

button.mode:hover {
	border-radius: 2rem;
	padding: 5px 10px;
	background: rgba(212, 203, 203, 0.2);
}

button.mode div {
	width: 25px;
	height: 3px;
	background-color: #2c3e50;
	margin: 4px 0;
}
/* </Button for display mode styles> */
</style>