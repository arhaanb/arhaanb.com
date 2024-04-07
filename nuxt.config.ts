// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	experimental: {
		asyncContext: true
	},
	css: [
		'@/assets/css/normal.css',
		'@/assets/css/skeleton.css',
		'@/assets/css/global.css'
	],
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag === 'iconify-icon'
		}
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			script: [
				{
					src: 'https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js',
					key: 'iconify-icon'
				}
			],
			title: 'Arhaan Bahadur',
			meta: [
				{ charset: 'UTF-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
				{ name: 'author', content: 'Arhaan Bahadur' },
				{ name: 'robots', content: 'index, follow' },
				{ name: 'googlebot', content: 'index, follow' },
				{
					name: 'description',
					content: 'Arhaan Bahadur — designer · developer'
				},
				{ name: 'twitter:site', content: '@arhaan_bahadur' },
				{ name: 'twitter:creator', content: '@arhaan_bahadur' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{
					name: 'twitter:image:alt',
					content: 'Arhaan Bahadur — designer · developer'
				},
				{ name: 'twitter:title', content: 'Arhaan Bahadur' },
				{
					name: 'twitter:description',
					content: 'Arhaan Bahadur — designer · developer'
				},
				{ name: 'twitter:image', content: 'https://arhaanb.com/arhn.png' },
				{ property: 'og:url', content: 'https://arhaanb.com' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'Arhaan Bahadur' },
				{
					property: 'og:description',
					content: 'Arhaan Bahadur — designer · developer'
				},
				{
					property: 'og:image',
					content: 'https://arhaanb.com/arhn.png?4362984378'
				},
				{ property: 'og:image:alt', content: 'Arhaan Bahadur' },
				{ property: 'og:image:width', content: '1280' },
				{ property: 'og:image:height', content: '720' },
				{ name: 'theme-color', content: '#FFD9AD' }
			],
			link: [
				{
					rel: 'preload',
					href: '/IBMPlexMono-Light.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: 'anonymous'
				},
				{
					rel: 'preload',
					href: '/augillion.otf',
					as: 'font',
					type: 'font/otf',
					crossorigin: 'anonymous'
				},
				{ rel: 'preconnect', href: 'https://api.fontshare.com' },
				{ rel: 'preconnect', href: 'https://cdn.fontshare.com' },
				{
					href: 'https://api.fontshare.com/css?f[]=satoshi@1&display=swap',
					rel: 'stylesheet'
				},
				{
					rel: 'icon',
					href: '/favicon.ico',
					type: 'image/ico',
					sizes: '256x256'
				},
				{ rel: 'shortcut icon', href: '/favicon.ico' }
			]
		}
	},
	modules: ['nuxt-aos', ['vue3-notion/nuxt', { css: true }], 'nuxt-gtag'],
	gtag: {
		id: 'G-402MKB1QXE'
	}
})
