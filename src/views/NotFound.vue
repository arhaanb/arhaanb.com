<template>
	<main class="home">
		<div class="container-sml">
			<h1 class="title">
				<router-link to="/" class="forofour">404</router-link>
			</h1>
			<p>
				Yo &mdash; it seems like you hit a route that doesn't exist.
				<br class="none" />
				You can go back <router-link to="/">home</router-link>, or contact me if
				you think this is a mistake.
			</p>
			<div class="yo">
				<a
					href="https://twitter.com/arhaan_bahadur"
					rel="noopener noreferrer"
					target="_blank"
					>Twitter</a
				>
				<a
					href="https://instagram.com/arhaan_bahadur"
					rel="noopener noreferrer"
					target="_blank"
					>Instagram</a
				>
				<a
					href="https://github.com/arhaanb"
					rel="noopener noreferrer"
					target="_blank"
					>GitHub</a
				>
				<a
					href="https://open.spotify.com/user/arhaanb"
					rel="noopener noreferrer"
					target="_blank"
					>Spotify</a
				>
				<a href="mailto:hi@arhaanb.co" rel="noopener noreferrer" target="_blank"
					>hi@arhaanb.co</a
				>
			</div>
		</div>
	</main>
</template>


<style scoped>
.forofour {
	border: none;
	opacity: 1;
	color: rgb(8, 75, 119);
}

.forofour:hover {
	opacity: 0.75;
}

.container-sml {
	margin: 0 auto;
	padding: 0 2em;
	max-width: 25em;
}
</style>