<template>
	<div class="youtube-embed">
		<iframe
			:src="`https://www.youtube.com/embed/${id}`"
			:title="title || 'YouTube video player'"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
			loading="lazy"
		></iframe>
	</div>
</template>

<script setup>
defineProps({
	id: { type: String, required: true },
	title: { type: String, default: '' }
})
</script>

<style scoped>
.youtube-embed {
	position: relative;
	width: 100%;
	padding-top: 56.25%;
	margin: 1.5em 0;
	border-radius: 0.75em;
	overflow: hidden;
	box-shadow: 0 2px 12px rgba(34, 34, 34, 0.12);
	border: 1px solid rgba(34, 34, 34, 0.08);
	background: #000;
}
.youtube-embed iframe {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
}
</style>
