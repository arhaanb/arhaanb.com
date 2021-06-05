declare interface Window {}

declare module '*.vue' {
	import { DefineComponent } from 'vue'
	const component: DefineComponent
	export default component
}

declare module '*.md' {
	import { ComponentOptions } from 'vue'
	const component: ComponentOptions
	export default component
}
