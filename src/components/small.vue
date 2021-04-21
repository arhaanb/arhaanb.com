<template>
	<a :href="link || '//github.com/arhaanb'" target="_blank">
		<div class="project">
			<div v-if="hover" class="pop">
				<div class="flexj">
					<img src="/img/cura.png" alt="Cura" />
				</div>
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
export default {
	props: { title: String, desc: String, link: String },
	data() {
		return {
			name: this.$props.title,
			description: this.$props.desc,
			hover: false,
		}
	},
}
</script>

<style scoped>
.name {
	margin: 0;
	font-weight: 700;
	margin-bottom: 0.2em;
}

.description {
	font-weight: 300;
	margin: 0;
}

.project {
	padding: 0 1em 1em 0;
	position: relative;
}
.pop {
	position: absolute;
	top: -8.5em;
	/* background-color: #fff; */
	border-radius: 0.5em;
	width: 100%;
}
.pop img {
	width: 90%;
	/* margin: 0.5em 0.5em; */
	border-radius: 0.5em;
}

a {
	border: none;
	opacity: 1;
}
</style>