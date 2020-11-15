import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/post',
		name: 'Post',
		component: () => import('@/views/Post.vue')
	},
	{
		path: '/update/:id',
		name: 'Update',
		component: () => import('@/views/Update.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router