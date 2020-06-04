<template>
	<div>
		<vue-headful title="Roman Gallery | Hackamuseum" description="Roman gallery page of hackamuseum" />

		<menucustom />

		<h2>{{title}}</h2>

		<gallerycustom :statues="romanStatues" />

		<footercustom />
	</div>
</template>

<script>
import menucustom from '@/components/MenuCustom.vue';
import footercustom from '@/components/FooterCustom.vue';
import gallerycustom from '@/components/GalleryCustom.vue';

export default {
	name: 'RomanGallery',
	components: {
		menucustom,
		footercustom,
		gallerycustom
	},
	data() {
		return {
			title: 'ROMAN COLLECTION',
			romanStatues: [
				{
					name: 'Statue',
					photographer: 'Mary Shelly',
					urlImg:
						'https://images.unsplash.com/photo-1570620764320-c92b8facb70c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
				},
				{
					name: 'la estadura misteriosa',
					photographer: 'el barto',
					urlImg:
						'https://images.unsplash.com/photo-1588571590924-433cc2020a12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
				},
				{
					name: 'Statue 5',
					photographer: 'Marker',
					urlImg:
						'https://images.unsplash.com/photo-1567494472396-879c8909a768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
				},
				{
					name: 'Trevi',
					photographer: 'Roberto',
					urlImg:
						'https://images.unsplash.com/photo-1569397906655-7a1fce6866d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
				}
			]
		};
	}
};
</script>

<style scoped>
</style>