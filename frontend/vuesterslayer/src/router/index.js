import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Game from '../views/Game.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/fight',
		name: 'Game',
		component: Game
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '*',
		name: 'Error',
		component: () => import('../views/Error.vue')
	}
];

const router = new VueRouter({
	routes
});

export default router;
