<template>
	<nuxt-link
		:to="item?.link || '#'"
		class="project"
		:target="
			item?.link && item?.link.startsWith('/')
				? '_self'
				: item?.link && item?.link.startsWith('http')
				? '_blank'
				: '_self'
		"
	>
		<img
			style="width: 100%"
			:src="
				item?.img ||
				'https://res.cloudinary.com/arhaanb/image/upload/spotivity.png'
			"
			alt=""
		/>

		<div class="info">
			<h4 class="zero fancy">{{ item?.name || '-' }}</h4>
			<p class="mb-3 desc">
				{{ item?.desc || 'No description avalable' }}
			</p>
			<p class="zero opacity-60 font-semibold">View project &rarr;</p>
		</div>
	</nuxt-link>
</template>

<script setup>
const props = defineProps({
	item: {
		type: Object
	}
})
</script>

<style lang="scss" scoped>
.project {
	padding: 1em;
	border-radius: 1em;
	transition: 0.2s;
	cursor: pointer;

	.desc {
		display: -webkit-box; /* Use flexbox layout to allow multi-line truncation */
		-webkit-line-clamp: 2; /* Limit the text to 2 lines */
		-webkit-box-orient: vertical; /* Ensure proper layout orientation */
		overflow: hidden; /* Hide overflowed text */
		text-overflow: ellipsis; /* Add ellipsis (...) at the end */
		line-height: 1.5; /* Set line height for the text */
		height: 3em; /* Ensure the height is 2 lines high */
	}
	// height: 32em;

	.fancy {
		text-transform: none;
		color: teal;
	}

	.info {
		padding: 1em;
		padding-top: 0.75em;
		padding-bottom: 0;
	}

	img {
		border-radius: 0.5em;
		aspect-ratio: 18/9;
		object-fit: cover;
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.025);
	}
}

@media (max-width: 750px) {
	.project {
		&:hover {
			background-color: transparent;
		}
	}
}
</style>
