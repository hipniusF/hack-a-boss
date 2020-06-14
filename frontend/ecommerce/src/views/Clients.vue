<template>
	<div>
		<vue-headful title="Clients | Market" description="Home page of hackamarket" />

		<menucustom :logged="logged" v-on:logout="logout" />

		<loadingspinner v-show="loading" class="spinner" />

		<h1 v-show="!loading">Clients:</h1>

		<form v-on:submit.prevent>
			<label for="searchById">Search client:</label>
			<input
				v-model="search"
				type="text"
				name="searchById"
				id="searchById"
				placeholder="Type the id of the client"
			/>
		</form>

		<clientstable
			v-show="!loading && mode === 'table'"
			:clients="filteredClient"
			v-on:delete="deleteClient"
			v-on:edit="editClientForm"
			v-on:list="changeMode"
		/>

		<clientslist
			v-show="!loading  && mode === 'list'"
			:clients="filteredClient"
			v-on:delete="deleteClient"
			v-on:edit="editClientForm"
			v-on:table="changeMode"
		/>

		<!-- v-if for assuring that when the form loads the props are ready  -->
		<div class="edit" v-if="edit">
			<editform :client="clientToEdit" v-on:edit="editClientRequest" v-on:closeForm="closeForm" />
		</div>
	</div>
</template>

<script>
// Modules
import axios from 'axios';
import Swal from 'sweetalert2';

// Auth functions
import { isLoggedIn, logout } from '../api/auth';

// Components
import clientslist from '@/components/ClientsList.vue';
import clientstable from '@/components/ClientsTable.vue';
import menucustom from '@/components/MenuCustom.vue';
import editform from '@/components/EditForm.vue';
import loadingspinner from '@/components/LoadingSpinner.vue';

export default {
	name: 'Clients',
	components: {
		clientstable,
		clientslist,
		menucustom,
		editform,
		loadingspinner
	},
	data() {
		return {
			clients: [],
			clientToEdit: {
				nombre: '',
				apellido: '',
				ciudad: '',
				empresa: ''
			},
			logged: false,
			edit: false,
			loading: true,
			mode: 'list',
			search: null
		};
	},
	computed: {
		// Function for filtering clients
		filteredClient() {
			let searchResult = this.clients;

			if (this.search) {
				searchResult = searchResult.filter((client) => client.id == this.search);
			}
			return searchResult;
		}
	},
	methods: {
		//
		// Delete Client Logic
		async deleteClient(id) {
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
						await axios.delete(`http://127.0.0.1:3050/client/${id}`);
						location.reload();
					}
				});
			} catch (error) {
				console.log(error);
			}
		},
		//
		// Edit Client event handler
		async editClientForm(client) {
			this.clientToEdit = client;
			this.edit = true;
		},
		//
		// Edit Client Logic
		async editClientRequest(client) {
			if (this.validateClient(client)) {
				await axios.put(`http://127.0.0.1:3050/client/${client.id}`, {
					name: client.name,
					surname: client.surname,
					city: client.city,
					company: client.company
				});

				await Swal.fire({
					icon: 'success',
					title: 'Client edited succesfully',
					showConfirmButton: false,
					timer: 2000
				});
				this.edit = false;
				location.reload();
			}
		},
		//
		// Validate Client for logic
		validateClient(client) {
			if (!client.name || !client.surname || !client.city || !client.company) {
				return false;
			} else {
				return true;
			}
		},
		//
		// Close edit form function
		closeForm() {
			this.edit = false;
		},
		//
		// Logout function
		async logout() {
			await logout();
			location.reload();
		},
		//
		// Change display mode (alternate between list and table mode)
		changeMode() {
			if (this.mode === 'list') {
				this.mode = 'table';
			} else if (this.mode === 'table') {
				this.mode = 'list';
			}
		}
	},
	async created() {
		this.logged = await isLoggedIn();
		this.clients = (await axios.get('http://127.0.0.1:3050/clients')).data;
		console.log(this.clients);
		this.loading = false;
	}
};
</script>

<style scoped>
/* <search syles> */
form fieldset {
	display: grid;
	grid-template-columns: 1fr;
	width: 15rem;
	margin: 2rem auto 1rem;
	border: 0;
}

form fieldset fieldset {
	border: 0;
	text-align: right;
}

form input,
form select {
	margin: 0 auto;
	display: block;
	width: 15rem;
	height: 2rem;
}
/* </search syles> */

.spinner {
	position: absolute;
	top: 50%;
}

h1 {
	margin: 0 auto 2rem;
	padding-top: 2rem;
	width: 60%;
	text-align: left;
}

/* <Edit form styles> */
.edit {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	min-height: 100vh;
}

editform {
	margin: 30% auto;
	padding: 20px;
	border: 1px solid #888;
}
/* </Edit form styles> */
</style>