<script setup>
// import { NotionRenderer, getPageBlocks, useGetPageBlocks } from 'vue3-notion'
import { projects } from './aaprojects.js'
// import { ref, onMounted } from 'vue'
// import { useRoute } from 'vue-router'
// // import Fourerr from '../NotFound.vue'
const { $notion } = useNuxtApp()
const { params } = useRoute()

definePageMeta({
	middleware: [
		function (to, from) {
			const { params } = to
			if (projects.find((x) => x.id == params.id)?.notion) {
				return
			} else {
				return abortNavigation('Not found')
			}
		}
	]
})

const { data } = await useAsyncData('notion', () =>
	$notion.getPageBlocks(projects.find((x) => x.id == params.id)?.notion)
)

// data.value = await useAsyncData('notion', () =>
// 	$notion.getPageBlocks(
// 		projects.find((x) => x.id == route.params.id)?.notion || undefined
// 	)
// )
// data.value = await getPageBlocks(
// 	projects.find((x) => x.id == route.params.id)?.notion || undefined
// )
</script>

<template>
	<main>
		<!-- {{ data }} -->
		<div class="cont notionblog" v-if="data">
			<NotionRenderer :blockMap="data" fullPage prism katex />
			<br />
		</div>
		<div v-else class="errnotion">
			<NotFound nosocials />
		</div>
		<!-- <div v-else class="cont">
			<Notionloader />
		</div> -->
	</main>
</template>

<style>
/* override notion styles */
ul.notion-list {
	padding-inline-start: 0;
	list-style-position: outside;
}

img {
	-webkit-user-drag: none;
	-khtml-user-drag: none;
	-moz-user-drag: none;
	-o-user-drag: none;
	user-drag: none;
}

.notion-callout .notion-emoji {
	font-size: 1.5em;
	line-height: 1.235em;
}

.notionblog p a:hover {
	background-color: none !important;
	/* color: aqua !important; */
}

.notion-title {
	margin-bottom: 0.2em;
}

.notion-h1 {
	margin-bottom: 0.3em !important;
}

.notion-text em {
	font-style: italic;
}

.notion-hr {
	border: none !important;
	width: 100%;
	height: 0.05em;
	background-color: #222;
	opacity: 0.3;
}

.notion-blank {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.notion-image-inset {
	border-radius: 0.25em;
}

.errnotion {
	margin-top: -5em;
	margin-bottom: 11em;
}

@media (max-width: 750px) {
	.errnotion {
		margin-top: -3em;
		margin-bottom: 12em;
	}
}
</style>
