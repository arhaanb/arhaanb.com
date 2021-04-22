<template>
	<a
		@mouseleave="hover = false"
		:href="link || '//github.com/arhaanb'"
		target="_blank"
	>
		<div class="project">
			<div v-if="mobileLarger && hover" class="pop">
				<div>
					<img src="/img/cura.png" alt="Cura" />
				</div>
			</div>
			<div v-if="!mobileLarger" class="popmobile">
				<img src="/img/cura.png" alt="Cura" />
			</div>
			<div @mouseover="hover = true" @mouseleave="hover = false" class="info">
				<h4 class="name" v-html="name"></h4>
				<h5 class="description">
					<span v-if="desc" v-html="description"></span>
					<span v-else>This is a small description for the project above.</span>
				</h5>
			</div>
		</div>
	</a>
</template>

<script>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)

export default {
	props: { title: String, desc: String, link: String },
	data() {
		return {
			name: this.$props.title,
			description: this.$props.desc,
			hover: false,
			mobileLarger: breakpoints.greater('md'),
		}
	},
	methods: {
		getHover() {},
	},
}
</script>

<style lang="scss" scoped>
.name {
	margin: 0;
	font-weight: 700;
	margin-bottom: 0.2em;
	font-size: 1.1em;
}

.description {
	font-weight: 300;
	margin: 0;
	font-size: 0.9em;
}

.project {
	position: relative;
}
.pop {
	position: absolute;
	top: -8.5em;
	border-radius: 0.5em;
	width: 100%;
}
.pop img {
	width: 90%;
	border-radius: 0.5em;
}

a {
	border: none;
	opacity: 1;
}

.popmobile {
	img {
		width: 100%;
		border-radius: 0.5em;
		margin-bottom: 0.4em;
	}
	margin-top: 1em;
}
</style>