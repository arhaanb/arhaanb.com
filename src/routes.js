import Home from './views/Home.vue'
// import Projects from './views/Projects.vue'
// import Explore from './views/Explore.vue'
import NotFound from './views/NotFound.vue'
// const Home = () => import('./views/Home.vue')
const Projects = () => import('./views/Projects.vue')
const Explore = () => import('./views/Explore.vue')
const Page = () => import('./views/projects/project.vue')
// const NotFound = () => import('./views/NotFound.vue')

// Projects
// import LinkPlus from './views/projects/linkplus.vue'
// import Notion from './views/projects/notion.vue'
// import Page from './views/projects/project.vue'

export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{
		path: '/projects',
		meta: { title: 'Projects' },
		component: Projects
	},
	{
		path: '/explore',
		meta: { title: 'Explore' },
		component: Explore
	},
	// {
	// 	path: '/notion',
	// 	meta: { title: 'Notion' },
	// 	component: Notion
	// },
	{
		path: '/projects/:proj',
		redirect: (to) => {
			return {
				path: `/p/${to.params.proj}`
			}
		}
	},
	{
		path: '/project/:proj',
		redirect: (to) => {
			return {
				path: `/p/${to.params.proj}`
			}
		}
	},
	{
		path: '/p',
		redirect: (to) => {
			return { path: `/projects` }
		}
	},
	{
		path: '/project',
		redirect: (to) => {
			return { path: `/projects` }
		}
	},
	{ path: '/p/:id', name: 'Page', component: Page },
	{ path: '/:pathMatch(.*)', component: NotFound, meta: { title: 'notfound' } }
]
