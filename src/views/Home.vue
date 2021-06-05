<template>
	<div class="cont">
		<img class="topimg" src="../assets/arhaanb.jpg" alt="Arhaan Bahadur" />
		<br />
		<h4 class="name">Arhaan Bahadur</h4>

		<div class="yo noselect" style="margin-bottom: 1em">
			<router-link to="/projects">Projects</router-link>
			<router-link to="/hi">Say hi</router-link>
		</div>

		<p>
			I'm a {{ age }} year old student studying at The Mother's International
			School. I enjoy participating in Hackathons and Design events, and I've
			won several of them over the last few years. You can view some of the
			<router-link to="/projects">projects</router-link> I built, or check out
			<a href="//github.com/arhaanb" target="_blank">my GitHub account</a>.
		</p>

		<p>
			Recently, I co-founded
			<a href="//delhifoundry.co" target="_blank">Delhi Design Foundry</a> with
			a few of my friends, and I'm working there as a full-stack engineer and
			designer. In 2020, I was the President of my school's technology and
			entrepreneurship club &mdash;
			<a href="//minet.co" target="_blank">MINET</a>.
		</p>
		<p>
			I make functional and useful products with beautiful user experiences. If
			you want to say hi or work with me, feel free to
			<router-link to="hi">contact me</router-link> on any of my socials.
		</p>
	</div>
</template>

<script>
import Spotify from '../components/spotify.vue'
import Footer from '../components/footer.vue'

export default {
	components: { Spotify, Footer },
	data() {
		return {
			age: 17
		}
	},
	mounted() {
		const age = this.getAge('7/23/2003')
		this.age = age
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
		}
	}
}
</script>

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

.yo a {
	transition: 0.3s;
}

.yo a:hover {
	color: #69e;
}

.topimg {
	margin-top: 2em;
}

@media (max-width: 750px) {
	.topimg {
		margin-top: 0;
	}
}
</style>
