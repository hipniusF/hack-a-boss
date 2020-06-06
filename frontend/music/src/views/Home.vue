<template>
	<div class="home">
		<vue-headful title="Home | MusicF" description="Home page of hackamuseum" />

		<menucustom />
		<loadingcircle v-show="loading" class="loadingcircle" />

		<div class="tagsTable">
			<ul>
				<li v-for="tag in tags" :key="tag.id" @click="showTagInfo(tag.name)">
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
			loading: true
		};
	},
	async mounted() {
		// Petition to the api to get the tags data with log of the raw data to the console
		this.tags = await api.getTags();
		console.log(this.tags);
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
.home {
	min-height: 100vh;
}

.artisttagsTablesTable a {
	color: white;
	text-decoration: none;
}

.tagsTable ul {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	list-style: none;
}

.tagsTable ul li {
	margin: 3em 2rem;
	cursor: pointer;
}
</style>