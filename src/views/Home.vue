<template>
	<main class="home">
		<div class="container">
			<h2 class="title">arhaanb</h2>
			<nav>
				<router-link to="/about">About me</router-link>
				<router-link to="/projects">Projects</router-link>
			</nav>
			<p>
				Hi &mdash; I'm <strong>Arhaan Bahadur</strong>. I'm a {{ age }} year old
				student studying at The Mother's International School. I like building
				cool stuff. I enjoy participating in Hackathons and Design events, and
				I've won several of them over the last few years. You can view some of
				the projects I built on
				<router-link to="/projects"><code>/projects</code></router-link> or
				<a href="//github.com/arhaanb" target="_blank">my GitHub account</a>.
			</p>

			<p>
				I'm also the President of my school's technology and entrepreneurship
				club &mdash; <a href="//minet.co" target="_blank">MINET</a>. I make
				functional and useful products with beautiful user experiences. If you
				want to say hi or work with me, feel free to contact me on any of my
				socials below.
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

<script>
export default {
	data() {
		return { age: 17 }
	},
	methods: {
		getAge(DOB) {
			var today = new Date()
			var birthDate = new Date(DOB)
			var age = today.getFullYear() - birthDate.getFullYear()
			var m = today.getMonth() - birthDate.getMonth()
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age = age - 1
			}

			return age
		},
	},
	mounted: function () {
		this.age = this.getAge('7/23/2003')
	},
}
</script>

<style lang="scss" scoped>
nav {
	margin-top: 0.5em;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
}

nav a {
	margin: 0 1em 0.5em 0;
}
</style>