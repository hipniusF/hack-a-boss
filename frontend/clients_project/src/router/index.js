import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { isLoggedIn, checkIsAdmin } from '../api/utils';

Vue.use(VueRouter);

const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			allowAnonymous: false,
			allowOnlyAdmin: false
		}
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue'),
		meta: {
			allowAnonymous: false,
			allowOnlyAdmin: false
		}
	},
	{
		path: '/add',
		name: 'AddClient',
		component: () => import('../views/AddClient.vue'),
		meta: {
			allowAnonymous: false,
			allowOnlyAdmin: true
		}
	},
	{
		path: '/',
		name: 'Login',
		component: () => import('../views/Login.vue'),
		meta: {
			allowAnonymous: true,
			allowOnlyAdmin: false
		}
	},
	{
		path: '*',
		name: 'Error',
		component: () => import('../views/Error.vue'),
		meta: {
			allowAnonymous: true,
			allowOnlyAdmin: false
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
	} else if (to.meta.allowOnlyAdmin && !checkIsAdmin()) {
		next({
			name: 'Home',
			query: { redirect: to.fullPath }
		});
	} else {
		next();
	}
});

export default router;
