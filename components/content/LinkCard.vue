<template>
	<a :href="href" target="_blank" rel="noopener noreferrer" class="linkcard">
		<div class="linkcard-body">
			<h4>{{ title }}</h4>
			<p v-if="desc">{{ desc }}</p>
		</div>
		<span class="linkcard-arrow">
			<iconify-icon icon="mdi:arrow-top-right" />
		</span>
	</a>
</template>

<script setup>
defineProps({
	href: { type: String, required: true },
	title: { type: String, required: true },
	desc: { type: String, default: '' }
})
</script>

<style scoped>
.linkcard {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1em;
	padding: 1em 1.25em;
	border-radius: 0.75em;
	background: #fff;
	border: 1.5px solid #222;
	color: #222;
	transition: 0.25s;
	margin: 0.7em 0;
}
.linkcard:hover {
	background: rgba(146, 184, 250, 0.22);
	transform: translateY(-1px);
}
.linkcard h4 {
	margin: 0;
	font-size: 1.05em;
	font-weight: 700;
	color: #222;
}
.linkcard p {
	margin: 0.2em 0 0;
	opacity: 0.7;
	font-size: 0.9em;
	color: #222;
}
.linkcard-arrow {
	font-size: 1.3em;
	flex-shrink: 0;
	color: #222;
	opacity: 0.6;
}
.linkcard:hover .linkcard-arrow {
	opacity: 1;
}
</style>
