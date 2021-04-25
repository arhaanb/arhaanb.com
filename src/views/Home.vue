<template>
	<div class="container">
		<div class="center main">
			<h1>
				<br />
				Arhaan Bahadur
			</h1>
			<h3 class="subtitle">I'm a designer and developer. I build stuff.</h3>
			<div class="nav">
				<router-link to="/about">About me</router-link>
				<router-link to="/projects">Projects</router-link>
				<router-link to="/hi">Say Hi</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
h1 {
	font-size: 5em;
	margin: 0;
}

.subtitle {
	margin: 0;
	font-size: 2em;
	font-weight: 500;
	opacity: 0.65;
	margin-top: -0.25em;
}

.subtitle a {
	border: none;
}

.main {
	margin-top: 12em;
}

img {
	width: 10em;
	border-radius: 0.5em;
	margin-bottom: 1em;
}

.vh {
	margin: 0 auto;
	max-width: 50em;
	margin-top: 20vh;
}

.sml {
	font-size: 0.5em;
}

.nav a {
	border: none;
	margin: 0 1em;
	font-size: 1em;
	letter-spacing: 0.05em;
	text-transform: uppercase;
}

.nav {
	margin-top: 1em;
}
</style>