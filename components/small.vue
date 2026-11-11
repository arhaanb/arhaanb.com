<template>
	<component
		:is="inactive ? 'div' : 'a'"
		@mouseleave="hover = false"
		:href="inactive ? undefined : link || 'https://github.com/arhaanb'"
		:target="inactive ? undefined : '_blank'"
		:rel="inactive ? undefined : 'noopener noreferrer'"
		:class="{ inactive }"
		:title="inactive ? `${title} is no longer active` : undefined"
	>
		<div class="project">
			<div v-if="mobileLarger && hover" class="pop">
				<div>
					<img :src="img" :alt="title" />
				</div>
			</div>
			<div v-if="!mobileLarger" class="popmobile">
				<!-- <img loading="lazy" :src="img" class="mobileimg" :alt="title" /> -->
			</div>
			<div @mouseover="hover = true" @mouseleave="hover = false" class="info">
				<h4 class="name">
					<span v-html="name"></span>
					<span v-if="inactive" class="tag">inactive</span>
				</h4>
				<h5 class="description">
					<span v-if="desc" v-html="description"></span>
					<span v-else>This is a small description for the project above.</span>
				</h5>
			</div>
		</div>
	</component>
</template>

<script>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)

export default {
	props: {
		title: String,
		desc: String,
		link: String,
		img: String,
		inactive: Boolean
	},
	data() {
		return {
			name: this.$props.title,
			description: this.$props.desc,
			hover: false,
			mobileLarger: breakpoints.greater('md')
		}
	},
	methods: {
		getHover() { }
	}
}
</script>

<style lang="scss" scoped>
.name {
	margin: 0;
	margin-bottom: 0.2em;
	font-size: 1.1em;
	font-weight: 400;
}

.description {
	margin: 0;
	font-size: 0.9em;
	opacity: 0.8;
	font-weight: 300;
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

.inactive {
	cursor: default;
	.tag {
		display: inline-block;
		vertical-align: middle;
		margin-left: 0.5em;
		font-size: 0.55em;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		opacity: 0.55;
		border: 1px solid currentColor;
		padding: 0.15em 0.6em;
		border-radius: 100em;
		position: relative;
		top: -0.1em;
	}
}

.mobileimg {
	display: none;
}
</style>
