import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{
		path: '/projects',
		meta: { title: 'Projects' },
		component: Projects,
	},
	{
		path: '/about',
		meta: { title: 'About' },
		component: About,
		// component: () => import('./views/About.vue')
	},
	{
		path: '/hi',
		meta: { title: 'Contact' },
		component: Contact,
	},
	{ path: '/:path(.*)', component: NotFound },
]
