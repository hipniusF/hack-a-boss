<template>
	<div class="about">
		<vue-headful title="About | MusicF" description="Home page of hackamuseum" />

		<menucustom />
		<h1>This is an about page</h1>
	</div>
</template>

<script>
import menucustom from '@/components/MenuCustom.vue';

export default {
	name: 'About',
	components: {
		menucustom
	}
};
</script>

<style scoped>
h1 {
	color: white;
}
</style>