<template>
	<main>
		<div class="cont">
			<!-- <img
			data-aos="fade-in"
			class="topimg"
			src="/me.jpeg"
			alt="Arhaan Bahadur"
			draggable="false"
		/>
			<br />-->

			<div data-aos="fade-in">
				<h4 style class="name fancy">arhaan bahadur</h4>
				<div class="yo zero" style="margin-bottom: 0.55em">
					<h6 class="zero">designer &middot; developer</h6>
				</div>

				<p class="zero" style="margin-bottom: 1em">
					<!-- Hello! I'm {{ `${prefix} ${age}` }} year old developer and designer,
					currently a freshman studying Computer Science. I enjoy participating
					in Hackathons and Design events, and I've won several of them over the
					last few years. Hello!-->
					I’m Arhaan, {{ `${prefix} ${age}` }} year old student currently
					studying cs and design at
					<a href="//iiitd.ac.in" target="_blank">iiit delhi</a>.
					<!-- <a href="//iiitd.ac.in" target="_blank">IIIT Delhi</a>.  -->
					I make
					<!-- <strike>at college</strike> -->
					<!-- functional and  -->
					cool products with beautiful user experiences.
					<!-- I enjoy participating
					in Hackathons and Design events, and I’ve won several of them over the
					last few years.-->
					<!-- You can view some of the
					<router-link to="/projects">projects</router-link> I built, or check
					out my
					<a
						rel="noopener noreferrer"
						href="//github.com/arhaanb"
						target="_blank"
						>GitHub account</a
					>.-->
				</p>

				<!-- <p>
					Recently, I co-founded
					<a rel="noopener noreferrer" href="//delhifoundry.co" target="_blank"
						>Delhi Design Foundry</a
					>, and I'm working there as a software engineer and designer.
					Previously, I was the President of my school's technology and
					entrepreneurship club &mdash;
					<a rel="noopener noreferrer" href="//minet.co" target="_blank"
						>MINET</a
					>.
				</p>-->

				<p class="zero">
					I’m always looking for opportunities to work on new projects,
					participate in a hackathon or do anything fun! Feel free to
					<nuxt-link to="/explore#contact">reach out</nuxt-link>!
				</p>
			</div>

			<!-- <img src="https://arhaanbahadur.co/me.jpeg" alt=""> -->
		</div>

		<div class="cont" style="max-width: 43em">
			<br />
			<Page
				data-aos="fade-up"
				title="Portfolio"
				data-aos-once="true"
				to="/projects"
				desc="I build stuff"
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="100"
				data-aos-once="true"
				title="Explore"
				to="/explore"
				desc="More arhaanb"
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="150"
				data-aos-once="true"
				title="Contact"
				to="/explore#contact"
				desc="Let's talk"
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="200"
				data-aos-once="true"
				title="Resume"
				to="https://arhaanb.com/resume"
				desc="Stuff I do"
				ext
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="250"
				data-aos-once="true"
				title="Support"
				to="https://www.buymeacoffee.com/arhaanb"
				desc="Buy me a coffee"
				ext
			/>

			<!-- <Page
				data-aos="fade-up"
				data-aos-delay="200"
				title="Resume"
				to="https://arhaanb.com/resume"
				desc="What I've been up to"
				ext
			/> -->
			<!-- <Page
				data-aos="fade-up"
				data-aos-delay="200"
				title="Posts"
				to="/posts"
				desc="Quick project reports"
			/> -->
		</div>

		<div class="cont">
			<div class="flex-center">
				<div class="six columns">
					<div class="flex-center">
						<!-- @contextmenu="onContextMenu($event)" -->
						<img
							draggable="false"
							loading="lazy"
							src="/polaroid.png"
							alt="me irl (fr)"
							class="topimg"
							style="margin-top: 3em; border-radius: 0.5em"
						/>
					</div>
					<!-- <h6 class="center" style="opacity: 0.7; margin-top: -0.5em">
						me irl
					</h6> -->
				</div>
				<div class="u-cf"></div>
			</div>
		</div>

		<!-- <div class="navcont">
			<div class="pics">
				<div class="picsgrid">
					<div v-for="img in links" :key="img">
						<img
							data-aos="fade-up"
							:src="img"
							alt="img"
							draggable="false"
							loading="lazy"
						/>
					</div>
				</div>
				<h6 class="center zero meirl">me &#38; my friends irl</h6>
				<h6 class="center" style="opacity: 0.7">me irl</h6>
			</div>
		</div> -->

		<!-- <div class="cont socialstuff">
			<h4>My socials</h4>
			<div class="socialgrid">
				<Page icon="ig" title="Instagram" />
				<Page title="Twitter" />
				<Page title="GitHub" />
				<Page title="Behance" />
				<Page title="Spotify" />
				<Page title="LinkedIn" />
				<Page title="Email" />
			</div>
		</div> -->
	</main>
</template>

<script>
export default {
	data() {
		return {
			age: 20,
			prefix: 'a'
		}
	},
	mounted() {
		const age = this.getAge('7/23/03')
		this.age = age
		this.prefix = [8, 11, 18].includes(age) ? 'an' : 'a'
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
		onContextMenu(e) {
			//prevent the browser's default menu
			e.preventDefault()
			//show our menu
			this.$contextmenu({
				items: [
					{
						label: 'Download image',
						onClick: () => {
							window.open('https://arhaanb.com/new_me.jpeg')
						}
					},
					// {
					// 	label: 'Copy image',
					// 	onClick: () => {
					// 		navigator.clipboard.write([
					// 			new ClipboardItem({
					// 				'image/png': 'https://arhaanb.com/new_me.jpeg'
					// 			})
					// 		])
					// 	}
					// },
					{
						label: 'Copy image address',
						onClick: () => {
							navigator.clipboard.writeText('https://arhaanb.com/new_me.jpeg')
						}
					},
					{
						label: 'Download polaroid',
						onClick: () => {
							window.open('https://arhaanb.com/polaroid.png')
						}
					},
					{
						label: 'Copy polaroid address',
						onClick: () => {
							navigator.clipboard.writeText('https://arhaanb.com/polaroid.png')
						}
					}
				],
				iconFontClass: 'iconfont',
				customClass: 'class-a',
				zIndex: 3,
				minWidth: 230,
				x: e.x,
				y: e.y
			})
		}
	}
}
</script>

<style scoped>
p {
	text-transform: lowercase;
}
.pics img {
	width: 100%;
}

.pics {
	margin-top: 2em;
	margin-bottom: 2.5em;
}
.picsgrid {
	display: grid;
	/* grid-gap: 3em; */
	grid-template-columns: repeat(3, 1fr);
}
.socialgrid {
	display: grid;
	/* grid-gap: 3em; */
	grid-template-columns: repeat(2, 1fr);
}
.meirl {
	/* margin-top: 2em; */
	font-size: 1.1em;
}
@media (max-width: 750px) {
	.meirl {
		margin-top: 0;
	}
	.picsgrid,
	.socialgrid {
		display: grid;
		/* grid-gap: 3em; */
		grid-gap: 0;
		grid-template-columns: repeat(1, 1fr);
	}
	.pics {
		margin-top: 0;
		margin-bottom: 0;
	}
}
.yo,
.name {
	margin: 0;
	font-size: 2.15em;
}

.name {
	margin-top: 1.5em;
	margin-bottom: -0.35em;
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
img.topimg {
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
	margin-top: 0.5em;
	width: 100% !important;
}
@media (max-width: 750px) {
	.topimg {
		margin-top: 0;
		width: 75% !important;
	}
	.name {
		margin-top: 0.75em;
	}
}
</style>
