import App from './App.vue'
import { routes } from './routes.js'
import { ViteSSG } from 'vite-ssg'
import NProgress from 'nprogress'
import './assets/normal.css'
import './assets/skeleton.css'
import './assets/global.css'

export const createApp = ViteSSG(
	App,
	{ routes },
	({ app, router, isClient }) => {
		if (isClient) {
			router.beforeEach(() => {
				NProgress.start()
			})
			router.afterEach(() => {
				NProgress.done()
			})
		}
	}
)
