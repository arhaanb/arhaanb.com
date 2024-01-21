import App from './App.vue'
import { routes } from './routes.js'
import './assets/css/normal.css'
import './assets/css/skeleton.css'
import './assets/css/global.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'

const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth'
			}
		} else {
			return { top: 0 }
		}
	}
})

// @ts-ignore
app.use(AOS.init())

app.use(ContextMenu)

app.use(router)
app.mount('#app')
