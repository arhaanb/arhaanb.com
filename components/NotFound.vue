<template>
	<div class="notfound">
		<p class="code">404</p>
		<p class="line">this page doesn't exist</p>
		<p class="desc">
			It may have been moved, or the link you followed was broken.
		</p>
		<div class="links">
			<nuxt-link to="/" class="link">&larr; go back home</nuxt-link>
			<nuxt-link to="/explore#contact" class="link">contact me</nuxt-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.notfound {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 0 1.5em;
}

.code {
	font-family: 'augillion', var(--fontSans);
	color: var(--red-text);
	text-transform: lowercase;
	font-size: 7em;
	line-height: 1;
	margin: 0;
}

.line {
	font-size: 1.5em;
	font-weight: 500;
	opacity: 0.65;
	margin: 0.75em 0 0;
}

.desc {
	font-size: 1.15em;
	opacity: 0.9;
	max-width: 32ch;
	line-height: 1.55;
	margin: 0.5em 0 1.75em;
}

.links {
	display: flex;
	gap: 1.4em;
	flex-wrap: wrap;
	justify-content: center;
}

.link {
	color: #222;
	text-decoration: none;
	border-bottom: 1px dashed #abb0b6;
	padding-bottom: 0.1em;
	font-size: 1.05em;
	transition: 0.2s;

	&:hover {
		border-bottom-color: var(--red-text);
		color: var(--red-text);
	}
}
</style>
