<template>
	<div data-aos="fade-up" data-aos-duration="500" class="project noselect">
		<component
			:is="link ? NuxtLink : 'div'"
			v-if="inactive"
			:to="link || undefined"
			class="link inactive"
			:class="{ archived: link }"
			:title="`${name} is no longer active`"
		>
			<div class="card">
				<img loading="lazy" class="img" :alt="name" :src="img" />
				<span class="tag">inactive</span>
				<div class="info">
					<h1 class="title">
						<span v-html="title"></span>
					</h1>
					<p class="txt" v-html="desc"></p>
				</div>
			</div>
		</component>

		<a
			rel="noopener noreferrer"
			v-else-if="!intlink"
			class="link"
			:href="link"
			target="_blank"
		>
			<div class="card">
				<img loading="lazy" class="img" :alt="name" :src="img" />
				<div class="info">
					<h1 class="title">
						<span v-html="title"></span>
					</h1>
					<p class="txt" v-html="desc"></p>
				</div>
			</div>
		</a>

		<nuxt-link v-else class="link" :to="link">
			<div class="card">
				<img loading="lazy" class="img" :alt="name" :src="img" />
				<div class="info">
					<h1 class="title">
						<span v-html="title"></span>
					</h1>
					<p class="txt" v-html="desc"></p>
				</div>
			</div>
		</nuxt-link>
	</div>
</template>

<script>
import { NuxtLink } from '#components'

export default {
	setup() {
		return { NuxtLink }
	},
	props: {
		name: String,
		description: String,
		link: String,
		img: String,
		intlink: Boolean,
		inactive: Boolean
	},
	data() {
		return {
			title: this.$props.name,
			desc: this.$props.description
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
	height: 15em;
	// width: 100%;
	// aspect-ratio: 16/9;
	border-radius: 1em;
	padding: 1.5em;
	background: white;
	position: relative;
	display: flex;
	align-items: flex-end;
	transition: 0.4s ease-out;
	&:hover {
		&:before {
			opacity: 1;
		}
		.info {
			opacity: 1;
			transform: translateY(0px);
		}
	}
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		background: rgba(black, 0.6);
		z-index: 2;
		transition: 0.5s;
		opacity: 0;
	}
	.img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 15px;
	}
	.info {
		position: relative;
		z-index: 3;
		color: white;
		opacity: 0;
		transform: translateY(30px);
		transition: 0.5s;
	}
	.title {
		margin: 0px;
		font-weight: 600;
	}
	.txt {
		margin: 0;
		line-height: 1.4em;
		margin-top: 0.1em;
		// margin-bottom: 0.5em;
	}
}
@media (max-width: 750px) {
	.card {
		height: 10em;
		padding-top: 5em;
		&:before {
			opacity: 1;
			// background: rgba(black, 0.25);
			background: linear-gradient(
				0deg,
				rgba(0, 0, 0, 0.75) 0%,
				rgba(0, 0, 0, 0.6) 50%,
				rgba(0, 0, 0, 0.3) 100%
			);
			// backdrop-filter: blur(1.25px);
		}
		.info {
			opacity: 1;
			transform: translateY(0px);
			h1 {
				font-size: 1.65em;
			}
		}
	}
}
.link {
	text-decoration: none;
}
.inactive {
	cursor: default;
	&.archived {
		cursor: pointer;
	}
	.tag {
		position: absolute;
		top: 1em;
		right: 1em;
		z-index: 3;
		font-size: 0.7em;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(white, 0.85);
		background: rgba(black, 0.3);
		backdrop-filter: blur(6px);
		padding: 0.3em 0.75em;
		border-radius: 100em;
		pointer-events: none;
	}
}
.project {
	margin-bottom: 1.55em;
}
</style>
