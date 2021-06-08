// import App from './App.vue'
// import { routes } from './routes.js'
// import { ViteSSG } from 'vite-ssg'
// import NProgress from 'nprogress'
import './assets/normal.css'
import './assets/skeleton.css'
import './assets/global.css'

// export const createApp = ViteSSG(
// 	App,
// 	{
// 		routes,
// 		scrollBehavior(to, from, savedPosition) {
// 			return { top: 0 }
// 		}
// 	},
// 	({ app, router, isClient }) => {
// 		if (isClient) {
// 			router.beforeEach(() => {
// 				NProgress.start()
// 			})
// 			router.afterEach(() => {
// 				NProgress.done()
// 			})
// 		}
// 	}
// )


import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')