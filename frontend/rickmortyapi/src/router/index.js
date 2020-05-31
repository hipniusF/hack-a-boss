import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: { title: "About - MyApp" },
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
		meta: { title: "About - MyApp" },
	},
];

const router = new VueRouter({
	routes,
});

export default router;
