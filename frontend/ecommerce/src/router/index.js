import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Products.vue';
import { isLoggedIn, checkIsAdmin } from '../api/auth';
import Swal from 'sweetalert2';

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
		},
		beforeEnter: (to, from, next) => {
			if (to.meta.onlyAdmins && !checkIsAdmin()) {
				next({
					name: 'Products',
					query: { redirect: to.fullPath }
				});
				Swal.fire({
					title: 'Sorry',
					text: 'This page is only allowed for admins',
					icon: 'error'
				});
			} else {
				next();
			}
		}
	},
	{
		path: '/add-client',
		name: 'AddClient',
		component: () => import('../views/AddClient.vue'),
		meta: {
			allowAnonymous: false,
			onlyAdmins: true
		},
		beforeEnter: (to, from, next) => {
			if (to.meta.onlyAdmins && !checkIsAdmin()) {
				next({
					name: 'Products',
					query: { redirect: to.fullPath }
				});
				Swal.fire({
					title: 'Sorry',
					text: 'This page is only allowed for admins',
					icon: 'error'
				});
			} else {
				next();
			}
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

router.beforeEach((to, from, next) => {
	if (!to.meta.allowAnonymous && !isLoggedIn()) {
		next({
			name: 'Login',
			query: { redirect: to.fullPath }
		});
	} else {
		next();
	}
});

export default router;
