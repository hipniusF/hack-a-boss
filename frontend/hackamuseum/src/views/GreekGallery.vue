<template>
	<div>
		<vue-headful title="Greek Gallery | Hackamuseum" description="Greek gallery page of hackamuseum" />

		<menucustom />

		<h2>{{title}}</h2>

		<gallerycustom :statues="greekStatues" />

		<footercustom />
	</div>
</template>

<script>
import menucustom from '@/components/MenuCustom.vue';
import footercustom from '@/components/FooterCustom.vue';
import gallerycustom from '@/components/GalleryCustom.vue';

export default {
	name: 'GreekGallery',
	components: {
		menucustom,
		footercustom,
		gallerycustom
	},
	data() {
		return {
			title: 'GREEK COLLECTION',
			greekStatues: [
				{
					name: 'Statue 1',
					photographer: 'Mary Shelly',
					urlImg:
						'https://images.unsplash.com/photo-1574352067721-72d5913bd35c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
				},
				{
					name: 'la estadura misteriosa',
					photographer: 'el barto',
					urlImg:
						'https://images.unsplash.com/photo-1575283309950-f67d01fdcabf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
				},
				{
					name: 'Statue 23',
					photographer: 'Mark',
					urlImg:
						'https://images.unsplash.com/photo-1548435094-267366b3e3df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
				},
				{
					name: 'LOLOLOLO',
					photographer: 'Internet',
					urlImg:
						'https://images.unsplash.com/photo-1554614427-42631b079dfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
				}
			]
		};
	}
};
</script>

<style scoped>
</style>