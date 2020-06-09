import Vue from 'vue';
import VueRouter from 'vue-router';
import Todo from '../views/Todo.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Todo',
		component: Todo
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
