<template>
	<div class="artists">
		<!-- Head data from the view -->
		<vue-headful title="Top Artists | MusicF" description="Home page of hackamuseum" />

		<menucustom />
		<loadingcircle v-show="loading" />

		<div class="artistsTable" v-show="!loading">
			<h3>Top artists:</h3>

			<!-- Search menu -->
			<form>
				<fieldset class="defaultSearch">
					<label for="search">Search:</label>
					<input type="text" v-model="search" name="search" id="search" placeholder="Type artist's name" />
				</fieldset>
			</form>

			<!-- Artist grid of items -->
			<ul>
				<li v-for="artist in filteredArtist" :key="artist.id" @click="showArtistInfo(artist.mbid)">
					<artiststable :artist="artist" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import api from '@/api/index.js';
import Swal from 'sweetalert2';
import Vue from 'vue';

import artiststable from '@/components/TopArtistsTable.vue';
import menucustom from '@/components/MenuCustom.vue';
import loadingcircle from '@/components/LoadingCircle.vue';
import artistcard from '@/components/ArtistCard.vue';

export default {
	name: 'Home',
	components: {
		artiststable,
		menucustom,
		loadingcircle,
		artistcard
	},
	data() {
		return {
			artists: [],
			loading: true,
			search: ''
		};
	},

	async mounted() {
		// Petition to the api to get the artist data with log of the raw data to the console
		this.artists = await api.getArtists();

		console.log(this.artists);

		this.loading = false;
	},
	computed: {
		// Function for filtering artists
		filteredArtist() {
			let searchResult = this.artists;

			if (this.search) {
				searchResult = searchResult.filter((artist) => artist.name.toLowerCase().includes(this.search.toLowerCase()));
			}
			return searchResult;
		}
	},
	methods: {
		// Returns the extra information of a specific artist using its mbid
		async showArtistInfo(mbid) {
			const info = await api.getArtistInfo(mbid);

			console.log(info);

			this.componentSwal(artistcard, { artist: info });
		},

		//Function for creating swal alerts with a Vue component as content
		componentSwal(component, propsObject) {
			Swal.fire({
				html: '<div id="VueSweetAlert2"></div>',
				width: 1000,
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
/* <GENERAL STYLES> */
.artists {
	min-height: 100vh;
}

/* </GENERAL STYLES> */

/* <Artists styles> */
h3 {
	color: white;
	font-size: 2rem;
	text-align: center;
	text-decoration: underline;
}

.artistsTable {
	width: 80%;
	margin: 0 auto;
}

.artistsTable ul {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	list-style: none;
}

.artistsTable ul li {
	margin: 2rem 0rem;
	cursor: pointer;
}
/* </Artists styles> */

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
	width: 15rem;
	height: 2rem;
}

form label {
	color: white;
}
/* </search syles> */
</style>