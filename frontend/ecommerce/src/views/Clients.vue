<template>
	<div>
		<vue-headful title="Clients | Market" description="Home page of hackamarket" />

		<menucustom />
		<clientstable :clients="clients" v-on:delete="deleteClient" v-on:edit="editClientForm" />

		<!-- v-if for assuring that when the form loads the props are reeady  -->
		<div class="edit" v-if="edit">
			<editform :client="clientToEdit" v-on:edit="editClientRequest" v-on:closeForm="closeForm" />
		</div>
	</div>
</template>

<script>
// Modules
import axios from 'axios';
import Swal from 'sweetalert2';

// Components
import clientstable from '@/components/ClientsTable.vue';
import menucustom from '@/components/MenuCustom.vue';
import editform from '@/components/EditForm.vue';

export default {
	name: 'Clients',
	components: {
		clientstable,
		menucustom,
		editform
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
			edit: false
		};
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
		}
	},
	async created() {
		this.clients = (await axios.get('http://127.0.0.1:3050/clients')).data;
		console.log(this.clients);
	}
};
</script>

<style scoped>
.edit {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
}
editform {
	margin: 30% auto;
	padding: 20px;
	border: 1px solid #888;
}
</style>