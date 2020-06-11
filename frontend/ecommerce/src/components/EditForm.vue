<template>
	<div>
		<h2>Add Client</h2>
		<button @click="closeForm()" class="close">X</button>
		<form v-on:submit.prevent>
			<label for="name">Name:</label>
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Type the name of the client"
				v-model="name"
				required
			/>

			<label for="surname">Surname:</label>
			<input
				type="text"
				name="surname"
				id="surname"
				placeholder="Type the surname of the client"
				v-model="surname"
				required
			/>

			<label for="city">City:</label>
			<input
				type="text"
				name="city"
				id="city"
				placeholder="Type the city of the client"
				v-model="city"
				required
			/>

			<label for="company">Company:</label>
			<input
				type="text"
				name="company"
				id="company"
				placeholder="Type the company of the client"
				v-model="company"
				required
			/>
			<button @click="editClient()">Sumbit</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'ClientsTable',
	props: {
		client: Object
	},
	data() {
		return {
			name: this.client.nombre,
			surname: this.client.apellido,
			city: this.client.ciudad,
			company: this.client.empresa
		};
	},
	methods: {
		editClient(client) {
			this.$emit('edit', {
				id: this.client.id,
				name: this.name,
				surname: this.surname,
				city: this.city,
				company: this.company
			});
		},
		closeForm() {
			this.$emit('closeForm');
		}
	}
};
</script>

<style scoped>
div {
	width: 20rem;
	padding: 2rem;
	margin: 3rem auto;
	background: #fefefe;
	border: 1px solid black;
	position: relative;
}

form input {
	width: 16rem;
	height: 2rem;
}

form label {
	margin-top: 1rem;
	display: block;
	text-align: start;
}
p {
	color: red;
	margin: 1rem 0;
}

button.close {
	position: absolute;
	top: 0px;
	right: 0px;
	cursor: pointer;
	border: 0;
	background: white;
	width: 1rem;
	font-size: 1rem;
	height: 1rem;
	margin: 1rem;
}

button {
	cursor: pointer;
	width: 10rem;
	height: 2rem;
	margin-top: 2rem;
}

button.required {
	margin: 0;
}
</style>