<template>
	<div class="cont">
		<br /><br /><br /><br />
		<img
			src="https://arhaan.vercel.app/assets/img/arhaanb-min.jpg"
			alt="Arhaan Bahadur"
		/>
		<br />
		<h4 class="name">Arhaan Bahadur</h4>
		<div class="yo noselect" style="margin-bottom: 1em">
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
		<p>
			I'm a {{ age || 17 }} year old student studying at The Mother's
			International School. I like building cool stuff. I enjoy participating in
			Hackathons and Design events, and I've won several of them over the last
			few years. You can view some of the
			<router-link to="/projects">projects</router-link> I built, or check out
			<a href="//github.com/arhaanb" target="_blank">my GitHub account</a>.
		</p>

		<p>
			I'm also the President of my school's technology and entrepreneurship club
			&mdash; <a href="//minet.co" target="_blank">MINET</a>. I make functional
			and useful products with beautiful user experiences. If you want to say hi
			or work with me, feel free to contact me on any of my socials.
		</p>
		<!-- <div class="center main">
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
		</div> -->
	</div>
</template>

<style scoped>
.yo,
.name {
	margin: 0;
}

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
