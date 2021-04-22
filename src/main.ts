import App from './App.vue'
import { routes } from './routes.js'
import { ViteSSG } from 'vite-ssg'
import NProgress from 'nprogress'
import './assets/skeleton.css'
import './assets/global.css'

// `export const createApp` is required
export const createApp = ViteSSG(
	// the root component
	App,
	// vue-router options
	{ routes },
	// function to have custom setups
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
