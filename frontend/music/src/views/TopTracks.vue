<template>
	<div class="tracks">
		<!-- Head data from the view -->
		<vue-headful title="Top Tracks | MusicF" description="Home page of hackamuseum" />

		<menucustom />

		<!-- Change pictures variable button -->
		<button @click="picturesShow()" :class="classButton">Show Pictures (slow)</button>

		<loadingcircle v-show="loading" class="loadingcircle" />

		<div class="tracksTable" v-show="!loading">
			<h3>Top tracks:</h3>

			<!-- Search menu -->
			<form>
				<fieldset class="defaultSearch" v-show="!advanceSearch">
					<label for="search">Search:</label>
					<input
						type="text"
						v-model="search.name"
						name="search"
						id="search"
						placeholder="Type search terms"
					/>
				</fieldset>

				<fieldset v-show="advanceSearch" class="advance">
					<fieldset>
						<label for="byId">Search by Artist:</label>
						<input type="text" name="byId" id="byId" v-model="search.artist" />
					</fieldset>

					<fieldset>
						<label for="byName">Search by Name:</label>
						<input type="text" name="byName" id="byName" v-model="search.name" />
					</fieldset>
				</fieldset>
				<button @click="advanceSearch = !advanceSearch">Advanced search</button>
			</form>

			<!-- Artist grid of items -->
			<ul>
				<li
					v-for="track in filteredTracks"
					:key="track.id"
					@click="showTrackInfo(track.artist.name, track.name)"
				>
					<trackstable :track="track" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import api from '@/api/index.js';
import Swal from 'sweetalert2';
import Vue from 'vue';

import trackstable from '@/components/TopTracksTable.vue';
import menucustom from '@/components/MenuCustom.vue';
import loadingcircle from '@/components/LoadingCircle.vue';
import trackcard from '@/components/TrackCard.vue';

export default {
	name: 'Home',
	components: {
		trackstable,
		menucustom,
		loadingcircle
	},
	data() {
		return {
			tracks: [],
			loading: true,
			search: {
				artist: '',
				name: ''
			},
			advanceSearch: false
		};
	},

	async mounted() {
		// Create pictures variable if it does not exist
		if (!localStorage.pictures) {
			localStorage.pictures = false;
		}

		// Get the tracks from the api adding the imaging only if the pictures variable is set to true
		this.tracks = await api.getTracks(localStorage.pictures);
		console.log(this.tracks);
		this.loading = false;
	},

	computed: {
		// This computed variable makes the button change class depending on the pictures variable
		classButton() {
			if (localStorage.pictures === 'true') {
				return 'active';
			} else {
				return 'deactive';
			}
		},

		// Function for filtering tracks
		filteredTracks() {
			let searchResult = this.tracks;

			if (this.search.name) {
				searchResult = searchResult.filter((track) =>
					track.name.toLowerCase().includes(this.search.name.toLowerCase())
				);
			}
			console.log(this.search.artist);
			if (this.search.artist) {
				searchResult = searchResult.filter((track) =>
					track.artist.name.toLowerCase().includes(this.search.artist.toLowerCase())
				);
			}

			return searchResult;
		}
	},

	methods: {
		// Retrun the extra info of a specific track
		async showTrackInfo(artist, name) {
			const info = await api.getTrackInfo(artist, name);

			console.log(info);

			this.componentSwal(trackcard, { track: info });
		},

		// Changes mode of showing images of the albums and reloads
		picturesShow() {
			localStorage.pictures = localStorage.pictures === 'true' ? 'false' : 'true';
			this.$router.go();
		},

		//Function for creating swal alerts with a Vue component as content
		componentSwal(component, propsObject) {
			Swal.fire({
				html: '<div id="VueSweetAlert2"></div>',
				width: 800,
				onBeforeOpen: () => {
					let ComponentClass = Vue.extend(component);
					let instance = new ComponentClass({
						propsData: propsObject
					});
					instance.$mount();
					document.getElementById('VueSweetAlert2').appendChild(instance.$el);
				}
			});
		}
	}
};
</script>

<style scoped>
.tracks {
	min-height: 100vh;
	width: 100%;
	margin: 0 auto;

	display: grid;
}

/* <Tracks styles> */
h3 {
	margin-top: 3rem;
	color: white;
	font-size: 2rem;
	text-align: center;
	text-decoration: underline;
}

.tracksTable {
	width: 80%;
	margin: 0 auto;
}

.tracksTable ul {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	list-style: none;
}

.tracksTable ul li {
	margin: 2rem 0rem;
	cursor: pointer;
}
/* </Tracks styles> */

/* <button styles> */
button {
	width: 10rem;
	height: 3em;
	border: 0;
	border-radius: 5rem;
	background: white;
	margin: 0 auto;
	cursor: pointer;
}

button.active {
	background: green;
}

button.active::before {
	content: '✔ - ';
}

button.deactive::before {
	content: 'X - ';
}
/* </button styles> */

/* <form styles> */
form {
	display: grid;
}

form fieldset.defaultSearch {
	display: grid;
	grid-template-columns: 1fr;
	width: 15rem;
	margin: 2rem auto 1rem;
	border: 0;
}

form fieldset.advance {
	width: 44rem;
	margin: 2rem auto 1rem;
	display: flex;
	padding: 0.5rem 10rem;
}

form fieldset fieldset {
	border: 0;
	text-align: right;
}

form input,
form select {
	width: 15rem;
	height: 2rem;
}

form label {
	color: white;
}

@media (max-width: 600px) {
	form fieldset.advance {
		width: 10rem;
		margin: 2rem auto 1rem;
		display: flex;
		padding: 0.5rem 1rem;
	}
}

/* </form styles> */
</style>