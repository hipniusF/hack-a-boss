<template>
	<div class="home">
		<vue-headful title="Home | MusicF" description="Home page of hackamuseum" />

		<menucustom />
		<loadingcircle v-show="loading" class="loadingcircle" />
		<h1>MusicF</h1>
		<h2>Music center</h2>

		<div class="tagsTable" v-show="!loading">
			<h3>Music tags:</h3>

			<!-- Search menu -->
			<form>
				<fieldset class="defaultSearch">
					<label for="search">Search:</label>
					<input type="text" v-model="search" name="search" id="search" placeholder="Type tag's name" />
				</fieldset>
			</form>

			<!-- Tag grid of items -->
			<ul>
				<li v-for="tag in filteredTags" :key="tag.id" @click="showTagInfo(tag.name)">
					<tagstable :tag="tag" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import api from '@/api/index.js';
import Swal from 'sweetalert2';
import Vue from 'vue';

import tagstable from '@/components/TopTagsTable.vue';
import menucustom from '@/components/MenuCustom.vue';
import loadingcircle from '@/components/LoadingCircle.vue';
import tagcard from '@/components/TagCard.vue';

export default {
	name: 'Home',
	components: {
		tagstable,
		menucustom,
		loadingcircle
	},
	data() {
		return {
			tags: [],
			loading: true,
			search: ''
		};
	},
	async mounted() {
		// Petition to the api to get the tags data with log of the raw data to the console
		this.tags = await api.getTags();
		console.log(this.tags);
		this.loading = false;
	},
	computed: {
		// Function for filtering tags
		filteredTags() {
			let searchResult = this.tags;

			if (this.search) {
				searchResult = searchResult.filter((tag) => tag.name.toLowerCase().includes(this.search.toLowerCase()));
			}
			return searchResult;
		}
	},

	methods: {
		// Returns the extra information of a specific artist using its mbid
		async showTagInfo(name) {
			const info = await api.getTagInfo(name);

			console.log(info);

			this.componentSwal(tagcard, { tag: info });
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
.home {
	min-height: 100vh;
}

h1 {
	color: white;
	font-size: 3rem;
	text-decoration: underline;
	margin: 0 0 1rem 0;
}

h2 {
	color: white;
	font-size: 2rem;
}

/* </GENERAL STYLES> */

/* <Tags styles> */

h3 {
	color: white;
	font-size: 2rem;
	/* text-align: left; */
	margin: 4rem 0 2rem;
	text-decoration: underline;
}

.tagsTable {
	width: 80%;
	margin: 0 auto;
}

.tagsTable ul {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	list-style: none;
}
/* </Tags styles> */

.tagsTable ul li {
	margin: 1rem 2rem;
	cursor: pointer;
}

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