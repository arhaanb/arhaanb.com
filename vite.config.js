import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import Markdown from 'vite-plugin-md'

export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/]
		}),
		Markdown(),
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
