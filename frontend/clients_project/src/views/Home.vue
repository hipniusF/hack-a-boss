<template>
	<div class="home">
		<vue-headful title="Home | Clients" description="Home page of hackamuseum" />

		<h1>Clients List:</h1>
		<ul>
			<li class="client" v-for="client in clients" :key="client.id">
				<button @click="deleteClient(client.id)">X</button>

				<p>ID: {{client.id}}</p>
				<p>Name: {{client.name}}</p>
				<p>Surname: {{client.surname}}</p>
				<p>City: {{client.city}}</p>
				<p>Company: {{client.company}}</p>

				<button @click="modal=true">Edit</button>
			</li>
		</ul>

		<!-- EDIT CLIENTS MODAL -->
		<div class="modal" v-show="modal">
			<div class="modalBox">
				<h2>Edit data modal (test)</h2>
				<input type="text" placeholder="Enter your new data" />
				<br />
				<br />
				<br />
				<button @click="modal=false">Close</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { isLoggedIn } from '../api/utils.js';

export default {
	name: 'Home',
	data() {
		return {
			clients: [],
			modal: false
		};
	},
	methods: {
		async getClients() {
			try {
				this.clients = (await axios.get(`http://127.0.0.1:3050/clients`)).data;
			} catch (error) {
				console.log(error);
			}
		},
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
						await axios.delete(`http://127.0.0.1:3050/clients/del/${id}`);

						location.reload();
					}
				});
			} catch (error) {
				console.log(error);
			}
		}
	},
	created() {
		this.getClients();
	}
};
</script>
<style scoped>
ul {
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	flex-wrap: wrap;
	width: 80%;
	margin: 0 auto;
}

li {
	margin: 1rem;
	border: 1px solid black;
	border-radius: 1rem;
	padding: 2rem 1rem;
	text-align: start;

	position: relative;
}

p {
	margin: 0.4rem;
}

p:first-child {
	border-bottom: 1px solid black;
	font-weight: bold;
}

button:first-child {
	position: absolute;
	top: 10px;
	right: 10px;
	border: 0;
	background: white;
	cursor: pointer;
}

.modal {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
}
.modalBox {
	background: #fefefe;
	width: 30%;
	margin: 15% auto;
	padding: 20px;
	border: 1px solid #888;
}
</style>