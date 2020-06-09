<template>
	<div>
		<vue-headful title="Add | Clients" description="Home page of hackamuseum" />

		<form v-on:submit.prevent>
			<label for="name">Name:</label>
			<input type="text" name="name" id="name" placeholder="Client name" v-model="name" />

			<br />

			<label for="surname">Surname:</label>
			<input type="text" name="surname" id="surname" placeholder="Client surname" v-model="surname" />

			<br />

			<label for="city">City:</label>
			<input type="text" name="city" id="city" placeholder="Client city" v-model="city" />

			<br />

			<label for="company">Company:</label>
			<input type="text" name="company" id="company" placeholder="Client company" v-model="company" />

			<br />

			<p v-show="required">The user data must be filled</p>
			<button @click="addClient()" :class="{required: required}">Add</button>
		</form>
	</div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
	name: 'AddClient',
	data() {
		return {
			name: '',
			surname: '',
			city: '',
			company: '',
			required: false
		};
	},
	methods: {
		validatingData() {
			if (!(this.name && this.surname && this.city && this.company)) {
				this.required = true;
			} else {
				this.required = false;
				return true;
			}
		},
		async addClient() {
			try {
				const validData = this.validatingData();
				if (this.validatingData()) {
					const response = await axios.post('http://127.0.0.1:3050/clients/add', {
						name: this.name,
						surname: this.surname,
						city: this.city,
						company: this.company
					});

					Swal.fire({
						icon: 'success',
						title: 'Client added succesfully',
						showConfirmButton: false,
						timer: 2000
					});

					this.emptyFields();
				}
			} catch (error) {
				console.log(error);
			}
		},
		emptyFields() {
			this.name = '';
			this.surname = '';
			this.city = '';
			this.company = '';
		}
	}
};
</script>

<style scoped>
form {
	width: 20rem;
	padding: 2rem;
	margin: 0 auto;
	border: 1px solid black;
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

button {
	width: 10rem;
	height: 2rem;
	margin-top: 2rem;
}
button.required {
	margin: 0;
}
</style>