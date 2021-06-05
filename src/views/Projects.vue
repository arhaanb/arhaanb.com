<template>
	<div class="cont" @mouseleave="hover = false">
		<router-link to="/" class="back">&larr;</router-link>
		<h2 class="title">Projects</h2>
		<p class="zero">
			These are some of the projects I've built over the last couple of years.
		</p>
		<div class="bigproj">
			<Project
				name="Sahay"
				description="A collaborative experience for hospital management."
				link="https://sahay.us"
				img="/img/smlsahay.png"
			/>

			<Project
				name="MINET X"
				description="The Mother's International School's Interschool Tech Symposium."
				link="https://minet.co"
				img="//minet.co/assets/img/bhaif2.492faf76.gif"
			/>
			<!-- img="https://res.cloudinary.com/arhaanb/image/upload/v1612204131/minet_ywuug5.png" -->

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

		<hr />

		<div class="others">
			<div @mouseover="hover = false">
				<h2 class="othsmlproj">Other small projects</h2>
				<p>
					<!-- I made these projects mostly as a way to help me automate some of my
					manual work I didn't want to do. There's also some other small
					websites I made as a <i>freelancer</i>, or some other little apps I
					made just to test out a new technology or framework that I was
					interested in. -->
					I made some of these projects as a <i>freelancer</i>, or to help me
					automate some of my manual tiring work. There's also some
					<i>little apps</i> I made just to test out a new technology or
					framework that I was interested in learning.
				</p>
				<p>
					These small projects generally help me lay out the foundation for
					bigger projects that I build at hackathons or for the many events that
					I've organized.
				</p>
			</div>

			<div class="grid">
				<div
					v-for="p in smlProjects"
					:key="p.title"
					:class="{ active: hover, proj: true }"
					@mouseleave="hover = false"
				>
					<Small
						@mouseover="hover = true"
						@mouseleave="hover = false"
						:title="p.title"
						:desc="p.desc"
						:link="p.link"
						class="sml"
					/>
				</div>
			</div>

			<p class="zero">
				For more, you can check out my
				<a href="//github.com/arhaanb">GitHub (@arhaanb)</a>. Most of my
				projects are open source.
			</p>
		</div>
	</div>
</template>

<script>
import Project from '../components/project.vue'
import Footer from '../components/footer.vue'
import Small from '../components/small.vue'
import SmlProj from '../assets/data/smlproj.js'

export default {
	components: { Project, Small, Footer },
	data() {
		return {
			hover: false,
			smlProjects: SmlProj.projects
		}
	}
}
</script>

<style scoped>
.othsmlproj {
	font-size: 1.75em;
}

.others {
	margin-top: 3em;
	margin-bottom: 5em;
}

.bigproj {
	margin-top: 2em;
}

.title {
	margin-top: 2em;
}

.proj .sml {
	font-weight: 300;
	font-size: 1.2em;
	margin-bottom: 0.2em;
}

@media (min-width: 768px) {
	.active {
		opacity: 0.5;
		transition: 0.2s;
	}
}

.proj {
	transition: 0.3s;
}

.proj:hover {
	opacity: 1 !important;
}

.proj * {
	transition: 0.2s;
}

.grid {
	display: grid;
	grid-gap: 2em;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 3em;
	margin-bottom: 3em;
}

@media (max-width: 750px) {
	.grid {
		display: grid;
		grid-gap: 1.5em;
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
