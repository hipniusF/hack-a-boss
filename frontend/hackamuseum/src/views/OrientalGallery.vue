<template>
	<div>
		<vue-headful
			title="Oriental Gallery | Hackamuseum"
			description="Oriental gallery page of hackamuseum"
		/>

		<menucustom />

		<h2>{{title}}</h2>

		<gallerycustom :statues="orientalStatues" />

		<footercustom />
	</div>
</template>

<script>
import menucustom from '@/components/MenuCustom.vue';
import footercustom from '@/components/FooterCustom.vue';
import gallerycustom from '@/components/GalleryCustom.vue';

export default {
	name: 'OrientalGallery',
	components: {
		menucustom,
		footercustom,
		gallerycustom
	},
	data() {
		return {
			title: 'ORIENTAL COLLECTION',
			orientalStatues: [
				{
					name: 'Oriental Lion',
					photographer: 'Lee',
					urlImg:
						'https://images.unsplash.com/photo-1533552755457-5b471cb2ab11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
				},
				{
					name: 'la estadura misteriosa',
					photographer: 'el barto',
					urlImg:
						'https://images.unsplash.com/photo-1564956865626-35e4fcdeda41?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
				},
				{
					name: 'Ganusa',
					photographer: 'Dioces',
					urlImg:
						'https://images.unsplash.com/photo-1519485690996-be199575e2e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
				},
				{
					name: 'Statue 3',
					photographer: 'Marun',
					urlImg:
						'https://images.unsplash.com/photo-1566600233504-54fc534fcd43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
				}
			]
		};
	}
};
</script>

<style scoped>
</style>