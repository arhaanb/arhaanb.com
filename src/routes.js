import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import Sahay from './views/projects/sahay.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{
		path: '/projects',
		meta: { title: 'Projects' },
		component: Projects
	},
	{ path: '/contact', component: Contact },
	{
		path: '/hi',
		meta: { title: 'Contact' },
		component: Contact
	},
	{ path: '/sahay', component: Sahay },
	{ path: '/404', component: NotFound, meta: { title: 'notfound' } },
	{ path: '/:pathMatch(.*)', component: NotFound, meta: { title: 'notfound' } }
]
