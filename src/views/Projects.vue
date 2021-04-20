<template>
	<main class="container">
		<router-link to="/" class="back">&larr;</router-link>
		<h2 class="title">Projects</h2>
		<p class="zero">
			These are some of the projects I've built over the last couple of years.
		</p>
		<div class="bigproj">
			<Project
				name="MINET X"
				description="Interschool Tech Symposium."
				link="https://minet.co"
				img="https://res.cloudinary.com/arhaanb/image/upload/v1612204131/minet_ywuug5.png"
			/>

			<Project
				name="Cura"
				description="An app that helps you get vaccinated."
				link="https://arhaanb.co/cura"
				img="/img/cura.png"
			/>

			<Project
				name="Sabre &mdash; <i>from The Office</i>"
				description="A redesign for the printer company from the TV Show."
				link="https://minet.co"
				img="/img/sabre.png"
			/>

			<Project
				name="Ponder"
				description="An app to help creative professionals <i>think better</i>."
				link="https://arhaanb.co/ponder"
				img="/img/ponder.png"
			/>
		</div>

		<div class="others">
			<h2><strong>Other small projects</strong></h2>
			<p>
				I made these projects mostly as a way to help me automate some of my
				manual dumb work I didn't want to do. There's also some other small
				websites I made as a <i>freelancer</i>, or some other little apps I made
				just to test out a new technology or framework that I was interested in.
			</p>
			<p>
				These small projects generally help me lay out the foundation for the
				bigger projects I build for hackathons or the many events that I've
				organized.
			</p>

			<div class="proj">
				<h5>SiteBlock</h5>
				<h5>Kuizu</h5>
				<h5>Mail Merge</h5>
				<h5>X 2020 Quiz App</h5>
				<h5>Ponder</h5>
				<h5>Safar</h5>
				<h5>BROKEN: Movie</h5>
				<h5>Raghav Thakar</h5>
				<h5>Dhruva Goyal</h5>
				<h5>Sabre <i>from the TV Show &mdash; The Office</i></h5>
			</div>

			<p>
				For more, you can check out my
				<a href="//github.com/arhaanb">GitHub (@arhaanb)</a>. Most of my
				projects are open source.
			</p>
		</div>
	</main>
</template>

<script>
import Project from '../components/project.vue'

export default {
	components: { Project },
}
</script>

<style scoped>
.others {
	margin-top: 3em;
	margin-bottom: 5em;
}

.bigproj {
	margin-top: 2em;
}

.back {
	position: absolute;
	top: 2em;
	left: 6em;
	font-size: 1.25em;
	border: none;
}

.title {
	margin-top: 2em;
}
</style>