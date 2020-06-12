<template>
	<div>
		<vue-headful title="Add Client | Market" description="Home page of hackamarket" />

		<menucustom :logged="logged" v-on:logout="logout" />

		<h2>Add Client</h2>
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
			<button @click="addClient()">Sumbit</button>
		</form>
	</div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

import { isLoggedIn, logout } from '../api/auth';

import menucustom from '@/components/MenuCustom.vue';

export default {
	name: 'AddClient',
	components: {
		menucustom
	},
	data() {
		return {
			name: '',
			surname: '',
			city: '',
			company: '',
			logged: false
		};
	},
	methods: {
		async addClient() {
			try {
				if (this.validateForm()) {
					await axios.post(`http://127.0.0.1:3050/clients`, {
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
		},
		validateForm() {
			if (!this.name || !this.surname || !this.city || !this.company) {
				return false;
			} else {
				return true;
			}
		},
		async logout() {
			await logout();
			location.reload();
		}
	},
	async created() {
		this.logged = await isLoggedIn();
	}
};
</script>

<style scoped>
div {
	margin-top: 1rem;
}

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