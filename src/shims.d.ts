declare interface Window {}

declare module '*.vue' {
	import { DefineComponent } from 'vue'
	const component: DefineComponent
	export default component
}
