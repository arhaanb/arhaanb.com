import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import { minifyHtml } from 'vite-plugin-html'

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
		ViteIcons(),
		minifyHtml()
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
