<template>
	<main class="home">
		<div class="container-sml">
			<h1 class="title">
				<router-link to="/" class="forofour">404</router-link>
			</h1>
			<p class="top">
				It seems like you hit a route that doesn't exist. You might find what
				you're looking for at
				<a :href="`https://arhn.us${$route.fullPath}`" target="_blank">{{
					`arhn.us${$route.fullPath}`
				}}</a
				>.
			</p>
			<p class="btm">
				Or you can go back <router-link to="/">home</router-link>, and contact
				me if you think this is a mistake.
			</p>
			<div class="yo">
				<!-- <a
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
				> -->
				<a
					href="https://twitter.com/arhaan_bahadur"
					rel="noopener noreferrer"
					target="_blank"
				>
					<bx-bxl-twitter />
				</a>
				<a
					href="https://instagram.com/arhaan_bahadur"
					rel="noopener noreferrer"
					target="_blank"
				>
					<carbon-logo-instagram />
				</a>
				<a
					href="https://github.com/arhaanb"
					rel="noopener noreferrer"
					target="_blank"
				>
					<carbon-logo-github />
				</a>
				<a
					href="https://open.spotify.com/user/arhaanb"
					rel="noopener noreferrer"
					target="_blank"
				>
					<bx-bxl-spotify
				/></a>

				<a
					href="//linkedin.com/in/arhaanb"
					target="_blank"
					rel="noopener noreferrer"
				>
					<carbon-logo-linkedin />
				</a>

				<a
					href="mailto:hi@arhaanb.co"
					rel="noopener noreferrer"
					target="_blank"
				>
					<!-- hi@arhaanb.co -->
					<bx-bx-mail-send />
				</a>
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
}
</style>
