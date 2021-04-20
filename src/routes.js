import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{
		path: '/projects',
		meta: { title: 'Projects' },
		component: Projects,
		// component: () => import('./views/About.vue')
	},
	{ path: '/:path(.*)', component: NotFound },
]
