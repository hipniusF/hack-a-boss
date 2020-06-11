<template>
	<div class="about">
		<vue-headful title="About | Market" description="Home page of hackamarket" />

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
</style>
