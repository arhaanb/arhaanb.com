<template>
	<main>
		<div class="container-sml">
			<h1 class="title">
				<nuxt-link to="/" class="forofour">404</nuxt-link>
			</h1>
			<p class="top">It seems like this page doesn't exist.</p>
			<p class="btm">
				Or you can
				<nuxt-link to="/">go back home</nuxt-link>, or
				<nuxt-link to="/explore#contact">contact me</nuxt-link> if you think
				this is a mistake.
			</p>
			<p>
				<nuxt-link class="homelink" to="/">&larr; Go home</nuxt-link>
			</p>
			<div v-if="!nosocials">
				<Footer />
			</div>
		</div>
	</main>
</template>

<script>
export default {
	props: {
		nosocials: Boolean
	}
}
</script>

<style lang="scss" scoped>
.homelink {
	border: none;
	transition: 0.2s;
	&:hover {
		background: transparent !important;
		opacity: 0.4;
	}
}

.forofour {
	border: none;
	opacity: 1;
	color: var(--red-text);
	/* color: rgb(8, 75, 119); */
	transition: 0.2s;
}

.forofour:hover {
	opacity: 0.75;
}

.container-sml {
	margin: 0 auto;
	padding: 0 2em;
	max-width: 25em;
}

p.top {
	margin: 0.5em 0;
}
p.btm {
	margin-bottom: 1em;
}
.yo {
	margin-top: 0;
}
p {
	opacity: 1;
}

.yo a {
	padding: 0.35em;
	font-size: 1.1em;
	transition: 0.2s;
}

.yo a:hover {
	color: chocolate;
}

.title {
	margin-top: 7em;
}
</style>
