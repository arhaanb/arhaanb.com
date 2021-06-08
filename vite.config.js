import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

export default defineConfig({
	plugins: [
		vue(),
		ViteComponents({
			customComponentResolvers: [
				ViteIconsResolver({
					componentPrefix: ''
				})
			]
		}),
		ViteIcons()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src')
		}
	},
	server: {
		open: true
	}
})
