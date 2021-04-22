import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/skeleton.css'
import './assets/global.css'

const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
	routes,
})

app.use(router)
app.mount('#app')
