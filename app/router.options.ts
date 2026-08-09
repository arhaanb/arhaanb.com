import type { RouterConfig } from '@nuxt/schema'
import { useNuxtApp, useRouter } from '#app'

function getHashElementTop(selector: string): number {
	try {
		const el = document.querySelector(selector)
		if (el) {
			return (
				(Number.parseFloat(getComputedStyle(el).scrollMarginTop) || 0) +
				(Number.parseFloat(
					getComputedStyle(document.documentElement).scrollPaddingTop
				) ||
					0)
			)
		}
	} catch {
		// ignore
	}
	return 0
}

export default <RouterConfig>{
	scrollBehavior(to, _from, savedPosition) {
		if (savedPosition && !to.hash) {
			return savedPosition
		}

		const nuxtApp = useNuxtApp()
		const router = useRouter()

		const position = to.hash
			? { el: to.hash, top: getHashElementTop(to.hash), behavior: 'smooth' as const }
			: { left: 0, top: 0 }

		return new Promise((resolve) => {
			const doScroll = () => {
				requestAnimationFrame(() => {
					if (router.currentRoute.value.fullPath !== to.fullPath) {
						resolve(false)
						return
					}
					resolve(position)
				})
			}
			nuxtApp.hooks.hookOnce('page:loading:end', () => {
				const transitionPromise: Promise<void> | undefined = nuxtApp[
					'~transitionPromise'
				]
				if (transitionPromise) {
					transitionPromise.then(doScroll)
				} else {
					doScroll()
				}
			})
		})
	}
}
