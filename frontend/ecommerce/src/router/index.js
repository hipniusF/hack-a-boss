import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Products.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Products',
		component: Home,
		meta: {
			allowAnonymous: false,
			onlyAdmins: false
		}
	},
	{
		path: '/clients',
		name: 'Clients',
		component: () => import('../views/Clients.vue'),
		meta: {
			allowAnonymous: false,
			onlyAdmins: true
		}
	},
	{
		path: '/add-client',
		name: 'AddClient',
		component: () => import('../views/AddClient.vue'),
		meta: {
			allowAnonymous: false,
			onlyAdmins: true
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
		meta: {
			allowAnonymous: true,
			onlyAdmins: false
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../views/Register.vue'),
		meta: {
			allowAnonymous: true,
			onlyAdmins: false
		}
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue'),
		meta: {
			allowAnonymous: true,
			onlyAdmins: false
		}
	},
	{
		path: '*',
		name: 'Error',
		component: () => import('../views/Error.vue'),
		meta: {
			allowAnonymous: true,
			onlyAdmins: false
		}
	}
];

const router = new VueRouter({
	routes
});

export default router;
