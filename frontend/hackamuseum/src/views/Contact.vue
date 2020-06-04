<template>
	<div class="contact">
		<vue-headful title="Contact-us" description="Contact page of hackamuseum" />

		<menucustom />

		<h1>Contact us!!!</h1>

		<contactform v-on:send="send()" />

		<footercustom />
	</div>
</template>

<script>
import menucustom from '@/components/MenuCustom.vue';
import footercustom from '@/components/FooterCustom.vue';
import contactform from '@/components/ContactForm.vue';

export default {
	name: 'Contact',
	components: {
		menucustom,
		footercustom,
		contactform
	},
	methods: {
		send() {
			alert('Send');
		}
	}
};
</script>

<style scoped>
</style>