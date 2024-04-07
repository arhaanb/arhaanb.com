<template>
	<div>
		<router-link v-if="!ext" :to="to ? to : '/'" class="flexer">
			<h5 class="main">{{ title ? title : 'Title' }}</h5>
			<!-- <h5 class="sep">|</h5> -->
			<h5 class="desc">{{ desc ? desc : null }}</h5>
		</router-link>
		<a v-else target="_blank" :href="to ? to : '/'" class="flexer">
			<h5 class="main">{{ title ? title : 'Title' }}</h5>
			<!-- <h5 class="sep">|</h5> -->
			<h5 class="desc">{{ desc ? desc : null }}</h5>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		to: String,
		desc: String,
		ext: Boolean
	}
}
</script>

<style lang="scss" scoped>
.flexer {
	display: flex;
	justify-content: start;
	align-items: center;
	padding: 0.75em 1em;
	border-radius: 0.5em;
	transition: 0.3s;
	h5 {
		margin: 0;
		font-size: 1.3em;
		&.desc {
			font-size: 1em;
		}
		&.main {
			width: 17%;
			// margin-right: 0.5em;
		}
		// &.sep {
		// 	margin-right: 1em;
		// 	color: #69e;
		// }
	}

	&:hover {
		background-color: rgba($color: #222, $alpha: 0.0575);
	}
}

@media (max-width: 750px) {
	.main {
		// 	width: auto !important;
		//   margin-right: 0.5em !important;
		width: 4.75em !important;
		margin-right: 0.5em !important;
	}
	.flexer {
		margin-bottom: 0.5em;
	}
}

.desc {
	opacity: 0.75;
}
</style>
