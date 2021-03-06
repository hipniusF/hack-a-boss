import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/contact-us',
		name: 'Contact',

		component: () => import('../views/Contact.vue')
	},
	{
		path: '/greek-gallery',
		name: 'GreekGallery',

		component: () => import('../views/GreekGallery.vue')
	},
	{
		path: '/roman-gallery',
		name: 'RomanGallery',

		component: () => import('../views/RomanGallery.vue')
	},
	{
		path: '/oriental-gallery',
		name: 'OrientalGallery',

		component: () => import('../views/OrientalGallery.vue')
	}
];

const router = new VueRouter({
	routes
});

export default router;
