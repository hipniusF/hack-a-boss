<template>
	<div class="home">
		<vue-headful title="Home | MusicF" description="Home page of hackamuseum" />

		<menucustom />
		<loadingcircle v-show="loading" class="loadingcircle" />
		<tagstable :tags="tags" />
	</div>
</template>

<script>
import api from '@/api/index.js';
import tagstable from '@/components/TopTagsTable.vue';
import menucustom from '@/components/MenuCustom.vue';
import loadingcircle from '@/components/LoadingCircle.vue';

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
		this.tags = await api.getTags();
		console.log(this.tags);
		this.loading = false;
	}
};
</script>

<style scoped>
.home {
	min-height: 100vh;
}
.loadingcircle {
	margin-top: 30vh;
}
</style>